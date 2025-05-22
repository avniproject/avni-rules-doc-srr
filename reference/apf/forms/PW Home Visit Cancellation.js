{
  "name": "PW Home Visit Cancellation",
  "uuid": "a30962ee-0929-4568-b3d3-12762792365c",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "627882f6-d0cf-488f-b699-f59db2a995e1",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "715c667e-f0f9-48d3-be61-8746875ee7e4",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Absent",
                "Defaulter",
                "Away from village",
                "Sick"
              ]
            }
          ],
          "concept": {
            "name": "Cancel reason",
            "uuid": "f0a6eee8-3421-46cb-a500-309127e98231",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sick",
                "uuid": "5686e4c8-7551-4d1b-8ed8-dbe8c6f38e2b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Away from village",
                "uuid": "f8a0eaf5-cfc0-4231-9d21-669d6402f71d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Defaulter",
                "uuid": "f9ba64b3-021d-411f-aa1c-84ae82f79047",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Migrated to other geography",
                "uuid": "83caedd7-16a7-4346-941c-342eadb97c18",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Delivery/Abortion",
                "uuid": "1d98de98-c449-4d9f-93ce-f70bb233f509",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "3607ff60-534b-46aa-b7a7-83edec491994",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Other reason for cancelling the visit",
          "uuid": "98963143-9a85-48cd-b2a9-f46d13d4ed4c",
          "keyValues": [],
          "concept": {
            "name": "Other reason for cancelling the visit",
            "uuid": "7ce99999-c243-4502-afaf-52da5f674ab7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInCancelEncounter("f0a6eee8-3421-46cb-a500-309127e98231").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "cancelEncounter",
                          "conceptName": "Cancel reason",
                          "conceptUuid": "f0a6eee8-3421-46cb-a500-309127e98231",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "f169230d-809b-4d06-9ccb-96586977bb68"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({programEncounter});
    
    const currentlyActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;

    const condition11 = new imports.rulesConfig.RuleCondition({programEncounter}).when.valueInCancelEncounter("f0a6eee8-3421-46cb-a500-309127e98231").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();

function getPWHomeVisitDate(qrtEncounterDate) {
    const intervalInDays = imports.moment(programEncounter.earliestVisitDateTime).diff(imports.moment(qrtEncounterDate), 'days');

        let daysToAdd = 0;
        if (intervalInDays <= 15) {
            daysToAdd = 30;
        } else if (intervalInDays <= 30) {
            daysToAdd = 45;
        } else if (intervalInDays <= 45) {
            daysToAdd = 60;
        }

        return daysToAdd !== 0 ? imports.moment(qrtEncounterDate).add(daysToAdd, 'days').toDate() : null;
}

    function getLatestQRTVist() {
        const lastQRTVisitEncounters = programEncounter.programEnrolment.getEncountersOfType('QRT PW', false);
        const latestEncounter = _.chain(lastQRTVisitEncounters)
            .filter((encounter) => encounter.encounterDateTime && encounter.voided == false)
            .maxBy((encounter) => encounter.encounterDateTime)
            .value();
        return latestEncounter;
    }
    
    const cancelledPWHomeVisits = _.chain(
        programEncounter.programEnrolment.getEncountersOfType('PW Home Visit', false))
    .filter((encounter) => encounter.cancelDateTime)
    .some((encounter) => encounter.uuid === programEncounter.uuid)
    .value();
    
    const qrtEncounter = getLatestQRTVist();
    if (currentlyActiveInProgram && qrtEncounter && condition11 && !cancelledPWHomeVisits) {
        
        const qrtEncounterDate = qrtEncounter ? imports.moment(qrtEncounter.encounterDateTime).toDate() : null;
        const visitDate = getPWHomeVisitDate(qrtEncounterDate);
       if(visitDate){
        scheduleBuilder
            .add({
                name: "PW Home Visit",
                encounterType: "PW Home Visit",
                earliestDate: imports.moment(visitDate).toDate(),
                maxDate: imports.moment(visitDate).add(7, 'days').toDate()
            });
        }
    }

    return scheduleBuilder.getAll()
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}