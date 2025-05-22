{
  "name": "Case Monetary Impact",
  "uuid": "3ab206d4-a0af-48e8-bf7d-b80c64cacff5",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "9e74ff62-aada-46e3-bbfb-94334e2932cc",
      "name": "Monetary Impact Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of impact",
          "uuid": "2c767ae5-5ddb-4706-afb7-5007671c1bb0",
          "keyValues": [],
          "concept": {
            "name": "Date of impact",
            "uuid": "8812d295-05b7-4c0a-8b9b-3fd55ad162c7",
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

  let selectedDate = encounter.getObservationValue('8812d295-05b7-4c0a-8b9b-3fd55ad162c7');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Fill details of the monetary impact of this case",
          "uuid": "8eb4c2a5-caa9-4a67-8537-8290f0ec8f32",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Monetary Impact",
            "uuid": "eae96033-f0d5-438f-b3e1-7e526b7173fc",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Amount",
          "uuid": "84fd454e-8207-4958-837f-c099c26bf0df",
          "keyValues": [],
          "concept": {
            "name": "Amount",
            "uuid": "6163fe31-4acc-43bb-a9ff-bfc8d4b98259",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of impact",
          "uuid": "dfe189e5-0cc4-4dbc-85e2-cfbe5e3ec7f1",
          "keyValues": [],
          "concept": {
            "name": "Date of impact",
            "uuid": "8812d295-05b7-4c0a-8b9b-3fd55ad162c7",
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
  const questionGroupIndex = params.questionGroupIndex;
  let monetaryImpact = encounter.getObservationValue("eae96033-f0d5-438f-b3e1-7e526b7173fc");
  
  if(monetaryImpact && monetaryImpact.length > 0){

    let currentQuestionGroup = monetaryImpact[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('8812d295-05b7-4c0a-8b9b-3fd55ad162c7');

    if(selectedDate) {
      
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate.getValue()).startOf('day');
      if(selectedDate.isAfter(currentDate)){
          validationErrors.push("Invalid date: Future dates are not allowed");
      }
    } 
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "8eb4c2a5-caa9-4a67-8537-8290f0ec8f32",
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "596a2181-74c7-46f6-bd0d-16196ea5c841",
          "keyValues": [],
          "concept": {
            "name": "Amount",
            "uuid": "6163fe31-4acc-43bb-a9ff-bfc8d4b98259",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "8eb4c2a5-caa9-4a67-8537-8290f0ec8f32",
          "mandatory": true
        },
        {
          "name": "Description",
          "uuid": "8bf611eb-1635-439a-b9bb-036d2c4e455b",
          "keyValues": [],
          "concept": {
            "name": "Description",
            "uuid": "cec0cf6c-bd82-45b9-b416-4b1ebe8c1a1d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "parentFormElementUuid": "8eb4c2a5-caa9-4a67-8537-8290f0ec8f32",
          "mandatory": true
        },
        {
          "name": "Upload document",
          "uuid": "7a73656d-5c15-411a-998d-f79dba0630ca",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload Document",
            "uuid": "f217e57e-b1a3-4e0f-8af4-d193be6dabe1",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "8eb4c2a5-caa9-4a67-8537-8290f0ec8f32",
          "mandatory": false
        }
      ],
      "display": "Monetary Impact Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}