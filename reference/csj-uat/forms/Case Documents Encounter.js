{
  "name": "Case Documents Encounter",
  "uuid": "76733bb6-c64b-4764-af27-131e9764ffae",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "81fbee9c-d1a6-4fae-92e9-ed89fc48e5d3",
      "name": "Documents",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Nature of document",
          "uuid": "f3fae0d7-9f49-49fa-9887-810e8e6c444b",
          "keyValues": [],
          "concept": {
            "name": "Nature of document",
            "uuid": "14d5292d-5857-454e-905f-36d458388195",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Victim Compensation order",
                "uuid": "28348d5e-dc45-4db4-8360-3fafc96e1536",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "FIR",
                "uuid": "b2db5e32-18e6-468b-b099-e3631a50fd31",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other application filed by us",
                "uuid": "f88fbd87-5f6b-4e31-a86e-b9f2d9820d93",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Judgment",
                "uuid": "7a29f6b1-a97b-46c1-bc55-a81e0afae9d5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Final Argument",
                "uuid": "6d1c74ab-05c5-4476-bf12-0f0bc24dcd88",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Plaint",
                "uuid": "4a27e498-03a5-4a85-b2f9-598ed782aa56",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other court order",
                "uuid": "1a7a298d-415a-4819-b19e-4f06d0e87130",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Chargesheet",
                "uuid": "9ea54426-5a5c-4e29-8a93-394b0f34dfbb",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Witness Statements",
                "uuid": "a09b7c7d-e19f-44cc-9bff-a50fc28aadc9",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Victim Compensation Application",
                "uuid": "de1b94f3-b217-42a9-ab95-cf3797ff076b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Order",
                "uuid": "3b0a537f-6a5c-4d2e-9335-fb7cf12cf2f2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Name of Document",
          "uuid": "7d2d6661-8ccf-4af7-a783-79b6032141bd",
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
          "mandatory": false
        },
        {
          "name": "Date of Document",
          "uuid": "407774d3-9f02-4fd4-935c-204c92027e15",
          "keyValues": [],
          "concept": {
            "name": "Date of Document",
            "uuid": "8bb3fd94-f7b2-4b37-aa00-db81833ff379",
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
  
  let selectedDate = encounter.getObservationValue('8bb3fd94-f7b2-4b37-aa00-db81833ff379');

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
          "name": "Upload",
          "uuid": "4c23e799-201a-44ff-87bd-1f44fcb828a5",
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
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Upload necessary documents related to your case",
          "uuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Documents Details",
            "uuid": "6fa30553-806c-4a54-ac9f-a348ec9f7275",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Nature of document",
          "uuid": "1301b085-b433-47d1-a3e0-cbc6b8443f04",
          "keyValues": [],
          "concept": {
            "name": "Nature of document",
            "uuid": "14d5292d-5857-454e-905f-36d458388195",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Victim Compensation order",
                "uuid": "28348d5e-dc45-4db4-8360-3fafc96e1536",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "FIR",
                "uuid": "b2db5e32-18e6-468b-b099-e3631a50fd31",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other application filed by us",
                "uuid": "f88fbd87-5f6b-4e31-a86e-b9f2d9820d93",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Judgment",
                "uuid": "7a29f6b1-a97b-46c1-bc55-a81e0afae9d5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Final Argument",
                "uuid": "6d1c74ab-05c5-4476-bf12-0f0bc24dcd88",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Plaint",
                "uuid": "4a27e498-03a5-4a85-b2f9-598ed782aa56",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other court order",
                "uuid": "1a7a298d-415a-4819-b19e-4f06d0e87130",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Chargesheet",
                "uuid": "9ea54426-5a5c-4e29-8a93-394b0f34dfbb",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Witness Statements",
                "uuid": "a09b7c7d-e19f-44cc-9bff-a50fc28aadc9",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Victim Compensation Application",
                "uuid": "de1b94f3-b217-42a9-ab95-cf3797ff076b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Order",
                "uuid": "3b0a537f-6a5c-4d2e-9335-fb7cf12cf2f2",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "parentFormElementUuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
          "mandatory": true
        },
        {
          "name": "Name of Document",
          "uuid": "7a8b866b-219b-424d-a5cb-e68a1604f42f",
          "keyValues": [],
          "concept": {
            "name": "Name of Document",
            "uuid": "84d7e0ad-1cbb-4ac3-a831-4dbd2a89cbb1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
          "mandatory": false
        },
        {
          "name": "Date of Document",
          "uuid": "92f4bd3d-9be7-47b7-a245-12c0b529a258",
          "keyValues": [],
          "concept": {
            "name": "Date of Document",
            "uuid": "8bb3fd94-f7b2-4b37-aa00-db81833ff379",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
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
  let documentDetails = encounter.getObservationValue("6fa30553-806c-4a54-ac9f-a348ec9f7275");
  
  if(documentDetails && documentDetails.length > 0){

    let currentQuestionGroup = documentDetails[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('8bb3fd94-f7b2-4b37-aa00-db81833ff379');

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
          "parentFormElementUuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
          "mandatory": true
        },
        {
          "name": "Upload File",
          "uuid": "66d3b6dd-ce3f-461a-97e4-1231d073a92f",
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
          "displayOrder": 9,
          "type": "SingleSelect",
          "parentFormElementUuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
          "mandatory": false
        },
        {
          "name": "Upload Image",
          "uuid": "f21dec69-3574-4d4b-979a-c70f1f5f11e8",
          "keyValues": [],
          "concept": {
            "name": "Upload Image Case",
            "uuid": "cdc460c1-400b-41ff-abc7-a8a324e2275f",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "parentFormElementUuid": "061c2c98-fa69-484f-8aae-a24da352fb38",
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
  let documentDetails = programEncounter.findGroupedObservation("6fa30553-806c-4a54-ac9f-a348ec9f7275");
  if(documentDetails && documentDetails.length > 0){

    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let uploadFile = currentQuestionGroup.findObservationByConceptUUID("f217e57e-b1a3-4e0f-8af4-d193be6dabe1");
    let uploadImage =  currentQuestionGroup.findObservationByConceptUUID("cdc460c1-400b-41ff-abc7-a8a324e2275f");


    if((uploadFile === null || uploadFile === undefined) && (uploadImage === null || uploadImage === undefined)){
        let validationError = imports.common.createValidationError('Please upload either image or file');
        validationResults.push(validationError);
    }
}
}  
return validationResults;
}
,
  "checklistsRule": "",
  "decisionConcepts": []
}