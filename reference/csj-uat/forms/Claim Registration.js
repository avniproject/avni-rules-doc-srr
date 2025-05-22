{
  "name": "Claim Registration",
  "uuid": "55cb250b-45b6-4e6d-aea0-99c03dd8dc10",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "d95f5aa9-c7cf-4d13-87f1-c3022f82f08d",
      "name": "Claim Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Source",
          "uuid": "3a309c92-abe1-4579-b5d8-f5e3861fb58e",
          "keyValues": [],
          "concept": {
            "name": "Claim Source",
            "uuid": "9cf2776d-8fd2-42db-8c74-dfc9433e2af1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Campaign",
                "uuid": "23d69c93-6a03-45f4-9ecf-35a5b0052049",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Regular Outreach",
                "uuid": "789c52af-0e88-46ef-9c27-b28a3c82dc6f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Source",
                "uuid": "78868269-9f99-40dc-b898-a2e0649878c7",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service Camp",
                "uuid": "98009eb7-b007-4570-b0a4-359128267564",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Legal Awareness Camp",
                "uuid": "88e35212-74f6-4794-aadd-d94ee046329b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "name": "Other Source, please specify",
          "uuid": "fafb649b-f403-40f4-81bf-059278909910",
          "keyValues": [],
          "concept": {
            "name": "Other Source, please specify",
            "uuid": "7f9aa278-f099-40c4-ad0a-231d4cad9697",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("9cf2776d-8fd2-42db-8c74-dfc9433e2af1").containsAnswerConceptName("78868269-9f99-40dc-b898-a2e0649878c7").matches();
  
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
                          "conceptName": "Claim Source",
                          "conceptUuid": "9cf2776d-8fd2-42db-8c74-dfc9433e2af1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Source"
                          ],
                          "answerConceptUuids": [
                            "78868269-9f99-40dc-b898-a2e0649878c7"
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
          "name": "Name of Applicant",
          "uuid": "81b525e9-be05-4ef7-bef7-efb967a8f854",
          "keyValues": [],
          "concept": {
            "name": "Name of Applicant",
            "uuid": "80ecdbf9-2bb4-4033-824c-2ca1d2563dbe",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0c735139-7234-4f36-8d9d-1eba925f9ae5").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Whether group claim",
                          "conceptUuid": "0c735139-7234-4f36-8d9d-1eba925f9ae5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6"
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
          "validFormat": {
            "regex": "^(?:[2-9]|\\d{2,})$",
            "descriptionKey": "Number should be greater than 1 and Should be Whole Number"
          },
          "mandatory": true
        },
        {
          "name": "Number of total beneficiaries",
          "uuid": "f0742ce0-0386-4325-bb79-964c40695592",
          "keyValues": [],
          "concept": {
            "name": "Number of total beneficiaries (voided~266420)",
            "uuid": "5552847f-fe12-421b-98b3-2f12660125ed",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0c735139-7234-4f36-8d9d-1eba925f9ae5").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Whether group claim",
                          "conceptUuid": "0c735139-7234-4f36-8d9d-1eba925f9ae5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Phone of Applicant",
          "uuid": "d3aabc90-4680-4860-a70f-13b747bf0b6d",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "mandatory": true
        },
        {
          "name": "State of applicant",
          "uuid": "9f0a2fbb-997e-475e-bbb4-96cd15ea9a71",
          "keyValues": [],
          "concept": {
            "name": "State of applicant - Location",
            "uuid": "f8204e84-9fbb-4200-83cd-11f9c22f460b",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "District of applicant",
          "uuid": "0d59f025-328b-474c-9d11-96dab34f36dc",
          "keyValues": [],
          "concept": {
            "name": "District of applicant - Location",
            "uuid": "710aecb0-1b42-4912-bbe2-50719dd86a2d",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Block of applicant",
          "uuid": "f8daf70d-9d98-4825-9a02-ecd629f5e9db",
          "keyValues": [],
          "concept": {
            "name": "Block of applicant - Location",
            "uuid": "e6d96b79-1e69-407f-b044-5d2674dc32d1",
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
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Village / town of applicant",
          "uuid": "92cea09b-4516-40ad-859b-d0b4f97a66f4",
          "keyValues": [],
          "concept": {
            "name": "Village / town of applicant- Location",
            "uuid": "b4e4ffa1-fd47-44b1-9ce7-266558945966",
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
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Address of applicant - TBD",
          "uuid": "4472e8c4-761b-4546-bde7-268c77326cd9",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Age Of Applicant",
          "uuid": "8095901e-64da-4a5d-8e81-f1aec46ec386",
          "keyValues": [],
          "concept": {
            "name": "Age Of Applicant",
            "uuid": "8a5f1ac1-9fac-4696-8e22-975afee5df4c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^(100|[1-9]?\\d)$",
            "descriptionKey": "Allows age between 0 and 100 and should be whole number"
          },
          "mandatory": true
        },
        {
          "name": "Age Of Applicant",
          "uuid": "1ad5e1f1-4706-4419-a614-89329c4a9f84",
          "keyValues": [],
          "concept": {
            "name": "Age Of Applicant (voided~266421)",
            "uuid": "ee8c87e3-b1f7-4b6e-a47e-104eba64d08b",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 100,
            "active": true,
            "voided": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Phone of Applicant",
          "uuid": "6330854a-5ccf-4d8f-96a8-b066bf4f8eec",
          "keyValues": [],
          "concept": {
            "name": "Phone Number (voided~259989)",
            "uuid": "690172d4-9bdc-423d-9125-9243c7c95202",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 10,
            "active": true,
            "voided": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Gender of Applicant",
          "uuid": "5c34c15a-cef5-48f6-85e9-64f1cc76773c",
          "keyValues": [],
          "concept": {
            "name": "Gender",
            "uuid": "2a098681-0152-4506-be18-482cb66a31e1",
            "dataType": "Coded",
            "answers": [
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
                "name": "Female",
                "uuid": "4012e98a-eb61-47fb-9f33-afeb3a66fff9",
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
          "mandatory": true
        },
        {
          "name": "Religion Of Applicant in Claim",
          "uuid": "4d395dae-c217-48d6-82b3-9236c4990b01",
          "keyValues": [],
          "concept": {
            "name": "Religion Of Applicant in Claim",
            "uuid": "04ea5c76-2dff-4548-921a-078d69a3a6a3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Muslim",
                "uuid": "55a3d592-695a-4a2b-8c7d-7d1c488b417b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
                "name": "Christian",
                "uuid": "de61c64f-6fa9-4da5-87a8-0c2855a93574",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
                "name": "Adivasi / Sarna",
                "uuid": "080cfb44-7e4f-48e4-acc7-d97eaab291e9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Social Category Of Applicant",
          "uuid": "f0729e5f-99fe-4a21-9a2c-1ffd931b5bd5",
          "keyValues": [],
          "concept": {
            "name": "Social Category Of Applicant in Claim",
            "uuid": "356792bc-d348-43a8-befa-5999e7242b95",
            "dataType": "Coded",
            "answers": [
              {
                "name": "General",
                "uuid": "d715cc92-9661-4885-88cc-aa240d41116d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
                "name": "ST",
                "uuid": "5f88add0-3407-48cc-ba89-5f9218aa6e5a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "displayOrder": 18,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Scheme",
          "uuid": "2a5fe1a8-804e-4826-bfc1-f57ccaf854d9",
          "keyValues": [],
          "concept": {
            "name": "Claim Scheme",
            "uuid": "8402fb5c-f5b1-4f3d-a56b-410e163ff810",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Scholarship",
                "uuid": "6ef080e4-0739-42bf-9e3d-ff3f4a0d866e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Pension Application",
                "uuid": "85cfc7a6-9ed8-418f-93f9-5fc8cf750793",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Farmer related Scheme",
                "uuid": "90ebddc7-1321-4f14-8d26-ae1a758b0091",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Basic Facilities (nal jal yojana, road, Anganwadi etc.)",
                "uuid": "649cdbca-4ec0-47ca-bc40-5b4ed0f1ccb4",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Rights of fisherfolk",
                "uuid": "024dbef2-d9ff-4875-a3d4-e4013812e7fe",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Others Scheme",
                "uuid": "181eb024-8780-489a-81a0-80a790d1dc05",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Ration Application",
                "uuid": "f93ad0aa-a7d6-4f55-93d6-3c185da87bf8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Land documents updation (legal heir or succession certificate, mutation, demarcation, partition, digitisation)",
                "uuid": "ff9d6db0-1199-41ff-af44-264f21173586",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "NREGA",
                "uuid": "862c8d91-defc-4f3b-90b1-7196adc3b4dd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Caste Certificate",
                "uuid": "07f20fc6-a01e-44ee-a261-36c3257ab8c4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Labour Registration",
                "uuid": "3b8daaca-20cb-46fe-98f9-40be8cc761a3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Identity documents",
                "uuid": "0b040c2a-2f72-432a-be2e-eb94e4eef4e4",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Others Scheme, please specify",
          "uuid": "aa897a58-2ae6-4f91-90e4-dee8d9814770",
          "keyValues": [],
          "concept": {
            "name": "Others Scheme, please specify",
            "uuid": "424e3f2b-4437-42b0-8213-a862e7e9cb3d",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8402fb5c-f5b1-4f3d-a56b-410e163ff810").containsAnswerConceptName("181eb024-8780-489a-81a0-80a790d1dc05").matches();
  
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
                          "conceptName": "Claim Scheme",
                          "conceptUuid": "8402fb5c-f5b1-4f3d-a56b-410e163ff810",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others Scheme"
                          ],
                          "answerConceptUuids": [
                            "181eb024-8780-489a-81a0-80a790d1dc05"
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
                individual.firstName = "Claim: ";
                individual.name = "Claim: ";
            } else {
                individual.firstName = "Claim: " + individual.lowestAddressLevel.name;
                individual.name = "Claim: " + individual.lowestAddressLevel.name;
            }
        }
        
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Claim Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}