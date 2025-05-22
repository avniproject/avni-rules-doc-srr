{
  "name": "Case Legal Fund",
  "uuid": "979c4150-7e2a-4a98-b155-6aceae65f7f7",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "f550085f-b1cf-4514-a9c3-20190cb92613",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Fill in the details related to the Legal Fund",
          "uuid": "901e9588-f049-4931-a6c3-711c647bf3a1",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Fill in the details related to the legal Fund",
            "uuid": "c1cf21d1-5ce0-4246-ad0d-23137f8d8cdc",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Date of receipt",
          "uuid": "66f7aab8-9b97-4705-862c-2b5713a64260",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt",
            "uuid": "c329c903-d7cd-4378-adae-b2b99eb2311f",
            "dataType": "Date",
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
  const questionGroupIndex = params.questionGroupIndex;
  let dateofReceipt = encounter.getObservationValue("c1cf21d1-5ce0-4246-ad0d-23137f8d8cdc");
  
  if(dateofReceipt && dateofReceipt.length > 0){

    let currentQuestionGroup = dateofReceipt[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('c329c903-d7cd-4378-adae-b2b99eb2311f');

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
          "parentFormElementUuid": "901e9588-f049-4931-a6c3-711c647bf3a1",
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "0c93ea3f-5292-48f2-a4c4-70759b0a4d6b",
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
          "parentFormElementUuid": "901e9588-f049-4931-a6c3-711c647bf3a1",
          "mandatory": true
        },
        {
          "name": "Stage at which taken",
          "uuid": "a26b2ff1-84f6-4498-b5f0-967b0424ac93",
          "keyValues": [],
          "concept": {
            "name": "Stage at which taken",
            "uuid": "05141002-ff89-49fc-9c0c-64da1fb9f489",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "901e9588-f049-4931-a6c3-711c647bf3a1",
          "mandatory": true
        },
        {
          "name": "Upload receipt",
          "uuid": "9964b3c9-120e-433a-85c6-278ed0c82c4b",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload receipt",
            "uuid": "8eabb8c2-7708-471a-a0aa-c7dc549ad006",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "901e9588-f049-4931-a6c3-711c647bf3a1",
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}