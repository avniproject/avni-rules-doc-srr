{
  "name": "PNC Encounter",
  "uuid": "7fc029bc-9fd9-44d9-a176-5022dc7829fd",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "cc59408a-36b7-4abf-8efe-7d80fbcb71c1",
      "name": "Visit details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Date of delivery",
          "uuid": "041e0602-ecd6-4d9d-8511-d69b789555cf",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Date of delivery",
            "uuid": "f72ec1db-50d5-409e-883a-421825fbebb5",
            "dataType": "Date",
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
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let isOverdue = moment(programEncounter.encounterDateTime).isAfter(moment(programEncounter.maxVisitDateTime));
  
  if(isOverdue ){
    validationErrors.push("Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled");  
  }
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);

  if(deliveryEncounter.length){
    const dateOfDelivery = deliveryEncounter[0].getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
    value = dateOfDelivery;
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Place of delivery",
          "uuid": "f7286fb3-137c-429f-b100-15f387b5a7ff",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Place of delivery",
            "uuid": "4abffffa-eeb0-4655-95ce-0d34c4702d5b",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Hospital",
                "uuid": "b6b1a9cb-4b5f-42c7-b27c-39b9ab92107f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "On Road",
                "uuid": "917d7dab-93c6-4795-941c-e98174ef1c90",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "b0a00c8b-b190-41a0-8b65-1afb0db00a81",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const placeOfDelivery = deliveryEncounter[0].getObservationReadableValue('4abffffa-eeb0-4655-95ce-0d34c4702d5b');
    value = placeOfDelivery;
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Mode of delivery",
          "uuid": "55b99ab3-9577-48b2-b2f6-b03241a55229",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Mode of Delivery",
            "uuid": "05406606-52f3-4427-a87b-001bfdc5a6fb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "C section",
                "uuid": "07a7c084-8189-46f8-b59a-4f3df9666c45",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Normal - Home",
                "uuid": "bb0e063c-6a2b-4cd2-972e-707f9ae60cf4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Normal - Instituition",
                "uuid": "3e93ddc0-404a-4fcc-b4e7-21076676cd0e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
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
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const modeOfDelivery = deliveryEncounter[0].getObservationReadableValue('05406606-52f3-4427-a87b-001bfdc5a6fb');
    value = modeOfDelivery;
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Sex of baby",
          "uuid": "84d0d42b-15b5-4ee0-aae0-08657f87a8ed",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sex of the new born baby",
            "uuid": "9f35ace3-773b-4f67-8546-71a061a252f6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Male",
                "uuid": "924de7e5-47d9-401a-9178-3336fee5ee03",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Female",
                "uuid": "710583d4-cb89-4986-aef2-b97b6aa222e5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const sexOfBaby = deliveryEncounter[0].getObservationReadableValue('9f35ace3-773b-4f67-8546-71a061a252f6');
    if(sexOfBaby) value = sexOfBaby;
    else visibility = false;
    
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Timely Initiation of Breast feeding done?",
          "uuid": "b7e7300d-a474-44c3-9870-b0fca0ed90ff",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Timely initiation of Breast feeding",
            "uuid": "609ab1cc-0d5e-4e31-87b8-a8299c22c600",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
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
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const timelyInitiationOfBreastFeeding = deliveryEncounter[0].getObservationReadableValue('609ab1cc-0d5e-4e31-87b8-a8299c22c600');
    if(timelyInitiationOfBreastFeeding) value = timelyInitiationOfBreastFeeding;
    else visibility = false; 
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Birth weight of baby",
          "uuid": "d5325544-e751-4458-9f5c-7073ec50255c",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Birth weight",
            "uuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 15,
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const birthWeight = deliveryEncounter[0].getObservationValue('536f46bc-8beb-42d7-a7ed-2958b21a9021');
    ﻿if(birthWeight) value = birthWeight;
    else visibility = false;
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is the child pre term?",
          "uuid": "b547b2ff-e8af-498a-a41a-1684f6b8ce29",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Is the child pre term?",
            "uuid": "9aeb38a6-8529-4d71-a0e8-7f34182cc859",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const deliveryEncounter = programEncounter.programEnrolment.encounters.filter((enc) => enc.encounterType.name == 'Delivery' && enc.encounterDateTime != null && enc.cancelDateTime == null);
  
  if(deliveryEncounter.length){
    const isChildPreTerm = deliveryEncounter[0].getObservationReadableValue('9aeb38a6-8529-4d71-a0e8-7f34182cc859');
    if(isChildPreTerm) value = isChildPreTerm;
    else visibility = false; 
  } 
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "No of times mother takes full meal in last 24 hrs",
          "uuid": "5b4a90a2-1329-492f-a129-7035a09d19ac",
          "keyValues": [],
          "concept": {
            "name": "No of times mother takes full meal in last 24 hrs",
            "uuid": "ba961e32-f847-4368-91cd-05c3440f4d06",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 10,
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  let isOverdue = moment().isAfter(moment(programEncounter.maxVisitDateTime));
  
  if(isOverdue ){
    validationErrors.push("Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled");  
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "How many pads are being changed in a day",
          "uuid": "d351eadd-8f76-409a-9d43-12b549411b42",
          "keyValues": [],
          "concept": {
            "name": "How many pads are being changed in a day",
            "uuid": "630e12bf-6cc4-4bcf-a7c3-24a6cdae0212",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": ">=7",
                "uuid": "12cc86d7-44bf-475e-88e7-d58866fd1b9b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "<7",
                "uuid": "9877812e-92a1-4ab7-b32b-35a2ae5ac357",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Other, please Specify",
          "uuid": "493d94cf-d1f9-4896-abbf-b0913346c336",
          "keyValues": [],
          "concept": {
            "name": "Other, please Specify",
            "uuid": "a84e4704-1d23-4fd4-8cb9-10a65ae87f12",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("630e12bf-6cc4-4bcf-a7c3-24a6cdae0212").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "scope": "encounter",
                          "conceptName": "How many pads are being changed in a day",
                          "conceptUuid": "630e12bf-6cc4-4bcf-a7c3-24a6cdae0212",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Other"
                          ],
                          "answerConceptUuids": [
                            "f169230d-809b-4d06-9ccb-96586977bb68"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "Is the baby being kept warm (near mother, wrapped and clothed)",
          "uuid": "10585d73-e09b-44c4-b726-16103ebdaaf0",
          "keyValues": [],
          "concept": {
            "name": "Is the baby being kept warm",
            "uuid": "b15aec25-773c-40cc-883f-aaf3d8981396",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is baby crying and passing urine less than 6 times a day?",
          "uuid": "86bf056f-0267-41d3-9fa4-cd5816b41d93",
          "keyValues": [],
          "concept": {
            "name": "Is baby crying and passing urine less than 6 times a day",
            "uuid": "f77f8f30-f54b-47bc-9a18-ffcb3eb3ee68",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How many times mother fed the baby in last six hours",
          "uuid": "61139f59-761d-45b6-be8f-8f209043b5ca",
          "keyValues": [],
          "concept": {
            "name": "How many times mother fed the baby in last six hours",
            "uuid": "fcfd1533-bc2c-4814-ab48-64ae62e157d8",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "active": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Mother has no milk since delivery or less breast milk",
          "uuid": "9f3c0843-5eb2-4a17-a1a4-f99966476613",
          "keyValues": [],
          "concept": {
            "name": "Mother has no milk since delivery or less breast milk",
            "uuid": "c5d523a3-60d3-4825-a7cd-f1d0a7d9fb8d",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 14,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Cracked nipples/Painful and or Engorged breast",
          "uuid": "756d91e7-e127-4c15-aa12-36458d00dc36",
          "keyValues": [],
          "concept": {
            "name": "Cracked nipples/Painful and or Engorged breast",
            "uuid": "dd9c80fb-5994-400a-8164-e15f7bc702eb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Baby referred to medical for any reason",
          "uuid": "8c03d4a9-0bba-4550-a092-c0e730a04d38",
          "keyValues": [],
          "concept": {
            "name": "Baby referred to medical for any reason",
            "uuid": "fd1843c4-408b-4bcc-a9bf-66476680ceb6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Specify reason",
          "uuid": "4addbe0d-4f5e-40f8-9e34-9b0e1ac4fdb7",
          "keyValues": [],
          "concept": {
            "name": "Specify reason",
            "uuid": "29f47be6-531b-47b6-bbea-d399fd71f2ba",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("fd1843c4-408b-4bcc-a9bf-66476680ceb6").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
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
                          "scope": "encounter",
                          "conceptName": "Baby referred to medical for any reason",
                          "conceptUuid": "fd1843c4-408b-4bcc-a9bf-66476680ceb6",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "8ebbf088-f292-483e-9084-7de919ce67b7"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "IFA received till date",
          "uuid": "e22605cc-88e7-4071-820a-d8e24f81581e",
          "keyValues": [],
          "concept": {
            "name": "IFA received till date (after birth)",
            "uuid": "16fa79ec-4cd8-4434-92e5-26f0dd9913bb",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "IFA consumed till date",
          "uuid": "e5fc55f9-cf5c-48ee-bdb2-8edc7d99690d",
          "keyValues": [],
          "concept": {
            "name": "IFA consumed",
            "uuid": "b46e6586-09d3-4d99-a4de-d9edb436dd07",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let ifaReceivedTillDateAfterBirthObservation = programEncounter.findObservation('16fa79ec-4cd8-4434-92e5-26f0dd9913bb');
  let ifaReceivedTillDateAfterBirthValue = _.isEmpty(ifaReceivedTillDateAfterBirthObservation) ? ifaReceivedTillDateAfterBirthObservation : ifaReceivedTillDateAfterBirthObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("b46e6586-09d3-4d99-a4de-d9edb436dd07").greaterThan(ifaReceivedTillDateAfterBirthValue).matches();
  
  if(condition11 ){
    validationErrors.push("IFA consumed cannot be greater than IFA received");  
}
  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Calcium received till date",
          "uuid": "b410a561-d7d3-45b7-9615-6337deaae977",
          "keyValues": [],
          "concept": {
            "name": "Calcium received",
            "uuid": "f26afac0-c270-42fa-8b03-c86ab304651d",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 20,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Calcium consumed till date",
          "uuid": "fe138a65-d964-43ed-b84f-6e0e400c2be4",
          "keyValues": [],
          "concept": {
            "name": "Calcium consumed",
            "uuid": "0ecb944c-9ec2-4e78-9e54-9a0b1b1ad178",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 720,
            "active": true
          },
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  let calciumReceivedObservation = programEncounter.findObservation('f26afac0-c270-42fa-8b03-c86ab304651d');
  let calciumReceivedValue = _.isEmpty(calciumReceivedObservation) ? calciumReceivedObservation : calciumReceivedObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("0ecb944c-9ec2-4e78-9e54-9a0b1b1ad178").greaterThan(calciumReceivedValue).matches();
  
  if(condition11 ){
    validationErrors.push("Calcium consumed cannot be greater than calcium received");  
}
  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Home visit by",
          "uuid": "c4da8fb8-0a00-43c6-be7a-f5627eabceb0",
          "keyValues": [],
          "concept": {
            "name": "Home visit by",
            "uuid": "1f35a997-b4d2-45f3-bddd-9d9c12c86e8c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "ASHA",
                "uuid": "b738ce8f-ada1-4de2-abcc-a602513c75f5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "ANM",
                "uuid": "6b3f25b4-5b76-4b00-b967-efffa2345d83",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "AWC",
                "uuid": "e842c1f9-138d-4b00-9e6d-59d7cc114e66",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 22,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Did you receive THR from AWC last month?",
          "uuid": "ff84d523-8b01-44c9-b88c-53db1d5ffdc9",
          "keyValues": [],
          "concept": {
            "name": "Did you received THR from AWC last month?",
            "uuid": "f4d394b1-3424-4517-9c60-ef2403dd40f4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 23,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Did you receive egg from AWC last month?",
          "uuid": "9b836be8-0bc8-424c-9476-b6b1cf43a55f",
          "keyValues": [],
          "concept": {
            "name": "Did you received egg from AWC last month?",
            "uuid": "bc4ea18d-554a-4139-8973-8eff81db5e35",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Did you received additional IFA tablets for being high risk",
          "uuid": "61ab8848-3d09-4adc-8331-d45840892ffc",
          "keyValues": [],
          "concept": {
            "name": "Did you receive Addional IFA for being high risk?",
            "uuid": "f41a10ea-d9d4-4dcf-944b-84db1899ce42",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is there any medical complications?",
          "uuid": "8f058c89-29d6-4b12-adf8-6c0a44f7e579",
          "keyValues": [],
          "concept": {
            "name": "Is there any medical complications?",
            "uuid": "9f4a0f77-4fc5-4382-9ef5-b569792f4a4e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Post-partum Mood changes (ask family members)",
                "uuid": "a26b0d96-6664-4607-9ad5-6430e38737ed",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Perineal Swelling & infection",
                "uuid": "9dd23a73-8f67-46cc-9b1c-888b1fe80bc1",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Convulsions",
                "uuid": "cbcee964-a5bf-436d-a0e1-feae59afee0a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Excessive Bleeding",
                "uuid": "95f6e198-8c6f-48ec-9788-72f64b50d3bf",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Breast engorgement & infection",
                "uuid": "96812615-7397-4a9c-addf-7f449b70dcfd",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Anamia (by observation)",
                "uuid": "e96f24ed-f840-49c3-8049-93761be5f0d0",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Puerperal Sepsis (Foul smelling)",
                "uuid": "d81e5eac-7798-4c9a-9406-4237c0542dfc",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "None",
                "uuid": "d1a185a8-c116-4b20-a37f-2deb03ed9654",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
          "type": "MultiSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const dateOfDelivery = programEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');

  visibility = currentInterval == 28 || currentInterval == 42;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "JSY money received?",
          "uuid": "a827e709-f4fc-4860-bce2-a5f296378727",
          "keyValues": [],
          "concept": {
            "name": "JSY money received",
            "uuid": "3b6e00e3-b931-40aa-8af1-4416f7336650",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Don't know",
                "uuid": "54f6160b-0c27-4bf7-b2e1-31f8f2fec972",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "No",
                "uuid": "a77bd700-1409-4d52-93bc-9fe32c0e169b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "8ebbf088-f292-483e-9084-7de919ce67b7",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const allEncounters = programEncounter.programEnrolment.getEncounters();
  const deliveryEncounter = allEncounters.filter((enc) => enc.encounterType.name == 'Delivery')[0];
  
  const dateOfDelivery = deliveryEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  let currentInterval = 0
  if (deliveryEncounter){
    currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');
  }
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.latestValueInAllEncounters("1289b352-f8af-4fc8-bc55-f30681c08a60").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  visibility = currentInterval == 7 && condition11;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Visit details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const _ = imports.lodash;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const currentlyActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;
  
  const nextScheules = {
    3: {'nextInterval': 7, 'encounterNo': 2},
    7: {'nextInterval': 14, 'encounterNo': 3},
    14: {'nextInterval': 21, 'encounterNo': 4},
    21: {'nextInterval': 28, 'encounterNo': 5},
    28: {'nextInterval': 42, 'encounterNo': 6}
  }
  
  const currentEncounterEarliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const allEncounters = programEncounter.programEnrolment.getEncounters();
  const deliveryEncounter = allEncounters.filter((enc) => enc.encounterType.name == 'Delivery')[0];
  const dateOfDelivery = deliveryEncounter.getObservationValue('f72ec1db-50d5-409e-883a-421825fbebb5');
  const currentInterval = currentEncounterEarliestVisitDateTime.diff(moment(dateOfDelivery), 'days');
  const nextInterval = nextScheules[currentInterval];

  function isNextEncounterAlreadyExist(encounters, nextEncounterEarliestVisitDateTime) { 
    return encounters.filter((enc) => moment(enc.earliestVisitDateTime).isSame(nextEncounterEarliestVisitDateTime, 'day')).length === 1;
  }

  if(currentlyActiveInProgram && nextInterval){
    
    const pncEncounters = allEncounters.filter((enc) => enc.encounterType.name == 'PNC');

    if(pncEncounters.length < 6){
      
      const earliestDate = moment(dateOfDelivery).add(nextInterval['nextInterval'], 'days').toDate(); 
      const alreadyExist = isNextEncounterAlreadyExist(pncEncounters, earliestDate);

      if(!alreadyExist){
        const maxDate = moment(earliestDate).add(2, 'days').toDate();
        scheduleBuilder.add({
          name: "PNC Followup-" + nextInterval['encounterNo'], 
          encounterType: "PNC", 
          earliestDate: earliestDate, 
          maxDate: maxDate
        });  
      }
    }
  }
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}