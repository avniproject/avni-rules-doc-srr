{
  "name": "Individual Registration",
  "uuid": "a3ec1c7a-e561-4604-84c0-271511427a87",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "e7f57031-3798-4548-a1d5-8ac397583ae3",
      "name": "Individual information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Temporary",
          "uuid": "66384c60-8c24-4f19-9be4-758482cf3a31",
          "keyValues": [],
          "concept": {
            "name": "Temporary",
            "uuid": "bf0e812c-b68f-4f58-a785-cf71272aaac8",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Father/Husband's name",
          "uuid": "906c2422-772f-483c-ac41-40b93e81ccf1",
          "keyValues": [],
          "concept": {
            "name": "Father/Husband's name",
            "uuid": "30b9d970-c8df-43e1-9af7-c678d1daa75f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Mother's Name",
          "uuid": "86168c2f-788f-44cb-8e70-56169cfc8994",
          "keyValues": [],
          "concept": {
            "name": "Mother's Name",
            "uuid": "9beec364-da07-4950-a9c1-504abbb8c185",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.lessThan(6).matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "lessThan"
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
          "name": "Completed years of education",
          "uuid": "214963c0-7880-4139-a59f-07af8dadd25a",
          "keyValues": [],
          "concept": {
            "name": "Completed years of education",
            "uuid": "dc188982-3cd5-4891-97ee-c6a9919d5d0d",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 20,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThan(10).and.when.gender.equals("Female").matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 10
                        },
                        "operator": "greaterThan"
                      },
                      {
                        "lhs": {
                          "type": "gender"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Female"
                        },
                        "operator": "equals"
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
          "name": "What is your primary occupation",
          "uuid": "a0f2e217-d81d-4da6-8116-df3ab5d16aa2",
          "keyValues": [],
          "concept": {
            "name": "What is your primary occupation",
            "uuid": "7c1e2201-34c0-4bf3-b0bc-160951b05c35",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NON-AGRICULTURAL LABOURER(UNSKILLED)",
                "uuid": "db01dd93-cc9d-4027-8417-78be8856d338",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "BUSINESS /PETTY TRADER/ SELF EMPLOYED",
                "uuid": "20f69461-9282-47c5-8380-784b347f9fa6",
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
                "order": 14,
                "active": true
              },
              {
                "name": "Not working/retired/unemployed",
                "uuid": "d833083d-0bfb-45c7-967b-859e4bec050a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "SALARIED EMPLOYEE /GOVERNMENT",
                "uuid": "43ffdb63-1d0b-4ca9-adda-1b427a9bed97",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Salaried employee /government",
                "uuid": "0c533f26-4023-4070-855f-ba5d44845eff",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Business /petty trader/ self employed",
                "uuid": "15ab1451-94ff-4078-86ae-f6186e4a8bfb",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Agricultural labourer",
                "uuid": "585d2b1a-2830-4204-b14b-17a9beb94f06",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Non-agricultural labourer(skilled)",
                "uuid": "030f6d1b-645d-442f-b063-ffebfbd73eb9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "SALARIED EMPLOYEE PRIVATE",
                "uuid": "e60eb3e9-8fa6-4d1c-8cc4-3176c761b7eb",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "NON-AGRICULTURAL LABOURER(SKILLED)",
                "uuid": "a4cff200-ba32-419f-bb9b-960facc535aa",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Salaried employee private",
                "uuid": "84c205b0-fc3c-4ac9-8c57-2d80942c49f5",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "NOT WORKING/RETIRED/UNEMPLOYED",
                "uuid": "f654b699-d828-4483-902e-2d132c5550ce",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Non-agricultural labourer(unskilled)",
                "uuid": "3c61df7e-57cd-41d2-8b4a-452cd210c2db",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "AGRICULTURAL LABOURER",
                "uuid": "24199cbd-1cc3-4b07-b525-58fc9f86a99c",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThan(10).and.when.gender.equals("Female").matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 10
                        },
                        "operator": "greaterThan"
                      },
                      {
                        "lhs": {
                          "type": "gender"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Female"
                        },
                        "operator": "equals"
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
          "name": "Specify, other occupation",
          "uuid": "f2662a28-7043-41d8-80a5-9f4fade98fc8",
          "keyValues": [],
          "concept": {
            "name": "Specify, other occupation",
            "uuid": "06bae9cd-80a3-4e0a-9f2b-773b1ebd7d6c",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("7c1e2201-34c0-4bf3-b0bc-160951b05c35").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
    
  const isTextDefined = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("06bae9cd-80a3-4e0a-9f2b-773b1ebd7d6c").defined.matches();
  
  visibility = condition11 ;
  
  if (isTextDefined){
  
     const text = individual.getObservationValue("06bae9cd-80a3-4e0a-9f2b-773b1ebd7d6c");
     
     if (text.length > 50) validationErrors.push("Text length should not be greater than 50");
  }
  
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Marital status",
          "uuid": "d4d9283f-37a8-4495-9769-0cd3d78cfaf6",
          "keyValues": [],
          "concept": {
            "name": "Martial status",
            "uuid": "d9de0aeb-510e-4fe2-bb4b-e6bcb00a4ed0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Divorced",
                "uuid": "9abbb4c3-1e12-4061-94b5-bdb1ed06749f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Separated",
                "uuid": "e1cb27d4-823d-4491-bd89-fd3ee2d79bad",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Widow",
                "uuid": "95147c46-bf04-470e-907d-87a943de03d5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "None",
                "uuid": "d1a185a8-c116-4b20-a37f-2deb03ed9654",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Married",
                "uuid": "debf802f-ca09-43e6-9f90-96460a483455",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Unmarried",
                "uuid": "26959d7d-076d-4b8a-ba75-1ba098fd0d19",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThan(10).and.when.gender.equals("Female").matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 10
                        },
                        "operator": "greaterThan"
                      },
                      {
                        "lhs": {
                          "type": "gender"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Female"
                        },
                        "operator": "equals"
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
          "name": "Age at marriage",
          "uuid": "0c6b55f5-b92a-4502-9400-f1edd27be4d9",
          "keyValues": [],
          "concept": {
            "name": "Age at marriage",
            "uuid": "1fb41422-ceee-4222-bcc0-0a77264b7081",
            "dataType": "Numeric",
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
  let ageAtMarriageObservation = individual.findObservation('1fb41422-ceee-4222-bcc0-0a77264b7081');
  let ageAtMarriageValue = _.isEmpty(ageAtMarriageObservation) ? ageAtMarriageObservation : ageAtMarriageObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.lessThan(ageAtMarriageValue).matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d9de0aeb-510e-4fe2-bb4b-e6bcb00a4ed0").containsAnyAnswerConceptName("debf802f-ca09-43e6-9f90-96460a483455","9abbb4c3-1e12-4061-94b5-bdb1ed06749f","95147c46-bf04-470e-907d-87a943de03d5","e1cb27d4-823d-4491-bd89-fd3ee2d79bad").matches();
  
  if(condition11 ){
    validationErrors.push("Age at marriage cannot be greater than current age.");  
}
    visibility = condition12 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Age at marriage cannot be greater than current age."
                  },
                  "actionType": "validationError"
                },
                {}
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Age at marriage",
                          "conceptUuid": "1fb41422-ceee-4222-bcc0-0a77264b7081"
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
                          "scope": "registration",
                          "conceptName": "Martial status",
                          "conceptUuid": "d9de0aeb-510e-4fe2-bb4b-e6bcb00a4ed0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Married",
                            "Divorced",
                            "Widow",
                            "Separated"
                          ],
                          "answerConceptUuids": [
                            "debf802f-ca09-43e6-9f90-96460a483455",
                            "9abbb4c3-1e12-4061-94b5-bdb1ed06749f",
                            "95147c46-bf04-470e-907d-87a943de03d5",
                            "e1cb27d4-823d-4491-bd89-fd3ee2d79bad"
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
          "name": "RCH ID",
          "uuid": "de23f15c-2299-4ce3-a5fa-7282f61b2b76",
          "keyValues": [],
          "concept": {
            "name": "RCH ID",
            "uuid": "e2d64a0c-a791-426b-b7ff-23c2fe3ca5a0",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.gender.equals("Female").and.when.ageInYears.greaterThan(10).matches();
  
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
                          "type": "gender"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Female"
                        },
                        "operator": "equals"
                      },
                      {
                        "lhs": {
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 10
                        },
                        "operator": "greaterThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "validFormat": {
            "regex": "^[0-9]{12}$",
            "descriptionKey": "Enter a valid 12 digit number"
          },
          "mandatory": false
        },
        {
          "name": "Poshan ID",
          "uuid": "22f0b145-187a-466c-9749-b80173989fe1",
          "keyValues": [],
          "concept": {
            "name": "Poshan ID",
            "uuid": "0615406f-4f1b-465d-b995-62aff70a52b4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Is Aadhar Seeding done?",
          "uuid": "707acc4c-bee4-4ebe-a025-b91ef0612586",
          "keyValues": [],
          "concept": {
            "name": "Is Aadhar Seeding done",
            "uuid": "13234f54-7ae0-4146-a732-f68780786a1a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThan(10).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.gender.equals("Female").matches();
  
  visibility = condition11 && condition21 ;
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 10
                        },
                        "operator": "greaterThan"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "gender"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Female"
                        },
                        "operator": "equals"
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
          "name": "Is the mother eligible for MAMTA?",
          "uuid": "1500534c-5153-40a1-abdf-d4c153ed0605",
          "keyValues": [],
          "concept": {
            "name": "Is the mother eligible for MAMTA?",
            "uuid": "8ec107be-ea89-4e79-bea5-8146213e2c97",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThan(10).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.gender.equals("Female").matches();
  
  visibility = condition11 && condition21 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is the mother enrolled for MAMATA",
          "uuid": "7aac0476-d1aa-452a-b452-73193079eb6b",
          "keyValues": [],
          "concept": {
            "name": "Is the mother enrolled for MAMATA",
            "uuid": "26f23063-b19f-4af3-8e5c-cc0da77fc87b",
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
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8ec107be-ea89-4e79-bea5-8146213e2c97").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Is the mother eligible for MAMTA?",
                          "conceptUuid": "8ec107be-ea89-4e79-bea5-8146213e2c97",
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
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Trimester of registration for MAMTA",
          "uuid": "28733cd1-f4a9-4f0f-b7a4-e006aceca92c",
          "keyValues": [],
          "concept": {
            "name": "which trimester",
            "uuid": "faa2d09f-6dd8-45ca-99ae-57fb2685abdd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Trimester 1",
                "uuid": "b27b9ec8-ef94-4981-a4bc-f6ba61b5501a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Trimester 3",
                "uuid": "7790719a-fb18-4b11-89aa-e31a04756faf",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Trimester 2",
                "uuid": "36a27687-e95f-4075-af4d-a5974703aa8a",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("26f23063-b19f-4af3-8e5c-cc0da77fc87b").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Is the mother enrolled for PMMVY",
                          "conceptUuid": "26f23063-b19f-4af3-8e5c-cc0da77fc87b",
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
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Is the beneficiary registered in the AWC?",
          "uuid": "4b41553a-041b-4b7a-a7f4-0f228a6792a2",
          "keyValues": [],
          "concept": {
            "name": "Is the beneficiary registered in the AWC?",
            "uuid": "8d8a4d13-515a-4f3c-ac7e-04d22fd4782a",
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
          "displayOrder": 15,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Is the bank account opened?",
          "uuid": "ec05ab8c-391a-4ff3-9ef0-2e3045479d6e",
          "keyValues": [],
          "concept": {
            "name": "Is the bank account opened?",
            "uuid": "abf7d09f-fdd0-4f71-99ae-68465e3aa26d",
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
          "displayOrder": 16,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Reasons for not enrolling for MAMTA?",
          "uuid": "4eb74a63-1328-43a7-9f4f-abb3abf3ac1a",
          "keyValues": [],
          "concept": {
            "name": "Reasons for not enrolling for MAMTA",
            "uuid": "ca3fbd8e-f3c2-4250-8e65-71ec2377798a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yet to be enrolled",
                "uuid": "c6edc721-c3bf-46f6-a89a-cbbd73e0b4fd",
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
                "order": 3,
                "active": true
              },
              {
                "name": "No Aadhar Card",
                "uuid": "fd73b4ea-f08a-44bf-891e-da5265750b4a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No bank account",
                "uuid": "78e0865c-cf4a-4f1c-b845-7f51bd6f46f8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Please specify other reason for not enrolling",
          "uuid": "9a285233-0097-492f-bf18-f6b47ff75fee",
          "keyValues": [],
          "concept": {
            "name": "Please specify other reason for not enrolling",
            "uuid": "97b80bc9-5f22-4b49-a947-93c5bd4cf5ba",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("ca3fbd8e-f3c2-4250-8e65-71ec2377798a").containsAnswerConceptName("caf114c0-b81a-4606-8157-73144c8d3b1f").matches();
  
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
                          "conceptName": "Reasons for not enrolling for MAMTA",
                          "conceptUuid": "ca3fbd8e-f3c2-4250-8e65-71ec2377798a",
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.gender.equals("Male").or.when.gender.equals("Other").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.ageInYears.greaterThanOrEqualTo(10).matches();
  
        visibility = !(condition11 && condition21 );
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "hideFormElementGroup"
            },
            {}
          ],
          "conditions": [
            {
              "conjunction": "and",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "gender"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Male"
                    },
                    "operator": "equals"
                  },
                  {
                    "lhs": {
                      "type": "gender"
                    },
                    "rhs": {
                      "type": "value",
                      "value": "Other"
                    },
                    "operator": "equals"
                  }
                ],
                "conjunction": "or"
              }
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "ageInYears"
                    },
                    "rhs": {
                      "type": "value",
                      "value": 10
                    },
                    "operator": "greaterThanOrEqualTo"
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "Individual information",
      "timed": false
    }
  ],
  "decisionRule": "
  "use strict";
({params, imports}) => {
    const individual = params.entity;
    const decisions = params.decisions;
    if (!individual.getObservationReadableValue('be0ab05f-b0f3-43ec-b598-fdde0679104a')) {
      decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "No"});
    }
    //create complicationBuilder using individual and then push to registrationDecisions array.
    return decisions;
},
  "visitScheduleRule": "",
  "validationRule": "",
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
    }
  ]
}