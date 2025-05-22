{
  "name": "Training Legal Fund",
  "uuid": "e14431a2-307c-4fa5-8d4f-ffdf18bc0129",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "4c0a59f3-16f6-47a1-ae10-01c4e18f4913",
      "name": "Legal Fund",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Claim Legal Fund",
          "uuid": "b1a972bb-4e05-4478-8f69-4082e4014cd1",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "LEGAL FUND ENCOUNTER",
            "uuid": "22a96d47-8121-455b-b5e0-8fa7c5da1c4e",
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
          "name": "Details",
          "uuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Details - Training Legal Fund",
            "uuid": "f960e93c-8571-4498-97ba-b3f14b806e3f",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Date of Receipt",
          "uuid": "72443174-a26e-4453-b309-cc2a663b7ac1",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Receipt - Training Legal Fund",
            "uuid": "9cc2569b-b6ee-4b9a-814c-13e7ac1f9b3d",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;

    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const questionGroupIndex = params.questionGroupIndex;

    const questionGroup = encounter.getObservationValue("f960e93c-8571-4498-97ba-b3f14b806e3f");
    if(questionGroup){
        const currentQuestionGroup = questionGroup[questionGroupIndex];
        

        if(currentQuestionGroup){
            let dateofReceipt = currentQuestionGroup.findObservationByConceptUUID("9cc2569b-b6ee-4b9a-814c-13e7ac1f9b3d");
        
            if(dateofReceipt){
                const currentDate = moment().startOf("day");
                dateofReceipt = moment(dateofReceipt.getValue()).startOf("day");
                if (dateofReceipt.isAfter(currentDate)) {
                    validationErrors.push("Invalid date: Future dates are not allowed");
                }
            }
            else{
                value = moment().startOf("day");
            }
        }
        else{
            value = moment().startOf("day");
        }
    }
    else{
        value = moment().startOf("day");
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "ba661ced-d86a-4919-b114-2e46d5acbe7a",
          "keyValues": [],
          "concept": {
            "name": "Amount - Training Legal",
            "uuid": "54ea2f70-0443-459e-94cc-7ab3ca7f7e0a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("54ea2f70-0443-459e-94cc-7ab3ca7f7e0a", "f960e93c-8571-4498-97ba-b3f14b806e3f", params.questionGroupIndex).lessThan(0).matches();
  
  if(condition11 ){
    validationErrors.push("Amount should be greater than or equal to 0");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Amount should be greater than or equal to 0"
                  },
                  "actionType": "validationError"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Amount - Training Legal",
                          "conceptUuid": "54ea2f70-0443-459e-94cc-7ab3ca7f7e0a",
                          "conceptDataType": "Numeric",
                          "parentConceptUuid": "f960e93c-8571-4498-97ba-b3f14b806e3f"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 0
                        },
                        "operator": "lessThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "mandatory": true
        },
        {
          "name": "Whether uploading FILE or PHOTO",
          "uuid": "ce0af8d7-4d7b-46a4-9f2a-18f418eb5902",
          "keyValues": [],
          "concept": {
            "name": "Whether uploading FILE or PHOTO",
            "uuid": "2cb53da9-9d23-474e-920c-fe6f99520ca6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "PHOTO",
                "uuid": "11a4f46e-5c13-4dee-9462-9e1758a72f1d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "FILE",
                "uuid": "7bceada8-146b-44dd-b333-39a90f2c59f5",
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
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "mandatory": true
        },
        {
          "name": "Upload File",
          "uuid": "660337bf-fe89-490f-80bf-dca8926e203a",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "File",
            "uuid": "ba34d47d-55b9-465f-ac5d-46742a95078a",
            "dataType": "File",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("2cb53da9-9d23-474e-920c-fe6f99520ca6", "f960e93c-8571-4498-97ba-b3f14b806e3f", params.questionGroupIndex).containsAnswerConceptName("7bceada8-146b-44dd-b333-39a90f2c59f5").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Whether uploading FILE or PHOTO",
                          "conceptUuid": "2cb53da9-9d23-474e-920c-fe6f99520ca6",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "f960e93c-8571-4498-97ba-b3f14b806e3f"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "FILE"
                          ],
                          "answerConceptUuids": [
                            "7bceada8-146b-44dd-b333-39a90f2c59f5"
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
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "mandatory": true
        },
        {
          "name": "Upload Photos",
          "uuid": "1b7b1ab4-4e65-4328-9880-8141c4cbb4d8",
          "keyValues": [],
          "concept": {
            "name": "photos",
            "uuid": "cbf24d32-9b0a-4a9a-bf01-93c774ec5112",
            "dataType": "Image",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("2cb53da9-9d23-474e-920c-fe6f99520ca6", "f960e93c-8571-4498-97ba-b3f14b806e3f", params.questionGroupIndex).containsAnswerConceptName("11a4f46e-5c13-4dee-9462-9e1758a72f1d").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Whether uploading FILE or PHOTO",
                          "conceptUuid": "2cb53da9-9d23-474e-920c-fe6f99520ca6",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "f960e93c-8571-4498-97ba-b3f14b806e3f"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "PHOTO"
                          ],
                          "answerConceptUuids": [
                            "11a4f46e-5c13-4dee-9462-9e1758a72f1d"
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
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "mandatory": true
        },
        {
          "name": "Upload receipt",
          "uuid": "401e0132-5aba-4cc1-b161-4524792360a8",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload receipt - Training Legal Fund (voided~269135)",
            "uuid": "e575e1d8-c1d0-41ef-8f5a-b826bb096f39",
            "dataType": "File",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "0d0995dd-301d-44b6-94fb-fb92d603a559",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of Receipt",
          "uuid": "169a1822-f9a2-44cb-93b9-a101eb460b1e",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt - Legal Fund",
            "uuid": "d2869f1e-4e6c-4b5c-815d-1d96a08889cd",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;

    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const questionGroupIndex = params.questionGroupIndex;

    const questionGroup = encounter.getObservationValue("22a96d47-8121-455b-b5e0-8fa7c5da1c4e");
    console.log("\
\
\
questionGroup---------SID>",questionGroup);
    if(questionGroup){
        const currentQuestionGroup = questionGroup[questionGroupIndex];
        console.log("currentQuestionGroup--------->",currentQuestionGroup);

        let dateofReceipt = currentQuestionGroup.getObservationValue("d2869f1e-4e6c-4b5c-815d-1d96a08889cd");
      console.log("dateofReceipt--------->",dateofReceipt);
      
        console.log('Today----------->', moment().startOf("day"));

        if(!dateofReceipt){
            value = moment().startOf("day");
            dateofReceipt = moment().startOf("day");
        }
        else{
            const currentDate = moment().startOf("day");
            dateofReceipt = moment(dateofReceipt).startOf("day");
            if (dateofReceipt.isAfter(currentDate)) {
                validationErrors.push("Invalid date: Future dates are not allowed");
            }
        }
    }
    else{
        console.log("Inside Else");
        value = moment().startOf("day");
    }
    
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "b1a972bb-4e05-4478-8f69-4082e4014cd1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "994b3281-4568-4dc1-99f6-e202dd1df658",
          "keyValues": [],
          "concept": {
            "name": "Amount - Legal Fund",
            "uuid": "498f42be-21dc-4b03-a2ed-5761d327583f",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("d2869f1e-4e6c-4b5c-815d-1d96a08889cd", "22a96d47-8121-455b-b5e0-8fa7c5da1c4e", params.questionGroupIndex).defined.matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Date of receipt - Legal Fund",
                          "conceptUuid": "d2869f1e-4e6c-4b5c-815d-1d96a08889cd",
                          "conceptDataType": "Date",
                          "parentConceptUuid": "22a96d47-8121-455b-b5e0-8fa7c5da1c4e"
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
          "parentFormElementUuid": "b1a972bb-4e05-4478-8f69-4082e4014cd1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Stage at which taken",
          "uuid": "e5f70755-b0e2-4be1-b7b9-2b42d4d89aaf",
          "keyValues": [],
          "concept": {
            "name": "Stage at which taken - Legal Fund",
            "uuid": "02a93e4e-1ce1-42d0-9c08-89baf75ea6d5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "parentFormElementUuid": "b1a972bb-4e05-4478-8f69-4082e4014cd1",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Upload receipt",
          "uuid": "e543e3c8-282b-4506-bc6a-03229a78303c",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload receipt - Legal Fund",
            "uuid": "46c5bfa8-4d88-4b69-b7c1-5b1b78ae99a3",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "parentFormElementUuid": "b1a972bb-4e05-4478-8f69-4082e4014cd1",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Legal Fund",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}