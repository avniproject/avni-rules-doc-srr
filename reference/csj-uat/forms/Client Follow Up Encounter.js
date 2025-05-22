{
  "name": "Client Follow Up Encounter",
  "uuid": "8223b848-62d2-4f0e-9dcc-0312a47e51de",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "b5c8aa97-ed27-4d09-b2a5-c35ea7f97092",
      "name": "Issue Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Name of client",
          "uuid": "b837589d-8320-4d8d-b32c-945e8b03b16a",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Name of client",
            "uuid": "6bea3db9-3333-4d29-96ba-a7d41615347e",
            "dataType": "Text",
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
    let answersToSkip = [];
    let validationErrors = [];

    const value = programEncounter.programEnrolment.getObservationReadableValue('2dd148df-6fd0-43ba-a777-ceaf5dd9fca9') || null;

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Phone Number",
          "uuid": "66ba0c5f-1732-4b4f-bbf7-856581981bba",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let answersToSkip = [];
  let validationErrors = [];
  
  const value = programEncounter.programEnrolment.getObservationReadableValue('ab1a07f3-6c68-43e9-95fc-0d44bda514b0') || null;

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Describe the Type of Issue identified",
          "uuid": "f96d496f-3a05-4787-9377-5de851f8827f",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Describe the Type of Issue identified",
            "uuid": "08e8417e-85ab-4e92-a729-e04f10c48f9c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let answersToSkip = [];
  let validationErrors = [];
  
  const value = programEncounter.programEnrolment.getObservationReadableValue('08e8417e-85ab-4e92-a729-e04f10c48f9c') || null;
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Status",
          "uuid": "f3b4c1af-12e7-402e-84e0-dbb71c3b8753",
          "keyValues": [],
          "concept": {
            "name": "Client Follow up Status",
            "uuid": "e26a61db-d7bf-4fbe-b5e2-ed60294e8f62",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Follow-up required",
                "uuid": "271a0678-be07-4802-b228-92e1cfd8c56e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "New case",
                "uuid": "f10164c3-281d-44b0-8f2c-86f1e59b9886",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Closed",
                "uuid": "d56b69db-da83-4f60-9a3f-4cc159e5e191",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "New claim",
                "uuid": "b25f01df-c6e9-45b6-8130-22ef12c11738",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
          "name": "Do you have any more identified issues?",
          "uuid": "fa58b215-b146-4652-a8e9-718593e1fcef",
          "keyValues": [],
          "concept": {
            "name": "Do you have any more identified issues",
            "uuid": "51400375-9167-44cd-93b9-4d19d79f8c68",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Issue Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}