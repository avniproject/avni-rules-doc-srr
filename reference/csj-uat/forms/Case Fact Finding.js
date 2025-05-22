{
  "name": "Case Fact Finding",
  "uuid": "be595c4d-3779-4b3e-85ee-3b76f01fa982",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "22b4d5ab-1bf6-4da7-a503-6c75f5230d3c",
      "name": "Fact Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of incident (Fact Finding)",
          "uuid": "db0c319e-edba-4818-96c8-2279f3fac70a",
          "keyValues": [],
          "concept": {
            "name": "Date of incident (Fact Finding)",
            "uuid": "a08e0302-36ed-45c1-b2ec-a08e5e15db3e",
            "dataType": "Date",
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
  
  let selectedDate = encounter.getObservationValue('a08e0302-36ed-45c1-b2ec-a08e5e15db3e');

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
          "name": "Date of receiving info about fact finding",
          "uuid": "b524c179-4be6-4ad6-9e97-b00b0ea9334b",
          "keyValues": [],
          "concept": {
            "name": "Date of receiving info about fact finding",
            "uuid": "fbac10ae-18c2-4cc2-a471-4a353e46b29c",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
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
  
  let selectedDate = encounter.getObservationValue('fbac10ae-18c2-4cc2-a471-4a353e46b29c');
  
  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
    /*
    let dateOfIncident = encounter.getObservationValue('a08e0302-36ed-45c1-b2ec-a08e5e15db3e');
    if(dateOfIncident){
      dateOfIncident = moment(dateOfIncident).startOf('day');
      if(selectedDate.isBefore(dateOfIncident)){
        validationErrors.push("Invalid date: Selected Date must be after the Date of Incident");
      }
    }
    */
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Date of fact finding",
          "uuid": "c0c3f815-2828-41c8-b315-fbee35885ea1",
          "keyValues": [],
          "concept": {
            "name": "Date of fact finding",
            "uuid": "50c9ddd5-7887-4df5-82dd-8bfd9cc457c5",
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
  
  let selectedDate = encounter.getObservationValue('50c9ddd5-7887-4df5-82dd-8bfd9cc457c5');

  if(selectedDate) {
    const currentDate = moment().startOf('day');
    selectedDate = moment(selectedDate).startOf('day');
    if(selectedDate.isAfter(currentDate)){
      validationErrors.push("Invalid date: Future dates are not allowed");
    }
    /*
    let dateOfRecievingInfo = encounter.getObservationValue('fbac10ae-18c2-4cc2-a471-4a353e46b29c');
    if(dateOfRecievingInfo){
      dateOfRecievingInfo = moment(dateOfRecievingInfo).startOf('day');
      if(selectedDate.isBefore(dateOfRecievingInfo)){
        validationErrors.push("Invalid date: Selected Date must be after the Date of Recieving Information");
      }
    }
    */
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "State Incident",
          "uuid": "baf0531f-4e26-44bc-98ee-2bdea969c860",
          "keyValues": [],
          "concept": {
            "name": "State Incident Location",
            "uuid": "554c8577-a1f2-403d-92b5-9bb8ea4f3989",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "c1f26e98-816d-4cf5-aada-6f4dcab46487"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "b11a3eba-5e28-4b7a-886d-5cec856d02ba"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "State Incident",
          "uuid": "b0ea53cc-1492-4c3b-9365-3ffb87e8e59a",
          "keyValues": [],
          "concept": {
            "name": "State Incident",
            "uuid": "8d9d91cf-947a-4734-9e40-ecd25d142d9b",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "e68249ed-c278-4c38-b838-a1d52896018a"
                ]
              }
            ]
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "District incident",
          "uuid": "6ede34c2-c6a3-45d7-ac03-e19a45a8c3f9",
          "keyValues": [],
          "concept": {
            "name": "District incident",
            "uuid": "0ce1b98d-e6a4-4114-8b46-96fc8d359e29",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "e68249ed-c278-4c38-b838-a1d52896018a"
              }
            ]
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Block Incident",
          "uuid": "e315b4d4-c755-40cd-8f78-db78e4d7073d",
          "keyValues": [],
          "concept": {
            "name": "Block Incident",
            "uuid": "b5ba2ad8-1914-49a0-8264-0db55d6aaf0a",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "c6a4422b-07b6-40ba-bf9b-d5cc312549cf"
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village / town Incident",
          "uuid": "de9cbb5c-262c-472a-9a7c-87646f56beb9",
          "keyValues": [],
          "concept": {
            "name": "Village / town Incident",
            "uuid": "e6bcec27-0bac-4376-b0e1-884ffc399db1",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": false
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "8f1d7866-0ad1-4026-bbcb-37cea12ee641"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "4dcc08c0-cf4f-4c15-a946-1658beaa3376"
              }
            ]
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Checklist",
          "uuid": "fd91cd96-04d5-44c7-b2e3-1013dd695f72",
          "keyValues": [],
          "concept": {
            "name": "Checklist",
            "uuid": "ea63951d-4384-4796-8113-d018225e0e08",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Medical test properly done as per procedure laid down (2-finger test not done)",
                "uuid": "40949091-0821-46ea-95bd-b195f4b85290",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Panchnama done",
                "uuid": "22eb0e74-8d6c-42d8-8b9d-fdc160f53cc5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Critical evidence / items seized",
                "uuid": "b38e62aa-c7f8-45c0-acc7-10117d8f752b",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "161 statement done",
                "uuid": "9044b35f-d921-495a-9841-820f569b1d3c",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Medical test done",
                "uuid": "f51d62ae-6c1d-4fb8-a320-12a7658103a9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Accused released on bail",
                "uuid": "df8eef8a-ae6b-47bc-95dd-a1ed5ba9eb76",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Chargesheet filed",
                "uuid": "3b67b65b-556d-487e-a75f-53486e43ddca",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Accused arrested",
                "uuid": "7f19a740-1a9f-4d67-b0cd-5643252c633d",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "IO is of the requisite rank (only if PoA)",
                "uuid": "dfad5560-87e0-4a2f-a846-958bc3ada493",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "FIR amended with all needed sections",
                "uuid": "0421d46e-0064-435f-adef-8afa01c84d16",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Spot inspection conducted (only for PoA)",
                "uuid": "610ffce3-0900-4ac9-be19-f8481ffdb3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "164 statement done",
                "uuid": "8a35364f-97e5-409d-9cb3-21019a861115",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Critical witnesses testified",
                "uuid": "b05094cc-26ec-4417-a9a6-7231e93aa814",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "FIR registered",
                "uuid": "d2840b4b-5570-4fd9-89e4-26684930285c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Magisterial inquiry done (only for dowry death and 306)",
                "uuid": "e9166e9f-0099-4587-979b-7430a2d5a820",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "MultiSelect",
          "mandatory": false
        }
      ],
      "display": "Fact Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}