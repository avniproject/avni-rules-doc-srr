{
  "name": "Activity Registration",
  "uuid": "c53a160b-d245-44f6-8b47-f0c1f1dee80b",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "06b82141-5ac6-4a27-b6e8-14db42ed5a74",
      "name": "Address",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Districts",
          "uuid": "a31c661b-747c-45a8-8f57-75fc488fd323",
          "keyValues": [],
          "concept": {
            "name": "Districts (voided~207396)",
            "uuid": "45008c2c-e3cf-45b7-96fc-0350b2927d42",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "unique": true,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Blocks",
          "uuid": "74f54a80-5b79-4ac6-b273-773ce1017a94",
          "keyValues": [],
          "concept": {
            "name": "Blocks (voided~220547)",
            "uuid": "706ec20c-611e-4acd-a046-d6a45e161b19",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "3aa37c6d-9c7a-4f0c-b988-213f663288e9",
          "keyValues": [],
          "concept": {
            "name": "Villages (voided~220507)",
            "uuid": "17d911ad-18a5-4903-b43e-32d4674e86f0",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Value 2",
                "uuid": "fea4b9ca-e3bd-423e-98ed-ae41cecdf8d1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Value 3",
                "uuid": "022f498b-d68d-43b5-95a2-07a388b8b746",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Value 1",
                "uuid": "1449c205-e3df-4e57-8068-24a533688ffc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "e2e4e459-0e5c-4aa7-b6be-f7b31a77da33",
          "keyValues": [],
          "concept": {
            "name": "State",
            "uuid": "fdcb1ae2-505d-4784-993f-1de9d5e2ba60",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "22d0b26a-e849-4775-a74b-5e825a6b6345",
          "keyValues": [],
          "concept": {
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "2495a713-31a3-4875-b455-7a9bd2f2b336",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("164971fe-2166-4b06-b215-926fba6362ef").defined.matches();
  
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
                          "scope": "registration",
                          "conceptName": "Location",
                          "conceptUuid": "164971fe-2166-4b06-b215-926fba6362ef",
                          "conceptDataType": "Location"
                        },
                        "rhs": {},
                        "operator": "defined"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Location",
          "uuid": "780214ff-95e9-4f51-bb22-6f8eb086411d",
          "keyValues": [],
          "concept": {
            "name": "Location",
            "uuid": "164971fe-2166-4b06-b215-926fba6362ef",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "47a9e070-090d-46f8-8f06-834c193b8bec"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ]
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("17d911ad-18a5-4903-b43e-32d4674e86f0").defined.matches();
  
  if(condition11 ){
    value = individual.getObservationValue("17d911ad-18a5-4903-b43e-32d4674e86f0");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Location Details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "b8008b85-154a-4a34-ae55-d6f9f8ac901d",
      "name": "​",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "​",
          "uuid": "f6b9f1c1-695a-42c3-a066-26dc1acf62fb",
          "keyValues": [],
          "concept": {
            "name": "dummy",
            "uuid": "92f359cd-a199-4820-8638-f37fa9a0472b",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "​",
      "timed": false
    },
    {
      "uuid": "ed16c160-7741-445e-bc51-7cb74d0b981f",
      "name": "Activity Details",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "Address",
          "uuid": "d1dbb6b3-8f28-422e-b99f-18925fe83583",
          "keyValues": [],
          "concept": {
            "name": "Address (voided~220053)",
            "uuid": "c03c7864-8fbb-4557-907a-1047092bdc37",
            "dataType": "Location",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "isWithinCatchment",
                "value": true
              },
              {
                "key": "lowestAddressLevelTypeUUIDs",
                "value": [
                  "3410e7a2-cefe-4fc7-94b4-6631656c548c"
                ]
              },
              {
                "key": "highestAddressLevelTypeUUID",
                "value": "fda77dde-6346-47b9-84e0-25e7f171f55a"
              }
            ],
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Account code",
          "uuid": "bfc628e7-049a-4730-8cc6-7a23ed3ce30a",
          "keyValues": [],
          "concept": {
            "name": "Account code",
            "uuid": "2fb51840-9356-4b24-85e8-76135a6492bb",
            "dataType": "Text",
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
  let visibility = false;

  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
        let block = undefined;

        if (
            Array.isArray(individual.lowestAddressLevel.locationMappings) &&
            !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
            individual.lowestAddressLevel.locationMappings[0] &&
            individual.lowestAddressLevel.locationMappings[0].parent &&
            individual.lowestAddressLevel.locationMappings[0].parent.name
        ) {
            block = individual.lowestAddressLevel.locationMappings[0].parent.name;
        } else if (
            individual.lowestAddressLevel &&
            individual.lowestAddressLevel.titleLineage
        ) {
            const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
            block = titleParts.length > 2 ? titleParts[2] : undefined;
        }

        visibility = block === 'Other';
    }
    
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": true
        },
        {
          "name": "Other Village",
          "uuid": "685e3c63-cfed-4a87-9a2d-16cc37ae2a5c",
          "keyValues": [],
          "concept": {
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  
  const isDefined = individual && 
                    individual.lowestAddressLevel && 
                    (Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                     !_.isEmpty(individual.lowestAddressLevel.locationMappings) || 
                     !_.isEmpty(individual.lowestAddressLevel.titleLineage));

  if (isDefined) {
      let village = undefined;
  
      if (
        Array.isArray(individual.lowestAddressLevel.locationMappings) &&
        !_.isEmpty(individual.lowestAddressLevel.locationMappings) &&
        individual.lowestAddressLevel.locationMappings[0] &&
        individual.lowestAddressLevel.locationMappings[0].child &&
        individual.lowestAddressLevel.locationMappings[0].child.name
      ) {
        village = individual.lowestAddressLevel.locationMappings[0].child.name;
      } else if (
        individual.lowestAddressLevel &&
        individual.lowestAddressLevel.titleLineage
      ) {
        const titleParts = _.split(individual.lowestAddressLevel.titleLineage, ', ');
        village = titleParts.length > 3 ? titleParts[3] : undefined;
      }
  
      visibility = village === 'Other';
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": true
        },
        {
          "name": "Source Id (temp field)",
          "uuid": "eb67de1b-2fd2-4d99-95a3-4c0c4d138c81",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Source Id",
            "uuid": "98913e69-ab32-48aa-9f50-cf539779ccf8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const formElement = params.formElement;
  let value = individual.uuid;
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, true, value);
},
          "mandatory": false
        },
        {
          "name": "Account  name",
          "uuid": "cc47d0bb-90c2-4e30-82e6-b3edf1cfa88c",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Type of initiative",
          "uuid": "c4aec555-b75c-4cd2-8b15-5ca1606f077f",
          "keyValues": [],
          "concept": {
            "name": "Type of initiative",
            "uuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
            "dataType": "Coded",
            "answers": [
              {
                "name": "NJPC",
                "uuid": "6404fcaf-31de-4322-9620-c1b958f9c548",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Type of initiative",
          "uuid": "014e577a-6dcf-4c40-a485-96bdebd04b24",
          "keyValues": [],
          "concept": {
            "name": "Type of Initiative",
            "uuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "CFW-S2S",
                "uuid": "4db0c307-9053-4bd4-b917-580d00e43f1d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Specific Initiative",
                "uuid": "54d27687-374e-4988-ad81-e4d26bf02bf3",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "CFW-Rahat",
                "uuid": "231a6748-7677-4eb1-8a37-15a0ab207d67",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Only S2S",
                "uuid": "abbd4c79-e71e-403d-b263-e49259180f5f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "NJPC",
                "uuid": "6404fcaf-31de-4322-9620-c1b958f9c548",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Only Rahat",
                "uuid": "118ad0b3-0e16-46f2-902c-15722d6047c9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Only NJPC",
                "uuid": "6b5b0f34-c925-4ff8-bbf8-a72baf4e0f32",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "CFW-NJPC",
                "uuid": "820b5991-7002-4be5-89db-f1a4e10d4cd6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Only CFW",
                "uuid": "18aee17d-bc4e-4e84-b5bd-df28961acf77",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Rahat",
                "uuid": "cbf0805f-aac1-40b9-b78c-1c568b86ef24",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "CFW",
                "uuid": "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Related Distribution",
          "uuid": "dc858cab-bffa-40a3-a196-424e70e464ed",
          "keyValues": [],
          "concept": {
            "name": "Activity's Distribution",
            "uuid": "e1f72d4e-bf41-434d-aeac-05a286373181",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "a29e1dbe-c894-4384-9db4-0fd2df745df8"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Location}-{Distribution Date}"
              }
            ]
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activity start date",
          "uuid": "4329a2e2-fc5a-4a0d-8984-cec5e68b7d11",
          "keyValues": [],
          "concept": {
            "name": "Activity Start Date",
            "uuid": "8c938361-485e-4b5a-9643-51b741905fd8",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 11,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Activity end date",
          "uuid": "88fa13b3-7256-4e66-acca-5ae23b2f27e3",
          "keyValues": [],
          "concept": {
            "name": "Activity End Date",
            "uuid": "2e85dffe-c09e-4adb-a1b2-41f59aa68d49",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 12,
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
  let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
  let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : activityStartDateObservation.getReadableValue();
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").lessThan(activityStartDateValue, 'ms').matches();
  
  let activityStartDate = individual.getObservationValue('8c938361-485e-4b5a-9643-51b741905fd8');
  
  if(activityStartDate && condition11 ){
    validationErrors.push("Activity End Date cannot be before Activity Start Date");  
}

const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition12 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "No of working days",
          "uuid": "4ff2dd40-32b5-436c-9670-5f93a7e2dca3",
          "keyValues": [],
          "concept": {
            "name": "No of working days",
            "uuid": "b250eea7-f1e7-42de-a57c-4e30b49b1c22",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").defined.matches();

  visibility = condition11 ;

  if(condition12 && condition22 ){
      let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
      let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : moment(activityStartDateObservation.getReadableValue());
      let activityEndDateObservation = individual.findObservation('2e85dffe-c09e-4adb-a1b2-41f59aa68d49');
      let activityEndDateValue = _.isEmpty(activityEndDateObservation) ? activityEndDateObservation : moment(activityEndDateObservation.getReadableValue());
      let difference = activityEndDateValue.diff((activityStartDateValue), 'days') + 1;

      const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("b250eea7-f1e7-42de-a57c-4e30b49b1c22").greaterThan(difference).matches();
      if(condition31 ){
          validationErrors.push(`No of working days should not be greater than ${difference}`);
      }
  }
  const workingDay = individual.getObservationReadableValue("No of working days");

  if(condition11){
      if(workingDay<=0){
        validationErrors.push("Number of Working Days should be more than 0. Please enter a valid value");
      }
  }

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Number of participants",
          "uuid": "f3539ada-8120-4b24-a9fc-187a93b6a976",
          "keyValues": [],
          "concept": {
            "name": "Number of participants",
            "uuid": "1157c7c8-9f27-410d-9115-ef36191fba06",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 14,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("8c938361-485e-4b5a-9643-51b741905fd8").defined.matches();
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2e85dffe-c09e-4adb-a1b2-41f59aa68d49").defined.matches();
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("9a182a63-61df-441c-af58-953253c8d0f2").lessThanOrEqualTo(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number of Days of Participation should be more than 0. Please enter a valid value.");  
  }
  
  visibility = condition11 ;
  
  if(condition12 && condition22 ){
    let activityStartDateObservation = individual.findObservation('8c938361-485e-4b5a-9643-51b741905fd8');
    let activityStartDateValue = _.isEmpty(activityStartDateObservation) ? activityStartDateObservation : moment(activityStartDateObservation.getReadableValue());
    let activityEndDateObservation = individual.findObservation('2e85dffe-c09e-4adb-a1b2-41f59aa68d49');
    let activityEndDateValue = _.isEmpty(activityEndDateObservation) ? activityEndDateObservation : moment(activityEndDateObservation.getReadableValue());
    let difference = activityEndDateValue.diff((activityStartDateValue), 'days') + 1;
    const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("9a182a63-61df-441c-af58-953253c8d0f2").greaterThan(difference).matches();
    if(condition31 ){
        validationErrors.push(`No of days of participation should not be greater than ${difference}`);
    }
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Dispatch Date",
          "uuid": "74dc550e-fa6b-4e4f-8ee1-2d11a0477647",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Date",
            "uuid": "1a1097bc-c06a-493b-a7da-63f9e70f4ae0",
            "dataType": "DateTime",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
          "type": "SingleSelect",
          "parentFormElementUuid": "f3539ada-8120-4b24-a9fc-187a93b6a976",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of participants",
          "uuid": "6a348307-8583-40da-9811-e8b10c347480",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants",
            "uuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 17,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f5cc0324-9b14-42d8-b704-8cb2c5592a48").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
    if(condition12 ){
    validationErrors.push("Number of participants cannot be 0");  
}
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Number of participants cannot be 0"
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Number of Participants",
                          "conceptUuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 0
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of participants",
          "uuid": "562f1cea-82e8-45cd-a9f7-c1f87eee380f",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants",
            "uuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f5cc0324-9b14-42d8-b704-8cb2c5592a48").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
    if(condition12 ){
    validationErrors.push("Number of participants cannot be 0 or negative");  
}
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Number of participants cannot be 0 or negative"
                  },
                  "actionType": "validationError"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Number of Participants",
                          "conceptUuid": "f5cc0324-9b14-42d8-b704-8cb2c5592a48",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 0
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Number of Participants (Male)",
          "uuid": "9a457bfd-439e-4192-97f2-3a7bad25d09f",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
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

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  visibility = condition11;

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of Male participants cannot be less than 0. Please enter a valid value.");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Number of Participants (Male)",
          "uuid": "39947adc-2b5e-4f4a-bf83-ee71bcb0ea5a",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11;
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Male participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of Participants (Female)",
          "uuid": "3aca7360-5835-4c8e-b0ec-6f54e2543995",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 21,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("6404fcaf-31de-4322-9620-c1b958f9c548").matches();
  
  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThanOrEqualTo(0).matches();
  
  visibility = condition11 ;
  
  if(condition12 && condition22 ){
    validationErrors.push("Number of female participants in NJPC cannot be 0");  
  }
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Female participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of Participants (Female)",
          "uuid": "e6b11d8f-6db9-436f-b00f-4d5fee38c2b1",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Female)",
            "uuid": "2966afcc-2c07-44cf-8711-3fc23f52a6b5",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 22,
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

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("6404fcaf-31de-4322-9620-c1b958f9c548").matches();

  const condition22 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThanOrEqualTo(0).matches();

  visibility = condition11 ;

  if(condition12 && condition22 ){
    validationErrors.push("Number of female participants in NJPC cannot be 0 or negative");
  }

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of Female participants cannot be less than 0. Please enter a valid value.");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Number of Participants (Other)",
          "uuid": "dd14da84-5a91-42bf-9f21-002404dfdccb",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Other)",
            "uuid": "a043fea3-1658-4b5e-becd-ee55ab305a03",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 23,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();
  
  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();
  
  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();
  
  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").lessThan(0).matches();
  
  if(isNegative){
    validationErrors.push("Number of Other participants should not be negative");  
  }
  
  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of Participants (Other)",
          "uuid": "e91e9759-bbfe-46e3-a9d6-958be0cb8adc",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Other)",
            "uuid": "a043fea3-1658-4b5e-becd-ee55ab305a03",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
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

  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();

  visibility = condition11 ;

  const isCFW = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();

  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("526b0d5d-51cc-4004-8c12-7a6c71c6c516").defined.matches();

  const condition32 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2966afcc-2c07-44cf-8711-3fc23f52a6b5").defined.matches();

  const condition33 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").defined.matches();

  const isNegative = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a043fea3-1658-4b5e-becd-ee55ab305a03").lessThan(0).matches();

  if(isNegative){
    validationErrors.push("Number of  Other participants cannot be less than 0. Please enter a valid value.");
  }

  if(isCFW && condition31 && condition32 && condition33 ){
    let noOfparticipantsMaleCFW = individual.getObservationValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
    let noOfparticipantsFemaleCFW = individual.getObservationValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
    let NoofparticipantsCFWOther = individual.getObservationValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
    if ((noOfparticipantsFemaleCFW + noOfparticipantsMaleCFW + NoofparticipantsCFWOther) === 0) {
      validationErrors.push("Sum of all participants cannot be 0");
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Activity type",
          "uuid": "33a6be39-d780-40e5-9477-ef688d59d9a1",
          "keyValues": [],
          "concept": {
            "name": "Activity Type",
            "uuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Agriculture Plantation",
                "uuid": "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Miscellaneous",
                "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Others",
                    "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Toilet/Bathroom/private spaces",
                    "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Truck Unloading",
                    "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Electric Pole",
                    "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 4,
                "active": true
              },
              {
                "name": "Agriculture_Plantation",
                "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "There was soil erosion due to heavy water flow hence need for plantation",
                    "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                    "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "To improve grazing facilities for livestock",
                    "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "To improve water retention capacity",
                    "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  },
                  {
                    "name": "To construct partitions to demarcate areas",
                    "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "To increase incomes in the village from sales of vegetables",
                    "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "To decrease the impact of deforestation",
                    "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "Water needed to be conserved, hence planted trees",
                    "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "To improve agricultural productivity",
                    "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "The crops needed organic manure hence composting",
                    "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                    "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                    "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  }
                ],
                "order": 3,
                "active": true
              },
              {
                "name": "Miscellaneous Activity",
                "uuid": "f73d13a5-f6cf-4138-b4c6-849efbbe632f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Access_Infrastructure",
                "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "There was limited/or no connectivity to nearly medical facilities",
                    "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to nearby market facilities",
                    "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                    "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "The walls/boundaries of the school were damaged affecting studies",
                    "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "To protect school facilities and ensure safety for children",
                    "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "There was limited/ or no connectivity to the nearby villages",
                    "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "There was limited/or no connectivity to water facilities/sources",
                    "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "To repair/rebuilt damaged community infrastructure",
                    "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 13,
                    "active": true
                  },
                  {
                    "name": "The children did not have a proper place to study",
                    "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  },
                  {
                    "name": "In order to increase life and longevity of trees",
                    "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "To protect community infrastructure from getting damaged",
                    "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "There was no connectivity to the market",
                    "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "There was no meeting place for villagers",
                    "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  }
                ],
                "order": 1,
                "active": true
              },
              {
                "name": "Access Infrastructure",
                "uuid": "452bc10f-09b4-446e-93f4-52d477885be0",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water Management",
                "uuid": "1b061e73-b94f-499d-b82c-234670e104c5",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Sanitation",
                "uuid": "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Water_Management",
                "uuid": "476a03c0-071a-42df-a04e-ec60752d1283",
                "dataType": "Coded",
                "answers": [
                  {
                    "name": "Difficulty to get water for livestock related needs",
                    "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                    "dataType": "NA",
                    "answers": [],
                    "order": 11,
                    "active": true
                  },
                  {
                    "name": "Difficulty in reaching to water source",
                    "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                    "dataType": "NA",
                    "answers": [],
                    "order": 1,
                    "active": true
                  },
                  {
                    "name": "Shortage of water for irrigation purposes",
                    "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 12,
                    "active": true
                  },
                  {
                    "name": "Water was dirty for use for livestock related needs",
                    "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                    "dataType": "NA",
                    "answers": [],
                    "order": 3,
                    "active": true
                  },
                  {
                    "name": "Water was getting wasted",
                    "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                    "dataType": "NA",
                    "answers": [],
                    "order": 5,
                    "active": true
                  },
                  {
                    "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                    "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 10,
                    "active": true
                  },
                  {
                    "name": "Any other not given above",
                    "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                    "dataType": "NA",
                    "answers": [],
                    "order": 14,
                    "active": true
                  },
                  {
                    "name": "Shortage of water in the village",
                    "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                    "dataType": "NA",
                    "answers": [],
                    "order": 0,
                    "active": true
                  },
                  {
                    "name": "Water needed to be conserved",
                    "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                    "dataType": "NA",
                    "answers": [],
                    "order": 6,
                    "active": true
                  },
                  {
                    "name": "Water was too dirty to drink",
                    "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                    "dataType": "NA",
                    "answers": [],
                    "order": 2,
                    "active": true
                  },
                  {
                    "name": "Water was dirty to use for household related needs",
                    "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                    "dataType": "NA",
                    "answers": [],
                    "order": 4,
                    "active": true
                  },
                  {
                    "name": "Villagers including children were getting sick",
                    "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                    "dataType": "NA",
                    "answers": [],
                    "order": 9,
                    "active": true
                  },
                  {
                    "name": "Water used to collect and the place would get flooded/swamped",
                    "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                    "dataType": "NA",
                    "answers": [],
                    "order": 13,
                    "active": true
                  },
                  {
                    "name": "Villagers especially women and children were spending too much time in collecting waters",
                    "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                    "dataType": "NA",
                    "answers": [],
                    "order": 8,
                    "active": true
                  },
                  {
                    "name": "There was a need for water tables to increase",
                    "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                    "dataType": "NA",
                    "answers": [],
                    "order": 7,
                    "active": true
                  }
                ],
                "order": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
          "mandatory": true
        },
        {
          "name": "Activity sub type",
          "uuid": "d744b05e-a663-44eb-9486-3c7bfce2f809",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Truck Unloading",
                "Electric Pole",
                "Percolation pit"
              ]
            }
          ],
          "concept": {
            "name": "Activity sub type",
            "uuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Kitchen Garden",
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Plantation",
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 37,
                "active": true
              },
              {
                "name": "Community Hall/Center/House",
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "River",
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "Soak pit",
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "CCT",
                "uuid": "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Water storage pit",
                "uuid": "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "Dustbin",
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Water body premises",
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Fencing & boundary wall",
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Embankment / ghat",
                "uuid": "ec5c4214-ddd6-4146-8282-195f4d711c59",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Percolation pit",
                "uuid": "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                "dataType": "NA",
                "answers": [],
                "order": 38,
                "active": true
              },
              {
                "name": "Nursery Making",
                "uuid": "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                "dataType": "NA",
                "answers": [],
                "order": 40,
                "active": true
              },
              {
                "name": "Bandstand",
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Truck Unloading",
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Bridge/Pulia",
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Road & road-side bush cutting",
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Benches",
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774",
                "dataType": "NA",
                "answers": [],
                "order": 36,
                "active": true
              },
              {
                "name": "Dugwell/Chua/Jalkhund",
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Land Bunding",
                "uuid": "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Check dam",
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Road",
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Land Bundling (voided~207458)",
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true,
                "voided": true
              },
              {
                "name": "Ground levelling",
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Canal",
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Compost pit",
                "uuid": "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Protection wall for roads",
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Water-Tank/Pipeline",
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "Flower garden",
                "uuid": "2d229755-ee38-4f7f-a7f8-404125b3c393",
                "dataType": "NA",
                "answers": [],
                "order": 39,
                "active": true
              },
              {
                "name": "Seed Balls",
                "uuid": "32699e9f-c289-4581-9781-24b2bdbb0841",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Drainage",
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Electric Pole",
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Community farming",
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Pond",
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Backwater",
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Whitewash/ painting",
                "uuid": "654e67f1-9d45-444e-aab5-20a980733ca4",
                "dataType": "NA",
                "answers": [],
                "order": 41,
                "active": true
              },
              {
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 26,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","fe6cd113-e3e3-44b6-abe7-81ba7605787b","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  if(condition11 ) {
    _.forEach(["a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","b462ddf4-977b-4bc5-8157-7f0132c5245d","9ada0111-bbea-4fde-8097-32ccc0de6c78","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","654e67f1-9d45-444e-aab5-20a980733ca4","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","38dc542e-277d-4790-8982-0d2f3253f0fc","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","8748bdc4-de26-4411-a9b4-269abf7fc6f5","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","654e67f1-9d45-444e-aab5-20a980733ca4"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","a44830b7-3271-4313-baea-b6dc4e9cd5ae","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","a5f019c6-17a0-4536-8222-67935d482774","82246b7a-c13f-435d-9e17-d8d288ff3891","a7b922a1-a389-4ba1-94ca-59baf7a961d0","be655900-d882-4d99-ab29-faf560b8e832","ec39b654-3009-46ad-a2d4-2fda9f40d856","58653f74-082c-47a7-9a25-548990a4bd4c","3f0bd027-abf0-4beb-a7e7-9967d1994852","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","3f7366d8-350c-4290-aa9e-e265eea76ae5","8748bdc4-de26-4411-a9b4-269abf7fc6f5","32699e9f-c289-4581-9781-24b2bdbb0841","1162b0e5-7ccf-4eac-92b4-6e71898fa268","f246f297-f123-4b7a-b06f-d8c22a10bac2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec5c4214-ddd6-4146-8282-195f4d711c59","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","2d229755-ee38-4f7f-a7f8-404125b3c393"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition16 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Seed ball",
                      "Water storage pit",
                      "Percolation pit",
                      "CCT",
                      "Embankment / ghat",
                      "Nursey Making",
                      "Whitewash/ painting",
                      "Flower garden"
                    ],
                    "answerUuidsToSkip": [
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Seed ball",
                      "Protection wall for roads",
                      "Nursey Making",
                      "Whitewash/ painting",
                      "Flower garden"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Electric Pole",
                      "Truck Unloading",
                      "Compost pit",
                      "Land bunding",
                      "Seed ball",
                      "Water storage pit",
                      "Percolation pit",
                      "CCT",
                      "Protection wall for roads",
                      "Embankment / ghat",
                      "Nursey Making",
                      "Whitewash/ painting",
                      "Flower garden"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "654e67f1-9d45-444e-aab5-20a980733ca4",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitation"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Toilet/Bathroom/private spaces",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Electric Pole",
                      "Truck Unloading",
                      "Water storage pit",
                      "Percolation pit",
                      "CCT",
                      "Protection wall for roads",
                      "Embankment / ghat",
                      "Whitewash/ painting"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "38dc542e-277d-4790-8982-0d2f3253f0fc",
                      "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "654e67f1-9d45-444e-aab5-20a980733ca4"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Bandstand",
                      "Benches",
                      "Bridge/Pulia",
                      "Community Hall/Centre/House",
                      "Fencing & Boundary Wall",
                      "Road",
                      "Ground Levelling",
                      "Canal",
                      "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                      "Check Dam",
                      "Backwater",
                      "Dugwell/Chua/Jalkund",
                      "Pond",
                      "River",
                      "Waterfall/Jharna/Spring Water/Dhara",
                      "Water Tank/Pipeline",
                      "Well",
                      "Soak Pit",
                      "Dustbin",
                      "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                      "Drainage",
                      "Road & road side bush cutting",
                      "Water-body premises",
                      "Compost pit",
                      "Community Farming",
                      "Kitchen Garden",
                      "Plantation",
                      "Land bunding",
                      "Toilet/Bathroom/private spaces",
                      "Water storage pit",
                      "Seed ball",
                      "Percolation pit",
                      "CCT",
                      "Protection wall for roads",
                      "Embankment / ghat",
                      "Nursey Making",
                      "Flower garden"
                    ],
                    "answerUuidsToSkip": [
                      "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                      "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                      "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                      "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                      "f431cbac-b99d-48fb-8694-0299c352eb9a",
                      "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                      "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                      "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                      "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                      "824d11d4-525d-4610-9afe-f87c030a54eb",
                      "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                      "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                      "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                      "00ee1a95-2236-4c43-83d7-36c911172069",
                      "a5f019c6-17a0-4536-8222-67935d482774",
                      "82246b7a-c13f-435d-9e17-d8d288ff3891",
                      "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                      "be655900-d882-4d99-ab29-faf560b8e832",
                      "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                      "58653f74-082c-47a7-9a25-548990a4bd4c",
                      "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                      "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                      "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                      "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                      "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                      "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                      "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                      "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                      "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                      "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                      "32699e9f-c289-4581-9781-24b2bdbb0841",
                      "1162b0e5-7ccf-4eac-92b4-6e71898fa268",
                      "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                      "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                      "ec5c4214-ddd6-4146-8282-195f4d711c59",
                      "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                      "2d229755-ee38-4f7f-a7f8-404125b3c393"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Water Management",
                            "Sanitaiton",
                            "Agriculture Plantation",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Specify Other Sub Type",
          "uuid": "a68419b1-a826-4909-964b-8c30ff3906b5",
          "keyValues": [],
          "concept": {
            "name": "Specify Other Sub Type",
            "uuid": "e08bdfcc-fefc-4425-9abb-22578697e5a0",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "mandatory": true
        },
        {
          "name": "Activity category",
          "uuid": "2e8ff47f-480b-4b7c-a36f-5ea1b3daa6c5",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Making / Repairing",
                "Making / Repairing / Cleaning",
                "Repairing / Cleaning"
              ]
            }
          ],
          "concept": {
            "name": "Activity category",
            "uuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Making",
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cleaning",
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Making / Repairing",
                "uuid": "3c01a59c-3428-4f10-b95a-34c0b0dd2c67",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Repairing / Cleaning",
                "uuid": "6116fbd2-f5e4-46bb-930d-7df3d7bc2292",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Repairing",
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Making / Repairing / Cleaning",
                "uuid": "dca93504-ecb5-40fc-bfca-8d96d54f35f2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","61d8f60f-8496-4b6d-8d1a-9967e0ff024f","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","f431cbac-b99d-48fb-8694-0299c352eb9a","f98bacd7-701e-49ce-a268-b3e83d8f194f","961b337f-fee4-4bed-a77a-83db71f1b5a2","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","9ada0111-bbea-4fde-8097-32ccc0de6c78","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","b462ddf4-977b-4bc5-8157-7f0132c5245d","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","2d229755-ee38-4f7f-a7f8-404125b3c393","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","961b337f-fee4-4bed-a77a-83db71f1b5a2","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","1a4d980d-30ef-46e4-8b76-44da9002be6b","a5f019c6-17a0-4536-8222-67935d482774","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("58653f74-082c-47a7-9a25-548990a4bd4c","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","9ada0111-bbea-4fde-8097-32ccc0de6c78","ec39b654-3009-46ad-a2d4-2fda9f40d856","b462ddf4-977b-4bc5-8157-7f0132c5245d","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","32699e9f-c289-4581-9781-24b2bdbb0841","1a4d980d-30ef-46e4-8b76-44da9002be6b","4ca95b4a-0d74-4bea-aac5-9f45da876178","a9375cc4-e115-4f06-aa6c-33b7b4217685","2d229755-ee38-4f7f-a7f8-404125b3c393","bfee4ca1-77f7-4e19-8617-4f0e54d052a3","00ee1a95-2236-4c43-83d7-36c911172069").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","d0162f3e-d9a5-40e0-84e4-7130e8e732ee").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["95882ddd-13f3-4ea8-b7f2-026e332bdc06"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["b66fa362-b975-4f0e-a7b2-9b0c37205c54"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
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
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Water Management",
                            "Agriculture Plantation",
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Cleaning"
                    ],
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Bridge/Pulia",
                            "Community Hall/Centre/House",
                            "Fencing & Boundary Wall",
                            "Road",
                            "Ground Levelling",
                            "Wall for Roads",
                            "Dustbin",
                            "Toilet/Bathroom/private spaces",
                            "Community Farming",
                            "Kitchen Garden",
                            "Land bunding",
                            "Plantation",
                            "Compost pit",
                            "Electric Pole",
                            "Seed ball",
                            "Flower garden",
                            "Nursey Making"
                          ],
                          "answerConceptUuids": [
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "2d229755-ee38-4f7f-a7f8-404125b3c393",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Making"
                    ],
                    "answerUuidsToSkip": [
                      "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Road & road side bush cutting",
                            "Water-body premises",
                            "Ground levelling",
                            "Truck Unloading",
                            "Backwater",
                            "Waterfall/Jharna/Spring Water/Dhara",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "a5f019c6-17a0-4536-8222-67935d482774",
                            "00ee1a95-2236-4c43-83d7-36c911172069"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Repairing"
                    ],
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Community Spaces - Meeting Point/ Religious Places/Schools/Park & AWC etc.",
                            "Road & road side bush cutting",
                            "Water-body premises",
                            "Plantation",
                            "Land Bunding",
                            "Dustbin",
                            "Compost pit",
                            "Truck Unloading",
                            "Seed ball",
                            "Backwater",
                            "Community farming",
                            "Kitchen Garden",
                            "Flower garden",
                            "Nursey Making",
                            "River"
                          ],
                          "answerConceptUuids": [
                            "58653f74-082c-47a7-9a25-548990a4bd4c",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "2d229755-ee38-4f7f-a7f8-404125b3c393",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3",
                            "00ee1a95-2236-4c43-83d7-36c911172069"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Cleaning"
                    ],
                    "answerUuidsToSkip": [
                      "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Repairing"
                    ],
                    "answerUuidsToSkip": [
                      "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Number of participants (Male)",
          "uuid": "956eabce-b684-4289-848e-fe648d7ee684",
          "keyValues": [],
          "concept": {
            "name": "Number of Participants (Male)",
            "uuid": "526b0d5d-51cc-4004-8c12-7a6c71c6c516",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 29,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "f3539ada-8120-4b24-a9fc-187a93b6a976",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of participants",
          "uuid": "54ba6c16-2a6a-451d-b2a6-6b5b83660ecd",
          "keyValues": [],
          "concept": {
            "name": "Number of participants (voided~220326)",
            "uuid": "31ea4861-8939-42c2-a7a1-bcd2313946c6",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "lowNormal": 1,
            "active": true,
            "voided": true
          },
          "displayOrder": 30,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Type of Initiative",
                          "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "f3539ada-8120-4b24-a9fc-187a93b6a976",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Conducted With Students",
          "uuid": "bec0bd55-59e7-4aca-b533-4f1745195fa8",
          "keyValues": [],
          "concept": {
            "name": "Activity Conducted With Students",
            "uuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "School Improvement Activities (Plantation/Kitchen Garden/Cleaning of School/Garden)",
                "uuid": "5a74c9f8-e5eb-4113-9c61-720d7eb4de7e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Any other",
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Academic (Counting/Writing/Essay/Alphabet)",
                "uuid": "267c7456-ba18-44b3-93b3-a371460f9a30",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Knowledge Activities (Health/Hygiene/Environment/Conservation)",
                "uuid": "ad8143ae-40f1-4b6b-ba97-c95cc091e9d8",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Art & Craft (Painting/Drawing/Rangoli/ Craft Activity/Poster)",
                "uuid": "e1c97f61-ec50-4594-9254-606c2f15d2b9",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cultural (Dance/Drama/Singing/Poem/Skit/Story Telling/Rhymes)",
                "uuid": "bb9ba1dd-82c9-45ac-86c4-d524ab514f49",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Sports (Games/Kho Kho/Yoga/Any other)",
                "uuid": "6f1feaba-3286-414d-a40b-d7eb259b7183",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 32,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Specify other activity",
          "uuid": "5f63c3fa-fa4e-4a7c-aa1d-e8157c31a563",
          "keyValues": [],
          "concept": {
            "name": "Specify other activity",
            "uuid": "d3dc93e7-cf8c-4520-acf9-80a57add5e37",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 33,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2d3389d4-07ae-42cd-8c25-e9a0203e2c9a").containsAnswerConceptName("f903963d-1c98-4f85-827c-c15a0930b845").and.when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Activity Conducted With Students",
                          "conceptUuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other"
                          ],
                          "answerConceptUuids": [
                            "f903963d-1c98-4f85-827c-c15a0930b845"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "mandatory": true
        },
        {
          "name": "Specify other S2S related activity",
          "uuid": "e6c3c79d-f87c-42c9-9de6-5cd48bd4cfe3",
          "keyValues": [],
          "concept": {
            "name": "Specify other S2S related activity",
            "uuid": "885b713c-7c3b-469e-bcab-5b30c742c2c4",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 34,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("2d3389d4-07ae-42cd-8c25-e9a0203e2c9a").containsAnswerConceptName("f903963d-1c98-4f85-827c-c15a0930b845").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "S2S related activity",
                          "conceptUuid": "2d3389d4-07ae-42cd-8c25-e9a0203e2c9a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other"
                          ],
                          "answerConceptUuids": [
                            "f903963d-1c98-4f85-827c-c15a0930b845"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of school",
          "uuid": "779711cc-dc68-414d-b5ea-553c2106054c",
          "keyValues": [],
          "concept": {
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tuition/Learning Centre",
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Anganwadi",
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "School",
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 35,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Photograph",
          "uuid": "3dba9e43-d271-41fe-ac43-498680140df5",
          "keyValues": [],
          "concept": {
            "name": "Photograph",
            "uuid": "ed133199-dbae-4ba7-8c5c-2f23f119edf5",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 36,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = condition11 ;
  
  if(condition11){
   const photograph = individual.getObservationReadableValue("Photograph");
   const typeOfInitiative = individual.getObservationReadableValue("Type of initiative");
    
    if(photograph){
        if(photograph.length > 4 && typeOfInitiative == 'S2S'){
            validationErrors.push("you can select max 4 photographs");
         }   
        if(photograph.length > 2 && typeOfInitiative == 'NJPC'){
            validationErrors.push("you can select max 2 photographs");
         }   
         
     }
    
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Work Objective",
          "uuid": "c594348a-802e-4482-bb14-ef2d36a7e30e",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "concept": {
            "name": "Work Objective",
            "uuid": "a443ce12-68c3-4167-9e74-8d673006bbc5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Villagers were getting sick repeatedly",
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa",
                "dataType": "NA",
                "answers": [],
                "order": 43,
                "active": true
              },
              {
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "To improve water retention capacity",
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                "dataType": "NA",
                "answers": [],
                "order": 36,
                "active": true
              },
              {
                "name": "The garbage used to be dumped everywhere",
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "To repair/rebuilt damaged community infrastructure",
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                "dataType": "NA",
                "answers": [],
                "order": 40,
                "active": true
              },
              {
                "name": "Children were unable to play",
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "The road could not be used for commuting",
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to water facilities/sources",
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Difficulty to get water for livestock related needs",
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Water was too dirty to drink",
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                "dataType": "NA",
                "answers": [],
                "order": 50,
                "active": true
              },
              {
                "name": "There was no connectivity to the market",
                "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "The crops needed organic manure hence composting",
                "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "To improve grazing facilities for livestock",
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearby market facilities",
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Shortage of water in the village",
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "To increase incomes in the village from sales of vegetables",
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                "dataType": "NA",
                "answers": [],
                "order": 37,
                "active": true
              },
              {
                "name": "There were mosquitoes breeding",
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "In order to increase life and longevity of trees",
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "There was limited/ or no connectivity to the nearby villages",
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "The drains were clogged",
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "There was a need for water tables to increase",
                "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "To improve agricultural productivity",
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "To construct partitions to demarcate areas",
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 51,
                "active": true
              },
              {
                "name": "The children did not have a proper place to study",
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Water needed to be conserved, hence planted trees",
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                "dataType": "NA",
                "answers": [],
                "order": 45,
                "active": true
              },
              {
                "name": "There was fear of diseases like cholera and typhoid happening",
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                "dataType": "NA",
                "answers": [],
                "order": 41,
                "active": true
              },
              {
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "There was no meeting place for villagers",
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "The place was very dirty",
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Water was dirty to use for household related needs",
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                "dataType": "NA",
                "answers": [],
                "order": 48,
                "active": true
              },
              {
                "name": "There was stench all over the place",
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "To decrease the impact of deforestation",
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "To protect school facilities and ensure safety for children",
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                "dataType": "NA",
                "answers": [],
                "order": 39,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Water needed to be conserved",
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                "dataType": "NA",
                "answers": [],
                "order": 44,
                "active": true
              },
              {
                "name": "Difficulty in reaching to water source",
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Shortage of water for irrigation purposes",
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Water was dirty for use for livestock related needs",
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                "dataType": "NA",
                "answers": [],
                "order": 47,
                "active": true
              },
              {
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 52,
                "active": true
              },
              {
                "name": "Water was getting wasted",
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                "dataType": "NA",
                "answers": [],
                "order": 49,
                "active": true
              },
              {
                "name": "Villagers including children were getting sick",
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                "dataType": "NA",
                "answers": [],
                "order": 42,
                "active": true
              },
              {
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Water used to collect and the place would get flooded/swamped",
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                "dataType": "NA",
                "answers": [],
                "order": 46,
                "active": true
              },
              {
                "name": "To protect community infrastructure from getting damaged",
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                "dataType": "NA",
                "answers": [],
                "order": 38,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 37,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Sanitaiton",
                            "Water Management",
                            "Agriculture Plantation",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was no connectivity to the market",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "Water needed to be conserved",
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "Water needed to be conserved, hence planted trees"
                    ],
                    "answerUuidsToSkip": [
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water needed to be conserved",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve water retention capacity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "Water needed to be conserved, hence planted trees",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Others",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "mandatory": true
        },
        {
          "name": "Objective of work",
          "uuid": "6d53c6c1-7a3e-4d80-8fbd-697f00c712b4",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Others"
              ]
            }
          ],
          "concept": {
            "name": "Objective of Work",
            "uuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was stench all over the place",
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "To construct partitions to demarcate areas",
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Water needed to be conserved, hence planted trees",
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                "dataType": "NA",
                "answers": [],
                "order": 45,
                "active": true
              },
              {
                "name": "The place was very dirty",
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                "dataType": "NA",
                "answers": [],
                "order": 41,
                "active": true
              },
              {
                "name": "To protect community infrastructure from getting damaged",
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                "dataType": "NA",
                "answers": [],
                "order": 38,
                "active": true
              },
              {
                "name": "The drains were clogged",
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "There was fear of diseases like cholera and typhoid happening",
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Shortage of water for irrigation purposes",
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "The road could not be used for commuting",
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "To improve water retention capacity",
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                "dataType": "NA",
                "answers": [],
                "order": 36,
                "active": true
              },
              {
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 52,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearby market facilities",
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "To protect school facilities and ensure safety for children",
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                "dataType": "NA",
                "answers": [],
                "order": 39,
                "active": true
              },
              {
                "name": "There were mosquitoes breeding",
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "The children did not have a proper place to study",
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Water was too dirty to drink",
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                "dataType": "NA",
                "answers": [],
                "order": 50,
                "active": true
              },
              {
                "name": "Difficulty to get water for livestock related needs",
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Villagers were getting sick repeatedly",
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa",
                "dataType": "NA",
                "answers": [],
                "order": 43,
                "active": true
              },
              {
                "name": "Water needed to be conserved",
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                "dataType": "NA",
                "answers": [],
                "order": 44,
                "active": true
              },
              {
                "name": "Water was getting wasted",
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                "dataType": "NA",
                "answers": [],
                "order": 49,
                "active": true
              },
              {
                "name": "The garbage used to be dumped everywhere",
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Villagers including children were getting sick",
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                "dataType": "NA",
                "answers": [],
                "order": 42,
                "active": true
              },
              {
                "name": "Water used to collect and the place would get flooded/swamped",
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                "dataType": "NA",
                "answers": [],
                "order": 46,
                "active": true
              },
              {
                "name": "There was no connectivity to the market",
                "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "There was a need for water tables to increase",
                "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Water was dirty for use for livestock related needs",
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                "dataType": "NA",
                "answers": [],
                "order": 47,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to water facilities/sources",
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Children were unable to play",
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Difficulty in reaching to water source",
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "There was limited/ or no connectivity to the nearby villages",
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "There was no meeting place for villagers",
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 51,
                "active": true
              },
              {
                "name": "To increase incomes in the village from sales of vegetables",
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                "dataType": "NA",
                "answers": [],
                "order": 37,
                "active": true
              },
              {
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "To repair/rebuilt damaged community infrastructure",
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                "dataType": "NA",
                "answers": [],
                "order": 40,
                "active": true
              },
              {
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "To improve agricultural productivity",
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "To improve grazing facilities for livestock",
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "To decrease the impact of deforestation",
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "In order to increase life and longevity of trees",
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Water was dirty to use for household related needs",
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                "dataType": "NA",
                "answers": [],
                "order": 48,
                "active": true
              },
              {
                "name": "Shortage of water in the village",
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "The crops needed organic manure hence composting",
                "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 38,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnyAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0","fe6cd113-e3e3-44b6-abe7-81ba7605787b","1b061e73-b94f-499d-b82c-234670e104c5","d0162f3e-d9a5-40e0-84e4-7130e8e732ee","f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 && condition21 ;
    if(condition12 ) {
    _.forEach(["f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","c1b668ce-5d81-4e25-80f2-10a0fc98d313","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","834993e6-5643-4229-914d-a58df97cef30","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","c3bed0f8-f8fd-4403-ba66-837547d38623","cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","f674eee6-c577-4807-a5c2-b7bfa6d1c516","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","c3bed0f8-f8fd-4403-ba66-837547d38623","448ebcb5-6974-43b7-8d9b-67002770e1b5","07557c41-b1e1-47fd-8a16-d3dc5363a16e","75813429-7612-49f9-b159-e746c38be9da","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","14c72422-9cfc-49f4-a835-7ab131dd3190","f674eee6-c577-4807-a5c2-b7bfa6d1c516","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","829f7f00-fcca-46fe-b0b5-ef39f2548141","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e","835cab14-f41e-43d4-a77f-db59b715317f","4cf67429-031f-41ae-a8e1-5e1a3dd696d5","a4818198-5117-4d32-8ed0-aa7e1eaa6e80","5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c","9b08e1dd-d469-4f2e-a2b7-045c5256ca6a","c3bed0f8-f8fd-4403-ba66-837547d38623","b748ae00-0844-473d-b427-6031936809fa","0c1c43ae-9509-4f61-bc20-99ffb21fb3cc","829f7f00-fcca-46fe-b0b5-ef39f2548141","5381428f-cc8e-4a20-9e3c-994794de27f5","50bd6eb9-cce1-4eff-b4c2-e7177256e83f","0605d833-b691-4a85-88a6-8dcba0405dbc","14816271-baf3-4c13-865f-dcef92ab0c03","f667c9e4-4300-4d4d-a726-009046566fa1","486aceb0-4960-485a-a8e4-9bdad2f65c58","951ec09c-d99b-4830-9ea5-e5f9b4ddead9","3035de80-1603-4ea9-947b-82d093e2bba2","e550818a-037c-4cad-8565-5a9d6ed4b76e","67977dec-8209-4483-8b77-030797cbd53e","4fed6486-9c2e-4cbc-a6bb-92ad7c669955","18803ff7-484e-4187-a2ae-64e4f47890aa","38ca7b94-0432-4e3a-bea8-1d33f9b2abad","7759083b-3bdd-4fac-b198-04ea94955631","2db06055-67eb-4966-8591-c414aa00c774","b145f169-e306-4d4c-a820-88b51a63b2a6","07557c41-b1e1-47fd-8a16-d3dc5363a16e","a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d","75813429-7612-49f9-b159-e746c38be9da","448ebcb5-6974-43b7-8d9b-67002770e1b5","5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478","18121e37-b6e6-4301-a61b-4ccad01d1aad","e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5","f674eee6-c577-4807-a5c2-b7bfa6d1c516","14c72422-9cfc-49f4-a835-7ab131dd3190","508c3b0b-9ba2-44a5-b8e4-9c82713368a4","9359f1ad-5024-4464-8cea-39579c1468ec","6e387d83-5663-458a-b69a-4eb2252e0594","20a4f33f-caa5-44ef-97dd-c39d50aade45","834993e6-5643-4229-914d-a58df97cef30","6980e13a-5071-4b87-88b9-54f8d6bcce36","865be3b0-6b05-475b-b624-43aca7568538","c1b668ce-5d81-4e25-80f2-10a0fc98d313","adecc97c-6583-4439-9c8d-06b552b10e1d","abb094e0-64f5-4058-9d56-0f270cb4add2","32d75b8f-e0c0-424b-85ae-a1d2829ee86a","28aeea13-e4e5-4ba9-9ec8-0f1863d0d190","e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e","cf36fe36-d7fe-4f2f-be9b-54f02480ed79","027da0d9-9fab-4d60-aea7-f232c386a7b7","3ce67f78-49b8-4663-bb9d-00293e4e67a3","016a6d0a-60f9-405f-8dac-08fcf6b39823","865be3b0-6b05-475b-b624-43aca7568538"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure",
                            "Sanitaiton",
                            "Water Management",
                            "Agriculture Plantation",
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0",
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b",
                            "1b061e73-b94f-499d-b82c-234670e104c5",
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee",
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was no connectivity to the market",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "Water needed to be conserved",
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To improve water retention capacity",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "Water needed to be conserved, hence planted trees"
                    ],
                    "answerUuidsToSkip": [
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "Water needed to be conserved",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "The crops needed organic manure hence composting",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve agricultural productivity",
                      "To improve water retention capacity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Water needed to be conserved, hence planted trees",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers including children were getting sick",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Shortage of water in the village",
                      "Difficulty in reaching to water source",
                      "Water was too dirty to drink",
                      "Water was dirty for use for livestock related needs",
                      "Water was dirty to use for household related needs",
                      "Water was getting wasted",
                      "Water needed to be conserved",
                      "There was a need for water tables to increase",
                      "Villagers especially women and children were spending too much time in collecting waters",
                      "Villagers including children were getting sick",
                      "It was difficult to get clean and adequate water to fulfil household responsibilities",
                      "Difficulty to get water for livestock related needs",
                      "Shortage of water for irrigation purposes",
                      "Water used to collect and the place would get  flooded/swamped",
                      "The place was very dirty",
                      "There were mosquitoes breeding",
                      "The drains were clogged",
                      "The road could not be used for commuting",
                      "The garbage used to be dumped everywhere",
                      "There was stench all over the place",
                      "Children were unable to play",
                      "Villagers were getting sick repeatedly",
                      "There was fear of getting bitten by snakes and worms while commuting",
                      "There was fear of diseases like cholera and typhoid happening",
                      "There is fear of being attacked by animals in heavily bushed roads",
                      "The women did not have bathrooms to change or bathe in privacy",
                      "There was soil erosion due to heavy water flow hence need for plantation",
                      "Water needed to be conserved, hence planted trees",
                      "The crops needed organic manure hence composting",
                      "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                      "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                      "To ensure better nutrition to pregnant and lactating mother,, hence kitchen garden",
                      "To increase incomes in the village from sales of vegetables",
                      "To improve water retention capacity",
                      "To improve agricultural productivity",
                      "To improve grazing facilities for livestock",
                      "To decrease the impact of deforestation",
                      "To construct partitions to demarcate areas",
                      "There was no meeting place for villagers",
                      "There was no connectivity to the market",
                      "There was limited/ or no connectivity to the nearby villages",
                      "There was limited/or no connectivity to nearly medical facilities",
                      "There was limited/or no connectivity to water facilities/sources",
                      "There was limited/or no connectivity to nearly educational facilities/schools",
                      "There was limited/or no connectivity to nearby market facilities",
                      "The children did not have a proper place to study",
                      "The walls/boundaries of the school were damaged affecting studies",
                      "In order to increase life and longevity of trees",
                      "To protect school facilities and ensure safety for children",
                      "To protect community infrastructure from getting damaged",
                      "To repair/rebuilt damaged community infrastructure",
                      "Others",
                      "There was limited/or no connectivity to nearly medical facilities"
                    ],
                    "answerUuidsToSkip": [
                      "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                      "835cab14-f41e-43d4-a77f-db59b715317f",
                      "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                      "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                      "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                      "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                      "c3bed0f8-f8fd-4403-ba66-837547d38623",
                      "b748ae00-0844-473d-b427-6031936809fa",
                      "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                      "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                      "5381428f-cc8e-4a20-9e3c-994794de27f5",
                      "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                      "0605d833-b691-4a85-88a6-8dcba0405dbc",
                      "14816271-baf3-4c13-865f-dcef92ab0c03",
                      "f667c9e4-4300-4d4d-a726-009046566fa1",
                      "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                      "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                      "3035de80-1603-4ea9-947b-82d093e2bba2",
                      "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                      "67977dec-8209-4483-8b77-030797cbd53e",
                      "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                      "18803ff7-484e-4187-a2ae-64e4f47890aa",
                      "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                      "7759083b-3bdd-4fac-b198-04ea94955631",
                      "2db06055-67eb-4966-8591-c414aa00c774",
                      "b145f169-e306-4d4c-a820-88b51a63b2a6",
                      "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                      "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                      "75813429-7612-49f9-b159-e746c38be9da",
                      "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                      "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                      "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                      "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                      "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                      "14c72422-9cfc-49f4-a835-7ab131dd3190",
                      "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                      "9359f1ad-5024-4464-8cea-39579c1468ec",
                      "6e387d83-5663-458a-b69a-4eb2252e0594",
                      "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                      "834993e6-5643-4229-914d-a58df97cef30",
                      "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                      "865be3b0-6b05-475b-b624-43aca7568538",
                      "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                      "adecc97c-6583-4439-9c8d-06b552b10e1d",
                      "abb094e0-64f5-4058-9d56-0f270cb4add2",
                      "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                      "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                      "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                      "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                      "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                      "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                      "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                      "865be3b0-6b05-475b-b624-43aca7568538"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscellaneous Activity"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Any other not given above, Specify other",
          "uuid": "e4bd3b1a-2b42-448c-a099-79d866870d39",
          "keyValues": [],
          "concept": {
            "name": "Any other not given above, Specify other",
            "uuid": "33919c90-92b1-44f6-a5c8-3d04a3d159a1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 39,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("f9a72c48-3238-441d-a1de-2d8cd938dc22").or.when.valueInRegistration("a443ce12-68c3-4167-9e74-8d673006bbc5").containsAnswerConceptName("f9a72c48-3238-441d-a1de-2d8cd938dc22").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other not given above"
                          ],
                          "answerConceptUuids": [
                            "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Work Objective",
                          "conceptUuid": "a443ce12-68c3-4167-9e74-8d673006bbc5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any other not given above"
                          ],
                          "answerConceptUuids": [
                            "f9a72c48-3238-441d-a1de-2d8cd938dc22"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Type of Educational Institute",
          "uuid": "fa22989f-c836-4e60-8269-7019ade176de",
          "keyValues": [],
          "concept": {
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tuition/Learning Centre",
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Anganwadi",
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "School",
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 40,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "mandatory": true
        },
        {
          "name": "School / Anganwadi / Learning Center Name",
          "uuid": "6b6e4dd4-e8bf-4ed0-8fd0-2d2d9126b28f",
          "keyValues": [],
          "concept": {
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 41,
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
  
  const typeOfInitiativeIsCfwOrS2S = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnyAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
  visibility = typeOfInitiativeIsCfwOrS2S ;
  
    const typeOfInitiativeIsCfw = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
    const currentValue = individual.getObservationValue('2e39d19d-fc03-400e-9f5e-1f815483ea47');
    
    if (typeOfInitiativeIsCfw && !currentValue ) {
    
    value = 'None';
    
    };
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Was Undertaking Form Filled?",
          "uuid": "45c85d33-b9e3-4f2c-99b7-0d2557222e9f",
          "keyValues": [],
          "concept": {
            "name": "Was Undertaking Form Filled?",
            "uuid": "1a90cfd0-5b70-4425-ae76-84d6ea589088",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 42,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("1a90cfd0-5b70-4425-ae76-84d6ea589088").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Type of school",
          "uuid": "148ef386-8392-4cb2-a729-aa566376f5a1",
          "keyValues": [],
          "concept": {
            "name": "Type of Educational Institute",
            "uuid": "de182013-d8c6-4b2f-a474-7033bda1d518",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tuition/Learning Centre",
                "uuid": "c5c22ebd-f12a-4ee7-8718-297225204ca6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Anganwadi",
                "uuid": "db17de4f-d7f6-4ab3-afd6-6231a874890a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "School",
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 43,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                          "scope": "registration",
                          "conceptName": "Type of initiative",
                          "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Sub-type for Access infrastructure",
          "uuid": "fef58a64-b5a0-490b-8cd9-26f3346b402b",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type (voided~207436)",
            "uuid": "6bc60f7a-fe77-435a-b9ba-93de5e131123",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Community Hall/Center/House",
                "uuid": "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Benches",
                "uuid": "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Road",
                "uuid": "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Bandstand",
                "uuid": "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Ground levelling",
                "uuid": "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Protection wall for roads",
                "uuid": "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Fencing & boundary wall",
                "uuid": "f431cbac-b99d-48fb-8694-0299c352eb9a",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Bridge/Pulia",
                "uuid": "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 44,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("452bc10f-09b4-446e-93f4-52d477885be0").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Access Infrastructure"
                          ],
                          "answerConceptUuids": [
                            "452bc10f-09b4-446e-93f4-52d477885be0"
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
        },
        {
          "name": "Activity Sub-type for Water management",
          "uuid": "fc2b2846-d06a-4b7f-a557-0ff42f1c35f8",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Water management",
            "uuid": "b116f78d-1c06-4014-a511-72378136204f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Pond",
                "uuid": "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Dugwell/Chua/Jalkhund",
                "uuid": "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Waterfall/Jharna/Spring Water/Dhara",
                "uuid": "a5f019c6-17a0-4536-8222-67935d482774",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Soak pit",
                "uuid": "be655900-d882-4d99-ab29-faf560b8e832",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                "uuid": "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Canal",
                "uuid": "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water-Tank/Pipeline",
                "uuid": "82246b7a-c13f-435d-9e17-d8d288ff3891",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Backwater",
                "uuid": "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Check dam",
                "uuid": "824d11d4-525d-4610-9afe-f87c030a54eb",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "BackwaterDugwell/Chua/Jalkund (voided~207440)",
                "uuid": "64fe012a-3230-4115-8092-f16bf6286200",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true,
                "voided": true
              },
              {
                "name": "Well",
                "uuid": "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "River",
                "uuid": "00ee1a95-2236-4c43-83d7-36c911172069",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 45,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("1b061e73-b94f-499d-b82c-234670e104c5").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Water Management"
                          ],
                          "answerConceptUuids": [
                            "1b061e73-b94f-499d-b82c-234670e104c5"
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
        },
        {
          "name": "Activity Sub-type for Sanitation",
          "uuid": "c8e3dcac-2ef9-4b8e-a7f8-edecc893e6a3",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Sanitation (voided~207454)",
            "uuid": "3ab64b6c-8ad3-4cbe-9dc8-fa3a8246d6e6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Dustbin",
                "uuid": "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Road & road-side bush cutting",
                "uuid": "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                "uuid": "58653f74-082c-47a7-9a25-548990a4bd4c",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Drainage",
                "uuid": "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Water body premises",
                "uuid": "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 46,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("fe6cd113-e3e3-44b6-abe7-81ba7605787b").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Sanitaiton"
                          ],
                          "answerConceptUuids": [
                            "fe6cd113-e3e3-44b6-abe7-81ba7605787b"
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
        },
        {
          "name": "Activity Sub-type for Agricultural plantation",
          "uuid": "a2d34b27-fd1a-4989-819b-f05f1757b23c",
          "keyValues": [],
          "concept": {
            "name": "Activity Sub-type for Agricultural plantation",
            "uuid": "bdb69c4d-d46a-4387-9b08-aba1cdaf66cc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Land Bundling (voided~207458)",
                "uuid": "d7356902-e705-414d-99e4-f08b10fe7f73",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true,
                "voided": true
              },
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Compost Pit",
                "uuid": "798e61fa-8d8d-43b4-8738-251be7bdc5b4",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Plantation",
                "uuid": "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Community farming",
                "uuid": "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kitchen Garden",
                "uuid": "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 47,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("d0162f3e-d9a5-40e0-84e4-7130e8e732ee").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Agriculture Plantation"
                          ],
                          "answerConceptUuids": [
                            "d0162f3e-d9a5-40e0-84e4-7130e8e732ee"
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
        },
        {
          "name": "Activity Sub-type for Miscellaneous",
          "uuid": "53b2f878-80b7-464d-bfa8-67af53c29796",
          "keyValues": [],
          "concept": {
            "name": "Miscellaneous",
            "uuid": "278d95a9-5a62-4ff2-b515-4a6332e09aca",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Others",
                "uuid": "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Toilet/Bathroom/private spaces",
                "uuid": "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Truck Unloading",
                "uuid": "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Electric Pole",
                "uuid": "38dc542e-277d-4790-8982-0d2f3253f0fc",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 48,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("49be122c-b452-4b5c-ad77-bbf1fcf1ea3a").containsAnswerConceptName("f73d13a5-f6cf-4138-b4c6-849efbbe632f").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Activity Type",
                          "conceptUuid": "49be122c-b452-4b5c-ad77-bbf1fcf1ea3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Miscelleneous"
                          ],
                          "answerConceptUuids": [
                            "f73d13a5-f6cf-4138-b4c6-849efbbe632f"
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
        },
        {
          "name": "Specify Other Objective",
          "uuid": "0dfdce15-da75-4fd0-8472-8690b89a4710",
          "keyValues": [],
          "concept": {
            "name": "Specify Other Objective",
            "uuid": "3e1070a7-6c19-4594-aeb6-542025a66f8a",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 49,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("0ea2a76f-933e-448e-896a-46a4238a3488").containsAnswerConceptName("016a6d0a-60f9-405f-8dac-08fcf6b39823").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Objective of Work",
                          "conceptUuid": "0ea2a76f-933e-448e-896a-46a4238a3488",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others"
                          ],
                          "answerConceptUuids": [
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823"
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
          "mandatory": false
        },
        {
          "name": "Objective of work",
          "uuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "keyValues": [],
          "concept": {
            "name": "Objective of work (voided~207476)",
            "uuid": "6e6fe7fc-0cf0-4b68-93a6-7b95e12fd08c",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 50,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activity Category",
          "uuid": "42e72a39-9d37-4161-9280-47adcf682033",
          "keyValues": [],
          "concept": {
            "name": "Activity Category (voided~207467)",
            "uuid": "5c26afbe-c19e-4419-b89e-d03846c0e2e2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Making",
                "uuid": "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Cleaning",
                "uuid": "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Repairing",
                "uuid": "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 51,
          "type": "SingleSelect",
          "parentFormElementUuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sanitation",
          "uuid": "37445bff-eb19-4939-908c-d927908e2dda",
          "keyValues": [],
          "concept": {
            "name": "Sanitation activity",
            "uuid": "21a0ec64-d7d7-4dd9-a4b9-3ce68cc6be3c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There were mosquitoes breeding",
                "uuid": "486aceb0-4960-485a-a8e4-9bdad2f65c58",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "The place was very dirty",
                "uuid": "f667c9e4-4300-4d4d-a726-009046566fa1",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "There was stench all over the place",
                "uuid": "67977dec-8209-4483-8b77-030797cbd53e",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Villagers were getting sick repeatedly",
                "uuid": "18803ff7-484e-4187-a2ae-64e4f47890aa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Children were unable to play",
                "uuid": "4fed6486-9c2e-4cbc-a6bb-92ad7c669955",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "The women did not have bathrooms to change or bathe in privacy",
                "uuid": "b145f169-e306-4d4c-a820-88b51a63b2a6",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "The drains were clogged",
                "uuid": "951ec09c-d99b-4830-9ea5-e5f9b4ddead9",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "The garbage used to be dumped everywhere",
                "uuid": "e550818a-037c-4cad-8565-5a9d6ed4b76e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "There was fear of diseases like cholera and typhoid happening",
                "uuid": "7759083b-3bdd-4fac-b198-04ea94955631",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "The road could not be used for commuting",
                "uuid": "3035de80-1603-4ea9-947b-82d093e2bba2",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "There was fear of getting bitten by snakes and worms while commuting",
                "uuid": "38ca7b94-0432-4e3a-bea8-1d33f9b2abad",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "There is fear of being attacked by animals in heavily bushed roads",
                "uuid": "2db06055-67eb-4966-8591-c414aa00c774",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 52,
          "type": "SingleSelect",
          "parentFormElementUuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Agriculture_Plantation",
          "uuid": "0a09518a-e6ac-47ae-ba64-ff93ece6b0e6",
          "keyValues": [],
          "concept": {
            "name": "Agriculture_Plantation",
            "uuid": "dc829fd5-0c19-4223-93a0-c29b8919dcc9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was soil erosion due to heavy water flow hence need for plantation",
                "uuid": "07557c41-b1e1-47fd-8a16-d3dc5363a16e",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "To augment supply of vegetables in the mid-day meals of children, hence kitchen garden in aaganwadi/school",
                "uuid": "5ffcc7bd-a725-43dc-a7bf-e6bee3b4d478",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "To improve grazing facilities for livestock",
                "uuid": "508c3b0b-9ba2-44a5-b8e4-9c82713368a4",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "To improve water retention capacity",
                "uuid": "f674eee6-c577-4807-a5c2-b7bfa6d1c516",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "To construct partitions to demarcate areas",
                "uuid": "6e387d83-5663-458a-b69a-4eb2252e0594",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "To increase incomes in the village from sales of vegetables",
                "uuid": "e369cc1c-1ce2-4b84-b4bd-e827eccdfcb5",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "To decrease the impact of deforestation",
                "uuid": "9359f1ad-5024-4464-8cea-39579c1468ec",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Water needed to be conserved, hence planted trees",
                "uuid": "a2a28a0e-6458-4d8e-8fa7-4e9179c29e2d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "To improve agricultural productivity",
                "uuid": "14c72422-9cfc-49f4-a835-7ab131dd3190",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "The crops needed organic manure hence composting",
                "uuid": "75813429-7612-49f9-b159-e746c38be9da",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "To ensure better nutrition to pregnant and lactating mother, hence kitchen garden",
                "uuid": "18121e37-b6e6-4301-a61b-4ccad01d1aad",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "There was shortage of vegetables in the village/to improve availability of vegetables in the village, hence kitchen garden",
                "uuid": "448ebcb5-6974-43b7-8d9b-67002770e1b5",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 53,
          "type": "SingleSelect",
          "parentFormElementUuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Water management",
          "uuid": "ff3d292d-53b1-4fcd-9a15-fb89a6b1f188",
          "keyValues": [],
          "concept": {
            "name": "Water management",
            "uuid": "0730dcd3-d272-481f-8a5d-09de5fae1005",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Water was too dirty to drink",
                "uuid": "4cf67429-031f-41ae-a8e1-5e1a3dd696d5",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Villagers especially women and children were spending too much time in collecting waters",
                "uuid": "0c1c43ae-9509-4f61-bc20-99ffb21fb3cc",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Water was dirty for use for livestock related needs",
                "uuid": "a4818198-5117-4d32-8ed0-aa7e1eaa6e80",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Difficulty in reaching to water source",
                "uuid": "835cab14-f41e-43d4-a77f-db59b715317f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Villagers including children were getting sick",
                "uuid": "829f7f00-fcca-46fe-b0b5-ef39f2548141",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "There was a need for water tables to increase",
                "uuid": "b748ae00-0844-473d-b427-6031936809fa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Water used to collect and the place would get flooded/swamped",
                "uuid": "14816271-baf3-4c13-865f-dcef92ab0c03",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Shortage of water in the village",
                "uuid": "cfd4cfd5-3f06-40fc-bc85-05cbfefaaf4e",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Water was getting wasted",
                "uuid": "9b08e1dd-d469-4f2e-a2b7-045c5256ca6a",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Difficulty to get water for livestock related needs",
                "uuid": "50bd6eb9-cce1-4eff-b4c2-e7177256e83f",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "It was difficult to get clean and adequate water to fulfil household responsibilities",
                "uuid": "5381428f-cc8e-4a20-9e3c-994794de27f5",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Shortage of water for irrigation purposes",
                "uuid": "0605d833-b691-4a85-88a6-8dcba0405dbc",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Water was dirty to use for household related needs",
                "uuid": "5ed8e7d5-ff25-4b5f-a46b-2e2bb4f2756c",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Water needed to be conserved",
                "uuid": "c3bed0f8-f8fd-4403-ba66-837547d38623",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 54,
          "type": "SingleSelect",
          "parentFormElementUuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Access_Infrastructure",
          "uuid": "40676051-fa41-4604-bff1-1cf898484dfe",
          "keyValues": [],
          "concept": {
            "name": "Access_Infrastructure",
            "uuid": "72a547e0-0058-4840-8f9e-d22479e4a48f",
            "dataType": "Coded",
            "answers": [
              {
                "name": "There was limited/or no connectivity to nearly medical facilities",
                "uuid": "865be3b0-6b05-475b-b624-43aca7568538",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearby market facilities",
                "uuid": "abb094e0-64f5-4058-9d56-0f270cb4add2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to nearly educational facilities/schools",
                "uuid": "adecc97c-6583-4439-9c8d-06b552b10e1d",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "The walls/boundaries of the school were damaged affecting studies",
                "uuid": "28aeea13-e4e5-4ba9-9ec8-0f1863d0d190",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "To protect school facilities and ensure safety for children",
                "uuid": "cf36fe36-d7fe-4f2f-be9b-54f02480ed79",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "There was limited/ or no connectivity to the nearby villages",
                "uuid": "6980e13a-5071-4b87-88b9-54f8d6bcce36",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "There was limited/or no connectivity to water facilities/sources",
                "uuid": "c1b668ce-5d81-4e25-80f2-10a0fc98d313",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "To repair/rebuilt damaged community infrastructure",
                "uuid": "3ce67f78-49b8-4663-bb9d-00293e4e67a3",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Any other not given above",
                "uuid": "f9a72c48-3238-441d-a1de-2d8cd938dc22",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "The children did not have a proper place to study",
                "uuid": "32d75b8f-e0c0-424b-85ae-a1d2829ee86a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "In order to increase life and longevity of trees",
                "uuid": "e66b7d80-a9ce-42eb-8ed4-96f1c5c2198e",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "To protect community infrastructure from getting damaged",
                "uuid": "027da0d9-9fab-4d60-aea7-f232c386a7b7",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "There was no connectivity to the market",
                "uuid": "834993e6-5643-4229-914d-a58df97cef30",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "There was no meeting place for villagers",
                "uuid": "20a4f33f-caa5-44ef-97dd-c39d50aade45",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 55,
          "type": "SingleSelect",
          "parentFormElementUuid": "5d8aa3b7-ef6c-488b-bb1a-19572054868d",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Activity Details",
      "timed": false
    },
    {
      "uuid": "76d294bc-eee0-495b-a698-f7551247e96d",
      "name": "Measurement",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "Measurements type",
          "uuid": "4952ad67-05bb-4ef3-8987-1f7f092de647",
          "keyValues": [],
          "concept": {
            "name": "Measurements Type",
            "uuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Numbers (voided~207563)",
                "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
                "dataType": "Numeric",
                "answers": [],
                "order": 3,
                "active": true,
                "voided": true
              },
              {
                "name": "Volume",
                "uuid": "700c0785-7f52-43b4-917d-e1c482c62db2",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Numbers",
                "uuid": "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Area",
                "uuid": "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Numbers (voided~207468)",
                "uuid": "61848cd7-b583-4640-b426-331de38417ee",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true,
                "voided": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","a44830b7-3271-4313-baea-b6dc4e9cd5ae","00ee1a95-2236-4c43-83d7-36c911172069","9ada0111-bbea-4fde-8097-32ccc0de6c78","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","016a6d0a-60f9-405f-8dac-08fcf6b39823","a7b922a1-a389-4ba1-94ca-59baf7a961d0","824d11d4-525d-4610-9afe-f87c030a54eb").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","3f0bd027-abf0-4beb-a7e7-9967d1994852","4ca95b4a-0d74-4bea-aac5-9f45da876178","ba6d69d5-bdb8-48bd-bd70-87e0b9848178","9ada0111-bbea-4fde-8097-32ccc0de6c78","00ee1a95-2236-4c43-83d7-36c911172069","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("f599df1e-a5e6-4f3e-b985-a196d55a3c73","db432dbe-7aed-44e8-9385-42973b3cf7bb","d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb","ec39b654-3009-46ad-a2d4-2fda9f40d856","3f7366d8-350c-4290-aa9e-e265eea76ae5","729f12d6-57dc-4b4f-a1cd-8c7e7c02db42","b462ddf4-977b-4bc5-8157-7f0132c5245d","a9375cc4-e115-4f06-aa6c-33b7b4217685","74d20d4a-8444-476c-9b7b-b5b4341bcf8e","be655900-d882-4d99-ab29-faf560b8e832","0dfe3de6-6bb0-4514-9c8a-3fde7752c440","8cb3d890-db22-4c8b-885d-0cd71a0e4aad","be655900-d882-4d99-ab29-faf560b8e832","38dc542e-277d-4790-8982-0d2f3253f0fc","32699e9f-c289-4581-9781-24b2bdbb0841","8748bdc4-de26-4411-a9b4-269abf7fc6f5","f431cbac-b99d-48fb-8694-0299c352eb9a","f246f297-f123-4b7a-b06f-d8c22a10bac2","ec5c4214-ddd6-4146-8282-195f4d711c59","2d229755-ee38-4f7f-a7f8-404125b3c393").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae").matches();
  
  const condition24 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
    
  const condition15 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition25 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
    
  const condition16 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06").and.when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
    
  const condition17 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("00ee1a95-2236-4c43-83d7-36c911172069","654e67f1-9d45-444e-aab5-20a980733ca4").matches();
    
  const condition18 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("824d11d4-525d-4610-9afe-f87c030a54eb").matches();
  
  if(condition11 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["23598869-15a8-43d3-a8f3-4f75b372cdc1","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 && condition24 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition15 && condition25 ) {
    _.forEach(["700c0785-7f52-43b4-917d-e1c482c62db2"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition16 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = !(condition17 );
    if(condition18 ) {
    _.forEach(["96452733-db5e-4e82-8e75-8ef8a308ea8a"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Number"
                    ],
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1"
                    ]
                  },
                  "actionType": "skipAnswers"
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
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Wall for Roads",
                            "Drainage",
                            "Community Farming",
                            "Road & road side bush cutting",
                            "Canal",
                            "River",
                            "Land bunding",
                            "Truck Unloading",
                            "Others",
                            "Well",
                            "Check dam"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                            "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0",
                            "824d11d4-525d-4610-9afe-f87c030a54eb"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Number",
                      "Volume"
                    ],
                    "answerUuidsToSkip": [
                      "23598869-15a8-43d3-a8f3-4f75b372cdc1",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Wall for Roads",
                            "Drainage",
                            "Community Farming",
                            "Road & road side bush cutting",
                            "Land bunding",
                            "River",
                            "Backwater",
                            "Pond",
                            "Nursey Making"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area",
                      "Volume"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bandstand",
                            "Benches",
                            "Community Hall/Centre/House",
                            "Dustbin",
                            "Toilet/Bathroom/private spaces",
                            "Water-body premises",
                            "Compost pit",
                            "Kitchen Garden",
                            "Plantation",
                            "Soak Pit",
                            "Chapri/Dabri/Chari/Naula/Jhiriya/Kulam",
                            "Dugwell/Chua/Jalkhund",
                            "Soak pit",
                            "Electric Pole",
                            "Seed ball",
                            "Water storage pit",
                            "Fencing & boundary wall",
                            "CCT",
                            "Embankment / ghat",
                            "Flower garden"
                          ],
                          "answerConceptUuids": [
                            "f599df1e-a5e6-4f3e-b985-a196d55a3c73",
                            "db432dbe-7aed-44e8-9385-42973b3cf7bb",
                            "d5a9fcb4-51aa-4d4c-865c-a7854bea0dcb",
                            "ec39b654-3009-46ad-a2d4-2fda9f40d856",
                            "3f7366d8-350c-4290-aa9e-e265eea76ae5",
                            "729f12d6-57dc-4b4f-a1cd-8c7e7c02db42",
                            "b462ddf4-977b-4bc5-8157-7f0132c5245d",
                            "a9375cc4-e115-4f06-aa6c-33b7b4217685",
                            "74d20d4a-8444-476c-9b7b-b5b4341bcf8e",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "0dfe3de6-6bb0-4514-9c8a-3fde7752c440",
                            "8cb3d890-db22-4c8b-885d-0cd71a0e4aad",
                            "be655900-d882-4d99-ab29-faf560b8e832",
                            "38dc542e-277d-4790-8982-0d2f3253f0fc",
                            "32699e9f-c289-4581-9781-24b2bdbb0841",
                            "8748bdc4-de26-4411-a9b4-269abf7fc6f5",
                            "f431cbac-b99d-48fb-8694-0299c352eb9a",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "2d229755-ee38-4f7f-a7f8-404125b3c393"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Volume"
                    ],
                    "answerUuidsToSkip": [
                      "700c0785-7f52-43b4-917d-e1c482c62db2"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cleaning",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "actionType": "hideFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "River",
                            "Whitewash/ painting"
                          ],
                          "answerConceptUuids": [
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "654e67f1-9d45-444e-aab5-20a980733ca4"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Area"
                    ],
                    "answerUuidsToSkip": [
                      "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                    ]
                  },
                  "actionType": "skipAnswers"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Check dam"
                          ],
                          "answerConceptUuids": [
                            "824d11d4-525d-4610-9afe-f87c030a54eb"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Nos",
          "uuid": "29046aa8-8497-497c-a437-f89f4adcb43c",
          "keyValues": [],
          "concept": {
            "name": "Nos",
            "uuid": "c8d91a28-238d-40ad-a26b-1be059c47863",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
          "mandatory": true
        },
        {
          "name": "Nos",
          "uuid": "79eee4ce-9755-4b07-9cdc-54e211cfbac1",
          "keyValues": [],
          "concept": {
            "name": "Numbers (voided~207563)",
            "uuid": "d4c428d1-512f-4881-87f0-611d7746dd6c",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("23598869-15a8-43d3-a8f3-4f75b372cdc1").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Number"
                          ],
                          "answerConceptUuids": [
                            "23598869-15a8-43d3-a8f3-4f75b372cdc1"
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
        },
        {
          "name": "Length",
          "uuid": "bce223bb-c9f4-49eb-81d9-57895c79a03c",
          "keyValues": [],
          "concept": {
            "name": "Length",
            "uuid": "7ea0b0c5-e593-44ac-80f0-e675a53d1d4a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","62f4b7d6-4a4a-4064-aa0e-a0c21053eec2","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Community Farming",
                            "Land bunding",
                            "Wall for Roads",
                            "Nursey Making"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment",
                            "CCT"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment",
                            "CCT"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
          "mandatory": true
        },
        {
          "name": "Breadth",
          "uuid": "0146d0d9-c277-4eb9-ab17-a48fa032fbd0",
          "keyValues": [],
          "concept": {
            "name": "Breadth",
            "uuid": "1197d309-c9a1-4d65-8e45-61bfd6f01aee",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("61d8f60f-8496-4b6d-8d1a-9967e0ff024f","f98bacd7-701e-49ce-a268-b3e83d8f194f","4ca95b4a-0d74-4bea-aac5-9f45da876178","9ada0111-bbea-4fde-8097-32ccc0de6c78","bfee4ca1-77f7-4e19-8617-4f0e54d052a3").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("3f0bd027-abf0-4beb-a7e7-9967d1994852").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","824d11d4-525d-4610-9afe-f87c030a54eb","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition101 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("ba6d69d5-bdb8-48bd-bd70-87e0b9848178").matches();
  
  const condition111 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnswerConceptName("cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition121 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition131 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","824d11d4-525d-4610-9afe-f87c030a54eb","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition141 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition151 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 || condition101 && condition111 && condition121 || condition131 && condition141 && condition151 ;
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Bridge/Pulia",
                            "Road",
                            "Community Farming",
                            "Land bunding",
                            "Nursey Making"
                          ],
                          "answerConceptUuids": [
                            "61d8f60f-8496-4b6d-8d1a-9967e0ff024f",
                            "f98bacd7-701e-49ce-a268-b3e83d8f194f",
                            "4ca95b4a-0d74-4bea-aac5-9f45da876178",
                            "9ada0111-bbea-4fde-8097-32ccc0de6c78",
                            "bfee4ca1-77f7-4e19-8617-4f0e54d052a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Drainage"
                          ],
                          "answerConceptUuids": [
                            "3f0bd027-abf0-4beb-a7e7-9967d1994852"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Check Dam",
                            "Backwater",
                            "Pond",
                            "River",
                            "Pond ghat / embankment",
                            "CCT"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Road & road side bush cutting"
                          ],
                          "answerConceptUuids": [
                            "ba6d69d5-bdb8-48bd-bd70-87e0b9848178"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Pond",
                            "River",
                            "Check Dam",
                            "Pond ghat / embankment",
                            "CCT"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
          "mandatory": true
        },
        {
          "name": "Breadth",
          "uuid": "c212f32a-df88-40d3-8730-59d74aaa06d4",
          "keyValues": [],
          "concept": {
            "name": "Breadth (voided~207550)",
            "uuid": "acf809e2-30ba-49ab-9119-a344cc5ea7cb",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Height / Depth",
          "uuid": "2c7e0bfb-3653-44a5-9576-fb55999bc0fa",
          "keyValues": [],
          "concept": {
            "name": "Height / Depth",
            "uuid": "4542ba21-0801-416b-b739-9ca6707dc4b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("62f4b7d6-4a4a-4064-aa0e-a0c21053eec2").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a").matches();
  
  const condition41 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("a44830b7-3271-4313-baea-b6dc4e9cd5ae","1a4d980d-30ef-46e4-8b76-44da9002be6b","824d11d4-525d-4610-9afe-f87c030a54eb","b1dfb9e0-0bbc-448f-a6ce-aae2488b390e","00ee1a95-2236-4c43-83d7-36c911172069","ec5c4214-ddd6-4146-8282-195f4d711c59","f246f297-f123-4b7a-b06f-d8c22a10bac2").matches();
  
  const condition51 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3","95882ddd-13f3-4ea8-b7f2-026e332bdc06").matches();
  
  const condition61 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  const condition71 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition81 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition91 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnswerConceptName("700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 || condition41 && condition51 && condition61 || condition71 && condition81 && condition91 ;
  
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
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Wall for Roads"
                          ],
                          "answerConceptUuids": [
                            "62f4b7d6-4a4a-4064-aa0e-a0c21053eec2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Canal",
                            "Backwater",
                            "Check Dam",
                            "Pond",
                            "River",
                            "Pond ghat / embankment",
                            "CCT"
                          ],
                          "answerConceptUuids": [
                            "a44830b7-3271-4313-baea-b6dc4e9cd5ae",
                            "1a4d980d-30ef-46e4-8b76-44da9002be6b",
                            "824d11d4-525d-4610-9afe-f87c030a54eb",
                            "b1dfb9e0-0bbc-448f-a6ce-aae2488b390e",
                            "00ee1a95-2236-4c43-83d7-36c911172069",
                            "ec5c4214-ddd6-4146-8282-195f4d711c59",
                            "f246f297-f123-4b7a-b06f-d8c22a10bac2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Repairing",
                            "Cleaning",
                            "Making"
                          ],
                          "answerConceptUuids": [
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3",
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
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
          "mandatory": true
        },
        {
          "name": "Height",
          "uuid": "52eabb72-e4df-4abd-bba1-49b8d8252834",
          "keyValues": [],
          "concept": {
            "name": "Height",
            "uuid": "a32d438f-ecd6-4f7a-9753-d42f923f743a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Diameter",
          "uuid": "a2c82fd7-1072-4d62-97a0-1ff8c1dd14e8",
          "keyValues": [],
          "concept": {
            "name": "Diameter",
            "uuid": "614c185c-7f63-406d-9f2a-6619564947f4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnswerConceptName("a7b922a1-a389-4ba1-94ca-59baf7a961d0").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("886b5ade-d1b0-4919-b9a4-cd4141fca178").containsAnyAnswerConceptName("95882ddd-13f3-4ea8-b7f2-026e332bdc06","b66fa362-b975-4f0e-a7b2-9b0c37205c54","cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3").matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c0d271f6-ec81-4c09-9dbf-a99f559788e5").containsAnyAnswerConceptName("96452733-db5e-4e82-8e75-8ef8a308ea8a","700c0785-7f52-43b4-917d-e1c482c62db2").matches();
  
  visibility = condition11 && condition21 && condition31 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "actionType": "showFormElement"
                }
              ],
              "conditions": [
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity sub type",
                          "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Well"
                          ],
                          "answerConceptUuids": [
                            "a7b922a1-a389-4ba1-94ca-59baf7a961d0"
                          ]
                        },
                        "operator": "containsAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "conjunction": "and",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Activity category",
                          "conceptUuid": "886b5ade-d1b0-4919-b9a4-cd4141fca178",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Making",
                            "Repairing",
                            "Cleaning"
                          ],
                          "answerConceptUuids": [
                            "95882ddd-13f3-4ea8-b7f2-026e332bdc06",
                            "b66fa362-b975-4f0e-a7b2-9b0c37205c54",
                            "cf0e9df1-cc8d-48e9-94b6-6ec3a13b09a3"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                },
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Measurements Type",
                          "conceptUuid": "c0d271f6-ec81-4c09-9dbf-a99f559788e5",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Area",
                            "Volume"
                          ],
                          "answerConceptUuids": [
                            "96452733-db5e-4e82-8e75-8ef8a308ea8a",
                            "700c0785-7f52-43b4-917d-e1c482c62db2"
                          ]
                        },
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "mandatory": true
        },
        {
          "name": "Depth",
          "uuid": "452c8209-e773-4c4c-b0bd-1c6bef90d0d3",
          "keyValues": [],
          "concept": {
            "name": "Depth",
            "uuid": "ad7e9f42-d8b9-420b-b281-f5fc9cee43ef",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Height",
          "uuid": "f949b826-d66d-43a3-a294-65fcd49577ce",
          "keyValues": [],
          "concept": {
            "name": "Height (voided~207551)",
            "uuid": "09ee602c-ed75-4df9-b0c2-04f6adbcd199",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 11,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Diameter",
          "uuid": "08e9beef-88c3-48de-9fc9-6c1f3a0bf0fe",
          "keyValues": [],
          "concept": {
            "name": "Diameter (voided~207552)",
            "uuid": "7405d9a6-465b-4e74-a6bb-4e4b93b1856c",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 12,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Depth",
          "uuid": "a53daa4f-03a2-4c57-a83c-33b8f8da1b94",
          "keyValues": [],
          "concept": {
            "name": "Depth (voided~207553)",
            "uuid": "f82fa2e6-19a0-4ef8-886f-e485dc677925",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 13,
          "type": "SingleSelect",
          "voided": true,
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5c511e8d-8ebc-4471-b44b-e4c2898d9aad").containsAnyAnswerConceptName("961b337f-fee4-4bed-a77a-83db71f1b5a2","016a6d0a-60f9-405f-8dac-08fcf6b39823","58653f74-082c-47a7-9a25-548990a4bd4c","82246b7a-c13f-435d-9e17-d8d288ff3891","a5f019c6-17a0-4536-8222-67935d482774","8a4d7b13-598d-4a8a-83f6-72cbfb7c7911","00ee1a95-2236-4c43-83d7-36c911172069","654e67f1-9d45-444e-aab5-20a980733ca4").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptNameOtherThan("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = !(condition11 || condition21 );
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "hideFormElementGroup"
            },
            {}
          ],
          "conditions": [
            {
              "conjunction": "or",
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "registration",
                      "conceptName": "Activity sub type",
                      "conceptUuid": "5c511e8d-8ebc-4471-b44b-e4c2898d9aad",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Ground levelling",
                        "Others",
                        "Community spaces- Meeting point/ Religious places/ School/ Park & AWC etc",
                        "Water-Tank/Pipeline",
                        "Waterfall/Jharna/Spring Water/Dhara",
                        "Truck Unloading",
                        "River",
                        "Whitewash/ painting"
                      ],
                      "answerConceptUuids": [
                        "961b337f-fee4-4bed-a77a-83db71f1b5a2",
                        "016a6d0a-60f9-405f-8dac-08fcf6b39823",
                        "58653f74-082c-47a7-9a25-548990a4bd4c",
                        "82246b7a-c13f-435d-9e17-d8d288ff3891",
                        "a5f019c6-17a0-4536-8222-67935d482774",
                        "8a4d7b13-598d-4a8a-83f6-72cbfb7c7911",
                        "00ee1a95-2236-4c43-83d7-36c911172069",
                        "654e67f1-9d45-444e-aab5-20a980733ca4"
                      ]
                    },
                    "operator": "containsAnyAnswerConceptName"
                  }
                ]
              }
            },
            {
              "compoundRule": {
                "rules": [
                  {
                    "lhs": {
                      "type": "concept",
                      "scope": "registration",
                      "conceptName": "Type of initiative",
                      "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "CFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
                      ]
                    },
                    "operator": "containsAnswerConceptNameOtherThan"
                  }
                ]
              }
            }
          ]
        }
      ],
      "display": "Measurement",
      "timed": false
    },
    {
      "uuid": "06b71c6b-48cd-489e-8ed5-9ebcfad29420",
      "name": "Photographs",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Before implementation",
          "uuid": "1759ba71-3813-4efe-b925-832dde28d287",
          "keyValues": [],
          "concept": {
            "name": "Before implementation",
            "uuid": "23641a68-fa4f-4f6d-96c1-52d351fc225a",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "MultiSelect",
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
  
 
 const beforeImage = individual.getObservationReadableValue("Before implementation");
  
  if(beforeImage && beforeImage.length > 3){
      validationErrors.push("you can select max 3 photographs");
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "During Implementation",
          "uuid": "fca7ae7a-56e4-46e8-8e5d-0f6db8b2ecb6",
          "keyValues": [],
          "concept": {
            "name": "During Implementation",
            "uuid": "cb456ef2-f20f-4927-ac4b-a3efdddd5680",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "MultiSelect",
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
  
  const duringImage = individual.getObservationReadableValue("During Implementation");
  
  if(duringImage && duringImage.length > 3){
      validationErrors.push("you can select max 3 photographs");
   }

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "After implementation",
          "uuid": "6002e9ec-daec-4121-bc97-db9eeaa04288",
          "keyValues": [],
          "concept": {
            "name": "After implementation",
            "uuid": "2eb0ad24-83bd-437e-bcde-fcbf2c4559b4",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "MultiSelect",
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
  
 const afterImage = individual.getObservationReadableValue("After implementation");
  
  if(afterImage && afterImage.length > 4){
      validationErrors.push("you can select max 4 photographs");
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb").containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
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
                      "scope": "registration",
                      "conceptName": "Type of initiative",
                      "conceptUuid": "5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "CFW"
                      ],
                      "answerConceptUuids": [
                        "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
      "display": "Photographs",
      "timed": false
    },
    {
      "uuid": "e17f5174-6b31-4377-8ff3-02122b65a627",
      "name": "Other Details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Form Cross Checked?",
          "uuid": "721b432f-8d35-46ba-9c93-e058e659a735",
          "keyValues": [],
          "concept": {
            "name": "Form Cross Checked?",
            "uuid": "4e1f6ed9-0e46-4932-b5c3-5c34db863646",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("4e1f6ed9-0e46-4932-b5c3-5c34db863646").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Remarks",
          "uuid": "2e83b345-b0e9-4230-856b-3e192df66deb",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "display": "Other Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}