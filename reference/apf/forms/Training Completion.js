{
  "name": "Training Completion",
  "uuid": "3e3266ae-b09d-4145-9bbb-4a6bc50e3492",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "ed4d3911-edac-4645-9e48-fd753753d6f9",
      "name": "Training Information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Training requested last month",
          "uuid": "0ae5a9ea-e5fd-48da-8db6-a95beff8580c",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            },
            {
              "key": "ExcludedAnswers",
              "value": [
                "Maternal, Infant, Young Child Nutrition"
              ]
            }
          ],
          "concept": {
            "name": "Training required for?",
            "uuid": "ae7ca272-c8e8-4d49-92db-1dca212b83fe",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Avni",
                "uuid": "a6183014-1bd2-4e3e-8086-9345892f8407",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "VHSND",
                "uuid": "dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Breastfeeding and dietary pattern",
                "uuid": "cc3e6a09-b001-4cb8-9af4-f51a325aa24e",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Maternal, Infant, Young Child Nutrition",
                "uuid": "76619bc7-3128-4488-a2e7-f52bf7e4f816",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Counselling to SAM/MAM/GF2",
                "uuid": "1e76ca83-ca61-4aa1-bc01-da96c176c8a9",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Growth monitoring",
                "uuid": "25d6ba07-5642-47c1-83f0-5324e3019176",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Topic",
                "uuid": "cd62e21a-eadd-4aba-8809-b39caad128eb",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Entitlements",
                "uuid": "153995c3-b8c9-474e-8189-d5379b7df494",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Home Based Newborn Care",
                "uuid": "2d2deb9f-6cff-4f08-bb31-a450807edeab",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "High Risk Pregnancy",
                "uuid": "0affbeca-d684-4f32-ad7c-bec1ddccbe62",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Counselling and home visit to pregnant women",
                "uuid": "faa583de-ead4-4380-98d5-41f625fd5c8a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const individual = encounter.individual;
  const moment = imports.moment;
  const lastMonthYear = moment(encounter.earliestVisitDateTime).subtract(1, 'month').format('MMMM YYYY');
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  let previousTraingEncounter = individual.getEncounters(true).filter((enc)=> 
    enc.encounterType.name === 'Training' && 
    moment(enc.encounterDateTime).format('MMMM YYYY') == lastMonthYear
  );

  if(previousTraingEncounter.length > 0) {
    previousTraingEncounter = previousTraingEncounter[0];
    value = previousTraingEncounter.getObservationReadableValue('ae7ca272-c8e8-4d49-92db-1dca212b83fe');
  }
  else validationErrors.push("There are no previous Traing Visits");

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date on which the trainings were requested",
          "uuid": "263fff20-9bd2-4eb1-8d92-70755f3346c7",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Date on which the trainings were requested",
            "uuid": "e8b2e2e3-29b9-480d-aefc-ccd12535df6a",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const individual = encounter.individual;
  const moment = imports.moment;
  const lastMonthYear = moment(encounter.earliestVisitDateTime).subtract(1, 'month').format('MMMM YYYY');
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  let previousTraingEncounter = individual.getEncounters(true).filter((enc)=> 
    enc.encounterType.name === 'Training' && 
    moment(enc.encounterDateTime).format('MMMM YYYY') == lastMonthYear
  );

  if(previousTraingEncounter.length > 0) {
    previousTraingEncounter = previousTraingEncounter[0];
    value = previousTraingEncounter.encounterDateTime;
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Training done in the all requested topics?",
          "uuid": "dcf3e1ea-7899-4412-97ad-283a310a66a2",
          "keyValues": [],
          "concept": {
            "name": "Training done in the requested topic?",
            "uuid": "845560bd-23d1-4137-9781-ec7ebdd12e89",
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Which topic(s) is/are not completed?",
          "uuid": "f99742a0-3997-4e66-8abf-fc19b4999481",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Maternal, Infant, Young Child Nutrition"
              ]
            }
          ],
          "concept": {
            "name": "Which topic(s) is/are not completed?",
            "uuid": "6f234049-60e8-4d8f-b70a-7a7712f6398b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "High Risk Pregnancy",
                "uuid": "0affbeca-d684-4f32-ad7c-bec1ddccbe62",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Avni",
                "uuid": "a6183014-1bd2-4e3e-8086-9345892f8407",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Growth monitoring",
                "uuid": "25d6ba07-5642-47c1-83f0-5324e3019176",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Entitlements",
                "uuid": "153995c3-b8c9-474e-8189-d5379b7df494",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Maternal, Infant, Young Child Nutrition",
                "uuid": "76619bc7-3128-4488-a2e7-f52bf7e4f816",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Counselling to SAM/MAM/GF2",
                "uuid": "1e76ca83-ca61-4aa1-bc01-da96c176c8a9",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Other Topic",
                "uuid": "cd62e21a-eadd-4aba-8809-b39caad128eb",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Counselling and home visit to pregnant women",
                "uuid": "faa583de-ead4-4380-98d5-41f625fd5c8a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Home Based Newborn Care",
                "uuid": "2d2deb9f-6cff-4f08-bb31-a450807edeab",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "VHSND",
                "uuid": "dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Breastfeeding and dietary pattern",
                "uuid": "cc3e6a09-b001-4cb8-9af4-f51a325aa24e",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
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
  
  const isTrainingIncomplete = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("a77bd700-1409-4d52-93bc-9fe32c0e169b").matches();
  
  visibility = isTrainingIncomplete ;

  let allTopics = [
    '153995c3-b8c9-474e-8189-d5379b7df494', 
    'dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6', 
    '0affbeca-d684-4f32-ad7c-bec1ddccbe62', 
    '2d2deb9f-6cff-4f08-bb31-a450807edeab', 
    '76619bc7-3128-4488-a2e7-f52bf7e4f816', 
    '25d6ba07-5642-47c1-83f0-5324e3019176', 
    'faa583de-ead4-4380-98d5-41f625fd5c8a', 
    'cc3e6a09-b001-4cb8-9af4-f51a325aa24e', 
    'a6183014-1bd2-4e3e-8086-9345892f8407', 
    '1e76ca83-ca61-4aa1-bc01-da96c176c8a9', 
    'cd62e21a-eadd-4aba-8809-b39caad128eb'
  ]

  if(isTrainingIncomplete){
    const topicsRequestedForTrainingLastMonth = encounter.getObservationValue('ae7ca272-c8e8-4d49-92db-1dca212b83fe');

    let remainingTopics = allTopics.filter(topic => !topicsRequestedForTrainingLastMonth.includes(topic));

    _.forEach(remainingTopics, (answer) => {
      const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
      if (answerToSkip) answersToSkip.push(answerToSkip);
    });
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Place of training",
          "uuid": "9a437dae-d84f-4f65-8a6e-56813def52b9",
          "keyValues": [],
          "concept": {
            "name": "Place of training",
            "uuid": "060f69de-cc25-47f9-98ab-f8e3cdd2e1e7",
            "dataType": "Coded",
            "answers": [
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Training done in the requested topic?",
                          "conceptUuid": "845560bd-23d1-4137-9781-ec7ebdd12e89",
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
    
    const isOverDue = moment(encounter.maxVisitDateTime).isBefore(moment(), 'day');
    
    return formElementGroup.formElements.map((formElement) => {
  
        visibility = !isOverDue ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Training Information",
      "timed": false
    },
    {
      "uuid": "df3048ae-edab-442b-9271-edc7cbf54bfd",
      "name": "Growth Monitoring",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Place of training for Topic: Growth monitoring",
          "uuid": "63b9a8af-6062-4f51-97f9-eb96328a95da",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Growth monitoring",
            "uuid": "afe56aa6-c231-46fc-94dc-0fcbaf6ef1d1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("afe56aa6-c231-46fc-94dc-0fcbaf6ef1d1").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Growth monitoring",
                          "conceptUuid": "afe56aa6-c231-46fc-94dc-0fcbaf6ef1d1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion Topic: Growth monitoring",
          "uuid": "b9446066-e056-4db3-bb64-aa594643084a",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion Topic: Growth monitoring",
            "uuid": "f6b2dda6-0e82-4574-9610-d9e60c4595db",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("f6b2dda6-0e82-4574-9610-d9e60c4595db").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('f6b2dda6-0e82-4574-9610-d9e60c4595db'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other place of training, please specify: Growth monitoring",
          "uuid": "4cd636b1-c573-43e5-b22d-bb8678b17f0a",
          "keyValues": [],
          "concept": {
            "name": "Other place of training, please specify",
            "uuid": "080b0c80-bd79-47e4-a08d-5fe8e12d396b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("afe56aa6-c231-46fc-94dc-0fcbaf6ef1d1").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Growth monitoring",
                          "conceptUuid": "afe56aa6-c231-46fc-94dc-0fcbaf6ef1d1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
        
        const isGrowthMonitoringTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("25d6ba07-5642-47c1-83f0-5324e3019176").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isGrowthMonitoringTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("25d6ba07-5642-47c1-83f0-5324e3019176").matches();
        
        visibility = isGrowthMonitoringTrainingReqested && (traingDoneForAllTopics || !isGrowthMonitoringTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Growth Monitoring",
      "timed": false
    },
    {
      "uuid": "c309480c-ff34-47f7-840f-7b2a2bf24ca0",
      "name": "High Risk Pregnancy",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Place of training for Topic: High Risk Pregnancy",
          "uuid": "cce39660-4f25-477a-8f0c-e23b6cb9501d",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: High Risk Pregnancy",
            "uuid": "983f4e47-7f48-446e-ba39-c2246340c58d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("983f4e47-7f48-446e-ba39-c2246340c58d").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: High Risk Pregnancy",
                          "conceptUuid": "983f4e47-7f48-446e-ba39-c2246340c58d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: High Risk Pregnancy",
          "uuid": "3900ce41-2b37-4e97-b64a-cc48cbc7ffa5",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: High Risk Pregnancy",
            "uuid": "56509cda-720e-40b3-983c-f04da7fec2a1",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("56509cda-720e-40b3-983c-f04da7fec2a1").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('56509cda-720e-40b3-983c-f04da7fec2a1'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isHighRiskPregnancyTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("0affbeca-d684-4f32-ad7c-bec1ddccbe62").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isHighRiskPregnancyTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("0affbeca-d684-4f32-ad7c-bec1ddccbe62").matches();
        
        visibility = isHighRiskPregnancyTrainingReqested && (traingDoneForAllTopics || !isHighRiskPregnancyTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "High Risk Pregnancy",
      "timed": false
    },
    {
      "uuid": "0507eb97-9aa0-4259-b759-93e39566f449",
      "name": "VHSND",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Place of training for Topic: VHSND",
          "uuid": "7e6d30c5-7f73-4779-a702-3fbfa30153ef",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: VHSND",
            "uuid": "c6a9ce67-3ee2-4a63-8319-78ad9cab835d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("c6a9ce67-3ee2-4a63-8319-78ad9cab835d").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: VHSND",
                          "conceptUuid": "c6a9ce67-3ee2-4a63-8319-78ad9cab835d",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: VHSND",
          "uuid": "93dc0d2e-7cae-4ba4-a93d-05872ac642e2",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: VHSND",
            "uuid": "74f97fad-3b66-4028-9d5d-446918b88af5",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("74f97fad-3b66-4028-9d5d-446918b88af5").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('74f97fad-3b66-4028-9d5d-446918b88af5'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isVHSNDTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isVHSNDTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6").matches();
        
        visibility = isVHSNDTrainingReqested && (traingDoneForAllTopics || !isVHSNDTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "VHSND",
      "timed": false
    },
    {
      "uuid": "951088a3-2456-4533-90a6-cb91b7185851",
      "name": "Home Based Newborn Care",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Place of training for Topic: Home Based Newborn Care",
          "uuid": "1cd43e1e-d2cb-4bf8-9954-acf558779a61",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Home Based Newborn Care",
            "uuid": "988b55f3-bbe7-43b4-8c31-5a4312fab6ae",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("988b55f3-bbe7-43b4-8c31-5a4312fab6ae").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Home Based Newborn Care",
                          "conceptUuid": "988b55f3-bbe7-43b4-8c31-5a4312fab6ae",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Home Based Newborn Care",
          "uuid": "7933f08e-d8aa-4334-9b1d-0d8e6fd20852",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Home Based Newborn Care",
            "uuid": "bac0fab8-1c8e-4686-a28a-24dcc00adadb",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("bac0fab8-1c8e-4686-a28a-24dcc00adadb").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('bac0fab8-1c8e-4686-a28a-24dcc00adadb'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isHomeBasedNewbornCareTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("2d2deb9f-6cff-4f08-bb31-a450807edeab").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isHomeBasedNewbornCareTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("2d2deb9f-6cff-4f08-bb31-a450807edeab").matches();
        
        visibility = isHomeBasedNewbornCareTrainingReqested && (traingDoneForAllTopics || !isHomeBasedNewbornCareTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Home Based Newborn Care",
      "timed": false
    },
    {
      "uuid": "c3565fb9-6d11-47b9-adba-63591d980726",
      "name": "Counselling and home visit to pregnant women",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Place of training for Topic: Counselling and home visit to pregnant women",
          "uuid": "76739e85-3d6d-4361-8fdc-f6c5b339158c",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Counselling and home visit to pregnant women",
            "uuid": "d017ad46-e754-4e19-b3ba-f570538bc7b8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d017ad46-e754-4e19-b3ba-f570538bc7b8").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Counselling and home visit to pregnant women",
                          "conceptUuid": "d017ad46-e754-4e19-b3ba-f570538bc7b8",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Counselling and home visit to pregnant women",
          "uuid": "54d2b196-418d-41c4-bc54-a08aa3aa818b",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Counselling and home visit to pregnant women",
            "uuid": "85229736-86ec-4938-87cb-d84c90a30c15",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("85229736-86ec-4938-87cb-d84c90a30c15").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('85229736-86ec-4938-87cb-d84c90a30c15'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isCounsellingAndHomeVisitToPregnantWomenTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("faa583de-ead4-4380-98d5-41f625fd5c8a").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isCounsellingAndHomeVisitToPregnantWomenTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("faa583de-ead4-4380-98d5-41f625fd5c8a").matches();
        
        visibility = isCounsellingAndHomeVisitToPregnantWomenTrainingReqested && (traingDoneForAllTopics || !isCounsellingAndHomeVisitToPregnantWomenTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Counselling and home visit to pregnant women",
      "timed": false
    },
    {
      "uuid": "dcbf8930-3582-4937-9062-c5fd1b3290b1",
      "name": "Entitlements",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Place of training for Topic: Entitlements",
          "uuid": "dcc42bde-982a-430f-af65-49499a0bb67f",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Entitlements",
            "uuid": "d9812a50-4740-42ea-b37e-b61f33f9d0b8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d9812a50-4740-42ea-b37e-b61f33f9d0b8").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Entitlements",
                          "conceptUuid": "d9812a50-4740-42ea-b37e-b61f33f9d0b8",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Entitlements",
          "uuid": "9bdca799-52a7-442e-863e-270ca5c0dd39",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Entitlements",
            "uuid": "4e8721aa-a8b6-436e-9796-ccb6ad244c58",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4e8721aa-a8b6-436e-9796-ccb6ad244c58").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('4e8721aa-a8b6-436e-9796-ccb6ad244c58'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isEntitlementsTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("153995c3-b8c9-474e-8189-d5379b7df494").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isEntitlementsTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("153995c3-b8c9-474e-8189-d5379b7df494").matches();
        
        visibility = isEntitlementsTrainingReqested && (traingDoneForAllTopics || !isEntitlementsTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Entitlements",
      "timed": false
    },
    {
      "uuid": "e86d5b51-0fcc-40b5-8c6d-42cad7919431",
      "name": "Breastfeeding and dietary pattern",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Place of training for Topic: Breastfeeding and dietary pattern",
          "uuid": "b83c5f2c-4356-4aea-afd7-8e179774248d",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Breastfeeding and dietary pattern",
            "uuid": "d6ede59d-c029-4661-85c5-e97f5004f90e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d6ede59d-c029-4661-85c5-e97f5004f90e").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Breastfeeding and dietary pattern",
                          "conceptUuid": "d6ede59d-c029-4661-85c5-e97f5004f90e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Breastfeeding and dietary pattern",
          "uuid": "f10cc104-5d5a-4fa6-bfc3-3699d39271db",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Breastfeeding and dietary pattern",
            "uuid": "09bf2341-ee14-4154-922c-ddc384a711eb",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("09bf2341-ee14-4154-922c-ddc384a711eb").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('09bf2341-ee14-4154-922c-ddc384a711eb'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isBreastfeedingAndDietaryPatternTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("cc3e6a09-b001-4cb8-9af4-f51a325aa24e").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isBreastfeedingAndDietaryPatternTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("cc3e6a09-b001-4cb8-9af4-f51a325aa24e").matches();
        
        visibility = isBreastfeedingAndDietaryPatternTrainingReqested && (traingDoneForAllTopics || !isBreastfeedingAndDietaryPatternTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Breastfeeding and dietary pattern",
      "timed": false
    },
    {
      "uuid": "db4c3f43-46c9-4ba1-9920-438369bb3b32",
      "name": "Counselling to SAM/MAM/GF2",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Place of training for Topic: Counselling to SAM/MAM/GF2",
          "uuid": "83cb3f61-e761-47d4-b47e-56a4c36a36a4",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Counselling to SAM/MAM/GF2",
            "uuid": "1f44b6ab-2084-4c4d-b8ae-0f6e417c210e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("1f44b6ab-2084-4c4d-b8ae-0f6e417c210e").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Counselling to SAM/MAM/GF2",
                          "conceptUuid": "1f44b6ab-2084-4c4d-b8ae-0f6e417c210e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Counselling to SAM/MAM/GF2",
          "uuid": "4bca1a8b-1f51-4e94-8376-562a5859327a",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Counselling to SAM/MAM/GF2",
            "uuid": "b9ab266c-4659-4fd2-b422-1ba2d19205b8",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("b9ab266c-4659-4fd2-b422-1ba2d19205b8").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('b9ab266c-4659-4fd2-b422-1ba2d19205b8'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isCounsellingToSamMamOrGf2TrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("1e76ca83-ca61-4aa1-bc01-da96c176c8a9").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isCounsellingToSamMamOrGf2TrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("1e76ca83-ca61-4aa1-bc01-da96c176c8a9").matches();
        
        visibility = isCounsellingToSamMamOrGf2TrainingReqested && (traingDoneForAllTopics || !isCounsellingToSamMamOrGf2TrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Counselling to SAM/MAM/GF2",
      "timed": false
    },
    {
      "uuid": "b42abfca-e390-4c82-9282-39fc3d2f443a",
      "name": "Avni",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Place of training for Topic: Avni",
          "uuid": "885e7c3a-08eb-4367-aac9-0dd7ceb6be5a",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Avni",
            "uuid": "8c1b4ae5-a2af-4594-8992-ed6bbd2d6eb6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("8c1b4ae5-a2af-4594-8992-ed6bbd2d6eb6").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Avni",
                          "conceptUuid": "8c1b4ae5-a2af-4594-8992-ed6bbd2d6eb6",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion for Topic: Avni",
          "uuid": "948493a1-ff7f-42de-afc1-e4efb14d4506",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion for Topic: Avni",
            "uuid": "03d7e277-a1f7-4941-a42c-f42d9253f8cc",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("03d7e277-a1f7-4941-a42c-f42d9253f8cc").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('03d7e277-a1f7-4941-a42c-f42d9253f8cc'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isAvniTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("a6183014-1bd2-4e3e-8086-9345892f8407").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isAvniTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("a6183014-1bd2-4e3e-8086-9345892f8407").matches();
        
        visibility = isAvniTrainingReqested && (traingDoneForAllTopics || !isAvniTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Avni",
      "timed": false
    },
    {
      "uuid": "2386495f-c49a-4d76-9246-86a9b25c7711",
      "name": "Other Topic",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Place of training for Topic: Other Topic",
          "uuid": "3e4a03b2-05fe-48bb-83d4-b75ace09bba4",
          "keyValues": [],
          "concept": {
            "name": "Place of training for Topic: Other Topic",
            "uuid": "d860aff9-ca9b-4bff-93a2-c827d1a53649",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Block",
                "uuid": "9c06d296-52b4-4266-8256-73eaa827a61b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Sector level",
                "uuid": "72f41534-313f-4a84-a3ed-436d0c32563b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others, please specify",
                "uuid": "f3c4b008-554b-4226-aa3f-09084e35f38f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "In the field",
                "uuid": "8ac690c8-fc47-475e-b9b2-0e3dbcff9bc5",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("d860aff9-ca9b-4bff-93a2-c827d1a53649").containsAnswerConceptName("f3c4b008-554b-4226-aa3f-09084e35f38f").matches();
  
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
                          "conceptName": "Place of training for Topic: Other Topic",
                          "conceptUuid": "d860aff9-ca9b-4bff-93a2-c827d1a53649",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others, please specify"
                          ],
                          "answerConceptUuids": [
                            "f3c4b008-554b-4226-aa3f-09084e35f38f"
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
          "name": "Date of training completion Topic: Other Topic",
          "uuid": "56b9a80a-b12d-4b8e-94e3-611b7dea97c9",
          "keyValues": [],
          "concept": {
            "name": "Date of training completion Topic: Other Topic",
            "uuid": "6e9262a0-3859-497c-9304-91838f3fa490",
            "dataType": "Date",
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
  
  const dateOfTrainingDefined = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6e9262a0-3859-497c-9304-91838f3fa490").defined.matches();
  
  if(dateOfTrainingDefined) {

    const currentDate = moment();
    const dateOfTraining = moment(encounter.getObservationValue('6e9262a0-3859-497c-9304-91838f3fa490'));

    if(dateOfTraining.isAfter(currentDate, 'day')) validationErrors.push("Date cannot be in the future");
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
        
        const isOtherTopicsTrainingReqested = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("cd62e21a-eadd-4aba-8809-b39caad128eb").matches();

        const traingDoneForAllTopics =  new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("845560bd-23d1-4137-9781-ec7ebdd12e89").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();

        const isOtherTopicsTrainingNotDone = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("6f234049-60e8-4d8f-b70a-7a7712f6398b").containsAnswerConceptName("cd62e21a-eadd-4aba-8809-b39caad128eb").matches();
        
        visibility = isOtherTopicsTrainingReqested && (traingDoneForAllTopics || !isOtherTopicsTrainingNotDone) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Other Topic",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const isOverDue = moment(encounter.maxVisitDateTime).isBefore(moment(), 'day');
  
  if(isOverDue){
    validationResults.push(imports.common.createValidationError("Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled"));  
  }
  
  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": []
}