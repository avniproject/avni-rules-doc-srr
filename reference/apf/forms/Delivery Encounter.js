{
  "name": "Delivery Encounter",
  "uuid": "d0121564-50e3-445c-b909-439d0cd74ef0",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "24a87003-cb10-4d92-a37c-e46f6304337d",
      "name": "Identification",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of delivery",
          "uuid": "81495d0a-a378-47d2-8537-62907e699e39",
          "keyValues": [],
          "concept": {
            "name": "Date of delivery",
            "uuid": "f72ec1db-50d5-409e-883a-421825fbebb5",
            "dataType": "Date",
            "answers": [],
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
  let lastMenstrualPeriodObservation = programEncounter.findLatestObservationInEntireEnrolment('2664c7be-7467-4304-811f-d9d20dcd7eae', programEncounter);
  let lastMenstrualPeriodValue = _.isEmpty(lastMenstrualPeriodObservation) ? lastMenstrualPeriodObservation : lastMenstrualPeriodObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("f72ec1db-50d5-409e-883a-421825fbebb5").lessThan(lastMenstrualPeriodValue, 'ms').matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be before last menstrual period");  
}

  const dateInFuture = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("f72ec1db-50d5-409e-883a-421825fbebb5").greaterThan(moment(programEncounter.encounterDateTime)).matches();
  
  if(dateInFuture ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Place of delivery",
          "uuid": "1abd75dd-ae56-48ec-9a5a-b7ab814964d5",
          "keyValues": [],
          "concept": {
            "name": "Place of delivery",
            "uuid": "4abffffa-eeb0-4655-95ce-0d34c4702d5b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hospital",
                "uuid": "b6b1a9cb-4b5f-42c7-b27c-39b9ab92107f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "On Road",
                "uuid": "917d7dab-93c6-4795-941c-e98174ef1c90",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "b0a00c8b-b190-41a0-8b65-1afb0db00a81",
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
          "mandatory": true
        },
        {
          "name": "Specify other place of delivery",
          "uuid": "42ae370b-c12f-4c3a-a9e5-92b97d01eb35",
          "keyValues": [],
          "concept": {
            "name": "Specify other place of delivery",
            "uuid": "4e1c5397-c61b-4403-99f4-8a53607c3ebe",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4abffffa-eeb0-4655-95ce-0d34c4702d5b").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "scope": "encounter",
                          "conceptName": "Place of delivery",
                          "conceptUuid": "4abffffa-eeb0-4655-95ce-0d34c4702d5b",
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
          "mandatory": false
        },
        {
          "name": "Mode of Delivery",
          "uuid": "855fbd81-8311-4bbf-8219-3bfaf10572a5",
          "keyValues": [],
          "concept": {
            "name": "Mode of Delivery",
            "uuid": "05406606-52f3-4427-a87b-001bfdc5a6fb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "C section",
                "uuid": "07a7c084-8189-46f8-b59a-4f3df9666c45",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Normal - Home",
                "uuid": "bb0e063c-6a2b-4cd2-972e-707f9ae60cf4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Normal - Instituition",
                "uuid": "3e93ddc0-404a-4fcc-b4e7-21076676cd0e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4abffffa-eeb0-4655-95ce-0d34c4702d5b").containsAnswerConceptName("b6b1a9cb-4b5f-42c7-b27c-39b9ab92107f").matches();
  
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
                          "conceptName": "Place of delivery",
                          "conceptUuid": "4abffffa-eeb0-4655-95ce-0d34c4702d5b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Hospital"
                          ],
                          "answerConceptUuids": [
                            "b6b1a9cb-4b5f-42c7-b27c-39b9ab92107f"
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
          "name": "Mode of Transportation to medical facility?",
          "uuid": "af9b6e51-2a85-40b9-95c4-12db9dba26ba",
          "keyValues": [],
          "concept": {
            "name": "Mode of Transportation to medical facility?",
            "uuid": "585e21ad-3538-4122-aa79-cbd08537c4f6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "108 Vehicle",
                "uuid": "51f7b9cd-bd54-41ed-8a4b-802920f9764d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Walking",
                "uuid": "40dceb59-6619-46fa-9144-dfc47a1923a9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Public Transport",
                "uuid": "cd086ffb-fbed-4b75-8e54-3e5a8e4f550b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Private Vehicle",
                "uuid": "a3cb3612-e115-4d21-8dfc-0c5126d8cc59",
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
          "name": "Birth outcome",
          "uuid": "a896154c-e640-4230-9547-409416cada90",
          "keyValues": [],
          "concept": {
            "name": "Birth outcome",
            "uuid": "976db865-27a4-41e7-be18-6b59f42bb900",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Miscarriage",
                "uuid": "80837323-2f91-4955-a35f-88956b503006",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Neonatal death",
                "uuid": "a8ee0e9c-e759-4a63-aa4e-39cc7392792f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Still birth",
                "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Normal delivery",
                "uuid": "1ece5dd3-864e-460a-9116-874b94ce22eb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Infant death",
                "uuid": "8d512f83-598a-4eee-80ec-1958c6698677",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Abortion",
                "uuid": "88f291bf-e354-47ea-960e-69f16e987c71",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Birth weight",
          "uuid": "7724f01e-0aa6-4c32-8137-e1698cccb4df",
          "keyValues": [],
          "concept": {
            "name": "Birth weight",
            "uuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("976db865-27a4-41e7-be18-6b59f42bb900").containsAnswerConceptName("1ece5dd3-864e-460a-9116-874b94ce22eb").matches();
  
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
                          "scope": "encounter",
                          "conceptName": "Birth outcome",
                          "conceptUuid": "976db865-27a4-41e7-be18-6b59f42bb900",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Normal delivery"
                          ],
                          "answerConceptUuids": [
                            "1ece5dd3-864e-460a-9116-874b94ce22eb"
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
          "name": "Length of the baby at birth (in cm)",
          "uuid": "5f41dfcc-1628-4f85-af16-53d8213536d2",
          "keyValues": [],
          "concept": {
            "name": "Length of the baby at birth (in cm)",
            "uuid": "8754d06d-3192-48c3-afea-6991e6bc4b61",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 50,
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("976db865-27a4-41e7-be18-6b59f42bb900").containsAnswerConceptName("1ece5dd3-864e-460a-9116-874b94ce22eb").matches();
  
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
                          "conceptName": "Birth outcome",
                          "conceptUuid": "976db865-27a4-41e7-be18-6b59f42bb900",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Normal delivery"
                          ],
                          "answerConceptUuids": [
                            "1ece5dd3-864e-460a-9116-874b94ce22eb"
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
          "name": "Sex of the new born baby",
          "uuid": "f5195af5-caeb-4bbf-9dd5-00c4bfeafaa0",
          "keyValues": [],
          "concept": {
            "name": "Sex of the new born baby",
            "uuid": "9f35ace3-773b-4f67-8546-71a061a252f6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Male",
                "uuid": "924de7e5-47d9-401a-9178-3336fee5ee03",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Female",
                "uuid": "710583d4-cb89-4986-aef2-b97b6aa222e5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("976db865-27a4-41e7-be18-6b59f42bb900").containsAnswerConceptName("1ece5dd3-864e-460a-9116-874b94ce22eb").matches();
  
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
                          "conceptName": "Birth outcome",
                          "conceptUuid": "976db865-27a4-41e7-be18-6b59f42bb900",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Normal delivery"
                          ],
                          "answerConceptUuids": [
                            "1ece5dd3-864e-460a-9116-874b94ce22eb"
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
          "name": "Eligible for JSY Scheme?",
          "uuid": "aab3ba29-7b43-49a6-8ecf-7c884b2e9646",
          "keyValues": [],
          "concept": {
            "name": "Eligible for JSY Scheme?",
            "uuid": "1289b352-f8af-4fc8-bc55-f30681c08a60",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not eligible",
                "uuid": "2770f98b-a6cd-49b9-9af8-dff69a7d868b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Not enrolled",
                "uuid": "342965f0-b7f0-49fa-95d6-bc001b56e3b0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Don’t know",
                "uuid": "9efb228c-9978-48eb-b224-8add92b5f2f1",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "mandatory": false
        },
        {
          "name": "Mamata Scheme Amount received (Second instalment)",
          "uuid": "0b52ab16-c82e-43ab-907b-b10d86e449c9",
          "keyValues": [],
          "concept": {
            "name": "Mamata Scheme Amount received  (Second instalment)",
            "uuid": "49554aaa-5430-4ad0-9ad6-8453d3213773",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not enrolled",
                "uuid": "342965f0-b7f0-49fa-95d6-bc001b56e3b0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Don't know",
                "uuid": "54f6160b-0c27-4bf7-b2e1-31f8f2fec972",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Not eligible",
                "uuid": "2770f98b-a6cd-49b9-9af8-dff69a7d868b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Timely Initiation of Breast feeeding done?",
          "uuid": "70f6a2cc-8eeb-447e-ba15-aec69a486ec3",
          "keyValues": [],
          "concept": {
            "name": "Timely initiation of Breast feeding",
            "uuid": "609ab1cc-0d5e-4e31-87b8-a8299c22c600",
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
          "displayOrder": 12,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("976db865-27a4-41e7-be18-6b59f42bb900").containsAnswerConceptName("1ece5dd3-864e-460a-9116-874b94ce22eb").matches();
  
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
                          "conceptName": "Birth outcome",
                          "conceptUuid": "976db865-27a4-41e7-be18-6b59f42bb900",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Normal delivery"
                          ],
                          "answerConceptUuids": [
                            "1ece5dd3-864e-460a-9116-874b94ce22eb"
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
          "name": "Delivery in how many weeks?",
          "uuid": "853f6105-0821-4450-bfdb-15f8c538a9d0",
          "keyValues": [],
          "concept": {
            "name": "Delivery in how many weeks?",
            "uuid": "fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Before 34 weeks",
                "uuid": "05b7cfaf-beb8-4b7c-9802-d742c37c778a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Between 34-37 weeks",
                "uuid": "ac231a0f-0d6f-4d85-bb9b-fbc174b9a639",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "After 37 weeks",
                "uuid": "d0eb7a0b-6aa9-4c30-9ff6-caec37a1a947",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("976db865-27a4-41e7-be18-6b59f42bb900").containsAnswerConceptName("1ece5dd3-864e-460a-9116-874b94ce22eb").matches();
  
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
                          "conceptName": "Birth outcome",
                          "conceptUuid": "976db865-27a4-41e7-be18-6b59f42bb900",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Normal delivery"
                          ],
                          "answerConceptUuids": [
                            "1ece5dd3-864e-460a-9116-874b94ce22eb"
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
          "name": "Is the child pre term?",
          "uuid": "402c027b-195e-428d-8d27-4f3b3d5d5d69",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Is the child pre term?",
            "uuid": "9aeb38a6-8529-4d71-a0e8-7f34182cc859",
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
          "displayOrder": 14,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c").defined.matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c").containsAnswerConceptName("05b7cfaf-beb8-4b7c-9802-d742c37c778a").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c").containsAnyAnswerConceptName("ac231a0f-0d6f-4d85-bb9b-fbc174b9a639","d0eb7a0b-6aa9-4c30-9ff6-caec37a1a947").matches();
  
  visibility = condition11 ;
    if(condition12 ){
    value = "Yes";  
}
    if(condition13 ){
    value = "No";  
}
  
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
                          "conceptName": "Delivery in how many weeks?",
                          "conceptUuid": "fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "value": "Yes"
                  },
                  "actionType": "value"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Delivery in how many weeks?",
                          "conceptUuid": "fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Before 34 weeks"
                          ],
                          "answerConceptUuids": [
                            "05b7cfaf-beb8-4b7c-9802-d742c37c778a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "value": "No"
                  },
                  "actionType": "value"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Delivery in how many weeks?",
                          "conceptUuid": "fb6f58f7-36f6-4fb2-b57d-1c99bfbd030c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Between 34-37 weeks",
                            "After 37 weeks"
                          ],
                          "answerConceptUuids": [
                            "ac231a0f-0d6f-4d85-bb9b-fbc174b9a639",
                            "d0eb7a0b-6aa9-4c30-9ff6-caec37a1a947"
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
          "mandatory": false
        },
        {
          "name": "LBW baby",
          "uuid": "708d9976-bd96-47e1-ba48-88f0f40a931a",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "LBW baby",
            "uuid": "68a1d6e8-3f4d-45bc-8b71-74da0b0a69d3",
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
              },
              {
                "name": "LBW",
                "uuid": "58015715-c23b-4f8b-ad30-adc0b1f6a16b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "SLBW",
                "uuid": "47981f48-f9c4-454f-a680-d8667d332040",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("536f46bc-8beb-42d7-a7ed-2958b21a9021").lessThan(3).matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("536f46bc-8beb-42d7-a7ed-2958b21a9021").lessThan(2.5).matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("536f46bc-8beb-42d7-a7ed-2958b21a9021").greaterThanOrEqualTo(2.5).matches();
  
  visibility = condition11 ;
    if(condition12 ){
    value = "SLBW";  
}
    if(condition13 ){
    value = "LBW";  
}
  
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
                          "conceptName": "Birth weight",
                          "conceptUuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 3
                        },
                        "operator": "lessThan"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "value": "SLBW"
                  },
                  "actionType": "value"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Birth weight",
                          "conceptUuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 2.5
                        },
                        "operator": "lessThan"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "value": "LBW"
                  },
                  "actionType": "value"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Birth weight",
                          "conceptUuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 2.5
                        },
                        "operator": "greaterThanOrEqualTo"
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
          "name": "JSY money received?",
          "uuid": "d010ab7f-4ea7-4e4e-85b6-dafb7678ddab",
          "keyValues": [],
          "concept": {
            "name": "JSY money received",
            "uuid": "3b6e00e3-b931-40aa-8af1-4416f7336650",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Don't know",
                "uuid": "54f6160b-0c27-4bf7-b2e1-31f8f2fec972",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
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
          "displayOrder": 16,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Identification",
      "timed": false
    }
  ],
  "decisionRule": "
  "use strict";
({params, imports}) => {
    const programEncounter = params.entity;
    const decisions = params.decisions;
    //create complicationBuilder using programEncounter and then push to encounterDecisions array.
    const encounterTypeNames = ["Delivery","ANC"];
    const latest = programEncounter.programEnrolment.lastFulfilledEncounter("ANC","Delivery");
    if(latest === undefined || programEncounter.uuid === latest.uuid || imports.moment(programEncounter.encounterDateTime).isAfter(imports.moment(latest.encounterDateTime))){
        decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "No"});
        decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "No"});
    }
    else{  
      decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
    }
    return decisions;
},
  "visitScheduleRule": "
"use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const currentlyActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;
  
  const noPNCEncounters = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'PNC').length == 0;
  if(currentlyActiveInProgram && noPNCEncounters){
    const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
    const earliestDate = imports.moment(dateOfDelivery).add(3, 'Days').toDate();
    scheduleBuilder.add({
      name: 'PNC Followup-1',
      encounterType: 'PNC',
      earliestDate: earliestDate,
      maxDate: imports.moment(earliestDate).add(2, 'days').toDate()
    });  
  }
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}