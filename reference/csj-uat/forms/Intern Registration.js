{
  "name": "Intern Registration",
  "uuid": "da801cee-489c-45d7-bd4a-e504f720dfe1",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "406c81d8-e99a-4756-b5a3-cc7110ee24b8",
      "name": "Details of Intern",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Phone Number",
          "uuid": "c507770d-5902-4391-85cf-d5d8488bc947",
          "keyValues": [],
          "concept": {
            "name": "Phone Number (voided~259989)",
            "uuid": "690172d4-9bdc-423d-9125-9243c7c95202",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 10,
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Gender",
          "uuid": "1c689c48-30a1-4c19-b476-e72cf7d3c1d8",
          "keyValues": [],
          "concept": {
            "name": "Genders (voided~264019)",
            "uuid": "2ac78cd0-3730-4137-b68e-8f4e38bcb33d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "4012e98a-eb61-47fb-9f33-afeb3a66fff9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "e21cd74f-135e-40fa-8d83-a26a9d343191",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e90379c5-1934-4b03-a41c-cead0588b33c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "1ca012ed-2ec0-45fd-9177-32de6d2d33a8",
          "keyValues": [],
          "concept": {
            "name": "Phone",
            "uuid": "11394907-2df2-474e-919d-c3ddc393305f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Gender",
          "uuid": "d64d13ca-1546-411d-9218-e35b567b899d",
          "keyValues": [],
          "concept": {
            "name": "Gender Of the Intern",
            "uuid": "7f5e7ad1-ca23-437f-926c-4c587f1ac7d3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Female",
                "uuid": "4012e98a-eb61-47fb-9f33-afeb3a66fff9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Transgender woman",
                "uuid": "1ea571f4-a8b6-4f56-86ad-b34e81a5b719",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Transgender person",
                "uuid": "ba263a4c-1b92-4630-a2d7-f71b08309145",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "e90379c5-1934-4b03-a41c-cead0588b33c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Transgender man",
                "uuid": "c8102aaf-6cc8-41da-8a52-b9b27b81250c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "name": "E mail",
          "uuid": "48763887-2423-4e9b-9dbf-7595fa09579b",
          "keyValues": [],
          "concept": {
            "name": "E mail",
            "uuid": "63436fc8-4500-49a0-8692-60c74dee6e92",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$",
            "descriptionKey": "Invalid Email"
          },
          "mandatory": true
        },
        {
          "name": "College Name",
          "uuid": "b9291e33-798c-4d6a-ad13-956842c57b04",
          "keyValues": [],
          "concept": {
            "name": "College Name",
            "uuid": "5e81511b-b9d4-4bb1-8352-e1fb184a8364",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Year of College",
          "uuid": "3a03dbda-c3bf-41e5-9e51-d60977b98233",
          "keyValues": [],
          "concept": {
            "name": "Year of College",
            "uuid": "86ee6f69-95dc-42d5-8e58-120051090aa2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[A-Za-z0-9]+$",
            "descriptionKey": "Answer must be alphanumeric"
          },
          "mandatory": true
        },
        {
          "name": "Year",
          "uuid": "140bbb94-5c49-4e42-b7f6-f18d6cff6e7d",
          "keyValues": [],
          "concept": {
            "name": "Year",
            "uuid": "c4ebeec6-8d41-43a3-acf9-a9ebc7927866",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^\\d{4}$",
            "descriptionKey": "Invalid Year"
          },
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Year",
          "uuid": "84077dc7-c4db-4635-95a1-22f5a2cd3d64",
          "keyValues": [],
          "concept": {
            "name": "Year (voided~259995)",
            "uuid": "38d3acbc-be94-4bac-9b15-2e5fc8d32639",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Start Date of Internship",
          "uuid": "2a26eb16-5c95-4027-afaf-2b5c2da4bd85",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "StartDate",
            "uuid": "8102a34f-6d41-484c-b3dc-23208abacbea",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "End Date of Internship",
          "uuid": "e45cc3ab-73d3-440f-9755-280beeeb17ac",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "EndDate",
            "uuid": "c63113ca-5dec-4048-bf99-fe51f36f7dfb",
            "dataType": "Date",
            "answers": [],
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

  const startDate = individual.getObservationReadableValue('StartDate');
  const endDate = individual.getObservationReadableValue('EndDate');

  if (startDate && endDate) {
    const startMoment = moment(startDate, 'YYYY-MM-DD'); 
    const endMoment = moment(endDate, 'YYYY-MM-DD');

    if (!endMoment.isAfter(startMoment)) {
      validationErrors.push('End date must be after the start date.');
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
}
,
          "mandatory": true
        },
        {
          "name": "Name of main point of contact in the organisation",
          "uuid": "43eb793c-0ed8-44af-ac71-7499a3f2fb45",
          "keyValues": [],
          "concept": {
            "name": "PointOfContact",
            "uuid": "8d0749a8-41f1-449d-b7e1-4b65cf2294d1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Contact Number of the point of contact in the organisation",
          "uuid": "4e6d2225-d21c-47d4-a18e-31f3e78b59d5",
          "keyValues": [],
          "concept": {
            "name": "ContactNumber",
            "uuid": "8ebbe97d-056b-4679-8cef-c662b4a7f73c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "mandatory": false
        },
        {
          "name": "Contact Number of the point of contact in the organisation",
          "uuid": "ce45c07f-9a41-4f23-95b1-800f77c6acec",
          "keyValues": [],
          "concept": {
            "name": "ContactNumber (voided~259999)",
            "uuid": "f3e5907f-bc2f-4490-9316-3c6aa984e7cc",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 10,
            "active": true,
            "voided": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Work Done",
          "uuid": "82e35020-e7ca-46d5-9841-c5d9f8f85081",
          "keyValues": [],
          "concept": {
            "name": "WorkDone",
            "uuid": "5b97079f-bab9-4999-a644-a66ec6b606da",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Link to google drive with work done",
          "uuid": "07accd09-5099-4d2e-9c9b-51d28fe37fe4",
          "keyValues": [],
          "concept": {
            "name": "Link to google drive with work done",
            "uuid": "433724e2-9f98-4a82-8efa-3cdcb858c679",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^https:\\/\\/[a-zA-Z0-9.-]+\\.com(\\/[^\\s]*)?$",
            "descriptionKey": "Please provide only one correct URL starting with [https://]"
          },
          "mandatory": false
        },
        {
          "name": "Link",
          "uuid": "40392ae8-b077-49de-aecc-a4137923350e",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Link",
            "uuid": "8b44231b-7bdf-4716-b357-06572d217d51",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule": "",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Google Doc archive links of all work produced",
          "uuid": "30eaa5c4-4f68-4995-8805-f692c9d92f6d",
          "keyValues": [],
          "concept": {
            "name": "Google Doc Link",
            "uuid": "fc46dcb4-ebd7-453c-a91b-216298d532ec",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule": "",
          "validFormat": {
            "regex": "^https:\\/\\/[a-zA-Z0-9.-]+\\.com(\\/[^\\s]*)?$",
            "descriptionKey": "Please provide only one correct URL starting with [https://]"
          },
          "parentFormElementUuid": "40392ae8-b077-49de-aecc-a4137923350e",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Google Doc archive links of all work produced",
          "uuid": "939d3229-0ef2-4d06-b50e-6d673bc66dae",
          "keyValues": [],
          "concept": {
            "name": "Google Doc (voided~263903)",
            "uuid": "28436af0-1b66-4710-be36-20d1dd4a8006",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Details of Intern",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}