{
  "name": "Follow Up Letter Encounter Cancellation",
  "uuid": "0c209eec-21af-4b07-88e1-b1472e0fd850",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "7c52307d-6da7-42a1-b2d6-fe71f1a7cfd7",
      "name": "Letter Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of Posting",
          "uuid": "fc3bc3c2-af53-4173-9761-62e624d3271f",
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
  
  let selectedDate = programEncounter.getObservationValue('3541ec56-6082-47dd-8761-2abdfbe30399');

    if(selectedDate) {
      
      const currentDate = moment().startOf('day');
      selectedDate = moment(selectedDate.getValue()).startOf('day');
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
          "name": "Applicant Name",
          "uuid": "07bce77e-782b-42fc-8d88-1df0c6379f52",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Subject matter of letter",
          "uuid": "332b4e0c-f3c2-47b2-bbd6-f54ad1ed8dfe",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Posted to (Name of Authority)",
          "uuid": "b499fe0a-e1cd-41c7-b7c1-9fdba80430fc",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Date of receipt by authority",
          "uuid": "33abb953-a990-4ca0-b17f-7441076f56dc",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date of receipt by Authority",
            "uuid": "135fa3f5-af03-43aa-8cc7-26bb42ff7ce0",
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
  let receiptDate = programEncounter.getObservationValue('135fa3f5-af03-43aa-8cc7-26bb42ff7ce0');

    if(dateOfPosting) {
      dateOfPosting = moment(dateOfPosting.getValue()).startOf('day');
      receiptDate = moment(receiptDate.getValue()).startOf('day');
      if(dateOfPosting.isAfter(receiptDate)){
          validationErrors.push("Invalid date: Date of receipt can't be more than Date of posting");
      }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Date of response",
          "uuid": "8df3e1d5-0f4e-437f-b109-63e56089aa5d",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
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
  
  let dateOfPosting = programEncounter.getObservationValue('3541ec56-6082-47dd-8761-2abdfbe30399');
  let receiptDate = programEncounter.getObservationValue('135fa3f5-af03-43aa-8cc7-26bb42ff7ce0');
  let dateOfResponse = programEncounter.getObservationValue('37c1036c-9cc8-4174-9e90-57043950fda3');

    if(dateOfPosting) {
      dateOfPosting = moment(dateOfPosting.getValue()).startOf('day');
      receiptDate = moment(receiptDate.getValue()).startOf('day');
      dateOfResponse = moment(dateOfResponse.getValue()).startOf('day');
      if(dateOfPosting.isAfter(dateOfResponse) || receiptDate.isAfter(dateOfResponse)){
          validationErrors.push("Invalid date: Date of response can't be more than date of posting or date of receipt");
      }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Letter Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}