{
  "name": "Claim Activity Register",
  "uuid": "2f1d2ce4-0ac2-48bf-81c7-9babb8526bb1",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "88d51eb9-9899-4a49-a5b0-7d6efa75de2d",
      "name": "Activity  Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date",
          "uuid": "28a20345-ec37-4177-9861-e82045486097",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date",
            "uuid": "2413000f-51f0-4cab-8ed7-7b61d2614d83",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("2413000f-51f0-4cab-8ed7-7b61d2614d83").defined.matches();
  
  if(condition11 ){
    let selectedDate = encounter.getObservationReadableValue("2413000f-51f0-4cab-8ed7-7b61d2614d83") 

  const currentDate = moment().startOf('day');
  selectedDate = moment(selectedDate).startOf('day');

  if (selectedDate.isAfter(currentDate)) {
    validationErrors.push("Invalid date: Future dates are not allowed");
  }
  
} else {
  value = moment().startOf('day')
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Action / What happened",
          "uuid": "7cc551db-9293-433a-a1cb-56efc1dbebc4",
          "keyValues": [],
          "concept": {
            "name": "Action / What happened",
            "uuid": "435e0bcd-d21c-4824-8f62-f32cf8b657f9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Follow up application filed",
                "uuid": "a4bf905e-2b7e-4c2d-9d5d-0e12581f7dce",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Application filed",
                "uuid": "6458ec66-23df-44f3-9ac8-88e757799624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "RTI filed",
                "uuid": "6bb25780-3e71-4b0e-8c4f-bb6c2e1ce445",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Follow up visit to tantr done",
                "uuid": "be2021fb-6630-4483-90be-2fafedf34442",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Collected documents",
                "uuid": "7fa15902-27af-4ee1-ac8f-f642c95f1fd9",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other  Action",
                "uuid": "52df26cf-0b9f-40c2-a6a5-2e64096c0f91",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other Action, please specify",
          "uuid": "b1706ddd-d201-474d-8611-235932633fbd",
          "keyValues": [],
          "concept": {
            "name": "Other Action, please specify",
            "uuid": "2269368c-e53d-476a-aa1d-835a10d6bb1a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("435e0bcd-d21c-4824-8f62-f32cf8b657f9").containsAnswerConceptName("52df26cf-0b9f-40c2-a6a5-2e64096c0f91").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Next Steps",
          "uuid": "8f19c7a6-0270-4550-9392-34ef7a11d9f2",
          "keyValues": [],
          "concept": {
            "name": "Next Steps",
            "uuid": "4dbca646-230c-497c-bba7-a492622aa552",
            "dataType": "Coded",
            "answers": [
              {
                "name": "File follow up RTI",
                "uuid": "04a1598f-985c-4863-8c8b-e3ee07c9b6f1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Steps",
                "uuid": "2b09ced8-260f-411f-bf80-92eb1c44bd32",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Collect Documents",
                "uuid": "2e810e44-93d8-4b60-a377-4611bd1f354e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Follow up visit to State Departments",
                "uuid": "d3100a14-1e3b-44e7-b23d-7cd486650ff7",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "File follow up application",
                "uuid": "a39c47df-8ff7-4f40-a86a-b7ce181e9794",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Other Steps, please specify",
          "uuid": "a4c51455-0018-4f33-a29b-0bd20dd47355",
          "keyValues": [],
          "concept": {
            "name": "Other Steps, please specify",
            "uuid": "195bfed0-9263-480d-b7cd-b86d0eff0731",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("4dbca646-230c-497c-bba7-a492622aa552").containsAnswerConceptName("2b09ced8-260f-411f-bf80-92eb1c44bd32").matches();
  
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
                          "conceptName": "Next Steps",
                          "conceptUuid": "4dbca646-230c-497c-bba7-a492622aa552",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Steps"
                          ],
                          "answerConceptUuids": [
                            "2b09ced8-260f-411f-bf80-92eb1c44bd32"
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
        }
      ],
      "display": "Activity  Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}