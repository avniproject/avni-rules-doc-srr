{
  "name": "Claim Legal Fund",
  "uuid": "4754a916-625d-45e1-965f-4daacece9215",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "7fbbb084-6b18-4d95-9a04-f666b35ec606",
      "name": "Legal Fund Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Fill details of the legal fund received",
          "uuid": "96afc7c4-17a9-429c-ab42-6f6a3cbbc1cb",
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
          "mandatory": false
        },
        {
          "name": "Date of Receipt",
          "uuid": "6aac9be8-1510-45f5-b54d-394479c10694",
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
          "displayOrder": 2,
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
    if(questionGroup){
        const currentQuestionGroup = questionGroup[questionGroupIndex];
       
        if(currentQuestionGroup){
            let dateofReceipt = currentQuestionGroup.findObservationByConceptUUID("d2869f1e-4e6c-4b5c-815d-1d96a08889cd");
        
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
          "parentFormElementUuid": "96afc7c4-17a9-429c-ab42-6f6a3cbbc1cb",
          "mandatory": true
        },
        {
          "name": "Amount",
          "uuid": "b9a73502-8687-48fd-8663-141196868442",
          "keyValues": [],
          "concept": {
            "name": "Amount - Legal Fund",
            "uuid": "498f42be-21dc-4b03-a2ed-5761d327583f",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule": "",
          "parentFormElementUuid": "96afc7c4-17a9-429c-ab42-6f6a3cbbc1cb",
          "mandatory": true
        },
        {
          "name": "Stage at which taken",
          "uuid": "e73a709b-5a93-4aba-95f7-3a4afa1be4d7",
          "keyValues": [],
          "concept": {
            "name": "Stage at which taken - Legal Fund",
            "uuid": "02a93e4e-1ce1-42d0-9c08-89baf75ea6d5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "96afc7c4-17a9-429c-ab42-6f6a3cbbc1cb",
          "mandatory": true
        },
        {
          "name": "Upload receipt",
          "uuid": "14078e20-f103-4510-9db4-a19d5362ed72",
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
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "96afc7c4-17a9-429c-ab42-6f6a3cbbc1cb",
          "mandatory": true
        }
      ],
      "display": "Legal Fund Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}