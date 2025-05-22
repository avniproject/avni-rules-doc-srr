{
  "name": "Training",
  "uuid": "82b377ed-7154-4994-8922-5c12886d0376",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "c99c7117-7d87-485c-a057-fcd667f304bb",
      "name": "Training Information",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Training required?",
          "uuid": "fec0d923-4014-41ba-a215-673aed92e0a7",
          "keyValues": [],
          "concept": {
            "name": "Training required?",
            "uuid": "159cdded-1238-4448-a6bb-2cf301c4905b",
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
          "mandatory": true
        },
        {
          "name": "Training required for?",
          "uuid": "6ef655ae-4525-4b53-9bce-06d3dcab3122",
          "keyValues": [
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
          "displayOrder": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("159cdded-1238-4448-a6bb-2cf301c4905b").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Training required?",
                          "conceptUuid": "159cdded-1238-4448-a6bb-2cf301c4905b",
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
          "mandatory": true
        },
        {
          "name": "Other topic training required, please specify",
          "uuid": "eed7c8d9-8e0e-4d89-a758-b6daf8059192",
          "keyValues": [],
          "concept": {
            "name": "Other topic training required, please specify",
            "uuid": "eca304dc-15ab-4a9f-81af-8847969fff15",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("ae7ca272-c8e8-4d49-92db-1dca212b83fe").containsAnswerConceptName("cd62e21a-eadd-4aba-8809-b39caad128eb").matches();
  
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
                          "conceptName": "Training required for?",
                          "conceptUuid": "ae7ca272-c8e8-4d49-92db-1dca212b83fe",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Topic"
                          ],
                          "answerConceptUuids": [
                            "cd62e21a-eadd-4aba-8809-b39caad128eb"
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
          "name": "Place of training",
          "uuid": "ac43f50b-0033-4426-9d37-2d5dceb6a393",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("159cdded-1238-4448-a6bb-2cf301c4905b").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Training required?",
                          "conceptUuid": "159cdded-1238-4448-a6bb-2cf301c4905b",
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
        }
      ],
      "display": "Training Information",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({encounter});
  const visitMonthYear = moment(encounter.encounterDateTime).format('MMMM YYYY'); 
  const visitName = `Training Completion - for ${visitMonthYear}`;

  function visitAlreadyScheduled(visitType, visitName){
    return encounter.individual.getEncounters().some((enc)=> enc.encounterType.name == visitType && enc.name == visitName);
  }

  const isTrainingRequired = new imports.rulesConfig.RuleCondition({encounter}).when.valueInEncounter("159cdded-1238-4448-a6bb-2cf301c4905b").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  if(isTrainingRequired && !visitAlreadyScheduled("Training Completion", visitName)){
    const earliestDate = moment(encounter.encounterDateTime).add(1, 'month').startOf('month').toDate();
    const maxDate = moment(earliestDate).endOf('month').toDate();
    scheduleBuilder.add({
      name: visitName, 
      encounterType: "Training Completion", 
      earliestDate, 
      maxDate,
      visitCreationStrategy: "createNew"
    });  
  }
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}