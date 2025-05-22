{
  "name": "Victim Compensation",
  "uuid": "c110368e-fcc0-4a45-adb2-70f35c0842f8",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "48c394e0-3eaa-4ce1-bf24-c42db6002876",
      "name": "Victim Compensation Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Name of scheme",
          "uuid": "2c90dd7f-972f-42ed-bee9-02f68ca8e8d6",
          "keyValues": [],
          "concept": {
            "name": "Name of scheme",
            "uuid": "1c35bd2c-2158-4295-8059-48bdf207e1cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "SC ST PoA Compensation Rules",
                "uuid": "d5858c03-e801-4a61-93fd-a7709222bc46",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other scheme",
                "uuid": "149c28fa-fdf5-4bd8-8336-46ca83cb51a7",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NALSA 2018 Scheme",
                "uuid": "43abe66e-16ee-4c42-881c-ba4d655027a5",
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
        },
        {
          "name": "Other scheme, please specify",
          "uuid": "1cf5eb78-e3f8-4986-af5d-59cd3220d251",
          "keyValues": [],
          "concept": {
            "name": "Other scheme, please specify",
            "uuid": "ac410504-385d-4ada-bf61-81edc1ef705b",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("1c35bd2c-2158-4295-8059-48bdf207e1cc").containsAnswerConceptName("149c28fa-fdf5-4bd8-8336-46ca83cb51a7").matches();
  
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
                          "conceptName": "Name of scheme",
                          "conceptUuid": "1c35bd2c-2158-4295-8059-48bdf207e1cc",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other scheme"
                          ],
                          "answerConceptUuids": [
                            "149c28fa-fdf5-4bd8-8336-46ca83cb51a7"
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
          "name": "Date of filing immediate compensation application",
          "uuid": "78f68d53-3821-4e13-bf33-5791a71e5b1a",
          "keyValues": [],
          "concept": {
            "name": "Date of filing immediate compensation application",
            "uuid": "947a435d-c424-4f01-9735-860e15fe1d6e",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue('947a435d-c424-4f01-9735-860e15fe1d6e');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date of receipt of immediate compensation",
          "uuid": "36ede903-b8e5-4c7c-a74b-ca27e4c307b7",
          "keyValues": [],
          "concept": {
            "name": "Date of receipt of immediate compensation",
            "uuid": "9863ff44-6009-4051-887c-cb2befeb0021",
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
  
  let selectedDate = encounter.getObservationValue('9863ff44-6009-4051-887c-cb2befeb0021');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Amount received",
          "uuid": "008a3982-850d-4f47-afa1-7054c92e4b4d",
          "keyValues": [],
          "concept": {
            "name": "Amount received 1",
            "uuid": "415abe24-6a52-4ee8-832f-6e955f2574b3",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of filing interim compensation application",
          "uuid": "b7970979-e976-42f5-b40c-b2898036325b",
          "keyValues": [],
          "concept": {
            "name": "Date of filing interim compensation application",
            "uuid": "6f3813f4-9d9d-436b-a631-504f057fa5c4",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue('6f3813f4-9d9d-436b-a631-504f057fa5c4');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date of receipt of interim compensation",
          "uuid": "02afccc0-02fa-415f-862e-03df3c1b81db",
          "keyValues": [],
          "concept": {
            "name": "Date of receipt of interim compensation",
            "uuid": "1d5a9030-50a0-4a24-8cde-94662d0aa13b",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue('1d5a9030-50a0-4a24-8cde-94662d0aa13b');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Amount received",
          "uuid": "7869ca7f-b45e-47e8-8791-db04b0d95877",
          "keyValues": [],
          "concept": {
            "name": "Amount received 2",
            "uuid": "58bb476a-9a50-45ad-bb4e-60c19e1b52e7",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Date of filing final compensation application",
          "uuid": "ae01ce85-0a47-4cdb-8043-aeaa4d157ef4",
          "keyValues": [],
          "concept": {
            "name": "Date of filing final compensation application",
            "uuid": "32195137-43bb-4807-a939-3e55cb0b61a3",
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
  
  let selectedDate = encounter.getObservationValue('32195137-43bb-4807-a939-3e55cb0b61a3');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Date of receipt of final compensation",
          "uuid": "948bcb01-a6b2-42a6-9cc4-aff0bbf087c0",
          "keyValues": [],
          "concept": {
            "name": "Date of receipt of final compensation",
            "uuid": "e3d74f29-1a68-4075-ab78-6a42b93919f4",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue('e3d74f29-1a68-4075-ab78-6a42b93919f4');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Amount received",
          "uuid": "a0cbccd6-1d8a-47f2-9383-de153e249205",
          "keyValues": [],
          "concept": {
            "name": "Amount received 3",
            "uuid": "0a7e22d5-30e7-4ec1-8e01-0a9fd3e2c503",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Victim Compensation Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}