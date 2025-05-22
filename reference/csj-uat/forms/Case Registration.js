{
  "name": "Case Registration",
  "uuid": "37451795-a7ea-4146-b622-d9b0be5cbe29",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "a2c0cfe2-b245-4a2e-ba13-1167c125ec79",
      "name": "Applicant Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Name of applicant",
          "uuid": "a15c1fa6-b687-489a-8cf0-f880253741e5",
          "keyValues": [],
          "concept": {
            "name": "Name of applicant",
            "uuid": "a166f8fb-a245-4c2a-ad0b-a9eac2dc0b8d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("7d720c7b-7f5c-43f7-a091-6f5cff171c21").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Does the phone number belong to the applicant?",
                          "conceptUuid": "7d720c7b-7f5c-43f7-a091-6f5cff171c21",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "name": "Relation (e.g. Sarpanch, neighbour etc.)",
          "uuid": "6793ee62-392e-494f-99db-ea93d1e3bd6d",
          "keyValues": [],
          "concept": {
            "name": "Relation (e.g. Sarpanch, neighbour etc.)",
            "uuid": "c4b35d8e-5538-4da7-a8c5-3c1b62143d43",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("7d720c7b-7f5c-43f7-a091-6f5cff171c21").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Does the phone number belong to the applicant?",
                          "conceptUuid": "7d720c7b-7f5c-43f7-a091-6f5cff171c21",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "name": "State of applicant (where currently residing)",
          "uuid": "5ffcdb0c-8bc1-4ad3-a7b1-b3a040f0b2a2",
          "keyValues": [],
          "concept": {
            "name": "State of applicant",
            "uuid": "7f5d0791-1578-49e2-8376-728419356cd2",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "e68249ed-c278-4c38-b838-a1d52896018a"
                ]
              }
            ]
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "District of applicant (where currently residing)",
          "uuid": "efb42fc3-2460-49d2-ae86-f16a846e66ce",
          "keyValues": [],
          "concept": {
            "name": "District of applicant",
            "uuid": "d7fe27f2-36bd-4ed9-b068-094acffe2a77",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "e68249ed-c278-4c38-b838-a1d52896018a"
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Block of applicant",
          "uuid": "ce1b8131-bae7-4b9a-8f30-8f96ed1cc45e",
          "keyValues": [],
          "concept": {
            "name": "Block of applicant",
            "uuid": "67f66870-96c0-463e-86a1-6a5d1426e0d1",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
              }
            ]
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village/town of applicant",
          "uuid": "28404bed-3a4c-4eed-ace3-b20d5ab8a119",
          "keyValues": [],
          "concept": {
            "name": "Village/town of applicant",
            "uuid": "9aa381ce-5bb0-40af-8786-cf8858d1b0ad",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "8f1d7866-0ad1-4026-bbcb-37cea12ee641"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
              }
            ]
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    
    return formElementGroup.formElements.map((formElement) => {
    
        if(individual) {
            
            if(!individual.lowestAddressLevel || individual.lowestAddressLevel.name.length == 0) {
                individual.firstName = "Case: ";
                individual.name = "Case: ";
            } else {
                individual.firstName = "Case: " + individual.lowestAddressLevel.name;
                individual.name = "Case: " + individual.lowestAddressLevel.name;
            }
        }
        
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Applicant Details",
      "timed": false
    },
    {
      "uuid": "db6f44ca-c6e3-4071-ae6b-ef952e72cdb6",
      "name": "Victim Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Whether applicant same as victim?",
          "uuid": "35c70341-b4f5-45ed-8e90-b190a8ee6491",
          "keyValues": [],
          "concept": {
            "name": "Whether applicant same as victim?",
            "uuid": "8a45b281-8e39-4ea7-9e85-58dfd186275d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
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
          "name": "Name of victim",
          "uuid": "4421ba9b-87e7-43d3-9c1a-43d7b146d97f",
          "keyValues": [],
          "concept": {
            "name": "Name of victim",
            "uuid": "6d1b0a84-ed15-485b-806f-4628c195c922",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8a45b281-8e39-4ea7-9e85-58dfd186275d").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Whether applicant same as victim?",
                          "conceptUuid": "8a45b281-8e39-4ea7-9e85-58dfd186275d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "name": "Phone no. of victim",
          "uuid": "4508153a-ef39-41b6-a82c-3e38dd0e7e62",
          "keyValues": [],
          "concept": {
            "name": "Phone no. of victim",
            "uuid": "2390efd0-240e-46c9-88b0-a5aa1f529acf",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8a45b281-8e39-4ea7-9e85-58dfd186275d").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Whether applicant same as victim?",
                          "conceptUuid": "8a45b281-8e39-4ea7-9e85-58dfd186275d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "mandatory": true
        },
        {
          "name": "State of victim (where currently residing)",
          "uuid": "7488b9b7-5234-4cf0-83ac-3111314c8f16",
          "keyValues": [],
          "concept": {
            "name": "State of victim (where currently residing)",
            "uuid": "1c8998e1-87f4-4797-8122-4c1633113b60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "e68249ed-c278-4c38-b838-a1d52896018a"
                ]
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "District of victim (where currently residing)",
          "uuid": "c23ee9c2-5c61-42c5-89a5-7203587da9fe",
          "keyValues": [],
          "concept": {
            "name": "District of victim (where currently residing)",
            "uuid": "610f3da3-36d4-499d-a1ea-1d4938133bde",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "e68249ed-c278-4c38-b838-a1d52896018a"
              }
            ]
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Block of victim",
          "uuid": "f01d19d5-0443-45a9-b36b-297f38ecfb18",
          "keyValues": [],
          "concept": {
            "name": "Block of victim",
            "uuid": "2675ee15-578a-4d50-9a7e-97c8297a8b03",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
              }
            ]
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village/town of victim",
          "uuid": "e78c234e-d714-4e90-9a38-3de797b299c0",
          "keyValues": [],
          "concept": {
            "name": "Village/town of victim",
            "uuid": "d218ac93-5ba0-493d-bda7-8dd9f1c2169a",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "8f1d7866-0ad1-4026-bbcb-37cea12ee641"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "e68249ed-c278-4c38-b838-a1d52896018a"
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Age of victim",
          "uuid": "28e64fdb-2c4c-40a5-92c9-ca2b530d1e19",
          "keyValues": [],
          "concept": {
            "name": "Age of victim",
            "uuid": "c46bf9b2-f7c9-4566-8c34-9b6b6ee66508",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^(100|[1-9]?\\d)$",
            "descriptionKey": "Allows age between 0 and 100"
          },
          "mandatory": true
        },
        {
          "name": "Gender of victim",
          "uuid": "755d4860-2f16-4d15-b109-3cfeb40645ad",
          "keyValues": [],
          "concept": {
            "name": "Gender of victim",
            "uuid": "17095076-3b48-4954-b8aa-b70e4c6d2930",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Transgender person",
                "uuid": "ba263a4c-1b92-4630-a2d7-f71b08309145",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Female",
                "uuid": "4012e98a-eb61-47fb-9f33-afeb3a66fff9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Transgender woman",
                "uuid": "1ea571f4-a8b6-4f56-86ad-b34e81a5b719",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e90379c5-1934-4b03-a41c-cead0588b33c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Transgender man",
                "uuid": "c8102aaf-6cc8-41da-8a52-b9b27b81250c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Religion of victim",
          "uuid": "a47585d8-f758-4240-a8eb-bae61d59ad49",
          "keyValues": [],
          "concept": {
            "name": "Religion of victim",
            "uuid": "2cee655a-dac6-463e-9beb-abc5dc4a214b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Adivasi / Sarna",
                "uuid": "080cfb44-7e4f-48e4-acc7-d97eaab291e9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Hindu",
                "uuid": "c43f7121-d454-4eff-84d1-6ed1e5b8b2c5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Christian",
                "uuid": "de61c64f-6fa9-4da5-87a8-0c2855a93574",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Buddhist",
                "uuid": "7d574ef3-2a31-47fe-8a00-11fcaa95d120",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Other Religion",
                "uuid": "5fd7069b-13ce-45f2-a086-d80efce951d5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Sikh",
                "uuid": "019b057f-e871-4f0b-af84-11050b47c355",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Muslim",
                "uuid": "55a3d592-695a-4a2b-8c7d-7d1c488b417b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "name": "Other Religion, please specify",
          "uuid": "285584f2-e18e-454f-8f41-d2bab814a014",
          "keyValues": [],
          "concept": {
            "name": "Other Religion, please specify",
            "uuid": "c4ec959d-03d9-4f1b-bea8-9de30de6364a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2cee655a-dac6-463e-9beb-abc5dc4a214b").containsAnswerConceptName("5fd7069b-13ce-45f2-a086-d80efce951d5").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Religion of victim",
                          "conceptUuid": "2cee655a-dac6-463e-9beb-abc5dc4a214b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Religion"
                          ],
                          "answerConceptUuids": [
                            "5fd7069b-13ce-45f2-a086-d80efce951d5"
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
          "name": "Social Category of victim",
          "uuid": "3aeca242-f5cc-4734-bedc-238d9ab4029e",
          "keyValues": [],
          "concept": {
            "name": "Social Category of victim",
            "uuid": "4987907c-78bf-4297-88e4-ef831d8d9c4c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ST",
                "uuid": "5f88add0-3407-48cc-ba89-5f9218aa6e5a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "OBC",
                "uuid": "b835d5c4-8843-4396-98cb-08454f923a28",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "General",
                "uuid": "d715cc92-9661-4885-88cc-aa240d41116d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "SC",
                "uuid": "dc5d596d-3f05-4a48-ae28-a9faf4155a18",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How did the victim come to us?",
          "uuid": "3f81a584-1238-42b3-8a0c-67dc8626e398",
          "keyValues": [],
          "concept": {
            "name": "How did the victim come to us?",
            "uuid": "f7408a66-5974-4feb-8d7e-6648fb4f41cb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Service Camp",
                "uuid": "98009eb7-b007-4570-b0a4-359128267564",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other ways the victim came, please specify",
                "uuid": "da2df86f-a9c0-44e3-b6e4-f3d30bf0a93b",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "General community outreach",
                "uuid": "fad9357c-0aa1-4fb6-a996-b415614a35fc",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Relative / acquaintance",
                "uuid": "ff29363f-aaeb-4377-8c6f-b9ba6342b6c5",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Court",
                "uuid": "07feac8f-27a2-4f58-a947-a7ddfd4c15b3",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "02000523-c297-47f1-8386-db2b0820f462",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Office walk-in",
                "uuid": "05db9731-7b2a-4d12-9dff-c524b4210b0d",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Legal Awareness Camp",
                "uuid": "88e35212-74f6-4794-aadd-d94ee046329b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Social Media",
                "uuid": "123769db-f463-4e37-a385-1b602cafe728",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Government Office",
                "uuid": "52e18230-d685-4e54-be28-654ce835f902",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "e3a24b7f-89b6-4d84-b58f-0c3cfc4c6b77",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Through old client",
                "uuid": "27600c92-5228-49ac-8c5b-bb17ed6c3fbf",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Through other lawyers",
                "uuid": "3715b632-6ff1-4a25-a505-66d281322b50",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "NGO / Sangathan",
                "uuid": "2a2d1c04-342d-48b6-875a-41db989cc6e8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Campaign",
                "uuid": "23d69c93-6a03-45f4-9ecf-35a5b0052049",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Other ways, the victim came, please specify",
          "uuid": "bd38de71-2f05-4644-8b85-7c40841ca781",
          "keyValues": [],
          "concept": {
            "name": "Other ways, the victim came, please specify",
            "uuid": "b3590e3c-4a2f-4a2c-920c-ddf32f4f3510",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f7408a66-5974-4feb-8d7e-6648fb4f41cb").containsAnswerConceptName("da2df86f-a9c0-44e3-b6e4-f3d30bf0a93b").matches();
  
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
                          "scope": "registration",
                          "conceptName": "How did the victim come to us?",
                          "conceptUuid": "f7408a66-5974-4feb-8d7e-6648fb4f41cb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other ways the victim came, please specify"
                          ],
                          "answerConceptUuids": [
                            "da2df86f-a9c0-44e3-b6e4-f3d30bf0a93b"
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
      "display": "Victim Details",
      "timed": false
    },
    {
      "uuid": "4c3ed352-0c42-4e8e-8d37-0b7992c03c5b",
      "name": "Opponent / Accused Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Name of opponent / accused",
          "uuid": "305ad4ac-0953-4a99-9e1b-dbc7cee64e9f",
          "keyValues": [],
          "concept": {
            "name": "Name of opponent / accused",
            "uuid": "c25fde34-117f-4ee7-b7da-673e9ef5d058",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Phone no. of opponent",
          "uuid": "6b9c7191-3c86-49a6-a906-9365d6f21c98",
          "keyValues": [],
          "concept": {
            "name": "Phone no. of opponent",
            "uuid": "3205bab8-ad3f-4115-a15e-d1064b8c14ad",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "mandatory": false
        },
        {
          "name": "State of the opponent",
          "uuid": "b0ec5ec3-79af-484e-a82a-61871d5cb791",
          "keyValues": [],
          "concept": {
            "name": "State of the opponent",
            "uuid": "74f5016c-5256-4626-babf-cd8a41369edc",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "e68249ed-c278-4c38-b838-a1d52896018a"
                ]
              }
            ]
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "District of opponent (where currently residing)",
          "uuid": "22178f1d-1e79-42e9-bc0f-81eaaaf18f20",
          "keyValues": [],
          "concept": {
            "name": "District of opponent (where currently residing)",
            "uuid": "544efc35-454d-42c6-8d30-8946e0b5aa58",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "e68249ed-c278-4c38-b838-a1d52896018a"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Block of opponent",
          "uuid": "afb08f87-2ef5-4aef-8870-47519fc9c168",
          "keyValues": [],
          "concept": {
            "name": "Block of opponent",
            "uuid": "d81a6653-b3cf-4187-9bca-9cf76ed0eca4",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
              }
            ]
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village/town of opponent",
          "uuid": "3912e662-5069-446b-b42e-d99486b71dc9",
          "keyValues": [],
          "concept": {
            "name": "Village/town of opponent",
            "uuid": "03734061-83fd-47b8-af35-75288b1abbbc",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "8f1d7866-0ad1-4026-bbcb-37cea12ee641"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
              }
            ]
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Age of opponent",
          "uuid": "fa0a3f84-6a18-4355-918e-b3cce3b5501b",
          "keyValues": [],
          "concept": {
            "name": "Age of opponent",
            "uuid": "88003db8-e8b3-4da2-a436-6c125cfebded",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^(100|[1-9]?\\d)$",
            "descriptionKey": "Allows age between 0 and 100"
          },
          "mandatory": false
        },
        {
          "name": "Gender of opponent",
          "uuid": "ce719e64-43d3-4d9b-b093-a9ca8de447a1",
          "keyValues": [],
          "concept": {
            "name": "Gender of opponent",
            "uuid": "28c91fe3-d627-4c32-a4dd-74ef29a75059",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "4012e98a-eb61-47fb-9f33-afeb3a66fff9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Transgender man",
                "uuid": "c8102aaf-6cc8-41da-8a52-b9b27b81250c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Transgender woman",
                "uuid": "1ea571f4-a8b6-4f56-86ad-b34e81a5b719",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e90379c5-1934-4b03-a41c-cead0588b33c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Transgender person",
                "uuid": "ba263a4c-1b92-4630-a2d7-f71b08309145",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Religion of opponent",
          "uuid": "fa01c14f-c2ff-431a-8a04-56a426942364",
          "keyValues": [],
          "concept": {
            "name": "Religion of opponent",
            "uuid": "49b3302d-c1d7-4cc6-bbd4-5bd907def7ea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hindu",
                "uuid": "c43f7121-d454-4eff-84d1-6ed1e5b8b2c5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Buddhist",
                "uuid": "7d574ef3-2a31-47fe-8a00-11fcaa95d120",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Muslim",
                "uuid": "55a3d592-695a-4a2b-8c7d-7d1c488b417b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Adivasi / Sarna",
                "uuid": "080cfb44-7e4f-48e4-acc7-d97eaab291e9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Christian",
                "uuid": "de61c64f-6fa9-4da5-87a8-0c2855a93574",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other religion of opponent, please specify",
                "uuid": "08c76ffc-ef68-471f-a95d-78a65fad6617",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Sikh",
                "uuid": "019b057f-e871-4f0b-af84-11050b47c355",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Other religion of opponent, please specify",
          "uuid": "f9ff693e-4c0a-40cb-a38e-e08684d84a55",
          "keyValues": [],
          "concept": {
            "name": "Other religion of opponent",
            "uuid": "1112178e-6c6b-439f-8b8a-48f54e336f31",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49b3302d-c1d7-4cc6-bbd4-5bd907def7ea").containsAnswerConceptName("08c76ffc-ef68-471f-a95d-78a65fad6617").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Religion of opponent",
                          "conceptUuid": "49b3302d-c1d7-4cc6-bbd4-5bd907def7ea",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other religion of opponent, please specify"
                          ],
                          "answerConceptUuids": [
                            "08c76ffc-ef68-471f-a95d-78a65fad6617"
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
          "mandatory": false
        },
        {
          "name": "Social Category of opponent",
          "uuid": "14f4ec0e-8b30-48d9-9536-b16509895c1c",
          "keyValues": [],
          "concept": {
            "name": "Social Category of opponent",
            "uuid": "eb7b6609-c2aa-4697-8a18-fc9261bb983b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "OBC",
                "uuid": "b835d5c4-8843-4396-98cb-08454f923a28",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "General",
                "uuid": "d715cc92-9661-4885-88cc-aa240d41116d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "SC",
                "uuid": "dc5d596d-3f05-4a48-ae28-a9faf4155a18",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "ST",
                "uuid": "5f88add0-3407-48cc-ba89-5f9218aa6e5a",
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
          "mandatory": false
        }
      ],
      "display": "Opponent / Accused Details",
      "timed": false
    },
    {
      "uuid": "5755df85-2014-4bc6-b487-c64bac24a493",
      "name": "Case Theme",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Theme of case",
          "uuid": "1fe962bf-cdcc-4ad8-ae2e-ed566d12a90c",
          "keyValues": [],
          "concept": {
            "name": "Theme of case",
            "uuid": "05865e79-c454-47c2-af03-fc719213b576",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Social Boycott",
                "uuid": "af8c13be-ced0-424c-b5bb-0e8e12b3bb29",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Land rights",
                "uuid": "7df1508b-c290-4628-8ac9-0e69d2790c51",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Labour rights",
                "uuid": "5ba5572c-4319-4d32-837b-4e65cb6ba988",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other theme of case",
                "uuid": "92a93d51-4899-45d3-af53-99c3bf3d7768",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Women’s Rights",
                "uuid": "65fda2ac-cdae-4f2a-af78-9cafb0b6f237",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Child rights",
                "uuid": "77d3db85-2f84-411d-869c-d9033b72308e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Consumer Rights",
                "uuid": "096d5dcf-4e69-4c17-93e4-90d54fc8798e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Rights of SC/ST communities",
                "uuid": "c30260da-5944-4ac3-af04-faf3ec397430",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Child Rights",
                "uuid": "b5db4acf-4161-4b5b-a495-a8a42a854868",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Land Rights",
                "uuid": "fb503cbc-5051-4c40-8d98-dec8ef0d2758",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Labour Rights",
                "uuid": "f7ce17cd-b888-45f1-a976-8dcf028efbed",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Fisherfolk rights",
                "uuid": "33ae3161-4c13-4e8c-bec7-548f9b2e1482",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Prisoners’ Rights",
                "uuid": "e3cb96f0-62e7-4428-b136-d325c587d0e6",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Fisherfolk Rights",
                "uuid": "5290aa15-0073-4e27-b673-b5821fdf11a7",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Women's rights",
                "uuid": "6ead8551-bfd2-4839-99e6-f4b57af095d8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Social boycott",
                "uuid": "321c3f07-bc25-4d2a-8483-54a65530ad86",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Rights of SC/ST Communities (Dalit Adivasi)",
                "uuid": "631bd65d-5257-4db1-9612-b0b861ff3957",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Labour's Rights (voided~265645)",
                "uuid": "d996d8d4-bce5-45d5-ad3c-819bd98fac51",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true,
                "voided": true
              },
              {
                "name": "Financial Fraud",
                "uuid": "c22d37aa-7891-4302-8779-422617f0fc24",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("17095076-3b48-4954-b8aa-b70e4c6d2930").containsAnswerConceptNameOtherThan("4012e98a-eb61-47fb-9f33-afeb3a66fff9").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4987907c-78bf-4297-88e4-ef831d8d9c4c").containsAnswerConceptNameOtherThan("dc5d596d-3f05-4a48-ae28-a9faf4155a18").and.when.valueInRegistration("4987907c-78bf-4297-88e4-ef831d8d9c4c").containsAnswerConceptNameOtherThan("5f88add0-3407-48cc-ba89-5f9218aa6e5a").matches();
  
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("eb7b6609-c2aa-4697-8a18-fc9261bb983b").containsAnyAnswerConceptName("dc5d596d-3f05-4a48-ae28-a9faf4155a18","5f88add0-3407-48cc-ba89-5f9218aa6e5a").and.when.valueInRegistration("4987907c-78bf-4297-88e4-ef831d8d9c4c").containsAnyAnswerConceptName("dc5d596d-3f05-4a48-ae28-a9faf4155a18","5f88add0-3407-48cc-ba89-5f9218aa6e5a").matches();
  
  if(condition11 ) {
    _.forEach(["65fda2ac-cdae-4f2a-af78-9cafb0b6f237"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 || condition22 ) {
    _.forEach(["631bd65d-5257-4db1-9612-b0b861ff3957"], (answer) => {
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
                      "Women’s Rights"
                    ],
                    "answerUuidsToSkip": [
                      "65fda2ac-cdae-4f2a-af78-9cafb0b6f237"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "scope": "registration",
                          "conceptName": "Gender of victim",
                          "conceptUuid": "17095076-3b48-4954-b8aa-b70e4c6d2930",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Female"
                          ],
                          "answerConceptUuids": [
                            "4012e98a-eb61-47fb-9f33-afeb3a66fff9"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
                    "answersToSkip": [
                      "Rights of SC/ST Communities (Dalit Adivasi)"
                    ],
                    "answerUuidsToSkip": [
                      "631bd65d-5257-4db1-9612-b0b861ff3957"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Social Category of victim",
                          "conceptUuid": "4987907c-78bf-4297-88e4-ef831d8d9c4c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "SC"
                          ],
                          "answerConceptUuids": [
                            "dc5d596d-3f05-4a48-ae28-a9faf4155a18"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Social Category of victim",
                          "conceptUuid": "4987907c-78bf-4297-88e4-ef831d8d9c4c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "ST"
                          ],
                          "answerConceptUuids": [
                            "5f88add0-3407-48cc-ba89-5f9218aa6e5a"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Social Category of opponent",
                          "conceptUuid": "eb7b6609-c2aa-4697-8a18-fc9261bb983b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "SC",
                            "ST"
                          ],
                          "answerConceptUuids": [
                            "dc5d596d-3f05-4a48-ae28-a9faf4155a18",
                            "5f88add0-3407-48cc-ba89-5f9218aa6e5a"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Social Category of victim",
                          "conceptUuid": "4987907c-78bf-4297-88e4-ef831d8d9c4c",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "SC",
                            "ST"
                          ],
                          "answerConceptUuids": [
                            "dc5d596d-3f05-4a48-ae28-a9faf4155a18",
                            "5f88add0-3407-48cc-ba89-5f9218aa6e5a"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
          "name": "Others theme of case, please specify",
          "uuid": "ef38851f-7c76-4804-a4a9-b6811d8bb29e",
          "keyValues": [],
          "concept": {
            "name": "Others theme of case, please specify",
            "uuid": "4bf4e35f-96ab-4156-9640-b7e57af85113",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("92a93d51-4899-45d3-af53-99c3bf3d7768").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others theme of case"
                          ],
                          "answerConceptUuids": [
                            "92a93d51-4899-45d3-af53-99c3bf3d7768"
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
          "name": "Act / Offence",
          "uuid": "0672c056-f164-4f14-aa62-89268c91c9dc",
          "keyValues": [],
          "concept": {
            "name": "Act / Offence (womens right)",
            "uuid": "57df7482-20dc-4af0-87ce-c4110df7fdf3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Victim Compensation (only select if litigation is about victim compensation)",
                "uuid": "0de7bdd3-ab26-4c45-a7ce-799f6018873a",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Witchcraft",
                "uuid": "fd4313ca-f8e6-4a0f-a700-92c45ca6adeb",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "IPC dowry death",
                "uuid": "a3ecde0f-0f49-4a83-8487-726da41a7da9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "IPC sexual offences",
                "uuid": "b250d03d-4a83-4c82-98c4-67090dec2010",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "IPC 498A",
                "uuid": "88f16440-2db4-4dc2-ad8c-1cc99d96b9ab",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Abetment to suicide",
                "uuid": "8c142fb0-3764-4e92-82ed-25371d340f80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "IT Act",
                "uuid": "30ab86bd-e4bb-483e-891a-5d1fd72dd10b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Dowry Prohibition Act",
                "uuid": "7037d350-5a32-487c-b266-11c0625ae714",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Divorce/custody/adoption etc. under personal law",
                "uuid": "ca75d84a-d3d8-4c1e-a1f4-bd209d3c809d",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Domestic Violence Act",
                "uuid": "d3f8811d-718f-435c-9654-eec25500f15b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Maintenance",
                "uuid": "68897a8d-fc8e-496d-83f0-2aea137b0520",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Victim Compensation",
                "uuid": "e102dec1-4855-454c-ac4d-a1fcc2b5c0b4",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "IPC trafficking and kidnapping",
                "uuid": "75133d05-864e-4fa6-8edb-0992be96b113",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "IPC acid attack",
                "uuid": "05cb334c-40a9-495b-b831-8f031f96b641",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Other Act / Offence (women's right)",
                "uuid": "25a56761-2ed4-4e77-8eda-ed5f55639905",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("65fda2ac-cdae-4f2a-af78-9cafb0b6f237").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Women’s Rights"
                          ],
                          "answerConceptUuids": [
                            "65fda2ac-cdae-4f2a-af78-9cafb0b6f237"
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
          "name": "Other Act / Offence , please specify",
          "uuid": "44b91f80-34fc-4e2c-8d0a-f5fd07a9ef6a",
          "keyValues": [],
          "concept": {
            "name": "Other Act / Offence (women's right), please specify",
            "uuid": "ac61b221-f90e-4076-a9da-1ad7821fbc22",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("57df7482-20dc-4af0-87ce-c4110df7fdf3").containsAnswerConceptName("25a56761-2ed4-4e77-8eda-ed5f55639905").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / Offence (women's right)",
                          "conceptUuid": "57df7482-20dc-4af0-87ce-c4110df7fdf3",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / Offence (women's right)"
                          ],
                          "answerConceptUuids": [
                            "25a56761-2ed4-4e77-8eda-ed5f55639905"
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
          "name": "Act / offence",
          "uuid": "88ece4e4-d606-48e2-b342-94e802216ce0",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (land rights)",
            "uuid": "3db5dae3-5b17-4d0d-9a4d-f1878d4c2243",
            "dataType": "Coded",
            "answers": [
              {
                "name": "CPC",
                "uuid": "505334e6-051a-4398-83b4-a38b097b16ea",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Land Revenue Code",
                "uuid": "f18f43c2-046f-48a6-af54-42af69cb8d18",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Succession Act / personal law",
                "uuid": "e4b1c1cb-30c4-43ba-9d3e-258bf81e8937",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "LARR",
                "uuid": "8399cecf-d088-4ffe-8248-48b82d16be4c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Act / offence (land rights)",
                "uuid": "e871a269-4f18-47ba-8022-9121d50fa551",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("fb503cbc-5051-4c40-8d98-dec8ef0d2758").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Land Rights"
                          ],
                          "answerConceptUuids": [
                            "fb503cbc-5051-4c40-8d98-dec8ef0d2758"
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
          "name": "Other Act / offence , please specify",
          "uuid": "d37a8932-f75d-42b8-90cb-b85795bab1ed",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (land rights), please specify",
            "uuid": "989571b2-0a4d-452d-8215-0064203b3bd7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("3db5dae3-5b17-4d0d-9a4d-f1878d4c2243").containsAnswerConceptName("e871a269-4f18-47ba-8022-9121d50fa551").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (land rights)",
                          "conceptUuid": "3db5dae3-5b17-4d0d-9a4d-f1878d4c2243",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (land rights)"
                          ],
                          "answerConceptUuids": [
                            "e871a269-4f18-47ba-8022-9121d50fa551"
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
          "name": "Act / offence",
          "uuid": "e365fb85-6ed7-41d1-9c1f-f3a39e99436f",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (labour rights)",
            "uuid": "30df70d5-96c0-4147-95a3-d6196b1e7924",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Industrial Disputes Act",
                "uuid": "349b506b-ca53-4713-a4a8-c0172ce6aede",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Act / offence (labour rights)",
                "uuid": "a2d80800-19b4-41f0-9b9e-98be1f6ba516",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Provident Fund",
                "uuid": "164b6a38-6aa0-43fd-9ec9-efef110222fa",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Minimum wages / payment of wages act",
                "uuid": "db6e69f7-4538-4172-a3e6-28e5cf7dfd21",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Gratuity",
                "uuid": "14ccd3bc-fc1a-4d07-bcb4-64d8104fffdc",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Employee compensation",
                "uuid": "cbf5bf17-2c59-4df3-af34-547dd640633c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("f7ce17cd-b888-45f1-a976-8dcf028efbed").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Labour Rights"
                          ],
                          "answerConceptUuids": [
                            "f7ce17cd-b888-45f1-a976-8dcf028efbed"
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
          "name": "Other Act / offence , please specify",
          "uuid": "2d5d4a14-8c1f-4968-811a-462129024589",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (labour rights), please specify",
            "uuid": "14f8d128-ed45-401f-b69d-b541107c6afa",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("30df70d5-96c0-4147-95a3-d6196b1e7924").containsAnswerConceptName("a2d80800-19b4-41f0-9b9e-98be1f6ba516").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (labour rights)",
                          "conceptUuid": "30df70d5-96c0-4147-95a3-d6196b1e7924",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (labour rights)"
                          ],
                          "answerConceptUuids": [
                            "a2d80800-19b4-41f0-9b9e-98be1f6ba516"
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
          "name": "Act / offence",
          "uuid": "d2b97e87-1e5f-4633-92ec-71d60fd416dd",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (consumer)",
            "uuid": "2897555a-ba05-4dfe-9e34-7e98395c0792",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other Act / offence (consumer)",
                "uuid": "c4133e8f-f73b-43ad-a567-aae943862c02",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Consumer protection act",
                "uuid": "3837a67c-7695-4b79-ac75-8b5c002765d5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("096d5dcf-4e69-4c17-93e4-90d54fc8798e").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Consumer Rights"
                          ],
                          "answerConceptUuids": [
                            "096d5dcf-4e69-4c17-93e4-90d54fc8798e"
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
          "name": "Other Act / offence , please specify",
          "uuid": "a277bb40-7e8d-4b8e-9dd2-457604e366a9",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (consumer), please specify",
            "uuid": "84934a1a-cebb-4a53-8ffe-0ede17290e55",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2897555a-ba05-4dfe-9e34-7e98395c0792").containsAnswerConceptName("c4133e8f-f73b-43ad-a567-aae943862c02").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (consumer)",
                          "conceptUuid": "2897555a-ba05-4dfe-9e34-7e98395c0792",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (consumer)"
                          ],
                          "answerConceptUuids": [
                            "c4133e8f-f73b-43ad-a567-aae943862c02"
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
          "name": "Act / offence",
          "uuid": "98fe589c-9fb3-435d-8336-da645e562775",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (prisoners rights)",
            "uuid": "8ffdedc8-d8e4-4808-aa60-7b074a1a5958",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Illegal arrest",
                "uuid": "d404690f-1038-45d9-8a96-87ad2aac1edb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Act / offence (prisoners rights)",
                "uuid": "5d71b848-5577-4639-80eb-250cffed6396",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Custodial torture / Death",
                "uuid": "974f2793-4759-45b5-88b8-f85e8a479ac6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Bail",
                "uuid": "90f3c6f4-bb5e-4913-ad76-045711d0c6e4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("e3cb96f0-62e7-4428-b136-d325c587d0e6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Prisoners’ Rights"
                          ],
                          "answerConceptUuids": [
                            "e3cb96f0-62e7-4428-b136-d325c587d0e6"
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
          "name": "Other Act / offence , please specify",
          "uuid": "f7a053eb-9709-44a9-98e2-5c241921112b",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (prisoners rights), please specify",
            "uuid": "100da6d1-53f6-4fff-9c60-a1804ec802b9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8ffdedc8-d8e4-4808-aa60-7b074a1a5958").containsAnswerConceptName("5d71b848-5577-4639-80eb-250cffed6396").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (prisoners rights)",
                          "conceptUuid": "8ffdedc8-d8e4-4808-aa60-7b074a1a5958",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (prisoners rights)"
                          ],
                          "answerConceptUuids": [
                            "5d71b848-5577-4639-80eb-250cffed6396"
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
          "name": "Act/ offence",
          "uuid": "65ac20d5-0269-4b3b-9d74-a53972a30249",
          "keyValues": [],
          "concept": {
            "name": "Act/ offence (child rights)",
            "uuid": "ed44e193-f685-4911-b997-ba04b007e8ad",
            "dataType": "Coded",
            "answers": [
              {
                "name": "JJ Act",
                "uuid": "8c092be1-5a55-491f-8d72-090491a558d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Act/ offence (child rights)",
                "uuid": "681a8498-6a65-4a38-a87b-88482e231f0f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "POCSO",
                "uuid": "b4618a6d-82df-4c4a-abea-5a55bf3c4b57",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Child labour",
                "uuid": "59ec7b3e-2a82-4a83-89ef-33500e95182c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Child marriage",
                "uuid": "ef537526-0afb-4967-a7b5-20efc6d9b8af",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Victim Compensation (only select if litigation is about victim compensation)",
                "uuid": "0de7bdd3-ab26-4c45-a7ce-799f6018873a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("b5db4acf-4161-4b5b-a495-a8a42a854868").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Child Rights"
                          ],
                          "answerConceptUuids": [
                            "b5db4acf-4161-4b5b-a495-a8a42a854868"
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
          "name": "Other Act/ offence , please specify",
          "uuid": "c4239650-9b7f-4309-b62b-a03f137ef28d",
          "keyValues": [],
          "concept": {
            "name": "Other Act/ offence (child rights), please specify",
            "uuid": "716a61c2-c91d-41e6-aa6c-59ccc0cc9b75",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("ed44e193-f685-4911-b997-ba04b007e8ad").containsAnswerConceptName("681a8498-6a65-4a38-a87b-88482e231f0f").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act/ offence (child rights)",
                          "conceptUuid": "ed44e193-f685-4911-b997-ba04b007e8ad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act/ offence (child rights)"
                          ],
                          "answerConceptUuids": [
                            "681a8498-6a65-4a38-a87b-88482e231f0f"
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
          "name": "Act / offence",
          "uuid": "7aea86ae-3d74-41d7-989b-76b97219a2e1",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (Rights of fisherfolk)",
            "uuid": "2c886435-bb26-4206-9fd4-7811083a5871",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Social Security / Identity",
                "uuid": "6f93f210-7165-446c-998b-007e0dc503e1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Act / offence (Rights of fisherfolk)",
                "uuid": "5c4c38d2-dca0-43ff-b0b9-4c41317fcbf9",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Land (revenue / LARR etc)",
                "uuid": "ac61db06-aa96-4503-9c7d-aeed6da20fdf",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "CRZ",
                "uuid": "b34cd576-a90f-4e26-a9b6-260251133fa8",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Infrastructure",
                "uuid": "bf4caa22-3c01-4fc2-86a8-5bfd23e5844c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Compensation",
                "uuid": "23d25b46-8600-418b-80ba-398d0fbd1d0a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("5290aa15-0073-4e27-b673-b5821fdf11a7").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Fisherfolk Rights"
                          ],
                          "answerConceptUuids": [
                            "5290aa15-0073-4e27-b673-b5821fdf11a7"
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
          "name": "Other Act / offence , Please Specify",
          "uuid": "799a85b7-70df-4e3c-8c5d-3ead8c5bdb05",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (Rights of fisherfolk), Please Specify",
            "uuid": "8fa07dd6-b1c2-4676-a06d-d9006e3feb8e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2c886435-bb26-4206-9fd4-7811083a5871").containsAnswerConceptName("5c4c38d2-dca0-43ff-b0b9-4c41317fcbf9").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (Rights of fisherfolk)",
                          "conceptUuid": "2c886435-bb26-4206-9fd4-7811083a5871",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (Rights of fisherfolk)"
                          ],
                          "answerConceptUuids": [
                            "5c4c38d2-dca0-43ff-b0b9-4c41317fcbf9"
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
          "name": "Act / offence",
          "uuid": "eb8b7063-2805-4145-9d2b-f1c1181c59cb",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (minority rights)",
            "uuid": "197b8fef-49a9-428d-adda-f8c9f1f800da",
            "dataType": "Coded",
            "answers": [
              {
                "name": "IPC",
                "uuid": "f5ea8cde-4de9-4bca-98ee-5674615397c0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Cattle Protection Act",
                "uuid": "b2611f88-1822-400f-82a7-05a6d30ef4fe",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Freedom of religion act",
                "uuid": "416533b2-2656-4a26-9625-e19817e103ce",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Protection from mob violence",
                "uuid": "fb618e5b-20d1-4d60-8e22-f81c7f82ecde",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Act / offence (minority rights)",
                "uuid": "9e7596a1-fd99-4abd-a25a-09038b134da0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Hurting religious sentiments",
                "uuid": "ac117198-c02a-424b-9296-0ad8136eb22a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("06709008-bebd-4ca9-a04e-0423131eba7c").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Minority Rights"
                          ],
                          "answerConceptUuids": [
                            "06709008-bebd-4ca9-a04e-0423131eba7c"
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
          "name": "Other Act / offence ,please specify",
          "uuid": "8e649c91-39b2-4b97-9de5-135a2900b9c6",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (minority rights),please specify",
            "uuid": "acd8cc31-d205-4871-9e6b-74daf11f770d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("197b8fef-49a9-428d-adda-f8c9f1f800da").containsAnswerConceptName("9e7596a1-fd99-4abd-a25a-09038b134da0").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (minority rights)",
                          "conceptUuid": "197b8fef-49a9-428d-adda-f8c9f1f800da",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (minority rights)"
                          ],
                          "answerConceptUuids": [
                            "9e7596a1-fd99-4abd-a25a-09038b134da0"
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
          "name": "Act / offence",
          "uuid": "79f45ddb-6696-49cf-b9e9-5aeaf6443eec",
          "keyValues": [],
          "concept": {
            "name": "Rights of SC/ST community",
            "uuid": "74056c05-df3f-4e9e-aa2f-ffcedc98cd16",
            "dataType": "Coded",
            "answers": [
              {
                "name": "SC/ST PoA",
                "uuid": "fe356183-2698-4fae-9c83-b8f2c32439a6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Act / offence (rights of sc/st communities)",
                "uuid": "0dfa87a8-d98b-4577-896b-596ff368c5a5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Victim Compensation",
                "uuid": "e102dec1-4855-454c-ac4d-a1fcc2b5c0b4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 19,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("631bd65d-5257-4db1-9612-b0b861ff3957").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Rights of SC/ST Communities (Dalit Adivasi)"
                          ],
                          "answerConceptUuids": [
                            "631bd65d-5257-4db1-9612-b0b861ff3957"
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
          "name": "Other Act / offence  , please specify",
          "uuid": "896719fe-066b-498b-b995-04459d319c97",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence ( SC/ST communities ) , please specify",
            "uuid": "6192c3e6-6488-4014-bbed-76c0b24b9590",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("74056c05-df3f-4e9e-aa2f-ffcedc98cd16").containsAnswerConceptName("0dfa87a8-d98b-4577-896b-596ff368c5a5").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Rights of SC/ST community",
                          "conceptUuid": "74056c05-df3f-4e9e-aa2f-ffcedc98cd16",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (rights of sc/st communities)"
                          ],
                          "answerConceptUuids": [
                            "0dfa87a8-d98b-4577-896b-596ff368c5a5"
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
          "name": "Act / offence",
          "uuid": "e35a72fd-00e0-4cc9-ace7-6dc8f5764fb0",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (financial fraud)",
            "uuid": "0122fe96-a79b-4f6f-8ed2-c050998cb642",
            "dataType": "Coded",
            "answers": [
              {
                "name": "RBI Ombudsman Scheme",
                "uuid": "e4570137-ec81-44a4-b9d7-cdc2008ab40c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other Act / offence (financial fraud)",
                "uuid": "49273865-66d2-48f2-9956-7f31ac9ba7a9",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "IT Act",
                "uuid": "30ab86bd-e4bb-483e-891a-5d1fd72dd10b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "IPC Other",
                "uuid": "306dc1f5-18bc-4031-bbed-6ea8a9125d47",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Cheque Bounce (Negotiable Instrument Act)",
                "uuid": "1373111e-142c-4314-8bff-ee7864819ae8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Chit Fund",
                "uuid": "98acdfef-0996-4f2f-bd57-f13d5fc15a4e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other GRM",
                "uuid": "92b9d715-d7f4-4244-90af-6eead74cc60b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 21,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("c22d37aa-7891-4302-8779-422617f0fc24").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Financial Fraud"
                          ],
                          "answerConceptUuids": [
                            "c22d37aa-7891-4302-8779-422617f0fc24"
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
          "name": "Other Act / offence , please specify",
          "uuid": "8772eace-954e-484d-a6b3-fef71c6afdb4",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (financial fraud), please specify",
            "uuid": "6a55f79e-43f7-4e36-a797-c1906fbd30a3",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0122fe96-a79b-4f6f-8ed2-c050998cb642").containsAnswerConceptName("49273865-66d2-48f2-9956-7f31ac9ba7a9").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (financial fraud)",
                          "conceptUuid": "0122fe96-a79b-4f6f-8ed2-c050998cb642",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (financial fraud)"
                          ],
                          "answerConceptUuids": [
                            "49273865-66d2-48f2-9956-7f31ac9ba7a9"
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
          "name": "Act / offence",
          "uuid": "cb270c54-a1d9-4f9c-a99c-93be6c3b9a9b",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (Social Boycott)",
            "uuid": "0127d408-91fb-4eb1-906f-febbc882f69b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Industrial Disputes Act",
                "uuid": "349b506b-ca53-4713-a4a8-c0172ce6aede",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "IPC",
                "uuid": "f5ea8cde-4de9-4bca-98ee-5674615397c0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Gratuity",
                "uuid": "14ccd3bc-fc1a-4d07-bcb4-64d8104fffdc",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other Act / offence (Social Boycott)",
                "uuid": "b443105a-a13d-4e66-9078-35f992d02159",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Protection of Civil Rights Act",
                "uuid": "efd056d2-a7b9-43b6-b432-14608f4bb7e3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 23,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("af8c13be-ced0-424c-b5bb-0e8e12b3bb29").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Social Boycott"
                          ],
                          "answerConceptUuids": [
                            "af8c13be-ced0-424c-b5bb-0e8e12b3bb29"
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
          "name": "Other Act / offence , please specify",
          "uuid": "c3dcfa0d-80ed-4053-9b35-2e05335b41d3",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (Social Boycott), please specify",
            "uuid": "855f740d-64f7-40a9-b8e6-6732e9c65781",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0127d408-91fb-4eb1-906f-febbc882f69b").containsAnswerConceptName("b443105a-a13d-4e66-9078-35f992d02159").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Act / offence (Social Boycott)",
                          "conceptUuid": "0127d408-91fb-4eb1-906f-febbc882f69b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Act / offence (Social Boycott)"
                          ],
                          "answerConceptUuids": [
                            "b443105a-a13d-4e66-9078-35f992d02159"
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
          "name": "Description / Facts of the Case",
          "uuid": "c33ce283-60ef-45b2-bef8-6d532cc559e1",
          "keyValues": [],
          "concept": {
            "name": "Description / Facts of the Case",
            "uuid": "aadbd163-b647-4859-9467-fd8b9a713282",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Upload consent form - File",
          "uuid": "f963b0b9-aae1-4aac-b3a8-c54849d6a999",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload consent form",
            "uuid": "89261fc0-f4ca-4ff2-ad96-bd27d3eece37",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Upload consent form - Image",
          "uuid": "7b69011f-5075-4562-a6b5-5fcc1d010a92",
          "keyValues": [],
          "concept": {
            "name": "Upload consent form - Image",
            "uuid": "33ef4aad-8a5e-407a-897c-54cf989284f9",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Primary Theme",
          "uuid": "f3cfc450-f6b8-4fff-8ee2-be6711ed9a0b",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Primary Theme",
            "uuid": "6779b8e0-f60d-446d-a371-e5d05931c69c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Prisoners’ Rights",
                "uuid": "e3cb96f0-62e7-4428-b136-d325c587d0e6",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Women’s Rights",
                "uuid": "65fda2ac-cdae-4f2a-af78-9cafb0b6f237",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Land Rights",
                "uuid": "fb503cbc-5051-4c40-8d98-dec8ef0d2758",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Child Rights",
                "uuid": "b5db4acf-4161-4b5b-a495-a8a42a854868",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Fisherfolk Rights",
                "uuid": "5290aa15-0073-4e27-b673-b5821fdf11a7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Financial Fraud",
                "uuid": "c22d37aa-7891-4302-8779-422617f0fc24",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Rights of SC/ST Communities (Dalit Adivasi)",
                "uuid": "631bd65d-5257-4db1-9612-b0b861ff3957",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Labour's Rights (voided~265645)",
                "uuid": "d996d8d4-bce5-45d5-ad3c-819bd98fac51",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true,
                "voided": true
              },
              {
                "name": "Labour Rights",
                "uuid": "f7ce17cd-b888-45f1-a976-8dcf028efbed",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Other theme of case",
                "uuid": "92a93d51-4899-45d3-af53-99c3bf3d7768",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Consumer Rights",
                "uuid": "096d5dcf-4e69-4c17-93e4-90d54fc8798e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Social Boycott",
                "uuid": "af8c13be-ced0-424c-b5bb-0e8e12b3bb29",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
  const individual = params.entity;
  const formElement = params.formElement;
  const moment = imports.moment;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const themeQuestionUUID = "05865e79-c454-47c2-af03-fc719213b576";
  const isThemeOfCaseDefined = new imports.rulesConfig.RuleCondition({ individual, formElement })
    .when.valueInRegistration(themeQuestionUUID).defined.matches();

  function checkAvailability(optionUUID) {
    return new imports.rulesConfig.RuleCondition({ individual, formElement })
      .when.valueInRegistration(themeQuestionUUID)
      .containsAnswerConceptName(optionUUID)
      .matches();
  }

  if (isThemeOfCaseDefined) {
    let priorityOptionList = [
      { uuid: "b5db4acf-4161-4b5b-a495-a8a42a854868", name: "Child Rights" },
      { uuid: "af8c13be-ced0-424c-b5bb-0e8e12b3bb29", name: "Social Boycott" },
      { uuid: "c22d37aa-7891-4302-8779-422617f0fc24", name: "Financial Fraud" },
      { uuid: "5290aa15-0073-4e27-b673-b5821fdf11a7", name: "Fisherfolk Rights" },
      { uuid: "096d5dcf-4e69-4c17-93e4-90d54fc8798e", name: "Consumer Rights" },
      { uuid: "f7ce17cd-b888-45f1-a976-8dcf028efbed", name: "Labour Rights" },
      { uuid: "06709008-bebd-4ca9-a04e-0423131eba7c", name: "Minority Rights" },
      { uuid: "631bd65d-5257-4db1-9612-b0b861ff3957", name: "Rights of SC/ST Communities (Dalit Adivasi)" },
      { uuid: "fb503cbc-5051-4c40-8d98-dec8ef0d2758", name: "Land Rights" },
      { uuid: "e3cb96f0-62e7-4428-b136-d325c587d0e6", name: "Prisoners’ Rights" },
      { uuid: "65fda2ac-cdae-4f2a-af78-9cafb0b6f237", name: "Women’s Rights" },
      { uuid: "92a93d51-4899-45d3-af53-99c3bf3d7768", name: "Other theme of case" }
    ];

    for (const option of priorityOptionList) {
      if (checkAvailability(option.uuid)) {
        value = option.name;
        break;
      }
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": false
        },
        {
          "name": "Act / offence (land rights)",
          "uuid": "3613c01e-97ff-4b0a-8d57-947e884f890d",
          "keyValues": [],
          "concept": {
            "name": "Act / offence (land rights) (voided~265542)",
            "uuid": "4b12d5ef-a4fe-434c-aad2-51dc773a18c3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Land Revenue Code",
                "uuid": "f18f43c2-046f-48a6-af54-42af69cb8d18",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "CPC",
                "uuid": "505334e6-051a-4398-83b4-a38b097b16ea",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Act / offence (land rights), please specify (voided~265540)",
                "uuid": "b45a8082-11af-4a2c-a2c0-ac368e9037da",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true,
                "voided": true
              },
              {
                "name": "LARR",
                "uuid": "8399cecf-d088-4ffe-8248-48b82d16be4c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Succession Act / personal law",
                "uuid": "e4b1c1cb-30c4-43ba-9d3e-258bf81e8937",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 29,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("05865e79-c454-47c2-af03-fc719213b576").containsAnswerConceptName("7df1508b-c290-4628-8ac9-0e69d2790c51").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Theme of case",
                          "conceptUuid": "05865e79-c454-47c2-af03-fc719213b576",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Land rights"
                          ],
                          "answerConceptUuids": [
                            "7df1508b-c290-4628-8ac9-0e69d2790c51"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Act / offence (land rights), please specify",
          "uuid": "b347dcea-c611-4cf2-b2ad-0efc7114a006",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (land rights), please specify (voided~265550)",
            "uuid": "08beec5e-874b-4b6d-950e-a7e18ed27e0f",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 30,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Act / offence (labour rights), please specify",
          "uuid": "f01d7074-e70a-4a27-859d-6dd26a5105dd",
          "keyValues": [],
          "concept": {
            "name": "Other Act / offence (labour rights)",
            "uuid": "a2d80800-19b4-41f0-9b9e-98be1f6ba516",
            "dataType": "NA",
            "answers": [],
            "active": true
          },
          "displayOrder": 31,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Case Theme",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const fileUpload = individual.getObservationValue("89261fc0-f4ca-4ff2-ad96-bd27d3eece37")
  const ImageUpload = individual.getObservationValue("33ef4aad-8a5e-407a-897c-54cf989284f9")

   if((fileUpload === null || fileUpload === undefined) && (ImageUpload === null || ImageUpload === undefined)){
        let validationError = imports.common.createValidationError('Please upload either image or file');
        validationResults.push(validationError);
    }
  
  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": []
}