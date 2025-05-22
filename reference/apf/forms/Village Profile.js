{
  "name": "Village Profile",
  "uuid": "abe9d333-996c-4487-9cd9-12a812643490",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "01baeb29-cc23-4ce7-bb8c-5e1da921f910",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Current population of the village",
          "uuid": "1bb70de2-4afb-449a-9492-3dfa5d341255",
          "keyValues": [],
          "concept": {
            "name": "Current population of the village",
            "uuid": "5e266195-e277-433e-9f76-ff9c0bd51ba2",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 9999,
            "highNormal": 9999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("5e266195-e277-433e-9f76-ff9c0bd51ba2").greaterThan(5000).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 5000..");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 5000.."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Current population of the village",
                          "conceptUuid": "5e266195-e277-433e-9f76-ff9c0bd51ba2",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 5000
                        },
                        "operator": "greaterThan"
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
          "name": "Source of Population Data",
          "uuid": "fd7fc315-27ea-4e47-a625-67eb91751b8e",
          "keyValues": [],
          "concept": {
            "name": "Source of Population Data",
            "uuid": "374729d5-b5a5-4f0c-bdcd-efb7905c34d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Census",
                "uuid": "cd8f5bcf-0b9a-46ad-b464-e7d52a211eb0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "AWW register",
                "uuid": "9bed5293-67ea-4f11-8330-32d4d557f430",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "ASHA",
                "uuid": "b738ce8f-ada1-4de2-abcc-a602513c75f5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "name": "Is this a revenue village",
          "uuid": "de1a58bf-6c5e-4f8d-92ed-7363802f7b48",
          "keyValues": [],
          "concept": {
            "name": "Is this a revenue village",
            "uuid": "0f7d5875-7673-4d10-a22d-fd71ff12957a",
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
          "mandatory": true
        },
        {
          "name": "Total number of households in the village",
          "uuid": "92e6fa75-9e98-4b10-9a4d-d2c3541d739c",
          "keyValues": [],
          "concept": {
            "name": "Total number of households in the village",
            "uuid": "e886f881-5f4c-482a-91a0-2804c6b6b224",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("e886f881-5f4c-482a-91a0-2804c6b6b224").greaterThan(3000).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 3000.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 3000."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Total number of households in the village",
                          "conceptUuid": "e886f881-5f4c-482a-91a0-2804c6b6b224",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 3000
                        },
                        "operator": "greaterThan"
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
          "name": "Is the drainage facility available in the village",
          "uuid": "8a211b61-83a6-4309-a931-11d54fa05877",
          "keyValues": [],
          "concept": {
            "name": "Is the drainage facility available in the village",
            "uuid": "7a30744a-26cf-475e-9bce-673e7d44577e",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Village electrification",
          "uuid": "2efe6233-c480-45c5-8734-0447b6f016ee",
          "keyValues": [],
          "concept": {
            "name": "Village electrification",
            "uuid": "817498a3-1414-45e7-96f4-ec14a6f34e2a",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility : AWC",
          "uuid": "10340f6a-ecfa-473b-acca-3a3fc158ea9f",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility : AWC",
            "uuid": "203ac932-20d6-4ae1-8db7-a1577c299df3",
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
          "name": "Whether village is connected by all-weather road to the health facility: Sub Center",
          "uuid": "08d688e0-e71c-441e-92ca-aa10a60df88b",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Sub Center",
            "uuid": "6b4a4c21-af4a-4003-8848-2efa9005123e",
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
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: PHC",
          "uuid": "b6504231-6439-4df5-883d-c09e372a531a",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: PHC",
            "uuid": "bec579a9-3a3f-42db-8456-00594478fc8f",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: Maa Gruha",
          "uuid": "858bb555-b679-4873-9f4f-dce0a138c55f",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Maa Gruha",
            "uuid": "049ad570-2e0d-43bb-9cdd-49e311c655c9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: Block CHC",
          "uuid": "607a6530-db76-44fb-be46-71493e7bd953",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Block CHC",
            "uuid": "97cf279c-c91f-47b9-91de-81738f10c1b7",
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
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: Creche",
          "uuid": "bad80f05-434d-42b8-91ae-0c8b98959134",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: Creche",
            "uuid": "2e1ce2cb-73f9-4b41-99c5-45e1bf0f67ea",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: NRC",
          "uuid": "3f00175a-5cef-42b3-bcb2-dd4be430ea8c",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: NRC",
            "uuid": "9c6ad75e-11b9-4afc-9db0-dcbca89c8bed",
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
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether village is connected by all-weather road to the health facility: District Hospital",
          "uuid": "3df9b6cd-3f7d-4295-b865-72bf8d524168",
          "keyValues": [],
          "concept": {
            "name": "Whether village is connected by all-weather road to the health facility: District Hospital",
            "uuid": "78a60f3e-0749-4424-9378-32ca8bb0eb2a",
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
          "displayOrder": 14,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
          "uuid": "eda4fce4-8243-4c78-903d-509ec007ea4b",
          "keyValues": [],
          "concept": {
            "name": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
            "uuid": "a220247c-2d95-47d8-85d9-cec6b1eed5bb",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
            "active": true
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("a220247c-2d95-47d8-85d9-cec6b1eed5bb").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Time take to reach from Village (by ambulance/four wheeler) to nearest PHC (in minutes)",
                          "conceptUuid": "a220247c-2d95-47d8-85d9-cec6b1eed5bb",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
          "uuid": "c00b091d-f583-4582-86c2-0b768a230d59",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
            "uuid": "6677f6ae-c554-4712-b8f0-cb09a5943885",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("6677f6ae-c554-4712-b8f0-cb09a5943885").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to nearest CHC (in minutes)",
                          "conceptUuid": "6677f6ae-c554-4712-b8f0-cb09a5943885",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
          "uuid": "3c5e63dd-9fd2-4f0a-948c-914f9ad652cb",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
            "uuid": "d73cc238-7ad5-4b17-93c2-e209dd0ae982",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
            "active": true
          },
          "displayOrder": 17,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("d73cc238-7ad5-4b17-93c2-e209dd0ae982").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to nearest Maa Gruha (in minutes)",
                          "conceptUuid": "d73cc238-7ad5-4b17-93c2-e209dd0ae982",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
          "uuid": "e5841c30-f382-40ca-b6bb-48b92aa126a0",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
            "uuid": "16e20348-4e9b-4df7-bde6-02667d23cde2",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("16e20348-4e9b-4df7-bde6-02667d23cde2").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to NRC (in minutes)",
                          "conceptUuid": "16e20348-4e9b-4df7-bde6-02667d23cde2",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
          "uuid": "4aef152b-bbcb-41d8-8b50-576c193ac4e3",
          "keyValues": [],
          "concept": {
            "name": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
            "uuid": "57ee834e-9b21-4208-a404-e489f489bb2e",
            "dataType": "Numeric",
            "answers": [],
            "highNormal": 999,
            "active": true
          },
          "displayOrder": 19,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("57ee834e-9b21-4208-a404-e489f489bb2e").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Time taken to reach from Village (by ambulance/four wheeler) to District Hospital (in minutes)",
                          "conceptUuid": "57ee834e-9b21-4208-a404-e489f489bb2e",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
          "uuid": "94605d68-4b6a-400c-b9fa-834b2b81a32d",
          "keyValues": [],
          "concept": {
            "name": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
            "uuid": "f015e042-9154-4c7f-b793-b6b05c10a472",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 999,
            "highNormal": 999,
            "active": true,
            "keyValues": []
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("f015e042-9154-4c7f-b793-b6b05c10a472").greaterThan(1500).matches();
  
  if(condition11 ){
    validationErrors.push("The number cannot be greater than 1500.");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "The number cannot be greater than 1500."
                  },
                  "actionType": "validationError"
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
                          "conceptName": "How far is FRU from the village (by ambulance/four wheeler) (in minutes)",
                          "conceptUuid": "f015e042-9154-4c7f-b793-b6b05c10a472",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1500
                        },
                        "operator": "greaterThan"
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
          "name": "Is the village cut from main land during rainy season",
          "uuid": "d7ab0001-eac4-4fca-96d9-d010aa4c74a5",
          "keyValues": [],
          "concept": {
            "name": "Is the village cut from main land during rainy season",
            "uuid": "869e3ef2-25be-4d82-9287-9cd94985f6d3",
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
          "displayOrder": 21,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does the village have a VHND point?",
          "uuid": "c357cfaa-1cd3-4c72-8a5b-5f475088419f",
          "keyValues": [],
          "concept": {
            "name": "Does the village have a VHND point",
            "uuid": "ea5bdf14-381a-4ad9-9ddb-2dcf7e85580b",
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
          "displayOrder": 22,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does AWW live in the village?",
          "uuid": "df026527-ba48-4dcc-882c-92cdc7e980ab",
          "keyValues": [],
          "concept": {
            "name": "Does AWW live in the village",
            "uuid": "e3c7bf20-47ec-453e-b7a5-0487a90552fa",
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
          "displayOrder": 23,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Does your ASHA live in the village?",
          "uuid": "b45fad16-473c-48c3-b1f7-decf2fe6d817",
          "keyValues": [],
          "concept": {
            "name": "Does your ASHA live in the village",
            "uuid": "9f740927-bfd9-47ea-8380-d15a5b7fff57",
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
          "displayOrder": 24,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is Ambulance (Janani express – 102) coming to the village for transporting pregnant women to Maa gruha / CHC ?",
          "uuid": "1f3b2722-451b-47dd-b2fa-3e23da979ebf",
          "keyValues": [],
          "concept": {
            "name": "Is Ambulance (Janani express – 102) coming to the village for transporting pregnant women to Maa gruha / CHC",
            "uuid": "9d48ae20-26f1-4b2e-b338-8a605f690214",
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
          "displayOrder": 25,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having “iron sucrose point”",
          "uuid": "978770c2-d4a7-4ffa-b0ba-0568145728bb",
          "keyValues": [],
          "concept": {
            "name": "Is the village having “iron sucrose point”",
            "uuid": "908078ef-cf42-4817-b043-27212169a1dc",
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
          "displayOrder": 26,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having community based nutri garden ?",
          "uuid": "357dcb9a-cb59-4b70-b26c-440e86393e04",
          "keyValues": [],
          "concept": {
            "name": "Is the village having community based nutri garden",
            "uuid": "d9c46794-5051-44fc-b6ee-11f4646a7617",
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
          "displayOrder": 27,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village having PVTG / Tribal population ?",
          "uuid": "b3c6ae44-c91c-4fe0-8aae-8a3f6d4fd03f",
          "keyValues": [],
          "concept": {
            "name": "Is the village having PVTG / Tribal population",
            "uuid": "54e6bf01-37c6-4434-9924-8319f3a2817a",
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
          "displayOrder": 28,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the village hard to reach ?",
          "uuid": "e6b44b4d-886e-4d04-b9ef-7f779efc18a5",
          "keyValues": [],
          "concept": {
            "name": "Is the village hard to reach",
            "uuid": "4e2ba1be-ec59-472a-9008-0ed2261b0e81",
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
          "displayOrder": 29,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}