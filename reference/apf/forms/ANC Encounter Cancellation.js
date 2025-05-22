{
  "name": "ANC Encounter Cancellation",
  "uuid": "a9411e3b-0122-4a09-a892-960a556cff33",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "9bb15f31-71e4-4de6-8daa-1b60d21ac55c",
      "name": "Cancel Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "87f9387e-fd30-4184-bc8c-268afcf6b23e",
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
          "uuid": "02fe407c-c362-40e6-b79e-f538b4e05655",
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
      "display": "Cancel Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "
"use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const moment = imports.moment;
  const _ = imports.lodash;
  let visitDate = programEncounter.encounterDateTime || programEncounter.earliestVisitDateTime;
  

   
   /*     
    const visitScheduleCriteria = [60, 170, 260, 270];

    const getDaysNeedsToBeAdd = function (duration) {
        let found = _.find(visitScheduleCriteria, function (currentCriteria) {
            return (duration + 7) <= currentCriteria;
        });
        return found;
    };

    const LMP = programEncounter.programEnrolment.getObservationValue('Last menstrual period');
    const EDD = programEncounter.programEnrolment.getObservationValue('Estimated date of delivery');
    const durationFromLMPToEncounter = moment(visitDate).diff(moment(LMP), 'Days');
    const earliestDate = moment(LMP).add(getDaysNeedsToBeAdd(durationFromLMPToEncounter), 'days').toDate();

    let visitNumber = programEncounter.programEnrolment.getEncountersOfType("ANC", false)
    .filter((enc) => !_.isNil(enc.encounterDateTime) === true || !_.isNil(enc.cancelDateTime) === true).length + 2;
    if (durationFromLMPToEncounter < 270 && programEncounter.programEnrolment.hasEncounter('Delivery', 'Delivery') === false) {
        scheduleBuilder.add({
            name: 'ANC ' + visitNumber,
            encounterType: 'ANC',
            earliestDate: earliestDate,
            maxDate: moment(earliestDate).add(2, 'days').toDate()
        });
    }
    */
    
    
  const condition0 = ! programEncounter.programEnrolment.programExitDateTime;
  
  const scheduledOrCompletedEncountersOfType = (type,nextVisitDate) => {
      const nextDateMonth = moment(nextVisitDate).month();
      const nextDateYear = moment(nextVisitDate).year();          
      const data = programEncounter.programEnrolment.encounters.filter((enc)=> enc.encounterType.name === type && enc.voided == false && enc.cancelDateTime == null && moment(enc.earliestVisitDateTime).year()==nextDateYear  && moment(enc.earliestVisitDateTime).month()==nextDateMonth )
      return data;
  }
  
  const nextDate = moment(programEncounter.earliestVisitDateTime).add(1,'M').startOf('month').add('6','H').toDate();
  const condition1 = scheduledOrCompletedEncountersOfType("ANC",nextDate).length == 0;
  const condition2 = ! programEncounter.programEnrolment.hasCompletedEncounterOfType('Delivery');
  const condition3 = ! new imports.rulesConfig.RuleCondition({programEncounter}).when.valueInCancelEncounter("f0a6eee8-3421-46cb-a500-309127e98231").containsAnswerConceptNameOtherThan("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  

  
  if(condition0 && condition1 && condition2 && condition3){
      scheduleBuilder.add({
            name: 'ANC',
            encounterType: 'ANC',
            earliestDate: nextDate,
            maxDate: moment(nextDate).endOf('month').toDate()
        });
  }

/*
    
    if (durationFromLMPToEncounter > 260 && programEncounter.programEnrolment.hasEncounter('Delivery', 'Delivery') === false) {
        scheduleBuilder.add({
            name: 'Delivery',
            encounterType: 'Delivery',
            earliestDate: moment(EDD).toDate(),
            maxDate: moment(EDD).add(2, 'days').toDate()
        });
    }
  */  
  
 return scheduleBuilder.getAllUnique('name');
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}