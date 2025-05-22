{
  "name": "Outreach Location Specific Details",
  "uuid": "33a600ab-f0c3-4d80-a5cd-c619b501051c",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "500bfe3a-1383-42e1-85b7-a3837f4fe970",
      "name": "Prelim Question",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Where did the Outreach Activity happen - village or other space?",
          "uuid": "3a61a23a-e5ba-4c0f-8947-a2b43dbbaff8",
          "keyValues": [],
          "concept": {
            "name": "Where did the Outreach Activity happen - village or other space?",
            "uuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Village",
                "uuid": "a2b7f528-898c-4990-a267-ed85e2722c81",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Space",
                "uuid": "326f1f66-0707-4eb3-b708-a89b8ffbab4a",
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
          "name": "Where In Village, did you go?",
          "uuid": "a219fccc-d62c-48bc-920e-5bb77280aad8",
          "keyValues": [],
          "concept": {
            "name": "Where In Village, did you go?",
            "uuid": "0f22d77f-3b4d-44f6-a587-bc90d3855b98",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                "uuid": "c3c78fb2-102f-4e2b-9532-accc8d89a882",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Samaany ganv / basti mein mulakat",
                "uuid": "b8e5ba0e-d975-41a8-af14-c238b0a1b2a4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Primary school",
                "uuid": "25f4ecf4-9d3c-46e7-82b5-86303e980961",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Client's home",
                "uuid": "110ea820-2bc1-464e-9a81-bc23215102a9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Ganv ke logon ki rozgaar se judi jagah",
                "uuid": "436b449d-8d66-44c1-8ee0-53b9d3ee64da",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other place you went",
                "uuid": "3f292c9e-8878-4629-9148-2c5166e9ed90",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Places of worship",
                "uuid": "40801ffb-b69d-42db-a3f0-a6bc285f9ed0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Yuva batihak",
                "uuid": "29305a90-86a3-4020-ad8c-6d7d63e57bda",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ganv ke logon ki places of public gathering",
                "uuid": "9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "High school / Higher secondary school",
                "uuid": "7800f20f-a226-48fc-9ec0-f69587195434",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mahila baithak",
                "uuid": "bb32a771-d5f4-4250-96f1-1a04728f208a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.latestValueInPreviousEncounters("59a812b5-511d-44a5-99ef-a963881a6864").defined.matches();
  
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
                      "scope": "latestInPreviousEncounters",
                      "conceptName": "Kya iss ganv mein koi aur sthal gaye?",
                      "conceptUuid": "59a812b5-511d-44a5-99ef-a963881a6864",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {},
                    "operator": "defined"
                  }
                ],
                "conjunction": "and"
              }
            }
          ]
        }
      ],
      "display": "Prelim Question",
      "timed": false
    },
    {
      "uuid": "ccbdf6fa-c5b1-4ef4-beae-4ca4864fedae",
      "name": "Village Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Where In Village, did you go?",
          "uuid": "8ef6fe18-905c-45ca-9b8b-55d5e5959c2a",
          "keyValues": [],
          "concept": {
            "name": "Where In Village, did you go?",
            "uuid": "0f22d77f-3b4d-44f6-a587-bc90d3855b98",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                "uuid": "c3c78fb2-102f-4e2b-9532-accc8d89a882",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Samaany ganv / basti mein mulakat",
                "uuid": "b8e5ba0e-d975-41a8-af14-c238b0a1b2a4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Primary school",
                "uuid": "25f4ecf4-9d3c-46e7-82b5-86303e980961",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Client's home",
                "uuid": "110ea820-2bc1-464e-9a81-bc23215102a9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Ganv ke logon ki rozgaar se judi jagah",
                "uuid": "436b449d-8d66-44c1-8ee0-53b9d3ee64da",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other place you went",
                "uuid": "3f292c9e-8878-4629-9148-2c5166e9ed90",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Places of worship",
                "uuid": "40801ffb-b69d-42db-a3f0-a6bc285f9ed0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Yuva batihak",
                "uuid": "29305a90-86a3-4020-ad8c-6d7d63e57bda",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ganv ke logon ki places of public gathering",
                "uuid": "9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "High school / Higher secondary school",
                "uuid": "7800f20f-a226-48fc-9ec0-f69587195434",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mahila baithak",
                "uuid": "bb32a771-d5f4-4250-96f1-1a04728f208a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("a2b7f528-898c-4990-a267-ed85e2722c81").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.latestValueInPreviousEncounters("59a812b5-511d-44a5-99ef-a963881a6864").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "scope": "encounter",
                          "conceptName": "Where did the Outreach Activity happen - village or other space?",
                          "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Village"
                          ],
                          "answerConceptUuids": [
                            "a2b7f528-898c-4990-a267-ed85e2722c81"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
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
                          "scope": "latestInPreviousEncounters",
                          "conceptName": "Kya iss ganv mein koi aur sthal gaye?",
                          "conceptUuid": "59a812b5-511d-44a5-99ef-a963881a6864",
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
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
          "uuid": "78bffcdc-77c5-467f-8479-3071bc101c20",
          "keyValues": [],
          "concept": {
            "name": "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
            "uuid": "3bcb3a04-a402-499d-b292-47fb8bf19b72",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Christian Basti",
                "uuid": "11ec7fa3-be0b-45f2-8a51-5ed3141214d2",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Muslim Basti",
                "uuid": "f4136a43-0615-4cc3-ad81-a7318a9103aa",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Pardhi Basti / PVTG Basti",
                "uuid": "3765ff03-2410-4901-9172-6c1188e1cd8c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                "uuid": "04e69ece-90ac-4651-952d-1b58d3bea4fc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Dalit Basti",
                "uuid": "9526f577-4589-4695-903b-2e41d78e450e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Adivasi Basti",
                "uuid": "37f169ec-cba9-4921-81cf-3151774f0578",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterType = encounter.encounterType.name;
  
  const hasVisitedVisheshSamudayPlaces = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("c3c78fb2-102f-4e2b-9532-accc8d89a882").matches();
  
  visibility = hasVisitedVisheshSamudayPlaces ;

  if(visibility){
    let prvsEncounters = encounter.individual.getEncounters(true)
        .filter((enc) => enc.encounterType.name == encounterType && enc.uuid != encounter.uuid);

    let allreadySelectedOptions = []

    for (let i = 0; i < prvsEncounters.length; i++){
        let enc =  prvsEncounters[i];
        let option = enc.getObservationValue("3bcb3a04-a402-499d-b292-47fb8bf19b72");
        if(option){
            allreadySelectedOptions.push(option);
        }
    }

    if(allreadySelectedOptions.length) {
        _.forEach(allreadySelectedOptions, (answer) => {
            const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
            if (answerToSkip) answersToSkip.push(answerToSkip);
        });
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak, please specify",
          "uuid": "f13064f5-a6b7-46e1-b744-aa9e174fdf04",
          "keyValues": [],
          "concept": {
            "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak, please specify",
            "uuid": "001fe336-0b66-4771-af09-f827ea1aa665",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3bcb3a04-a402-499d-b292-47fb8bf19b72").containsAnswerConceptName("04e69ece-90ac-4651-952d-1b58d3bea4fc").matches();
  
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
                          "conceptName": "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                          "conceptUuid": "3bcb3a04-a402-499d-b292-47fb8bf19b72",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak"
                          ],
                          "answerConceptUuids": [
                            "04e69ece-90ac-4651-952d-1b58d3bea4fc"
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
          "name": "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
          "uuid": "e89f74a9-a5a0-4a45-b832-f6d4fc5fe90c",
          "keyValues": [],
          "concept": {
            "name": "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
            "uuid": "6fcc3782-dd26-46c8-b8fc-7f8da6a7d665",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Eet bhatta",
                "uuid": "2d4f9fad-85e1-4cdb-ab72-65cc333c2feb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tendu pataa sangrahan kendr",
                "uuid": "8e6e6df5-fd59-4596-bf63-54a82c490efb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mandi",
                "uuid": "6e15969c-0ff1-4dbd-abc9-589a09340df9",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Mill",
                "uuid": "0df75774-aed9-4dea-8a7e-1fbe5ae44160",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Ganv ke logon ki rozgaar se judi jagah",
                "uuid": "8cb804a2-83f1-470a-ac87-aac4e293c05f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Factory",
                "uuid": "efac1bd1-b8ef-4688-b6bc-a0538be4767e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "NREGA point",
                "uuid": "a2920822-6fe5-4f85-a55a-cc1b814df9b1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterType = encounter.encounterType.name;
  
  const hasVisitedEmploymentLocationsForVillagers = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("436b449d-8d66-44c1-8ee0-53b9d3ee64da").matches();
  
  visibility = hasVisitedEmploymentLocationsForVillagers ;

  if(visibility){
    let prvsEncounters = encounter.individual.getEncounters(true)
        .filter((enc) => enc.encounterType.name == encounterType && enc.uuid != encounter.uuid);

    let allreadySelectedOptions = []

    for (let i = 0; i < prvsEncounters.length; i++){
        let enc =  prvsEncounters[i];
        let option = enc.getObservationValue("6fcc3782-dd26-46c8-b8fc-7f8da6a7d665");
        if(option){
            allreadySelectedOptions.push(option);
        }
    }

    if(allreadySelectedOptions.length) {
        _.forEach(allreadySelectedOptions, (answer) => {
            const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
            if (answerToSkip) answersToSkip.push(answerToSkip);
        });
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Ganv ke logon ki rozgaar se judi jagah, please specify",
          "uuid": "5fedccac-96de-4b3d-aed6-3815926e321f",
          "keyValues": [],
          "concept": {
            "name": "Other Ganv ke logon ki rozgaar se judi jagah, please specify",
            "uuid": "8f3ca5c3-2460-4408-8484-af8ada713025",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6fcc3782-dd26-46c8-b8fc-7f8da6a7d665").containsAnswerConceptName("8cb804a2-83f1-470a-ac87-aac4e293c05f").matches();
  
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
                          "conceptName": "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
                          "conceptUuid": "6fcc3782-dd26-46c8-b8fc-7f8da6a7d665",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Ganv ke logon ki rozgaar se judi jagah"
                          ],
                          "answerConceptUuids": [
                            "8cb804a2-83f1-470a-ac87-aac4e293c05f"
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
          "name": "Ganv ke logon ki places of public gathering - Description of the place",
          "uuid": "55d4e4bf-deec-4dec-b066-9d25a4676f71",
          "keyValues": [],
          "concept": {
            "name": "Ganv ke logon ki places of public gathering - Description of the place",
            "uuid": "b5e8fe86-f35f-4356-b54f-398b4703756d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Festival",
                "uuid": "017a7f64-225e-4530-8262-80ad778eb618",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Panchayat bhavan",
                "uuid": "1027564b-455d-4be9-8c3f-facd69b5a7b9",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other Ganv ke logon ki places of public gathering",
                "uuid": "f5026b05-6a3c-4286-a8e1-71e17bd45d0a",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Chowk",
                "uuid": "bec4ff0d-4704-4791-b553-f82ad6691708",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tikakaran camp",
                "uuid": "fd01966a-279a-45b5-8cea-675046c2d224",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Taalaab",
                "uuid": "d17e939e-ea88-4a21-96a6-69efdc9acd7a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Gram chabootra",
                "uuid": "de83ddf1-f226-4e31-b656-70526ccb1957",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Shaadi",
                "uuid": "168db760-944c-4451-8154-53bed6085e2c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "PDS dukan",
                "uuid": "e84be2f4-d608-49dd-add9-031a52376531",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Market",
                "uuid": "e4e6a2d6-b8ff-4ef2-9261-35230564ec9f",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Anganwadi",
                "uuid": "640627b4-7af2-4f81-b602-586cd7f191a4",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Kirana dukaan",
                "uuid": "d8e82ad8-fa69-453f-a11c-0b1b5a8fd107",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterType = encounter.encounterType.name;
  
  const hasVisitedPublicGatheringPlacesForVillagers = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6").matches();
  
  visibility = hasVisitedPublicGatheringPlacesForVillagers ;

  if(visibility){
    let prvsEncounters = encounter.individual.getEncounters(true)
        .filter((enc) => enc.encounterType.name == encounterType && enc.uuid != encounter.uuid);

    let allreadySelectedOptions = []

    for (let i = 0; i < prvsEncounters.length; i++){
        let enc =  prvsEncounters[i];
        let option = enc.getObservationValue("b5e8fe86-f35f-4356-b54f-398b4703756d");
        if(option){
            allreadySelectedOptions.push(option);
        }
    }

    if(allreadySelectedOptions.length) {
        _.forEach(allreadySelectedOptions, (answer) => {
            const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
            if (answerToSkip) answersToSkip.push(answerToSkip);
        });
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Ganv ke logon ki places of public gathering, please specify",
          "uuid": "1f52241b-ea2e-4f9d-870e-5488088bb86d",
          "keyValues": [],
          "concept": {
            "name": "Other Ganv ke logon ki places of public gathering, please specify",
            "uuid": "b6f31396-9b14-47a5-b58c-00f84d24ef85",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("b5e8fe86-f35f-4356-b54f-398b4703756d").containsAnswerConceptName("f5026b05-6a3c-4286-a8e1-71e17bd45d0a").matches();
  
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
                          "conceptName": "Ganv ke logon ki places of public gathering - Description of the place",
                          "conceptUuid": "b5e8fe86-f35f-4356-b54f-398b4703756d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Ganv ke logon ki places of public gathering"
                          ],
                          "answerConceptUuids": [
                            "f5026b05-6a3c-4286-a8e1-71e17bd45d0a"
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
          "name": "Mahila Baithak - Description of the place",
          "uuid": "ca010fbb-dc2e-4ed3-bef8-b0bd42fe9c14",
          "keyValues": [],
          "concept": {
            "name": "Mahila Baithak - Description of the place",
            "uuid": "49971f17-12a1-40e2-81f7-1ec5816b4f1f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ASHA worker baithak",
                "uuid": "6f8b0ef8-b4e5-4eb1-aa60-16db03653083",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mahila samooh baithak",
                "uuid": "e5db10a3-1784-48d9-8bbc-ec61da89f315",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Anganwadi baithak",
                "uuid": "43c98024-8c05-41df-af4c-0110a6b9e26c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mitanin baithak",
                "uuid": "a25f3a35-5c2a-4d45-a866-d916fe4bf365",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other Mahila Baithak",
                "uuid": "c5edc834-e185-495c-bc99-233739402b7e",
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
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterType = encounter.encounterType.name;
  
  const hasVisitedMahilaBaithak = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("bb32a771-d5f4-4250-96f1-1a04728f208a").matches();
  
  visibility = hasVisitedMahilaBaithak ;

  if(visibility){
    let prvsEncounters = encounter.individual.getEncounters(true)
        .filter((enc) => enc.encounterType.name == encounterType && enc.uuid != encounter.uuid);

    let allreadySelectedOptions = []

    for (let i = 0; i < prvsEncounters.length; i++){
        let enc =  prvsEncounters[i];
        let option = enc.getObservationValue("49971f17-12a1-40e2-81f7-1ec5816b4f1f");
        if(option){
            allreadySelectedOptions.push(option);
        }
    }

    if(allreadySelectedOptions.length) {
        _.forEach(allreadySelectedOptions, (answer) => {
            const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
            if (answerToSkip) answersToSkip.push(answerToSkip);
        });
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Mahila Baithak, please specify",
          "uuid": "dba53aec-f8a9-43dc-b57d-730709fe6d10",
          "keyValues": [],
          "concept": {
            "name": "Other Mahila Baithak, please specify",
            "uuid": "34410928-8eed-42bd-9c02-b042065b1bb2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("49971f17-12a1-40e2-81f7-1ec5816b4f1f").containsAnswerConceptName("c5edc834-e185-495c-bc99-233739402b7e").matches();
  
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
                          "conceptName": "Mahila Baithak - Description of the place",
                          "conceptUuid": "49971f17-12a1-40e2-81f7-1ec5816b4f1f",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Mahila Baithak"
                          ],
                          "answerConceptUuids": [
                            "c5edc834-e185-495c-bc99-233739402b7e"
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
          "name": "Place of worship  - Description of the place",
          "uuid": "4085457b-77c0-49b3-8032-af912e671583",
          "keyValues": [],
          "concept": {
            "name": "Place of worship  - Description of the place - Village",
            "uuid": "e8d8581a-db42-497e-b8c9-06d08146f79a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Church",
                "uuid": "c3c592f9-1b43-4d3c-b799-9609f29cd567",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Mandir",
                "uuid": "a44b75a8-749a-4d37-abfa-749539759335",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Gurudwara",
                "uuid": "f1856455-b841-4734-b5a8-d636d4336c80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mosque",
                "uuid": "50740018-11e2-4ca5-a9f2-921dccb58651",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Place of worship",
                "uuid": "a06ae898-9189-4b22-9637-3910b37d0fcc",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const encounterType = encounter.encounterType.name;
  
  const hasVisitedPlaceOfWorship = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("40801ffb-b69d-42db-a3f0-a6bc285f9ed0").matches();
  
  visibility = hasVisitedPlaceOfWorship ;

  if(visibility){
    let prvsEncounters = encounter.individual.getEncounters(true)
        .filter((enc) => enc.encounterType.name == encounterType && enc.uuid != encounter.uuid);

    let allreadySelectedOptions = []

    for (let i = 0; i < prvsEncounters.length; i++){
        let enc =  prvsEncounters[i];
        let option = enc.getObservationValue("e8d8581a-db42-497e-b8c9-06d08146f79a");
        if(option){
            allreadySelectedOptions.push(option);
        }
    }

    if(allreadySelectedOptions.length) {
        _.forEach(allreadySelectedOptions, (answer) => {
            const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
            if (answerToSkip) answersToSkip.push(answerToSkip);
        });
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Place of worship, please select",
          "uuid": "3c047d79-1f1d-4b7e-9c99-016acf8118d2",
          "keyValues": [],
          "concept": {
            "name": "Other Place of worship, please select - Village",
            "uuid": "cc0d3093-3771-44b1-8732-1bbd8cfdaad2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("e8d8581a-db42-497e-b8c9-06d08146f79a").containsAnswerConceptName("a06ae898-9189-4b22-9637-3910b37d0fcc").matches();
  
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
                          "conceptName": "Place of worship  - Description of the place",
                          "conceptUuid": "e8d8581a-db42-497e-b8c9-06d08146f79a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Place of worship"
                          ],
                          "answerConceptUuids": [
                            "a06ae898-9189-4b22-9637-3910b37d0fcc"
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
          "name": "Any other place you went for outreach, please specify",
          "uuid": "523c4d88-9205-4a10-be59-571dcbd8201c",
          "keyValues": [],
          "concept": {
            "name": "Any other place you went for outreach, please specify",
            "uuid": "d98fbfb4-ff31-47d0-b4ad-781f0a3a37e1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("3f292c9e-8878-4629-9148-2c5166e9ed90").matches();
  
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
                          "conceptName": "Where In Village, did you go?",
                          "conceptUuid": "0f22d77f-3b4d-44f6-a587-bc90d3855b98",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other place you went"
                          ],
                          "answerConceptUuids": [
                            "3f292c9e-8878-4629-9148-2c5166e9ed90"
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
          "name": "What did you do?",
          "uuid": "6e334b4d-3ca2-4226-98f4-cb5433ea8194",
          "keyValues": [],
          "concept": {
            "name": "What did you do? - Village",
            "uuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Preparation for campaign",
                "uuid": "662c1e75-f4ae-4d75-8887-3cce5fb01e9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Preparation for a legal awareness camp",
                "uuid": "4ec506eb-2bb9-4ca3-977e-83bfc97c7323",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Case / claim follow-up",
                "uuid": "99318802-0ca0-4ca6-b8bb-3cd3645dcc02",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "General Outreach",
                "uuid": "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Preparation for service camp",
                "uuid": "1fd8001d-623b-421c-9f47-736210cbcf55",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").defined.and.when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").containsAnswerConceptName("f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").defined.and.when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").containsAnyAnswerConceptName("621ce892-2b8a-4820-935e-f5d034e037a4","f7461b92-ca73-4841-86e3-a14cc6002067").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("a2b7f528-898c-4990-a267-ed85e2722c81").matches();
  
  const condition23 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.latestValueInPreviousEncounters("59a812b5-511d-44a5-99ef-a963881a6864").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
  if(condition11 ) {
    _.forEach(["621ce892-2b8a-4820-935e-f5d034e037a4","f7461b92-ca73-4841-86e3-a14cc6002067"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition13 || condition23 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Service camp",
                      "Legal awareness camp"
                    ],
                    "answerUuidsToSkip": [
                      "621ce892-2b8a-4820-935e-f5d034e037a4",
                      "f7461b92-ca73-4841-86e3-a14cc6002067"
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
                          "scope": "encounter",
                          "conceptName": "What did you do?",
                          "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "What did you do?",
                          "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "General Outreach"
                          ],
                          "answerConceptUuids": [
                            "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "General Outreach"
                    ],
                    "answerUuidsToSkip": [
                      "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
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
                          "scope": "encounter",
                          "conceptName": "What did you do? - Village",
                          "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "What did you do? - Village",
                          "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Service camp",
                            "Legal awareness camp"
                          ],
                          "answerConceptUuids": [
                            "621ce892-2b8a-4820-935e-f5d034e037a4",
                            "f7461b92-ca73-4841-86e3-a14cc6002067"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
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
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Where did the Outreach Activity happen - village or other space?",
                          "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Village"
                          ],
                          "answerConceptUuids": [
                            "a2b7f528-898c-4990-a267-ed85e2722c81"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
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
                          "scope": "latestInPreviousEncounters",
                          "conceptName": "Kya iss ganv mein koi aur sthal gaye?",
                          "conceptUuid": "59a812b5-511d-44a5-99ef-a963881a6864",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("a593730d-b554-4270-9cea-08e9fde1bb70").containsAnswerConceptName("3aca1c0b-d24b-4aef-9b54-6972a79dbf45").matches();
  
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
                          "conceptName": "On which Legal Awareness theme?",
                          "conceptUuid": "a593730d-b554-4270-9cea-08e9fde1bb70",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Legal awareness camp theme"
                          ],
                          "answerConceptUuids": [
                            "3aca1c0b-d24b-4aef-9b54-6972a79dbf45"
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
          "name": "Legal Awareness Methodology",
          "uuid": "58aabdca-6a73-43f2-8003-ae6d5e8386b6",
          "keyValues": [],
          "concept": {
            "name": "Legal Awareness Methodology",
            "uuid": "6fb237b0-1300-49b7-b16a-e8b1850fd186",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Patrika vitaran",
                "uuid": "59695520-06dc-4074-8981-7371b8d418b8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Poster",
                "uuid": "611837d0-1845-4fdf-9df0-66b6f8182b35",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Diwar lekhan",
                "uuid": "b83db52d-a3a2-4b46-9d79-d6452bc4e8e4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Nukkad natak",
                "uuid": "6423ba7a-69a9-4c22-abdf-509e0bc133e0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Any other Legal awareness camp methodology used",
                "uuid": "632ada9d-8dc3-4c52-9556-5ecf0f491a2b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Folk art",
                "uuid": "1a23516a-1bf4-416d-9ab6-b4af9ee44f4a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Audio video material",
                "uuid": "bcd7d658-98be-4992-b0f0-be3c0f5823cc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Legal awareness camp methodology used, please specify",
          "uuid": "87330e36-83a8-4bd9-9c8e-254af2ab4efe",
          "keyValues": [],
          "concept": {
            "name": "Any other Legal awareness camp methodology used, please specify",
            "uuid": "570be314-0bf5-4733-9073-05f427d05aa4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6fb237b0-1300-49b7-b16a-e8b1850fd186").containsAnswerConceptName("632ada9d-8dc3-4c52-9556-5ecf0f491a2b").matches();
  
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
                          "conceptName": "Legal Awareness Methodology",
                          "conceptUuid": "6fb237b0-1300-49b7-b16a-e8b1850fd186",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Legal awareness camp methodology used"
                          ],
                          "answerConceptUuids": [
                            "632ada9d-8dc3-4c52-9556-5ecf0f491a2b"
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
          "name": "3 log jin se milein - Unka Naam, Gender and Phone Number",
          "uuid": "d6a9c37f-be51-489e-b5a6-43615a826980",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "3 log jin se milein - Unka Naam, Gender and Phone Number - Village",
            "uuid": "0e1bc142-2841-4b8e-bf45-0e322ed0563d",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const questionGroup = encounter.getObservationValue("0e1bc142-2841-4b8e-bf45-0e322ed0563d");
  
  let questionGroupLength = 0
  
  if(questionGroup) questionGroupLength = questionGroup.length
  
  if(questionGroupLength > 3){
    validationErrors.push("Repeat the question group only for 3 times."); 
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Andazi kitne logon tak pahunche",
          "uuid": "954fda6b-1488-45de-a873-66b68e22bf89",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunche - Village - Legal awareness camp",
            "uuid": "08d07d33-82dc-4dfd-86d8-b0b49a5adb65",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("08d07d33-82dc-4dfd-86d8-b0b49a5adb65").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("08d07d33-82dc-4dfd-86d8-b0b49a5adb65");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Naam",
          "uuid": "1d3502e7-51c0-43d2-9ce7-04529a4e36b1",
          "keyValues": [],
          "concept": {
            "name": "Naam",
            "uuid": "6b8ca000-07f4-4dc0-aca9-d83edd1d828d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "d6a9c37f-be51-489e-b5a6-43615a826980",
          "mandatory": true
        },
        {
          "name": "Gender",
          "uuid": "e8c1e3a1-d32a-4cc6-987c-3455a5eea24f",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "d6a9c37f-be51-489e-b5a6-43615a826980",
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "c80730d4-3a7b-4449-bc1d-0fab44c3c1de",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "d6a9c37f-be51-489e-b5a6-43615a826980",
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").containsAnswerConceptName("f7461b92-ca73-4841-86e3-a14cc6002067").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do?",
                      "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Legal awareness camp"
                      ],
                      "answerConceptUuids": [
                        "f7461b92-ca73-4841-86e3-a14cc6002067"
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
      "display": "Legal Awareness Camp",
      "timed": false
    },
    {
      "uuid": "b27a3cf9-5620-4496-8394-46e2888f9ad7",
      "name": "General Outreach",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "On which General Outreach theme?",
          "uuid": "54fe77f3-3e54-4169-800d-8a25a572f744",
          "keyValues": [],
          "concept": {
            "name": "On which General Outreach theme?",
            "uuid": "f555ac77-7cc1-40ba-9dab-ce8ad496c866",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Dalit Adivasi atyachar ke khilaaf adhikaar",
                "uuid": "a893e76f-b188-4da3-aec6-0f9b1e1d4665",
                "dataType": "NA",
                "answers": [],
                "order": 5,
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
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
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
                "order": 7,
                "active": true
              },
              {
                "name": "Rights of labourers",
                "uuid": "c6bdc92d-ab29-4489-9efe-32770f596657",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Social boycott",
                "uuid": "321c3f07-bc25-4d2a-8483-54a65530ad86",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Any other General Outreach theme",
                "uuid": "16a13753-65ca-43e4-bfed-bb7af545d398",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "RTI / PSGA / Identity docs / social sec scheme",
                "uuid": "c8dc1f40-728b-4aad-b280-8431534e7bd6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other General Outreach theme, please specify",
          "uuid": "25972d5e-5895-4e3a-ba35-aeb966038642",
          "keyValues": [],
          "concept": {
            "name": "Any other General Outreach theme, please specify",
            "uuid": "564d39d9-653d-4b8a-93c6-71fcb38362d1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f555ac77-7cc1-40ba-9dab-ce8ad496c866").containsAnswerConceptName("16a13753-65ca-43e4-bfed-bb7af545d398").matches();
  
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
                          "conceptName": "On which General Outreach theme?",
                          "conceptUuid": "f555ac77-7cc1-40ba-9dab-ce8ad496c866",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other General Outreach theme"
                          ],
                          "answerConceptUuids": [
                            "16a13753-65ca-43e4-bfed-bb7af545d398"
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
          "name": "General Outreach Methodology",
          "uuid": "42cefec2-c941-4308-b5c0-518c547d7bc3",
          "keyValues": [],
          "concept": {
            "name": "General Outreach Methodology",
            "uuid": "bddac4e4-7e5f-443e-a390-a018876dc580",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Diwar lekhan",
                "uuid": "b83db52d-a3a2-4b46-9d79-d6452bc4e8e4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Poster",
                "uuid": "611837d0-1845-4fdf-9df0-66b6f8182b35",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Nukkad natak",
                "uuid": "6423ba7a-69a9-4c22-abdf-509e0bc133e0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Patrika vitaran",
                "uuid": "59695520-06dc-4074-8981-7371b8d418b8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Audio video material",
                "uuid": "bcd7d658-98be-4992-b0f0-be3c0f5823cc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other Methodology used for General Outreach",
                "uuid": "43852ff9-47ec-4139-85fc-0472a4d7638b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Folk art",
                "uuid": "1a23516a-1bf4-416d-9ab6-b4af9ee44f4a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Methodology used for General Outreach, please specify",
          "uuid": "24f18f37-212c-4659-a6d8-9bec622a8f15",
          "keyValues": [],
          "concept": {
            "name": "Any other Methodology used for General Outreach, please specify",
            "uuid": "e435bb72-4c95-439b-9acf-fb5823c08d77",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("bddac4e4-7e5f-443e-a390-a018876dc580").containsAnswerConceptName("43852ff9-47ec-4139-85fc-0472a4d7638b").matches();
  
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
                          "conceptName": "General Outreach Methodology",
                          "conceptUuid": "bddac4e4-7e5f-443e-a390-a018876dc580",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Methodology used for General Outreach"
                          ],
                          "answerConceptUuids": [
                            "43852ff9-47ec-4139-85fc-0472a4d7638b"
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
          "name": "Andazi kitne logon tak pahunch",
          "uuid": "869aafb4-de34-4869-a3e4-5c39bfbfdc41",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunch - Village - General outreach",
            "uuid": "b1cec370-1410-4616-adf6-9d1d2a6c0a12",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("b1cec370-1410-4616-adf6-9d1d2a6c0a12").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("b1cec370-1410-4616-adf6-9d1d2a6c0a12");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").containsAnswerConceptName("f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do?",
                      "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "General Outreach"
                      ],
                      "answerConceptUuids": [
                        "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
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
      "display": "General Outreach",
      "timed": false
    },
    {
      "uuid": "6794be60-a0f5-4d3a-88a6-2f6ba0f2666b",
      "name": "Service Camp",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "On which Service Camp theme?",
          "uuid": "c7114a37-c4c1-4f0c-8b6e-2c0a084a99ce",
          "keyValues": [],
          "concept": {
            "name": "On which Service Camp theme?",
            "uuid": "2f456cfe-ba4f-444d-ae38-b2f11f593285",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Kisan sambandhit yojana",
                "uuid": "1bc73828-64cc-4e23-92ce-2fd1e6164fcd",
                "dataType": "NA",
                "answers": [],
                "order": 7,
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
                "name": "Moolbhoot Suvidha (nal jal yojana, road, Anganwadi etc.)",
                "uuid": "0695e6ff-46c0-4893-917f-9edc834fc175",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
                "name": "Land documents updation (varsai, namantaran, simankan, batwara, digitisation)",
                "uuid": "a3730afc-936d-4fef-9f98-b15fd2405700",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Any other Service Camp theme",
                "uuid": "25211d1e-81c8-4115-9e54-adb9425bc026",
                "dataType": "NA",
                "answers": [],
                "order": 12,
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
                "name": "Pensions",
                "uuid": "1220ecd8-72b9-4292-93f3-36d380166e33",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Scholarship",
                "uuid": "6ef080e4-0739-42bf-9e3d-ff3f4a0d866e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Identity documents",
                "uuid": "0b040c2a-2f72-432a-be2e-eb94e4eef4e4",
                "dataType": "NA",
                "answers": [],
                "order": 9,
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
                "name": "Ration",
                "uuid": "e8394521-e9ea-41b7-b526-8f67993e1414",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Service Camp theme, please specify",
          "uuid": "1c30ccec-0dc4-4126-a2c6-bd8cdb2ee78b",
          "keyValues": [],
          "concept": {
            "name": "Any other Service Camp theme, please specify",
            "uuid": "bea04a18-4fd6-4fb6-b98f-424247c9cd96",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2f456cfe-ba4f-444d-ae38-b2f11f593285").containsAnswerConceptName("25211d1e-81c8-4115-9e54-adb9425bc026").matches();
  
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
                          "conceptName": "On which Service Camp theme?",
                          "conceptUuid": "2f456cfe-ba4f-444d-ae38-b2f11f593285",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Service Camp theme"
                          ],
                          "answerConceptUuids": [
                            "25211d1e-81c8-4115-9e54-adb9425bc026"
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
          "name": "Number of Total cases / claims Identified",
          "uuid": "43d9996c-cf3f-4a27-8f78-14ed301ff4b4",
          "keyValues": [],
          "concept": {
            "name": "Number of Total cases / claims Identified",
            "uuid": "b448d7ed-ac0e-4f2d-9ca6-3c7844e10f2c",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("b448d7ed-ac0e-4f2d-9ca6-3c7844e10f2c").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("b448d7ed-ac0e-4f2d-9ca6-3c7844e10f2c");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Andazi kitne logon tak pahunche",
          "uuid": "cbf3ab56-189b-4571-beb0-e9a4e35073ce",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunche - Village - Service camp",
            "uuid": "0448e1db-162e-4e31-8a19-589ee4296863",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0448e1db-162e-4e31-8a19-589ee4296863").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("0448e1db-162e-4e31-8a19-589ee4296863");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2b465290-f555-4d3b-b418-b0b9a483d963").containsAnswerConceptName("621ce892-2b8a-4820-935e-f5d034e037a4").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do?",
                      "conceptUuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Service camp"
                      ],
                      "answerConceptUuids": [
                        "621ce892-2b8a-4820-935e-f5d034e037a4"
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
      "display": "Service Camp",
      "timed": false
    },
    {
      "uuid": "007d4e9e-1b37-4c64-87f1-30535c3d2712",
      "name": "Other Details",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Kya iss ganv mein koi aur sthal gaye?",
          "uuid": "e1c18739-7c41-4ab4-80b3-1a1c233f7120",
          "keyValues": [],
          "concept": {
            "name": "Kya iss ganv mein koi aur sthal gaye?",
            "uuid": "59a812b5-511d-44a5-99ef-a963881a6864",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
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
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("a2b7f528-898c-4990-a267-ed85e2722c81").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.latestValueInPreviousEncounters("59a812b5-511d-44a5-99ef-a963881a6864").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
        visibility = condition11 || condition21 ;
  
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
              "conjunction": "or",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "encounter",
                      "conceptName": "Where did the Outreach Activity happen - village or other space?",
                      "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Village"
                      ],
                      "answerConceptUuids": [
                        "a2b7f528-898c-4990-a267-ed85e2722c81"
                      ]
                    },
                    "operator": "containsAnswerConceptName"
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
                      "scope": "latestInPreviousEncounters",
                      "conceptName": "Kya iss ganv mein koi aur sthal gaye?",
                      "conceptUuid": "59a812b5-511d-44a5-99ef-a963881a6864",
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
                ]
              }
            }
          ]
        }
      ],
      "display": "Other Details",
      "timed": false
    },
    {
      "uuid": "4dc0f519-8f20-4608-85e5-c97a8f90adac",
      "name": "Other Space Details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "If anya sthal, where did you go?",
          "uuid": "ff9e26b3-219a-498e-b213-7336b6ee739a",
          "keyValues": [],
          "concept": {
            "name": "If anya sthal, where did you go?",
            "uuid": "6188571c-711c-4466-be71-18362ce555de",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sex worked samuday",
                "uuid": "0551578b-ab7a-4a5d-accd-007dfabfcb13",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mazdoor sangathan",
                "uuid": "a4913303-9bd7-4958-9c6f-cc90310f2001",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Labour naka",
                "uuid": "5dead826-7dc5-49d2-9d6c-a91c47075742",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Places of worship",
                "uuid": "40801ffb-b69d-42db-a3f0-a6bc285f9ed0",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Primary school",
                "uuid": "25f4ecf4-9d3c-46e7-82b5-86303e980961",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Safai Karmchari collection centre / basti",
                "uuid": "68ac2b3a-9210-4339-8219-f4615ac781c4",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Transgender basti",
                "uuid": "0c11a658-013a-4ef2-80a4-592c48e275bd",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "02000523-c297-47f1-8386-db2b0820f462",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Youth Group",
                "uuid": "f8f446f1-f67b-4f45-b73d-42f8d00820e6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Dhan mandi / krishi dukan",
                "uuid": "18083236-293e-4c07-aad9-a982812ee966",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Places of traditional occupation",
                "uuid": "1ca6fff9-a879-4163-bfdf-1763688f06cc",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Factory area / mine",
                "uuid": "947debbb-46e0-411f-bcfe-4ca5316229bc",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Places of public gathering",
                "uuid": "04b2b83f-dfb5-4753-929e-6c926837e11e",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Slaughter house / meat market",
                "uuid": "1ef74f36-156b-4e24-b84c-c9e17ab963b1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Urs",
                "uuid": "828ff31b-d4b3-49ee-a2f7-a7f88501ecf0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Court / tantr ke bahar",
                "uuid": "d0d14de2-c608-4168-ad0d-03741bd9719d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
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
          "name": "Youth Group - Description of the place",
          "uuid": "0578036e-a419-44c8-9ea1-1c6ccaccd2bf",
          "keyValues": [],
          "concept": {
            "name": "Youth Group - Description of the place",
            "uuid": "7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other Youth Group",
                "uuid": "786eaaee-00e9-415d-a9a4-bf5b173ae22b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "College",
                "uuid": "45944abf-376d-43b0-b647-ae6d744697d4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "High School",
                "uuid": "500badf5-4398-4a85-8ad2-a1245bd4ffc6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Coaching Centre",
                "uuid": "14593bb4-3d4d-4aa8-969a-e24585416bbc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Youth Hostel",
                "uuid": "249fb8c6-6584-4fcd-96cc-ccd571fc8e90",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Higher Secondary School",
                "uuid": "c3d3a0a0-3cfc-41f3-b089-2384e2b16d8e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Youth Group Baithak",
                "uuid": "e2d2b29c-1db1-4616-83d2-31b28b46d1d8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("f8f446f1-f67b-4f45-b73d-42f8d00820e6").matches();
  
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
                          "conceptName": "If anya sthal, where did you go?",
                          "conceptUuid": "6188571c-711c-4466-be71-18362ce555de",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Youth Group"
                          ],
                          "answerConceptUuids": [
                            "f8f446f1-f67b-4f45-b73d-42f8d00820e6"
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
          "name": "Other Youth Group, please specify",
          "uuid": "991a2d87-ad65-4525-9a30-0ca05c50f34c",
          "keyValues": [],
          "concept": {
            "name": "Other Youth Group, please specify",
            "uuid": "57ec0953-2df4-4481-89b2-62723b5fd1c9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf").containsAnswerConceptName("786eaaee-00e9-415d-a9a4-bf5b173ae22b").matches();
  
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
                          "conceptName": "Youth Group - Description of the place",
                          "conceptUuid": "7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Youth Group"
                          ],
                          "answerConceptUuids": [
                            "786eaaee-00e9-415d-a9a4-bf5b173ae22b"
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
          "name": "Places of public gathering - Description of the place",
          "uuid": "9dd30000-e21e-43ae-a4d6-256b5a31dbd5",
          "keyValues": [],
          "concept": {
            "name": "Places of public gathering - Description of the place",
            "uuid": "4c19736c-dd33-4d1f-a2fb-6d60eb767bc3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Market",
                "uuid": "e4e6a2d6-b8ff-4ef2-9261-35230564ec9f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Gas cylinder agency",
                "uuid": "fd677bc7-9b4c-474b-8b4e-c0adc8d85d98",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Railway station",
                "uuid": "335c3eb4-407f-4956-a801-6353735af5ce",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other places of public gathering",
                "uuid": "e4e8140f-ea39-4900-a692-31bbbd059a34",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Sabji mandi",
                "uuid": "33d5302f-7f00-4e63-9bdb-b88733ff44a8",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Bus stand",
                "uuid": "e9959121-96d4-4897-a4bf-6332f2cc13b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Post office",
                "uuid": "19369bf5-bad7-445a-82a8-fe9b4f23c85b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Bank",
                "uuid": "bef6f49c-42d1-451b-b087-9f7de68c8f3d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Mela",
                "uuid": "8472714b-651c-40e6-982f-07241955f0d2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Chowk / Naka / Barrier",
                "uuid": "17e44d1a-4b80-401e-934a-dd9bb0044954",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("04b2b83f-dfb5-4753-929e-6c926837e11e").matches();
  
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
                          "conceptName": "If anya sthal, where did you go?",
                          "conceptUuid": "6188571c-711c-4466-be71-18362ce555de",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Places of public gathering"
                          ],
                          "answerConceptUuids": [
                            "04b2b83f-dfb5-4753-929e-6c926837e11e"
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
          "name": "Other places of public gathering, please specify",
          "uuid": "feb46c81-cc2b-47b8-8dc6-f4d57615fa2e",
          "keyValues": [],
          "concept": {
            "name": "Other places of public gathering, please specify",
            "uuid": "186fbaa3-e415-4a36-b24c-cff342a8bd07",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4c19736c-dd33-4d1f-a2fb-6d60eb767bc3").containsAnswerConceptName("e4e8140f-ea39-4900-a692-31bbbd059a34").matches();
  
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
                          "conceptName": "Places of public gathering - Description of the place",
                          "conceptUuid": "4c19736c-dd33-4d1f-a2fb-6d60eb767bc3",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other places of public gathering"
                          ],
                          "answerConceptUuids": [
                            "e4e8140f-ea39-4900-a692-31bbbd059a34"
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
          "name": "Place of worship - Description of the place",
          "uuid": "335adf9a-c2d9-42fd-9a27-cfa60c45de26",
          "keyValues": [],
          "concept": {
            "name": "Place of worship - Description of the place - Other space",
            "uuid": "d48bdae3-780d-40b4-ae2a-62332a577fc6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Mosque",
                "uuid": "50740018-11e2-4ca5-a9f2-921dccb58651",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other place of worship",
                "uuid": "f4f14bfa-274e-412f-aa41-40d07d52ab31",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Mandir",
                "uuid": "a44b75a8-749a-4d37-abfa-749539759335",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Church",
                "uuid": "c3c592f9-1b43-4d3c-b799-9609f29cd567",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Gurudwara",
                "uuid": "f1856455-b841-4734-b5a8-d636d4336c80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("40801ffb-b69d-42db-a3f0-a6bc285f9ed0").matches();
  
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
                          "conceptName": "If anya sthal, where did you go?",
                          "conceptUuid": "6188571c-711c-4466-be71-18362ce555de",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Places of worship"
                          ],
                          "answerConceptUuids": [
                            "40801ffb-b69d-42db-a3f0-a6bc285f9ed0"
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
          "name": "Other Place of worship, please select",
          "uuid": "740b75fb-1955-4a0b-b2d3-9e39f3072950",
          "keyValues": [],
          "concept": {
            "name": "Other Place of worship, please select - Other space",
            "uuid": "0857cd63-62f1-4c4e-81a7-41810a7270e9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d48bdae3-780d-40b4-ae2a-62332a577fc6").containsAnswerConceptName("f4f14bfa-274e-412f-aa41-40d07d52ab31").matches();
  
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
                          "conceptName": "Place of worship - Description of the place - Other space",
                          "conceptUuid": "d48bdae3-780d-40b4-ae2a-62332a577fc6",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other place of worship"
                          ],
                          "answerConceptUuids": [
                            "f4f14bfa-274e-412f-aa41-40d07d52ab31"
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
          "name": "Places of traditional occupation - Description of the place",
          "uuid": "8c0326b1-f80c-438c-9511-3fab1ba23300",
          "keyValues": [],
          "concept": {
            "name": "Places of traditional occupation - Description of the place",
            "uuid": "0841e771-d471-419d-9b78-19bbb113749b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bamboo workers",
                "uuid": "05c926a1-2de6-4174-81c3-431a68bac6bd",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Bangle workers",
                "uuid": "e813f17f-9a7c-4219-a02d-1954ea3d861b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other places of traditional occupation",
                "uuid": "6b81661c-d0bb-4b86-badb-194eba94cfc0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Barber",
                "uuid": "a4494ee8-c3fe-4435-be99-9ad5b52460b1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mochi",
                "uuid": "3d87d7b9-dd39-49bf-90bc-69626a417f9e",
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
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("1ca6fff9-a879-4163-bfdf-1763688f06cc").matches();
  
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
                          "conceptName": "If anya sthal, where did you go?",
                          "conceptUuid": "6188571c-711c-4466-be71-18362ce555de",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Places of traditional occupation"
                          ],
                          "answerConceptUuids": [
                            "1ca6fff9-a879-4163-bfdf-1763688f06cc"
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
          "name": "Other places of traditional occupation, please specify",
          "uuid": "af748b19-c5da-4ac8-ae88-2f84dd84bcca",
          "keyValues": [],
          "concept": {
            "name": "Other places of traditional occupation, please specify",
            "uuid": "4521f7de-e55e-4578-bec6-4d2141d4f744",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0841e771-d471-419d-9b78-19bbb113749b").containsAnswerConceptName("6b81661c-d0bb-4b86-badb-194eba94cfc0").matches();
  
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
                          "conceptName": "Places of traditional occupation - Description of the place",
                          "conceptUuid": "0841e771-d471-419d-9b78-19bbb113749b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other places of traditional occupation"
                          ],
                          "answerConceptUuids": [
                            "6b81661c-d0bb-4b86-badb-194eba94cfc0"
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
          "name": "What did you do?",
          "uuid": "29e753dc-a7b4-43a4-ac99-49648b1d8383",
          "keyValues": [],
          "concept": {
            "name": "What did you do? - Other space",
            "uuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Case / claim follow-up",
                "uuid": "99318802-0ca0-4ca6-b8bb-3cd3645dcc02",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Preparation for service camp",
                "uuid": "1fd8001d-623b-421c-9f47-736210cbcf55",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Preparation for a legal awareness camp",
                "uuid": "4ec506eb-2bb9-4ca3-977e-83bfc97c7323",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Preparation for campaign",
                "uuid": "662c1e75-f4ae-4d75-8887-3cce5fb01e9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "General Outreach",
                "uuid": "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").defined.and.when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").containsAnswerConceptName("f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").defined.and.when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").containsAnyAnswerConceptName("f7461b92-ca73-4841-86e3-a14cc6002067","621ce892-2b8a-4820-935e-f5d034e037a4").matches();
  
  if(condition11 ) {
    _.forEach(["f7461b92-ca73-4841-86e3-a14cc6002067","621ce892-2b8a-4820-935e-f5d034e037a4"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"], (answer) => {
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
                      "Legal awareness camp",
                      "Service camp"
                    ],
                    "answerUuidsToSkip": [
                      "f7461b92-ca73-4841-86e3-a14cc6002067",
                      "621ce892-2b8a-4820-935e-f5d034e037a4"
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
                          "scope": "encounter",
                          "conceptName": "What did you do? - Other space",
                          "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "What did you do? - Other space",
                          "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "General Outreach"
                          ],
                          "answerConceptUuids": [
                            "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "General Outreach"
                    ],
                    "answerUuidsToSkip": [
                      "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
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
                          "scope": "encounter",
                          "conceptName": "What did you do? - Other space",
                          "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "What did you do? - Other space",
                          "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Legal awareness camp",
                            "Service camp"
                          ],
                          "answerConceptUuids": [
                            "f7461b92-ca73-4841-86e3-a14cc6002067",
                            "621ce892-2b8a-4820-935e-f5d034e037a4"
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
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("326f1f66-0707-4eb3-b708-a89b8ffbab4a").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Where did the Outreach Activity happen - village or other space?",
                      "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Other Space"
                      ],
                      "answerConceptUuids": [
                        "326f1f66-0707-4eb3-b708-a89b8ffbab4a"
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
      "display": "Other Space Details",
      "timed": false
    },
    {
      "uuid": "dbd52174-8ed4-475f-a990-fbfdde93f329",
      "name": "Legal Awareness Camp",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Which Legal Awareness theme?",
          "uuid": "aabcea0a-4e68-4b36-a461-7c3e51b14150",
          "keyValues": [],
          "concept": {
            "name": "Which Legal Awareness theme?",
            "uuid": "dcc87b4e-df38-4696-90a0-f6e444e08645",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Dalit Adivasi atyachar ke khilaaf adhikaar",
                "uuid": "a893e76f-b188-4da3-aec6-0f9b1e1d4665",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Rights of labourers",
                "uuid": "c6bdc92d-ab29-4489-9efe-32770f596657",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "RTI / PSGA / Identity docs / social sec scheme",
                "uuid": "c8dc1f40-728b-4aad-b280-8431534e7bd6",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Any other Legal awareness camp theme?",
                "uuid": "4b8ab91b-6802-40c3-a646-6b1c0cb48aba",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Rights of fisherfolk",
                "uuid": "024dbef2-d9ff-4875-a3d4-e4013812e7fe",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Social boycott",
                "uuid": "321c3f07-bc25-4d2a-8483-54a65530ad86",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 9,
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
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Any other Legal awareness camp theme, please specify",
                "uuid": "62601b35-25e3-4a54-b629-31f77cf94ebb",
                "dataType": "Text",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Any other Legal awareness camp theme",
                "uuid": "3aca1c0b-d24b-4aef-9b54-6972a79dbf45",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Legal awareness camp theme? Please specify",
          "uuid": "52edf1e0-2624-4fba-bb24-24dd66a7b25c",
          "keyValues": [],
          "concept": {
            "name": "Any other Legal awareness camp theme? Please specify",
            "uuid": "dcb0f70a-11f1-4314-8bf2-cd1f1d05ae32",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("dcc87b4e-df38-4696-90a0-f6e444e08645").containsAnswerConceptName("3aca1c0b-d24b-4aef-9b54-6972a79dbf45").matches();
  
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
                          "conceptName": "Which Legal Awareness theme?",
                          "conceptUuid": "dcc87b4e-df38-4696-90a0-f6e444e08645",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Legal awareness camp theme"
                          ],
                          "answerConceptUuids": [
                            "3aca1c0b-d24b-4aef-9b54-6972a79dbf45"
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
          "name": "Which Legal Awareness Methodology?",
          "uuid": "8d0a7b96-137b-4537-9dc4-b932379c1ac3",
          "keyValues": [],
          "concept": {
            "name": "Which Legal Awareness Methodology?",
            "uuid": "3bc1b00d-fd1c-446e-9d2b-3a0f685c7681",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Audio video material",
                "uuid": "bcd7d658-98be-4992-b0f0-be3c0f5823cc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Diwar lekhan",
                "uuid": "b83db52d-a3a2-4b46-9d79-d6452bc4e8e4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Any other Legal awareness methodology",
                "uuid": "be83fa4a-a739-43cc-b135-e18dd27ddc27",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Patrika vitaran",
                "uuid": "59695520-06dc-4074-8981-7371b8d418b8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Folk art",
                "uuid": "1a23516a-1bf4-416d-9ab6-b4af9ee44f4a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Nukkad natak",
                "uuid": "6423ba7a-69a9-4c22-abdf-509e0bc133e0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Poster",
                "uuid": "611837d0-1845-4fdf-9df0-66b6f8182b35",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Legal awareness methodology? Please specify",
          "uuid": "ff33abe2-8d5d-417d-9f1c-48e96940e9bc",
          "keyValues": [],
          "concept": {
            "name": "Any other Legal awareness methodology? Please specify",
            "uuid": "66f1b8df-4261-4fc5-a9b8-b8a53562be5d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("3bc1b00d-fd1c-446e-9d2b-3a0f685c7681").containsAnswerConceptName("be83fa4a-a739-43cc-b135-e18dd27ddc27").matches();
  
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
                          "conceptName": "Which Legal Awareness Methodology?",
                          "conceptUuid": "3bc1b00d-fd1c-446e-9d2b-3a0f685c7681",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Legal awareness methodology"
                          ],
                          "answerConceptUuids": [
                            "be83fa4a-a739-43cc-b135-e18dd27ddc27"
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
          "name": "3 log jin se milein - Unka Naam, Gender and Phone Number",
          "uuid": "f4c021b9-5385-4d10-bfd5-83ba89fdd094",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "3 log jin se milein - Unka Naam, Gender and Phone Number - Other Space",
            "uuid": "244c6850-0326-4dda-9e73-a7726805c1d0",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const questionGroup = encounter.getObservationValue("244c6850-0326-4dda-9e73-a7726805c1d0");
  
  let questionGroupLength = 0
  
  if(questionGroup) questionGroupLength = questionGroup.length
  
  if(questionGroupLength > 3){
    validationErrors.push("Repeat the question group only for 3 times."); 
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Andazi kitne logon tak pahunche",
          "uuid": "ee38091e-cc6c-45ee-aa07-1489eb71b15c",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunche - Other space - Legal awareness camp",
            "uuid": "f8755a96-b07b-48de-94b6-ceeea258c562",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f8755a96-b07b-48de-94b6-ceeea258c562").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("f8755a96-b07b-48de-94b6-ceeea258c562");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Naam",
          "uuid": "1347b685-aa04-486e-9d8d-25bbf6602dee",
          "keyValues": [],
          "concept": {
            "name": "Naam",
            "uuid": "6b8ca000-07f4-4dc0-aca9-d83edd1d828d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "f4c021b9-5385-4d10-bfd5-83ba89fdd094",
          "mandatory": true
        },
        {
          "name": "Gender",
          "uuid": "78aacf9c-56df-4434-83b1-2ee35c0a4ecd",
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
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "f4c021b9-5385-4d10-bfd5-83ba89fdd094",
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "6b2cbf07-1d30-40d9-a6f8-a3a524ba8a8f",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "f4c021b9-5385-4d10-bfd5-83ba89fdd094",
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").containsAnswerConceptName("f7461b92-ca73-4841-86e3-a14cc6002067").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do? - Other space",
                      "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Legal awareness camp"
                      ],
                      "answerConceptUuids": [
                        "f7461b92-ca73-4841-86e3-a14cc6002067"
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
      "display": "Legal Awareness Camp",
      "timed": false
    },
    {
      "uuid": "25e21050-570e-45e4-a795-49cad23e33a7",
      "name": "General Outreach",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Which General Outreach theme?",
          "uuid": "8a8460cc-23e9-4b73-91b2-29e779e1cae0",
          "keyValues": [],
          "concept": {
            "name": "Which General Outreach theme?",
            "uuid": "0ab7feb9-61d1-48fa-9e6d-1651e8b025e1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "RTI / PSGA / Identity docs / social sec scheme",
                "uuid": "c8dc1f40-728b-4aad-b280-8431534e7bd6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Social boycott",
                "uuid": "321c3f07-bc25-4d2a-8483-54a65530ad86",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Dalit Adivasi atyachar ke khilaaf adhikaar",
                "uuid": "a893e76f-b188-4da3-aec6-0f9b1e1d4665",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
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
                "order": 8,
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
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Rights of labourers",
                "uuid": "c6bdc92d-ab29-4489-9efe-32770f596657",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Any other General Outreach theme",
                "uuid": "16a13753-65ca-43e4-bfed-bb7af545d398",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Rights of fisherfolk",
                "uuid": "024dbef2-d9ff-4875-a3d4-e4013812e7fe",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other General Outreach  theme, please specify",
          "uuid": "6570772e-1507-4fde-92a9-750e51452749",
          "keyValues": [],
          "concept": {
            "name": "Any other General Outreach  theme, please specify",
            "uuid": "41fb6a3d-ba45-4cf3-af1d-0e060eb547d8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("0ab7feb9-61d1-48fa-9e6d-1651e8b025e1").containsAnswerConceptName("16a13753-65ca-43e4-bfed-bb7af545d398").matches();
  
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
                          "conceptName": "Which General Outreach theme?",
                          "conceptUuid": "0ab7feb9-61d1-48fa-9e6d-1651e8b025e1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other General Outreach theme"
                          ],
                          "answerConceptUuids": [
                            "16a13753-65ca-43e4-bfed-bb7af545d398"
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
          "name": "Which General Outreach Methodology?",
          "uuid": "4bb838c6-f8fc-4511-ba35-7eb6d3a1a6fb",
          "keyValues": [],
          "concept": {
            "name": "Which General Outreach Methodology?",
            "uuid": "738bbeec-d238-46bc-9c5a-620dc0ec9b14",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Patrika vitaran",
                "uuid": "59695520-06dc-4074-8981-7371b8d418b8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Folk art",
                "uuid": "1a23516a-1bf4-416d-9ab6-b4af9ee44f4a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Any other General Outreach Methodology",
                "uuid": "1f9b1581-edb6-4005-a6b8-4f8848308a3e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Diwar lekhan",
                "uuid": "b83db52d-a3a2-4b46-9d79-d6452bc4e8e4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Audio video material",
                "uuid": "bcd7d658-98be-4992-b0f0-be3c0f5823cc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Nukkad natak",
                "uuid": "6423ba7a-69a9-4c22-abdf-509e0bc133e0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Poster",
                "uuid": "611837d0-1845-4fdf-9df0-66b6f8182b35",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other General Outreach Methodology?, please specify",
          "uuid": "5d7c5978-e7c4-498b-a0a5-6d5b2520e590",
          "keyValues": [],
          "concept": {
            "name": "Any other General Outreach  Methodology, please specify",
            "uuid": "3c1d9955-a98b-4660-b3a3-b4a25fb0ec4a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("738bbeec-d238-46bc-9c5a-620dc0ec9b14").containsAnswerConceptName("1f9b1581-edb6-4005-a6b8-4f8848308a3e").matches();
  
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
                          "conceptName": "Which General Outreach Methodology?",
                          "conceptUuid": "738bbeec-d238-46bc-9c5a-620dc0ec9b14",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other General Outreach Methodology"
                          ],
                          "answerConceptUuids": [
                            "1f9b1581-edb6-4005-a6b8-4f8848308a3e"
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
          "name": "Andazi kitne logon tak pahunch",
          "uuid": "9d05731a-99b1-4e28-9f49-d4280a5fc962",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunch - Other space - General outreach",
            "uuid": "038882ad-8fe1-467d-a409-e8c6eea6c060",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("038882ad-8fe1-467d-a409-e8c6eea6c060").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("038882ad-8fe1-467d-a409-e8c6eea6c060");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").containsAnswerConceptName("f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do? - Other space",
                      "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "General Outreach"
                      ],
                      "answerConceptUuids": [
                        "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5"
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
      "display": "General Outreach",
      "timed": false
    },
    {
      "uuid": "ef55e0b8-d2bf-4ce5-95c5-be4abdbd9f99",
      "name": "Service Camp",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Which Service Camp theme?",
          "uuid": "c71934b2-52fa-4105-93b4-032eaba186aa",
          "keyValues": [],
          "concept": {
            "name": "Which Service Camp theme?",
            "uuid": "b3f234fd-82a1-41f5-b559-7e370cffd42a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Any other Service Camp theme",
                "uuid": "25211d1e-81c8-4115-9e54-adb9425bc026",
                "dataType": "NA",
                "answers": [],
                "order": 12,
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
                "name": "Scholarship",
                "uuid": "6ef080e4-0739-42bf-9e3d-ff3f4a0d866e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Land documents updation (varsai, namantaran, simankan, batwara, digitisation)",
                "uuid": "a3730afc-936d-4fef-9f98-b15fd2405700",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
                "name": "NREGA",
                "uuid": "862c8d91-defc-4f3b-90b1-7196adc3b4dd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Pensions",
                "uuid": "1220ecd8-72b9-4292-93f3-36d380166e33",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Moolbhoot Suvidha (nal jal yojana, road, Anganwadi etc.)",
                "uuid": "0695e6ff-46c0-4893-917f-9edc834fc175",
                "dataType": "NA",
                "answers": [],
                "order": 8,
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
                "name": "Labour Registration",
                "uuid": "3b8daaca-20cb-46fe-98f9-40be8cc761a3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kisan sambandhit yojana",
                "uuid": "1bc73828-64cc-4e23-92ce-2fd1e6164fcd",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Identity documents",
                "uuid": "0b040c2a-2f72-432a-be2e-eb94e4eef4e4",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Ration",
                "uuid": "e8394521-e9ea-41b7-b526-8f67993e1414",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Any other Service Camp theme, please specify?",
          "uuid": "6e874adb-3aa9-4346-a9f8-f6fa82fa9ec0",
          "keyValues": [],
          "concept": {
            "name": "Any other Service Camp theme?, please specify",
            "uuid": "6645a1b6-45fa-4c36-88e4-5321c5f4289b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("b3f234fd-82a1-41f5-b559-7e370cffd42a").containsAnswerConceptName("25211d1e-81c8-4115-9e54-adb9425bc026").matches();
  
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
                          "conceptName": "Which Service Camp theme?",
                          "conceptUuid": "b3f234fd-82a1-41f5-b559-7e370cffd42a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other Service Camp theme"
                          ],
                          "answerConceptUuids": [
                            "25211d1e-81c8-4115-9e54-adb9425bc026"
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
          "name": "Number of Total cases / claims Identified",
          "uuid": "ec9be237-d380-4d63-80ca-b70c2f5f2fb9",
          "keyValues": [],
          "concept": {
            "name": "Number of Total cases / claims Identified - Other space - Service camp",
            "uuid": "eca49199-817c-4bf5-84d8-264b35061ee4",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("eca49199-817c-4bf5-84d8-264b35061ee4").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("eca49199-817c-4bf5-84d8-264b35061ee4");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Andazi kitne logon tak pahunche",
          "uuid": "1bff23b4-e036-4091-ad86-542f99795e7e",
          "keyValues": [],
          "concept": {
            "name": "Andazi kitne logon tak pahunche - Other space - Service camp",
            "uuid": "5c1db850-b7c7-4a52-bd29-26692cee9b77",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    
    const isNumberDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5c1db850-b7c7-4a52-bd29-26692cee9b77").defined.matches();
    
    if(isNumberDefined){
        const num = encounter.getObservationValue("5c1db850-b7c7-4a52-bd29-26692cee9b77");

        if (!Number.isInteger(num)) {
            validationErrors.push("Please provide a valid whole number.")
        }
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0").containsAnswerConceptName("621ce892-2b8a-4820-935e-f5d034e037a4").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "What did you do? - Other space",
                      "conceptUuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Service camp"
                      ],
                      "answerConceptUuids": [
                        "621ce892-2b8a-4820-935e-f5d034e037a4"
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
      "display": "Service Camp",
      "timed": false
    },
    {
      "uuid": "9cf7bee5-0410-4aa8-9e85-ea581cbacf37",
      "name": "Concluding Questions",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Collaborating organisation",
          "uuid": "5d426838-d56d-46dd-bf96-3e7374f10507",
          "keyValues": [],
          "concept": {
            "name": "Collaborating organisation",
            "uuid": "729285fd-75c7-43e4-9b24-f7fcd60dcd17",
            "dataType": "Coded",
            "answers": [
              {
                "name": "None",
                "uuid": "12efa85a-75bc-4c7f-90ee-73d711647650",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "GO",
                "uuid": "9b9265c1-cdf4-4300-96f2-32bfa918ef8a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Collaborating organisation",
                "uuid": "02716568-8b45-4572-bac2-558454320951",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NGO",
                "uuid": "bd0d1f8d-9bc3-434d-88d5-b77511b03c59",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other Collaborating organisation, please specify",
          "uuid": "eb7cc328-673f-4b95-9b01-9c1d548001b9",
          "keyValues": [],
          "concept": {
            "name": "Other Collaborating organisation, please specify",
            "uuid": "1a112ce7-9076-447c-9209-ddb87009dbb9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("729285fd-75c7-43e4-9b24-f7fcd60dcd17").containsAnswerConceptName("02716568-8b45-4572-bac2-558454320951").matches();
  
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
                          "conceptName": "Collaborating organisation",
                          "conceptUuid": "729285fd-75c7-43e4-9b24-f7fcd60dcd17",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Collaborating organisation"
                          ],
                          "answerConceptUuids": [
                            "02716568-8b45-4572-bac2-558454320951"
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
          "name": "Yadi kisi vishesh vyakti se mile, to kaun?",
          "uuid": "fa4a0665-cd8c-420e-ad7e-3ee2cb80e828",
          "keyValues": [],
          "concept": {
            "name": "Yadi kisi vishesh vyakti se mile, to kaun?",
            "uuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "School teacher / principal / hostel warden / coaching centre teacher",
                "uuid": "1f3672eb-4242-411c-baec-7bcb6594b0ad",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Sakriy mahila",
                "uuid": "dcdc9821-e96e-47a1-ad78-e82a93e6725f",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Any other vishesh vyakti se mile",
                "uuid": "7136d232-3e13-4788-b8b8-1a78c375c353",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "FRA / PESA",
                "uuid": "e4a827b8-be5b-4f01-9bdb-ef570e89dc01",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Kotwar",
                "uuid": "d675b357-45c4-4abc-b7f1-8097c27b1491",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Patwari",
                "uuid": "f8e0fabc-eccd-4dbd-be00-f5b0d0de3a6d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Anganwadi karyakarta",
                "uuid": "8190c2dc-a820-4366-97e7-4b42a82a9070",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Doctor / nurse",
                "uuid": "6f3c9f78-51cb-401f-b99b-e08c41f60a11",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Yuva samooh adhyaksh",
                "uuid": "493aacd8-a1b2-4fbd-a223-02ea0e66c8f9",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "None",
                "uuid": "12efa85a-75bc-4c7f-90ee-73d711647650",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "unique": true,
                "active": true
              },
              {
                "name": "Sarpanch / Pradan / Nagar Parishad",
                "uuid": "46e781a1-9c7b-4fe5-9692-3f7a1b23d3c0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Community / religious leader",
                "uuid": "ec96f8f9-6939-417b-8276-6a0096918404",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Panch",
                "uuid": "c88d6c6f-7901-4360-9490-69b8ce00df65",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sacheev",
                "uuid": "17673e41-2ee5-448f-9544-d4003eb82810",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mitanin/asha worker",
                "uuid": "07244f01-1390-4ff0-be4a-be4afc87c79d",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Anganwadi sahayka",
                "uuid": "62e4a389-86c5-4082-b44c-d711436e377d",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Samajik mukhya",
                "uuid": "de4a626b-0530-43e7-9cce-e55ff0c7cdd1",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Mahila samooh adhyaksh / sacheev",
                "uuid": "0e2c2c19-fdca-4d73-9ce9-3a61f5fb1448",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Any panchayat samiti sadasy",
                "uuid": "8925545b-99ab-4ade-8be1-dbee789eefde",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Social worker / NGO Sangathan representative",
                "uuid": "f02a2bc8-503e-4da4-99d6-be0f1974b3e4",
                "dataType": "NA",
                "answers": [],
                "order": 16,
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
          "name": "Any other vishesh vyakti se mile, please specify",
          "uuid": "f3db2642-11de-4fc7-b3c5-cab48e47f219",
          "keyValues": [],
          "concept": {
            "name": "Any other vishesh vyakti se mile, please specify",
            "uuid": "86d044ea-4378-43e3-bfb2-f7c3cdcb3029",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("a9cbf6a8-70a4-4c51-9193-c26ca4856f6d").containsAnswerConceptName("7136d232-3e13-4788-b8b8-1a78c375c353").matches();
  
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
                          "conceptName": "Yadi kisi vishesh vyakti se mile, to kaun?",
                          "conceptUuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other vishesh vyakti se mile"
                          ],
                          "answerConceptUuids": [
                            "7136d232-3e13-4788-b8b8-1a78c375c353"
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
          "name": "Name",
          "uuid": "46d3cfa2-500f-491e-b303-8a46c7f02691",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("a9cbf6a8-70a4-4c51-9193-c26ca4856f6d").defined.and.when.valueInEncounter("a9cbf6a8-70a4-4c51-9193-c26ca4856f6d").containsAnswerConceptNameOtherThan("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "conceptName": "Yadi kisi vishesh vyakti se mile, to kaun?",
                          "conceptUuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Yadi kisi vishesh vyakti se mile, to kaun?",
                          "conceptUuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "None"
                          ],
                          "answerConceptUuids": [
                            "12efa85a-75bc-4c7f-90ee-73d711647650"
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
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "dda54573-4ed3-4e9c-88a3-26eb78d310b9",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("a9cbf6a8-70a4-4c51-9193-c26ca4856f6d").defined.and.when.valueInEncounter("a9cbf6a8-70a4-4c51-9193-c26ca4856f6d").containsAnswerConceptNameOtherThan("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "conceptName": "Yadi kisi vishesh vyakti se mile, to kaun?",
                          "conceptUuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Yadi kisi vishesh vyakti se mile, to kaun?",
                          "conceptUuid": "a9cbf6a8-70a4-4c51-9193-c26ca4856f6d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "None"
                          ],
                          "answerConceptUuids": [
                            "12efa85a-75bc-4c7f-90ee-73d711647650"
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
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "mandatory": true
        },
        {
          "name": "Who accompanied",
          "uuid": "56cd2bc3-27dd-48fc-95e6-7e4718a243d0",
          "keyValues": [],
          "concept": {
            "name": "Who accompanied",
            "uuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Law student",
                "uuid": "602bd8ca-f908-442e-bfdd-1f048211cce0",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other NGO representative",
                "uuid": "b41e3a54-6c83-4e63-8b2c-05330c56d6ed",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "GO representative",
                "uuid": "e2413111-c735-4432-a2ac-7e7ae5b31c4c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Existing Volunteer",
                "uuid": "1648f8ad-0136-455f-9fba-2644e12baa61",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Lawyer",
                "uuid": "13216cb3-ee78-40aa-9c3a-f8ce1f736949",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "New Volunteer",
                "uuid": "a19c0ea1-a096-4953-ab8f-d765845776ed",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "None",
                "uuid": "12efa85a-75bc-4c7f-90ee-73d711647650",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Existing Volunteer - List",
          "uuid": "fc5e6f8d-550c-45ff-8944-08e56e029fc8",
          "keyValues": [],
          "concept": {
            "name": "Existing Volunteer - List",
            "uuid": "86fe8939-2497-4492-975b-e17514e72052",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "b3b98338-35af-4f29-a74d-3c8999d92165"
              }
            ]
          },
          "displayOrder": 8,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("1648f8ad-0136-455f-9fba-2644e12baa61").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Existing Volunteer"
                          ],
                          "answerConceptUuids": [
                            "1648f8ad-0136-455f-9fba-2644e12baa61"
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
          "name": "New Volunteer",
          "uuid": "7e2d58ab-d71e-466f-a575-19218846f1b7",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "New Volunteer list",
            "uuid": "80fef221-5162-4da8-adfd-e4e4da5019ec",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("a19c0ea1-a096-4953-ab8f-d765845776ed").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "New Volunteer"
                          ],
                          "answerConceptUuids": [
                            "a19c0ea1-a096-4953-ab8f-d765845776ed"
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
          "name": "Law student",
          "uuid": "ea2c0b89-022e-4804-a030-6a7ae8e9488f",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Law student list",
            "uuid": "0311db77-c44f-4c23-a2ff-2eea4fb7dd17",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("602bd8ca-f908-442e-bfdd-1f048211cce0").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Law student"
                          ],
                          "answerConceptUuids": [
                            "602bd8ca-f908-442e-bfdd-1f048211cce0"
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
          "name": "Lawyer",
          "uuid": "dec92340-0561-4ead-9832-6ea34da208a3",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Lawyer list",
            "uuid": "c617145b-5f4c-4b1e-9598-da7b5998ce60",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("13216cb3-ee78-40aa-9c3a-f8ce1f736949").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Lawyer"
                          ],
                          "answerConceptUuids": [
                            "13216cb3-ee78-40aa-9c3a-f8ce1f736949"
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
          "name": "Other NGO representative",
          "uuid": "cfa0e34c-3cbc-42fe-a70b-555fa480b154",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Other NGO representative list",
            "uuid": "e621aa20-2f7e-4420-b391-2eb7f156b264",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("b41e3a54-6c83-4e63-8b2c-05330c56d6ed").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other NGO representative"
                          ],
                          "answerConceptUuids": [
                            "b41e3a54-6c83-4e63-8b2c-05330c56d6ed"
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
          "name": "GO representative",
          "uuid": "85dc472f-c126-496c-a8e3-984fa958ac73",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "GO representative list",
            "uuid": "4414ba1a-b025-4fe3-b526-11983cc47938",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("e2413111-c735-4432-a2ac-7e7ae5b31c4c").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "GO representative"
                          ],
                          "answerConceptUuids": [
                            "e2413111-c735-4432-a2ac-7e7ae5b31c4c"
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
          "name": "Other",
          "uuid": "75de6360-14bf-412f-a367-197d6c30c9b2",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Other accompanied list",
            "uuid": "3ddee745-e4ac-4920-b51f-a9a56c47b58a",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8"
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
          "name": "Name",
          "uuid": "9fac5f6f-129d-4354-a203-d9f79c59ca42",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "parentFormElementUuid": "75de6360-14bf-412f-a367-197d6c30c9b2",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "f0942b40-0c86-4db8-891a-14a1875c5250",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "parentFormElementUuid": "75de6360-14bf-412f-a367-197d6c30c9b2",
          "mandatory": false
        },
        {
          "name": "Phone number",
          "uuid": "79ff738b-3b45-4a8e-8e71-9f4169ac81b0",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "75de6360-14bf-412f-a367-197d6c30c9b2",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "9e1b5f86-0887-4ff9-8e65-9002e17c20f6",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "parentFormElementUuid": "85dc472f-c126-496c-a8e3-984fa958ac73",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "b43a33b8-60c6-47e2-b8c5-f7e60ad15274",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "parentFormElementUuid": "85dc472f-c126-496c-a8e3-984fa958ac73",
          "mandatory": false
        },
        {
          "name": "Phone number",
          "uuid": "c310dd86-cb51-47cb-b0da-50d3c8aeeae2",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "85dc472f-c126-496c-a8e3-984fa958ac73",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "31b19f9c-1f5b-408f-856d-8d79940c01cb",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "parentFormElementUuid": "cfa0e34c-3cbc-42fe-a70b-555fa480b154",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "2b1c5351-f3f3-45e5-a99d-4a2fbf5d2094",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "parentFormElementUuid": "cfa0e34c-3cbc-42fe-a70b-555fa480b154",
          "mandatory": false
        },
        {
          "name": "Phone No.",
          "uuid": "b330bc83-3241-4ebb-86ad-f888ad6483e2",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "cfa0e34c-3cbc-42fe-a70b-555fa480b154",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "9824c2ea-1577-49a6-8b41-2bacc2eeb70d",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "parentFormElementUuid": "dec92340-0561-4ead-9832-6ea34da208a3",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "6b7e9361-9963-42ed-b373-371dc3e8af38",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "parentFormElementUuid": "dec92340-0561-4ead-9832-6ea34da208a3",
          "mandatory": false
        },
        {
          "name": "Phone No.",
          "uuid": "00cc58d7-28ed-43d7-90fb-dc2bb8df29a4",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 26,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "dec92340-0561-4ead-9832-6ea34da208a3",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "6a2e24e0-5cee-42de-886a-964088b12e99",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "parentFormElementUuid": "ea2c0b89-022e-4804-a030-6a7ae8e9488f",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "67fed379-f774-483f-aaaa-7c23987a0498",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 28,
          "type": "SingleSelect",
          "parentFormElementUuid": "ea2c0b89-022e-4804-a030-6a7ae8e9488f",
          "mandatory": false
        },
        {
          "name": "Phone No.",
          "uuid": "44cf8482-424d-470f-82cc-4f6597f07327",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 29,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "ea2c0b89-022e-4804-a030-6a7ae8e9488f",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "51ad926b-e74d-4081-baeb-bbd4d7f4cd82",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 30,
          "type": "SingleSelect",
          "parentFormElementUuid": "7e2d58ab-d71e-466f-a575-19218846f1b7",
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "9ac51d75-ed47-4f7b-ac26-bb4df7e8dc8d",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 31,
          "type": "SingleSelect",
          "parentFormElementUuid": "7e2d58ab-d71e-466f-a575-19218846f1b7",
          "mandatory": false
        },
        {
          "name": "Phone No.",
          "uuid": "e5d2f9e5-38b2-4812-89ac-6deb9619b1bb",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 32,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "7e2d58ab-d71e-466f-a575-19218846f1b7",
          "mandatory": false
        },
        {
          "name": "Name",
          "uuid": "3335f5e4-08db-4334-8604-0335dd503fb9",
          "keyValues": [],
          "concept": {
            "name": "Name 2",
            "uuid": "87b54ff9-d27b-43b5-85e9-e1960a667378",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 33,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "f7036d90-81c1-445a-9519-01df3ee4a349",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 34,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Phone No",
          "uuid": "fb0e2cd2-e59d-46e1-9854-cfa2806d1e47",
          "keyValues": [],
          "concept": {
            "name": "Phone No.",
            "uuid": "bd448747-ab84-49e4-9b0a-25344f28d87a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 35,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Existing Volunteer - List",
          "uuid": "f0b2bf09-b979-441e-ba06-57f7c1db3ed3",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "removed Existing Volunteer - List",
            "uuid": "a6993714-12af-4e27-a755-f3caa991045e",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 36,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c118aa80-66ad-4996-8847-bb9f02a89287").containsAnswerConceptName("1648f8ad-0136-455f-9fba-2644e12baa61").matches();
  
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
                          "conceptName": "Who accompanied",
                          "conceptUuid": "c118aa80-66ad-4996-8847-bb9f02a89287",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Existing Volunteer"
                          ],
                          "answerConceptUuids": [
                            "1648f8ad-0136-455f-9fba-2644e12baa61"
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
          "name": "Next steps decided",
          "uuid": "2b4af604-3c5b-4853-9760-e9f10fcaf69f",
          "keyValues": [],
          "concept": {
            "name": "Next steps decided",
            "uuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Campaign Subject",
                "uuid": "87b53f71-b277-43d6-b891-59a58dfb3fb7",
                "dataType": "Subject",
                "answers": [],
                "order": 2,
                "active": true,
                "keyValues": [
                  {
                    "key": "subjectTypeUUID",
                    "value": "0ab6edd4-2a80-4ce9-9bfa-0464cb4ae6b0"
                  }
                ]
              },
              {
                "name": "Other",
                "uuid": "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
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
                "order": 3,
                "active": true
              },
              {
                "name": "None",
                "uuid": "12efa85a-75bc-4c7f-90ee-73d711647650",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 37,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other, please specify",
          "uuid": "d5e87b93-57af-4064-bfdb-223de7180e2a",
          "keyValues": [],
          "concept": {
            "name": "Other next step, please specify",
            "uuid": "9eab0ad2-9c12-4705-bb20-0d7b0096e7e6",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 38,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ba9d9580-57b0-40d2-9646-aa3663f27d80").containsAnswerConceptName("708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8").matches();
  
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
                          "conceptName": "Next steps decided",
                          "conceptUuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8"
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
          "name": "Name",
          "uuid": "96b6fc15-3a85-4ec7-ab88-4f04ca7c4386",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 39,
          "type": "SingleSelect",
          "parentFormElementUuid": "f0b2bf09-b979-441e-ba06-57f7c1db3ed3",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Position",
          "uuid": "2c4a86ae-8fbc-4951-b073-4531ad93b88d",
          "keyValues": [],
          "concept": {
            "name": "Position",
            "uuid": "e0c2a651-f292-40cf-8962-ff87fcc8a74e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 40,
          "type": "SingleSelect",
          "parentFormElementUuid": "f0b2bf09-b979-441e-ba06-57f7c1db3ed3",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Phone no.",
          "uuid": "0090fdf1-98ed-4464-a33e-20a225c74fab",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 41,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "Phone number can only be of 10 digits and can only start with 6, 7, 8 or 9"
          },
          "parentFormElementUuid": "f0b2bf09-b979-441e-ba06-57f7c1db3ed3",
          "voided": true,
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f619854c-9ed3-44ec-944e-ad9e51a768e0").defined.matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Where did the Outreach Activity happen - village or other space?",
                      "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                      "conceptDataType": "Coded"
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
      "display": "Concluding Questions",
      "timed": false
    },
    {
      "uuid": "2c9d9c92-feb3-4db9-88ef-33784d13ec73",
      "name": "Campaign",
      "displayOrder": 12,
      "formElements": [
        {
          "name": "Next steps decided",
          "uuid": "5f130019-0468-4de2-9906-7c3ef82bdfb7",
          "keyValues": [],
          "concept": {
            "name": "Next steps decided",
            "uuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Campaign Subject",
                "uuid": "87b53f71-b277-43d6-b891-59a58dfb3fb7",
                "dataType": "Subject",
                "answers": [],
                "order": 2,
                "active": true,
                "keyValues": [
                  {
                    "key": "subjectTypeUUID",
                    "value": "0ab6edd4-2a80-4ce9-9bfa-0464cb4ae6b0"
                  }
                ]
              },
              {
                "name": "Other",
                "uuid": "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
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
                "order": 3,
                "active": true
              },
              {
                "name": "None",
                "uuid": "12efa85a-75bc-4c7f-90ee-73d711647650",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date",
          "uuid": "b8b1222a-14cd-4ecc-9ad5-54005a3c3d1f",
          "keyValues": [],
          "concept": {
            "name": "Campaign date",
            "uuid": "0840633b-03e3-48ba-99f0-6f2c1704b963",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ba9d9580-57b0-40d2-9646-aa3663f27d80").containsAnswerConceptName("23d69c93-6a03-45f4-9ecf-35a5b0052049").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Next steps decided",
                      "conceptUuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Campaign"
                      ],
                      "answerConceptUuids": [
                        "23d69c93-6a03-45f4-9ecf-35a5b0052049"
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
      "display": "Campaign",
      "timed": false
    },
    {
      "uuid": "e725d84e-7820-45c2-96cd-36dc9466d14d",
      "name": "Legal Awareness Camp",
      "displayOrder": 13,
      "formElements": [
        {
          "name": "Date",
          "uuid": "d7ed4198-7a0b-4e65-8b32-7befd01dd10f",
          "keyValues": [],
          "concept": {
            "name": "Legal Awareness Camp Date",
            "uuid": "c260c603-1410-4332-97be-706aeab71d7f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Place",
          "uuid": "b84a4054-d3cb-4cf2-ab44-3ed0fe3393f5",
          "keyValues": [],
          "concept": {
            "name": "Legal Awareness Camp Place",
            "uuid": "d7bacca6-a1bf-444a-a212-2f975b22c251",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Theme",
          "uuid": "8a333fdd-c9c9-43ac-8f7a-723c0e4cede9",
          "keyValues": [],
          "concept": {
            "name": "Legal Awareness Camp Theme",
            "uuid": "bd665b51-7ab3-473a-98e4-d80d00d7b463",
            "dataType": "Coded",
            "answers": [
              {
                "name": "RTI / PSGA / Identity docs / social sec scheme",
                "uuid": "c8dc1f40-728b-4aad-b280-8431534e7bd6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Rights of fisherfolk",
                "uuid": "024dbef2-d9ff-4875-a3d4-e4013812e7fe",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Social boycott",
                "uuid": "321c3f07-bc25-4d2a-8483-54a65530ad86",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Rights of labourers",
                "uuid": "c6bdc92d-ab29-4489-9efe-32770f596657",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Any others, Legal awareness camp",
                "uuid": "3b35d48f-5b31-44e7-bdf4-4b680c45eadf",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dalit Adivasi atyachar ke khilaaf adhikaar",
                "uuid": "a893e76f-b188-4da3-aec6-0f9b1e1d4665",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 6,
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
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": false
        },
        {
          "name": "Any others, Legal awareness camp, please specify",
          "uuid": "88dc6da8-99ff-4652-be79-4e21b220a7b8",
          "keyValues": [],
          "concept": {
            "name": "Any others, Legal awareness camp, please specify",
            "uuid": "5de8a83f-1984-4d1a-a688-9a69b5ed7c2b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("bd665b51-7ab3-473a-98e4-d80d00d7b463").containsAnswerConceptName("3b35d48f-5b31-44e7-bdf4-4b680c45eadf").matches();
  
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
                          "conceptName": "Legal Awareness Camp Theme",
                          "conceptUuid": "bd665b51-7ab3-473a-98e4-d80d00d7b463",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any others, Legal awareness camp"
                          ],
                          "answerConceptUuids": [
                            "3b35d48f-5b31-44e7-bdf4-4b680c45eadf"
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
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ba9d9580-57b0-40d2-9646-aa3663f27d80").containsAnswerConceptName("f7461b92-ca73-4841-86e3-a14cc6002067").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Next steps decided",
                      "conceptUuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Legal awareness camp"
                      ],
                      "answerConceptUuids": [
                        "f7461b92-ca73-4841-86e3-a14cc6002067"
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
      "display": "Legal Awareness Camp",
      "timed": false
    },
    {
      "uuid": "ffd1c27a-0bd5-4cfc-9787-7c28c24a84d2",
      "name": "Service Camp",
      "displayOrder": 14,
      "formElements": [
        {
          "name": "Date",
          "uuid": "4ef5a36e-b272-4ef4-88ed-b07e190f2746",
          "keyValues": [],
          "concept": {
            "name": "Service Camp Date",
            "uuid": "d3b5fc39-4e62-42b5-b756-e786d11288b1",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Place",
          "uuid": "2f01bbc8-97d9-4518-8409-4ca8756d004f",
          "keyValues": [],
          "concept": {
            "name": "Service Camp Place",
            "uuid": "b51de352-da1c-4aa9-a1c9-ef7774d8cbb9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Theme",
          "uuid": "0b166785-f6e9-4721-b5ca-bdcfd94b1113",
          "keyValues": [],
          "concept": {
            "name": "Service Camp Theme",
            "uuid": "8cbe18a3-cd31-45ce-94a0-d92a66ea9b5d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Caste Certificate",
                "uuid": "07f20fc6-a01e-44ee-a261-36c3257ab8c4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kisan sambandhit yojana",
                "uuid": "1bc73828-64cc-4e23-92ce-2fd1e6164fcd",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Moolbhoot Suvidha (nal jal yojana, road, Anganwadi etc.)",
                "uuid": "0695e6ff-46c0-4893-917f-9edc834fc175",
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
                "name": "Pensions",
                "uuid": "1220ecd8-72b9-4292-93f3-36d380166e33",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Land documents updation (varsai, namantaran, simankan, batwara, digitisation)",
                "uuid": "a3730afc-936d-4fef-9f98-b15fd2405700",
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
                "order": 10,
                "active": true
              },
              {
                "name": "Ration",
                "uuid": "e8394521-e9ea-41b7-b526-8f67993e1414",
                "dataType": "NA",
                "answers": [],
                "order": 5,
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
                "name": "Labour Registration",
                "uuid": "3b8daaca-20cb-46fe-98f9-40be8cc761a3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Scholarship",
                "uuid": "6ef080e4-0739-42bf-9e3d-ff3f4a0d866e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Any others, Service camp",
                "uuid": "acdcb7d4-5b85-49e9-8914-2ca4470bedb9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
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
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
          "mandatory": false
        },
        {
          "name": "Any others, Service camp, please specify",
          "uuid": "08383a2e-d1ac-4c8c-a959-aa2b5382fd30",
          "keyValues": [],
          "concept": {
            "name": "Any others, Service camp, please specify",
            "uuid": "962b8d3d-fab3-49a6-b654-556a0154752d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("8cbe18a3-cd31-45ce-94a0-d92a66ea9b5d").containsAnswerConceptName("acdcb7d4-5b85-49e9-8914-2ca4470bedb9").matches();
  
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
                          "conceptName": "Service Camp Theme",
                          "conceptUuid": "8cbe18a3-cd31-45ce-94a0-d92a66ea9b5d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any others, Service camp"
                          ],
                          "answerConceptUuids": [
                            "acdcb7d4-5b85-49e9-8914-2ca4470bedb9"
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
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ba9d9580-57b0-40d2-9646-aa3663f27d80").containsAnswerConceptName("621ce892-2b8a-4820-935e-f5d034e037a4").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Next steps decided",
                      "conceptUuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Service camp"
                      ],
                      "answerConceptUuids": [
                        "621ce892-2b8a-4820-935e-f5d034e037a4"
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
      "display": "Service Camp",
      "timed": false
    },
    {
      "uuid": "1a89a750-c49c-4464-8aa2-3d6d7205f6f3",
      "name": "Other",
      "displayOrder": 15,
      "formElements": [],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ba9d9580-57b0-40d2-9646-aa3663f27d80").containsAnswerConceptName("708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8").matches();
  
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
                      "scope": "encounter",
                      "conceptName": "Next steps decided",
                      "conceptUuid": "ba9d9580-57b0-40d2-9646-aa3663f27d80",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Other"
                      ],
                      "answerConceptUuids": [
                        "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8"
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
      "display": "Other",
      "voided": true,
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const decisions = params.decisions;
    const enrolmentDecisions = [];
    const encounterDecisions = [];
    const registrationDecisions = [];
    const villageUuid = "a2b7f528-898c-4990-a267-ed85e2722c81";

    let questionStructure = {
        "a2b7f528-898c-4990-a267-ed85e2722c81": {
            name: "Village",
            nextQuestionUUID: [
                {
                    uuid: "0f22d77f-3b4d-44f6-a587-bc90d3855b98",
                    name: "Where In Village, did you go?",
                    parent: "Village" 
                }, 
                {   
                    uuid: "2b465290-f555-4d3b-b418-b0b9a483d963",
                    name: "What did you do? - Village",
                    parent: "Village" 
                }
            ]
        },
        "c3c78fb2-102f-4e2b-9532-accc8d89a882": {
            name: "Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
            nextQuestionUUID: [
                {
                    uuid: "3bcb3a04-a402-499d-b292-47fb8bf19b72",
                    name: "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                    parent: "Village" 
                }
            ]
        },
        "436b449d-8d66-44c1-8ee0-53b9d3ee64da": {
            name: "Ganv ke logon ki rozgaar se judi jagah",
            nextQuestionUUID: [
                {
                    uuid: "6fcc3782-dd26-46c8-b8fc-7f8da6a7d665",
                    name: "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
                    parent: "Village" 
                }
            ]
        },
        "9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6": {
            name: "Ganv ke logon ki places of public gathering",
            nextQuestionUUID: [
                {
                    uuid: "b5e8fe86-f35f-4356-b54f-398b4703756d",
                    name: "Ganv ke logon ki places of public gathering - Description of the place",
                    parent: "Village" 
                }
            ]
        },
        "bb32a771-d5f4-4250-96f1-1a04728f208a": {
            name: "Mahila baithak",
            nextQuestionUUID: [
                {
                    uuid: "49971f17-12a1-40e2-81f7-1ec5816b4f1f",
                    name: "Mahila Baithak - Description of the place",
                    parent: "Village" 
                }
            ]
        },
        "40801ffb-b69d-42db-a3f0-a6bc285f9ed0": {
            name: "Places of worship",
            nextQuestionUUID: [
                {
                    uuid: "e8d8581a-db42-497e-b8c9-06d08146f79a",
                    name: "Place of worship - Description of the place - Village",
                    parent: "Village" 
                },
                {
                    uuid: "d48bdae3-780d-40b4-ae2a-62332a577fc6",
                    name: "Place of worship - Description of the place - Other space",
                    parent: "Other Space" 
                }
            ]
        },
        "326f1f66-0707-4eb3-b708-a89b8ffbab4a": {
            name: "Other Space",
            nextQuestionUUID: [
                {
                    uuid: "6188571c-711c-4466-be71-18362ce555de",
                    name: "If anya sthal, where did you go?",
                    parent: "Other Space" 
                },
                {
                    uuid: "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
                    name: "What did you do? - Other space",
                    parent: "Other Space" 
                }
            ]
        },
        "f8f446f1-f67b-4f45-b73d-42f8d00820e6": {
            name: "Youth Group",
            nextQuestionUUID: [
                {
                    uuid: "7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf",
                    name: "Youth Group - Description of the place",
                    parent: "Other Space" 
                }
            ]
        },
        "04b2b83f-dfb5-4753-929e-6c926837e11e": {
            name: "Places of public gathering",
            nextQuestionUUID: [
                {
                    uuid: "4c19736c-dd33-4d1f-a2fb-6d60eb767bc3",
                    name: "Places of public gathering - Description of the place",
                    parent: "Other Space" 
                }
            ]
        },
        "1ca6fff9-a879-4163-bfdf-1763688f06cc": {
            name: "Places of traditional occupation",
            nextQuestionUUID: [
                {
                    uuid: "0841e771-d471-419d-9b78-19bbb113749b",
                    name: "Places of traditional occupation - Description of the place",
                    parent: "Other Space" 
                }
            ]
        }
    }

    let locationUuid = encounter.getObservationValue("f619854c-9ed3-44ec-944e-ad9e51a768e0");
    let locationName = encounter.getObservationReadableValue("f619854c-9ed3-44ec-944e-ad9e51a768e0");


    if(locationUuid == undefined){
        locationUuid = villageUuid;
        locationName = "Village"
    }

    function getPath(uuid, parent) {
        const element = questionStructure[uuid];
        if (!element) {
            return encounter.getObservationReadableValue(uuid);
        }
        
        let identifier = element.name;
        let nextQuestionUUIDs = element.nextQuestionUUID;
        nextQuestionUUIDs.forEach((question) => {
            if (question.parent == parent) {
                let observedUUID = encounter.getObservationValue(question.uuid);
                
                let subPath = getPath(observedUUID, parent);
                if(subPath){
                  identifier += " > " + subPath;
                }
                else {
                  let observedValue = encounter.getObservationReadableValue(question.uuid);
                  identifier += " > " + observedValue;
                }
            }
        });
        
        return identifier;
    }
    
    let identifier = getPath(locationUuid, locationName);

    encounterDecisions.push({name: "Identifier", value: identifier});  
  
    decisions.enrolmentDecisions.push(...enrolmentDecisions);
    decisions.encounterDecisions.push(...encounterDecisions);
    decisions.registrationDecisions.push(...registrationDecisions);
    return decisions;
},
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [
    {
      "name": "Identifier",
      "uuid": "6c781a6d-0544-4375-9402-395068dcdb1e",
      "dataType": "Text",
      "answers": [],
      "active": true,
      "keyValues": []
    }
  ]
}