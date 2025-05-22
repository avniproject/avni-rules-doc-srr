{
  "name": "Child Home Visit",
  "uuid": "ad1c49aa-6297-4e42-99f1-ede058cc2872",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "d137a1c0-7eb6-4fdd-bf02-bf1a42b37823",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Has the child recovered?",
          "uuid": "222779f6-22df-4e12-81c2-d3e202522a20",
          "keyValues": [],
          "concept": {
            "name": "Has the child recovered?",
            "uuid": "c3536382-a218-4ed9-bb7e-12d4d12bbf93",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is the child taking medicinces on time",
          "uuid": "af2151d2-cf3b-47bd-a497-158be1646d5b",
          "keyValues": [],
          "concept": {
            "name": "Is the child taking medicinces on time",
            "uuid": "c293c2fb-cd04-4df5-a180-6323f926c53d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Weight",
          "uuid": "805dbbde-05c8-4644-b916-7e7c1a3672c7",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Weight",
            "uuid": "8b187dda-a88e-487a-981a-0e4cb6142904",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 100,
            "active": true
          },
          "displayOrder": 3,
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

    let obs = programEncounter.programEnrolment.findLatestObservationFromEncounters('Weight');

    if (obs && obs !== undefined) {
        value = obs.getReadableValue()
    }

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Height",
          "uuid": "64a239bf-6612-41db-b3c5-e5683268290a",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Height",
            "uuid": "346902c4-9938-4ba5-90d1-587f36f1ab92",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 40,
            "highAbsolute": 150,
            "active": true
          },
          "displayOrder": 4,
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

    let obs = programEncounter.programEnrolment.findLatestObservationFromEncounters('Height');
    if (obs && obs !== undefined) {
        value = obs.getReadableValue()
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is the child receiving aditional THR in current month?",
          "uuid": "566c10be-a718-45dd-bda5-6bc99277c6da",
          "keyValues": [],
          "concept": {
            "name": "Is the child receiving aditional THR in current month",
            "uuid": "8da2b0c2-787b-4d15-a28c-36b163342960",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Linked with social sector scheme",
          "uuid": "e40780fa-8719-4e63-b68b-5187097e0d86",
          "keyValues": [],
          "concept": {
            "name": "Linked with social sector scheme",
            "uuid": "0d9afcaf-f260-4a19-8cfe-115bd23d8c97",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is there any medical complication?",
          "uuid": "96537a81-dfa1-4dc7-b287-0a1016e2ad8c",
          "keyValues": [],
          "concept": {
            "name": "Is there any medical complication",
            "uuid": "75bbc352-b805-4245-b1a6-9f78f8845611",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Specify the medical complication",
          "uuid": "6de48295-70e0-4f3c-ad72-2b34c5b93af0",
          "keyValues": [],
          "concept": {
            "name": "Medical complication",
            "uuid": "ca2668f7-4532-4115-81d9-1c2a4a4eacdd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Diarrhoea",
                "uuid": "e8bedb2b-c9fc-4c05-a0fe-a5d58d449824",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Fever",
                "uuid": "e52444ff-f514-4dfb-835c-86925d0d8d50",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Vomitting",
                "uuid": "45caaf3b-2664-4912-9fb2-9202e067814a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "caf114c0-b81a-4606-8157-73144c8d3b1f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Breathing difficulty",
                "uuid": "ea01e2e8-36d0-47f9-9e5d-c5b4abde1d10",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("75bbc352-b805-4245-b1a6-9f78f8845611").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Is there any medical complication",
                          "conceptUuid": "75bbc352-b805-4245-b1a6-9f78f8845611",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
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
        },
        {
          "name": "Specify, the other medical complications",
          "uuid": "d3c8b344-1446-4ee4-8a5d-46735b8f074a",
          "keyValues": [],
          "concept": {
            "name": "Specify other medical complications",
            "uuid": "7c71119c-cced-4439-b019-19e735155ae4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("ca2668f7-4532-4115-81d9-1c2a4a4eacdd").containsAnswerConceptName("caf114c0-b81a-4606-8157-73144c8d3b1f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Medical complication",
                          "conceptUuid": "ca2668f7-4532-4115-81d9-1c2a4a4eacdd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "caf114c0-b81a-4606-8157-73144c8d3b1f"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Could you counsel the mother?",
          "uuid": "c0520aaf-6d91-4007-a7dc-00c10055d6d1",
          "keyValues": [],
          "concept": {
            "name": "Could you counsel the mother",
            "uuid": "02e5b282-59c7-403f-9bf4-b5972be4b533",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "What are the parameters the women was counselled?",
          "uuid": "b0d77d39-2528-43a0-bcc3-39fe03c019ca",
          "keyValues": [],
          "concept": {
            "name": "What are the parameters the women was counselled",
            "uuid": "677fc828-f086-43d3-930e-1ba4b647d7b1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Supplementary packets/Augmented THR",
                "uuid": "3981c9f8-0ad4-4be3-8f90-4afc46f4f25b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Any Medical conditions",
                "uuid": "ed54d020-ae60-4518-be47-c4c1a386c231",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Meal frequency",
                "uuid": "c472f507-7d61-46a3-91c6-c7cfa4f5c42f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Handwashing and Hygiene",
                "uuid": "468b33f4-47d0-4cf7-8db7-44cdfb7123c9",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Dietary diversity",
                "uuid": "62db5ed2-1743-4aab-ac4b-09ae2666f280",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Minimum number of meals",
                "uuid": "c4983e0a-ff29-47a2-9f05-6162bad339b7",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("02e5b282-59c7-403f-9bf4-b5972be4b533").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Could you counsel the mother",
                          "conceptUuid": "02e5b282-59c7-403f-9bf4-b5972be4b533",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
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
  "visitScheduleRule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const isMaxVisitDateTimeGreaterThanToday = moment(programEncounter.maxVisitDateTime).isBefore(moment(), 'day');

  if (isMaxVisitDateTimeGreaterThanToday) {
    validationResults.push(imports.common.createValidationError("You cannot complete an overdue visit. Please cancel this visit."));  
  }
  
  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": []
}