{
  "name": "Child Exit",
  "uuid": "76ba0500-e9fa-4fa0-aae3-c4b88a2d2554",
  "formType": "ProgramExit",
  "formElementGroups": [
    {
      "uuid": "76747245-ed50-4b30-8202-ddeeabd677a4",
      "name": "Exit details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Reason for exit",
          "uuid": "f30b3767-ef46-4dac-bb26-f1dafe340880",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Abortion",
                "Miscarriage"
              ]
            }
          ],
          "concept": {
            "name": "Reason for exit",
            "uuid": "0564b03e-81ff-43c9-bc4c-06928d1835e9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Shifted to other geographical area",
                "uuid": "ef08ca8e-51c4-4aca-a94f-d4f3b51b72b3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Completion",
                "uuid": "60351f59-8854-4990-93e4-fb63f9b42016",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Abortion",
                "uuid": "88f291bf-e354-47ea-960e-69f16e987c71",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Miscarriage",
                "uuid": "80837323-2f91-4955-a35f-88956b503006",
                "dataType": "NA",
                "answers": [],
                "order": 4,
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
          "name": "Date of death",
          "uuid": "f5c50209-ec20-4235-af3f-2484b19961f5",
          "keyValues": [],
          "concept": {
            "name": "Date of death",
            "uuid": "295c6757-9a28-4fb4-964f-a667b4a260e2",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("0564b03e-81ff-43c9-bc4c-06928d1835e9").containsAnswerConceptName("1c3c9c97-ba3f-46a2-88af-2a4e26dd0039").matches();
  
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
                          "scope": "exit",
                          "conceptName": "Reason for exit",
                          "conceptUuid": "0564b03e-81ff-43c9-bc4c-06928d1835e9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Death"
                          ],
                          "answerConceptUuids": [
                            "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039"
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
          "name": "Cause of death",
          "uuid": "7a86d5a6-24f4-41bd-ae31-d8779b1d9397",
          "keyValues": [],
          "concept": {
            "name": "Cause of death",
            "uuid": "64158e99-5328-4bed-be42-6e52e09a3ad6",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("0564b03e-81ff-43c9-bc4c-06928d1835e9").containsAnswerConceptName("1c3c9c97-ba3f-46a2-88af-2a4e26dd0039").matches();
  
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
                          "scope": "exit",
                          "conceptName": "Reason for exit",
                          "conceptUuid": "0564b03e-81ff-43c9-bc4c-06928d1835e9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Death"
                          ],
                          "answerConceptUuids": [
                            "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039"
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
          "name": "Place of death",
          "uuid": "c265cbaa-7e2e-4155-b6ad-2c9b9a772245",
          "keyValues": [],
          "concept": {
            "name": "Place of death",
            "uuid": "d9c05a71-baaa-4a48-83e3-6a60eba10845",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("0564b03e-81ff-43c9-bc4c-06928d1835e9").containsAnswerConceptName("1c3c9c97-ba3f-46a2-88af-2a4e26dd0039").matches();
  
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
                          "scope": "exit",
                          "conceptName": "Reason for exit",
                          "conceptUuid": "0564b03e-81ff-43c9-bc4c-06928d1835e9",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Death"
                          ],
                          "answerConceptUuids": [
                            "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039"
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
          "name": "Other reason for program exit",
          "uuid": "8d9889b8-72cf-4307-bfa6-7addddd078c8",
          "keyValues": [],
          "concept": {
            "name": "Other reason for program exit",
            "uuid": "f210728e-f6fa-4fa4-8a36-5768e5adbc29",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInExit("0564b03e-81ff-43c9-bc4c-06928d1835e9").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "scope": "exit",
                          "conceptName": "Reason for exit",
                          "conceptUuid": "0564b03e-81ff-43c9-bc4c-06928d1835e9",
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
        }
      ],
      "display": "Exit details",
      "timed": false
    }
  ],
  "decisionRule": "
  "use strict";
({params, imports}) => {
    const programEnrolment = params.entity;
    const decisions = params.decisions;
            decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "No"});
            decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "No"});
            //decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
    return decisions;
},
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}