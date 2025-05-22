{
  "name": "PIL Legal Fund Encounter",
  "uuid": "15a1f0f1-ffe3-4f7d-affe-ebcb9fed95ba",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "bb757c44-d5bb-442e-a0ab-3bc4df4f5c00",
      "name": "PIL Legal Fund Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Fill in the details related to the Legal Fund",
          "uuid": "5c15f472-71d3-4726-ae2c-740593cd2bd2",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Fill in the details related to the Legal Fund",
            "uuid": "4b40e085-813c-426a-9d3b-5f2ed1b0d690",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Legal Fund Amount",
          "uuid": "69eaf44a-efdb-45ab-be23-5f8c0692d2ac",
          "keyValues": [],
          "concept": {
            "name": "Legal Fund Amount",
            "uuid": "a71583ab-41cc-403b-a378-bbd0ce54bbb1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "5c15f472-71d3-4726-ae2c-740593cd2bd2",
          "mandatory": false
        },
        {
          "name": "Upload File",
          "uuid": "1c72dde9-ddb6-4e99-b716-154cfb4460df",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "PIL Legal Fund Upload File",
            "uuid": "843df6e9-d8d5-4b9d-a4f8-4ac4f0c277d4",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "5c15f472-71d3-4726-ae2c-740593cd2bd2",
          "mandatory": false
        },
        {
          "name": "Upload Image",
          "uuid": "e9007fe0-5b4e-4dc0-98e3-64556bf29cc5",
          "keyValues": [],
          "concept": {
            "name": "PIL Legal Fund Upload Image",
            "uuid": "82ca5799-ec9c-4d6e-9bc5-947045530be9",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "5c15f472-71d3-4726-ae2c-740593cd2bd2",
          "mandatory": false
        }
      ],
      "display": "PIL Legal Fund Details",
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
  let documentDetails = programEncounter.findGroupedObservation("4b40e085-813c-426a-9d3b-5f2ed1b0d690");
  if(documentDetails && documentDetails.length > 0){

    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let uploadFile = currentQuestionGroup.findObservationByConceptUUID("843df6e9-d8d5-4b9d-a4f8-4ac4f0c277d4");
    let uploadImage =  currentQuestionGroup.findObservationByConceptUUID("82ca5799-ec9c-4d6e-9bc5-947045530be9");


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