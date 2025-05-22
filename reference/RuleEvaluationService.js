import _ from "lodash";
import * as models from 'openchs-models';
import {RuleDependency} from 'openchs-models';
import {ChecklistDetail, OrganisationConfig} from 'avni-models';
import {
    common,
    encounterDecision,
    familyRegistrationDecision,
    individualRegistrationDecision,
    motherCalculations,
    programEncounterDecision,
    programEnrolmentDecision
} from "avni-health-modules";
import * as rulesConfig from "rules-config";
import moment from "moment";

const GlobalRuleUUID = "8ae72815-5670-40a4-b8b6-e457d0dff8ad";

function getImports(globalFn) {
    return {rulesConfig, common, lodash, moment, motherCalculations, log: console.log, globalFn};
}

function getGlobalRuleFunction(ruleService) {
    const globalRuleDependency = ruleService.findByUUID(GlobalRuleUUID, RuleDependency.schema.name);
    if (!_.isNil(globalRuleDependency)) {
        try {
            return eval(globalRuleDependency.code);
        } catch (e) {
            General.logDebug("RuleEvaluationService", "Global Rule failed");
            General.logError("RuleEvaluationService", e);
            ruleService.saveFailedRules(e, GlobalRuleUUID, null, 'GlobalRule', GlobalRuleUUID, null, null);
        }
        return null;
    }
}

@Service("ruleEvaluationService")
class RuleEvaluationService extends BaseService {
    constructor(db, context) {
        super(db, context);
        this.getEntityDecision = this.getEntityDecision.bind(this);

        //this is deprecated
        global.ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
    }

    getIndividualUUID(entity, entityName) {
        switch (entityName) {
            case 'Individual':
                return entity.uuid;
            case 'ProgramEnrolment':
                return entity.individual.uuid;
            case 'ProgramEncounter':
                return entity.programEnrolment.individual.uuid;
            case 'Encounter':
                return entity.individual.uuid;
            case 'WorkList':
                return entity.getCurrentWorkItem().id;
            default:
                return "entity not mapped";
        }
    };

    getEntityDecision(form, entity, context, entityName, entityContext) {
        const defaultDecisions = {
            "enrolmentDecisions": [],
            "encounterDecisions": [],
            "registrationDecisions": []
        };
        const trimDecisionsMap = (decisionsMap) => {
            const trimmedDecisions = {};
            _.forEach(decisionsMap, (decisions, decisionType) => {
                trimmedDecisions[decisionType] = _.reject(decisions, _.isEmpty);
            });
            return trimmedDecisions;
        };

        if ([form, entity].some(_.isEmpty)) return defaultDecisions;
        const rulesFromTheBundle = this.getAllRuleItemsFor(form, "Decision", "Form");

        if (!_.isNil(form.decisionRule) && !_.isEmpty(_.trim(form.decisionRule))) {
            const individualUUID = this.getIndividualUUID(entity, entityName);

            let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
            const ruleFunc = eval(form.decisionRule);
            const ruleDecisions = ruleFunc({
                params: _.merge({decisions: defaultDecisions, entity, entityContext}, this.getCommonParams()),
                imports: getImports(this.globalRuleFunction)
            });
        }
        return defaultDecisions;
    }

    getRuleServiceLibraryInterfaceForSharingModules() {
        return {
            log: console.log,
            common,
            motherCalculations,
            models
        };
    }

    updateWorkLists(workLists, context, entityName) {
        const orgConfig = this.findOnly(OrganisationConfig.schema.name);
        if (_.isEmpty(orgConfig)) return workLists;
        const worklistUpdationRule = orgConfig.worklistUpdationRule;
        if (!_.isNil(worklistUpdationRule) && !_.isEmpty(_.trim(worklistUpdationRule))) {
            const ruleFunc = eval(worklistUpdationRule);
            return ruleFunc({
                params: _.merge({context, workLists}, this.getCommonParams()),
                imports: {rulesConfig, common, lodash, moment, models, globalFn: this.globalRuleFunction}
            });
        }

        return workLists;
    }

