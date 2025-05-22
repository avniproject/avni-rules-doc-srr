{
  "name": "Inventory Item Registration",
  "uuid": "52c11e75-6e11-4d12-8f42-50f83d130d93",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "b000c7e0-abb7-4c19-863b-5d35ec0e1ce1",
      "name": "Inventory details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Implementation Inventory Id",
          "uuid": "4c25f923-9a82-472f-9bfc-6611a9533706",
          "keyValues": [],
          "concept": {
            "name": "Implementation Inventory Id",
            "uuid": "972beb4f-a8b9-4b0a-9ebf-5d56e7b409b9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Account  name",
          "uuid": "149c333f-33c5-4609-af7a-4208a9c1f1e5",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Center / Field office",
          "uuid": "e035d7e5-8bf3-41c9-a9a9-fd897c89cce4",
          "keyValues": [],
          "concept": {
            "name": "Center / Field office",
            "uuid": "41de93e4-daaf-4207-bf70-b32939d09ea5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Dispatch Received Date",
          "uuid": "c1876213-8b38-49ee-adf7-6014f012dbe0",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Received Date",
            "uuid": "78f9d6cb-356e-45dc-90d5-216185784fe6",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Vehicle type",
          "uuid": "d192e44f-36dc-4ee7-bf17-1c6f5987b85b",
          "keyValues": [],
          "concept": {
            "name": "Vehicle type",
            "uuid": "91e7cc67-b670-4146-a3b6-f44818fb2e34",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Source of Material",
          "uuid": "80c822c2-01fd-48c1-b808-2d52cf552782",
          "keyValues": [],
          "concept": {
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bulk Material",
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Goonj product",
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Contributed track",
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
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
          "name": "Material type",
          "uuid": "ceb477e8-459d-4d69-b4e0-a4814a66686e",
          "keyValues": [],
          "concept": {
            "name": "Material type",
            "uuid": "7ce8c7f2-a002-4f75-91dc-44cb37ef0eb7",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Material Name",
          "uuid": "78e6aea0-a49e-42a7-ad36-095813511369",
          "keyValues": [],
          "concept": {
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Dispatch Status Id",
          "uuid": "e2b85c49-d144-476f-a8eb-e85cdd2eb359",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
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
                          "conceptName": "Address",
                          "conceptUuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
                          "conceptDataType": "Location"
                        },
                        "rhs": {},
                        "operator": "defined"
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
          "name": "Dispatch Received Status Line Item Id",
          "uuid": "4c24a4be-19d5-4942-b8e4-980241110591",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Received Status Line Item Id",
            "uuid": "54429e2d-1d2e-4fda-9bfd-4cdaf3399336",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
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
                          "conceptName": "Address",
                          "conceptUuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
                          "conceptDataType": "Location"
                        },
                        "rhs": {},
                        "operator": "defined"
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
          "name": "Type of Material",
          "uuid": "d32ce806-4e7b-40e4-a0de-544b0a224b1a",
          "keyValues": [],
          "concept": {
            "name": "Type of Material",
            "uuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit Type",
          "uuid": "9fa7da14-ba01-4315-8bc8-3202378031ff",
          "keyValues": [],
          "concept": {
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance drama",
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Parlor",
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Marriage kits",
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "My pad woman",
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "New born baby",
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tent house",
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "CBE",
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff",
                "dataType": "NA",
                "answers": [],
                "order": 16,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "name": "Sub type",
          "uuid": "47361469-9d49-4926-b315-ae9d99d17333",
          "keyValues": [],
          "concept": {
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855",
            "dataType": "Coded",
            "answers": [
              {
                "name": "L",
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "X",
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "name": "Material sub category",
          "uuid": "c1681742-e207-4268-a5ff-3e5a9bad83bc",
          "keyValues": [],
          "concept": {
            "name": "Material sub category",
            "uuid": "9652281a-3105-4e42-8068-e3fe17e06ce0",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Other material name",
          "uuid": "03a15a4d-488b-4060-82b8-9f96a16d8cc8",
          "keyValues": [],
          "concept": {
            "name": "Other material name",
            "uuid": "a3314a2d-3455-4666-bd56-ca5dc72a08f9",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Unit",
          "uuid": "345ae8cf-0105-4afe-b6f6-e05f8e469c16",
          "keyValues": [],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
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
          "name": "Initial Quantity",
          "uuid": "9b9f40e3-6eee-4cf5-813c-f572e3aef65a",
          "keyValues": [],
          "concept": {
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Current Quantity",
          "uuid": "e68906c9-a126-4703-b00a-080749d0a2ad",
          "keyValues": [],
          "concept": {
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Bill name",
          "uuid": "207bee82-c824-4e1f-8b9b-d24d5cd05cd4",
          "keyValues": [],
          "concept": {
            "name": "Bill name",
            "uuid": "1fddc83e-1e1b-4479-8d0c-845ff4f46de2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c03c7864-8fbb-4557-907a-1047092bdc37").defined.matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
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
                          "conceptName": "Address",
                          "conceptUuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
                          "conceptDataType": "Location"
                        },
                        "rhs": {},
                        "operator": "defined"
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
          "name": "Purchased/ Created/ Received",
          "uuid": "270581a1-fa3d-4162-9533-c343f371a0a7",
          "keyValues": [],
          "concept": {
            "name": "Purchased/ Created/ Received",
            "uuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Created or received - Kit",
          "uuid": "660683c7-a5f4-4679-9b14-dad0fac02017",
          "keyValues": [],
          "concept": {
            "name": "Created or received - Kit",
            "uuid": "5fc64281-1b66-433f-b350-b3be9a9de09f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Received").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Purchased").matches();
  
  visibility = condition11 || condition21 ;
  
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
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Received"
                        },
                        "operator": "equals"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Purchased"
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
          "name": "Purchase Kit name",
          "uuid": "3bbcc5d4-4c9a-4161-93a0-13a3da001621",
          "keyValues": [],
          "concept": {
            "name": "Purchase Kit name",
            "uuid": "e1c5515c-b4f8-40fe-a6cf-68f445ea6e35",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("dfc56fc1-108b-421a-9fff-0801c4fde74e").equals("Purchased").matches();
  
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
                          "conceptName": "Purchased/ Created/ Received",
                          "conceptUuid": "dfc56fc1-108b-421a-9fff-0801c4fde74e",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Purchased"
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
          "name": "Kit details",
          "uuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "keyValues": [],
          "concept": {
            "name": "Kit details",
            "uuid": "727a44d1-a953-4ad4-9f0c-bebb721eec02",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Kit").matches();
  
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
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Kit"
                        },
                        "operator": "equals"
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
          "name": "Non-Kit",
          "uuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "keyValues": [],
          "concept": {
            "name": "Non-kit (Contributed item)",
            "uuid": "e6c88a90-59d7-4a0f-98a2-faadd722bd81",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 26,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Contributed item").matches();
  
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
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Contributed item"
                        },
                        "operator": "equals"
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
          "name": "Non-Kit",
          "uuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "keyValues": [],
          "concept": {
            "name": "Non-kit (Purchased item)",
            "uuid": "2d225ecf-cc30-4bc0-b90a-2c9f134072bd",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f3aa4c67-9867-465c-88f3-042adcfeee17").equals("Purchased item").matches();
  
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
                          "conceptName": "Type of Material",
                          "conceptUuid": "f3aa4c67-9867-465c-88f3-042adcfeee17",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "Purchased item"
                        },
                        "operator": "equals"
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
          "name": "Puchase/High Value",
          "uuid": "a56bda38-d909-43d5-8685-da34df974b45",
          "keyValues": [],
          "concept": {
            "name": "Puchase/High Value",
            "uuid": "815ac13f-396b-4e2a-8e64-8c66b8c59441",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "c6a4fa95-e078-4295-ae12-1ac7a211cc70",
          "keyValues": [],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 29,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchase Item Category",
          "uuid": "6510685d-9a57-4ae4-8412-aa7eaec85cf5",
          "keyValues": [],
          "concept": {
            "name": "Purchase Item Category",
            "uuid": "2b84bcd2-4915-4158-993b-530ef0b3774d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 30,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Material Name",
          "uuid": "c86e318f-7336-4cbf-9bbf-fb9ebc591fef",
          "keyValues": [],
          "concept": {
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 31,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Initial Quantity",
          "uuid": "d900d1fe-5877-45ec-8851-0787e37e6a1b",
          "keyValues": [],
          "concept": {
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 32,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Current Quantity",
          "uuid": "3235040d-fc71-4dd2-bbc0-e60e5a59e9e5",
          "keyValues": [],
          "concept": {
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 33,
          "type": "SingleSelect",
          "parentFormElementUuid": "309ee062-5996-49d4-9980-37dddd1483db",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Contributed Item",
          "uuid": "bb9fab41-cd14-4cf8-b934-b1f09c88a9f5",
          "keyValues": [],
          "concept": {
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 34,
          "type": "SingleSelect",
          "parentFormElementUuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Item Category",
          "uuid": "0415ad3d-7797-4b86-a71b-94db8a7f334d",
          "keyValues": [],
          "concept": {
            "name": "Item Category",
            "uuid": "54f456f5-94ee-4537-bc72-49947404521e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 35,
          "type": "SingleSelect",
          "parentFormElementUuid": "6b7f4d12-1cc0-45c2-8ee2-126f3b5446d6",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit Name",
          "uuid": "28b7fae5-c608-4b0d-9849-a7f76f657d0e",
          "keyValues": [],
          "concept": {
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 36,
          "type": "SingleSelect",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Initial Quantity",
          "uuid": "eea6989b-d145-4a9e-b93a-a68c1b447fde",
          "keyValues": [],
          "concept": {
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 37,
          "type": "SingleSelect",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Current Quantity",
          "uuid": "8826541f-9f3c-4a5e-b193-6e315014eeb9",
          "keyValues": [],
          "concept": {
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 38,
          "type": "SingleSelect",
          "parentFormElementUuid": "d0136679-7559-4aaa-b807-5cf46d865828",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Inventory details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}