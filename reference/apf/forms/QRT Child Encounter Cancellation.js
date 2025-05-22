{
  "name": "QRT Child Encounter Cancellation",
  "uuid": "35261d15-1645-4a09-821f-feddabb572a5",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "232185b0-195f-4535-95b7-76c5a3740974",
      "name": "Cancel details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "081a40fd-ba35-4587-bf3d-114e1ae5c552",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Delivery/Abortion",
                "Absent",
                "Sick",
                "Defaulter",
                "Away from village"
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInEntireEnrolment("23e53b0d-2e6b-4a07-a57c-7d065ee017d5").containsAnyAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7","a77bd700-1409-4d52-93bc-9fe32c0e169b").matches();
  
  if(condition11 ) {
    _.forEach(["1d98de98-c449-4d9f-93ce-f70bb233f509"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Delivery/Abortion"
                    ],
                    "answerUuidsToSkip": [
                      "1d98de98-c449-4d9f-93ce-f70bb233f509"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "latestInEntireEnrolment",
                          "conceptName": "Is the child exclusively breastfed til 6 months",
                          "conceptUuid": "23e53b0d-2e6b-4a07-a57c-7d065ee017d5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes",
                            "No"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7",
                            "a77bd700-1409-4d52-93bc-9fe32c0e169b"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Other reason for cancelling the visit",
          "uuid": "5c0a20f2-8316-4f85-be34-c211ef608d4f",
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
      "display": "Cancel details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}