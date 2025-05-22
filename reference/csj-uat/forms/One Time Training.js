{
  "name": "One Time Training",
  "uuid": "467b9017-b45e-4f16-bf90-878bf8cf20eb",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "352565db-b01f-4c4e-a510-6093715d2e0e",
      "name": "Phase Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Which phase",
          "uuid": "a98f4f84-a548-493b-9f17-2f4720aec521",
          "keyValues": [],
          "concept": {
            "name": "Which phase",
            "uuid": "1732f13a-26c0-4ef9-a92b-78d65519b024",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Phase 3",
                "uuid": "bb22c7e8-644b-42d3-88cc-62eab6e65576",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Phase 1",
                "uuid": "d6412282-80d6-481b-a8ee-5ea24d4d36a5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Phase",
                "uuid": "583aae4b-8dc5-4d69-b4ab-6251cde27383",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Phase 2",
                "uuid": "d528440b-4f46-4aa8-93f9-66cd2f949483",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Phase 4",
                "uuid": "f1990b3d-f35c-4f8c-b94e-f06e4e1851cf",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Phase 5",
                "uuid": "ee11034c-729e-404c-8261-faf1596b6458",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Phase, please specify",
          "uuid": "ab8f6c82-0efd-4e61-a640-a6c1e109f06c",
          "keyValues": [],
          "concept": {
            "name": "Other Phase, please specify",
            "uuid": "293b6747-67b1-45d8-8ec3-5e1cc7b0c607",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("1732f13a-26c0-4ef9-a92b-78d65519b024").containsAnswerConceptName("583aae4b-8dc5-4d69-b4ab-6251cde27383").matches();
  
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
                          "conceptName": "Which phase",
                          "conceptUuid": "1732f13a-26c0-4ef9-a92b-78d65519b024",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Phase"
                          ],
                          "answerConceptUuids": [
                            "583aae4b-8dc5-4d69-b4ab-6251cde27383"
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
          "name": "Date (start date)",
          "uuid": "37c9f632-b354-4cb3-92c9-8cd3de6c8ae7",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date (start date)",
            "uuid": "841e5c85-9626-433c-a7a9-e27073025b68",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date (end date)",
          "uuid": "26371c59-c75e-4e3f-a461-a4e4c555f250",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date (end date)",
            "uuid": "5d01a701-f8b1-4edf-ab48-3d9b36d28554",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const startDate = individual.getObservationReadableValue('Date (start date)');
  const endDate = individual.getObservationReadableValue('Date (end date)');

  if (startDate && endDate) {
    const startMoment = moment(startDate, 'YYYY-MM-DD');
    const endMoment = moment(endDate, 'YYYY-MM-DD');

    if (endMoment.isBefore(startMoment)) {
      validationErrors.push('End date must be on or after the start date.');
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Number of Days",
          "uuid": "bfb23074-7710-4b37-9269-6f569365fe81",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Number of Days",
            "uuid": "33411880-2795-40e3-a79b-f7ba217b6d3b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({ params, imports }) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const startDate = individual.getObservationReadableValue('Date (start date)');
  const endDate = individual.getObservationReadableValue('Date (end date)');

  if (startDate && endDate) {
    const startMoment = moment(startDate, 'YYYY-MM-DD');
    const endMoment = moment(endDate, 'YYYY-MM-DD');

    if (endMoment.isValid() && startMoment.isValid()) {
      value = endMoment.diff(startMoment, 'days'); 
    } else {
      validationErrors.push('Invalid date format');
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Days or Hours",
          "uuid": "69b3f663-d20d-405f-b5dd-a36bedea7ea0",
          "keyValues": [],
          "concept": {
            "name": "Days or Hours",
            "uuid": "60bdaf40-da70-4676-aa4e-a7730a3e0823",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hours",
                "uuid": "eb0091c0-6a71-42f1-9043-6b320c53b95f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Days",
                "uuid": "f115f378-b5be-4fc4-ab0a-be8cf4326235",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "No of Days",
          "uuid": "00ff5595-d6da-4551-8d66-343767a1228e",
          "keyValues": [],
          "concept": {
            "name": "No of Days (voided~269177)",
            "uuid": "1e678a41-dc4b-4fb5-b7f1-0d904ce3a350",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true,
            "voided": true
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
  let dateEndDateObservation = encounter.findObservation('5d01a701-f8b1-4edf-ab48-3d9b36d28554');
  let dateEndDateValue = _.isEmpty(dateEndDateObservation) ? dateEndDateObservation : dateEndDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("841e5c85-9626-433c-a7a9-e27073025b68").equals(dateEndDateValue, 'ms').matches();
  
  const hours = encounter.getObservationValue("94899aac-d1e1-457b-8d95-07aaec5f8aa9");
   
   if(hours){
      
        if (!Number.isInteger(hours)) {
            validationErrors.push("Please provide a valid whole number.")
        }
        else if(hours < 0){
            validationErrors.push("Please provide a number greater than or equal to 0.")
        }
  }
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Mode of training",
          "uuid": "4d214cab-02dc-4952-ae00-f9b640c1978f",
          "keyValues": [],
          "concept": {
            "name": "Mode of training",
            "uuid": "ab1f3913-809a-4b29-b777-6ff99336b959",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Offline",
                "uuid": "720a3a9e-5602-4656-88c9-5076d09c41be",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Online",
                "uuid": "8a9ff304-248c-408c-b02c-5efe6e81acdc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "name": "Topics Covered",
          "uuid": "d504a1f3-c0ab-4bfe-a369-41534904f027",
          "keyValues": [],
          "concept": {
            "name": "Topics Covered",
            "uuid": "7e8c602d-3f11-4bec-a463-174a40b98ffd",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Procedural Law",
                "uuid": "a00bcd0f-f3d7-451e-a0e3-b533df414cad",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
                "name": "Rights of SC ST Communities",
                "uuid": "a75037b8-598a-4f63-9ecc-704d5f73509b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Financial fraud",
                "uuid": "fed80ad2-6042-4469-b038-9a0f42173c4e",
                "dataType": "NA",
                "answers": [],
                "order": 14,
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
                "name": "Rights of women",
                "uuid": "3b1e3389-0ef5-4a53-953a-3c65b63954fc",
                "dataType": "NA",
                "answers": [],
                "order": 4,
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
                "name": "Consumer Rights",
                "uuid": "096d5dcf-4e69-4c17-93e4-90d54fc8798e",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Prisoners’ Rights",
                "uuid": "e3cb96f0-62e7-4428-b136-d325c587d0e6",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other Topics Covered",
                "uuid": "0805bcce-330d-42a5-a54c-077e730c5ffc",
                "dataType": "NA",
                "answers": [],
                "order": 17,
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
                "name": "Rights of children",
                "uuid": "50ea97c2-0564-4666-a360-006be2d64f98",
                "dataType": "NA",
                "answers": [],
                "order": 10,
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
                "name": "Internal Review and Reflection",
                "uuid": "a89e4685-4817-455a-8215-30374b9e5bba",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Constitutional Values",
                "uuid": "a8a62dd9-ccf8-44a9-81dc-0c23c97af551",
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
                "order": 13,
                "active": true
              },
              {
                "name": "Rights related to Land",
                "uuid": "e2a95ced-ceb3-41f7-9963-1ab1702b7f83",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").defined.and.when.valueInRegistration("c7afa395-baae-4434-b8f7-b938b78051bd").containsAnswerConceptNameOtherThan("3feb2dac-7f40-49e7-82c8-a5c55b3feb8a").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInRegistration("302ce25a-1fe7-4c5a-9a31-e1e54009187b").defined.and.when.valueInRegistration("302ce25a-1fe7-4c5a-9a31-e1e54009187b").containsAnswerConceptNameOtherThan("506b3f7f-a8a3-4383-92fb-743be00756fa").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInRegistration("387e72d2-1ced-4032-b273-ea3ef5c5a159").defined.and.when.valueInRegistration("387e72d2-1ced-4032-b273-ea3ef5c5a159").containsAnswerConceptNameOtherThan("9d91df97-79f6-4e42-8d61-19d8926edd9f").matches();
  
  if(condition11 || condition21 || condition31 ) {
    _.forEach(["a89e4685-4817-455a-8215-30374b9e5bba"], (answer) => {
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
                      "Internal Review and Reflection"
                    ],
                    "answerUuidsToSkip": [
                      "a89e4685-4817-455a-8215-30374b9e5bba"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "scope": "registration",
                          "conceptName": "Type of training",
                          "conceptUuid": "c7afa395-baae-4434-b8f7-b938b78051bd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
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
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Nature of training",
                          "conceptUuid": "302ce25a-1fe7-4c5a-9a31-e1e54009187b",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
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
                        "operator": "containsAnswerConceptNameOtherThan"
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
                          "scope": "registration",
                          "conceptName": "Whether phased",
                          "conceptUuid": "387e72d2-1ced-4032-b273-ea3ef5c5a159",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {},
                        "operator": "defined"
                      },
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
          "name": "Other Topics Covered, please specify",
          "uuid": "50321a30-67f9-45d5-b809-5cf66c613cba",
          "keyValues": [],
          "concept": {
            "name": "Other Topics Covered, please specify",
            "uuid": "b0d5ca63-3587-417c-a285-57efe4387e85",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("7e8c602d-3f11-4bec-a463-174a40b98ffd").containsAnswerConceptName("0805bcce-330d-42a5-a54c-077e730c5ffc").matches();
  
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
                          "conceptName": "Topics Covered",
                          "conceptUuid": "7e8c602d-3f11-4bec-a463-174a40b98ffd",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Topics Covered"
                          ],
                          "answerConceptUuids": [
                            "0805bcce-330d-42a5-a54c-077e730c5ffc"
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
          "name": "External Resource Persons Name",
          "uuid": "128d4d8b-752a-4c4d-89a8-fb10c5ee7ce4",
          "keyValues": [],
          "concept": {
            "name": "External Resource Persons Name",
            "uuid": "0721ea4a-e43c-46ff-b25a-240c54ed7713",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Organisation",
          "uuid": "e3b3a38f-bf10-41d8-a2aa-f39d5acc6ccc",
          "keyValues": [],
          "concept": {
            "name": "Organisation",
            "uuid": "a35acfff-c28b-4210-af04-a0781ce008f5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "No. of days / hours (select unit at the time of filling)",
          "uuid": "fb30f77f-f20e-4c8f-9670-2d5a09725f0d",
          "keyValues": [],
          "concept": {
            "name": "No. of days / hours (select unit at the time of filling) (voided~269173)",
            "uuid": "1ee5d943-2275-43c0-8ded-a192b45daa5d",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true,
            "voided": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Phase Details",
      "timed": false
    },
    {
      "uuid": "2d3359c6-49bb-480d-8a22-8969e5ec4fce",
      "name": "No. of participants",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Male - Internal Training",
          "uuid": "c5adc5da-b74b-4e7d-9a38-eeed26352603",
          "keyValues": [],
          "concept": {
            "name": "Male - Internal Training",
            "uuid": "0eb972a5-1be1-4fa2-92c8-46bb03a9f405",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Female - Internal Training",
          "uuid": "ae76eb82-e0d4-4690-9913-c276c574b590",
          "keyValues": [],
          "concept": {
            "name": "Female - Internal Training",
            "uuid": "7cb884fe-044f-4e44-9ad2-f5df9b5444c6",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Other - Internal Training",
          "uuid": "7a183635-0d11-492a-9309-ad8152faa2e7",
          "keyValues": [],
          "concept": {
            "name": "Other - Internal Training",
            "uuid": "24f8127c-a88e-4302-8b85-b7227e54765d",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Total",
          "uuid": "175092a5-edd1-4472-9860-5f113f6ca7c3",
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

  let noOfMales = encounter.getObservationValue("0eb972a5-1be1-4fa2-92c8-46bb03a9f405");
  let noOfFemales = encounter.getObservationValue("7cb884fe-044f-4e44-9ad2-f5df9b5444c6");
  let noOfOthers = encounter.getObservationValue("24f8127c-a88e-4302-8b85-b7227e54765d");

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
        }
      ],
      "display": "No. of participants",
      "timed": false
    },
    {
      "uuid": "f3d11880-a616-415e-a267-2414452e4160",
      "name": "Detailed description",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "General description (including methodology)",
          "uuid": "cde266be-cd86-42b2-a445-32bc8f315c10",
          "keyValues": [],
          "concept": {
            "name": "General description (including methodology)",
            "uuid": "4df50a5a-190d-4980-bdf2-c41963251734",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Material prepared (if any)",
          "uuid": "de3ac92d-b5a8-415b-8331-d09fb614cde1",
          "keyValues": [],
          "concept": {
            "name": "Material prepared (if any)",
            "uuid": "0e448ab6-d84b-4a75-aa85-6a31a87d17ee",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Next steps",
          "uuid": "d5c1ea89-339a-4540-a533-b91559f519a9",
          "keyValues": [],
          "concept": {
            "name": "Next steps",
            "uuid": "b6f78de8-4a2d-4ace-ad46-e6c4cd712fcd",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Any other relevant information",
          "uuid": "595a73ae-8c4a-48f3-80a4-c540eb024936",
          "keyValues": [],
          "concept": {
            "name": "Any other relevant information",
            "uuid": "7331b0f8-1d28-4107-9ded-381eed0fecb5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Event report link and link to material",
          "uuid": "9929993e-62cf-4235-b640-afdfa1c4d2d2",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Event report link and link to material",
            "uuid": "6fc8aec8-3388-4e24-a006-1ff5ee8e0ab7",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Event report link and link to material",
          "uuid": "b6719157-04b3-4a9b-b6b8-b7f8c723c735",
          "keyValues": [],
          "concept": {
            "name": "Event report link",
            "uuid": "9e654410-a191-4447-8414-40d0814da80c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^https:\\/\\/[a-zA-Z0-9.-]+\\.(com|in|net|org|io|co|edu)(\\/[^\\s]*)?$",
            "descriptionKey": "Please provide only one correct URL starting with [https://]"
          },
          "parentFormElementUuid": "9929993e-62cf-4235-b640-afdfa1c4d2d2",
          "mandatory": false
        },
        {
          "name": "Event report link and link to material",
          "uuid": "343f7b8e-f1a9-40b8-a67d-8b4311d96278",
          "keyValues": [],
          "concept": {
            "name": "Event report link and link to material (voided~269219)",
            "uuid": "feb05f3c-3d24-4093-9c34-882e529396aa",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^https:\\/\\/[a-zA-Z0-9.-]+\\.com(\\/[^\\s]*)?$",
            "descriptionKey": "Please provide only one correct URL starting with [https://]"
          },
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Detailed description",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}