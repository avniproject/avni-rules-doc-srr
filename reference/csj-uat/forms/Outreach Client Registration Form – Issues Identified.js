{
  "name": "Outreach Client Registration Form – Issues Identified",
  "uuid": "d740f21f-a53e-4d05-b990-a56532b428db",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "0ebf93bf-0cd1-4ed2-8b8b-8ad4c3e17787",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Encounter type",
          "uuid": "eb50bd18-5bd1-473f-8992-ba431c282b88",
          "keyValues": [],
          "concept": {
            "name": "Encounter type",
            "uuid": "0d1c7661-4d1a-4229-87c1-d45fc170dede",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "04175152-5f03-4e3c-b7b7-c07914b8d67e"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Identifier}"
              }
            ]
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "a8be94da-1f77-4810-9736-c65da692a34d",
      "name": "Identification",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Where did the Outreach Activity happen - village or other space?",
          "uuid": "97e61815-9bb8-4eac-a9b7-229234e79787",
          "keyValues": [],
          "concept": {
            "name": "Where did the Outreach Activity happen - village or other space?",
            "uuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Village",
                "uuid": "a2b7f528-898c-4990-a267-ed85e2722c81",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Other Space",
                "uuid": "326f1f66-0707-4eb3-b708-a89b8ffbab4a",
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
          "name": "Where did you go?",
          "uuid": "fafe3b28-e1d9-424e-8cf4-1ab1d8dc5873",
          "keyValues": [],
          "concept": {
            "name": "Where In Village, did you go?",
            "uuid": "0f22d77f-3b4d-44f6-a587-bc90d3855b98",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                "uuid": "c3c78fb2-102f-4e2b-9532-accc8d89a882",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Samaany ganv / basti mein mulakat",
                "uuid": "b8e5ba0e-d975-41a8-af14-c238b0a1b2a4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Primary school",
                "uuid": "25f4ecf4-9d3c-46e7-82b5-86303e980961",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Client's home",
                "uuid": "110ea820-2bc1-464e-9a81-bc23215102a9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Ganv ke logon ki rozgaar se judi jagah",
                "uuid": "436b449d-8d66-44c1-8ee0-53b9d3ee64da",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other place you went",
                "uuid": "3f292c9e-8878-4629-9148-2c5166e9ed90",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Places of worship",
                "uuid": "40801ffb-b69d-42db-a3f0-a6bc285f9ed0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Yuva batihak",
                "uuid": "29305a90-86a3-4020-ad8c-6d7d63e57bda",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ganv ke logon ki places of public gathering",
                "uuid": "9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "High school / Higher secondary school",
                "uuid": "7800f20f-a226-48fc-9ec0-f69587195434",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mahila baithak",
                "uuid": "bb32a771-d5f4-4250-96f1-1a04728f208a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const isActivityHappenedInVillage = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("a2b7f528-898c-4990-a267-ed85e2722c81").matches();
  
  visibility = isActivityHappenedInVillage ;
  const whereDidYouGo = programEnrolment.getObservationValue('0f22d77f-3b4d-44f6-a587-bc90d3855b98');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("0f22d77f-3b4d-44f6-a587-bc90d3855b98")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
          "uuid": "e2dad090-2a11-404a-bf4b-1a37c284e936",
          "keyValues": [],
          "concept": {
            "name": "Description of the place - Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
            "uuid": "3bcb3a04-a402-499d-b292-47fb8bf19b72",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Christian Basti",
                "uuid": "11ec7fa3-be0b-45f2-8a51-5ed3141214d2",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Muslim Basti",
                "uuid": "f4136a43-0615-4cc3-ad81-a7318a9103aa",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Pardhi Basti / PVTG Basti",
                "uuid": "3765ff03-2410-4901-9172-6c1188e1cd8c",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak",
                "uuid": "04e69ece-90ac-4651-952d-1b58d3bea4fc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Dalit Basti",
                "uuid": "9526f577-4589-4695-903b-2e41d78e450e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Adivasi Basti",
                "uuid": "37f169ec-cba9-4921-81cf-3151774f0578",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("c3c78fb2-102f-4e2b-9532-accc8d89a882").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('3bcb3a04-a402-499d-b292-47fb8bf19b72');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("3bcb3a04-a402-499d-b292-47fb8bf19b72")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak, please specify",
          "uuid": "cb6e35d2-aa15-42f0-8927-705773cb3070",
          "keyValues": [],
          "concept": {
            "name": "Other place of Vishesh Samuday ki Basti / Ghar / Samaajik baithak, please specify",
            "uuid": "001fe336-0b66-4771-af09-f827ea1aa665",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("3bcb3a04-a402-499d-b292-47fb8bf19b72").containsAnswerConceptName("04e69ece-90ac-4651-952d-1b58d3bea4fc").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('001fe336-0b66-4771-af09-f827ea1aa665');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("001fe336-0b66-4771-af09-f827ea1aa665")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
          "uuid": "2905b8ae-64ec-46c7-92a8-7e62cf77aa75",
          "keyValues": [],
          "concept": {
            "name": "Ganv ke logon ki rozgaar se judi jagah - Description of the place",
            "uuid": "6fcc3782-dd26-46c8-b8fc-7f8da6a7d665",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Eet bhatta",
                "uuid": "2d4f9fad-85e1-4cdb-ab72-65cc333c2feb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tendu pataa sangrahan kendr",
                "uuid": "8e6e6df5-fd59-4596-bf63-54a82c490efb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mandi",
                "uuid": "6e15969c-0ff1-4dbd-abc9-589a09340df9",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Mill",
                "uuid": "0df75774-aed9-4dea-8a7e-1fbe5ae44160",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other Ganv ke logon ki rozgaar se judi jagah",
                "uuid": "8cb804a2-83f1-470a-ac87-aac4e293c05f",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Factory",
                "uuid": "efac1bd1-b8ef-4688-b6bc-a0538be4767e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "NREGA point",
                "uuid": "a2920822-6fe5-4f85-a55a-cc1b814df9b1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("436b449d-8d66-44c1-8ee0-53b9d3ee64da").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('6fcc3782-dd26-46c8-b8fc-7f8da6a7d665');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("6fcc3782-dd26-46c8-b8fc-7f8da6a7d665")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Ganv ke logon ki rozgaar se judi jagah, please specify",
          "uuid": "84a4820b-e3fe-4268-b95a-07450fcf5b2d",
          "keyValues": [],
          "concept": {
            "name": "Other Ganv ke logon ki rozgaar se judi jagah, please specify",
            "uuid": "8f3ca5c3-2460-4408-8484-af8ada713025",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("6fcc3782-dd26-46c8-b8fc-7f8da6a7d665").containsAnswerConceptName("8cb804a2-83f1-470a-ac87-aac4e293c05f").matches();
  
  visibility = condition11 ;
  
  const whereDidYouGo = programEnrolment.getObservationValue('8f3ca5c3-2460-4408-8484-af8ada713025');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("8f3ca5c3-2460-4408-8484-af8ada713025")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Ganv ke logon ki places of public gathering - Description of the place",
          "uuid": "a5d72748-758e-47b3-9b60-978f47816698",
          "keyValues": [],
          "concept": {
            "name": "Ganv ke logon ki places of public gathering - Description of the place",
            "uuid": "b5e8fe86-f35f-4356-b54f-398b4703756d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Festival",
                "uuid": "017a7f64-225e-4530-8262-80ad778eb618",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Panchayat bhavan",
                "uuid": "1027564b-455d-4be9-8c3f-facd69b5a7b9",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other Ganv ke logon ki places of public gathering",
                "uuid": "f5026b05-6a3c-4286-a8e1-71e17bd45d0a",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Chowk",
                "uuid": "bec4ff0d-4704-4791-b553-f82ad6691708",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tikakaran camp",
                "uuid": "fd01966a-279a-45b5-8cea-675046c2d224",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Taalaab",
                "uuid": "d17e939e-ea88-4a21-96a6-69efdc9acd7a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Gram chabootra",
                "uuid": "de83ddf1-f226-4e31-b656-70526ccb1957",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Shaadi",
                "uuid": "168db760-944c-4451-8154-53bed6085e2c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "PDS dukan",
                "uuid": "e84be2f4-d608-49dd-add9-031a52376531",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Market",
                "uuid": "e4e6a2d6-b8ff-4ef2-9261-35230564ec9f",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Anganwadi",
                "uuid": "640627b4-7af2-4f81-b602-586cd7f191a4",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Kirana dukaan",
                "uuid": "d8e82ad8-fa69-453f-a11c-0b1b5a8fd107",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("9b4869b1-ce2b-44ac-8e2b-8b07b809b5e6").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('b5e8fe86-f35f-4356-b54f-398b4703756d');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("b5e8fe86-f35f-4356-b54f-398b4703756d")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Ganv ke logon ki places of public gathering, please specify",
          "uuid": "6714cb21-c467-41d5-968b-405d18af5ea6",
          "keyValues": [],
          "concept": {
            "name": "Other Ganv ke logon ki places of public gathering, please specify",
            "uuid": "b6f31396-9b14-47a5-b58c-00f84d24ef85",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("b5e8fe86-f35f-4356-b54f-398b4703756d").containsAnswerConceptName("f5026b05-6a3c-4286-a8e1-71e17bd45d0a").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('b6f31396-9b14-47a5-b58c-00f84d24ef85');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("b6f31396-9b14-47a5-b58c-00f84d24ef85")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Mahila Baithak - Description of the place",
          "uuid": "ec724f5d-537b-4df5-85f1-83c43711b15d",
          "keyValues": [],
          "concept": {
            "name": "Mahila Baithak - Description of the place",
            "uuid": "49971f17-12a1-40e2-81f7-1ec5816b4f1f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ASHA worker baithak",
                "uuid": "6f8b0ef8-b4e5-4eb1-aa60-16db03653083",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mahila samooh baithak",
                "uuid": "e5db10a3-1784-48d9-8bbc-ec61da89f315",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Anganwadi baithak",
                "uuid": "43c98024-8c05-41df-af4c-0110a6b9e26c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mitanin baithak",
                "uuid": "a25f3a35-5c2a-4d45-a866-d916fe4bf365",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other Mahila Baithak",
                "uuid": "c5edc834-e185-495c-bc99-233739402b7e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("bb32a771-d5f4-4250-96f1-1a04728f208a").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('49971f17-12a1-40e2-81f7-1ec5816b4f1f');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("49971f17-12a1-40e2-81f7-1ec5816b4f1f")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Mahila Baithak",
          "uuid": "c60565fa-2640-4673-bd5b-be499735bbbd",
          "keyValues": [],
          "concept": {
            "name": "Other Mahila Baithak, please specify",
            "uuid": "34410928-8eed-42bd-9c02-b042065b1bb2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("49971f17-12a1-40e2-81f7-1ec5816b4f1f").containsAnswerConceptName("c5edc834-e185-495c-bc99-233739402b7e").matches();
  
  visibility = condition11 ;
  
  const whereDidYouGo = programEnrolment.getObservationValue('34410928-8eed-42bd-9c02-b042065b1bb2');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("34410928-8eed-42bd-9c02-b042065b1bb2")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Place of worship  - Description of the place",
          "uuid": "5875b7a5-419d-4b5a-b0e4-7f764f138e8a",
          "keyValues": [],
          "concept": {
            "name": "Place of worship  - Description of the place - Village",
            "uuid": "e8d8581a-db42-497e-b8c9-06d08146f79a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Church",
                "uuid": "c3c592f9-1b43-4d3c-b799-9609f29cd567",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Mandir",
                "uuid": "a44b75a8-749a-4d37-abfa-749539759335",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Gurudwara",
                "uuid": "f1856455-b841-4734-b5a8-d636d4336c80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mosque",
                "uuid": "50740018-11e2-4ca5-a9f2-921dccb58651",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other Place of worship",
                "uuid": "a06ae898-9189-4b22-9637-3910b37d0fcc",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("40801ffb-b69d-42db-a3f0-a6bc285f9ed0").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('e8d8581a-db42-497e-b8c9-06d08146f79a');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("e8d8581a-db42-497e-b8c9-06d08146f79a")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Place of worship, please select",
          "uuid": "e4e26e1d-234f-406a-84ff-589f1dd2a8d4",
          "keyValues": [],
          "concept": {
            "name": "Other Place of worship, please select - Other space",
            "uuid": "0857cd63-62f1-4c4e-81a7-41810a7270e9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("e8d8581a-db42-497e-b8c9-06d08146f79a").containsAnswerConceptName("a06ae898-9189-4b22-9637-3910b37d0fcc").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('0857cd63-62f1-4c4e-81a7-41810a7270e9');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("0857cd63-62f1-4c4e-81a7-41810a7270e9")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Any other place you went for outreach, please specify",
          "uuid": "5c13ff93-712a-4536-99d2-f30fae83ec7b",
          "keyValues": [],
          "concept": {
            "name": "Any other place you went for outreach, please specify",
            "uuid": "d98fbfb4-ff31-47d0-b4ad-781f0a3a37e1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0f22d77f-3b4d-44f6-a587-bc90d3855b98").containsAnswerConceptName("3f292c9e-8878-4629-9148-2c5166e9ed90").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('d98fbfb4-ff31-47d0-b4ad-781f0a3a37e1');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("d98fbfb4-ff31-47d0-b4ad-781f0a3a37e1")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "What did you do?",
          "uuid": "cc860125-1eef-45dc-81f3-e00c47beec8e",
          "keyValues": [],
          "concept": {
            "name": "What did you do? - Village",
            "uuid": "2b465290-f555-4d3b-b418-b0b9a483d963",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Preparation for campaign",
                "uuid": "662c1e75-f4ae-4d75-8887-3cce5fb01e9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Preparation for a legal awareness camp",
                "uuid": "4ec506eb-2bb9-4ca3-977e-83bfc97c7323",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Case / claim follow-up",
                "uuid": "99318802-0ca0-4ca6-b8bb-3cd3645dcc02",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "General Outreach",
                "uuid": "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Preparation for service camp",
                "uuid": "1fd8001d-623b-421c-9f47-736210cbcf55",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
      
    const isVillageSelected = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("a2b7f528-898c-4990-a267-ed85e2722c81").matches();
    
    visibility = isVillageSelected ;

    function checkOptionsAvailability(whatDidYouDo, whatDidYouDoInLocationSpecific) {
        if (!whatDidYouDoInLocationSpecific.length) {
            return false; 
        }
    
        const locationSpecificSet = new Set(whatDidYouDoInLocationSpecific);
    
        return whatDidYouDo.every(option => locationSpecificSet.has(option)); 
    }

    let whatDidYouDo = programEnrolment.getObservationReadableValue("2b465290-f555-4d3b-b418-b0b9a483d963");
    if(whatDidYouDo) {

        let allLocationSpecificOptions = [];
        let locationSpecificEncounters = programEnrolment.individual.getEncounters(true).filter((enc) => {
            if(enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime){
                let whatDidYouDoInLocationSpecific = enc.getObservationReadableValue("2b465290-f555-4d3b-b418-b0b9a483d963");

                if(whatDidYouDoInLocationSpecific && whatDidYouDoInLocationSpecific.length){

                    allLocationSpecificOptions.push(...whatDidYouDoInLocationSpecific)
                }
                
                return true;
            }
            return false;
        });

        const areRequiredOptionsPresent = checkOptionsAvailability(whatDidYouDo, allLocationSpecificOptions);
        if (!areRequiredOptionsPresent) {
            validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "If anya sthal, where did you go?",
          "uuid": "91794d57-1e6a-441a-80b2-66f450fb3bdb",
          "keyValues": [],
          "concept": {
            "name": "If anya sthal, where did you go?",
            "uuid": "6188571c-711c-4466-be71-18362ce555de",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sex worked samuday",
                "uuid": "0551578b-ab7a-4a5d-accd-007dfabfcb13",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mazdoor sangathan",
                "uuid": "a4913303-9bd7-4958-9c6f-cc90310f2001",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Labour naka",
                "uuid": "5dead826-7dc5-49d2-9d6c-a91c47075742",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Places of worship",
                "uuid": "40801ffb-b69d-42db-a3f0-a6bc285f9ed0",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Primary school",
                "uuid": "25f4ecf4-9d3c-46e7-82b5-86303e980961",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Safai Karmchari collection centre / basti",
                "uuid": "68ac2b3a-9210-4339-8219-f4615ac781c4",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Transgender basti",
                "uuid": "0c11a658-013a-4ef2-80a4-592c48e275bd",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "02000523-c297-47f1-8386-db2b0820f462",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Youth Group",
                "uuid": "f8f446f1-f67b-4f45-b73d-42f8d00820e6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Dhan mandi / krishi dukan",
                "uuid": "18083236-293e-4c07-aad9-a982812ee966",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Places of traditional occupation",
                "uuid": "1ca6fff9-a879-4163-bfdf-1763688f06cc",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Factory area / mine",
                "uuid": "947debbb-46e0-411f-bcfe-4ca5316229bc",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Places of public gathering",
                "uuid": "04b2b83f-dfb5-4753-929e-6c926837e11e",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Slaughter house / meat market",
                "uuid": "1ef74f36-156b-4e24-b84c-c9e17ab963b1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Urs",
                "uuid": "828ff31b-d4b3-49ee-a2f7-a7f88501ecf0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Court / tantr ke bahar",
                "uuid": "d0d14de2-c608-4168-ad0d-03741bd9719d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("326f1f66-0707-4eb3-b708-a89b8ffbab4a").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('6188571c-711c-4466-be71-18362ce555de');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("6188571c-711c-4466-be71-18362ce555de")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Youth Group -Description of the place",
          "uuid": "0d9e533c-8434-47ce-8e97-4663dffff729",
          "keyValues": [],
          "concept": {
            "name": "Youth Group - Description of the place",
            "uuid": "7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other Youth Group",
                "uuid": "786eaaee-00e9-415d-a9a4-bf5b173ae22b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "College",
                "uuid": "45944abf-376d-43b0-b647-ae6d744697d4",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "High School",
                "uuid": "500badf5-4398-4a85-8ad2-a1245bd4ffc6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Coaching Centre",
                "uuid": "14593bb4-3d4d-4aa8-969a-e24585416bbc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Youth Hostel",
                "uuid": "249fb8c6-6584-4fcd-96cc-ccd571fc8e90",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Higher Secondary School",
                "uuid": "c3d3a0a0-3cfc-41f3-b089-2384e2b16d8e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Youth Group Baithak",
                "uuid": "e2d2b29c-1db1-4616-83d2-31b28b46d1d8",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("f8f446f1-f67b-4f45-b73d-42f8d00820e6").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other Youth Group, please specify",
          "uuid": "fae6e4b5-6931-4218-966c-6faffb1070b8",
          "keyValues": [],
          "concept": {
            "name": "Other Youth Group, please specify",
            "uuid": "57ec0953-2df4-4481-89b2-62723b5fd1c9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("7622634f-7dfe-44fe-b8cd-3f7c3c7d8caf").containsAnswerConceptName("786eaaee-00e9-415d-a9a4-bf5b173ae22b").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('57ec0953-2df4-4481-89b2-62723b5fd1c9');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("57ec0953-2df4-4481-89b2-62723b5fd1c9")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Places of public gathering - Description of the place",
          "uuid": "8c71d709-9a41-40a4-87be-775f8b2561f2",
          "keyValues": [],
          "concept": {
            "name": "Places of public gathering - Description of the place",
            "uuid": "4c19736c-dd33-4d1f-a2fb-6d60eb767bc3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Market",
                "uuid": "e4e6a2d6-b8ff-4ef2-9261-35230564ec9f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Gas cylinder agency",
                "uuid": "fd677bc7-9b4c-474b-8b4e-c0adc8d85d98",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Railway station",
                "uuid": "335c3eb4-407f-4956-a801-6353735af5ce",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Other places of public gathering",
                "uuid": "e4e8140f-ea39-4900-a692-31bbbd059a34",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Sabji mandi",
                "uuid": "33d5302f-7f00-4e63-9bdb-b88733ff44a8",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Bus stand",
                "uuid": "e9959121-96d4-4897-a4bf-6332f2cc13b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Post office",
                "uuid": "19369bf5-bad7-445a-82a8-fe9b4f23c85b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Bank",
                "uuid": "bef6f49c-42d1-451b-b087-9f7de68c8f3d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Mela",
                "uuid": "8472714b-651c-40e6-982f-07241955f0d2",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Chowk / Naka / Barrier",
                "uuid": "17e44d1a-4b80-401e-934a-dd9bb0044954",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("04b2b83f-dfb5-4753-929e-6c926837e11e").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('4c19736c-dd33-4d1f-a2fb-6d60eb767bc3');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("4c19736c-dd33-4d1f-a2fb-6d60eb767bc3")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other places of public gathering, please specify",
          "uuid": "a6f442d4-b906-47e1-9d38-435c46f289b9",
          "keyValues": [],
          "concept": {
            "name": "Other places of public gathering, please specify",
            "uuid": "186fbaa3-e415-4a36-b24c-cff342a8bd07",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("4c19736c-dd33-4d1f-a2fb-6d60eb767bc3").containsAnswerConceptName("e4e8140f-ea39-4900-a692-31bbbd059a34").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('186fbaa3-e415-4a36-b24c-cff342a8bd07');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("186fbaa3-e415-4a36-b24c-cff342a8bd07")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Place of worship  - Description of the place",
          "uuid": "d6e6239d-243b-4865-b2ec-f0acd06b2743",
          "keyValues": [],
          "concept": {
            "name": "Place of worship - Description of the place - Other space",
            "uuid": "d48bdae3-780d-40b4-ae2a-62332a577fc6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Mosque",
                "uuid": "50740018-11e2-4ca5-a9f2-921dccb58651",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other place of worship",
                "uuid": "f4f14bfa-274e-412f-aa41-40d07d52ab31",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Mandir",
                "uuid": "a44b75a8-749a-4d37-abfa-749539759335",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Church",
                "uuid": "c3c592f9-1b43-4d3c-b799-9609f29cd567",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Gurudwara",
                "uuid": "f1856455-b841-4734-b5a8-d636d4336c80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("40801ffb-b69d-42db-a3f0-a6bc285f9ed0").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('d48bdae3-780d-40b4-ae2a-62332a577fc6');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("d48bdae3-780d-40b4-ae2a-62332a577fc6")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other place of worship , please specify",
          "uuid": "7f2b2be8-98c0-4413-995d-65cff9e7ea1f",
          "keyValues": [],
          "concept": {
            "name": "Other Place of worship, please select - Village",
            "uuid": "cc0d3093-3771-44b1-8732-1bbd8cfdaad2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("d48bdae3-780d-40b4-ae2a-62332a577fc6").containsAnswerConceptName("f4f14bfa-274e-412f-aa41-40d07d52ab31").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('cc0d3093-3771-44b1-8732-1bbd8cfdaad2');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("cc0d3093-3771-44b1-8732-1bbd8cfdaad2")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Places of traditional occupation  - Description of the place",
          "uuid": "fad03cd0-9011-4bdf-861a-44cb39169e32",
          "keyValues": [],
          "concept": {
            "name": "Places of traditional occupation - Description of the place",
            "uuid": "0841e771-d471-419d-9b78-19bbb113749b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bamboo workers",
                "uuid": "05c926a1-2de6-4174-81c3-431a68bac6bd",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Bangle workers",
                "uuid": "e813f17f-9a7c-4219-a02d-1954ea3d861b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Other places of traditional occupation",
                "uuid": "6b81661c-d0bb-4b86-badb-194eba94cfc0",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Barber",
                "uuid": "a4494ee8-c3fe-4435-be99-9ad5b52460b1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Mochi",
                "uuid": "3d87d7b9-dd39-49bf-90bc-69626a417f9e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("6188571c-711c-4466-be71-18362ce555de").containsAnswerConceptName("1ca6fff9-a879-4163-bfdf-1763688f06cc").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('0841e771-d471-419d-9b78-19bbb113749b');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("0841e771-d471-419d-9b78-19bbb113749b")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Other places of traditional occupation, please specify",
          "uuid": "8870b088-ef0a-442f-bf92-3ad728273af0",
          "keyValues": [],
          "concept": {
            "name": "Other places of traditional occupation, please specify",
            "uuid": "4521f7de-e55e-4578-bec6-4d2141d4f744",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("0841e771-d471-419d-9b78-19bbb113749b").containsAnswerConceptName("6b81661c-d0bb-4b86-badb-194eba94cfc0").matches();
  
  visibility = condition11 ;
  const whereDidYouGo = programEnrolment.getObservationValue('4521f7de-e55e-4578-bec6-4d2141d4f744');//enrolment uuid
  if(whereDidYouGo){
    let conditionFulfiled = programEnrolment.individual.getEncounters(true).some((enc) => enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime && enc.getObservationValue("4521f7de-e55e-4578-bec6-4d2141d4f744")==whereDidYouGo)//encounter uuid
    if(!conditionFulfiled){
      validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "What did you do?",
          "uuid": "50bc66a1-30f7-44c6-b785-e8ea4914540d",
          "keyValues": [],
          "concept": {
            "name": "What did you do? - Other space",
            "uuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Case / claim follow-up",
                "uuid": "99318802-0ca0-4ca6-b8bb-3cd3645dcc02",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Preparation for service camp",
                "uuid": "1fd8001d-623b-421c-9f47-736210cbcf55",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Preparation for a legal awareness camp",
                "uuid": "4ec506eb-2bb9-4ca3-977e-83bfc97c7323",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Preparation for campaign",
                "uuid": "662c1e75-f4ae-4d75-8887-3cce5fb01e9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "General Outreach",
                "uuid": "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 24,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
    const programEnrolment = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
      
    const isVillageSelected = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.valueInEnrolment("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("326f1f66-0707-4eb3-b708-a89b8ffbab4a").matches();

    visibility = isVillageSelected ;

    function checkOptionsAvailability(whatDidYouDo, whatDidYouDoInLocationSpecific) {
        if (!whatDidYouDoInLocationSpecific.length) {
            return false; 
        }
    
        const locationSpecificSet = new Set(whatDidYouDoInLocationSpecific);
    
        return whatDidYouDo.every(option => locationSpecificSet.has(option)); 
    }

    let whatDidYouDo = programEnrolment.getObservationReadableValue("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0");
    if(whatDidYouDo) {

        let allLocationSpecificOptions = [];
        let locationSpecificEncounters = programEnrolment.individual.getEncounters(true).filter((enc) => {
            if(enc.encounterType.name == 'Outreach Location Specific Details' && enc.encounterDateTime){
                let whatDidYouDoInLocationSpecific = enc.getObservationReadableValue("5ccfa48e-8d07-44c3-9f58-9f52c7327ba0");

                if(whatDidYouDoInLocationSpecific && whatDidYouDoInLocationSpecific.length){

                    allLocationSpecificOptions.push(...whatDidYouDoInLocationSpecific)
                }
                
                return true;
            }
            return false;
        });

        const areRequiredOptionsPresent = checkOptionsAvailability(whatDidYouDo, allLocationSpecificOptions);     
        if (!areRequiredOptionsPresent) {
            validationErrors.push('Location details not found, please fill the Outreach Location Specific Details form')
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "What did you do?",
          "uuid": "9595580d-d1f6-43d2-8563-2d5438ea9671",
          "keyValues": [],
          "concept": {
            "name": "What did you do? - Other space",
            "uuid": "5ccfa48e-8d07-44c3-9f58-9f52c7327ba0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Case / claim follow-up",
                "uuid": "99318802-0ca0-4ca6-b8bb-3cd3645dcc02",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Preparation for service camp",
                "uuid": "1fd8001d-623b-421c-9f47-736210cbcf55",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Service camp",
                "uuid": "621ce892-2b8a-4820-935e-f5d034e037a4",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Preparation for a legal awareness camp",
                "uuid": "4ec506eb-2bb9-4ca3-977e-83bfc97c7323",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Preparation for campaign",
                "uuid": "662c1e75-f4ae-4d75-8887-3cce5fb01e9b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Legal awareness camp",
                "uuid": "f7461b92-ca73-4841-86e3-a14cc6002067",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "General Outreach",
                "uuid": "f16ba92d-16e4-4cfe-b68c-e5e4ee2cd4b5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 25,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEnrolment("f619854c-9ed3-44ec-944e-ad9e51a768e0").containsAnswerConceptName("326f1f66-0707-4eb3-b708-a89b8ffbab4a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                },
                {}
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "enrolment",
                          "conceptName": "Where did the Outreach Activity happen - village or other space?",
                          "conceptUuid": "f619854c-9ed3-44ec-944e-ad9e51a768e0",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other Space"
                          ],
                          "answerConceptUuids": [
                            "326f1f66-0707-4eb3-b708-a89b8ffbab4a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Identification",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "94ac88cf-8960-4d40-ab4d-09d9935e353e",
      "name": "Client Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Encounter type",
          "uuid": "a23966d6-5f04-4113-afb7-5c72593ea77a",
          "keyValues": [],
          "concept": {
            "name": "Encounter type",
            "uuid": "0d1c7661-4d1a-4229-87c1-d45fc170dede",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "04175152-5f03-4e3c-b7b7-c07914b8d67e"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Identifier}"
              }
            ]
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const outReachEncounters = programEnrolment.individual.getEncounters().filter((enc) => enc.encounterType.name == "Outreach Location Specific Details");
  
  if(outReachEncounters.length == 0){
    validationErrors.push("Please fill the 'Outreach Location Specific Details' form.");
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Name of client",
          "uuid": "1d8ea660-e0f5-4397-9cb8-c2e926cb7dc6",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "2dd148df-6fd0-43ba-a777-ceaf5dd9fca9",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "ecf2e454-65ef-4372-8a58-56f842e6b240",
          "keyValues": [],
          "concept": {
            "name": "Phone number",
            "uuid": "ab1a07f3-6c68-43e9-95fc-0d44bda514b0",
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
          "mandatory": true
        },
        {
          "name": "Describe the Type of Issue identified",
          "uuid": "4b7b9e5c-6218-40a9-996c-8d5c489ff0dc",
          "keyValues": [],
          "concept": {
            "name": "Describe the Type of Issue identified",
            "uuid": "08e8417e-85ab-4e92-a729-e04f10c48f9c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        }
      ],
      "display": "Client Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}