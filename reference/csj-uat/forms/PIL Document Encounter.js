{
  "name": "PIL Document Encounter",
  "uuid": "d9bf00a2-92fd-4ed9-a2ee-418b5a484faa",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "7cb86280-f8fc-4dfd-9972-59f8f01d3ef2",
      "name": "PIL Documents",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Details of PIL Documents",
          "uuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Details of PIL Documents",
            "uuid": "25beb318-696f-4496-921c-cb3a78ac7f43",
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
          "uuid": "5f341fb7-2305-4fa8-b18b-519b986cdab6",
          "keyValues": [],
          "concept": {
            "name": "Nature Of document",
            "uuid": "fed3c619-afc8-45ad-ba32-253babf69356",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Petition",
                "uuid": "2634687b-71af-480a-b004-ac92b804f50b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "mandatory": true
        },
        {
          "name": "Name of Document",
          "uuid": "e00679be-a932-42f2-9d9f-42f2f04cbb2f",
          "keyValues": [],
          "concept": {
            "name": "Name Of document",
            "uuid": "dde8d71b-38bb-4e25-b5f9-a48681a89aa4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "mandatory": true
        },
        {
          "name": "Date of Document",
          "uuid": "3d90138f-2ac5-4e9d-92f7-4c33db170063",
          "keyValues": [
            {
              "key": "datePickerMode",
              "value": "calendar"
            }
          ],
          "concept": {
            "name": "Date Of document",
            "uuid": "5ae442be-36e2-4592-971c-70080fd09c9f",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule": "",
          "parentFormElementUuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "mandatory": true
        },
        {
          "name": "Upload file",
          "uuid": "f2fe81c7-c650-499f-b997-13f86b2217c7",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Upload File",
            "uuid": "9364a616-e0f0-4bdf-b0d5-cbd7dceee763",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "mandatory": false
        },
        {
          "name": "Upload Image",
          "uuid": "77fdfeb4-cc1c-478e-8d7b-886b490810ee",
          "keyValues": [],
          "concept": {
            "name": "Upload image",
            "uuid": "752196da-a565-42a9-97d1-cd1250c804c7",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "parentFormElementUuid": "974a120d-b0e1-4102-be50-0e444b282420",
          "mandatory": false
        }
      ],
      "display": "PIL Documents",
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
  let documentDetails = programEncounter.findGroupedObservation("25beb318-696f-4496-921c-cb3a78ac7f43");
  if(documentDetails && documentDetails.length > 0){

    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let uploadFile = currentQuestionGroup.findObservationByConceptUUID("9364a616-e0f0-4bdf-b0d5-cbd7dceee763");
    let uploadImage =  currentQuestionGroup.findObservationByConceptUUID("752196da-a565-42a9-97d1-cd1250c804c7");


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