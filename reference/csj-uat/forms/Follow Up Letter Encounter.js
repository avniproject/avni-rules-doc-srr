{
  "name": "Follow Up Letter Encounter",
  "uuid": "719da22b-286e-4d4c-9776-114d5d3522cd",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "bee9a7f2-be20-4d62-af02-f44c6e1d29a2",
      "name": "Letter Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of Posting",
          "uuid": "cf5fb825-0edc-42d6-808f-7313d363d16e",
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
      selectedDate = moment(selectedDate).startOf('day');
      if(selectedDate.isAfter(currentDate)){
          validationErrors.push("Invalid date: Future dates are not allowed");
      }
    }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Applicant Name",
          "uuid": "20e5c10e-3d74-4c7b-95a6-bf0a9e5041a7",
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
          "name": "Subject matter of letter",
          "uuid": "1bcf1a8d-4415-4739-9e7d-0d15bf915a65",
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
          "uuid": "e42f3338-cecb-4e26-a546-02f959d2108c",
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
          "uuid": "ea5855da-4178-4ea0-820d-edf61b833717",
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
          "uuid": "6010b52b-881d-451c-ad9e-ab7d73a7f66c",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of response",
            "uuid": "dc965e77-f3f3-4310-a3d0-65bcb90019ce",
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
  
  let receiptDate = programEncounter.getObservationValue('135fa3f5-af03-43aa-8cc7-26bb42ff7ce0');
  let dateOfResponse = programEncounter.getObservationValue('dc965e77-f3f3-4310-a3d0-65bcb90019ce');

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