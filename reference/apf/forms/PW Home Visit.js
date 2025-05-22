{
  "name": "PW Home Visit",
  "uuid": "f8da4ed8-d2ae-48e0-82ea-0dcff67bdaf6",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "5a55d853-906f-468c-98cf-2b1e555f4ab3",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "HB",
          "uuid": "8473c737-a065-456e-886a-be82a1044d3a",
          "keyValues": [],
          "concept": {
            "name": "HB",
            "uuid": "68bc6e51-eb49-4816-b78b-2427bbab8d92",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
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
  
  let isOverdue = moment().isAfter(moment(programEncounter.maxVisitDateTime));
  
  if(isOverdue ){
    validationErrors.push("Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled");  
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Weight",
          "uuid": "e2461845-98aa-44bf-bdb1-6f824a4951ed",
          "keyValues": [],
          "concept": {
            "name": "Weight",
            "uuid": "8b187dda-a88e-487a-981a-0e4cb6142904",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 100,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Consuming iron tablet?",
          "uuid": "2afc91fa-3132-4a36-8e2d-a78af6076baa",
          "keyValues": [],
          "concept": {
            "name": "Consuming iron tablet",
            "uuid": "0fbd0f94-e4d5-41ee-8b08-d37ef7259950",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Consuming calcium tablet?",
          "uuid": "8c9bc3f1-13ea-42ad-b3b1-849a21bec6b5",
          "keyValues": [],
          "concept": {
            "name": "Consuming calcium tablet",
            "uuid": "2e8cee8d-cb8d-4a37-ba87-cad0247ed46c",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Could you counsel the women?",
          "uuid": "e303905c-f460-4d64-822c-d0c615ae03be",
          "keyValues": [],
          "concept": {
            "name": "Could you counsel the women?",
            "uuid": "0bb5b642-2e3e-4859-927a-a51bd12a2c1d",
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
          "name": "What are the parameters the women was counseled?",
          "uuid": "aef17e79-b063-4422-a46f-57a74bd8e194",
          "keyValues": [],
          "concept": {
            "name": "What are the parameters the women was counseled?",
            "uuid": "5226ad04-1151-48d3-b4de-6049f5957dcb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Weight gain",
                "uuid": "ea75b5c6-75d0-4e34-b2cd-c3f2daf93bb5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Routine ANC check up",
                "uuid": "0224bf1a-22b9-4bd4-a3a7-808d624f0c5e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Any Medical conditions",
                "uuid": "ed54d020-ae60-4518-be47-c4c1a386c231",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Food habits",
                "uuid": "d8bce98f-cd6d-463c-9120-dcb014e39911",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Institutional delivery",
                "uuid": "643e379a-8f39-4ebd-b515-7f3179d3e465",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Anemia",
                "uuid": "5483b558-c36a-439c-80c3-065f7f331a34",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0bb5b642-2e3e-4859-927a-a51bd12a2c1d").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Could you counsel the women?",
                          "conceptUuid": "0bb5b642-2e3e-4859-927a-a51bd12a2c1d",
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
          "name": "Any Medical conditions, please specify",
          "uuid": "cc1200a3-d37a-420d-85a5-94fbf294b54f",
          "keyValues": [],
          "concept": {
            "name": "Any Medical conditions, please specify",
            "uuid": "402599d4-6b2d-475e-a362-686c054050f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("5226ad04-1151-48d3-b4de-6049f5957dcb").containsAnswerConceptName("ed54d020-ae60-4518-be47-c4c1a386c231").matches();
  
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
                          "conceptName": "What are the parameters the women was counseled?",
                          "conceptUuid": "5226ad04-1151-48d3-b4de-6049f5957dcb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any Medical conditions"
                          ],
                          "answerConceptUuids": [
                            "ed54d020-ae60-4518-be47-c4c1a386c231"
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
          "mandatory": false
        },
        {
          "name": "Following adequate diet?",
          "uuid": "a9509ee9-1aab-4cb5-905c-30ae02fca51a",
          "keyValues": [],
          "concept": {
            "name": "Following adequate diet",
            "uuid": "19db61c7-ce65-40d5-a53f-f025c9f13f74",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
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