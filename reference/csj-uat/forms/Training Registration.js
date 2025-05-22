{
  "name": "Training Registration",
  "uuid": "2a4175f3-583f-4d0e-b943-0e7e45958611",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "d4750cf8-e0be-43b7-a0c0-e338ae91cddb",
      "name": "Preliminary Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Type of training",
          "uuid": "121be510-f05a-475c-9fc5-6c0011bee141",
          "keyValues": [],
          "concept": {
            "name": "Type of training",
            "uuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "External",
                "uuid": "f882e2b6-52e1-43cf-a45b-215e76ff05eb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Internal",
                "uuid": "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a",
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
  
  const typeDecision = individual.getObservationValue("242c4718-c02a-462c-96b6-bee4423676c5")
  const typeTraining = individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd")
  const hasEnrolledinTypeOfTraining = individual.enrolments.some((enr) => !enr.voided );
  const hasEncounterFilled = individual.encounters.some((enc) => !enc.voided );
  
  if ( hasEnrolledinTypeOfTraining || hasEncounterFilled ){
    if(typeDecision != typeTraining){
       validationErrors.push(" This field cannot be edited") ;    
    }  
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Title of Training",
          "uuid": "31a1676a-17b9-4404-ad3b-8e21e5f5d2b7",
          "keyValues": [],
          "concept": {
            "name": "Title of Training",
            "uuid": "b4b83d36-7386-4b7c-bf98-0a13a30f0559",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Objective",
          "uuid": "484b0baf-b051-4527-a4bc-570dc2d200a5",
          "keyValues": [],
          "concept": {
            "name": "Objective",
            "uuid": "cd59dabe-046a-4618-92c9-c08bb88206ef",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Nature of training",
          "uuid": "fe6a567a-6186-4786-93aa-10fd0a0b61f6",
          "keyValues": [],
          "concept": {
            "name": "Nature of training",
            "uuid": "302ce25a-1fe7-4c5a-9a31-e1e54009187b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Jaher Sabha",
                "uuid": "76b5075c-01f7-4314-be81-491c6311ef8e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Internal online CB session",
                "uuid": "1e0f9dcd-864b-4b03-a196-d6db6d061791",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Volunteer Training or Meeting",
                "uuid": "506b3f7f-a8a3-4383-92fb-743be00756fa",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Centre Meeting",
                "uuid": "0522fbf4-7a04-439e-9583-ca1ce5338f60",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "LFC Training",
                "uuid": "a9d81c74-42d9-4586-ae16-c944078bd8f3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("3feb2dac-7f40-49e7-82c8-a5c55b3feb8a").matches();
  
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
                          "conceptName": "Type of training",
                          "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Internal"
                          ],
                          "answerConceptUuids": [
                            "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a"
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
          "name": "Phased or not",
          "uuid": "6b8805fc-5660-4d43-954e-ef1d86e6465b",
          "keyValues": [],
          "concept": {
            "name": "Phased or not (voided~269149)",
            "uuid": "5047c80b-38f1-41ed-89a6-98083d341976",
            "dataType": "Coded",
            "answers": [
              {
                "name": "One time",
                "uuid": "1aca61d0-14cf-41f0-b33b-a0fcee621961",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Phase wise",
                "uuid": "cfdfb311-ac5d-48ff-b250-57259194016b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("3feb2dac-7f40-49e7-82c8-a5c55b3feb8a").and.when.valueInRegistration("302ce25a-1fe7-4c5a-9a31-e1e54009187b").containsAnswerConceptName("506b3f7f-a8a3-4383-92fb-743be00756fa").matches();
  
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
                          "conceptName": "Type of training",
                          "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Internal"
                          ],
                          "answerConceptUuids": [
                            "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Nature of training",
                          "conceptUuid": "302ce25a-1fe7-4c5a-9a31-e1e54009187b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volunteer Training or Meeting"
                          ],
                          "answerConceptUuids": [
                            "506b3f7f-a8a3-4383-92fb-743be00756fa"
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
          "name": "Training Participants",
          "uuid": "71f53c45-665e-4437-bb36-bf21f1aa1e32",
          "keyValues": [],
          "concept": {
            "name": "Training Participants",
            "uuid": "c7007206-2b21-40ca-99dc-377205e10c37",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NGO CSO",
                "uuid": "c624c263-fcfe-4c78-af6b-a39e74173e4b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Govt department",
                "uuid": "0982f0f3-3bcd-4968-b94f-397d98cfa7a2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Lawyers",
                "uuid": "729ec032-d9c7-4081-bb2d-49c2f081dc86",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Paralegals",
                "uuid": "b342d8fe-bf68-40f4-b373-3faedcfdb04b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Academic institution",
                "uuid": "a0018749-7eb2-431c-922d-2eed8c8deda7",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Law Students",
                "uuid": "36604e58-b32d-4d07-99c8-bf8b47dffef4",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Training Participants",
                "uuid": "9962486b-54a9-4639-b3ec-3e6162ae7318",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("f882e2b6-52e1-43cf-a45b-215e76ff05eb").matches();
  
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
                          "conceptName": "Type of training",
                          "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "External"
                          ],
                          "answerConceptUuids": [
                            "f882e2b6-52e1-43cf-a45b-215e76ff05eb"
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
          "name": "Other Training Participants, Please specify",
          "uuid": "4372bc49-24a7-495a-a690-29d54ebb69bd",
          "keyValues": [],
          "concept": {
            "name": "other Training Participants",
            "uuid": "974b3555-1d8f-461e-ac64-cc933998ef06",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7007206-2b21-40ca-99dc-377205e10c37").containsAnswerConceptName("9962486b-54a9-4639-b3ec-3e6162ae7318").matches();
  
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
                          "conceptName": "Training Participants",
                          "conceptUuid": "c7007206-2b21-40ca-99dc-377205e10c37",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Training Participants"
                          ],
                          "answerConceptUuids": [
                            "9962486b-54a9-4639-b3ec-3e6162ae7318"
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
          "name": "In collaboration with",
          "uuid": "ba20b5f0-b69b-4a10-8ea8-a3b16f5ee3de",
          "keyValues": [],
          "concept": {
            "name": "In collaboration with",
            "uuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NGO or CSO",
                "uuid": "becf5a68-3e4b-4827-9dbf-fd3a87fd8560",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8",
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
                "order": 4,
                "active": true
              },
              {
                "name": "Govt department",
                "uuid": "0982f0f3-3bcd-4968-b94f-397d98cfa7a2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Academic institution",
                "uuid": "a0018749-7eb2-431c-922d-2eed8c8deda7",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("f882e2b6-52e1-43cf-a45b-215e76ff05eb").matches();
  
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
                          "conceptName": "Type of training",
                          "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "External"
                          ],
                          "answerConceptUuids": [
                            "f882e2b6-52e1-43cf-a45b-215e76ff05eb"
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
          "name": "Other collaboration, please specify",
          "uuid": "dae57a9f-f11f-4d38-b19c-f62033267b64",
          "keyValues": [],
          "concept": {
            "name": "Other collaboration, please specify",
            "uuid": "fc426d00-8d38-4fc8-92c9-362abe30498a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8").matches();
  
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
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "mandatory": true
        },
        {
          "name": "Name of collaborating organisation",
          "uuid": "a8e0e6b2-5768-4d25-b7ff-771cc889129d",
          "keyValues": [],
          "concept": {
            "name": "Name of collaborator",
            "uuid": "a22802a3-2cf8-49f2-9714-7a09ab99e583",
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
  
  const show = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("f882e2b6-52e1-43cf-a45b-215e76ff05eb").matches();

  const hide = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
  visibility = show && !(hide) ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Whether phased",
          "uuid": "0274c09b-60a4-4229-8fac-57419e20956b",
          "keyValues": [],
          "concept": {
            "name": "Whether phased",
            "uuid": "387e72d2-1ced-4032-b273-ea3ef5c5a159",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Single event",
                "uuid": "9d91df97-79f6-4e42-8d61-19d8926edd9f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Phase wise",
                "uuid": "cfdfb311-ac5d-48ff-b250-57259194016b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
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
  
  const whetherPhased = individual.getObservationValue("387e72d2-1ced-4032-b273-ea3ef5c5a159");
  const whetherPhasedDecision = individual.getObservationValue("cc5438dc-f6c3-437b-aa8f-78d176ebb3cc");
  const hasEnrolledinTypeOfTraining = individual.enrolments.some((enr) => !enr.voided );
  const hasEncounterFilled = individual.encounters.some((enc) => !enc.voided );
  
  if ( hasEnrolledinTypeOfTraining || hasEncounterFilled ){
    if(whetherPhasedDecision != whetherPhased){
       validationErrors.push(" This field cannot be edited") ;    
    }  
  }

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("3feb2dac-7f40-49e7-82c8-a5c55b3feb8a").matches();
  
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("f882e2b6-52e1-43cf-a45b-215e76ff05eb").matches();
  
  visibility = condition11 || condition31 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
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
                individual.firstName = "Training: ";
                individual.name = "Training: ";
            } else {
                individual.firstName = "Training: " + individual.lowestAddressLevel.name;
                individual.name = "Training: " + individual.lowestAddressLevel.name;
            }
        }
        
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Preliminary Details",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const decisions = params.decisions;
    const enrolmentDecisions = [];
    const encounterDecisions = [];
    const registrationDecisions = [];
    
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("3feb2dac-7f40-49e7-82c8-a5c55b3feb8a").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptName("f882e2b6-52e1-43cf-a45b-215e76ff05eb").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("387e72d2-1ced-4032-b273-ea3ef5c5a159").containsAnswerConceptName("9d91df97-79f6-4e42-8d61-19d8926edd9f").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("387e72d2-1ced-4032-b273-ea3ef5c5a159").containsAnswerConceptName("02510e16-715b-4081-8165-af72278e9609").matches();
  
    if(condition11 ){
    registrationDecisions.push({name: "Type of training decision", value: ["Internal"]});  
}
    if(condition12 ){
    registrationDecisions.push({name: "Type of training decision", value: ["External"]});  
}
    if(condition13 ){
    registrationDecisions.push({name: "Whether phased Decision", value: ["Single event"]});  
}
    if(condition14 ){
    registrationDecisions.push({name: "Whether phased Decision", value: ["Phased event"]});  
}
  
    decisions.enrolmentDecisions.push(...enrolmentDecisions);
    decisions.encounterDecisions.push(...encounterDecisions);
    decisions.registrationDecisions.push(...registrationDecisions);
    return decisions;
},
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [],
  "decisionDeclarativeRule": [
    {
      "actions": [
        {
          "details": {
            "scope": "registration",
            "value": [
              "Internal"
            ],
            "conceptName": "Type of training decision",
            "conceptUuid": "242c4718-c02a-462c-96b6-bee4423676c5",
            "conceptDataType": "Coded"
          },
          "actionType": "addDecision"
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
                  "conceptName": "Type of training",
                  "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "Internal"
                  ],
                  "answerConceptUuids": [
                    "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a"
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
            "scope": "registration",
            "value": [
              "External"
            ],
            "conceptName": "Type of training decision",
            "conceptUuid": "242c4718-c02a-462c-96b6-bee4423676c5",
            "conceptDataType": "Coded"
          },
          "actionType": "addDecision"
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
                  "conceptName": "Type of training",
                  "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "External"
                  ],
                  "answerConceptUuids": [
                    "f882e2b6-52e1-43cf-a45b-215e76ff05eb"
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
            "scope": "registration",
            "value": [
              "Single event"
            ],
            "conceptName": "Whether phased Decision",
            "conceptUuid": "cc5438dc-f6c3-437b-aa8f-78d176ebb3cc",
            "conceptDataType": "Coded"
          },
          "actionType": "addDecision"
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
                  "conceptName": "Whether phased",
                  "conceptUuid": "387e72d2-1ced-4032-b273-ea3ef5c5a159",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "Single event"
                  ],
                  "answerConceptUuids": [
                    "9d91df97-79f6-4e42-8d61-19d8926edd9f"
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
            "scope": "registration",
            "value": [
              "Phased event"
            ],
            "conceptName": "Whether phased Decision",
            "conceptUuid": "cc5438dc-f6c3-437b-aa8f-78d176ebb3cc",
            "conceptDataType": "Coded"
          },
          "actionType": "addDecision"
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
                  "conceptName": "Whether phased",
                  "conceptUuid": "387e72d2-1ced-4032-b273-ea3ef5c5a159",
                  "conceptDataType": "Coded"
                },
                "rhs": {
                  "type": "answerConcept",
                  "answerConceptNames": [
                    "Phased event"
                  ],
                  "answerConceptUuids": [
                    "02510e16-715b-4081-8165-af72278e9609"
                  ]
                },
                "operator": "containsAnswerConceptName"
              }
            ]
          }
        }
      ]
    }
  ]
}