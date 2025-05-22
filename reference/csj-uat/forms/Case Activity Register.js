{
  "name": "Case Activity Register",
  "uuid": "75eeda07-4ac5-44cf-941b-1cf79f750f78",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "c6bc8866-a0c9-418b-9fa0-726281b97c5e",
      "name": "Activity Register",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Was it a court hearing date?",
          "uuid": "2f65a840-fde5-49af-abd3-33bf6ef47ffa",
          "keyValues": [],
          "concept": {
            "name": "Was it a court hearing date?",
            "uuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
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
      "display": "Activity Register",
      "timed": false
    },
    {
      "uuid": "f425b4ab-28d7-4c68-b56d-130cadafb1ac",
      "name": "Details of Action Taken",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Date",
          "uuid": "62ce9163-02b4-4662-9670-1ee0f0bf0265",
          "keyValues": [],
          "concept": {
            "name": "Court Hearing Date",
            "uuid": "19152806-3f7d-462e-a3f3-2147a0f94ce8",
            "dataType": "Date",
            "answers": [],
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
  
  let selectedDate = encounter.getObservationValue("19152806-3f7d-462e-a3f3-2147a0f94ce8");
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
  visibility = condition11 ;
  if(selectedDate){
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
          "name": "Action Taken",
          "uuid": "ad7628f5-908f-41b6-812e-9d29be6e3a11",
          "keyValues": [],
          "concept": {
            "name": "Action Taken",
            "uuid": "08799bd8-e55f-4345-8c59-f5ef05e11b5d",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "name": "Next step",
          "uuid": "ef408029-c35c-4aef-a805-f9308fc5872a",
          "keyValues": [],
          "concept": {
            "name": "Next step",
            "uuid": "1d638e6a-05af-48c9-9cc3-1699198a4766",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "03ead610-1596-4a1f-b57d-07792c6e66b6"
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
          "name": "Deadline for next step",
          "uuid": "20ef1e98-c8f0-4b09-a08a-3eb59e6b609a",
          "keyValues": [],
          "concept": {
            "name": "Deadline for next step 1",
            "uuid": "3fe8e744-2225-420a-8d00-93f16cacf77b",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue("3fe8e744-2225-420a-8d00-93f16cacf77b");
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("03ead610-1596-4a1f-b57d-07792c6e66b6").matches();
  
  visibility = condition11 ;
   if (selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    
    if (selectedDate.isBefore(currentDate)) {
      validationErrors.push("Invalid date: Past dates are not allowed");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date in current stage",
          "uuid": "e4eda68c-a402-4881-8831-9908213390d3",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date in current stage",
            "uuid": "38a6f99a-2dea-44dc-b189-3811fd2c8cb1",
            "dataType": "Date",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
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
          "name": "Current stage",
          "uuid": "141e781a-a688-482f-a19b-ea779d50e8d8",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Current stage",
            "uuid": "a8406394-a266-47d5-a3f5-443b885cf830",
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
  const individual = encounter.individual;
  
  
  let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

    const autoCaptureStage = {
      'e1945ebb-19df-4055-b9c2-9fbcda959671': "Stage of Active (pre-litigation) - Criminal Prosecution/ Defence fresh filing",
      'ee698620-9b14-4379-a7de-6098c9f009b0': "Stage of Active (litigation) status - Criminal Prosecution/ Defence fresh filing",
      'c4d9571c-1f78-45d7-a415-83589595ae9d': "Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing",
      'aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8':'Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing',
      'c8bafd78-6fdf-48ac-bd54-f180b00ce46f':'Stage of Active (pre-litigation)',
      '065e005a-3203-4192-91ad-37e55480a695':'Stage of Active (litigation) status'

    }; 

 if(caseStatusDetails.length>0){
    let latestcaseStatusDetails = caseStatusDetails[0];
    let uuids = Object.keys(autoCaptureStage);
    for (let i=0; i<uuids.length;i++){
        const uuid = uuids[i];
        const observationValue = latestcaseStatusDetails.getObservationReadableValue(uuid);
        if(observationValue){
            value = observationValue;
            break;
        }
    }
    if (value == null){
        const statusOfCaseUuid = "b1927aeb-ab4c-46a6-8eff-6ccdf38f5478";
        value = latestcaseStatusDetails.getObservationReadableValue(statusOfCaseUuid);
    }
 }

  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "What happened in the court date",
          "uuid": "ef5ce998-56f5-4263-b411-3e3806092799",
          "keyValues": [],
          "concept": {
            "name": "What happened in the court date",
            "uuid": "f1e37284-3676-4fcd-a21c-a224d4c401a9",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
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
          "mandatory": true
        },
        {
          "name": "Any additional work undertaken",
          "uuid": "e6b27b36-2624-4023-a436-c86d4f0d7098",
          "keyValues": [],
          "concept": {
            "name": "Any additional work undertaken",
            "uuid": "759d449e-a4a9-4177-9185-c26de83c7784",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
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
          "mandatory": false
        },
        {
          "name": "Next date",
          "uuid": "a441c4f6-9098-4ef6-92d9-5b54f16f38e9",
          "keyValues": [],
          "concept": {
            "name": "Next date",
            "uuid": "cd8aa6fb-9277-47a5-b082-a70c76d3cc56",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue("cd8aa6fb-9277-47a5-b082-a70c76d3cc56");
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
  visibility = condition11 ;
  
  if (selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    
    if (selectedDate.isBefore(currentDate)) {
      validationErrors.push("Invalid date: Past dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Stage in next Date",
          "uuid": "b3e3bd41-2050-475f-a97b-c12fc4d270bc",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Stage in next Date",
            "uuid": "339475ca-744b-45f1-a8c7-317eda0d04e8",
            "dataType": "Text",
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
  const individual = encounter.individual;
  
   let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
    const autoCaptureStage = {
        'e1945ebb-19df-4055-b9c2-9fbcda959671': "Stage of Active (pre-litigation) - Criminal Prosecution/ Defence fresh filing",
        'ee698620-9b14-4379-a7de-6098c9f009b0': "Stage of Active (litigation) status - Criminal Prosecution/ Defence fresh filing",
        'c4d9571c-1f78-45d7-a415-83589595ae9d': "Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing",
        'aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8':'Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing',
        'c8bafd78-6fdf-48ac-bd54-f180b00ce46f':'Stage of Active (pre-litigation)',
        '065e005a-3203-4192-91ad-37e55480a695':'Stage of Active (litigation) status'
      }; 

    if(caseStatusDetails.length>0){
        let latestcaseStatusDetails = caseStatusDetails[0];
        let uuids = Object.keys(autoCaptureStage);
        for (let i=0; i<uuids.length;i++){
            const uuid = uuids[i];
            const observation = latestcaseStatusDetails.findObservation(uuid);
            if(observation && observation.getValue()){
                
                const observationValue = observation.getValue();
                let options = observation.concept.answers;
                options = _.sortBy(options, 'answerOrder');
                let answerOrder = null;
                for(let j = 0; j < options.length; j++){
                    if(observationValue == options[j].concept.uuid){
                        answerOrder = j;
                        break;
                    }
                }
                if(answerOrder !== null && (options.length - 1) != answerOrder){
                    value = options[answerOrder + 1].concept.name;
                }
                break;
            }
        }
    }

  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
  visibility = condition11 ;

  if(visibility && value == null){
    value = "There is no next stage";
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Next Step",
          "uuid": "7127cd60-4f3c-45b5-ab0b-5be57b1a1aa3",
          "keyValues": [],
          "concept": {
            "name": "Next Step",
            "uuid": "25176546-a0cb-4a59-a1b8-f927fd0106f1",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "Was it a court hearing date?",
                          "conceptUuid": "12003b39-078c-4f63-aa93-ecfb2e774557",
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
          "mandatory": true
        },
        {
          "name": "Deadline for next step",
          "uuid": "f38f395b-3f87-45d6-ada7-5227c4665a4e",
          "keyValues": [],
          "concept": {
            "name": "Deadline for next step 2",
            "uuid": "a6c6fce6-8bd4-4117-85c1-5d05efe923c4",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue("a6c6fce6-8bd4-4117-85c1-5d05efe923c4")
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("12003b39-078c-4f63-aa93-ecfb2e774557").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
  if (selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    
    if (selectedDate.isBefore(currentDate)) {
      validationErrors.push("Invalid date: Past dates are not allowed");
    }
  }

  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        }
      ],
      "display": "Details of Action Taken",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}