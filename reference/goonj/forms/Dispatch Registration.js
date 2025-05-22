{
  "name": "Dispatch Registration",
  "uuid": "70bfa0ec-dc10-4e2c-8cd7-edef1b85c090",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "17568e92-41fa-491e-a6de-8c883c04f834",
      "name": "Dispatch details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Account  name",
          "uuid": "8eccad95-68f5-4139-9588-bf11583b3df2",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Dispatch Status Id",
          "uuid": "ec34825e-9360-4857-bdaf-f01e51e0d3ff",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Dispatch Status Name",
          "uuid": "b30c181e-eb93-4bc1-a6e3-b9a374487cf4",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Status Name",
            "uuid": "c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Demand Id",
          "uuid": "a5b281ae-e3ef-4e60-9d73-38e1b2793a5c",
          "keyValues": [],
          "concept": {
            "name": "DemandId",
            "uuid": "845b31cb-a4ea-495a-9748-884227415c8b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": false
        },
        {
          "name": "Demand name",
          "uuid": "b817c844-e724-4ba3-865a-720561df56ec",
          "keyValues": [],
          "concept": {
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": false
        },
        {
          "name": "Status",
          "uuid": "555387a5-405a-424c-87d6-d1035f954dde",
          "keyValues": [],
          "concept": {
            "name": "Status",
            "uuid": "df408b06-e90b-47c2-89dc-ed2b5967de2d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Dispatch Stage",
          "uuid": "48d6a0d6-575d-4677-9629-6c1a819fd330",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Stage",
            "uuid": "b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Demand Name",
          "uuid": "28010f41-2d93-4b44-ade5-8b98b8d63d55",
          "keyValues": [],
          "concept": {
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;

  let visibility = false;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "State",
          "uuid": "9bfef5c6-0b58-4ef0-9362-717ab3f2107a",
          "keyValues": [],
          "concept": {
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "d4b2dcc0-f833-48b3-add3-d1d621ce0e51",
          "keyValues": [],
          "concept": {
            "name": "District (Dispatch)",
            "uuid": "aef8c7cb-69b7-4678-8df0-553fb4f3eb0a",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "6b0db0bd-93ad-4f54-b09a-a8f935ba4d85"
              }
            ]
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date",
          "uuid": "5b5fefa4-a481-4aad-b6bb-18582254655c",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Date",
            "uuid": "1a1097bc-c06a-493b-a7da-63f9e70f4ae0",
            "dataType": "DateTime",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Account  name",
          "uuid": "17723b8c-097e-4fa6-a786-269736ea6dd6",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "278a0b60-1b70-44fc-b99d-761211f4cd67",
          "keyValues": [],
          "concept": {
            "name": "District (Dispatch)",
            "uuid": "aef8c7cb-69b7-4678-8df0-553fb4f3eb0a",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "6b0db0bd-93ad-4f54-b09a-a8f935ba4d85"
              }
            ]
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "5f08bee4-f207-4c46-a2c4-2be8f7cc313e",
          "keyValues": [],
          "concept": {
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Account name",
          "uuid": "3357a09c-27ac-4fa4-873b-68c3646a23de",
          "keyValues": [],
          "concept": {
            "name": "Account name (voided~207310)",
            "uuid": "ba04af96-c044-48f5-ae3b-b8fe78579e10",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Demand name",
          "uuid": "8e46d05c-1863-4602-a70a-5375834e92fb",
          "keyValues": [],
          "concept": {
            "name": "Demand name",
            "uuid": "c04262b1-10b9-408b-87e0-fde09de0a253",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Demand Id",
          "uuid": "aa72d3b3-ba61-40ad-ba9d-0d5e180742da",
          "keyValues": [],
          "concept": {
            "name": "Demand Id",
            "uuid": "5a79e56e-5239-4778-aaf7-ef65913d0754",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Dispatch details",
      "timed": false
    },
    {
      "uuid": "6b03b5b8-2cd1-44f3-be36-e71ed3e04901",
      "name": "Driver's Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Driver Name",
          "uuid": "548ac71f-74da-4a4c-a1dc-553f2bfcbcbf",
          "keyValues": [],
          "concept": {
            "name": "Driver Name",
            "uuid": "d769c64c-a62a-4c30-b281-573b2d2835a9",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Driver Contact Number",
          "uuid": "343d9929-3d3d-408a-92d1-cbafefaf7daf",
          "keyValues": [],
          "concept": {
            "name": "Driver Contact Number",
            "uuid": "450a5a0c-56f3-4aa7-82bf-d678c871c54b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Vehicle Number",
          "uuid": "e93b8067-5537-4584-9395-6c845eead219",
          "keyValues": [],
          "concept": {
            "name": "Vehicle Number",
            "uuid": "ac224d32-579c-4fda-900e-3a03ef4ff56e",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Loading And Truck Images",
          "uuid": "46978f22-b867-425c-9e50-e081d9c22b3b",
          "keyValues": [],
          "concept": {
            "name": "Loading And Truck Images",
            "uuid": "41ad313d-8c05-461b-91ef-faabe76d84ca",
            "dataType": "Image",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 4,
          "type": "MultiSelect",
          "mandatory": false
        }
      ],
      "display": "Driver's Details",
      "timed": false
    },
    {
      "uuid": "c4dafc4c-0314-498e-98b4-166fdb90c058",
      "name": "Materials Dispatched",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Materials Dispatched",
          "uuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Materials Dispatched",
            "uuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Type of material",
          "uuid": "ae6aaf9f-0229-4234-afd6-e3c89d63bbcf",
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Dispatch Line Item Id",
          "uuid": "8d116869-eccb-4ce2-a61d-52205d7a0c2c",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Kit type",
          "uuid": "19ff7ba5-318d-4cbc-acb9-c29815dc7b54",
          "keyValues": [],
          "concept": {
            "name": "Kit type (Dispatched) (voided~207732)",
            "uuid": "590f96fb-7c51-4f33-96ad-cd66997aa278",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit type",
          "uuid": "3a90ffe9-d57b-4d18-9575-78055c1da4f0",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Kit Name",
          "uuid": "35487a42-69ab-4faa-a088-7b5618fa0a55",
          "keyValues": [],
          "concept": {
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Kit Id",
          "uuid": "0dd6acf3-b110-4079-bff7-0930b929d0ff",
          "keyValues": [],
          "concept": {
            "name": "Kit Id",
            "uuid": "e7963e9a-f0ac-4666-af69-173e4e8bbcf6",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "6b6e0610-f7a6-4ff3-935c-e266b039cca2",
          "keyValues": [],
          "concept": {
            "name": "Sub type (Dispatched) (voided~207733)",
            "uuid": "36b3abc2-663f-45c3-bdf2-b89cb5984f77",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub type",
          "uuid": "67982b07-0c29-4907-b3dc-da3e2ad3ed4a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36","971c7a76-d296-4d47-9a90-47a612ceb4ca","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","90d580bd-f76c-4633-bb5b-4b92bc057c86","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition12 ;
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","90d580bd-f76c-4633-bb5b-4b92bc057c86","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
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
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labor Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits",
                            "Vaapsi",
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)",
                      "L",
                      "X"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1"
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
                          "scope": "registration",
                          "conceptName": "Kit type (Dispatched)",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labor Kit",
                      "L",
                      "X"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1"
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
                          "scope": "registration",
                          "conceptName": "Kit type (Dispatched)",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Other Kit Details",
          "uuid": "6ae79b71-b077-4cc7-bb20-da79ce73ea5a",
          "keyValues": [],
          "concept": {
            "name": "Other Kit Details",
            "uuid": "3461ef7c-f5f3-4cb2-ab10-7a4d57a85fed",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("944cb7a1-a537-4e4f-bd15-74db621abefa", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("df625e4f-b11f-40bd-b846-422af836f273").matches();
  
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "df625e4f-b11f-40bd-b846-422af836f273"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Contributed item",
          "uuid": "4d2cca85-e545-41b1-ae12-9432edabd56d",
          "keyValues": [],
          "concept": {
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Item Category",
          "uuid": "aeb5251b-efe8-403f-b8fb-97ee9009adbe",
          "keyValues": [],
          "concept": {
            "name": "Item Category",
            "uuid": "54f456f5-94ee-4537-bc72-49947404521e",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Purchased /High value",
          "uuid": "d3c5fbee-e998-4f60-b9da-761e367171d5",
          "keyValues": [],
          "concept": {
            "name": "Purchased /High Value",
            "uuid": "8f2ce1e6-f2f9-4ce3-94c8-8b1f761a3b95",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Purchase Item Category",
          "uuid": "83d074a0-4b16-470f-954c-6242a344ef0d",
          "keyValues": [],
          "concept": {
            "name": "Purchase Item Category",
            "uuid": "2b84bcd2-4915-4158-993b-530ef0b3774d",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e","73e4cab9-b0d5-49a8-9cf2-c42f41523143").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Contributed track",
                            "High Value Material",
                            "Goonj product"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Material Name",
          "uuid": "e70b3174-c4de-4276-a883-8c6e380bae3b",
          "keyValues": [],
          "concept": {
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","73e4cab9-b0d5-49a8-9cf2-c42f41523143").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "High Value Material",
                            "Contributed track",
                            "Goonj product"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Material Id",
          "uuid": "c03e4904-b1ce-445f-a06e-1c1b4ccf2887",
          "keyValues": [],
          "concept": {
            "name": "Material Id",
            "uuid": "53b13383-40de-4b5e-ab9f-94d0ec216c89",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "84093bab-66e2-4d05-84bb-b2859c439d4d",
          "keyValues": [],
          "concept": {
            "name": "Quantity as per dispatch",
            "uuid": "4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "7dbf6b9c-e2da-4794-a0a2-b9a8d27ffccc",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).defined.matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "c94a5a49-9d61-44fe-8406-1b136745614c",
          "keyValues": [],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "267fbb23-4168-4fb1-9bce-6b0d5f378c46", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "267fbb23-4168-4fb1-9bce-6b0d5f378c46"
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
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "mandatory": true
        },
        {
          "name": "Kit",
          "uuid": "199cc1c3-1861-4b85-b19b-aea8a187a40d",
          "keyValues": [],
          "concept": {
            "name": "KIT",
            "uuid": "de4d4349-3d5a-44d7-af38-9de9344f417c",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit type",
          "uuid": "5d36de65-58c0-4be2-a90e-9c2db1b47617",
          "keyValues": [],
          "concept": {
            "name": "Kit Type (voided~207611)",
            "uuid": "a90f4c76-b1dc-4c15-af35-abf80482bf29",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub type",
          "uuid": "9ca9ef0c-7d27-4f0a-bb99-79eb34e472c8",
          "keyValues": [],
          "concept": {
            "name": "Sub Type (voided~207612)",
            "uuid": "6c26c6cf-54ac-40ea-ac5e-77cdbc3f85cd",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Non-kit",
          "uuid": "11634476-3454-4a0d-b450-25e781404b0c",
          "keyValues": [],
          "concept": {
            "name": "Non-Kit",
            "uuid": "6e47adc2-7143-475e-bae5-29c58f593c32",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Contributed Item",
          "uuid": "c563be79-ab31-4b3d-b93f-85278532937f",
          "keyValues": [],
          "concept": {
            "name": "Contributed Item (voided~207614)",
            "uuid": "42bed423-7a81-4002-b1dc-a16767aad84d",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchased /High value",
          "uuid": "c3a1052a-a533-49a2-b74a-4b604c1ea9b9",
          "keyValues": [],
          "concept": {
            "name": "Purchased /High Value (voided~207615)",
            "uuid": "23ce5d6b-9efa-41ab-b75b-ef1d0fa2a0d1",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "3bb02f06-a349-4c2c-a80e-a3173b2145b0",
          "keyValues": [],
          "concept": {
            "name": "Unit (voided~207616)",
            "uuid": "b9cee2ac-99cc-469f-812a-4ac377a043b6",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "23acf972-9aa8-4391-8e02-7d8dfc305d60",
          "keyValues": [],
          "concept": {
            "name": "Quantity (voided~207617)",
            "uuid": "d8df4258-a213-42ac-944d-6bf1fd5c4b35",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "parentFormElementUuid": "b2969eb9-f9b0-4b99-aa29-483f99e16c9f",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Materials Dispatched",
      "timed": false
    },
    {
      "uuid": "9fa3d3f4-8d0b-4aa7-8b31-9bdf5e1eeced",
      "name": "Material Dispatched",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Type of Material",
          "uuid": "2fdb19bc-ae4a-4998-840e-00e123e81bec",
          "keyValues": [],
          "concept": {
            "name": "Type of Material (voided~207317)",
            "uuid": "274a5e34-2cc8-46f9-9e1f-a0044e7397fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
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
                "order": 1,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit Type",
          "uuid": "0695b2ef-fbfe-4e86-9727-9379796965e5",
          "keyValues": [],
          "concept": {
            "name": "Kit Type (voided~207318)",
            "uuid": "2fa06dac-b9e4-4d93-9952-8db39eb2578d",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub Type",
          "uuid": "3df82746-7e97-417b-895e-5959a159464a",
          "keyValues": [],
          "concept": {
            "name": "Sub Type (voided~207319)",
            "uuid": "4f7c7daf-8e49-474f-a058-93bf26ef350b",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Non-Kit",
          "uuid": "9562a091-5178-44a4-88b7-4db9a802b2b0",
          "keyValues": [],
          "concept": {
            "name": "Non-Kit (voided~207320)",
            "uuid": "5700dbc2-4811-4332-85c6-d3db84e2fbac",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Contributed",
          "uuid": "31a073e2-0dbd-45be-a85b-5e4fa094789e",
          "keyValues": [],
          "concept": {
            "name": "Contributed (voided~207321)",
            "uuid": "602fb66d-c4fc-4990-b5ed-a01583c0d423",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Puchase/High Value",
          "uuid": "baa14304-a4ef-4c8f-81bf-b91080531ab5",
          "keyValues": [],
          "concept": {
            "name": "Puchase/High Value",
            "uuid": "815ac13f-396b-4e2a-8e64-8c66b8c59441",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "b043e58f-1d66-45d3-a596-fe85f38e24ab",
          "keyValues": [],
          "concept": {
            "name": "Unit (voided~207323)",
            "uuid": "0bf32677-4a81-4496-bbe8-35ff68901c72",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "913df35f-fed2-4e15-9ca8-40f96bcce2f8",
          "keyValues": [],
          "concept": {
            "name": "Quantity (voided~207324)",
            "uuid": "c1d599b1-3f4f-41d6-8399-020718c6735b",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Material Dispatched",
      "voided": true,
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}