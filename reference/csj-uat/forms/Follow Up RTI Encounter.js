{
  "name": "Follow Up RTI Encounter",
  "uuid": "e5412ac7-d73e-43d8-8570-c0e0615b01ac",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "80ba5e29-727b-4bf9-b722-46cb2aa36277",
      "name": "RTI application",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "RTI application",
          "uuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "keyValues": [],
          "concept": {
            "name": "RTI Application",
            "uuid": "6e3d3694-5bd6-4b43-b230-62d11c0c9587",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Details of first appeal",
          "uuid": "eb88ec4d-cb4a-4ef7-b070-94bafccf850d",
          "keyValues": [],
          "concept": {
            "name": "Details of first appeal",
            "uuid": "e8bc597b-6fba-412f-b274-d996bcaaa9cf",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility =false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let documentDetails = programEncounter.findGroupedObservation("6e3d3694-5bd6-4b43-b230-62d11c0c9587");
  console.log('---->',documentDetails);
  if(documentDetails && documentDetails.length > 0){
    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let firstAppeal = currentQuestionGroup.findObservationByConceptUUID("5059873a-c363-4d68-bb0b-81fcaadd23d8");
    if(firstAppeal ==='Yes'){
    visibility = true;
    }
}
}  
return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
};

",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Date of posting first appeal",
          "uuid": "93aa7053-e0fd-4f40-80fc-41c162d109e8",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of posting first Appeal",
            "uuid": "e8746ec8-24d3-4e85-853d-bc9924e27627",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "eb88ec4d-cb4a-4ef7-b070-94bafccf850d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Status of info after first appeal",
          "uuid": "070c0306-f7cc-44ed-afb4-c74017adfc63",
          "keyValues": [],
          "concept": {
            "name": "Status of info after first Appeal",
            "uuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Info Rejected",
                "uuid": "9e8668b3-9a1c-4dbd-be80-af60bad49a3f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Info not received",
                "uuid": "f30d61ae-4164-4df5-a9f1-ecd80673ff41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Info Received",
                "uuid": "122315be-1e8a-4303-80c6-20ee68d4ac39",
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
          "parentFormElementUuid": "eb88ec4d-cb4a-4ef7-b070-94bafccf850d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of response",
          "uuid": "5408c459-5847-48c2-83c6-52aebb5e1e6f",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of response",
            "uuid": "dc965e77-f3f3-4310-a3d0-65bcb90019ce",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("a71996fb-f4e4-4ca4-b369-7f621db08174", "e8bc597b-6fba-412f-b274-d996bcaaa9cf", params.questionGroupIndex).containsAnswerConceptName("122315be-1e8a-4303-80c6-20ee68d4ac39").matches();
  
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
                          "conceptName": "Status of info after first Appeal",
                          "conceptUuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "e8bc597b-6fba-412f-b274-d996bcaaa9cf"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Received"
                          ],
                          "answerConceptUuids": [
                            "122315be-1e8a-4303-80c6-20ee68d4ac39"
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
          "parentFormElementUuid": "eb88ec4d-cb4a-4ef7-b070-94bafccf850d",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Date of rejection (if rejection)",
          "uuid": "fa47a068-fc13-4a91-b7c4-e4ec0d07b94d",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of Rejection (if rejection)",
            "uuid": "49eb27e4-317e-4238-a195-79c3e4479f18",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("a71996fb-f4e4-4ca4-b369-7f621db08174", "e8bc597b-6fba-412f-b274-d996bcaaa9cf", params.questionGroupIndex).containsAnswerConceptName("9e8668b3-9a1c-4dbd-be80-af60bad49a3f").matches();
  
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
                          "conceptName": "Status of info after first Appeal",
                          "conceptUuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "e8bc597b-6fba-412f-b274-d996bcaaa9cf"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Rejected"
                          ],
                          "answerConceptUuids": [
                            "9e8668b3-9a1c-4dbd-be80-af60bad49a3f"
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
          "parentFormElementUuid": "eb88ec4d-cb4a-4ef7-b070-94bafccf850d",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "If RTI  filed, date of posting RTI",
          "uuid": "5169374f-f7a3-43a4-9e1a-12ea10c6f4a8",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "If RTI  filed,date of posting RTI",
            "uuid": "d4241c92-c5b0-4288-a40f-535b3f92a2fd",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Applicant Name",
          "uuid": "d9039b0e-93d0-4d85-b956-a416e7b7c7f3",
          "keyValues": [],
          "concept": {
            "name": "Applicant name",
            "uuid": "9f6d7459-4c84-4ba6-9be0-5eb30c25f19f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Subject matter of RTI",
          "uuid": "48e72270-e4be-40b3-bdd2-cde883bc0d02",
          "keyValues": [],
          "concept": {
            "name": "Subject matter Of RTI",
            "uuid": "a38a22c4-f931-482e-9c41-cbbe62bfedaf",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Posted to (Authority)",
          "uuid": "2d8bded4-62b0-483b-b04c-eee60bdde11c",
          "keyValues": [],
          "concept": {
            "name": "Posted to(Authority)",
            "uuid": "fed76ff7-6164-4390-b06f-b27ba9c1fb71",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of receipt by authority",
          "uuid": "883148d3-d663-424b-8770-99603457f855",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt by Authority",
            "uuid": "135fa3f5-af03-43aa-8cc7-26bb42ff7ce0",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Status at the end of 30 days",
          "uuid": "b5c0b6b7-8b2e-4939-86ff-46e197a195d2",
          "keyValues": [],
          "concept": {
            "name": "Status at the end of 30 days",
            "uuid": "d15cc266-573b-47fd-a459-7393b50dae48",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Info Received",
                "uuid": "122315be-1e8a-4303-80c6-20ee68d4ac39",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Info Rejected",
                "uuid": "9e8668b3-9a1c-4dbd-be80-af60bad49a3f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Info not received",
                "uuid": "f30d61ae-4164-4df5-a9f1-ecd80673ff41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of response",
          "uuid": "2825d1ac-00ce-4635-8213-acff21877ddb",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Response",
            "uuid": "4e7dd23b-2cd5-4139-bf64-4b039d0eafbf",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Date of rejection (if rejection)",
          "uuid": "49af354c-9fff-4798-bef4-eda46404937b",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Rejection (if rejection)",
            "uuid": "18f76c6e-63db-4100-97e2-ffadae5b5b1f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Do you want to file a first appeal?",
          "uuid": "9e2866ff-ef9a-49c6-afa7-1720e24c7efe",
          "keyValues": [],
          "concept": {
            "name": "Do you want to file a first Appeal?",
            "uuid": "5059873a-c363-4d68-bb0b-81fcaadd23d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "parentFormElementUuid": "fc6d1415-6b7f-4113-b49d-9c280f4912f1",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "RTI application",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "6724831e-0b99-47f2-8254-7c8d3bb36829",
      "name": "RTI application",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "If RTI  filed, date of posting RTI",
          "uuid": "53602518-1230-4c87-aaca-c75759a05d92",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of posting RTI",
            "uuid": "73275424-67a0-466a-9ab9-e39e2548dcd9",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Applicant Name",
          "uuid": "c23d9c18-7c38-414f-afa0-c7f2bdb835ac",
          "keyValues": [],
          "concept": {
            "name": "Applicant Name",
            "uuid": "2fb481ce-48a1-4be2-80a3-3f3b388b4980",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Subject matter of RTI",
          "uuid": "ae8b2802-7d16-454b-95b9-dac1874ee915",
          "keyValues": [],
          "concept": {
            "name": "Subject matter Of RTI",
            "uuid": "a38a22c4-f931-482e-9c41-cbbe62bfedaf",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Posted to (Authority)",
          "uuid": "90a5ae71-8eb8-4b83-96e2-e2f0632007e4",
          "keyValues": [],
          "concept": {
            "name": "Posted to (Authority)",
            "uuid": "6a471749-c1d3-4047-ab38-e9cb5e709d92",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of receipt by authority",
          "uuid": "757b9555-cbd4-4d36-8af1-a75fc27b274c",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt by Authority",
            "uuid": "135fa3f5-af03-43aa-8cc7-26bb42ff7ce0",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Status at the end of 30 days",
          "uuid": "555891ee-a6e8-45b1-aaab-9c5edba1b6d8",
          "keyValues": [],
          "concept": {
            "name": "Status at the end of 30 days",
            "uuid": "d15cc266-573b-47fd-a459-7393b50dae48",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Info Received",
                "uuid": "122315be-1e8a-4303-80c6-20ee68d4ac39",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Info Rejected",
                "uuid": "9e8668b3-9a1c-4dbd-be80-af60bad49a3f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Info not received",
                "uuid": "f30d61ae-4164-4df5-a9f1-ecd80673ff41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of response",
          "uuid": "c0ab2a03-1fee-4db1-9ea1-7f8b5ed4319c",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of response",
            "uuid": "dc965e77-f3f3-4310-a3d0-65bcb90019ce",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("d15cc266-573b-47fd-a459-7393b50dae48").containsAnswerConceptName("122315be-1e8a-4303-80c6-20ee68d4ac39").matches();
  
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
                          "conceptName": "Status at the end of 30 days",
                          "conceptUuid": "d15cc266-573b-47fd-a459-7393b50dae48",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Received"
                          ],
                          "answerConceptUuids": [
                            "122315be-1e8a-4303-80c6-20ee68d4ac39"
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
          "name": "Date of rejection (if rejection)",
          "uuid": "0c84bba0-3122-4d6e-992c-9f160e70694a",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of Rejection (if rejection)",
            "uuid": "49eb27e4-317e-4238-a195-79c3e4479f18",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("d15cc266-573b-47fd-a459-7393b50dae48").containsAnswerConceptName("9e8668b3-9a1c-4dbd-be80-af60bad49a3f").matches();
  
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
                          "conceptName": "Status at the end of 30 days",
                          "conceptUuid": "d15cc266-573b-47fd-a459-7393b50dae48",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Rejected"
                          ],
                          "answerConceptUuids": [
                            "9e8668b3-9a1c-4dbd-be80-af60bad49a3f"
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
          "name": "Do you want to file a first appeal?",
          "uuid": "b5c04048-f42e-4389-a7bd-b2b695fcb2f5",
          "keyValues": [],
          "concept": {
            "name": "Do you want to file a first Appeal?",
            "uuid": "5059873a-c363-4d68-bb0b-81fcaadd23d8",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "RTI application",
      "timed": false
    },
    {
      "uuid": "f04d0352-d304-4ccd-89fc-6a364572d6ea",
      "name": "Details of first appeal",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Date of posting first appeal",
          "uuid": "b829a56e-cc7b-4c75-8335-eb07aeca788f",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of posting first Appeal",
            "uuid": "e8746ec8-24d3-4e85-853d-bc9924e27627",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Status of info after first appeal",
          "uuid": "08e2612b-0555-4efa-a34a-68a314835efb",
          "keyValues": [],
          "concept": {
            "name": "Status of info after first Appeal",
            "uuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Info Rejected",
                "uuid": "9e8668b3-9a1c-4dbd-be80-af60bad49a3f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Info not received",
                "uuid": "f30d61ae-4164-4df5-a9f1-ecd80673ff41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Info Received",
                "uuid": "122315be-1e8a-4303-80c6-20ee68d4ac39",
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
          "name": "Date of response",
          "uuid": "ac11eeb4-c40f-4258-aba0-c71f80d430ad",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Response",
            "uuid": "4e7dd23b-2cd5-4139-bf64-4b039d0eafbf",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("a71996fb-f4e4-4ca4-b369-7f621db08174").containsAnswerConceptName("122315be-1e8a-4303-80c6-20ee68d4ac39").matches();
  
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
                          "conceptName": "Status of info after first Appeal",
                          "conceptUuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Received"
                          ],
                          "answerConceptUuids": [
                            "122315be-1e8a-4303-80c6-20ee68d4ac39"
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
          "name": "Date of rejection (if rejection)",
          "uuid": "e6042cae-f4f9-441f-b682-ef9d58213c08",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Rejection (if rejection)",
            "uuid": "18f76c6e-63db-4100-97e2-ffadae5b5b1f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("a71996fb-f4e4-4ca4-b369-7f621db08174").containsAnswerConceptName("9e8668b3-9a1c-4dbd-be80-af60bad49a3f").matches();
  
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
                          "conceptName": "Status of info after first Appeal",
                          "conceptUuid": "a71996fb-f4e4-4ca4-b369-7f621db08174",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Info Rejected"
                          ],
                          "answerConceptUuids": [
                            "9e8668b3-9a1c-4dbd-be80-af60bad49a3f"
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
        }
      ],
      "rule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("5059873a-c363-4d68-bb0b-81fcaadd23d8").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                      "conceptName": "Do you want to file a first Appeal?",
                      "conceptUuid": "5059873a-c363-4d68-bb0b-81fcaadd23d8",
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
      "display": "Details of first appeal",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}