{
  "name": "Pregnancy Enrolment",
  "uuid": "73473142-3bc9-48f4-b70b-d54a710b01f5",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "46a8a8bc-4509-49dd-a8c0-35dfbde95b52",
      "name": "Enrolment Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Last menstrual period",
          "uuid": "dee26733-4287-4fa3-9e75-79be51905e05",
          "keyValues": [],
          "concept": {
            "name": "Last menstrual period",
            "uuid": "2664c7be-7467-4304-811f-d9d20dcd7eae",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("2664c7be-7467-4304-811f-d9d20dcd7eae").greaterThan(moment(programEnrolment.enrolmentDateTime).toDate()).matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be in the future");  
}

  let lmpDate = programEnrolment.getObservationValue("Last menstrual period");  
  
  if( moment(lmpDate).format('YYYY-MM-DD') == moment(programEnrolment.enrolmentDateTime).format('YYYY-MM-DD') ){
    validationErrors.push("Date cannot be equal to today");  
}
  
  let beforeDate = moment(programEnrolment.enrolmentDateTime).subtract(365,'d');
  
  if(moment(lmpDate).isBefore(beforeDate)){
      validationErrors.push("Date (Limit cant be before 365 days from the date of enrollment)");  
  }
  

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Estimated date of delivery",
          "uuid": "c6370417-0efc-44f8-9508-9b40df014097",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Estimated date of delivery",
            "uuid": "a4b30cac-9a00-4b76-b6ba-1f752a6b3dd6",
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
  let lastDateOfMenstruation = programEnrolment.getObservationValue("Last menstrual period");

    value = moment(lastDateOfMenstruation).add(280,'days').toDate();
     
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Gravida (the number of pregnancies the woman has had)",
          "uuid": "f1e594fd-7fd9-4329-93df-cd117a3e6065",
          "keyValues": [],
          "concept": {
            "name": "Gravida (the number of pregnancies the woman has had)",
            "uuid": "c49442e4-539f-4d73-9590-0deb8c8dd3b9",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 9,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "How many children do you have (alive)",
          "uuid": "711f1a8d-e621-4637-a7e9-4de1aeb5f5ae",
          "keyValues": [],
          "concept": {
            "name": "How many children do you have (alive)",
            "uuid": "ef008c21-de31-4727-80a6-5f5797b1e658",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("c49442e4-539f-4d73-9590-0deb8c8dd3b9").defined.matches();
  
  visibility = condition11 ;
  
  const value = programEnrolment.getObservationReadableValue("How many children do you have (alive)");
  
  if(value){
      const gravida = programEnrolment.getObservationReadableValue("Gravida (the number of pregnancies the woman has had)");
      
      if(value>gravida){
        validationErrors.push("Alive children should be not greater than Gravida");
      }
      
  }
  
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Birth Order",
          "uuid": "16b7fca8-c333-4a30-b8d6-76d35d8370bc",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Birth Order",
            "uuid": "1f3a4971-0ecc-4ead-9c33-2bdd8af839d7",
            "dataType": "Numeric",
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
  
  const live = programEnrolment.getObservationReadableValue("How many children do you have (alive)") || 0;
  
  value = live + 1; 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Weight",
          "uuid": "21f6950f-09ac-4f66-81f9-0b2510f88350",
          "keyValues": [],
          "concept": {
            "name": "Weight of women",
            "uuid": "3981ddb0-30a3-43d2-9564-16ae9cc0e25e",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 30,
            "highAbsolute": 90,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Height",
          "uuid": "2b0518dd-5bff-4f54-ad1f-072dea2e77a1",
          "keyValues": [],
          "concept": {
            "name": "Height of women",
            "uuid": "a0059121-6bd2-414b-bcdc-a64bf27bc364",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 100,
            "highAbsolute": 250,
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "BMI",
          "uuid": "48918883-890a-4ca5-acc0-56f6724cd997",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "BMI",
            "uuid": "02e4238a-443e-4951-8553-aa0cd7de8476",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const formElement = params.formElement;
  
  let height = programEnrolment.findObservation("Height of women");
  let weight = programEnrolment.findObservation("Weight of women");
        height = height && height.getValue();
        weight = weight && weight.getValue();
        let value = '';
  
  if (_.isFinite(weight) && _.isFinite(height)) {
         value = ruleServiceLibraryInterfaceForSharingModules.common.calculateBMI(weight, height);
       }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, value);  
},
          "mandatory": false
        },
        {
          "name": "Red Flag (refer MCP card)",
          "uuid": "ff87e325-fdb7-4831-86b6-4bcf38eeab6c",
          "keyValues": [],
          "concept": {
            "name": "Red Flag (refer MCP card)",
            "uuid": "72f8785c-f064-4549-ab45-47defa40f5fb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "abnormal": true,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
        },
        {
          "name": "Is the beneficiary registered in the AWC?",
          "uuid": "3a1f9c69-a155-42f8-b0c1-b312a7d91a97",
          "keyValues": [],
          "concept": {
            "name": "Is the beneficiary registered in the AWC?",
            "uuid": "8d8a4d13-515a-4f3c-ac7e-04d22fd4782a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "In which month pregnency got registered in AWC?",
          "uuid": "2e9c48b1-3330-4f9f-b279-559b616eab9d",
          "keyValues": [],
          "concept": {
            "name": "In which month pregnency got registered in AWC?",
            "uuid": "eda9f097-75a5-41cd-aa0b-701b83291af4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "9",
                "uuid": "9193f52b-7dd6-470e-bdda-e3f65c106ba3",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "7",
                "uuid": "87f2dbf5-2cbf-40b9-ae7e-4f6bcefab048",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "1",
                "uuid": "b6925d31-1905-4976-844d-9ddf6e66ac6f",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "10",
                "uuid": "6f942aec-2c03-4892-a092-758fa972efaf",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "4",
                "uuid": "1806b9fd-d09a-46ce-96fb-a7c287e403fb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "2",
                "uuid": "f7faddcb-ec2f-4f65-a3df-854f56eaf797",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "8",
                "uuid": "e7adffa2-3113-45c3-9d4a-87361a82e9f4",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "3",
                "uuid": "e725fb67-6f2e-4736-9e06-9069994cc567",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "6",
                "uuid": "6512bb84-e486-420b-99cd-1579eee057b8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "5",
                "uuid": "f6529847-0e5a-4f75-ba11-8ec827f6caf0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("8d8a4d13-515a-4f3c-ac7e-04d22fd4782a").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "conceptName": "Is the beneficiary registered in the AWC?",
                          "conceptUuid": "8d8a4d13-515a-4f3c-ac7e-04d22fd4782a",
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
          "mandatory": false
        },
        {
          "name": "Bank account opened",
          "uuid": "61a4b6ac-4a58-4ba4-b417-e724f975b96c",
          "keyValues": [],
          "concept": {
            "name": "Bank account opened",
            "uuid": "a98c96b0-aac0-45b4-814e-0e058fed1714",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Mamata registration",
          "uuid": "ebb9ea86-4f60-4968-b491-0e4ffc246e66",
          "keyValues": [],
          "concept": {
            "name": "Mamata registration",
            "uuid": "58aedb01-e4de-4145-9635-4f272689e796",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Not eligible",
                "uuid": "2770f98b-a6cd-49b9-9af8-dff69a7d868b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Eligible but not registered",
                "uuid": "b271ff21-9b79-4cfc-b688-195400f38ad0",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Eligible and registered",
                "uuid": "410133b2-16aa-410d-a144-37be4484934b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("58aedb01-e4de-4145-9635-4f272689e796").containsAnswerConceptName("410133b2-16aa-410d-a144-37be4484934b").matches();
  
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
                          "conceptName": "Mamata registration",
                          "conceptUuid": "58aedb01-e4de-4145-9635-4f272689e796",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Eligible and registered"
                          ],
                          "answerConceptUuids": [
                            "410133b2-16aa-410d-a144-37be4484934b"
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
          "name": "Reasons for not enrolling for MAMATA",
          "uuid": "e67d3c4a-08b0-448f-a05f-c35ad25c9b66",
          "keyValues": [],
          "concept": {
            "name": "Reasons for not enrolling for MAMTA",
            "uuid": "ca3fbd8e-f3c2-4250-8e65-71ec2377798a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yet to be enrolled",
                "uuid": "c6edc721-c3bf-46f6-a89a-cbbd73e0b4fd",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "caf114c0-b81a-4606-8157-73144c8d3b1f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "No Aadhar Card",
                "uuid": "fd73b4ea-f08a-44bf-891e-da5265750b4a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No bank account",
                "uuid": "78e0865c-cf4a-4f1c-b845-7f51bd6f46f8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("58aedb01-e4de-4145-9635-4f272689e796").containsAnswerConceptName("b271ff21-9b79-4cfc-b688-195400f38ad0").matches();
  
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
                          "conceptName": "Mamata registration",
                          "conceptUuid": "58aedb01-e4de-4145-9635-4f272689e796",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Eligible but not registered"
                          ],
                          "answerConceptUuids": [
                            "b271ff21-9b79-4cfc-b688-195400f38ad0"
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
          "name": "Please specify other reason for not enrolling",
          "uuid": "99ffcd48-d45c-4d4a-bf0f-75f65f982a7d",
          "keyValues": [],
          "concept": {
            "name": "Please specify other reason for not enrolling",
            "uuid": "97b80bc9-5f22-4b49-a947-93c5bd4cf5ba",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("ca3fbd8e-f3c2-4250-8e65-71ec2377798a").containsAnswerConceptName("caf114c0-b81a-4606-8157-73144c8d3b1f").matches();
  
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
                          "conceptName": "Reasons for not enrolling for MAMTA",
                          "conceptUuid": "ca3fbd8e-f3c2-4250-8e65-71ec2377798a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "caf114c0-b81a-4606-8157-73144c8d3b1f"
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
          "name": "Any history of pregnancy complications",
          "uuid": "85ddc484-1cbd-4e99-92f2-3e9a2b0fbb95",
          "keyValues": [],
          "concept": {
            "name": "Any history of pregnancy complications",
            "uuid": "26dcba9f-73b8-4e3a-87c9-de0aa1f928ec",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Postpartum Hemorrhage",
                "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Still birth",
                "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "No history of pregnancy complications",
                "uuid": "f792a851-7163-4600-be9e-65a98a071b6e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              },
              {
                "name": "Cesarean Section (LSCS)",
                "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "HIV Positive",
                "uuid": "2ba29223-f406-4100-807c-25ca973cd8e3",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Premature Birth",
                "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Congenital malformation",
                "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Eclampsia",
                "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Miscarriage/ Abortion",
                "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Obstructed labour",
                "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Last Child death within 1 year",
                "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "4924d428-46a7-4ccf-8a03-3bf02aa09226",
          "keyValues": [],
          "concept": {
            "name": "Pregnancy induced morbidity conditions list",
            "uuid": "12d99265-c769-4236-aff5-fcba73976396",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No pre-morbidity conditions",
                "uuid": "56bf6a03-bb0f-4d90-b975-9ae03cd67b70",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              },
              {
                "name": "Diabetes/ Gestational Diabetes",
                "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Malaria Positive",
                "uuid": "681a29be-6127-451a-9617-ac62a242d082",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Tuberculosis",
                "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hypothyroidism",
                "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Heart conditions",
                "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Syphillis",
                "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Pre-eclampsia",
                "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Thalassemia",
                "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Asthma",
                "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Sickle cell anemia",
                "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Hypertension",
                "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other pre-morbidity conditions",
                "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Birth Spacing (time between two pregnancies in months)",
          "uuid": "b9a57249-3002-46c8-ba4c-6077cca37f4e",
          "keyValues": [],
          "concept": {
            "name": "Birth Spacing",
            "uuid": "bcfa101a-cd20-4287-9f8a-bcecb92b9d95",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 600,
            "active": true
          },
          "displayOrder": 19,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("1f3a4971-0ecc-4ead-9c33-2bdd8af839d7").equals(1).matches();
  
  visibility = !(condition11 );
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
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
                          "conceptName": "Birth Order",
                          "conceptUuid": "1f3a4971-0ecc-4ead-9c33-2bdd8af839d7",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 1
                        },
                        "operator": "equals"
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
          "name": "Smoking/ alcohol consumption",
          "uuid": "5d142a44-ab96-41ca-86a7-3e6c3b4258af",
          "keyValues": [],
          "concept": {
            "name": "Smoking/ alcohol consumption",
            "uuid": "4439c8b2-c6bc-4955-97b8-cd8f9aeaa02a",
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
          "displayOrder": 20,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Mamata scheme amount received",
          "uuid": "9b2dc1f4-7fb5-4610-ab4b-974c7b038bad",
          "keyValues": [],
          "concept": {
            "name": "Mamata scheme amount received",
            "uuid": "5c3712c1-f570-4ce6-b5ed-c91e9088ef98",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Don't know",
                "uuid": "54f6160b-0c27-4bf7-b2e1-31f8f2fec972",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 21,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("a98c96b0-aac0-45b4-814e-0e058fed1714").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "scope": "enrolment",
                          "conceptName": "Bank account opened",
                          "conceptUuid": "a98c96b0-aac0-45b4-814e-0e058fed1714",
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
        },
        {
          "name": "Is the child registered under poshan tracker?",
          "uuid": "05272260-d2b5-4edd-9fea-eb278cc4a1a5",
          "keyValues": [],
          "concept": {
            "name": "Is the child registered under poshan tracker?",
            "uuid": "48fe0fb6-31b9-402f-9671-07554570ce81",
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
          "displayOrder": 22,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Enrolment Details",
      "timed": false
    }
  ],
  "decisionRule": ""use strict";
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const decisions = params.decisions;
    const enrolmentDecisions = [];
    const _ = imports.lodash;
    const complicationsBuilder = new imports.rulesConfig.complicationsBuilder({
        programEnrolment: programEnrolment,
        complicationsConcept: "High risk condition"
    });

    const highRiskConditions = {
        "Age is less than 18 years": new imports.rulesConfig.RuleCondition({programEnrolment}).when.ageInYears.lessThan(18).matches(),
        "Age is greater than 35 years": new imports.rulesConfig.RuleCondition({programEnrolment}).when.ageInYears.greaterThanOrEqualTo(35).matches(),
        "Height is less than 140cm": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("a0059121-6bd2-414b-bcdc-a64bf27bc364").lessThan(140).matches(),
        "Gravida is more than or equal to 4": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("c49442e4-539f-4d73-9590-0deb8c8dd3b9").greaterThanOrEqualTo(4).matches(),
        "Inter-pregnancy interval is less than 24 months": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("bcfa101a-cd20-4287-9f8a-bcecb92b9d95").lessThan(24).matches(),
        "BMI less than 18.5": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("02e4238a-443e-4951-8553-aa0cd7de8476").lessThan(18.5).matches(),
        "Gravida 3 and Para 2": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("c49442e4-539f-4d73-9590-0deb8c8dd3b9").equals(3).and.when.valueInEnrolment("ef008c21-de31-4727-80a6-5f5797b1e658").greaterThan(2).matches(),

        "Obstetric History of Miscarriage/ Abortion": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("4c977b82-1405-4037-8cf2-b89597d42cfe").matches(),
        "Obstetric History of Still birth": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("8c2f1e75-cf54-4761-887f-b06e4ffa6463").matches(),
        "Obstetric History of Postpartum Hemorrhage": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("74f75a6f-1859-4f63-9d23-13fa882b4153").matches(),
        "Obstetric History of Eclampsia": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("ec01498d-db7d-4e3d-bd05-d7fcf106c634").matches(),
        "Obstetric History of Obstructed labour": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("a2755462-a9a5-4094-a99e-2961beb9ee78").matches(),
        "Obstetric History of Premature Birth": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0").matches(),
        "Obstetric History of Cesarean Section (LSCS)": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("0642557d-1bac-4de9-996e-63925329f3a1").matches(),
        "Obstetric History of Congenital malformation": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("1e167769-8cce-4e46-9ad9-cad964a1f048").matches(),
        "Last Child death within 1 year": new imports.rulesConfig.RuleCondition({programEnrolment}).when.valueInEnrolment("26dcba9f-73b8-4e3a-87c9-de0aa1f928ec").containsAnswerConceptName("df107391-3e4a-4dc4-9536-692fe4d61a85").matches()

    };

    let clinicalHighRiskValues = [];

    _.forEach(highRiskConditions, (isTrue, condition) => {
        if (isTrue && !clinicalHighRiskValues.includes(condition)) {
            clinicalHighRiskValues.push(condition);
        }
    });

    const existingHighRiskValues = programEnrolment.getObservationReadableValue('9a7f284b-251d-459b-97d9-929ed280b3d3') || [];
    const filteredExistingHighRiskValues = _.filter(existingHighRiskValues, value => !_.includes(_.keys(highRiskConditions), value));
    clinicalHighRiskValues = clinicalHighRiskValues.concat(filteredExistingHighRiskValues);

    enrolmentDecisions.push({name: "High risk condition", value: clinicalHighRiskValues});
    enrolmentDecisions.push({name: "To be monitored by QRT", value: "No"});

    const isGeographicalHighRisk = programEnrolment.findLatestObservationInEntireEnrolment('Pregnancy geographically high risk');
    const hasClinicalConditions = programEnrolment.findLatestObservationInEntireEnrolment('Did the ANM recommend for a medical facility intervention?');

    if (isGeographicalHighRisk) {
    
       decisions.enrolmentDecisions.push({
           name: "Pregnancy geographically high risk",
            value: isGeographicalHighRisk.getReadableValue()
         
       });
    }
    if (hasClinicalConditions) {
        decisions.enrolmentDecisions.push({name: "Clinically high risk", value: "Yes"});
    }

    decisions.enrolmentDecisions.push(...enrolmentDecisions);
    //decisions.encounterDecisions.push(...encounterDecisions);
    //decisions.registrationDecisions.push(...registrationDecisions);
    return decisions;
}",
  "visitScheduleRule": ""use strict";
({params, imports}) => {
    const programEnrolment = params.entity;
    const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
        programEnrolment
    });
    const moment = imports.moment;
    //moment.tz.setDefault("Asia/Kolkata");
    const scheduledOrCompletedEncountersOfType = (type) => {
      const data = programEnrolment.encounters.filter((enc)=> enc.encounterType.name === type && enc.voided == false && enc.cancelDateTime == null);
      return data;
    }
    
     const condition0 = !programEnrolment.programExitDateTime;
     const condition1 = scheduledOrCompletedEncountersOfType('ANC').length == 0;
     let deliveryEncounter = scheduledOrCompletedEncountersOfType('Delivery');
     const condition2 = deliveryEncounter.length == 0;
     const condition3 = deliveryEncounter.filter(enc=>enc.encounterDateTime != null).length == 0;
     
     if(condition0 && condition1 && condition3){
        let earliestDate = moment(programEnrolment.enrolmentDateTime).add(1,'M').startOf('M').add('6','H').toDate();
        scheduleBuilder.add({
            name: 'ANC',
            encounterType: 'ANC',
            earliestDate: earliestDate,
            maxDate: moment(earliestDate).endOf('month').toDate()
        });
     }
     //&& condition2
     if(condition0 && condition3){ 
        let edd = programEnrolment.getObservationReadableValue("Estimated date of delivery");
        let earliestDate = moment(edd).subtract(90,'days').toDate();
        let maxDate = moment(edd).add(2,'days').toDate();
         scheduleBuilder.add({
            name: 'Delivery',
            encounterType: 'Delivery',
            earliestDate,maxDate
        });
     }
  

    return scheduleBuilder.getAllUnique('name');
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": [
    {
      "name": "Pregnancy geographically high risk",
      "uuid": "96b167e1-2d98-40b9-af04-8e4f64f9999a",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Yes",
          "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "No",
          "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "active": true
        }
      ],
      "active": true
    },
    {
      "name": "To be monitored by QRT",
      "uuid": "be0ab05f-b0f3-43ec-b598-fdde0679104a",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Yes",
          "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "active": true
        },
        {
          "name": "No",
          "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    },
    {
      "name": "High risk condition",
      "uuid": "9a7f284b-251d-459b-97d9-929ed280b3d3",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Tuberculosis",
          "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
          "dataType": "NA",
          "answers": [],
          "order": 38,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Still birth",
          "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
          "dataType": "NA",
          "answers": [],
          "order": 16,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida is more than or equal to 4",
          "uuid": "5a33dde5-f5f4-49ff-acc1-3d7ede26dc52",
          "dataType": "NA",
          "answers": [],
          "order": 4,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of miscarriage, still birth etc.",
          "uuid": "6fb9e48a-a0c7-4c33-b428-4fe4177470c9",
          "dataType": "NA",
          "answers": [],
          "order": 10,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inter-pregnancy interval is less than 24 months",
          "uuid": "cf07926b-09b6-4c9e-91a6-ee1dbfc3efbe",
          "dataType": "NA",
          "answers": [],
          "order": 11,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Premature Birth",
          "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
          "dataType": "NA",
          "answers": [],
          "order": 20,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Moderate anemia",
          "uuid": "4f926120-e3ab-4a15-8468-99f09ba9ff74",
          "dataType": "NA",
          "answers": [],
          "order": 34,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Miscarriage/ Abortion",
          "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
          "dataType": "NA",
          "answers": [],
          "order": 15,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Diabetes/ Gestational Diabetes",
          "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
          "dataType": "NA",
          "answers": [],
          "order": 48,
          "active": true
        },
        {
          "name": "Obstetric History of Premature Birth",
          "uuid": "e0917073-6611-44ad-b8e8-a47d57930792",
          "dataType": "NA",
          "answers": [],
          "order": 29,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Thalassemia",
          "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
          "dataType": "NA",
          "answers": [],
          "order": 42,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140cm",
          "uuid": "3f36ab23-e475-48d9-9bf9-556cab575303",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Heart conditions",
          "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
          "dataType": "NA",
          "answers": [],
          "order": 43,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Sickle cell anemia",
          "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
          "dataType": "NA",
          "answers": [],
          "order": 41,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Mild anemia",
          "uuid": "9fc70140-e56b-4fb3-9261-2831f0e439d3",
          "dataType": "NA",
          "answers": [],
          "order": 35,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Cesarean Section (LSCS)",
          "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
          "dataType": "NA",
          "answers": [],
          "order": 21,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is less than 18 years",
          "uuid": "3daae4b4-0f28-461b-ad6c-040ca1b1fa28",
          "dataType": "NA",
          "answers": [],
          "order": 8,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Last Child death within 1 year",
          "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
          "dataType": "NA",
          "answers": [],
          "order": 32,
          "active": true
        },
        {
          "name": "HB is less than 7 g/dL",
          "uuid": "6e277f82-5822-4ac3-8a5a-d1ad21a79c00",
          "dataType": "NA",
          "answers": [],
          "order": 6,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida 3 and Para 2",
          "uuid": "07cbfb35-3ebd-4844-9195-bea41587388f",
          "dataType": "NA",
          "answers": [],
          "order": 13,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Eclampsia",
          "uuid": "15fd0a58-9ce5-4a9e-b25f-bf4f4abe49b2",
          "dataType": "NA",
          "answers": [],
          "order": 27,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Syphillis",
          "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
          "dataType": "NA",
          "answers": [],
          "order": 45,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Geographically high risk",
          "uuid": "3e21a6f4-6727-44b3-9b7e-148ce9ad77fd",
          "dataType": "NA",
          "answers": [],
          "order": 7,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Congenital malformation",
          "uuid": "085bd394-7475-4cc7-8833-4b85242171f7",
          "dataType": "NA",
          "answers": [],
          "order": 31,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is greater than 35 years",
          "uuid": "ad71b3c0-4d95-4f2b-892c-75ab40cf6442",
          "dataType": "NA",
          "answers": [],
          "order": 5,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Postpartum Hemorrhage",
          "uuid": "af353a25-7c79-4f1b-9fe8-63b52a88387b",
          "dataType": "NA",
          "answers": [],
          "order": 26,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pre-eclampsia",
          "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
          "dataType": "NA",
          "answers": [],
          "order": 40,
          "abnormal": true,
          "active": true
        },
        {
          "name": "BMI less than 18.5",
          "uuid": "83c690ab-e319-49ff-aaa4-1eccef57337c",
          "dataType": "NA",
          "answers": [],
          "order": 12,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Hypothyroidism",
          "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
          "dataType": "NA",
          "answers": [],
          "order": 44,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Eclampsia",
          "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
          "dataType": "NA",
          "answers": [],
          "order": 18,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inadequate Weight Gain during Pregnancy",
          "uuid": "c844e580-e8a8-4251-b989-09bad1f4b015",
          "dataType": "NA",
          "answers": [],
          "order": 36,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Congenital malformation",
          "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
          "dataType": "NA",
          "answers": [],
          "order": 22,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age at marriage is less than 19 years",
          "uuid": "dd109240-9077-4aee-a807-a396328cfd98",
          "dataType": "NA",
          "answers": [],
          "order": 3,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Weight is less than 37kg",
          "uuid": "ee723b88-6094-40b2-8db2-16368ae66f4c",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of HIV Positive",
          "uuid": "76107c0b-2c76-4f83-8b11-47bc326c5ad3",
          "dataType": "NA",
          "answers": [],
          "order": 47,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Miscarriage/ Abortion",
          "uuid": "5e9af579-773d-4de0-acf0-4c6b08e080da",
          "dataType": "NA",
          "answers": [],
          "order": 24,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severe anemia",
          "uuid": "922fa8df-c11f-4c3f-bd2c-290079c19cd2",
          "dataType": "NA",
          "answers": [],
          "order": 33,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140 cm",
          "uuid": "91381321-7638-470f-b1e8-f1148af205a7",
          "dataType": "NA",
          "answers": [],
          "order": 9,
          "active": true
        },
        {
          "name": "Asthma",
          "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
          "dataType": "NA",
          "answers": [],
          "order": 39,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Hypertension",
          "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
          "dataType": "NA",
          "answers": [],
          "order": 23,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Still birth",
          "uuid": "cf5e4912-c013-4913-9d8e-05029b187e8a",
          "dataType": "NA",
          "answers": [],
          "order": 25,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Other pre-morbidity conditions",
          "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
          "dataType": "NA",
          "answers": [],
          "order": 46,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "7f2d5f3e-1542-4ace-acb1-b8b27d818df3",
          "dataType": "NA",
          "answers": [],
          "order": 14,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Cesarean Section (LSCS)",
          "uuid": "30893aeb-73d4-4844-80bd-eb2d8ff0aa93",
          "dataType": "NA",
          "answers": [],
          "order": 30,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of Obstructed labour",
          "uuid": "f47509b2-8c9f-496c-9843-a7f5c4859197",
          "dataType": "NA",
          "answers": [],
          "order": 28,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstructed labour",
          "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
          "dataType": "NA",
          "answers": [],
          "order": 19,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Red flag as per MCP card",
          "uuid": "b9b4ac92-2aea-43d0-9d1c-bc7fd5026c44",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Postpartum Hemorrhage",
          "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
          "dataType": "NA",
          "answers": [],
          "order": 17,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    },
    {
      "name": "Clinically high risk",
      "uuid": "959cc421-380b-409b-8007-270c35d1e543",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Congenital malformation",
          "uuid": "1e167769-8cce-4e46-9ad9-cad964a1f048",
          "dataType": "NA",
          "answers": [],
          "order": 24,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Premature Birth",
          "uuid": "62a9a0f0-e2e5-4e0d-aee2-cd1704ea90e0",
          "dataType": "NA",
          "answers": [],
          "order": 21,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Mild anemia",
          "uuid": "9fc70140-e56b-4fb3-9261-2831f0e439d3",
          "dataType": "NA",
          "answers": [],
          "order": 15,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Postpartum Hemorrhage",
          "uuid": "74f75a6f-1859-4f63-9d23-13fa882b4153",
          "dataType": "NA",
          "answers": [],
          "order": 18,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida 3 and Para 2",
          "uuid": "07cbfb35-3ebd-4844-9195-bea41587388f",
          "dataType": "NA",
          "answers": [],
          "order": 29,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severe anemia",
          "uuid": "922fa8df-c11f-4c3f-bd2c-290079c19cd2",
          "dataType": "NA",
          "answers": [],
          "order": 13,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inadequate Weight Gain during Pregnancy",
          "uuid": "c844e580-e8a8-4251-b989-09bad1f4b015",
          "dataType": "NA",
          "answers": [],
          "order": 28,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida is more than or equal to 4",
          "uuid": "5a33dde5-f5f4-49ff-acc1-3d7ede26dc52",
          "dataType": "NA",
          "answers": [],
          "order": 10,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstructed labour",
          "uuid": "a2755462-a9a5-4094-a99e-2961beb9ee78",
          "dataType": "NA",
          "answers": [],
          "order": 20,
          "abnormal": true,
          "active": true
        },
        {
          "name": "BMI less than 18.5",
          "uuid": "83c690ab-e319-49ff-aaa4-1eccef57337c",
          "dataType": "NA",
          "answers": [],
          "order": 27,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Yes",
          "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
          "dataType": "NA",
          "answers": [],
          "order": 30,
          "abnormal": true,
          "active": true
        },
        {
          "name": "No",
          "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
          "dataType": "NA",
          "answers": [],
          "order": 31,
          "active": true
        },
        {
          "name": "Height Less than 147 cm",
          "uuid": "fa9c831b-3532-4f9e-bc53-3282a2bb8428",
          "dataType": "NA",
          "answers": [],
          "order": 4,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Obstetric History of miscarriage, still birth etc.",
          "uuid": "6fb9e48a-a0c7-4c33-b428-4fe4177470c9",
          "dataType": "NA",
          "answers": [],
          "order": 11,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Last Child death within 1 year",
          "uuid": "df107391-3e4a-4dc4-9536-692fe4d61a85",
          "dataType": "NA",
          "answers": [],
          "order": 25,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Miscarriage/ Abortion",
          "uuid": "4c977b82-1405-4037-8cf2-b89597d42cfe",
          "dataType": "NA",
          "answers": [],
          "order": 16,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is greater than 35 years",
          "uuid": "ad71b3c0-4d95-4f2b-892c-75ab40cf6442",
          "dataType": "NA",
          "answers": [],
          "order": 8,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Height is less than 140 cm",
          "uuid": "91381321-7638-470f-b1e8-f1148af205a7",
          "dataType": "NA",
          "answers": [],
          "order": 9,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Eclampsia",
          "uuid": "ec01498d-db7d-4e3d-bd05-d7fcf106c634",
          "dataType": "NA",
          "answers": [],
          "order": 19,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Inter-pregnancy interval is less than 24 months",
          "uuid": "cf07926b-09b6-4c9e-91a6-ee1dbfc3efbe",
          "dataType": "NA",
          "answers": [],
          "order": 12,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Weight Less than 37 kg",
          "uuid": "ddabf8cd-4b21-4d4b-a1bb-2be6554a6946",
          "dataType": "NA",
          "answers": [],
          "order": 6,
          "abnormal": true,
          "active": true
        },
        {
          "name": "HB Less than 7.0 g/dl",
          "uuid": "dc50229d-1fd6-4497-942b-ffb7789c3dce",
          "dataType": "NA",
          "answers": [],
          "order": 3,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age at marriage Less than 19 years",
          "uuid": "790970df-5ea2-4e67-bbf2-0f0cd53c5107",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age greater than 35 yrs",
          "uuid": "2833e464-d721-4d45-96cb-0cabff149e91",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Age is less than 18 years",
          "uuid": "3daae4b4-0f28-461b-ad6c-040ca1b1fa28",
          "dataType": "NA",
          "answers": [],
          "order": 7,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Less than 18 years marriage",
          "uuid": "887a2300-9a2a-4ff0-bb5c-5d1f69b96d10",
          "dataType": "NA",
          "answers": [],
          "order": 5,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Still birth",
          "uuid": "8c2f1e75-cf54-4761-887f-b06e4ffa6463",
          "dataType": "NA",
          "answers": [],
          "order": 17,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Cesarean Section (LSCS)",
          "uuid": "0642557d-1bac-4de9-996e-63925329f3a1",
          "dataType": "NA",
          "answers": [],
          "order": 23,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions",
          "uuid": "7f2d5f3e-1542-4ace-acb1-b8b27d818df3",
          "dataType": "NA",
          "answers": [],
          "order": 22,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Pregnancy induced morbidity conditions list",
          "uuid": "12d99265-c769-4236-aff5-fcba73976396",
          "dataType": "Coded",
          "answers": [
            {
              "name": "No pre-morbidity conditions",
              "uuid": "56bf6a03-bb0f-4d90-b975-9ae03cd67b70",
              "dataType": "NA",
              "answers": [],
              "order": 11,
              "unique": true,
              "active": true
            },
            {
              "name": "Diabetes/ Gestational Diabetes",
              "uuid": "9f6c206e-f04a-4a2a-b3ae-78edbffb0f62",
              "dataType": "NA",
              "answers": [],
              "order": 1,
              "active": true
            },
            {
              "name": "Malaria Positive",
              "uuid": "681a29be-6127-451a-9617-ac62a242d082",
              "dataType": "NA",
              "answers": [],
              "order": 12,
              "active": true
            },
            {
              "name": "Tuberculosis",
              "uuid": "34f5f1a8-8a03-47d0-a91b-2a0fe959fc10",
              "dataType": "NA",
              "answers": [],
              "order": 2,
              "active": true
            },
            {
              "name": "Hypothyroidism",
              "uuid": "1e527e8b-76ef-426d-aee7-a9002dc031d0",
              "dataType": "NA",
              "answers": [],
              "order": 8,
              "active": true
            },
            {
              "name": "Heart conditions",
              "uuid": "dea0c584-32a3-493a-be95-66588e01181a",
              "dataType": "NA",
              "answers": [],
              "order": 7,
              "active": true
            },
            {
              "name": "Syphillis",
              "uuid": "d9414d88-e0cf-4ffe-9cba-151d6879b773",
              "dataType": "NA",
              "answers": [],
              "order": 9,
              "active": true
            },
            {
              "name": "Pre-eclampsia",
              "uuid": "b95305a1-1831-49b7-a5a6-b4cb458a5d6f",
              "dataType": "NA",
              "answers": [],
              "order": 4,
              "active": true
            },
            {
              "name": "Thalassemia",
              "uuid": "83168c77-2a4d-4650-9ead-5c42f1c7f0c4",
              "dataType": "NA",
              "answers": [],
              "order": 6,
              "active": true
            },
            {
              "name": "Asthma",
              "uuid": "11228d39-49f1-4a44-9bbf-6c673c208326",
              "dataType": "NA",
              "answers": [],
              "order": 3,
              "active": true
            },
            {
              "name": "Sickle cell anemia",
              "uuid": "4b0c2486-20ac-458b-b89a-28603715aeb2",
              "dataType": "NA",
              "answers": [],
              "order": 5,
              "active": true
            },
            {
              "name": "Hypertension",
              "uuid": "621462ed-23da-4b73-b590-4af8ccf34b45",
              "dataType": "NA",
              "answers": [],
              "order": 0,
              "active": true
            },
            {
              "name": "Other pre-morbidity conditions",
              "uuid": "9f771423-6205-42db-8428-293ac0ad9b13",
              "dataType": "NA",
              "answers": [],
              "order": 10,
              "active": true
            }
          ],
          "order": 26,
          "active": true
        },
        {
          "name": "Moderate anemia",
          "uuid": "4f926120-e3ab-4a15-8468-99f09ba9ff74",
          "dataType": "NA",
          "answers": [],
          "order": 14,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Gravida more than equal to 3",
          "uuid": "8acebfb6-637d-4dcb-aba8-6df52e8a7655",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    }
  ]
}