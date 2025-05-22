{
  "name": "QRT Child",
  "uuid": "d8c3e537-284e-47a3-8c1f-013c37f301bd",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "116d4460-64e7-4244-8123-d96336ba7ad2",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Height",
          "uuid": "770d524d-4f30-45f4-af07-efa67b5dd120",
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

  let obs = programEncounter.programEnrolment.findLatestObservationFromEncounters('Height', programEncounter);
  
   if(obs)
  {
  value=obs.getReadableValue();
  }
    
    
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Weight",
          "uuid": "32633ed8-1246-47cf-88cd-fbc6077e500e",
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

  const weight = programEncounter.programEnrolment.findLatestObservationFromEncounters('8b187dda-a88e-487a-981a-0e4cb6142904', programEncounter);
  
  if(weight) value = weight.getReadableValue();
    
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date of referral",
          "uuid": "5cd067c9-b859-4153-a4c6-e96b2eaf4655",
          "keyValues": [],
          "concept": {
            "name": "Date of referral",
            "uuid": "892a03ad-558e-47f5-90f6-65075cf81628",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  let dateOfReferral = programEncounter.getObservationReadableValue('Date of referral');
  let visitDate = programEncounter.encounterDateTime;  
  let dob = programEncounter.programEnrolment.individual.dateOfBirth;
  
  if(imports.moment(dateOfReferral).isBefore(dob, 'date')){
 statusBuilder.validationError("Date of referral cannot be before child's date of birth");
 }
 
 if(imports.moment(dateOfReferral).isAfter(visitDate, 'date')){
 statusBuilder.validationError("Date of referral cannot be after Visit Date");
 }

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "QRT facilitated child to medical facility?",
          "uuid": "e0c4452d-a8f6-4a4d-80d5-be9b0b09b737",
          "keyValues": [],
          "concept": {
            "name": "QRT facilitated child to medical facility?",
            "uuid": "71abd5c7-cdcb-4148-a0d6-0f4790f8f072",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "If QRT did not facilitate child to medical facility, mention the reasons",
          "uuid": "9510b544-84d9-4c89-87a5-61a6f7b56ea9",
          "keyValues": [],
          "concept": {
            "name": "If QRT did not facilitate child to medical facility, mention the reasons",
            "uuid": "1b11877c-1967-4599-ac33-a3fc21736a5e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("71abd5c7-cdcb-4148-a0d6-0f4790f8f072").containsAnswerConceptName("a77bd700-1409-4d52-93bc-9fe32c0e169b").matches();
  
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
                          "conceptName": "QRT facilitated child to medical facility?",
                          "conceptUuid": "71abd5c7-cdcb-4148-a0d6-0f4790f8f072",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "a77bd700-1409-4d52-93bc-9fe32c0e169b"
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
          "name": "Date of facilitation to medical facility",
          "uuid": "f8dcc02a-def6-48f0-b191-f5c5f125be30",
          "keyValues": [],
          "concept": {
            "name": "Date of facilitation to medical facility",
            "uuid": "6f027741-4dec-45d7-8b54-3e697597c354",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("71abd5c7-cdcb-4148-a0d6-0f4790f8f072").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "QRT facilitated child to medical facility?",
                          "conceptUuid": "71abd5c7-cdcb-4148-a0d6-0f4790f8f072",
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
          "name": "QRT vehicle used for facilitation to medical facility?",
          "uuid": "7806e054-c2a4-42cf-a9c0-77da1bacbca8",
          "keyValues": [],
          "concept": {
            "name": "QRT vehicle used for facilitation to medical facility",
            "uuid": "08715fb4-9c33-4fa9-9ff0-05df8be22a7c",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("71abd5c7-cdcb-4148-a0d6-0f4790f8f072").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "QRT facilitated child to medical facility?",
                          "conceptUuid": "71abd5c7-cdcb-4148-a0d6-0f4790f8f072",
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
          "name": "Place of referral",
          "uuid": "6541c016-2e9e-4f77-bd36-e598445080c6",
          "keyValues": [],
          "concept": {
            "name": "Place of referral",
            "uuid": "b5b29ca3-7158-4784-8a2a-fc6c527ddc18",
            "dataType": "Coded",
            "answers": [
              {
                "name": "DH/MC",
                "uuid": "875c6feb-78a1-4be8-ae6c-027fb997c14e",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "CHC",
                "uuid": "7f0d8995-6b14-4d2c-b285-9e1c0bb3d03b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "19891cc9-2dc5-47b9-8a42-30d7bb63934c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "b0a00c8b-b190-41a0-8b65-1afb0db00a81",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Govt facility",
                "uuid": "d6408381-bfb8-4444-a68f-407288c5deb3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Cause of illness",
          "uuid": "a26d33cb-5df2-480d-a6ad-46da2e70557f",
          "keyValues": [],
          "concept": {
            "name": "Cause of illness",
            "uuid": "7de7de1e-10dd-46f2-a5c3-bfb056a41318",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cold and cough",
                "uuid": "1a1e2b03-2e03-43ed-8eb2-f2840d8786a5",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Dengue",
                "uuid": "766953f6-6632-40d2-b850-8bd253a5334f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Malaria",
                "uuid": "1572682c-5aeb-4455-a7cf-a43da6a1e6fd",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Measles",
                "uuid": "761e2baa-2747-44c4-84cd-6f3887b8838c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Pneumonia",
                "uuid": "1b3f4523-91f3-425e-9a4f-33ff06d176ae",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Diarrhea",
                "uuid": "fd904c6a-fe26-46b0-b123-ac46d5c9567b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "caf114c0-b81a-4606-8157-73144c8d3b1f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("71abd5c7-cdcb-4148-a0d6-0f4790f8f072").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "QRT facilitated child to medical facility?",
                          "conceptUuid": "71abd5c7-cdcb-4148-a0d6-0f4790f8f072",
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
        },
        {
          "name": "Cause of illness (Other)",
          "uuid": "b0bbfe76-ee6a-40df-a76b-22a8fdbd1e1e",
          "keyValues": [],
          "concept": {
            "name": "Cause of illness (Other)",
            "uuid": "0e1d0c17-62d7-4c24-be93-62f326943c32",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("7de7de1e-10dd-46f2-a5c3-bfb056a41318").containsAnswerConceptName("caf114c0-b81a-4606-8157-73144c8d3b1f").matches();
  
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
                          "conceptName": "Cause of illness",
                          "conceptUuid": "7de7de1e-10dd-46f2-a5c3-bfb056a41318",
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
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Referral advice",
          "uuid": "4f7f445e-4f8a-42b8-b493-6d5a91abf47f",
          "keyValues": [],
          "concept": {
            "name": "Advice given",
            "uuid": "4e04b445-61ff-45de-a48a-3b2fb362e2a6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Treated at home (only with home food)",
                "uuid": "c468b2ea-65e1-4447-940f-46a37d3d483f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Referred to NRC",
                "uuid": "a5e087e8-7ffa-4a0a-a4c0-d42579612e9c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Treated at home along with supplemnetray medicines",
                "uuid": "2d48bd37-416d-4776-b7a6-6240636e4191",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "name": "Date of admission",
          "uuid": "977e934a-aad7-4cce-b64d-a4f7e7bfbf72",
          "keyValues": [],
          "concept": {
            "name": "Date of admission",
            "uuid": "317066ef-c52c-4d62-8bae-ad597ed1a709",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  let dateOfAdmission = programEncounter.getObservationReadableValue('Date of admission');
  let visitDate = programEncounter.encounterDateTime;  
  let dob = programEncounter.programEnrolment.individual.dateOfBirth;
  
  if( dateOfAdmission && imports.moment(dateOfAdmission).isBefore(dob, 'date')){
 statusBuilder.validationError("Date of admission cannot be before child's date of birth");
 }
 
 if( dateOfAdmission && imports.moment(dateOfAdmission).isAfter(visitDate, 'date')){
 statusBuilder.validationError("Date of admission cannot be after today's date");
 }
 
  const showCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4e04b445-61ff-45de-a48a-3b2fb362e2a6").containsAnswerConceptName("a5e087e8-7ffa-4a0a-a4c0-d42579612e9c").matches();
  
  statusBuilder.show().whenItem(showCondition).is.truthy;

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Date of Discharge",
          "uuid": "292ea2d7-98d2-42a7-b568-f18c0d4c60c3",
          "keyValues": [],
          "concept": {
            "name": "Date of Discharge",
            "uuid": "4d6f2b9a-dc9e-4baa-90ba-9d9e37605652",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  const showCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4e04b445-61ff-45de-a48a-3b2fb362e2a6").containsAnswerConceptName("a5e087e8-7ffa-4a0a-a4c0-d42579612e9c").matches();
  
  statusBuilder.show().whenItem(showCondition).is.truthy;

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Height at Discharge",
          "uuid": "875a388e-acd2-4c40-8959-79593503ab56",
          "keyValues": [],
          "concept": {
            "name": "Height at Discharge",
            "uuid": "3ac094e8-347e-499b-911c-f6a386fca98a",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 40,
            "highAbsolute": 150,
            "lowNormal": 40,
            "highNormal": 150,
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  const showCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4e04b445-61ff-45de-a48a-3b2fb362e2a6").containsAnswerConceptName("a5e087e8-7ffa-4a0a-a4c0-d42579612e9c").matches();
  
  statusBuilder.show().whenItem(showCondition).is.truthy;

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Weight at Discharge",
          "uuid": "3700d7e3-82af-4172-aad3-9668f2f29e5c",
          "keyValues": [],
          "concept": {
            "name": "Weight at Discharge",
            "uuid": "06e4633a-70ae-4b6e-b570-3dc4056c8a40",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 50,
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  const showCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4e04b445-61ff-45de-a48a-3b2fb362e2a6").containsAnswerConceptName("a5e087e8-7ffa-4a0a-a4c0-d42579612e9c").matches();
  
  statusBuilder.show().whenItem(showCondition).is.truthy;

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Medical complication at time of discharge",
          "uuid": "732f7b20-c44b-4ce5-9ae8-d9191f7f0d77",
          "keyValues": [],
          "concept": {
            "name": "Medical complication at time of discharge",
            "uuid": "26de1876-c271-4264-9751-388a3834514e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({programEncounter, formElement});
  
  const showCondition = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("4e04b445-61ff-45de-a48a-3b2fb362e2a6").containsAnswerConceptName("a5e087e8-7ffa-4a0a-a4c0-d42579612e9c").matches();
  
  statusBuilder.show().whenItem(showCondition).is.truthy;

  return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Advice",
          "uuid": "ffcd54c5-f59a-4d2a-8ce1-60ca5df8af15",
          "keyValues": [],
          "concept": {
            "name": "Advice",
            "uuid": "294f1568-6c64-4828-936c-576e8fdd564f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "After delivery, when should you breastfed the child?",
          "uuid": "61354a33-8d18-427b-b434-b8af78e3b334",
          "keyValues": [],
          "concept": {
            "name": "After delivery, when should you breastfed the child",
            "uuid": "44b9a530-a5fd-4641-95b2-f7248fa48185",
            "dataType": "Coded",
            "answers": [
              {
                "name": "In between 2 to 6 hours",
                "uuid": "a836cdfb-4154-42f5-8855-3a05c323bb02",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Within one hour",
                "uuid": "3a278a16-6797-4803-896b-935570a3c3b9",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "In between 7 to 24 hours",
                "uuid": "f9032d1d-3bb3-453e-b47c-1a86db73dd15",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Do you know when should a child get vaccination?",
          "uuid": "080ff82a-b001-45ec-971e-f34567b1de84",
          "keyValues": [],
          "concept": {
            "name": "Do you know when should a child get vaccination",
            "uuid": "ca91ab72-912a-4725-aa73-9270c9b1fa8b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Known",
                "uuid": "d60498c0-a6c4-46e1-a0cd-416f68a7d18f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Partially known",
                "uuid": "1c618c97-9f0a-4256-826e-f9e16e111193",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Till what age the baby should be exclusively breastfed?",
          "uuid": "80ff39bf-e7c0-4690-b1c6-3d3a4edbab0b",
          "keyValues": [],
          "concept": {
            "name": "Till what age the baby should be exclusively breastfed",
            "uuid": "0f41743c-40e6-49e6-ac53-0a7aba5c8097",
            "dataType": "Coded",
            "answers": [
              {
                "name": "25 months and more",
                "uuid": "7199ac7a-1929-4f08-8dba-131c90f06272",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "6 months",
                "uuid": "a40b769a-7810-4e4b-9fa7-5222a281671e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Less than 6 months",
                "uuid": "aaf416d8-36d5-4f89-b1f3-2b0d6a5eaeac",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "7 to 12 months",
                "uuid": "5f497574-2b82-4452-915a-7a20958e8fef",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "13 to 24 months",
                "uuid": "cd298f88-9f5c-4365-b52e-bd80c94d6778",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Till what age the baby should be breastfed?",
          "uuid": "f3fbd4c5-16f3-4ec9-a821-8d1420b6ae61",
          "keyValues": [],
          "concept": {
            "name": "Till what age the baby should be breastfed",
            "uuid": "f2f52d36-82ca-4ce0-846e-507909b58bb5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "One year",
                "uuid": "a97c74bf-3b32-44e9-847d-b82c9ea9b265",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "6 months",
                "uuid": "a40b769a-7810-4e4b-9fa7-5222a281671e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "2 year",
                "uuid": "52290a19-a2e9-4997-8476-7119a2137191",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "5 year",
                "uuid": "5333be0c-e283-4985-9d54-48d13e2431b6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "When should you fed the baby any outside food?",
          "uuid": "0f264603-d9f9-430d-888f-1c413e81dd96",
          "keyValues": [],
          "concept": {
            "name": "When should you fed the baby any outside food",
            "uuid": "63c720e0-1ee3-4e5f-9596-2742ff6caf94",
            "dataType": "Coded",
            "answers": [
              {
                "name": "One year",
                "uuid": "a97c74bf-3b32-44e9-847d-b82c9ea9b265",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "2 year",
                "uuid": "52290a19-a2e9-4997-8476-7119a2137191",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "6 months",
                "uuid": "a40b769a-7810-4e4b-9fa7-5222a281671e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "5 year",
                "uuid": "5333be0c-e283-4985-9d54-48d13e2431b6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dont know",
                "uuid": "6efff09c-e027-49ae-b7c2-ff311dbdfd9b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Reffered to NRC (referred by govt facility)",
          "uuid": "dba44375-5acd-4451-82e1-bbc7103c919e",
          "keyValues": [],
          "concept": {
            "name": "Reffered to NRC (referred by govt facility)",
            "uuid": "45113644-225c-43e9-8e31-b103732ea671",
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
          "displayOrder": 23,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const decisions = params.decisions;
  const complicationsBuilderForWFA = new imports.rulesConfig.complicationsBuilder({
        programEncounter: programEncounter,
        complicationsConcept: "Weight for age z-score"
    },
    {
        programEnrolment: programEncounter,
        complicationsConcept: "High risk condition"
    });
    
  const height = programEncounter.getObservationValue("Height");
  const weight = programEncounter.getObservationValue("Weight");
  
  const heightAtDischarge = programEncounter.getObservationValue("Height at Discharge");
  const weightAtDischarge = programEncounter.getObservationValue("Weight at Discharge");
  
  const asOnDate = programEncounter.encounterDateTime;
  const individual = programEncounter.programEnrolment.individual;
  const age = programEncounter.programEnrolment.individual.getAgeInMonths();
  
  const addIfRequired = (decisions, name, value) => {
    if (value === -0) value = 0;
    if (value !== undefined) decisions.push({name: name, value: value});
};
  
  const getGradeforZscore = (zScore) => {
    let grade;
    if (zScore <= -3) {
        grade = 3;
    } else if (zScore > -3 && zScore < -2) {
        grade = 2;
    } else if (zScore >= -2) {
        grade = 1;
    }
    return grade;
};
  
  const zScoresForChild = ruleServiceLibraryInterfaceForSharingModules.common.getZScore(individual, asOnDate, weight, height);

  const zScoresForChildAtDischarge = ruleServiceLibraryInterfaceForSharingModules.common.getZScore(individual, asOnDate, weightAtDischarge, heightAtDischarge);
  
  const zScoreGradeStatusMappingWeightForAge = {
    '1': 'Normal',
    '2': 'Moderately Underweight',
    '3': 'Severely Underweight'
};

  const zScoreGradeStatusMappingHeightForAge = {
    '1': 'Normal',
    '2': 'Stunted',
    '3': 'Severely stunted'
};
  
  const zScoreGradeStatusMappingWeightForHeight = [
    ["SAM", -3],
    ["MAM", -2],
    ["Normal", 1],
    ["Normal", 2],
    ["Normal", 3],
    ["Normal", Infinity],
];

  const weightForHeightStatus = function (zScore) {
 let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
        return zScore <= currentStatus[1];
    });
    return found && found[0];
};

  
   const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
  const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];
  const wfaZScore= zScoresForChild.wfa;
  
  
  
  const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);
  const wfhGrade = getGradeforZscore(zScoresForChild.wfh);

  
  const hfaGrade = getGradeforZscore(zScoresForChild.hfa);
  const hfaZScore = zScoresForChild.hfa;
  const hfaStatus = zScoreGradeStatusMappingHeightForAge[hfaGrade];

  const wfhStatusAtDischarge = weightForHeightStatus(zScoresForChildAtDischarge.wfh);
  
addIfRequired(decisions.encounterDecisions, "Weight for age z-score", zScoresForChild.wfa);
addIfRequired(decisions.encounterDecisions, "Weight for age Grade", wfaGrade);
addIfRequired(decisions.encounterDecisions, "Weight for age Status", wfaStatus ? [wfaStatus] : []);

addIfRequired(decisions.encounterDecisions, "Height for age z-score", zScoresForChild.hfa);
addIfRequired(decisions.encounterDecisions, "Height for age Grade", hfaGrade);
addIfRequired(decisions.encounterDecisions, "Height for age Status", hfaStatus ? [hfaStatus] : []);


addIfRequired(decisions.encounterDecisions, "Weight for height z-score", zScoresForChild.wfh);
addIfRequired(decisions.encounterDecisions, "Weight for Height Status", wfhStatus ? [wfhStatus] : []);

addIfRequired(decisions.encounterDecisions, "Weight for Height Status at Discharge", wfhStatusAtDischarge ? [wfhStatusAtDischarge] : []);

    const encounterTypeNames = ["Child followup","QRT SAM Child"];
const latest = programEncounter.programEnrolment.lastFulfilledEncounter("ANC","Delivery");


if(latest === undefined || programEncounter.uuid === latest.uuid || imports.moment(programEncounter.encounterDateTime).isAfter(imports.moment(latest.encounterDateTime))){

// Pushing decisions to the registration for the optimizing performance of offlne dashborad cards
     if(wfaStatus){decisions.registrationDecisions.push({name : "Nutritional Status", value : wfaStatus})};

  if(wfhStatus == "SAM" || wfaStatus == "Severely Underweight"){
      decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "Yes"});
      decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "Yes"});
      decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "Yes"});
  }else {
      decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "No"});
      decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "No"});
      decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
  }
}else {
  if(wfhStatus == "SAM" || wfaStatus == "Severely Underweight"){
      decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "Yes"});
  }else {
      decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
  }
}

 

    return decisions;
 },
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
  "decisionConcepts": [
    {
      "name": "To be monitored by QRT",
      "uuid": "be0ab05f-b0f3-43ec-b598-fdde0679104a",
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
      "active": true,
      "keyValues": []
    },
    {
      "name": "Weight for Height Status at Discharge",
      "uuid": "8e54ddae-c724-4032-9cc2-6310b47f4702",
      "dataType": "Coded",
      "answers": [
        {
          "name": "SAM",
          "uuid": "7d0229c1-e69e-4cac-8937-cdd48c8ed9dd",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "MAM",
          "uuid": "da518460-f4ab-4fcb-89ae-3526619d43c5",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Normal",
          "uuid": "422604be-5776-4050-a779-9221935d6f7c",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    }
  ]
}