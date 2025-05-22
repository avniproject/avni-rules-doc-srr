{
  "name": "Household Registration",
  "uuid": "58773442-5d9b-4369-9c94-97331b09c19c",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "234ae2cc-3e82-4627-9291-a07b0d389be1",
      "name": "Household information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "AWC",
          "uuid": "6c5f72e2-8f83-4cc1-a27e-8516823c2b75",
          "keyValues": [],
          "concept": {
            "name": "AWC name",
            "uuid": "d0039d9e-86a9-4ae3-8aee-bbe01339447a",
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
                  "0a997062-ff85-464d-b51f-95d1fd9ba8a7"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "d4714a9a-9d64-4796-b550-ae0bae6d502d"
              }
            ]
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "AWC Name",
          "uuid": "0d40bbe7-4a15-415d-a343-dd686636b516",
          "keyValues": [],
          "concept": {
            "name": "AWC Name",
            "uuid": "e21b2a54-5cc7-44bc-b2a3-b3b95959df71",
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
                  "0a997062-ff85-464d-b51f-95d1fd9ba8a7"
                ]
              }
            ]
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Number of members in the family",
          "uuid": "57209b81-0b21-4acc-a60b-4e3fe8345f59",
          "keyValues": [],
          "concept": {
            "name": "Number of members in the family",
            "uuid": "1d440095-fedc-4c61-8677-d8362a41d35c",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Gender of head of the family",
          "uuid": "e3aac7a8-99f2-4105-9db0-3641a5356c5d",
          "keyValues": [],
          "concept": {
            "name": "Gender of head of the family",
            "uuid": "1dd485f7-6355-46e3-a5c5-fd9b364885fe",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "HH ID",
          "uuid": "c7378db3-916c-47e5-a514-4a565b39d614",
          "keyValues": [
            {
              "key": "IdSourceUUID",
              "value": "94c98dec-755d-4fd1-958c-b54d91d47001"
            }
          ],
          "concept": {
            "name": "HH ID",
            "uuid": "96e2b771-9d00-407e-b4e3-f29123f1da30",
            "dataType": "Id",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const addressLevelService = params.services.addressLevelService;
  const selectedLocationUUID = individual.getObservationReadableValue("AWC Name");
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  let generatedID = individual.getObservationReadableValue("HH ID");
  if(selectedLocationUUID) {
    const addressLevel =  addressLevelService.findAddressLevelByUUID(selectedLocationUUID);
    let awcNumber = addressLevel.name.replace(/[^0-9]/g, '');
    console.log('addressLevel.name--->',addressLevel.name);
    let displayValue ='';
  //  console.log('awcNumber',awcNumber);
    
    if(!_.includes(displayValue, awcNumber)){
    displayValue =  awcNumber + generatedID;
 //   console.log('displayValue',displayValue);
    }
    statusBuilder.value(displayValue);
  }
  return statusBuilder.build();
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Custom HH id",
          "uuid": "d8cd90f5-6724-40af-8ec6-4ec4e455875f",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "AWC HH ID",
            "uuid": "ab55f052-6a23-4e40-bbab-2b3caf791b20",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const addressLevelService = params.services.addressLevelService;
  const selectedLocationUUID = individual.getObservationReadableValue("AWC name");
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({individual, formElement});
  if(selectedLocationUUID) {
    const addressLevel =  addressLevelService.findAddressLevelByUUID(selectedLocationUUID);
    let awcNumber = addressLevel.name.replace(/[^0-9]/g, "");
    const displayValue =  awcNumber + individual.getObservationReadableValue("HH ID");
    statusBuilder.value(displayValue);
  }
  //const showCondition = false;
  //statusBuilder.show().whenItem(showCondition).is.truthy;
  return statusBuilder.build();
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "HH id",
          "uuid": "8793acba-0a2f-4e09-8357-25510398bd04",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "AWC HH ID",
            "uuid": "ab55f052-6a23-4e40-bbab-2b3caf791b20",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d0039d9e-86a9-4ae3-8aee-bbe01339447a").defined.matches();
  
  visibility = condition11 ;
  
  let awcLocation = individual.findObservation("Location Type");
  let hhId = individual.getObservationValue("HH ID");
  
  if (condition11) {
      value = awcLocation.getValue() + hhId;
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "HH ID",
          "uuid": "8bdda1c8-c65e-477d-8664-846785567d27",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "System generated ID (voided~128011)",
            "uuid": "e4007d6a-1c41-4abb-bcbe-66ac4503d986",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Social group",
          "uuid": "06477631-54f3-49f1-b1b3-5ef16b3b899b",
          "keyValues": [],
          "concept": {
            "name": "Social Group",
            "uuid": "e15f2d52-6344-4d5e-b627-4d66b46d5f77",
            "dataType": "Coded",
            "answers": [
              {
                "name": "General",
                "uuid": "dac53cfa-c2b7-447f-971c-9f8d1355e46c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "ST",
                "uuid": "6b6435f0-ab89-44bf-adb4-da5c27bbb78a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "SC",
                "uuid": "12b98c8a-f3bd-476e-94e0-1246b66aa8b3",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "OBC",
                "uuid": "27a2b135-1ac7-4bc5-9751-48718a637246",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "PVTG",
                "uuid": "432db14c-42b9-40eb-a673-8dbcd3b0e79f",
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
          "name": "Social security entitlements",
          "uuid": "a5cbb6c1-2a13-493e-8cb9-163b2da8159e",
          "keyValues": [],
          "concept": {
            "name": "Social security entitlements",
            "uuid": "63d8bec7-1acd-4451-be5d-965da4da6ccf",
            "dataType": "Coded",
            "answers": [
              {
                "name": "PHH",
                "uuid": "80f9071e-3444-4cc0-a9e9-53afd9c9eb83",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Labour Card",
                "uuid": "e3bb1c8c-14d4-42af-b529-55550fd353a3",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Pension (old age)",
                "uuid": "52547e60-db73-492f-ab36-f849e5b27abc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "AAY",
                "uuid": "c0d4c39b-337a-4354-987b-11dc9676ed0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Pension (Specially abled)",
                "uuid": "a80ae823-fdb5-4433-b188-723f5f38188e",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Pension (widow)",
                "uuid": "7f4685c0-fd65-45b3-a6c5-8e47f57b895a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "NREGS",
                "uuid": "3971536d-4e0f-4149-a178-42989ea807fd",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Pension (HIV)",
                "uuid": "b84e86b8-f750-4a13-9ef7-739922118d00",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "None",
                "uuid": "d1a185a8-c116-4b20-a37f-2deb03ed9654",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "Biju Swasthya Kalyan Yojana",
                "uuid": "1ebf5d85-3376-4086-9cad-91233786e9ab",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Household type",
          "uuid": "df3b36f5-76af-4b28-8b4a-b1d77dc70b5f",
          "keyValues": [],
          "concept": {
            "name": "Household Type",
            "uuid": "ea2aa323-f3fc-4e06-b9f0-35d1a4654a2a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Single Women headed",
                "uuid": "afba4545-18cc-4f59-a3f1-898465a58219",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "None",
                "uuid": "d1a185a8-c116-4b20-a37f-2deb03ed9654",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "unique": true,
                "active": true
              },
              {
                "name": "Specially abled",
                "uuid": "62453cec-a032-4b95-bd2d-140bacb175a6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Type of house",
          "uuid": "c0f4391c-804e-4a94-b0c9-a777e0daf6d5",
          "keyValues": [],
          "concept": {
            "name": "Type of House",
            "uuid": "1050347e-24b3-4b13-9431-e5066cf2ebc2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Kachcha",
                "uuid": "989af765-224c-421a-bd4a-bffc0b4692f2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Semi Pukka",
                "uuid": "b78a75e1-30dc-4b90-8f82-fd26522e6e59",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Pukka",
                "uuid": "caed6e57-c753-48a5-95b2-67dc4ce1aa05",
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
          "name": "What is the main source of drinking water for members of your household?",
          "uuid": "f216652d-ea56-4148-952e-508d98afd8e6",
          "keyValues": [],
          "concept": {
            "name": "Main source of drinking water",
            "uuid": "f9b5dae5-6d1f-4157-8247-40cfb0c25be0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "RAIN WATER",
                "uuid": "a25a69e7-6aa2-40c2-b2a2-d74bb8ac8a00",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "FILTERED WATER/RO WATER(JERICAN,BOTTLE)",
                "uuid": "0a01345f-10e7-4e46-9e79-c1857e9f6070",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "HAND PUMP / TUBE WELL / BOREHOLE",
                "uuid": "6eef5ea1-afbf-492d-9b83-95fc50960449",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "PIPED WATER (DWELLING /YARD / PLOT)",
                "uuid": "3870cc61-d0da-4a50-bbc5-06ea451bb4c8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "UNPROTECTED DUG WELL",
                "uuid": "6cc38c3f-792c-407b-9c71-f4b4ebed1b9a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "SURFACE WATER (RIVER/DAM/ LAKE/POND/ STREAM/ CANAL/IRRIGATION CHANNEL)",
                "uuid": "ca47c3e7-e696-48fa-9b73-c06826d3d7f5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "PIPED WATER (PUBLIC TAP)",
                "uuid": "1cecdf04-8636-473a-bb96-e21be0b5f1f6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "PROTECTED DUG WELL",
                "uuid": "fabe0c42-5764-4944-99da-643c73d87240",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "name": "Which kind of toilet facility do members of your household usually use? (Note :(Mark the toilet facility which is used by most of the members of the household often))",
          "uuid": "a1c2524a-fecf-4ddf-8dd1-402b6e25bb7c",
          "keyValues": [],
          "concept": {
            "name": "Toilet facility used",
            "uuid": "e9f31089-76ff-4888-a2aa-e794aef7c1b6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "SHARED  FLUSH TOILET",
                "uuid": "5b08d79a-74b0-496c-9fef-8770126c7c5f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "PUBLIC/COMMUNITY TOILETS",
                "uuid": "6b16ea30-7eef-4e86-818c-510bf4bbc4c4",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "OWN FLUSH TOILET",
                "uuid": "67d06e3e-1bd5-4f81-a97b-88441d03380a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "OPEN DEFECATION",
                "uuid": "a4ffb6f4-1ea6-4708-ad94-f6a3e04f1a3f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "SHARED PIT TOILET",
                "uuid": "9dd12e31-6013-4113-a5c6-e224e8d89ff9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "OWN PIT TOILET",
                "uuid": "020bb012-c782-44d1-879b-22c918209cfb",
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
          "mandatory": false
        },
        {
          "name": "Specify other kind of toilet facility",
          "uuid": "e37cf75e-83f4-46ad-b7db-e8ac405adbec",
          "keyValues": [],
          "concept": {
            "name": "Specify other kind of toilet facility",
            "uuid": "41c4c818-039c-4881-ae76-0920ca386665",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("e9f31089-76ff-4888-a2aa-e794aef7c1b6").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "conceptName": "Toilet facility used",
                          "conceptUuid": "e9f31089-76ff-4888-a2aa-e794aef7c1b6",
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
        },
        {
          "name": "Primary occupation of head of household",
          "uuid": "e4bd7a9b-d19c-41c9-8759-4770daa4bcfc",
          "keyValues": [],
          "concept": {
            "name": "Primary occupation of head of household",
            "uuid": "2b6ae81a-ef67-42d5-96f8-234501dfdb83",
            "dataType": "Coded",
            "answers": [
              {
                "name": "AGRICULTURAL LABOURER",
                "uuid": "24199cbd-1cc3-4b07-b525-58fc9f86a99c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
                "name": "NON-AGRICULTURAL LABOURER(SKILLED)",
                "uuid": "a4cff200-ba32-419f-bb9b-960facc535aa",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
                "name": "NON-AGRICULTURAL LABOURER(UNSKILLED)",
                "uuid": "db01dd93-cc9d-4027-8417-78be8856d338",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
                "name": "SALARIED EMPLOYEE /GOVERNMENT",
                "uuid": "43ffdb63-1d0b-4ca9-adda-1b427a9bed97",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "BUSINESS /PETTY TRADER/ SELF EMPLOYED",
                "uuid": "20f69461-9282-47c5-8380-784b347f9fa6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Specify other primary occupation of head of household",
          "uuid": "77f04124-c6ac-4f77-a142-539563cf90b6",
          "keyValues": [],
          "concept": {
            "name": "Specify other primary occupation of head of household",
            "uuid": "0305a1da-5eb2-4212-8b4e-857e1f84728a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2b6ae81a-ef67-42d5-96f8-234501dfdb83").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "conceptName": "Primary occupation of head of household",
                          "conceptUuid": "2b6ae81a-ef67-42d5-96f8-234501dfdb83",
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
        },
        {
          "name": "Does your household have a mobile phone?",
          "uuid": "94652b7e-c4c8-4d3c-8914-75d7413a4a97",
          "keyValues": [],
          "concept": {
            "name": "Does your household have a mobile phone",
            "uuid": "f7fbbb81-c887-4512-8475-16a3a4ee9cc4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not available",
                "uuid": "9cf3bae2-93be-4cc7-9393-7760ac7ef7fe",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Smart phone",
                "uuid": "1cd85561-0042-4d32-ad73-58892a931c19",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Basic phone",
                "uuid": "007a8f27-b7ab-4bcb-8900-b4705a0f06c3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Mobile number",
          "uuid": "bedcc574-8f35-48c1-848c-3d8b2fd5d7ae",
          "keyValues": [],
          "concept": {
            "name": "Mobile number",
            "uuid": "e9508a2d-d15a-4076-9f65-bedeebb71fc7",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f7fbbb81-c887-4512-8475-16a3a4ee9cc4").containsAnyAnswerConceptName("1cd85561-0042-4d32-ad73-58892a931c19","007a8f27-b7ab-4bcb-8900-b4705a0f06c3").matches();
  
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
                          "conceptName": "Does your household have a mobile phone",
                          "conceptUuid": "f7fbbb81-c887-4512-8475-16a3a4ee9cc4",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Smart phone",
                            "Basic phone"
                          ],
                          "answerConceptUuids": [
                            "1cd85561-0042-4d32-ad73-58892a931c19",
                            "007a8f27-b7ab-4bcb-8900-b4705a0f06c3"
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
          "validFormat": {
            "regex": "^[0-9]{10}$",
            "descriptionKey": "Enter a valid 10 digit phone number"
          },
          "mandatory": true
        },
        {
          "name": "Is Electricity available in your household?",
          "uuid": "eb59f393-0779-41fd-83c7-dab1b5f31653",
          "keyValues": [],
          "concept": {
            "name": "Is Electricity available in your household",
            "uuid": "affc6792-fd7f-41f7-b970-f6245bde6f53",
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
          "displayOrder": 21,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Is there a separate kitchen room in your household?",
          "uuid": "92ad988f-367d-4c59-895f-ea4c31721c1b",
          "keyValues": [],
          "concept": {
            "name": "Is there a separate kitchen room in your household",
            "uuid": "64f095e0-93d3-45f8-bcb4-76f2375c2104",
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
          "displayOrder": 22,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Do you live in your own house or rented house?",
          "uuid": "9afb0e44-00c1-4a1b-b502-3b54db78781d",
          "keyValues": [],
          "concept": {
            "name": "Do you live in your own house or rented house",
            "uuid": "271b41d6-bd8f-442b-86d4-9625efc36294",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Relative's place",
                "uuid": "7f0d7846-0957-44db-ab03-ad3cf0dc827b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Own",
                "uuid": "03a63cc9-5368-42ff-b691-1bba7b8f0c22",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Rented",
                "uuid": "6d1091a9-66e6-4979-9545-6dd21f4b32a9",
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
          "mandatory": false
        },
        {
          "name": "Are you / any other female member of your family currently a member of any Self Help Group(SHG)?",
          "uuid": "6f5ae815-a396-4af5-b8f1-ffb42f614d58",
          "keyValues": [],
          "concept": {
            "name": "Are you / any other female member of your family currently a member of any Self Help Group(SHG)",
            "uuid": "f3e7a219-abd7-4eeb-8b61-de1e73991b3b",
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
        }
      ],
      "display": "Household information",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}