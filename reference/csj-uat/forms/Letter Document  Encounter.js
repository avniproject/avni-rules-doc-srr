{
  "name": "Letter Document  Encounter",
  "uuid": "60f228b7-9d84-4a58-b352-6c00f7473ee9",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "1f33200b-2c9e-49cf-897c-5984b3013214",
      "name": "Document",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Letter Document Details",
          "uuid": "9d7da93a-3116-4062-8b24-776ded4b0e04",
          "keyValues": [],
          "concept": {
            "name": "Letter Document Details",
            "uuid": "26746aea-5579-4394-ae1c-ac6bfe2c8370",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Name of Document",
          "uuid": "46ac7b8b-dfc5-48a4-b58c-2288f43183b9",
          "keyValues": [],
          "concept": {
            "name": "Name of Document",
            "uuid": "84d7e0ad-1cbb-4ac3-a831-4dbd2a89cbb1",
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
          "name": "Date of Document",
          "uuid": "caffffb6-4e89-43e3-b39f-27f05f0a6a22",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            },
            {
              "key": "durationOptions",
              "value": [
                "years",
                "months",
                "weeks"
              ]
            }
          ],
          "concept": {
            "name": "Date of Document",
            "uuid": "8bb3fd94-f7b2-4b37-aa00-db81833ff379",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Upload File",
          "uuid": "ddb149c5-c11a-46a4-80ae-9cc3cdde589f",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload File for Letter Document",
            "uuid": "1fe8cc53-8b76-4130-9fb2-7219402dc941",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Upload Image",
          "uuid": "603e3ba9-fa0a-4686-9781-2372b984179f",
          "keyValues": [],
          "concept": {
            "name": "Upload Image for letter document",
            "uuid": "01999727-08f9-4d0d-886a-86ab3143ec36",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Nature of document",
          "uuid": "63803e6c-73a4-4b79-bccf-187b3ab2a99e",
          "keyValues": [],
          "concept": {
            "name": "Nature of document Letter",
            "uuid": "82268aa0-df14-4240-bdd8-4b9625ee7511",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Follow up Letter",
                "uuid": "4dd233ab-e56d-40cf-846b-b3dbfeb51e26",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Follow Up RTI",
                "uuid": "8658f1e9-88b9-4896-aa3a-4fa214c4d3cf",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Letter",
                "uuid": "266cb87a-87f9-419d-a572-0ec7744118a1",
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
          "parentFormElementUuid": "9d7da93a-3116-4062-8b24-776ded4b0e04",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Document",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "c61e12e9-ba6a-4b43-b599-0c925b430c6d",
      "name": "Documents",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Letter Document Details",
          "uuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Letter Document Details",
            "uuid": "26746aea-5579-4394-ae1c-ac6bfe2c8370",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Nature of document",
          "uuid": "641f1afb-a0d0-428a-b3a9-e1001bcd1aa1",
          "keyValues": [],
          "concept": {
            "name": "Nature of document Letter",
            "uuid": "82268aa0-df14-4240-bdd8-4b9625ee7511",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Follow up Letter",
                "uuid": "4dd233ab-e56d-40cf-846b-b3dbfeb51e26",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Follow Up RTI",
                "uuid": "8658f1e9-88b9-4896-aa3a-4fa214c4d3cf",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Letter",
                "uuid": "266cb87a-87f9-419d-a572-0ec7744118a1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "mandatory": true
        },
        {
          "name": "Name of Document",
          "uuid": "b3cc2d42-f933-432d-ac09-ab306fc63ea4",
          "keyValues": [],
          "concept": {
            "name": "Name of Document",
            "uuid": "84d7e0ad-1cbb-4ac3-a831-4dbd2a89cbb1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "mandatory": true
        },
        {
          "name": "Date of Document",
          "uuid": "93337da2-d38f-4712-aa23-1bb80320a713",
          "keyValues": [],
          "concept": {
            "name": "Date of Document",
            "uuid": "8bb3fd94-f7b2-4b37-aa00-db81833ff379",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "mandatory": true
        },
        {
          "name": "Upload File",
          "uuid": "ee218d24-594c-4a5a-8bfb-b00f85b8674a",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload File for Letter Document",
            "uuid": "1fe8cc53-8b76-4130-9fb2-7219402dc941",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "mandatory": false
        },
        {
          "name": "Upload Image",
          "uuid": "e6439b4b-5735-4c30-a594-d7e32f470eed",
          "keyValues": [],
          "concept": {
            "name": "Upload Image for letter document",
            "uuid": "01999727-08f9-4d0d-886a-86ab3143ec36",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "parentFormElementUuid": "cd779c05-d113-4ede-ba69-876c414b5b3f",
          "mandatory": false
        }
      ],
      "display": "Documents",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  const formElement = params.formElement;
  const _ = imports.lodash;
  let validationErrors = [];
  let documentDetails = programEncounter.findGroupedObservation("26746aea-5579-4394-ae1c-ac6bfe2c8370");
  if(documentDetails && documentDetails.length > 0){

    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let uploadFile = currentQuestionGroup.findObservationByConceptUUID("1fe8cc53-8b76-4130-9fb2-7219402dc941");
    let uploadImage =  currentQuestionGroup.findObservationByConceptUUID("01999727-08f9-4d0d-886a-86ab3143ec36");


    if((uploadFile === null || uploadFile === undefined) && (uploadImage === null || uploadImage === undefined)){
        let validationError = imports.common.createValidationError('Please upload either image or file');
        validationResults.push(validationError);
    }
}
}  
return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": []
}