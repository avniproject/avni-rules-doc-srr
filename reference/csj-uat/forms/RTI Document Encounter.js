{
  "name": "RTI Document Encounter",
  "uuid": "df1cd5f4-5ea4-4fd5-824f-9743089f88cf",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "4244c37b-fe10-41cc-8cb8-a98441c45336",
      "name": "Document",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "RTI Document Details",
          "uuid": "c556c204-4d0e-48ce-86dc-40d097a932dc",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Document Details",
            "uuid": "62a7209d-40b2-46e9-85df-357d4e7b04b0",
            "dataType": "QuestionGroup",
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
  const questionGroupIndex = params.questionGroupIndex;
  let documentDetails = encounter.getObservationValue("62a7209d-40b2-46e9-85df-357d4e7b04b0");
  
  if(documentDetails && documentDetails.length > 0){

    let currentQuestionGroup = documentDetails[questionGroupIndex]
    let selectedDate = currentQuestionGroup.findObservationByConceptUUID('241786fc-f1a5-4c6d-bdb5-3ad5c7e1cf32');

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
          "parentFormElementUuid": "c556c204-4d0e-48ce-86dc-40d097a932dc",
          "mandatory": true
        },
        {
          "name": "Upload file",
          "uuid": "966c3ec9-6f42-4c2e-a448-a9d65f7adb01",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "upload file",
            "uuid": "62f8725b-2df0-4765-b9c4-781f8c1e2e3e",
            "dataType": "File",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  const formElement = params.formElement;
  const _ = imports.lodash;
  let validationErrors = [];
  let documentDetails = programEncounter.findGroupedObservation("62a7209d-40b2-46e9-85df-357d4e7b04b0");
  if(documentDetails && documentDetails.length > 0){

    for(let i = 0;i<documentDetails.length;i++){
    let currentQuestionGroup = documentDetails[i]
    let uploadFile = currentQuestionGroup.findObservationByConceptUUID("62f8725b-2df0-4765-b9c4-781f8c1e2e3e");
    let uploadImage =  currentQuestionGroup.findObservationByConceptUUID("fe30a8b6-0c79-4fb6-988a-4f2a717a8fbe");


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