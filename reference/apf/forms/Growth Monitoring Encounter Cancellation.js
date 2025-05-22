{
  "name": "Growth Monitoring Encounter Cancellation",
  "uuid": "7111e360-8815-4b34-aef9-be4f084c7f81",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "3107ef09-4a96-4dcf-866f-74c9794cafb6",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "d5dea6d6-a7e9-4fd9-b153-45aa81b0a697",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Absent",
                "Defaulter",
                "Away from village",
                "Delivery/Abortion",
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
          "uuid": "e2805d82-1500-44f1-b590-0041b43ca44b",
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
({params, imports}) => {
    const programEncounter = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEncounter
    });
    const moment = imports.moment;
    const _ = imports.lodash;

    const currentlyActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;

    if(currentlyActiveInProgram){
        
        const earliestDate = moment(programEncounter.earliestVisitDateTime).add(1, 'month').startOf('month').add('6','H').toDate();
        let isEditScenario = programEncounter.programEnrolment.encounters.some((enc) =>
            enc.encounterType.name === 'Growth Monitoring' &&
            enc.voided === false &&
            moment(enc.earliestVisitDateTime).isSame(earliestDate, 'day')
        );

        if(programEncounter.programEnrolment.individual.getAgeInYears() < 5 && !isEditScenario) {
            scheduleBuilder.add({
                name: 'Growth Monitoring',
                encounterType: 'Growth Monitoring',
                earliestDate: earliestDate,
                maxDate: moment(earliestDate).endOf('month').toDate()
            });
        }
    }

    return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}