    runEditFormRule(form, entity, entityName) {
        const ruleFunc = eval(form.editFormRule);
        const ruleResponse = ruleFunc({
            params: _.merge({entity, form}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    getEnrolmentSummary(enrolment, entityName = 'ProgramEnrolment', context) {
        const program = enrolment.program;
        let rulesFromTheBundle = this.getAllRuleItemsFor(program, "EnrolmentSummary", "Program");
        if (!_.isNil(program.enrolmentSummaryRule) && !_.isEmpty(_.trim(program.enrolmentSummaryRule))) {
            return this._getEnrolmentSummaryFromEntityRule(enrolment, entityName);
        } else if (!_.isEmpty(rulesFromTheBundle)) {
            return this._getEnrolmentSummaryFromBundledRules(rulesFromTheBundle, enrolment, entityName, context);
        }
        return [];
    }

    getSubjectSummary(individual, entityName = 'Individual', context) {
        const subjectType = individual.subjectType;
        if (!_.isNil(subjectType.subjectSummaryRule) && !_.isEmpty(_.trim(subjectType.subjectSummaryRule))) {
            let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
            const ruleFunc = eval(subjectType.subjectSummaryRule);
            let summaries = ruleFunc({
                params: _.merge({summaries: [], individual, context}, this.getCommonParams()),
                imports: getImports(this.globalRuleFunction)
            });
        }
        return [];
    }

    async getSubjectProgramEligibilityStatuses(individual, programs, authToken) {
        const subjectType = individual.subjectType;
        let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
        const ruleFunc = eval(subjectType.programEligibilityCheckRule);
        const subjectProgramEligibilityStatuses = await ruleFunc({
            params: _.merge({individual, programs, authToken}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    validateViaFormRule(form, entity, entityContext, entityName) {
        let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
        const ruleFunc = eval(form.validationRule);
        return ruleFunc({
            params: _.merge({entity, entityContext}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    async validateViaFormRuleAsyncInternal(form, entity, entityContext, entityName) {
        let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
        const authService = this.context.getService(AuthService);
        const authToken = await authService.getAuthProviderService().getAuthToken();
        const ruleFunc = eval(form.validationRule);
        return ruleFunc({
            params: _.merge({entity, entityContext, authToken: authToken}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    getNextScheduledVisits(entity, entityName, visitScheduleConfig, entityContext = {}) {
        let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
        const ruleFunc = eval(form.visitScheduleRule);
        const nextVisits = ruleFunc({
            params: _.merge({visitSchedule: scheduledVisits, entity, entityContext}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
        this.checkIfScheduledVisitsAreValid(nextVisits);
        return nextVisits;
    }

    getChecklists(entity, entityName, defaultChecklists = []) {
        const allChecklistDetails = this.findAll(ChecklistDetail.schema.name);
        const ruleFunc = eval(form.checklistsRule);
        const allChecklists = ruleFunc({
            params: _.merge({entity, checklistDetails: allChecklistDetails}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    runFormElementStatusRule(formElement, entity, entityName, entityContext, questionGroupIndex, mapOfBundleFormElementStatuses) {
        let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
        const ruleFunc = eval(formElement.rule);
        return ruleFunc({
            params: _.merge({formElement, entity, questionGroupIndex, entityContext}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
    }

    isEligibleForEncounter(individual, encounterType) {
        const rulesFromTheBundle = this.getAllRuleItemsFor(encounterType, "EncounterEligibilityCheck", "EncounterType");
        if (!_.isNil(encounterType.encounterEligibilityCheckRule) && !_.isEmpty(_.trim(encounterType.encounterEligibilityCheckRule))) {
            let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
            const ruleFunc = eval(encounterType.encounterEligibilityCheckRule)
            return ruleFunc({
                params: _.merge({entity: individual}, this.getCommonParams()),
                imports: getImports(this.globalRuleFunction)
            });
        }
    }

    isEligibleForProgram(individual, program) {
        const rulesFromTheBundle = this.getAllRuleItemsFor(program, "EnrolmentEligibilityCheck", "Program");
        // TODO: Move the rules in the bundle to actual entities.
        if (!_.isNil(program.enrolmentEligibilityCheckRule) && !_.isEmpty(_.trim(program.enrolmentEligibilityCheckRule))) {
            let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
            const ruleFunc = eval(program.enrolmentEligibilityCheckRule);
            return ruleFunc({
                params: _.merge({entity: individual, program}, this.getCommonParams()),
                imports: getImports(this.globalRuleFunction)
            });
        }
    }

    isManuallyEligibleForProgram(subject, program, subjectProgramEligibility) {
        if (!_.isNil(program.manualEnrolmentEligibilityCheckRule) && !_.isEmpty(_.trim(program.manualEnrolmentEligibilityCheckRule))) {
            let ruleServiceLibraryInterfaceForSharingModules = this.getRuleServiceLibraryInterfaceForSharingModules();
            const ruleFunc = eval(program.manualEnrolmentEligibilityCheckRule);
            return ruleFunc({
                params: _.merge({entity: subjectProgramEligibility, subject, program}, this.getCommonParams()),
                imports: getImports(this.globalRuleFunction)
            });
        }

        return true;
    }

    executeDashboardCardRule(reportCard, ruleInput) {
        const ruleFunc = eval(reportCard.query);
        const result = ruleFunc({
            params: _.merge({ruleInput: ruleInput}, this.getCommonParams()),
            imports: getImports(this.globalRuleFunction)
        });
        return result;
    }

    evaluateLinkFunction(linkFunction, menuItem, user, authToken) {
        const ruleFunc = eval(linkFunction);
        return ruleFunc({
            params: _.merge({moment: moment, token: authToken}, this.getCommonParams(true))
        });
    }

    getCommonParams(excludeDBAccess = false) {
        const user = this.getService(UserInfoService).getUserInfo();
        const myUserGroups = this.getService(PrivilegeService).ownedGroups();

        return excludeDBAccess ? {user, myUserGroups} :
            {db: this.db, services: this.services, user, myUserGroups};
    }
}

export default RuleEvaluationService;
