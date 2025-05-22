{
  "name": "Influencing State Registration",
  "uuid": "0c41f206-3155-4f9d-b228-27ad25581ec6",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "4303b36c-c0ec-4085-9038-5afe674d40aa",
      "name": "Theme Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Theme of Influencing State",
          "uuid": "9654bc85-f854-487b-ba02-215faba2dc9d",
          "keyValues": [],
          "concept": {
            "name": "Theme of Influencing State",
            "uuid": "4d56f4c2-0138-46fe-9698-690214c508c2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Consumer Rights",
                "uuid": "096d5dcf-4e69-4c17-93e4-90d54fc8798e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Social Boycott",
                "uuid": "af8c13be-ced0-424c-b5bb-0e8e12b3bb29",
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
                "order": 11,
                "active": true
              },
              {
                "name": "RTI / PSGA / Identity docs / Social security schemes",
                "uuid": "fcac20f8-4047-4c38-98cd-12d63a079f33",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Other Theme",
                "uuid": "d078e659-268a-4a9c-9c37-e0969c41a2b2",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Procedural Law",
                "uuid": "a00bcd0f-f3d7-451e-a0e3-b533df414cad",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "FRA",
                "uuid": "5822931f-f7db-4749-870a-b748c96a523c",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "SDG",
                "uuid": "678c2251-cd6e-4c4a-b171-74a4b41f055c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Constitutional Values",
                "uuid": "a8a62dd9-ccf8-44a9-81dc-0c23c97af551",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Rights of labourers",
                "uuid": "c6bdc92d-ab29-4489-9efe-32770f596657",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Financial Fraud",
                "uuid": "c22d37aa-7891-4302-8779-422617f0fc24",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Dalit Adivasi atyachar ke khilaaf adhikaar",
                "uuid": "a893e76f-b188-4da3-aec6-0f9b1e1d4665",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Prisoners Rights",
                "uuid": "6c1ac0dc-df20-4454-acb9-35f59c672319",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Legal aid system",
                "uuid": "6a987748-8ef7-40d8-8cd0-aed8455f3244",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Minority Rights",
                "uuid": "06709008-bebd-4ca9-a04e-0423131eba7c",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other Theme, please specify",
          "uuid": "4a058ba2-7851-40ac-a87a-22ac6134c9b9",
          "keyValues": [],
          "concept": {
            "name": "Other Theme, please specify",
            "uuid": "2c9e223e-e346-447b-a818-583f7ac138d3",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4d56f4c2-0138-46fe-9698-690214c508c2").containsAnswerConceptName("d078e659-268a-4a9c-9c37-e0969c41a2b2").matches();
  
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
                          "conceptName": "Theme of Influencing State",
                          "conceptUuid": "4d56f4c2-0138-46fe-9698-690214c508c2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Theme"
                          ],
                          "answerConceptUuids": [
                            "d078e659-268a-4a9c-9c37-e0969c41a2b2"
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
          "name": "Topic of Influencing State",
          "uuid": "a92d861e-6477-4d6e-85c0-25fca65a3b97",
          "keyValues": [],
          "concept": {
            "name": "Topic of Influencing State",
            "uuid": "f1f8c346-d1f2-448a-91b2-039c5041636c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Level of engagement",
          "uuid": "01a261f2-eb15-4008-b8f0-67feffe8ab43",
          "keyValues": [],
          "concept": {
            "name": "Level of engagement",
            "uuid": "72f6e813-b0be-4725-9e07-88f1576f5e5f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Block",
                "uuid": "ca023cde-3a5b-41d7-b976-153e1ad6e507",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "State",
                "uuid": "e90674d8-bac8-4201-9eaa-e00255c306d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "District",
                "uuid": "2cf59003-be1f-45a6-9050-a852b9b75656",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Central",
                "uuid": "a84954e8-99e7-4a72-b0a0-00bf0372a263",
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
          "mandatory": true
        },
        {
          "name": "Nature of engagement",
          "uuid": "905d49c0-abdf-4cba-8926-30339ac19469",
          "keyValues": [],
          "concept": {
            "name": "Nature of engagement",
            "uuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Litigants Forum",
                "uuid": "3a892e04-7a12-4cf6-a519-301a07cd0eac",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Independent RTI",
                "uuid": "acb37b0d-4732-45b2-8fa3-ac20fc6fd233",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other nature of engagements",
                "uuid": "b1629cf7-beef-4308-8cb2-ef761d0ee766",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Letter",
                "uuid": "266cb87a-87f9-419d-a572-0ec7744118a1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Consultation",
                "uuid": "dc02da1b-b2a7-40e4-a679-d429ea685408",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Committee Appointment",
                "uuid": "38eaf606-9128-469a-a4bb-e585547c080a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "PIL",
                "uuid": "04f01759-725d-4995-85a1-d628c0a4176a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const programEncounter = params.entity;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let enrolments = individual.enrolments;
  let isIndividualVoided = individual.voided === false
  if(isIndividualVoided){
  let hasEnrolmentInLetter = enrolments.some(enl =>enl.program.name === 'Letter Status');
  let hasEnrolmentInRTI = enrolments.some(enl=> enl.program.name === 'RTI Status');
  let hasEnrolmentInPIL = enrolments.some(enl=> enl.program.name === 'PIL Status');
  }

  let selectedOption = programEncounter.getObservationReadableValue('f304d6c0-dc78-4373-b584-b91d269d0835');


  if(selectedOption && (hasEnrolmentInLetter || hasEnrolmentInRTI || hasEnrolmentInPIL)){
    if(!(selectedOption === 'Letter' && hasEnrolmentInLetter)) {
        validationErrors.push("This field cannot be edited");

    }
    else if (!(selectedOption === 'Independent RTI' && hasEnrolmentInRTI)) {
        validationErrors.push("This field cannot be edited");


    }
    else if (!(selectedOption === 'PIL' && hasEnrolmentInPIL)) {
        validationErrors.push("This field cannot be edited");

    }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other nature of engagement, please specify",
          "uuid": "65e2cde1-453b-49ec-be79-44b3c4f5dadc",
          "keyValues": [],
          "concept": {
            "name": "Other nature of engagement, please specify",
            "uuid": "c7724e4c-38eb-41c0-aea5-b0aa978b0e85",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("b1629cf7-beef-4308-8cb2-ef761d0ee766").matches();
  
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
                          "conceptName": "Nature of engagement",
                          "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other nature of engagements"
                          ],
                          "answerConceptUuids": [
                            "b1629cf7-beef-4308-8cb2-ef761d0ee766"
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
      "display": "Theme Details",
      "timed": false
    },
    {
      "uuid": "54a21e2a-f710-4008-9bd0-9ce22617bf75",
      "name": "Letter Details",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Date of Posting",
          "uuid": "79823a94-1676-40fc-8d05-aa5b975222ea",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Posting",
            "uuid": "3541ec56-6082-47dd-8761-2abdfbe30399",
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
          "uuid": "ef7dfe03-320b-4f70-ba16-5af5c9d53b02",
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
          "name": "Subject Matter of Letter",
          "uuid": "f233fa86-4229-44ec-aecb-2edbeef90b33",
          "keyValues": [],
          "concept": {
            "name": "Subject Matter of Letter",
            "uuid": "0e7ba322-974f-49f0-9969-325dd8d976b7",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Posted to (Name of Authority)",
          "uuid": "1d737fee-3904-451b-accc-9fc25d182ffc",
          "keyValues": [],
          "concept": {
            "name": "Posted to (Name of Authority)",
            "uuid": "7e756501-1ec8-4b5c-a2a2-38862321c0c3",
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
          "uuid": "6a718eb8-e7ff-4b9f-a9df-9ec50c35e0bb",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt by authority",
            "uuid": "cb3d1e32-3cfe-4cc2-a601-d0e76a5efa57",
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
  
  let dateOfPosting = programEncounter.getObservationValue('3541ec56-6082-47dd-8761-2abdfbe30399');
  let receiptDate = programEncounter.getObservationValue('cb3d1e32-3cfe-4cc2-a601-d0e76a5efa57');

    if(receiptDate) {
      dateOfPosting = moment(dateOfPosting).startOf('day');
      receiptDate = moment(receiptDate).startOf('day');
      if(dateOfPosting.isAfter(receiptDate)){
          validationErrors.push("Invalid date: Date of receipt should be more than Date of posting");
      }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": false
        },
        {
          "name": "Date of response",
          "uuid": "86449784-bc71-4884-a994-6cad9b2c5913",
          "keyValues": [],
          "concept": {
            "name": "Date of response",
            "uuid": "37c1036c-9cc8-4174-9e90-57043950fda3",
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
  
  let receiptDate = programEncounter.getObservationValue('cb3d1e32-3cfe-4cc2-a601-d0e76a5efa57');
  let dateOfResponse = programEncounter.getObservationValue('37c1036c-9cc8-4174-9e90-57043950fda3');

    if(dateOfResponse) {
      receiptDate = moment(receiptDate).startOf('day');
      dateOfResponse = moment(dateOfResponse).startOf('day');
      if(receiptDate.isAfter(dateOfResponse)){
          validationErrors.push("Invalid date: Date of response Should be more than date of receipt");
      }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("266cb87a-87f9-419d-a572-0ec7744118a1").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Letter"
                      ],
                      "answerConceptUuids": [
                        "266cb87a-87f9-419d-a572-0ec7744118a1"
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
      "display": "Letter Details",
      "timed": false
    },
    {
      "uuid": "25462af8-0500-417f-a2c4-700d20487b88",
      "name": "RTI Application",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "If RTI  filed, date of posting RTI",
          "uuid": "913ecab0-46b5-410b-ac90-3a8c10f9e2a0",
          "keyValues": [],
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
          "uuid": "43864c64-e7b1-4180-8d8b-0127bef0a12b",
          "keyValues": [],
          "concept": {
            "name": "Applicant's Name",
            "uuid": "21ea8e1a-25d0-4437-9daf-f9918adc6b50",
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
          "uuid": "34b4fa66-4787-4fe9-be36-8ae84658fdb7",
          "keyValues": [],
          "concept": {
            "name": "Subject matter of RTI",
            "uuid": "82770467-811e-4cf3-90e1-36f25e3563b4",
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
          "uuid": "9571146d-d01e-411d-940c-361db1e1686a",
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
          "uuid": "82b3c38b-16e5-4c39-990d-8582f91dce27",
          "keyValues": [],
          "concept": {
            "name": "Receipt date by authority",
            "uuid": "62f4d20f-f4b5-4ecb-bf43-de1b7943c19d",
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
          "uuid": "ea6a8f5f-9141-4cab-860c-870ff9e7a169",
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
          "uuid": "ef7c6ada-b2cb-47d3-afdb-ef6cc6076230",
          "keyValues": [],
          "concept": {
            "name": "Response Date",
            "uuid": "6c9ac221-ccc4-47b4-8a6f-693fdd24a40f",
            "dataType": "Date",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d15cc266-573b-47fd-a459-7393b50dae48").containsAnswerConceptName("122315be-1e8a-4303-80c6-20ee68d4ac39").matches();
  
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
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Date of rejection (if rejection)",
          "uuid": "7e86441a-8569-4fac-ada8-eb409b9217df",
          "keyValues": [],
          "concept": {
            "name": "Date of rejection (if rejection)",
            "uuid": "1f94babe-3842-4cf2-b0c7-5ce72449dc00",
            "dataType": "Date",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d15cc266-573b-47fd-a459-7393b50dae48").containsAnswerConceptName("9e8668b3-9a1c-4dbd-be80-af60bad49a3f").matches();
  
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
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Do you want to file a first appeal?",
          "uuid": "09570c79-1844-4fb0-a14d-fc7dabb83dd1",
          "keyValues": [],
          "concept": {
            "name": "Do you want to file a first appeal?",
            "uuid": "4f36132b-c38a-4f8b-8112-307ac263b260",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("acb37b0d-4732-45b2-8fa3-ac20fc6fd233").matches();
  
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
                          "conceptName": "Nature of engagement",
                          "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Independent RTI"
                          ],
                          "answerConceptUuids": [
                            "acb37b0d-4732-45b2-8fa3-ac20fc6fd233"
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
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("acb37b0d-4732-45b2-8fa3-ac20fc6fd233").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Independent RTI"
                      ],
                      "answerConceptUuids": [
                        "acb37b0d-4732-45b2-8fa3-ac20fc6fd233"
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
      "display": "RTI Application",
      "timed": false
    },
    {
      "uuid": "b1c78420-813f-42b8-83d2-47fa45d791f7",
      "name": "Details of first appeal",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Date of posting first appeal",
          "uuid": "ed343a38-58cf-4795-9fc8-f520561c74c1",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of posting first appeal",
            "uuid": "c3f858ca-3e7a-405e-86b2-5faa1b74c7af",
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
          "uuid": "812025a4-4b77-48d6-bef9-215852301269",
          "keyValues": [],
          "concept": {
            "name": "Status of info after first appeal",
            "uuid": "4bd63e2e-1816-4960-99e3-0089d4d685d5",
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
                "name": "Info not received",
                "uuid": "f30d61ae-4164-4df5-a9f1-ecd80673ff41",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Info Rejected",
                "uuid": "9e8668b3-9a1c-4dbd-be80-af60bad49a3f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "uuid": "dbd9da0b-7b76-45b4-bf3a-296cf08eab74",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of response - First Appeal",
            "uuid": "58bde924-ca0f-4acd-b01c-6b26c72332bf",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4bd63e2e-1816-4960-99e3-0089d4d685d5").containsAnswerConceptName("122315be-1e8a-4303-80c6-20ee68d4ac39").matches();
  
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
                          "conceptName": "Status of info after first appeal",
                          "conceptUuid": "4bd63e2e-1816-4960-99e3-0089d4d685d5",
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
          "uuid": "11c30c0c-5f2e-47eb-b3ff-84f5650be4d4",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of rejection - First appeal",
            "uuid": "a7b28efa-e33a-4cbb-a62a-89be38d547c2",
            "dataType": "Date",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4bd63e2e-1816-4960-99e3-0089d4d685d5").containsAnswerConceptName("9e8668b3-9a1c-4dbd-be80-af60bad49a3f").matches();
  
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
                          "conceptName": "Status of info after first appeal",
                          "conceptUuid": "4bd63e2e-1816-4960-99e3-0089d4d685d5",
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
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("acb37b0d-4732-45b2-8fa3-ac20fc6fd233").and.when.valueInRegistration("4f36132b-c38a-4f8b-8112-307ac263b260").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Independent RTI"
                      ],
                      "answerConceptUuids": [
                        "acb37b0d-4732-45b2-8fa3-ac20fc6fd233"
                      ]
                    },
                    "operator": "containsAnswerConceptName"
                  },
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "registration",
                      "conceptName": "Do you want to file a first appeal?",
                      "conceptUuid": "4f36132b-c38a-4f8b-8112-307ac263b260",
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
    },
    {
      "uuid": "33dac309-cf69-4fed-a2ee-e9d036db3e68",
      "name": "Committee Appointment Details",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Whether appointee is team member or volunteer?",
          "uuid": "666e539e-5a09-40c9-b5b9-31ca0fe3a140",
          "keyValues": [],
          "concept": {
            "name": "Whether appointee is team member or volunteer?",
            "uuid": "e8078410-5e03-426e-8e94-392289b3cd1c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Team Member",
                "uuid": "609b04ff-5a17-4a86-9c92-5a4791f16ee2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "e3a24b7f-89b6-4d84-b58f-0c3cfc4c6b77",
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
          "name": "Name of appointee",
          "uuid": "b011afe7-cff3-4354-a9de-75530b8ecaf4",
          "keyValues": [],
          "concept": {
            "name": "Name of appointee",
            "uuid": "8daf3b6a-5359-41f8-87aa-55e2257ce461",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of Appointment",
          "uuid": "4994c167-67c5-4f7d-a69f-98f9a3c300ff",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of Appointment",
            "uuid": "b9a8dd11-2037-4bae-9ba3-f5393f8bb3b8",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Post",
          "uuid": "c0926c66-e047-4b7f-a4b5-7eb4f8846b47",
          "keyValues": [],
          "concept": {
            "name": "Post",
            "uuid": "8f0a05ae-1339-4338-83ad-366cb8cca451",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Committee / organisation",
          "uuid": "cb29b5cb-e1b2-4213-b012-aa44c0e3fa43",
          "keyValues": [],
          "concept": {
            "name": "Committee / organisation",
            "uuid": "38c10ef1-117b-4960-9203-d7c573e8b5dc",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Under which Act / Scheme",
          "uuid": "43e748fe-f8cd-4d32-b7a2-d9c7cf0d5c9b",
          "keyValues": [],
          "concept": {
            "name": "Under which Act / Scheme",
            "uuid": "539b0f77-9180-412b-8bba-3380a340c14f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Upload appointment letter photo",
          "uuid": "bfbbdb4c-0b25-446f-8294-44d1ec948f19",
          "keyValues": [],
          "concept": {
            "name": "Upload appointment letter photo",
            "uuid": "02cb43e1-3830-49e8-8f1f-dd89fb582dd1",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Upload appointment letter document",
          "uuid": "00080c09-1982-4d4a-b975-4d7aeaff27a0",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload appointment letter document",
            "uuid": "64b4105f-6aff-4cb2-9483-a09d61286266",
            "dataType": "File",
            "answers": [],
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
  
  let uploadFile = individual.getObservationValue("64b4105f-6aff-4cb2-9483-a09d61286266");
  let uploadImage =  individual.getObservationValue("02cb43e1-3830-49e8-8f1f-dd89fb582dd1");


    if(uploadFile == null && uploadImage == null){
        validationErrors.push('Please upload either image or file');
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("38eaf606-9128-469a-a4bb-e585547c080a").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Committee Appointment"
                      ],
                      "answerConceptUuids": [
                        "38eaf606-9128-469a-a4bb-e585547c080a"
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
      "display": "Committee Appointment Details",
      "timed": false
    },
    {
      "uuid": "275b5424-4be0-45f0-877d-3fbfeafac93c",
      "name": "Consultation Details",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "In collaboration with",
          "uuid": "3840b4f8-f93f-4267-bb1c-beb55c03fd9c",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Name of the collaborator",
          "uuid": "90b9082a-b65f-4b3f-b76d-84dcf235c0c3",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Collaborator Name",
            "uuid": "9fd7af9f-19ad-457a-b82b-44e8af3ea819",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Name of the collaborator",
          "uuid": "bfd14949-9236-4db6-a557-b49a56922a99",
          "keyValues": [],
          "concept": {
            "name": "Name of Collaborator",
            "uuid": "a01fa414-42a3-4ed5-92bf-4335d7396c62",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "90b9082a-b65f-4b3f-b76d-84dcf235c0c3",
          "mandatory": true
        },
        {
          "name": "Other collaborator",
          "uuid": "311dab05-f53a-4a33-ac7f-68b69c16d753",
          "keyValues": [],
          "concept": {
            "name": "Other collaborator  - Consultation (voided~269719)",
            "uuid": "1bfff38e-4478-4413-8e38-0bbb74fadeee",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Name of the collaborator",
          "uuid": "6d64d953-df24-44b7-a1cc-579ec3ed252e",
          "keyValues": [],
          "concept": {
            "name": "Name of the collaborator",
            "uuid": "2f186a93-f038-4d99-9e63-38838e5dd8e5",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Participants",
          "uuid": "7adf104b-011e-4de4-a481-30d1b53162e2",
          "keyValues": [],
          "concept": {
            "name": "Participants",
            "uuid": "79100f4e-0783-4d9f-82e1-705c84757103",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Govt department",
                "uuid": "0982f0f3-3bcd-4968-b94f-397d98cfa7a2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
                "name": "Law Students",
                "uuid": "36604e58-b32d-4d07-99c8-bf8b47dffef4",
                "dataType": "NA",
                "answers": [],
                "order": 4,
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
                "name": "NGO CSO",
                "uuid": "c624c263-fcfe-4c78-af6b-a39e74173e4b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Lawyers",
                "uuid": "729ec032-d9c7-4081-bb2d-49c2f081dc86",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Designations of important government functionaries who attended",
          "uuid": "fca6f3d2-48fa-4879-a0d3-feadeaa0fdc2",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Designations of important government functionaries who attended - QG",
            "uuid": "3f0d161f-9abf-4322-b7d1-b3cc354ec718",
            "dataType": "QuestionGroup",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Designations of important government functionaries who attended",
          "uuid": "52f6501a-76f7-4b34-abfd-21910ecd9d8d",
          "keyValues": [],
          "concept": {
            "name": "Designations of important government functionaries who attended",
            "uuid": "804dda21-2aee-4513-bd02-033f8961eabc",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "fca6f3d2-48fa-4879-a0d3-feadeaa0fdc2",
          "mandatory": true
        },
        {
          "name": "Designations of important government functionaries who attended",
          "uuid": "8883fa35-a597-469b-a72c-0ca33e2db616",
          "keyValues": [],
          "concept": {
            "name": "Designations of important government functionaries who attended",
            "uuid": "804dda21-2aee-4513-bd02-033f8961eabc",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Date to capture date of the event",
          "uuid": "26dbe9f5-1877-45ca-8214-92e139447cd9",
          "keyValues": [],
          "concept": {
            "name": "Date to capture date of the event",
            "uuid": "8af434c9-0c03-4476-8f68-a33c24917be3",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Mode of Consultation",
          "uuid": "fc81cca9-f796-4d3a-b9fc-bac62097f534",
          "keyValues": [],
          "concept": {
            "name": "Mode of Consultation",
            "uuid": "16aede2c-2a1d-4d5b-89c6-2142459be97f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Online",
                "uuid": "8a9ff304-248c-408c-b02c-5efe6e81acdc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Offline",
                "uuid": "720a3a9e-5602-4656-88c9-5076d09c41be",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Topics Covered",
          "uuid": "7679c9fa-7c26-4876-b438-9447b89acda4",
          "keyValues": [],
          "concept": {
            "name": "Topics Covered - Consultation",
            "uuid": "e3952c97-a1b6-43e6-bf1c-3d46e46b38a2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    return formElementGroup.formElements.map((formElement) => {
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("dc02da1b-b2a7-40e4-a679-d429ea685408").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Consultation"
                      ],
                      "answerConceptUuids": [
                        "dc02da1b-b2a7-40e4-a679-d429ea685408"
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
      "display": "Consultation Details",
      "timed": false
    },
    {
      "uuid": "3a97a526-1bc0-4ecc-b7cc-a7c90014742f",
      "name": "Number of GO participants",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Male",
          "uuid": "870c7443-fffb-424e-b4f8-7ee53738175d",
          "keyValues": [],
          "concept": {
            "name": "Number of Male",
            "uuid": "cff9657f-83ff-4d47-b0d9-c844fb9cfecb",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("cff9657f-83ff-4d47-b0d9-c844fb9cfecb");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Female",
          "uuid": "5f445fed-a961-4c64-b4ce-3c0eef4cc8e7",
          "keyValues": [],
          "concept": {
            "name": "Number of Female",
            "uuid": "083a8279-1b92-4fba-95b0-8990de7abca1",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("083a8279-1b92-4fba-95b0-8990de7abca1");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other",
          "uuid": "15834cd6-293c-4e7e-b4cc-424746f59b57",
          "keyValues": [],
          "concept": {
            "name": "Number of Other",
            "uuid": "0f90a1a0-0bee-43cd-8aca-703f519f9fad",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("0f90a1a0-0bee-43cd-8aca-703f519f9fad");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "a292d27b-e5ad-44ae-a44d-2fd8bb07c830",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total",
            "uuid": "781522ab-b718-4f23-b01e-1c2e6b8606b3",
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

  let noOfMales = encounter.getObservationValue("cff9657f-83ff-4d47-b0d9-c844fb9cfecb");
  let noOfFemales = encounter.getObservationValue("083a8279-1b92-4fba-95b0-8990de7abca1");
  let noOfOthers = encounter.getObservationValue("0f90a1a0-0bee-43cd-8aca-703f519f9fad");

  if (noOfMales !== null && noOfFemales !== null && noOfOthers !== null) {
    if (!Number.isInteger(noOfMales) || !Number.isInteger(noOfFemales) || !Number.isInteger(noOfOthers)) {
      validationErrors.push("Values for males, females, and others must be whole numbers (no decimals allowed).");
    } else {
      value = noOfMales + noOfFemales + noOfOthers;
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "5e2dd5da-bad5-4485-b6db-8649c0a6b938",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total Number",
            "uuid": "c2e4cf8b-47ce-4dcd-9c5d-c45a232f2696",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const male = programEncounter.getObservationValue("cff9657f-83ff-4d47-b0d9-c844fb9cfecb");
  const female = programEncounter.getObservationValue("083a8279-1b92-4fba-95b0-8990de7abca1");
  const other = programEncounter.getObservationValue("0f90a1a0-0bee-43cd-8aca-703f519f9fad");
  
  if(male && female && other) value = male + female + other;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
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
        
     const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("dc02da1b-b2a7-40e4-a679-d429ea685408").matches();
  
  
  
     const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
        visibility = condition11 && !(condition21) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Number of GO participants",
      "timed": false
    },
    {
      "uuid": "b4d64e1e-3b89-4795-bcc8-abbb83656322",
      "name": "Number of other participants (NGO, Students, Journalists)",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Male",
          "uuid": "31727eba-5a59-406d-9ba4-3521aa935123",
          "keyValues": [],
          "concept": {
            "name": "Number of other male participants",
            "uuid": "eac6cd0b-2b73-4089-8d22-6c9dca2ce858",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("eac6cd0b-2b73-4089-8d22-6c9dca2ce858");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Female",
          "uuid": "bbb9a041-a4d8-4e51-b8be-33f47520f2ad",
          "keyValues": [],
          "concept": {
            "name": "Number of other female participants",
            "uuid": "60061507-b56f-4ab0-b233-ae96441d5812",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("60061507-b56f-4ab0-b233-ae96441d5812");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other",
          "uuid": "7bea81e5-6255-4987-b2b0-5b2a4c758d27",
          "keyValues": [],
          "concept": {
            "name": "Number of other participants",
            "uuid": "07edb91c-3b61-4058-8ca0-a24f52c191f0",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("07edb91c-3b61-4058-8ca0-a24f52c191f0");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "ff726075-d219-48c6-8e69-af035b791546",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total - Other",
            "uuid": "e98f3554-e05b-476e-9d0f-a3a25e3babe1",
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

  let noOfMales = encounter.getObservationValue("eac6cd0b-2b73-4089-8d22-6c9dca2ce858");
  let noOfFemales = encounter.getObservationValue("60061507-b56f-4ab0-b233-ae96441d5812");
  let noOfOthers = encounter.getObservationValue("07edb91c-3b61-4058-8ca0-a24f52c191f0");

  if (noOfMales !== null && noOfFemales !== null && noOfOthers !== null) {
    if (!Number.isInteger(noOfMales) || !Number.isInteger(noOfFemales) || !Number.isInteger(noOfOthers)) {
      validationErrors.push("Values for males, females, and others must be whole numbers (no decimals allowed).");
    } else {
      value = noOfMales + noOfFemales + noOfOthers;
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "f68d3452-e40a-4b44-b4c2-ac940b09fd7f",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total number of other participants",
            "uuid": "9e379af7-0ebe-49c7-9be2-2a2e7266d00c",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const male = programEncounter.getObservationValue("eac6cd0b-2b73-4089-8d22-6c9dca2ce858");
  const female = programEncounter.getObservationValue("60061507-b56f-4ab0-b233-ae96441d5812");
  const other = programEncounter.getObservationValue("07edb91c-3b61-4058-8ca0-a24f52c191f0");
  
  if(male && female && other) value = male + female + other;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
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
        
     const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("dc02da1b-b2a7-40e4-a679-d429ea685408").matches();
  
  
  
     const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
        visibility = condition11 && !(condition21) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Number of other participants (NGO, Students, Journalists)",
      "timed": false
    },
    {
      "uuid": "2034023d-0f5d-47f7-9a13-61ab0ce84d91",
      "name": "Detailed description of the event",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Title of Consultation  (if applicable)",
          "uuid": "1ac64f88-357e-42af-b402-c8827c4913e2",
          "keyValues": [],
          "concept": {
            "name": "Title of Consultation  (if applicable)",
            "uuid": "265c117d-f57d-4d66-95a4-a03b23b3a6d8",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Objective",
          "uuid": "13a4b160-c3f6-4ec0-9ce7-0c93e83b58e3",
          "keyValues": [],
          "concept": {
            "name": "Objectives",
            "uuid": "9789b3d6-96fe-41df-b84d-574456cbf27b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "List of speakers with associated organisation",
          "uuid": "f95ce1f4-1218-4d12-accf-7b80ee314610",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "List of speakers with associated organisation QG",
            "uuid": "28071a33-2c86-4564-a595-4d6f7119629e",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "List of speakers with associated organisation",
          "uuid": "d1d8a150-3b27-497f-bba1-22c683a472a2",
          "keyValues": [],
          "concept": {
            "name": "List of speakers with associated organisation",
            "uuid": "c851041e-b466-4e2e-ad89-cc84b4ff8732",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "f95ce1f4-1218-4d12-accf-7b80ee314610",
          "mandatory": false
        },
        {
          "name": "List of speakers with associated organisation",
          "uuid": "18b8a8fd-f16a-49c3-9260-530e0138f4b8",
          "keyValues": [],
          "concept": {
            "name": "List of speakers with associated organisation",
            "uuid": "c851041e-b466-4e2e-ad89-cc84b4ff8732",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Description of representations submitted to govt departments",
          "uuid": "2d89cfd8-d105-4394-8610-f8fb2ada6431",
          "keyValues": [],
          "concept": {
            "name": "Description of representations submitted to govt departments",
            "uuid": "6e1dc594-aab3-4cf3-bf00-cc29cdbfbf84",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Next steps",
          "uuid": "e4615b45-7fbd-4453-b30a-77eef601925a",
          "keyValues": [],
          "concept": {
            "name": "Nextstep",
            "uuid": "a9052e21-33ac-4511-8ee8-0774ddbe7ca3",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Any other relevent info",
          "uuid": "eb7e0d0b-36e1-4f8b-8405-b0f2cb6f4439",
          "keyValues": [],
          "concept": {
            "name": "Any other relevent info",
            "uuid": "80b969ee-8050-4d16-af3d-fb7a0760b40e",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Upload Photo",
          "uuid": "20f1f3e5-1c6f-4a12-8742-3a837b31bc1d",
          "keyValues": [],
          "concept": {
            "name": "Upload Photo",
            "uuid": "30a842f2-52fc-47f1-be4e-acc989f6e06c",
            "dataType": "Image",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  
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
                          "scope": "registration",
                          "conceptName": "In collaboration with",
                          "conceptUuid": "593d03f1-0cf7-478d-9a9a-2f44e50497d0",
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
          "name": "Upload file",
          "uuid": "5e6cdcd7-13b2-4d42-895b-8b1fbf0d8396",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload File",
            "uuid": "9364a616-e0f0-4bdf-b0d5-cbd7dceee763",
            "dataType": "File",
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
  
  
  let uploadFile = individual.getObservationValue("9364a616-e0f0-4bdf-b0d5-cbd7dceee763");
  let uploadImage =  individual.getObservationValue("30a842f2-52fc-47f1-be4e-acc989f6e06c");


    if(uploadFile == null && uploadImage == null){
        validationErrors.push('Please upload either image or file');
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("dc02da1b-b2a7-40e4-a679-d429ea685408").matches();
  
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("593d03f1-0cf7-478d-9a9a-2f44e50497d0").containsAnswerConceptName("12efa85a-75bc-4c7f-90ee-73d711647650").matches();
  

        visibility = condition11 && !(condition12) ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Detailed description of the event",
      "timed": false
    },
    {
      "uuid": "dd327e7c-8b22-4275-8c27-68a08e87d2fa",
      "name": "PIL Details",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Date of filing",
          "uuid": "64b4f9ed-eb3d-41e8-bdaa-e702dba0f07c",
          "keyValues": [],
          "concept": {
            "name": "Date of PIL filing",
            "uuid": "1cbca9e7-2b4f-4867-9c30-31f01b71d25d",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Name of Petitioner",
          "uuid": "bc1c39b4-b5d2-476a-a966-d26082bbe806",
          "keyValues": [],
          "concept": {
            "name": "Name of Petitioner",
            "uuid": "5e0e0901-cb90-404d-8b8e-4dd2adf0547d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Court",
          "uuid": "68fe34e6-4010-4f54-8d74-34fbe537696d",
          "keyValues": [],
          "concept": {
            "name": "court",
            "uuid": "76bebccb-ccd9-4a2b-a74c-c72bea86afea",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Description",
          "uuid": "29578e02-e1c9-4196-8843-3f5e00844bf6",
          "keyValues": [],
          "concept": {
            "name": "Descriptions",
            "uuid": "2edc44e2-9ab1-4140-8984-02e233f3d424",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "In collaboration with",
          "uuid": "e0b396b9-2af8-41f0-8d63-7a1bc159f8fe",
          "keyValues": [],
          "concept": {
            "name": "In collaborations with",
            "uuid": "ccb1a378-61ef-4efc-abcc-e5bab6401327",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "708f6d4f-727e-4bf0-8a7d-42ba5c71c4a8",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Academic institution",
                "uuid": "a0018749-7eb2-431c-922d-2eed8c8deda7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Independent Activist",
                "uuid": "d96bea50-3d72-4c28-be40-9afa0817c40f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NGO or CSO",
                "uuid": "becf5a68-3e4b-4827-9dbf-fd3a87fd8560",
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
          "mandatory": false
        },
        {
          "name": "Other Collaborator, please specify",
          "uuid": "b2915703-ccfb-4e51-b617-33ba4c55229b",
          "keyValues": [],
          "concept": {
            "name": "Other Collaborator, please specify (voided~269777)",
            "uuid": "44b70bd3-08ff-4dc8-8e08-520afb54d6b5",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Name of collaborator",
          "uuid": "45776dc5-2a1f-400e-95cf-f4317b6e6668",
          "keyValues": [],
          "concept": {
            "name": "Name of collaborators",
            "uuid": "d2dbf899-ed02-41a8-9a62-9f71e2551f2f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("04f01759-725d-4995-85a1-d628c0a4176a").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "PIL"
                      ],
                      "answerConceptUuids": [
                        "04f01759-725d-4995-85a1-d628c0a4176a"
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
      "display": "PIL Details",
      "timed": false
    },
    {
      "uuid": "f6b75c66-8093-4363-91a7-dc6c7376fbf2",
      "name": "Litigants Forum - Number of participants",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Male",
          "uuid": "fd6a1b58-56a0-4f49-b807-182e05d3da6f",
          "keyValues": [],
          "concept": {
            "name": "Number Male Litigant Forum",
            "uuid": "93192eb6-bf75-4298-ba37-417e2a0cd7b0",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("93192eb6-bf75-4298-ba37-417e2a0cd7b0");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Female",
          "uuid": "579a3dc8-de93-49ab-9cad-a0db21055ac6",
          "keyValues": [],
          "concept": {
            "name": "Number Female Litigant Forum",
            "uuid": "e663bebc-371b-467e-951d-53b6fcbe721e",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("e663bebc-371b-467e-951d-53b6fcbe721e");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Other",
          "uuid": "821568f4-8f1a-4a32-b353-19b4210b2100",
          "keyValues": [],
          "concept": {
            "name": "Number Other Litigant Forum",
            "uuid": "ef582649-19dc-4735-ad05-fbe212f894f4",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
   const selectedNumber = programEncounter.getObservationValue("ef582649-19dc-4735-ad05-fbe212f894f4");
    if(selectedNumber && !Number.isInteger(selectedNumber)){
        validationErrors.push("Please provide a valid whole number.")
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "a24e6e10-81f1-479f-893b-e0086857ced9",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total - Litigation",
            "uuid": "19835e44-c266-4568-a809-68f1b52a7681",
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

  let noOfMales = encounter.getObservationValue("93192eb6-bf75-4298-ba37-417e2a0cd7b0");
  let noOfFemales = encounter.getObservationValue("e663bebc-371b-467e-951d-53b6fcbe721e");
  let noOfOthers = encounter.getObservationValue("ef582649-19dc-4735-ad05-fbe212f894f4");

  if (noOfMales !== null && noOfFemales !== null && noOfOthers !== null) {
    if (!Number.isInteger(noOfMales) || !Number.isInteger(noOfFemales) || !Number.isInteger(noOfOthers)) {
      validationErrors.push("Values for males, females, and others must be whole numbers (no decimals allowed).");
    } else {
      value = noOfMales + noOfFemales + noOfOthers;
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "c9b5e53c-3585-45fd-ac79-a97a594071c9",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total Number Litigant Forum",
            "uuid": "80085887-b37d-4158-99fc-699d90f1c9cf",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const male = programEncounter.getObservationValue("93192eb6-bf75-4298-ba37-417e2a0cd7b0");
  const female = programEncounter.getObservationValue("e663bebc-371b-467e-951d-53b6fcbe721e");
  const other = programEncounter.getObservationValue("ef582649-19dc-4735-ad05-fbe212f894f4");
  
  if(male && female && other) value = male + female + other;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Description",
          "uuid": "73e81802-611f-4024-9611-a0db7334fc62",
          "keyValues": [],
          "concept": {
            "name": "Description of litigant forum",
            "uuid": "774ba29b-8dee-4bcf-9e16-b36904ead6db",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Next steps decided",
          "uuid": "f706a3cd-ff26-41a7-87f1-30028d61f46c",
          "keyValues": [],
          "concept": {
            "name": "Next step decided",
            "uuid": "83f4b60f-e092-474a-85fb-d027f1f05e1f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Upload any filed applications",
          "uuid": "101c8f0a-4185-4953-9994-77d406e0e6d5",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload any filed applications",
            "uuid": "33660240-e91a-4aa6-a44a-1cfacf1162cd",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": false
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("3a892e04-7a12-4cf6-a519-301a07cd0eac").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Litigants Forum"
                      ],
                      "answerConceptUuids": [
                        "3a892e04-7a12-4cf6-a519-301a07cd0eac"
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
      "display": "Litigants Forum - Number of participants",
      "timed": false
    },
    {
      "uuid": "01798bd8-526b-4c60-a734-b9cd92504d45",
      "name": "Other",
      "displayOrder": 12,
      "formElements": [
        {
          "name": "Date",
          "uuid": "f22e748a-1c5f-4edd-816f-e7ca06c43948",
          "keyValues": [],
          "concept": {
            "name": "Other Date",
            "uuid": "3c30f7ae-7d86-49f1-b536-f121e07bb8df",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Action Taken",
          "uuid": "ec5fe58a-7e95-452b-ba6b-dea7f3917d26",
          "keyValues": [],
          "concept": {
            "name": "Action Taken/What Happened",
            "uuid": "b8e2232c-fee0-4d7f-9b6f-878ec5197426",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Impact",
          "uuid": "f8387ed4-e909-416c-88ac-3fff41fe1d99",
          "keyValues": [],
          "concept": {
            "name": "Impact",
            "uuid": "c00408cf-8198-486c-b8cb-e7b513904a4e",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f304d6c0-dc78-4373-b584-b91d269d0835").containsAnswerConceptName("b1629cf7-beef-4308-8cb2-ef761d0ee766").matches();
  
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
                      "scope": "registration",
                      "conceptName": "Nature of engagement",
                      "conceptUuid": "f304d6c0-dc78-4373-b584-b91d269d0835",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Other nature of engagements"
                      ],
                      "answerConceptUuids": [
                        "b1629cf7-beef-4308-8cb2-ef761d0ee766"
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
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}