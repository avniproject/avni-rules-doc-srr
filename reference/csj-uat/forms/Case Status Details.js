{
  "name": "Case Status Details",
  "uuid": "a29ee6c0-22d7-46af-92a0-114cfa0fa225",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "4acf45bc-56fe-4a90-ab7e-6d5a8683b7c7",
      "name": "Case Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Nature of Case",
          "uuid": "a20702b9-af2d-49fd-af34-d79f23070c16",
          "keyValues": [],
          "concept": {
            "name": "Nature of Case",
            "uuid": "252f4c55-d113-4951-8ebb-eed01b9ccbb9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bail cancellation",
                "uuid": "d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Criminal Defence appeal",
                "uuid": "9882ada0-b5da-4662-8d88-baf57a7fdace",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Criminal prosecution appeal",
                "uuid": "ad47420b-5a60-42f0-9a49-60011af2bfd5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Criminal Defence fresh appeal",
                "uuid": "477c325d-ae7b-4219-97f7-54b84b82edf5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Bail fresh filing",
                "uuid": "4ab86dad-0ddf-4479-bf29-1c99a0a7579f",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Civil / labour / consumer / revenue / family fresh filing",
                "uuid": "d251937a-cbfb-442b-8f0b-8b58907dcdc0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "High Court writ / special powers / inherent powers",
                "uuid": "a15c03bd-497c-44ca-930f-419b4163a3a0",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Civil / labour / consumer / revenue / family appeal",
                "uuid": "99768dab-bf4e-4332-bcd9-3e48e7a2b0db",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Criminal prosecution fresh filing",
                "uuid": "a3d1b65d-0e00-4e78-9cf2-0bbd29e77642",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Criminal defence fresh filing",
                "uuid": "0fc2f7cb-ab3e-4474-8d85-c4e40917409f",
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
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnyAnswerConceptName("a3d1b65d-0e00-4e78-9cf2-0bbd29e77642","0fc2f7cb-ab3e-4474-8d85-c4e40917409f").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("b5d60cc0-716a-4980-ac26-13559bfb31ac").matches();
  
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
                          "type": "concept",
                          "scope": "enrolment",
                          "conceptName": "Nature of Case",
                          "conceptUuid": "252f4c55-d113-4951-8ebb-eed01b9ccbb9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Criminal prosecution fresh filing",
                            "Criminal defence fresh filing"
                          ],
                          "answerConceptUuids": [
                            "a3d1b65d-0e00-4e78-9cf2-0bbd29e77642",
                            "0fc2f7cb-ab3e-4474-8d85-c4e40917409f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
                          "scope": "enrolment",
                          "conceptName": "Status of case",
                          "conceptUuid": "b1927aeb-ab4c-46a6-8eff-6ccdf38f5478",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Active (pre-litigation)"
                          ],
                          "answerConceptUuids": [
                            "b5d60cc0-716a-4980-ac26-13559bfb31ac"
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
          "name": "Stage of Active (litigation) status - Criminal Prosecution/ Defence fresh filing",
          "uuid": "7c6459cd-4a32-4532-9ce0-7fc6d6c20a59",
          "keyValues": [],
          "concept": {
            "name": "Stage of Active (litigation) status - Criminal Prosecution/ Defence fresh filing",
            "uuid": "ee698620-9b14-4379-a7de-6098c9f009b0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Prosecution evidence",
                "uuid": "14f267c2-f976-45b0-a21d-a505e946a87b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Framing of charges",
                "uuid": "45c67208-ed09-4348-98b9-562d0caa6816",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Committal",
                "uuid": "1ae32189-6bc2-40ce-bd2b-85fc56ea9d4c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Judgment and sentencing",
                "uuid": "00415f2f-f2e1-46aa-878b-f46690833ae2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Defence evidence",
                "uuid": "395cbca2-7717-4040-a21a-3d724fe66852",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Final arguments",
                "uuid": "a86250e9-4fad-4a8e-a4f6-90d817864782",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnyAnswerConceptName("0fc2f7cb-ab3e-4474-8d85-c4e40917409f","a3d1b65d-0e00-4e78-9cf2-0bbd29e77642").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("df2c6f91-cf67-494c-9e85-8816918f0fed").matches();
  
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
                          "type": "concept",
                          "scope": "enrolment",
                          "conceptName": "Nature of Case",
                          "conceptUuid": "252f4c55-d113-4951-8ebb-eed01b9ccbb9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Criminal defence fresh filing",
                            "Criminal prosecution fresh filing"
                          ],
                          "answerConceptUuids": [
                            "0fc2f7cb-ab3e-4474-8d85-c4e40917409f",
                            "a3d1b65d-0e00-4e78-9cf2-0bbd29e77642"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
                          "scope": "enrolment",
                          "conceptName": "Status of case",
                          "conceptUuid": "b1927aeb-ab4c-46a6-8eff-6ccdf38f5478",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Active (litigation)"
                          ],
                          "answerConceptUuids": [
                            "df2c6f91-cf67-494c-9e85-8816918f0fed"
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
          "name": "Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing",
          "uuid": "371458cf-86aa-4b4a-9c15-0b2035e4b14f",
          "keyValues": [],
          "concept": {
            "name": "Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing",
            "uuid": "c4d9571c-1f78-45d7-a415-83589595ae9d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Legal notice sent",
                "uuid": "2ffd54d3-228a-4edd-8c95-d6468218651a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "ADR initiated",
                "uuid": "02159a6a-a47a-4052-a040-63d9bf944e50",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Document collection and evidence gathering",
                "uuid": "f29c32f9-8c78-46ec-9912-b4af8548f808",
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
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnswerConceptName("d251937a-cbfb-442b-8f0b-8b58907dcdc0").and.when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("b5d60cc0-716a-4980-ac26-13559bfb31ac").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing",
          "uuid": "3b2d67d9-76e1-4cec-bbc3-b23371ba8028",
          "keyValues": [],
          "concept": {
            "name": "Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing",
            "uuid": "aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Final order",
                "uuid": "aaed3cc6-266f-4be2-96fe-8fd45bf2c525",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Interim proceedings",
                "uuid": "6b1d75eb-67a9-4238-84b8-49a7ce80a0f1",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Framing of Issues",
                "uuid": "8fd75677-de86-431c-83a7-8624f599d371",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "ADR initiated during trial",
                "uuid": "e2f87957-27c0-4528-bb17-b9fd9bd8582d",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Plaintiff evidence",
                "uuid": "ac3241d5-1c44-4b47-9824-d96e881a8dd1",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Notice / Summons",
                "uuid": "3054a7a9-7a50-435e-915e-ad8e82751160",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Appearance of defendent",
                "uuid": "867878d6-d02b-4b92-bd2b-e081f5212ac4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Final arguments",
                "uuid": "a86250e9-4fad-4a8e-a4f6-90d817864782",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Reply of defendant / counter affidavit of plaintiff",
                "uuid": "6292474b-a356-416a-9a0a-f5b8a90456c9",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Defendant evidence",
                "uuid": "a03b8610-66f8-4044-942b-59420f8cbb41",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Plaint / petition filed",
                "uuid": "b27b063d-9cd3-4b1b-a678-0357978988c0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnswerConceptName("d251937a-cbfb-442b-8f0b-8b58907dcdc0").and.when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("df2c6f91-cf67-494c-9e85-8816918f0fed").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Stage of Active (pre-litigation)",
          "uuid": "33d9a7ec-5aa0-4d89-af18-4688a9ca0340",
          "keyValues": [],
          "concept": {
            "name": "Stage of Active (pre-litigation)",
            "uuid": "c8bafd78-6fdf-48ac-bd54-f180b00ce46f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Prep for filing",
                "uuid": "1ff9b5c1-92a5-450c-81ef-3c0af7f535b5",
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
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnyAnswerConceptName("ad47420b-5a60-42f0-9a49-60011af2bfd5","9882ada0-b5da-4662-8d88-baf57a7fdace","99768dab-bf4e-4332-bcd9-3e48e7a2b0db","4ab86dad-0ddf-4479-bf29-1c99a0a7579f","d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7","a15c03bd-497c-44ca-930f-419b4163a3a0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("b5d60cc0-716a-4980-ac26-13559bfb31ac").matches();
  
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
                          "type": "concept",
                          "scope": "enrolment",
                          "conceptName": "Nature of Case",
                          "conceptUuid": "252f4c55-d113-4951-8ebb-eed01b9ccbb9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Criminal prosecution appeal",
                            "Criminal Defence appeal",
                            "Civil / labour / consumer / revenue / family appeal",
                            "Bail fresh filing",
                            "Bail cancellation",
                            "High Court writ / special powers / inherent powers"
                          ],
                          "answerConceptUuids": [
                            "ad47420b-5a60-42f0-9a49-60011af2bfd5",
                            "9882ada0-b5da-4662-8d88-baf57a7fdace",
                            "99768dab-bf4e-4332-bcd9-3e48e7a2b0db",
                            "4ab86dad-0ddf-4479-bf29-1c99a0a7579f",
                            "d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7",
                            "a15c03bd-497c-44ca-930f-419b4163a3a0"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
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
                          "scope": "enrolment",
                          "conceptName": "Status of case",
                          "conceptUuid": "b1927aeb-ab4c-46a6-8eff-6ccdf38f5478",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Active (pre-litigation)"
                          ],
                          "answerConceptUuids": [
                            "b5d60cc0-716a-4980-ac26-13559bfb31ac"
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
          "name": "Stage of Active (litigation) status",
          "uuid": "af8407e3-ac69-4a8a-85ad-8e7f59a96a3a",
          "keyValues": [],
          "concept": {
            "name": "Stage of Active (litigation) status",
            "uuid": "065e005a-3203-4192-91ad-37e55480a695",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hearing",
                "uuid": "e143515c-3cf1-49fb-a424-73a1d1f811db",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Filing",
                "uuid": "24f1f573-6739-4de5-afc3-2ed796779c4a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Arguments",
                "uuid": "5b5e8ec0-d47f-477f-ae8e-c0ebdc607f9a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Order / judgment",
                "uuid": "c8e17742-de75-4a97-9c98-66fc40801e40",
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
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnyAnswerConceptName("ad47420b-5a60-42f0-9a49-60011af2bfd5","9882ada0-b5da-4662-8d88-baf57a7fdace","99768dab-bf4e-4332-bcd9-3e48e7a2b0db","4ab86dad-0ddf-4479-bf29-1c99a0a7579f","d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7","a15c03bd-497c-44ca-930f-419b4163a3a0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("df2c6f91-cf67-494c-9e85-8816918f0fed").matches();
  
  visibility = condition11 && condition21 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Case Details",
      "timed": false
    },
    {
      "uuid": "7e08325f-8416-4683-881f-070b5d6cf54e",
      "name": "ADR Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "ADR Details",
          "uuid": "0fdb26c7-7c4d-43b2-ba8f-c0cb438e53bb",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "ADR Details",
            "uuid": "cba46928-6bc4-41d0-87b8-7df22ce20c24",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const questionGroupIndex = params.questionGroupIndex;
  let adrDetails = programEnrolment.getObservationValue("cba46928-6bc4-41d0-87b8-7df22ce20c24");
  
  if(adrDetails && adrDetails.length > 0){

    let currentQuestionGroup = adrDetails[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('55a6c1fa-6079-4705-9e86-d894dc561723');

    if(selectedDate) {
      
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate.getValue()).startOf('day');
      if(selectedDate.isAfter(currentDate)){
          validationErrors.push("Invalid date: Future dates are not allowed");
      }
    } 
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "0fdb26c7-7c4d-43b2-ba8f-c0cb438e53bb",
          "mandatory": true
        },
        {
          "name": "ADR initiated before",
          "uuid": "373e3f13-4de4-4d5b-8cd7-b5b85cdbb948",
          "keyValues": [],
          "concept": {
            "name": "ADR initiated before",
            "uuid": "52497103-d7ae-4f0b-8b26-124fd8d08340",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Govt Dept",
                "uuid": "7f23db15-70df-49a8-9599-e0d7975601a0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Self",
                "uuid": "76307dae-3632-4c9c-9e99-a85d2efcc732",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "parentFormElementUuid": "0fdb26c7-7c4d-43b2-ba8f-c0cb438e53bb",
          "mandatory": true
        },
        {
          "name": "If through govt dept, name of dept",
          "uuid": "b4604198-e174-43d9-a24f-715faaee52b1",
          "keyValues": [],
          "concept": {
            "name": "If through govt dept, name of dept",
            "uuid": "b08859ab-f54e-4c89-8d84-259055af585f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.questionGroupValueInEnrolment("52497103-d7ae-4f0b-8b26-124fd8d08340", "cba46928-6bc4-41d0-87b8-7df22ce20c24", params.questionGroupIndex).containsAnswerConceptName("7f23db15-70df-49a8-9599-e0d7975601a0").matches();
  
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
                          "scope": "questionGroupEnrolment",
                          "conceptName": "ADR initiated before",
                          "conceptUuid": "52497103-d7ae-4f0b-8b26-124fd8d08340",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "cba46928-6bc4-41d0-87b8-7df22ce20c24"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Govt Dept"
                          ],
                          "answerConceptUuids": [
                            "7f23db15-70df-49a8-9599-e0d7975601a0"
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
          "parentFormElementUuid": "0fdb26c7-7c4d-43b2-ba8f-c0cb438e53bb",
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("c4d9571c-1f78-45d7-a415-83589595ae9d").containsAnswerConceptName("02159a6a-a47a-4052-a040-63d9bf944e50").or.when.valueInEnrolment("aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8").containsAnswerConceptName("e2f87957-27c0-4528-bb17-b9fd9bd8582d").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
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
                      "scope": "enrolment",
                      "conceptName": "Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing",
                      "conceptUuid": "c4d9571c-1f78-45d7-a415-83589595ae9d",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "ADR initiated"
                      ],
                      "answerConceptUuids": [
                        "02159a6a-a47a-4052-a040-63d9bf944e50"
                      ]
                    },
                    "operator": "containsAnswerConceptName"
                  },
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "enrolment",
                      "conceptName": "Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing",
                      "conceptUuid": "aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "ADR initiated during trial"
                      ],
                      "answerConceptUuids": [
                        "e2f87957-27c0-4528-bb17-b9fd9bd8582d"
                      ]
                    },
                    "operator": "containsAnswerConceptName"
                  }
                ],
                "conjunction": "or"
              }
            }
          ]
        }
      ],
      "display": "ADR Details",
      "timed": false
    },
    {
      "uuid": "44142b3f-5329-43a9-80cd-a98387f50e2c",
      "name": "FIR Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "FIR No.",
          "uuid": "81da3f72-44a4-4021-ac7c-1cf21fb61c33",
          "keyValues": [],
          "concept": {
            "name": "FIR No.",
            "uuid": "b25b897a-b973-408d-82a8-6fdf5533f16c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Police Station",
          "uuid": "eecb216c-0274-4795-8e9c-533469d7b3d5",
          "keyValues": [],
          "concept": {
            "name": "Police Station",
            "uuid": "be08607e-551a-4335-899f-93954e57563d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of FIR",
          "uuid": "aed1e4b2-fcba-4ed9-be05-d0d6015c6e0e",
          "keyValues": [],
          "concept": {
            "name": "Date of FIR",
            "uuid": "2d6f197f-f0ce-455c-b99c-ef44b7bd903e",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let selectedDate = programEnrolment.getObservationValue('2d6f197f-f0ce-455c-b99c-ef44b7bd903e');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("252f4c55-d113-4951-8ebb-eed01b9ccbb9").containsAnyAnswerConceptName("a3d1b65d-0e00-4e78-9cf2-0bbd29e77642","ad47420b-5a60-42f0-9a49-60011af2bfd5","0fc2f7cb-ab3e-4474-8d85-c4e40917409f","9882ada0-b5da-4662-8d88-baf57a7fdace","4ab86dad-0ddf-4479-bf29-1c99a0a7579f","d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7").matches();
  
  const condition12 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("e1945ebb-19df-4055-b9c2-9fbcda959671").containsAnswerConceptName("81810d3b-1936-42e8-9698-2f9a2f2298ba").matches();
  

        visibility = condition11 && !(condition12);
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "FIR Details",
      "timed": false
    },
    {
      "uuid": "25ece417-cedd-4409-8efe-fa1211d13fda",
      "name": "Court Details",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Name of Case in Court",
          "uuid": "73f86377-2f7e-4ecd-a112-03f10da5bc68",
          "keyValues": [],
          "concept": {
            "name": "Name of Case in Court",
            "uuid": "4ebf7efb-1e5a-4914-876f-0ae74cc5f91a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Case Number",
          "uuid": "2c1e1bc2-0c14-4447-9c9c-aa1759c6e422",
          "keyValues": [],
          "concept": {
            "name": "Case Number",
            "uuid": "612f3bd5-ffcb-4fde-8055-50f02bf1328f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Filing date",
          "uuid": "331213fd-f8f9-46d1-b865-0d4eb7520e16",
          "keyValues": [],
          "concept": {
            "name": "Filing date",
            "uuid": "0d92b108-776d-4abc-abe4-c80a13b5b669",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let selectedDate = programEnrolment.getObservationValue('0d92b108-776d-4abc-abe4-c80a13b5b669');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Which court?",
          "uuid": "e6f8960b-361d-4c10-89d6-d2385b2df8d1",
          "keyValues": [],
          "concept": {
            "name": "Which court?",
            "uuid": "03d822c9-0e66-4ae4-85e7-aecb5024a171",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "cadc8363-b121-4cd4-bbbf-5bee4fd620d1"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const individual = programEnrolment.individual;
  const individualService = params.services.individualService;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let answersToShow = [];
  
  const courtSubjectsUUIDs = individualService.getSubjectsInLocation(individual.lowestAddressLevel, 'Court')
    .map((ind) => ind.uuid);

  if(courtSubjectsUUIDs && courtSubjectsUUIDs.length > 0){
    answersToShow.push(...courtSubjectsUUIDs);
  }
  else{
    validationErrors.push("There are no Courts registered in this selected location.");
  }

  const selectedCourt = programEnrolment.getObservationValue("03d822c9-0e66-4ae4-85e7-aecb5024a171");
  
  if(selectedCourt && answersToShow.length > 0 && (!answersToShow.includes(selectedCourt))) {
    validationErrors.push("The selected Court has a different address than the chosen Case address. Please select a Court associated with the selected address.");
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors, answersToShow);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("e1945ebb-19df-4055-b9c2-9fbcda959671").containsAnyAnswerConceptName("81810d3b-1936-42e8-9698-2f9a2f2298ba","7ece902f-424d-4759-a93c-bad9ada49ae0","3b67b65b-556d-487e-a75f-53486e43ddca").matches();
  
        visibility = !(condition11 );
  
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
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "enrolment",
                      "conceptName": "Stage of Active (pre-litigation) - Criminal Prosecution/ Defence fresh filing",
                      "conceptUuid": "e1945ebb-19df-4055-b9c2-9fbcda959671",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Pre-Investigation",
                        "Investigation",
                        "Chargesheet filed"
                      ],
                      "answerConceptUuids": [
                        "81810d3b-1936-42e8-9698-2f9a2f2298ba",
                        "7ece902f-424d-4759-a93c-bad9ada49ae0",
                        "3b67b65b-556d-487e-a75f-53486e43ddca"
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
      "display": "Court Details",
      "timed": false
    },
    {
      "uuid": "3585f17a-0eb9-482a-ac96-b76eecd99312",
      "name": "Case details",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Date of closure",
          "uuid": "1fae6967-e37f-4e4e-81d3-fbaf6b547fe7",
          "keyValues": [],
          "concept": {
            "name": "Date of closure",
            "uuid": "c2f6852a-8355-4c87-b7e5-22b75e9857f6",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let selectedDate = programEnrolment.getObservationValue('c2f6852a-8355-4c87-b7e5-22b75e9857f6');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Reason for closure",
          "uuid": "176ebc2e-493e-46f3-b119-515feccfdb60",
          "keyValues": [],
          "concept": {
            "name": "Reason for closure",
            "uuid": "d7eb6210-68e6-4b05-89de-ecc90da6c829",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Client not contactable",
                "uuid": "7a281f77-1cd1-4dfa-af06-ab638e79beef",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other reason for closure",
                "uuid": "77cb1cae-2e41-4ad8-8baf-dac7b9fdebfc",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Client does not want to proceed",
                "uuid": "b691f1b9-dea1-4ae4-aabd-d49fde3041bf",
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
          "name": "Other reason for closure, please specify",
          "uuid": "e8b2ac08-4d91-4bf6-acb3-894bda0b2ff7",
          "keyValues": [],
          "concept": {
            "name": "Other reason for closure, please specify",
            "uuid": "ffa956c5-a4cc-4c9b-a539-fd8193e29bac",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("d7eb6210-68e6-4b05-89de-ecc90da6c829").containsAnswerConceptName("77cb1cae-2e41-4ad8-8baf-dac7b9fdebfc").matches();
  
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
                          "scope": "enrolment",
                          "conceptName": "Reason for closure",
                          "conceptUuid": "d7eb6210-68e6-4b05-89de-ecc90da6c829",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other reason for closure"
                          ],
                          "answerConceptUuids": [
                            "77cb1cae-2e41-4ad8-8baf-dac7b9fdebfc"
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
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b1927aeb-ab4c-46a6-8eff-6ccdf38f5478").containsAnswerConceptName("d56b69db-da83-4f60-9a3f-4cc159e5e191").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
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
                      "scope": "enrolment",
                      "conceptName": "Status of case",
                      "conceptUuid": "b1927aeb-ab4c-46a6-8eff-6ccdf38f5478",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Closed"
                      ],
                      "answerConceptUuids": [
                        "d56b69db-da83-4f60-9a3f-4cc159e5e191"
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
      "display": "Case details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}