{
  "name": "Campaign Registration",
  "uuid": "aa820ac3-404f-4377-82ad-41450ab01737",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "82d1fab1-0fc5-4dc1-b0a6-c0a683637dc2",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Campaign Start Date",
          "uuid": "217c559b-0b14-448c-b684-2b79e4ee721e",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Campaign End Date",
          "uuid": "6a16de14-c2a4-4aab-ba1c-9af0b473e4f1",
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
          "displayOrder": 2,
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
          "name": "Objective",
          "uuid": "5e1a7e53-74f4-4d54-8aa7-253818379ed3",
          "keyValues": [],
          "concept": {
            "name": "Objective",
            "uuid": "cd59dabe-046a-4618-92c9-c08bb88206ef",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Brief description",
          "uuid": "8cdb7a6c-76a7-4652-8c7e-30e1f928ceac",
          "keyValues": [],
          "concept": {
            "name": "BriefDescription",
            "uuid": "6ec307a8-afb9-413c-ae64-aa76284769c6",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    
    return formElementGroup.formElements.map((formElement) => {
    
        if(individual) {
            
            if(!individual.lowestAddressLevel || individual.lowestAddressLevel.name.length == 0) {
                individual.firstName = "Campaign: ";
                individual.name = "Campaign: ";
            } else {
                individual.firstName = "Campaign: " + individual.lowestAddressLevel.name;
                individual.name = "Campaign: " + individual.lowestAddressLevel.name;
            }
        }
        
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
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