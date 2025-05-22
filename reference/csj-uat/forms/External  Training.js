{
  "name": "External  Training",
  "uuid": "b653809a-0502-45f6-ac70-a87c47e2860a",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "c42734d2-302f-42c5-8eda-25076b660e60",
      "name": "External Training Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Which phase",
          "uuid": "8a549f29-8603-4b66-8635-92885373d04f",
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
          "mandatory": true
        },
        {
          "name": "Other Phase, please specify",
          "uuid": "2e05cf66-647f-4ed7-a991-1e2b82419a1b",
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
          "mandatory": true
        },
        {
          "name": "Start Date",
          "uuid": "dfc4c9ff-bc04-4ec1-9b6d-af1e2505a77e",
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
          "name": "End Date",
          "uuid": "52a7380b-d398-45c1-8255-b2e42949595b",
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
          "uuid": "65a297c7-1a8a-4bdf-8026-db2550e8ad8b",
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
      if (startMoment.isSame(endMoment, 'day')) {
        visibility = false; 
      } else {
        value = endMoment.diff(startMoment, 'days');
      }
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
          "uuid": "3e797ad8-ed77-499f-a4b1-a2f12460d844",
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
          "uuid": "74bdcb8a-a0c3-4b34-b16d-d2f0621f6141",
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


  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("33411880-2795-40e3-a79b-f7ba217b6d3b").defined.matches();
  
  visibility = condition11 && !(condition12) ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Mode of training",
          "uuid": "4d0f84ad-796b-46c2-9de7-79584aef5333",
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
          "uuid": "db37278b-d4fe-439d-833c-58c92356c723",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Internal Review and Reflection"
              ]
            }
          ],
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
          "mandatory": true
        },
        {
          "name": "Other Topics Covered, please specify",
          "uuid": "bd322131-11cb-4173-b622-69df75846b97",
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
          "uuid": "b2bbe16e-f2de-4587-8ec5-b45b87381229",
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
          "uuid": "552ecd18-e928-4b90-9a5e-afff982d1099",
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
          "uuid": "6aae9674-c88b-406b-9906-8b2be6dd147a",
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
      "display": "External Training Details",
      "timed": false
    },
    {
      "uuid": "787d3693-9deb-4f59-91d7-1bc33476603f",
      "name": "No. of participants",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Male",
          "uuid": "7e6597a7-d8e4-445a-b437-ca42aec9ee98",
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
          "name": "Female",
          "uuid": "ab1ab180-68a7-40b1-a797-d354f37f5efb",
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
          "name": "Other",
          "uuid": "40861c64-2ede-464a-8244-6e4ef20c219f",
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
          "uuid": "b7629ad5-5df0-4d8e-9067-f7c949b124ae",
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
      "uuid": "905d999f-7407-4fc7-8b59-ef4337a566b0",
      "name": "Detailed description",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "General description (including methodology)",
          "uuid": "1bb6766a-bf04-49ac-95c0-d90206040c58",
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
          "uuid": "2c1b5a2b-d5f5-4824-83de-1ffcc6065857",
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
          "uuid": "3f58865a-f210-46a6-85c8-21b36d928e4e",
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
          "uuid": "62d9e8d5-f97c-4837-96d0-6f5219cf5d69",
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
          "uuid": "77716e44-fca7-44e6-a9db-934f3798e567",
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
          "uuid": "18e7493a-6104-4132-854c-d886e0c0d806",
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
            "regex": "^(https?:\\/\\/)?[a-zA-Z0-9.-]+\\.(com|in|net|org|io|co|edu)(\\/[^\\s]*)?$",
            "descriptionKey": "Please provide only one correct URL starting with [https://]"
          },
          "parentFormElementUuid": "77716e44-fca7-44e6-a9db-934f3798e567",
          "mandatory": false
        },
        {
          "name": "Event report link and link to material",
          "uuid": "60b13361-3971-42ee-9d37-a5c6b5c3331f",
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