{
  "name": "Distribution Registration",
  "uuid": "f19d7b5b-7b8b-4b5a-aa3b-5dcd6b1b496e",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "cefbece6-99d2-4495-bffb-9c29a0ec9a04",
      "name": "Dispatch details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Dispatch status id",
          "uuid": "209fe2a9-2a6c-4c3c-864e-171af4fa115e",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch status id (Dispatch)",
            "uuid": "fc7c0e1c-463f-4a94-a999-b1a6eedb9145",
            "dataType": "Text",
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Dispatch Status Id');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "50fbe709-3ecf-4d16-9f56-ca9b673f7cc5",
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
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Dispatch status id",
          "uuid": "251527b5-3d66-4f41-bf91-aceef2b27a43",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Status Id",
            "uuid": "132868ab-811a-401e-9fd3-7c87f5512436",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('132868ab-811a-401e-9fd3-7c87f5512436');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Dispatch Status Name",
          "uuid": "add705a7-816e-4c4d-aa41-892ce7ffd6ba",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Status Name",
            "uuid": "c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
  const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
  const _ = imports.lodash;
  const firstDispatchEncounter = _.find(encounter.individual.encounters, enc => enc.encounterType.name === 'Dispatch');

  if(firstDispatchEncounter) {
    const dispatchStatusIdValue = firstDispatchEncounter.getObservationReadableValue('c5bf896e-a2a5-434f-8d7c-dedf7bab7f0d');
    
    statusBuilder.value(dispatchStatusIdValue);
  }
  return statusBuilder.build();
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "942cc5d6-53e5-42b1-8023-d2c3bb694d7f",
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
          "name": "Account name",
          "uuid": "9908719b-1b03-4fad-85d1-5462130f99de",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Account name (voided~220045)",
            "uuid": "c5a1871d-d549-4db1-9408-98505fba6cb0",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
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
  
   const dispatchEncounter = encounter.individual.getEncounters(true).filter((enc) => enc.encounterType.name === 'Dispatch' );
   value = dispatchEncounter[0].getObservationReadableValue('Account  name');
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Dispatch details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "2b803b08-316f-49be-a651-e08ac6b98a77",
      "name": "Address",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "District",
          "uuid": "efc0a456-43ff-4392-bc4b-8359a5023e50",
          "keyValues": [],
          "concept": {
            "name": "District (voided~207373)",
            "uuid": "d4ff2fa9-2b0f-47c4-a470-d385075c6cae",
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
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Block",
          "uuid": "1aa2db08-cb68-4570-834a-b94eef5e6dc3",
          "keyValues": [],
          "concept": {
            "name": "Block (voided~220544)",
            "uuid": "9c54278a-c0d7-4c2a-881e-a2aef170164a",
            "dataType": "Coded",
            "answers": [
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
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "4f549937-468b-4a3f-b977-d91541c55b7c",
          "keyValues": [],
          "concept": {
            "name": "State List",
            "uuid": "1fe23613-1dab-41b3-9ef1-e5eaa7556e7c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Palghar",
                "uuid": "1095009d-66d7-4e10-8757-9cf2e420f182",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Amravati",
                "uuid": "cab0ab57-4b58-46f3-af63-cca6937afcad",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Hingoli",
                "uuid": "d051d482-5615-4020-abca-61b5aa0bc18b",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Mumbai",
                "uuid": "f118b9aa-cc6d-4228-bf0a-a5f438eb0cf2",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Akola",
                "uuid": "d5b57e3f-196b-459c-b4f1-eb12f0f86546",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Nashik",
                "uuid": "203dbdd0-7484-44e0-8aea-6a70e4482e6b",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Latur",
                "uuid": "086b6b23-e4a6-416c-a3b9-d5074c589cd2",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Raigad",
                "uuid": "a54afa32-c8c4-4b4d-9087-17908bc08ab9",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Thane",
                "uuid": "4f746cbf-fa51-4b34-aa2a-29369bf81d7d",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Aurangabad",
                "uuid": "a3be2255-6ed1-45eb-a20e-ed0ca98c8b1a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Buldhana",
                "uuid": "22fbfd7b-7e2d-4e37-8259-431d75d2cd90",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Satara",
                "uuid": "13025832-19f6-42cb-a5e5-41e023591f4f",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "Nanded",
                "uuid": "9e23a1b5-8b98-4681-8ad7-6e488d7ce4b1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Bhandara",
                "uuid": "e15c4581-5b88-42f1-81a7-fb022e237c16",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Parbhani",
                "uuid": "0f1dd513-fafb-46ed-a1dc-5d64039af00a",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Wardha",
                "uuid": "8a6f702f-09cd-4394-8bed-70c136836234",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "active": true
              },
              {
                "name": "Ratnagiri",
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Nagpur",
                "uuid": "77ee790e-1f54-4e85-9afb-cdaaad609163",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Yavatmal",
                "uuid": "5c930fcf-871d-4c2e-bdf8-ab485c7c47f1",
                "dataType": "NA",
                "answers": [],
                "order": 35,
                "active": true
              },
              {
                "name": "Kolhapur",
                "uuid": "13fb0691-9d20-4e56-beb2-131d57d3e26f",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Sindhudurg",
                "uuid": "6b45db64-9e84-4bbd-b7f7-861505262667",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Pune",
                "uuid": "6a16f52a-ca5d-42cd-9e15-197dd563490c",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "Osmanabad",
                "uuid": "913c34ac-f70f-4ea7-b771-1a70c55ad9ee",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Sangli",
                "uuid": "700882bb-c9bc-409e-ad3c-fb1fcd719abf",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Solapur",
                "uuid": "126a8580-ac82-4bae-8fa0-867debafcb70",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Washim",
                "uuid": "fb40f2d8-4db7-41e3-92ef-c0e6148fe3bd",
                "dataType": "NA",
                "answers": [],
                "order": 34,
                "active": true
              },
              {
                "name": "Mumbai Suburban",
                "uuid": "d64dcae8-9aab-4481-8eba-02e6d7e55ac6",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Beed",
                "uuid": "b1927eaf-250b-4dce-b00c-d4529c28b7ec",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Gondia",
                "uuid": "3484a0f4-1171-4c7a-99ae-294990cbea08",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Gadchiroli",
                "uuid": "c77eaf9a-cffd-4f25-9679-ca18cc096284",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Chandrapur",
                "uuid": "8db22631-bc11-49af-b300-9b7caace0253",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Nandurbar",
                "uuid": "dca8d7dc-5719-4bc3-9cf1-818a0bed7101",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Jalna",
                "uuid": "2c68cc11-e2ed-4092-b40b-32186237f456",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Ahmednagar",
                "uuid": "7f728f06-f0b5-4d24-b4b1-2adb14ac809b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Dhule",
                "uuid": "375c6f56-2a0d-467f-924a-97dd188c4717",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Jalgaon",
                "uuid": "12defede-b654-451c-af9b-e56f9d47b3b0",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "3ad9a216-5ce7-456f-ac28-814a01f1884d",
          "keyValues": [],
          "concept": {
            "name": "District List",
            "uuid": "5fb8cc74-8a4c-4430-90d3-5bb73c7a7081",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sangmeshwar",
                "uuid": "28cdef4e-50d4-49b5-b205-2e939d39b30a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Dapoli",
                "uuid": "6797c0d8-1056-4745-9326-073efd09e5aa",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Lanja",
                "uuid": "15429ed8-df6c-4b40-a10e-59f0e53f98fa",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Rajapur",
                "uuid": "5021b731-8510-4614-a5e5-751bad5e9b3c",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Khed",
                "uuid": "63803c4f-ebc2-4953-8438-63fa60975ff4",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Mandangad",
                "uuid": "0c94aec6-9452-43dc-8f05-6b705aab6d79",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Guhagar",
                "uuid": "37db2866-58dd-4e02-9084-96283706aee0",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Ratnagiri",
                "uuid": "c63d31e0-19b4-4bfb-9259-aeac7daa1c9f",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Chipalun",
                "uuid": "f7bf1ead-7c86-47b6-94ed-b0bd649ff30e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Block",
          "uuid": "2866f7b4-4701-48e8-8e6f-6c34b6762bb5",
          "keyValues": [],
          "concept": {
            "name": "Block List (voided~220546)",
            "uuid": "cef9bdf9-8fe3-4496-82bd-1db359c238f1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Math Kh.",
                "uuid": "0afbcb29-78d5-4c1e-9640-114fea946bfa",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Kond Tiware",
                "uuid": "a06dae46-a92d-4b57-b3a2-6b49483e0256",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Kodavali",
                "uuid": "ec1ea3e0-67e7-4278-ba7a-24cd4822728c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Kondhe Tarf Rajapur",
                "uuid": "cfe38412-9c95-4ba3-b3b7-c7bdf550b610",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kunbiwadi",
                "uuid": "6f9feff2-7248-4437-8d8a-6cf63178a5f4",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Kondsar Kh.",
                "uuid": "29df26ba-5950-4d18-b00a-6e79da3a7000",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Manjarewadi",
                "uuid": "694ac906-a21d-4e7f-a2c9-ce91663b2615",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Mandavkarwadi",
                "uuid": "55106f1b-848c-48a3-aa05-7bdfb93ee651",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Malewadi",
                "uuid": "301b306d-c09a-4c03-b672-cc4f694a0da2",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Kumbhavade",
                "uuid": "f4a1efc2-5c3b-47c5-8931-f120285cadae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Kuveshi",
                "uuid": "75cc3c5e-f736-45c6-86b1-1abb3d0347d1",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Kombhe",
                "uuid": "b4d6c893-a16e-4c05-a585-c733524e9020",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Chavhanwadi",
                "uuid": "4b282857-8c38-4b7f-b758-caea35481872",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Madban",
                "uuid": "1704a6d5-0646-4125-b439-625bbe57ec07",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Kolamb",
                "uuid": "a95421f5-9f3f-4197-942d-2c2ebbe86438",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kolwankhadi",
                "uuid": "440f1b87-d84d-44fa-be9e-e95d13d50f92",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Kondwadi",
                "uuid": "ba43e65b-6db9-495f-8d74-9a637cfd57dd",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Kondvashiwadi",
                "uuid": "bb59e2dc-3281-4823-8c4d-b1c49759d079",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Kondivale",
                "uuid": "8dc4496a-15c0-4de2-8e17-80dc4cdfbf97",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Kondye Tarf Saundal",
                "uuid": "ac1e7c61-e5c2-4058-a33e-40ef850b8fb5",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Madheliwadi",
                "uuid": "82ae0ba9-a88c-4509-87f3-c35c7ffe1d22",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Kond Dasur",
                "uuid": "e09c9d74-27c0-45fc-b132-ea0c68e1e7bd",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Mahalunge",
                "uuid": "59cb9a1a-e368-44f0-9210-ef5b32f94627",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Kotapur",
                "uuid": "ab195e7c-f14d-4bf0-97bd-fe67d76c44b4",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Majre Juve",
                "uuid": "0cbc5087-0493-4cb8-9e4a-cb892c486363",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Kondsar Bk.",
                "uuid": "4cacd35b-10c9-46b5-82e4-7c4b1175e684",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Madhaliwadi (N.V.)",
                "uuid": "988e76e9-6c56-4629-9782-ad7397192998",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Mandrul",
                "uuid": "88557ddc-3511-41ff-814d-d775bd3c52a8",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "State",
          "uuid": "b92a1bf3-b0a4-42b4-83b8-b0dc0d3cbe14",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "District",
          "uuid": "839571ce-aed3-491f-8b6b-8f125f554059",
          "keyValues": [],
          "concept": {
            "name": "District",
            "uuid": "667a4546-f08e-434b-9f4c-60e285061313",
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
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "4b859296-cd60-425c-8026-b22c4e9fd31b",
          "keyValues": [],
          "concept": {
            "name": "Village (voided~207375)",
            "uuid": "1f22b2fd-7279-4b6d-a92d-9a7415a8b14b",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Address",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "3dd1cb74-d3ba-47ef-8a35-0d671b54d5e8",
      "name": "​",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "​",
          "uuid": "b8822694-1748-44bd-9e2c-8aa08abf63c9",
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
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "​",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "f0faaf0c-047d-482a-b9fb-8e614cd19520",
      "name": "​",
      "displayOrder": 4,
      "formElements": [
        {
          "name": "​",
          "uuid": "7f73f555-7908-4fbe-bf70-64dca0d5a974",
          "keyValues": [],
          "concept": {
            "name": "dummy1",
            "uuid": "d8b49878-875f-41e4-b9e8-8924271158ef",
            "dataType": "Coded",
            "answers": [],
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
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "​",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "fac9e0ed-7468-4d38-b463-46c88078002d",
      "name": "​",
      "displayOrder": 5,
      "formElements": [
        {
          "name": "​",
          "uuid": "1ea6d3f8-d010-402b-bad3-0b7733218f11",
          "keyValues": [],
          "concept": {
            "name": "dummy2",
            "uuid": "0ed27e08-e5dc-4341-b626-ec0f675801c8",
            "dataType": "Coded",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "​",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "5e7ffcbc-7f78-4411-aa05-474046f03967",
      "name": "Distribution Related Details",
      "displayOrder": 6,
      "formElements": [
        {
          "name": "Tola / Mohalla",
          "uuid": "81eb71ef-2519-4593-90c1-3f85139eff9f",
          "keyValues": [],
          "concept": {
            "name": "Tola / Mohalla",
            "uuid": "5e259bfe-07a8-4c88-a712-d22b9a612429",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Other Block",
          "uuid": "3ff5be80-eba6-4722-94c2-c993f6db61a3",
          "keyValues": [],
          "concept": {
            "name": "Other Block",
            "uuid": "e2d35dee-c34f-4f54-a68b-f32ee81835b6",
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
          "uuid": "1cdfba38-8a02-4a00-839d-6fec4335c602",
          "keyValues": [],
          "concept": {
            "name": "Other Village",
            "uuid": "16b4db7c-e0a8-41f1-ac67-07470a762d9f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
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
    const village = Array.isArray(individual.lowestAddressLevel.locationMappings) && 
                    !_.isEmpty(individual.lowestAddressLevel.locationMappings) && 
                    individual.lowestAddressLevel.locationMappings[0] && 
                    individual.lowestAddressLevel.locationMappings[0].child && 
                    individual.lowestAddressLevel.locationMappings[0].child.name 
                    || _.split(individual.lowestAddressLevel.titleLineage, ', ')[3];
    
    if (village === 'Other') {
      visibility = true;
    } else {
      visibility = false;
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility);
},
          "mandatory": true
        },
        {
          "name": "Source Id (temp field)",
          "uuid": "d20e3487-fd87-4f93-9bae-9bf3d6d1a302",
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
          "displayOrder": 4,
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
          "name": "Distribution date",
          "uuid": "64553a0f-3010-4516-96fc-0cb60c42bee1",
          "keyValues": [],
          "concept": {
            "name": "Distribution Date",
            "uuid": "cef5b862-672e-4e94-8ebc-3299a55f416f",
            "dataType": "Date",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("cef5b862-672e-4e94-8ebc-3299a55f416f").greaterThan(moment().startOf('day').toDate()).matches();
  
  if(condition11 ){
    validationErrors.push("Date cannot be in the future");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Account name",
          "uuid": "9c9c7dcf-d03d-4623-894e-991144f13928",
          "keyValues": [],
          "concept": {
            "name": "Account name (voided~220045)",
            "uuid": "c5a1871d-d549-4db1-9408-98505fba6cb0",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Account  name",
          "uuid": "dd6cc450-7630-416f-84f2-106aa12017a1",
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
          "name": "Type Of Community",
          "uuid": "f5bb5b08-18b0-46d6-8e65-2d98e6d4d18c",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Third Gender",
                "Differently Abled"
              ]
            }
          ],
          "concept": {
            "name": "Type Of Community",
            "uuid": "ed347f8d-3f94-47e5-a0c4-55a7dab6c63a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Ragpickers",
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Sex Workers",
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Third Gender",
                "uuid": "e179e806-3487-433e-ba5f-9b341db3ed20",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Transgenders",
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Migrant workers",
                "uuid": "0ee9a1f6-c598-47ae-9c84-64aae903cc9b",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Unorganized sector",
                "uuid": "cf177b27-87c3-4dc1-8255-68ffe549b9f4",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "Construction workers",
                "uuid": "bc660964-f0c1-422a-a275-c308bbc86a9e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Children",
                "uuid": "d46b9822-d3c3-492d-a2a3-9ab623cfd802",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "HIV affected",
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Mentally Challenged",
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Devdasi community",
                "uuid": "1b6229ca-3360-4ba8-b858-1048f64f8d6b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Tailor Cutting",
                "uuid": "a3e19465-bebb-427a-8df2-7d58e28c5091",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Health workers and sweepers",
                "uuid": "a87c0a89-9a65-43ab-8f94-daee22093c3b",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tea garden workers",
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "Agricultural Related",
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Differently Abled",
                "uuid": "81f059e7-7a88-4e9e-883e-a9bfb8ef468a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Tribal Community",
                "uuid": "3fdad012-1109-4684-907c-0a268e6d1e9b",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Widows",
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "Puppeteers",
                "uuid": "7720a9df-4c19-437d-8c47-0b55183af349",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Adolescents",
                "uuid": "7cf699d9-0a47-4111-95ce-b0c5df581762",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Street Vendors",
                "uuid": "c792d850-6ff6-46d6-b62b-1f7a91c3952f",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Rohingya community",
                "uuid": "508b8292-894a-4ed2-b090-96283dccaff0",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Daily Wagers",
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Embroidery workers",
                "uuid": "0016afc5-47a2-46e0-867d-75ac3b0edfa0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Weavers",
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "PWD",
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Senior Citizens",
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Fisher community",
                "uuid": "10d355b7-d81e-4937-8a5c-39e30c4e130b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Leprosy affected",
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Rickshaw Pullers",
                "uuid": "43803088-d89d-425e-991f-1343ddbd66c4",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "lohar",
                "uuid": "8585d735-9b9e-4801-adc8-c9c8c0b89518",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "None",
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              }
            ],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 8,
          "type": "MultiSelect",
          "mandatory": true
        },
        {
          "name": "Account code",
          "uuid": "9f5d6a44-4bc4-4e16-8a63-ba2d19bdd566",
          "keyValues": [],
          "concept": {
            "name": "Account code",
            "uuid": "2fb51840-9356-4b24-85e8-76135a6492bb",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Account  name",
          "uuid": "f5480204-d5d0-4504-a2ea-f9dc142640bd",
          "keyValues": [],
          "concept": {
            "name": "Account  name",
            "uuid": "2978117c-a297-4171-99c6-23c3522ca0f8",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Target Community",
          "uuid": "b274ac99-214b-4e30-81ec-69442943c295",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Third Gender",
                "Differently Abled"
              ]
            }
          ],
          "concept": {
            "name": "Target Community",
            "uuid": "8c87be17-2564-41d2-a6a4-1239e06ef9d2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Mentally Challenged",
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Devdasi community",
                "uuid": "1b6229ca-3360-4ba8-b858-1048f64f8d6b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Senior Citizens",
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea",
                "dataType": "NA",
                "answers": [],
                "order": 22,
                "active": true
              },
              {
                "name": "Tailor Cutting",
                "uuid": "a3e19465-bebb-427a-8df2-7d58e28c5091",
                "dataType": "NA",
                "answers": [],
                "order": 25,
                "active": true
              },
              {
                "name": "PWD",
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "HIV affected",
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Embroidery workers",
                "uuid": "0016afc5-47a2-46e0-867d-75ac3b0edfa0",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Rohingya community",
                "uuid": "508b8292-894a-4ed2-b090-96283dccaff0",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Daily Wagers",
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Adolescents",
                "uuid": "7cf699d9-0a47-4111-95ce-b0c5df581762",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Agricultural Related",
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Fisher community",
                "uuid": "10d355b7-d81e-4937-8a5c-39e30c4e130b",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Rickshaw Pullers",
                "uuid": "43803088-d89d-425e-991f-1343ddbd66c4",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Tribal Community",
                "uuid": "3fdad012-1109-4684-907c-0a268e6d1e9b",
                "dataType": "NA",
                "answers": [],
                "order": 29,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tea garden workers",
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a",
                "dataType": "NA",
                "answers": [],
                "order": 26,
                "active": true
              },
              {
                "name": "Third Gender",
                "uuid": "e179e806-3487-433e-ba5f-9b341db3ed20",
                "dataType": "NA",
                "answers": [],
                "order": 27,
                "active": true
              },
              {
                "name": "Leprosy affected",
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Children",
                "uuid": "d46b9822-d3c3-492d-a2a3-9ab623cfd802",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Construction workers",
                "uuid": "bc660964-f0c1-422a-a275-c308bbc86a9e",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Unorganized sector",
                "uuid": "cf177b27-87c3-4dc1-8255-68ffe549b9f4",
                "dataType": "NA",
                "answers": [],
                "order": 30,
                "active": true
              },
              {
                "name": "Transgenders",
                "uuid": "bb9b146f-d1df-49d9-82eb-dab38c2bc8c8",
                "dataType": "NA",
                "answers": [],
                "order": 28,
                "active": true
              },
              {
                "name": "Street Vendors",
                "uuid": "c792d850-6ff6-46d6-b62b-1f7a91c3952f",
                "dataType": "NA",
                "answers": [],
                "order": 24,
                "active": true
              },
              {
                "name": "Sex Workers",
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2",
                "dataType": "NA",
                "answers": [],
                "order": 23,
                "active": true
              },
              {
                "name": "Weavers",
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d",
                "dataType": "NA",
                "answers": [],
                "order": 31,
                "active": true
              },
              {
                "name": "lohar",
                "uuid": "8585d735-9b9e-4801-adc8-c9c8c0b89518",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Migrant workers",
                "uuid": "0ee9a1f6-c598-47ae-9c84-64aae903cc9b",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Widows",
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6",
                "dataType": "NA",
                "answers": [],
                "order": 32,
                "active": true
              },
              {
                "name": "Differently Abled",
                "uuid": "81f059e7-7a88-4e9e-883e-a9bfb8ef468a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Health workers and sweepers",
                "uuid": "a87c0a89-9a65-43ab-8f94-daee22093c3b",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Puppeteers",
                "uuid": "7720a9df-4c19-437d-8c47-0b55183af349",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "None",
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c",
                "dataType": "NA",
                "answers": [],
                "order": 33,
                "unique": true,
                "active": true
              },
              {
                "name": "Ragpickers",
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 11,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of Initiative",
          "uuid": "1793038d-8ae7-4b31-ab19-3ca5e52362ee",
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
          "displayOrder": 12,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Type of Educational Institute",
          "uuid": "2ddf1300-dbca-4cdb-b5dc-5974156a86d5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d","9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
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
                            "CFW-S2S",
                            "S2S"
                          ],
                          "answerConceptUuids": [
                            "4db0c307-9053-4bd4-b917-580d00e43f1d",
                            "9fd9d626-faf7-4833-a3ab-47ec3b4388f6"
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
          "name": "School / Anganwadi / Learning Center Name",
          "uuid": "abcf9a7f-4f9c-442e-a3bd-3ba3323c78a5",
          "keyValues": [],
          "concept": {
            "name": "School / Anganwadi / Learning Center Name",
            "uuid": "2e39d19d-fc03-400e-9f5e-1f815483ea47",
            "dataType": "Text",
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
  
  const typeOfInitiativeisCfws2sOrS2s = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d","9fd9d626-faf7-4833-a3ab-47ec3b4388f6").matches();
  
  visibility = typeOfInitiativeisCfws2sOrS2s ;
  
  const typeOfInitiativeIsCfws2s = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("4db0c307-9053-4bd4-b917-580d00e43f1d").matches();
  
  const currentValue = individual.getObservationValue('2e39d19d-fc03-400e-9f5e-1f815483ea47');
    
    if (typeOfInitiativeIsCfws2s && !currentValue ) {
    
    value = 'None';
    
    };
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Type of disaster",
          "uuid": "4fa51133-7b60-48f5-a3fb-abbc4fdd5f0f",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Not Applicable"
              ]
            }
          ],
          "concept": {
            "name": "Type of Disaster",
            "uuid": "b35f7845-dd49-42fc-9131-0f529b1d3ee3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Cyclone",
                "uuid": "318bd723-ecb6-444b-aae3-5490db65a376",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "unique": true,
                "active": true
              },
              {
                "name": "Not Applicable",
                "uuid": "ca098686-79b0-4219-8f33-479363f8a69a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Fire",
                "uuid": "0ec26543-d62f-4dd9-a8f9-e2a033c1f1c4",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "unique": true,
                "active": true
              },
              {
                "name": "Storm",
                "uuid": "a4b90e21-95cc-4772-a1ec-c3f474279326",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "unique": true,
                "active": true
              },
              {
                "name": "Winter",
                "uuid": "a359a1d4-5a81-491d-84bd-aac0f819555f",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "unique": true,
                "active": true
              },
              {
                "name": "Landslides",
                "uuid": "e037aeb5-e82c-41cb-96a8-45cb1e031126",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "unique": true,
                "active": true
              },
              {
                "name": "Earthquake",
                "uuid": "b121c9c4-ca7e-4dbd-814e-f4a10be4fd79",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "unique": true,
                "active": true
              },
              {
                "name": "Floods",
                "uuid": "5512bd22-4810-461b-8bc2-79e1ccfb4011",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "unique": true,
                "active": true
              },
              {
                "name": "Drought",
                "uuid": "1b0285e1-0bc8-4461-b8cd-22e4b62d960f",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "unique": true,
                "active": true
              },
              {
                "name": "Cloudburst",
                "uuid": "079f7101-6b67-46bf-b09e-c0aff429b943",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "unique": true,
                "active": true
              },
              {
                "name": "Flash floods",
                "uuid": "5ffe578b-9cf5-464b-aeb9-a4454e3b297d",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "unique": true,
                "active": true
              },
              {
                "name": "Riots",
                "uuid": "b3dd4f42-f85f-47f3-93ba-0d818c3f7462",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "unique": true,
                "active": true
              },
              {
                "name": "Tsunami",
                "uuid": "9d7d7bc1-0c39-4d2d-afaf-4f4f53f6fc8f",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "unique": true,
                "active": true
              },
              {
                "name": "Covid",
                "uuid": "e3e281eb-d4eb-4c95-92a2-f72ff229884d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "unique": true,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnyAnswerConceptName("231a6748-7677-4eb1-8a37-15a0ab207d67","cbf0805f-aac1-40b9-b78c-1c568b86ef24").matches();
  
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
                            "CFW-Rahat",
                            "Rahat"
                          ],
                          "answerConceptUuids": [
                            "231a6748-7677-4eb1-8a37-15a0ab207d67",
                            "cbf0805f-aac1-40b9-b78c-1c568b86ef24"
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
          "name": "Undertaking Form Photographs",
          "uuid": "830811be-5f73-4ff3-b717-864f1e2f1da4",
          "keyValues": [],
          "concept": {
            "name": "Undertaking Form Photographs",
            "uuid": "a4f35739-40bf-4c8a-98b5-cd8a2ac37913",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 16,
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
  
 
  const currentImage = individual.getObservationReadableValue("a4f35739-40bf-4c8a-98b5-cd8a2ac37913");
  
  if(currentImage && currentImage.length > 0){

      const imagerestriction = {
        "CFW-Rahat":1,
        "CFW-NJPC":1,
        "CFW-S2S":1,
        "Specific Initiative":1,
        "Vaapsi":null,
        "CFW":1,
        "NJPC":null,
        "S2S":null,
        "Rahat":null  
      };    

      const initiative = individual.getObservationReadableValue("Type of Initiative");
      
      const restrictionLength = imagerestriction[initiative];

      if(restrictionLength && currentImage.length > restrictionLength){
        validationErrors.push(`you can select max ${restrictionLength} photographs`);
      }

      
      
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "mandatory": false
        },
        {
          "name": "Distributed to",
          "uuid": "bd8f76e5-9f58-4b16-809f-721f0041bd6a",
          "keyValues": [],
          "concept": {
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Families",
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individuals",
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 17,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Photograph",
          "uuid": "5df3d936-3836-4017-88e7-501f79997e89",
          "keyValues": [],
          "concept": {
            "name": "Photograph",
            "uuid": "ed133199-dbae-4ba7-8c5c-2f23f119edf5",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 18,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activities Done",
          "uuid": "12ae8c0e-4290-4516-9cd7-0c9f2bafb476",
          "keyValues": [],
          "concept": {
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "voided": true
          },
          "displayOrder": 19,
          "type": "MultiSelect",
          "rule" : 
({ params, imports }) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    const activities = _.chain(encounter.individual.getEncounters(true))
        .map(_.identity)
        .filter(enc => enc.encounterType.name === 'Activity')
        .value();
    const visibility = activities.length > 0;

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], []);
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Village",
          "uuid": "fae4b2c8-0c6b-4cce-8b2c-d4dbfc88456e",
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
          "displayOrder": 20,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Village",
          "uuid": "761d739c-69da-4859-a143-c05255c495ec",
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
          "displayOrder": 21,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Target community",
          "uuid": "07da2db6-43b6-4be1-b7b2-28ad9427088c",
          "keyValues": [],
          "concept": {
            "name": "Target community (voided~207382)",
            "uuid": "ac3b21a6-cf77-4e9a-81c7-7f7f65e795c6",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Health Workers and Sweepers",
                "uuid": "024b3031-b7f3-4441-9ae0-95bfc4c2f853",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Weavers",
                "uuid": "95867a1b-bb19-469e-b21c-313016f3725d",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Artisans",
                "uuid": "73d1cedb-66f4-425b-9da4-7b22e87df967",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Sex Workers",
                "uuid": "c913f919-19bb-4789-948f-1ce239452da2",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "PWD",
                "uuid": "dc6278fa-b9f5-457d-b5a4-807189ac26e6",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Third gender",
                "uuid": "81e83f81-0372-425a-b96f-c012ebe0b5b0",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Widows",
                "uuid": "e0c9a937-415b-4bcc-be63-e7a41fa3c0d6",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Daily Wagers",
                "uuid": "a45cf0ac-7200-49a2-be31-a7317aaa46b6",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Mentally Challenged",
                "uuid": "c40880c6-cac6-4fd8-b30c-395f532d0a9c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "HIV affected",
                "uuid": "8df338a9-de53-4c13-8dd5-b869c3d45f2d",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Devdasi Community",
                "uuid": "218a5dfb-0a0d-40b6-9a75-ee7a79623454",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Ragpickers",
                "uuid": "27818169-2925-4895-b4ea-6cc30cedc5b0",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Leprosy affected",
                "uuid": "4af95ec9-9da1-4367-a2fa-2a8392822cc8",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Tribal community",
                "uuid": "83d940c4-43c4-4f06-82d8-d4315b884617",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Tea garden workers",
                "uuid": "0640170e-b58f-4aac-a30c-01f5ad908a0a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Senior Citizens",
                "uuid": "b4f90cb7-1cd7-4f72-aba0-49f961fc27ea",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Agricultural Related",
                "uuid": "84adcd3a-c177-418e-88ea-ca3a1cdb56f5",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Fishery Community",
                "uuid": "3b2e8baf-a7aa-4969-b6fe-0027e4343e25",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 22,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activities done",
          "uuid": "2780aa51-f645-42fa-919a-d376a7bc7247",
          "keyValues": [],
          "concept": {
            "name": "Activities Done (voided~220049)",
            "uuid": "c8dcffcf-a58a-4b0d-85cb-0d8c8d0dcfb2",
            "dataType": "Encounter",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "encounterTypeUUID",
                "value": "639605f9-a202-48dd-b42f-082dc2d172ff"
              },
              {
                "key": "encounterScope",
                "value": "Within Subject"
              },
              {
                "key": "encounterIdentifier",
                "value": "{Type of Initiative} {Activity sub type} {Location}-{Mohalla / Area}[{Activity Start Date} to {Activity End Date}]"
              }
            ],
            "voided": true
          },
          "displayOrder": 23,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "POC ID",
          "uuid": "858f1d70-c8d3-4ad7-87b1-de066b8cda4c",
          "keyValues": [],
          "concept": {
            "name": "POC ID",
            "uuid": "72fb3bcf-c852-4fa6-a95d-6446bc7018d1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Distribution Images",
          "uuid": "bd9198f9-d029-4dc7-9f8b-3cf279471fbb",
          "keyValues": [
            {
              "key": "imageQuality",
              "value": 1
            }
          ],
          "concept": {
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
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
  
 
  const currentImage = individual.getObservationReadableValue("1c4eb3f2-4d1e-4618-aaae-74475c5d8e08");
  
  if(currentImage && currentImage.length > 0){

      const imagerestriction = {
        "CFW-Rahat":2,
        "CFW-NJPC":2,
        "CFW-S2S":2,
        "Specific Initiative":2,
        "Vaapsi":2,
        "CFW":2,
        "NJPC":2,
        "S2S":2,
        "Rahat":3  
      };    

      const initiative = individual.getObservationReadableValue("Type of Initiative");
      
      const restrictionLength = imagerestriction[initiative];

      if(restrictionLength && currentImage.length > restrictionLength){
        validationErrors.push(`you can select max ${restrictionLength} photographs`);
      }

      
      
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "mandatory": false
        },
        {
          "name": "Receiver List Photographs",
          "uuid": "ac153aa4-f939-4934-a17c-7204a4d189af",
          "keyValues": [],
          "concept": {
            "name": "Receiver List Photographs",
            "uuid": "4c1bc9d0-5a23-4cd5-8849-e3e99ed496ee",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 26,
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
  
 
  const currentImage = individual.getObservationReadableValue("Receiver List Photographs");
  
  if(currentImage && currentImage.length > 0){

      const imagerestriction = {
        "CFW-Rahat":null,
        "CFW-NJPC":null,
        "CFW-S2S":null,
        "Specific Initiative":null,
        "Vaapsi":null,
        "CFW":null,
        "NJPC":null,
        "S2S":1,
        "Rahat":null
      };    

      const initiative = individual.getObservationReadableValue("Type of Initiative");
      
      const restrictionLength = imagerestriction[initiative];

      if(restrictionLength && currentImage.length > restrictionLength){
        validationErrors.push(`you can select max ${restrictionLength} photographs`);
      }

      
      
   }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);

},
          "mandatory": false
        },
        {
          "name": "Remarks",
          "uuid": "1c39a557-4302-4e2d-a768-1b503cbb6233",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 27,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Distribution Related Details",
      "timed": false
    },
    {
      "uuid": "bb1806c9-1fe6-4077-bc38-6573ae9442be",
      "name": "Distribution details",
      "displayOrder": 7,
      "formElements": [
        {
          "name": "Distributed to",
          "uuid": "7d68db9b-9091-4d57-bc71-69238720648a",
          "keyValues": [],
          "concept": {
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Families",
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individuals",
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptNameOtherThan("54d27687-374e-4988-ad81-e4d26bf02bf3").matches();
  
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
                            "Specific Initiative"
                          ],
                          "answerConceptUuids": [
                            "54d27687-374e-4988-ad81-e4d26bf02bf3"
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Implementation Inventory Id",
          "uuid": "8fc3474b-ea50-46c3-92c8-e5cf27d7f56c",
          "keyValues": [],
          "concept": {
            "name": "Inventory Id",
            "uuid": "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07df088a-7924-461d-9a9b-24a29d43813b"
              }
            ]
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type Of Material",
          "uuid": "277aa444-fe37-4f29-a6db-6c755fd67af1",
          "keyValues": [],
          "concept": {
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bulk Material",
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Goonj product",
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Contributed track",
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of distributions",
          "uuid": "0b9d3e6e-08a3-4a51-8f3e-9fac28a955b1",
          "keyValues": [],
          "concept": {
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "10da4c22-9288-4a31-9f6f-96be44aa6079",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "931368b9-51bb-49c7-a393-cc8e88fa73a6",
          "keyValues": [],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e").containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 || condition21 ;
  
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
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "registration",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "mandatory": false
        },
        {
          "name": "Activities Done",
          "uuid": "4361d1bc-0acf-4b51-a403-e527b485e45d",
          "keyValues": [],
          "concept": {
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ]
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Number of persons",
          "uuid": "534fd454-a325-4a8d-a184-262812c809ae",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Distribution details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "75cb0ad4-a6c0-4a95-b4f4-4bbfa78dabcc",
      "name": "Inventory details",
      "displayOrder": 8,
      "formElements": [
        {
          "name": "Inventory details",
          "uuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Inventory details",
            "uuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activity details",
          "uuid": "b642c503-b98f-45e0-8155-83391171f623",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Activity details",
            "uuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activities Done",
          "uuid": "3cf200c1-b284-4521-acf1-15d07a863326",
          "keyValues": [],
          "concept": {
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ]
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "parentFormElementUuid": "b642c503-b98f-45e0-8155-83391171f623",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Number of persons",
          "uuid": "311dd907-49cb-4379-ab95-2224e8186aa9",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
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
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "conceptDataType": "Subject",
                          "parentConceptUuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3"
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
          "parentFormElementUuid": "b642c503-b98f-45e0-8155-83391171f623",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Implementation Inventory Id",
          "uuid": "7db346ab-4404-47c4-bfb2-9bd33ee119e8",
          "keyValues": [],
          "concept": {
            "name": "Inventory Id",
            "uuid": "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07df088a-7924-461d-9a9b-24a29d43813b"
              }
            ]
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type Of Material",
          "uuid": "f0e8a3aa-1f8e-441a-a854-1eb15425bab7",
          "keyValues": [],
          "concept": {
            "name": "Type Of Material",
            "uuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Bulk Material",
                "uuid": "11c11e55-7604-4f38-9f4f-3560e116e76e",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Goonj product",
                "uuid": "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Contributed track",
                "uuid": "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
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
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of distributions",
          "uuid": "4f7cd9c8-dd0a-4dc5-b10b-fb9eb1c59bd5",
          "keyValues": [],
          "concept": {
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "b8cd03a7-ee35-423c-8d68-73149c2fb0af",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
          "type": "SingleSelect",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "32df610e-7ddf-4fe3-8664-e8df8328e155",
          "keyValues": [],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
  visibility = condition11 || condition21 ;
  
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
                  "conjunction": "or",
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupRegistration",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
                          "scope": "questionGroupRegistration",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Activities Done",
          "uuid": "d8d55a16-d659-448d-94ca-39ebc68445a4",
          "keyValues": [],
          "concept": {
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ]
          },
          "displayOrder": 10,
          "type": "SingleSelect",
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Number of persons",
          "uuid": "d12bdd4b-47cc-45f9-8a6a-c5d1c51ab899",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
            "dataType": "Numeric",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
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
                          "scope": "questionGroupRegistration",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "conceptDataType": "Subject",
                          "parentConceptUuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e"
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
          "parentFormElementUuid": "629f7d9c-1e72-414a-9234-f65eaeba7ec9",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Inventory details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "414af216-55a4-40c7-a2a5-5b2e96b46122",
      "name": "Activity details",
      "displayOrder": 9,
      "formElements": [
        {
          "name": "Activity details",
          "uuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Activity details",
            "uuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Activities Done",
          "uuid": "9f86a069-95d4-4c38-8fe4-ad14aae6b82e",
          "keyValues": [],
          "concept": {
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ]
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Number of persons",
          "uuid": "353b2f3d-c684-4bfd-bbd9-ef07a3f981b2",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
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
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "conceptDataType": "Subject",
                          "parentConceptUuid": "3fb0d2c5-0210-49be-a31c-a6a134131af3"
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
          "parentFormElementUuid": "4b2a46ca-ded8-493b-b1c3-8918ab2b4be8",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Activity details",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "b4453903-af4b-4974-a1c3-c2fa72436329",
      "name": "Survey detail",
      "displayOrder": 10,
      "formElements": [
        {
          "name": "Surveyed by",
          "uuid": "118c4ad2-abe5-4139-ba26-816ca0bb4826",
          "keyValues": [],
          "concept": {
            "name": "Surveyed by",
            "uuid": "aa0bff6a-3a89-498f-bdcf-5487ebe9c89c",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Monitored by / Distributor",
          "uuid": "5a98b58a-0882-4800-9769-addd052b0118",
          "keyValues": [],
          "concept": {
            "name": "Monitored by / Distributor",
            "uuid": "7b372e17-185c-4782-b5da-b3fb58dc7bf2",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Approved / Verified by",
          "uuid": "812bfe80-22fa-4fab-a1cf-66f4c6010974",
          "keyValues": [],
          "concept": {
            "name": "Approved / Verified by",
            "uuid": "0c6ddfaf-e7e9-4f7a-ba73-ca60a77045b6",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Survey detail",
      "timed": false
    },
    {
      "uuid": "76d8dbe2-5085-43be-94a7-a04cc589358e",
      "name": "Recommended by",
      "displayOrder": 11,
      "formElements": [
        {
          "name": "Team or external",
          "uuid": "b9e6bc1a-71ed-4602-a2e3-274a31e8cfb5",
          "keyValues": [],
          "concept": {
            "name": "Team or external",
            "uuid": "0b3b7c82-ad9e-4521-8900-a611a29dd242",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Team",
                "uuid": "4a9e46f1-47f0-47a2-b3e7-47d8957129ce",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "External",
                "uuid": "b11b31da-323d-47a4-97a7-d0790dc9e782",
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
          "mandatory": true
        },
        {
          "name": "Name of POC",
          "uuid": "d4f7bf7b-681f-47d5-9a2a-21947e19ccb1",
          "keyValues": [],
          "concept": {
            "name": "Name of POC",
            "uuid": "1dc4c483-3497-47d2-8088-507fe7f08ec5",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "POC Contact No",
          "uuid": "81bdb115-42a0-4475-8081-fd6e3db6c5ee",
          "keyValues": [],
          "concept": {
            "name": "POC Contact No",
            "uuid": "e19303df-8e54-4d4c-8db9-6f062f894b1e",
            "dataType": "PhoneNumber",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "verifyPhoneNumber",
                "value": false
              }
            ]
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Reached to",
          "uuid": "6f67bb01-b854-41d0-b059-c06a5cbff4b8",
          "keyValues": [],
          "concept": {
            "name": "Reached to",
            "uuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Group",
                "uuid": "f8ae2650-5c53-43da-b20e-41f3a08b4ffc",
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
          "mandatory": true
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Recommended by",
      "timed": false
    },
    {
      "uuid": "671cbaf3-c15a-4da1-9b7d-948cfa0e95ad",
      "name": "Reached to details",
      "displayOrder": 12,
      "formElements": [
        {
          "name": "Name",
          "uuid": "9793c349-d9d4-4ba8-9cd6-c2d3cf257a73",
          "keyValues": [],
          "concept": {
            "name": "Name",
            "uuid": "48d5d2f9-9f02-43d7-9869-781a06346b12",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Gender",
          "uuid": "ded08124-d8fd-4a48-9e65-fb3d10c22963",
          "keyValues": [],
          "concept": {
            "name": "Gender",
            "uuid": "4b8c5d72-1ed5-45a2-8b51-2becf9e1bff9",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Female",
                "uuid": "e26afb12-23b7-4762-a884-3f9690e28ab6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Male",
                "uuid": "8674b5ec-b08a-4c6d-acb0-989bc7344dfd",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Father/ Mother Name",
          "uuid": "1303a56c-ec28-425b-a73f-4bdaa8d3c536",
          "keyValues": [],
          "concept": {
            "name": "Father/ Mother Name",
            "uuid": "3b7f6a6b-c009-4eb2-9ebc-bcb23d0675a7",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Age",
          "uuid": "1b5f703f-3ccd-416c-95c0-4ed46bd94c2d",
          "keyValues": [],
          "concept": {
            "name": "Age",
            "uuid": "f1664abe-737b-4bba-b82f-f76d714e656f",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Phone Number",
          "uuid": "9d36ec0a-61b2-42e7-b55c-818e317039ab",
          "keyValues": [],
          "concept": {
            "name": "Phone Number",
            "uuid": "cb34f1a5-12e8-49cc-8153-dd6be27fafe5",
            "dataType": "PhoneNumber",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "verifyPhoneNumber",
                "value": false
              }
            ]
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Present Occupation",
          "uuid": "3dbe2158-cca1-4487-9982-ce96856cefde",
          "keyValues": [],
          "concept": {
            "name": "Present Occupation",
            "uuid": "1b557e4e-60df-45cc-8cf8-007c9f03d461",
            "dataType": "Text",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Number of family members",
          "uuid": "d36c6cd5-8590-4a3e-aac9-80ce2821e220",
          "keyValues": [],
          "concept": {
            "name": "Number of family members",
            "uuid": "765e1084-be2a-4d45-afde-bb9c22f414ad",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Monthly Income",
          "uuid": "e1d904d2-a393-43fe-947c-0cdc53c2282f",
          "keyValues": [],
          "concept": {
            "name": "Monthly Income",
            "uuid": "f06ee72a-9143-4002-a01c-8d92df43c208",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("a1289a00-c2de-43e0-b4d3-7bb631e4073d").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Individual"
                          ],
                          "answerConceptUuids": [
                            "a1289a00-c2de-43e0-b4d3-7bb631e4073d"
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
          "name": "Group’s Name",
          "uuid": "8d096b47-e903-444e-9c21-a4552a80520d",
          "keyValues": [],
          "concept": {
            "name": "Group’s Name",
            "uuid": "286890be-239b-49a1-ad87-4047bf89116c",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("f8ae2650-5c53-43da-b20e-41f3a08b4ffc").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Group"
                          ],
                          "answerConceptUuids": [
                            "f8ae2650-5c53-43da-b20e-41f3a08b4ffc"
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
          "name": "Total Number of Receivers",
          "uuid": "a18a035c-a785-441b-9834-332e4156818a",
          "keyValues": [],
          "concept": {
            "name": "Total Number of Receivers",
            "uuid": "1c0e2adc-1188-4d20-8842-073b82a46953",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("a89898dd-5b9b-42dd-babc-a6b2d667ca3a").containsAnswerConceptName("f8ae2650-5c53-43da-b20e-41f3a08b4ffc").matches();
  
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
                          "conceptName": "Reached to",
                          "conceptUuid": "a89898dd-5b9b-42dd-babc-a6b2d667ca3a",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Group"
                          ],
                          "answerConceptUuids": [
                            "f8ae2650-5c53-43da-b20e-41f3a08b4ffc"
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Reached to details",
      "timed": false
    },
    {
      "uuid": "191dfed7-2d49-4753-b106-b6ea4b325713",
      "name": "Feedback details",
      "displayOrder": 13,
      "formElements": [
        {
          "name": "Any Other Document Submitted",
          "uuid": "c8f83138-d8b3-47fe-b15e-e8cef8049f17",
          "keyValues": [],
          "concept": {
            "name": "Any Other Document Submitted",
            "uuid": "3829a421-81ca-4488-a8cc-33e78cfee972",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Reports Cross Checked",
          "uuid": "3cb49290-f115-4ffb-ae43-761ece05624e",
          "keyValues": [],
          "concept": {
            "name": "Reports Cross Checked",
            "uuid": "02226c59-2e8f-4f00-b977-4f68e95856c1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
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
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Remarks",
          "uuid": "3b87d7a5-5c2f-4f4d-bcbf-2f1df722463c",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Vaapsi"
                      ],
                      "answerConceptUuids": [
                        "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
      "display": "Feedback details",
      "timed": false
    },
    {
      "uuid": "087864e3-d7c1-40ee-af35-c5b0dd438ea1",
      "name": "Specific Initiative details",
      "displayOrder": 14,
      "formElements": [
        {
          "name": "Centre’s Name",
          "uuid": "ed12829e-970b-4d6b-baee-b6527a65ad7b",
          "keyValues": [],
          "concept": {
            "name": "Centre’s Name",
            "uuid": "fb06de30-dd88-4c08-99e4-56a927fb55ef",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Share a Brief Provided Material",
          "uuid": "0ebfad40-237f-402f-ba24-6955d5d00ee7",
          "keyValues": [],
          "concept": {
            "name": "Share a Brief Provided Material",
            "uuid": "9c01290a-6c88-43c9-b558-a7731df67212",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "How the Material Makes a Difference",
          "uuid": "bceda7e2-1946-4280-96f2-2d4eb076a6bc",
          "keyValues": [],
          "concept": {
            "name": "How the Material Makes a Difference",
            "uuid": "dbb0e4fe-78a5-46de-b2bf-b2f1525268e1",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Material Given for",
          "uuid": "83e805ce-a206-4171-a952-2cda6fae0db6",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "None"
              ]
            }
          ],
          "concept": {
            "name": "Material Given for",
            "uuid": "e471c483-2cec-484f-900b-73aef686e2f3",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Any other",
                "uuid": "f903963d-1c98-4f85-827c-c15a0930b845",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "Anganwadi Center",
                "uuid": "82e8ad09-8323-4eb5-8c36-6c5665581fab",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "School",
                "uuid": "353a5c77-6b72-4aac-8c49-c2fdd0abad10",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Children's Home",
                "uuid": "cef3f7af-f0ed-4df5-a6f0-faebd2d6d6aa",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Community Kitchen",
                "uuid": "67bba085-1712-4a2a-9154-ee6c55c62d31",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Health Center / Camps",
                "uuid": "74b16b6d-fb76-4734-9555-5b6df5784575",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "None",
                "uuid": "ba835221-04c0-4e55-a08f-e6e25bb6719c",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Maternity Homes",
                "uuid": "abc61217-d875-46f7-85f4-bb49eb324279",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Study / Computer Center / Vocational Institute",
                "uuid": "9c5f66af-a093-4de4-a9e9-47e5194e6ae1",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Library",
                "uuid": "443a0184-64e8-4d07-af2a-6c2af26551c2",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Isolation center",
                "uuid": "056f8b4f-c97c-4e25-aaf6-d9fc6299fc9b",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Individual Support",
                "uuid": "04348592-77a1-4ddb-92af-7c1d9e85809a",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Center for Differently Abled",
                "uuid": "ad251285-abf5-49f7-a405-9eb95349a3db",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Night Shelter",
                "uuid": "540e04e5-d02b-4037-b2b5-8be83279cbaa",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Animal Welfare Centers",
                "uuid": "dcc2bb17-ea3b-4a36-9325-0304fce3d6ea",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "General - Village or urban locality residents",
                "uuid": "bbfff794-f82f-4e24-9dc3-aaa214b41169",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Office support",
                "uuid": "1d32a2c1-bf51-4498-9b4a-adc954e27182",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Sport center",
                "uuid": "f574a8dd-8d73-4e93-bd10-d11aafc8cf1f",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Old Age Home",
                "uuid": "8f842dae-8596-4286-80c4-b054e6c21a79",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Stitching Center",
                "uuid": "30825219-fc97-4338-8ab5-15542d6c3ace",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Any Other",
                "uuid": "6445b3f0-04c5-4619-aa13-51bd5e8634ca",
                "dataType": "NA",
                "answers": [],
                "order": 20,
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
          "name": "Details for Any other (SI)",
          "uuid": "537ed8d0-1cf9-4fc5-a5c2-64f1077e2446",
          "keyValues": [],
          "concept": {
            "name": "Details for Any other (SI)",
            "uuid": "fc4a9ce4-fe0e-4067-b848-e0dd9d6be2c7",
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
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("e471c483-2cec-484f-900b-73aef686e2f3").containsAnswerConceptName("6445b3f0-04c5-4619-aa13-51bd5e8634ca").matches();
  
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
                          "conceptName": "Material Given for",
                          "conceptUuid": "e471c483-2cec-484f-900b-73aef686e2f3",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Any Other"
                          ],
                          "answerConceptUuids": [
                            "6445b3f0-04c5-4619-aa13-51bd5e8634ca"
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
          "name": "Total Number of Families Reached",
          "uuid": "6abe61aa-f3e2-46ca-b006-5e7e4fa3bdfa",
          "keyValues": [],
          "concept": {
            "name": "Total Number of Families Reached",
            "uuid": "d435582d-033a-4253-a4da-fda29662df6e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThanOrEqualTo(0).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThanOrEqualTo(0).matches();
  
  const isIntegerCheck = (value) => {
    return /^-?\\d+$/.test(value);
  };
  
  let noOfFamilyReached = individual.getObservationValue("d435582d-033a-4253-a4da-fda29662df6e");

  if(condition11 && condition21 ){
    validationErrors.push("Neither the number of individual reached nor the number of families reached should be 0");  
  }
  
  if (!isIntegerCheck(noOfFamilyReached)) {
    validationErrors.push("Please enter an integer value");
  }
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThan(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number cannot be negative");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Total Number of Individuals Reached",
          "uuid": "031d19a6-92d7-4cd1-be68-23f5614f2f58",
          "keyValues": [],
          "concept": {
            "name": "Total Number of Individuals Reached",
            "uuid": "c20a7fad-7129-4bc9-bf2a-d89803063561",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d435582d-033a-4253-a4da-fda29662df6e").lessThanOrEqualTo(0).matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThanOrEqualTo(0).matches();
  
  let noOfIndividualsReached = individual.getObservationValue("c20a7fad-7129-4bc9-bf2a-d89803063561");

  const isIntegerCheck = (value) => {
    return /^-?\\d+$/.test(value);
  };
  
  if(condition11 && condition21 ){
    validationErrors.push("Neither the number of individual reached nor the number of families reached should be 0");  
  }
  
  if (!isIntegerCheck(noOfIndividualsReached)) {
    validationErrors.push("Please enter an integer value");
  }
  
    const condition31 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("c20a7fad-7129-4bc9-bf2a-d89803063561").lessThan(0).matches();
  
  if(condition31 ){
    validationErrors.push("Number cannot be negative");  
}

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("d04d6382-91d2-468c-b45f-d3afce94cba2").containsAnswerConceptName("54d27687-374e-4988-ad81-e4d26bf02bf3").matches();
  
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
                      "conceptName": "Type of Initiative",
                      "conceptUuid": "d04d6382-91d2-468c-b45f-d3afce94cba2",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Specific Initiative"
                      ],
                      "answerConceptUuids": [
                        "54d27687-374e-4988-ad81-e4d26bf02bf3"
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
      "display": "Specific Initiative details",
      "timed": false
    },
    {
      "uuid": "d11c6878-5114-4e70-b874-ada8a39c3dc1",
      "name": "Inventory details",
      "displayOrder": 15,
      "formElements": [
        {
          "name": "Inventory details",
          "uuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            }
          ],
          "concept": {
            "name": "Inventory details",
            "uuid": "bafb80ac-6088-4649-8ed3-0501e1296c6e",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const individualService = params.services.individualService;
    const moment = imports.moment;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({
        individual,
        formElement
    }).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let groupedObservation = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e');
        let inventoryIds = [];
        groupedObservation.forEach(subArray => {
            let obs = subArray.groupObservations.filter(obj => obj.concept.uuid === "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad");
            if (obs) {
                obs = obs[0];
                if (obs) {
                    let uuid = obs.valueJSON.answer;                    
                    inventoryIds.push(uuid);
                    let hasDuplicates = inventoryIds.length !== new Set(inventoryIds).size;
                    if (hasDuplicates) {
                        validationErrors.push("The same inventory item cannot be selected again.");
                    }
                                        const dispatchDate = individualService.getSubjectByUUID(uuid).getObservationReadableValue("78f9d6cb-356e-45dc-90d5-216185784fe6");
                                        const distributionDate = moment(individual.getObservationReadableValue("cef5b862-672e-4e94-8ebc-3299a55f416f"));

                    if(dispatchDate && moment(dispatchDate.toISOString()).isAfter(distributionDate)){
                        console.log(`this is error`);
                        validationErrors.push("Inventory received date is after distribution date");
                    }
                }
            }
            // let uuid = subArray.groupObservations.filter(obj => obj.concept.uuid === "ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad")[0]?.valueJSON?.answer;
        });
    }
    console.log('validationErrors',validationErrors);
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "mandatory": true
        },
        {
          "name": "Distributed to",
          "uuid": "d349cb93-92c8-47a0-a9a0-c54e4c5b210c",
          "keyValues": [],
          "concept": {
            "name": "Distributed to",
            "uuid": "ef952d55-f879-4c34-99e2-722c680ed2e2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Families",
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individuals",
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
      console.log(`beetween`); 
    let unitUUID = '384789ec-1f69-4407-932c-9451d4e05a51';
    let unit;
    if (inventoryUUID != undefined) {
      unit = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(unitUUID);
    }
    if (unit != undefined) {
      value = unit;
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "mandatory": false
        },
        {
          "name": "Initial Quantity",
          "uuid": "cc98b595-8df0-4863-936c-14e8fcfae0a9",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Initial Quantity",
            "uuid": "09878916-0c78-43b4-9002-40beb894e089",
            "dataType": "Numeric",
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
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
    let initialQuantityUUID = '09878916-0c78-43b4-9002-40beb894e089';
    if (inventoryUUID != undefined) {
      value = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(initialQuantityUUID);
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "mandatory": false
        },
        {
          "name": "Current Quantity",
          "uuid": "aa222fb8-06ff-478d-80fc-8e64db8ccf77",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Current Quantity",
            "uuid": "080aca7e-c590-4036-bee7-cf3f77b488aa",
            "dataType": "Numeric",
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
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
    let inventoryUUID = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex].findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
    let currentQuantityUUID = '080aca7e-c590-4036-bee7-cf3f77b488aa';
    if (inventoryUUID != undefined) {
      value = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(currentQuantityUUID);
      visibility = true;
    }
  }  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "d2a3d328-0775-4cdd-a0b1-f0f6c395341f",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
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
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];

    console.log('params', params);
    const condition11 = new imports.rulesConfig.RuleCondition({
        individual,
        formElement
    }).when.questionGroupValueInRegistration("ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad", "bafb80ac-6088-4649-8ed3-0501e1296c6e", params.questionGroupIndex).defined.matches();
    console.log('condition11---->',condition11);
    
    if (condition11) {
    
        let currentRepeatableGroupObservation = individual.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex];
        console.log('currentRepeatableGroupObservation------->',currentRepeatableGroupObservation);
        let inventoryUUID;
        let currentInventoryQuantity = 0;
        let newDistributionQuantity = 0;
        let oldDistributionQuantity = 0;
        let currentInventoryQuantityUUID = '080aca7e-c590-4036-bee7-cf3f77b488aa';

        console.log('currentRepeatableGroupObservation---------',currentRepeatableGroupObservation != undefined);

        if (currentRepeatableGroupObservation != undefined) {
        

            inventoryUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('ccf1fbd6-d59c-40d3-a05a-f31cd6ac2cad').getReadableValue();
            let quantityobs = currentRepeatableGroupObservation.findObservationByConceptUUID('bf591bee-f3a5-4481-9b01-ab40ca01c8b4');
            console.log('quantityobs-----',quantityobs);
            if (quantityobs != undefined) {

              newDistributionQuantity = quantityobs.getReadableValue();
            }
        }
        
        console.log('inventoryUUID--------',inventoryUUID);
        if (inventoryUUID != undefined) {
            currentInventoryQuantity = individualService.getSubjectByUUID(inventoryUUID).getObservationReadableValue(currentInventoryQuantityUUID);         
        }
        
        let currentdistributionUUID = individual.uuid;
        let oldDistribution = individualService.getSubjectByUUID(currentdistributionUUID);
        console.log('individualService--------',individualService);
        if (oldDistribution !== undefined) {
        console.log('oldDistribution------',oldDistribution);
        let rpg = oldDistribution.findGroupedObservation('bafb80ac-6088-4649-8ed3-0501e1296c6e')[params.questionGroupIndex];

        console.log('rpg',rpg);
        if(rpg != undefined){
        
          let qutobs = rpg.findObservationByConceptUUID('bf591bee-f3a5-4481-9b01-ab40ca01c8b4');
          
          if(qutobs != undefined){
            oldDistributionQuantity = qutobs.getReadableValue();
          }
          
        }
       
        }
        if(newDistributionQuantity<=0){
          validationErrors.push("Quantity should be greater than zero");
        }   

        if (!Number.isInteger(parseFloat(newDistributionQuantity))) {
            validationErrors.push("Quantity must be an integer. Decimals are not allowed.");
        }

        if (currentInventoryQuantity != undefined && newDistributionQuantity != undefined && oldDistributionQuantity != undefined && (newDistributionQuantity - oldDistributionQuantity)>currentInventoryQuantity) {
            validationErrors.push("Quantity shouldn't be greater than the current quantity plus old quantity");
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "c18d20b8-e254-425f-b12b-00f3567f6b36",
          "mandatory": true
        }
      ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("7b23c3ff-dafc-4c9e-9395-e5e718d759b1").containsAnswerConceptName("303d5ad1-ffa2-4096-ba7c-a86876ca9d12").matches();
  
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
                          "conceptName": "Is the activity available for linking?",
                          "conceptUuid": "7b23c3ff-dafc-4c9e-9395-e5e718d759b1",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "303d5ad1-ffa2-4096-ba7c-a86876ca9d12"
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
          "name": "Activities Done",
          "uuid": "938ea5da-f14e-47e0-ab7f-4cd9b5581715",
          "keyValues": [
            {
              "key": "searchOptions",
              "value": true
            }
          ],
          "concept": {
            "name": "Activities Done",
            "uuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
            "dataType": "Subject",
            "answers": [],
            "active": true,
            "keyValues": [
              {
                "key": "subjectTypeUUID",
                "value": "07d0e5b8-0dad-4469-9623-10278261f829"
              }
            ]
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
  
  if (condition11) {
        let groupedObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3');
        let inventoryIds = [];
        groupedObservation.forEach(subArray => {
            let obs = subArray.groupObservations.filter(obj => obj.concept.uuid === "fba0fa43-307a-4c48-8cbb-552362e7efd4");
            if (obs) {
                obs = obs[0];
                if (obs) {
                    let uuid = obs.valueJSON.answer;
                    inventoryIds.push(uuid);
                    let hasDuplicates = inventoryIds.length !== new Set(inventoryIds).size;
                    if (hasDuplicates) {
                        validationErrors.push("The same activity cannot be selected again.");
                    }
                }
            }
        });
    }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "mandatory": true
        },
        {
          "name": "Total participants in the activity.",
          "uuid": "47d82886-785b-4815-b50c-c230f8dc051e",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total participants in the activity.",
            "uuid": "9d2953c6-1f95-49c4-8b63-91be6628b9f7",
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
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = false;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let currentRepeatableGroupObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3')[params.questionGroupIndex];
        
        let activityUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('fba0fa43-307a-4c48-8cbb-552362e7efd4').getReadableValue();
        let subject = individualService.getSubjectByUUID(activityUUID);
        if (subject) {
            let typeOfInitiative = subject.getObservationReadableValue('5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb');

            if (typeOfInitiative === 'S2S') {
                value = subject.getObservationReadableValue('f5cc0324-9b14-42d8-b704-8cb2c5592a48');
                visibility = true;
            } else {
                let numberOfMaleParticipants = subject.getObservationReadableValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
                let numberOfFemaleParticipants = subject.getObservationReadableValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
                let numberOfOtherParticipants = subject.getObservationReadableValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
// let numberOfParticipantsObs = subject.getObservationReadableValue('1157c7c8-9f27-410d-9115-ef36191fba06');
// value = numberOfParticipantsObs.flatMap(obj => Object.values(obj))
//  .reduce((sum, num)=> sum + num, 0);
                value = numberOfMaleParticipants + numberOfFemaleParticipants + numberOfOtherParticipants;
                visibility = true;
            }
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "mandatory": false
        },
        {
          "name": "Number of persons",
          "uuid": "2a955613-08e5-4b33-9065-8e82d20f9034",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElement = params.formElement;
    const individualService = params.services.individualService;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];
    const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4", "3fb0d2c5-0210-49be-a31c-a6a134131af3", params.questionGroupIndex).defined.matches();
    if (condition11) {
        let currentRepeatableGroupObservation = individual.findGroupedObservation('3fb0d2c5-0210-49be-a31c-a6a134131af3')[params.questionGroupIndex];
        
        let activityUUID = currentRepeatableGroupObservation.findObservationByConceptUUID('fba0fa43-307a-4c48-8cbb-552362e7efd4').getReadableValue();

        let typeOfInitiative = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('5df1e2e2-2bd1-40ee-a430-9dd3f9618eeb');
                
        let numberOfParticipants;
        
        if (typeOfInitiative === 'S2S') {
          numberOfParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('f5cc0324-9b14-42d8-b704-8cb2c5592a48');
        }
        else {
          // let numberOfParticipantsObs = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('1157c7c8-9f27-410d-9115-ef36191fba06');
          // numberOfParticipants = numberOfParticipantsObs.flatMap(obj => Object.values(obj))
          //  .reduce((sum, num)=> sum + num, 0);
          let numberOfMaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('526b0d5d-51cc-4004-8c12-7a6c71c6c516');
          let numberOfFemaleParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('2966afcc-2c07-44cf-8711-3fc23f52a6b5');
          let numberOfOtherParticipants = individualService.getSubjectByUUID(activityUUID).getObservationReadableValue('a043fea3-1658-4b5e-becd-ee55ab305a03');
          numberOfParticipants = numberOfMaleParticipants + numberOfFemaleParticipants + numberOfOtherParticipants;
        }
        let numberOfPersonsSelectedObs = currentRepeatableGroupObservation.findObservationByConceptUUID('083a8bdd-bc58-46a2-a056-06a10e48088a');
        let numberOfPersonsSelected;
        if (numberOfPersonsSelectedObs != undefined) {
          numberOfPersonsSelected = numberOfPersonsSelectedObs.getReadableValue();
        }        
        if (typeOfInitiative && numberOfPersonsSelected > numberOfParticipants) {
            validationErrors.push("The number of persons linking to distribution cannot be more than the number of persons who took part in that activity");
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "3649402e-6549-421c-a804-969d036ff36b",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of persons",
          "uuid": "536f7cef-8666-4637-bacb-940003aa9a79",
          "keyValues": [],
          "concept": {
            "name": "Number of persons",
            "uuid": "083a8bdd-bc58-46a2-a056-06a10e48088a",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4").defined.matches();
  
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
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "conceptDataType": "Subject"
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
          "mandatory": true
        }
      ],
      "display": "Activities Done",
      "timed": false
    },
    {
      "uuid": "8452abc1-3384-4bd6-8efa-3610433f7459",
      "name": "Other details",
      "displayOrder": 17,
      "formElements": [
        {
          "name": "Remarks",
          "uuid": "b11f3045-27cc-4fc9-a57e-5f1809959bbd",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "mandatory": false
        },
        {
          "name": "Reports Cross Checked",
          "uuid": "171e6d65-3b13-429c-a6ea-08030a1819e8",
          "keyValues": [],
          "concept": {
            "name": "Reports Cross Checked",
            "uuid": "02226c59-2e8f-4f00-b977-4f68e95856c1",
            "dataType": "Coded",
            "answers": [
              {
                "name": "No",
                "uuid": "40f13680-bc05-46ef-8223-e56cf20b8d0a",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Yes",
                "uuid": "303d5ad1-ffa2-4096-ba7c-a86876ca9d12",
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
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("02226c59-2e8f-4f00-b977-4f68e95856c1").notDefined.matches();
  
  if(condition11 ){
    value = "No";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        }
      ],
      "display": "Other details",
      "timed": false
    },
    {
      "uuid": "18a1d8ab-8b00-492a-9ab8-99bee14e9361",
      "name": "don't use",
      "displayOrder": 18,
      "formElements": [
        {
          "name": "NOTHING",
          "uuid": "aa9e8dee-436a-410b-931d-b571835e5e51",
          "keyValues": [],
          "concept": {
            "name": "location",
            "uuid": "1b4b80b0-33d9-4d95-8a66-b110346798d0",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInRegistration("fba0fa43-307a-4c48-8cbb-552362e7efd4").defined.matches();
  
  if(condition11 ){
    value = "123456";  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "value": "123456"
                  },
                  "actionType": "value"
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
                          "scope": "questionGroupRegistration",
                          "conceptName": "Activities Done",
                          "conceptUuid": "fba0fa43-307a-4c48-8cbb-552362e7efd4",
                          "conceptDataType": "Subject"
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
        }
      ],
      "display": "don't use",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "d661556a-0af1-4739-baa6-ef84e4d40a34",
      "name": "Dispatched Materials distributed",
      "displayOrder": 19,
      "formElements": [
        {
          "name": "Type of material from received",
          "uuid": "6cc9e408-ed8f-4013-a0f2-9ecabdc8e03f",
          "keyValues": [],
          "concept": {
            "name": "Type of material from received (voided~207589)",
            "uuid": "4745383c-21f3-4650-9358-10ab387f7728",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Dispatched Materials distributed",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "1190edaf-3da5-44ba-ae96-39ce2e4c225d",
      "name": "Materials distributed",
      "displayOrder": 20,
      "formElements": [
        {
          "name": "Materials",
          "uuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "keyValues": [
            {
              "key": "repeatable",
              "value": true
            },
            {
              "key": "disableManualActions",
              "value": true
            }
          ],
          "concept": {
            "name": "Materials",
            "uuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c",
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
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Type",
          "uuid": "403300d6-b0d5-44bf-be18-db8607b91c7b",
          "keyValues": [],
          "concept": {
            "name": "Type (Kit)",
            "uuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Marriage Kits",
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance Drama",
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Tent House",
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "My Pad Woman",
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "New Born Baby",
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Parlur",
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55",
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
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              }
            ],
            "active": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Kit type",
          "uuid": "2726648d-e65f-4252-8403-eb62d3e096e3",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance drama",
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
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
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Parlor",
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Marriage kits",
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "My pad woman",
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "New born baby",
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tent house",
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "CBE",
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "934bbc94-ecca-4f3b-94df-9f3c9c894b10",
          "keyValues": [],
          "concept": {
            "name": "Sub-type",
            "uuid": "3d8277db-2656-4413-b4e6-0aefb2cb692c",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Labour Kit",
                "uuid": "4a29b8af-dc91-44b8-b820-586568a02870",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("1977cf6f-528f-4d89-a90f-29780fdcdc02", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition12 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition14 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage Kits"
                          ],
                          "answerConceptUuids": [
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type (Kit)",
                          "conceptUuid": "1977cf6f-528f-4d89-a90f-29780fdcdc02",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage Kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "9acf4a1f-058b-444c-95a0-4dec9ac5b55e",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855",
            "dataType": "Coded",
            "answers": [
              {
                "name": "L",
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "X",
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
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
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Contributed item",
          "uuid": "84082ff3-760e-4e50-8631-4ffaeb86a77c",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Contributed Item",
            "uuid": "ef2f247e-209f-4a8a-9fc5-4b27264d0cec",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 10,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Kit Name",
          "uuid": "52612969-4017-4df5-80e2-ff1bc2b02834",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Name",
            "uuid": "318902e6-f7a5-4e70-8f5f-72b83f3ccb22",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Kit Type",
          "uuid": "a44ae842-0057-4d24-8d0b-3c03b75bb2bb",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Type",
            "uuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
            "dataType": "Coded",
            "answers": [
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "S2S",
                "uuid": "9fd9d626-faf7-4833-a3ab-47ec3b4388f6",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Dance drama",
                "uuid": "9d4f0cc8-0be2-4c2c-9485-696650f0e0c3",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 14,
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
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Parlor",
                "uuid": "b716454c-9604-439e-9100-a28aa15aa3de",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Marriage kits",
                "uuid": "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "My pad woman",
                "uuid": "aeb9a11d-c672-451d-ac13-5c97bc6523d9",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "New born baby",
                "uuid": "9bb7c536-ab34-420c-b60c-8a844892e65b",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "Tent house",
                "uuid": "603883db-ea5b-4c46-b1a7-78618e052268",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "CBE",
                "uuid": "8c48b5ae-0b0a-45b8-bc61-93f370c56fff",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "b7464021-3715-4d6d-a71f-816a4b3c77d3",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sub type",
            "uuid": "1b637749-2537-42d5-a5a4-b7e522967855",
            "dataType": "Coded",
            "answers": [
              {
                "name": "L",
                "uuid": "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                "dataType": "NA",
                "answers": [],
                "order": 20,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "X",
                "uuid": "687c20b4-617a-4ae6-ac46-e686aa1283f1",
                "dataType": "NA",
                "answers": [],
                "order": 19,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "NA",
                "uuid": "a98a4e9d-e110-433d-94a6-d471c0157a75",
                "dataType": "NA",
                "answers": [],
                "order": 21,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd","971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  visibility = condition11 ;
    if(condition12 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
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
                }
              ],
              "conditions": [
                {
                  "compoundRule": {
                    "rules": [
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW",
                            "Vaapsi",
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd",
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Painter Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "DFW"
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
            },
            {
              "actions": [
                {
                  "details": {
                    "answersToSkip": [
                      "A",
                      "B",
                      "C",
                      "Barber Kit",
                      "Cobbler Kit",
                      "Puncture Repair Kit",
                      "Electrician Kit",
                      "Painter Kit",
                      "Carpenter Kit",
                      "Mason Kit",
                      "Ironing Kit",
                      "Plumbing Kit",
                      "Farmer Kit",
                      "Egg Shop Kit",
                      "Tea Shop Kit",
                      "Kirana Shop Kit",
                      "Labour Kit"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                      "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                      "43b6d068-5d97-4413-887b-e9f7aedddaee",
                      "7f4bf480-99e2-483c-97b2-22629d0929c6",
                      "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                      "1855ccd4-9005-4ef4-af39-ee526425aa67",
                      "54282559-0a72-42f3-b332-465e6b520cb8",
                      "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                      "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                      "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                      "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                      "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                      "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                      "4a29b8af-dc91-44b8-b820-586568a02870"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Marriage kits"
                          ],
                          "answerConceptUuids": [
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36"
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
                      "A",
                      "B",
                      "C",
                      "Marriage Kits (M)",
                      "Marriage Kits (F)"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1"
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit Type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Material name",
          "uuid": "fb1b11dd-e27d-4932-84e3-64bdf0e1fc2f",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Material Name",
            "uuid": "aaede45f-53ca-40dc-a349-feca810810f5",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Goonj product",
                            "Contributed track",
                            "Bulk Material"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Kit Id",
          "uuid": "8ca258cd-93e2-40cf-9972-c50fd81bef30",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Kit Id",
            "uuid": "e7963e9a-f0ac-4666-af69-173e4e8bbcf6",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Material Id",
          "uuid": "6fea682c-0ee2-4055-8cba-d515d714e787",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Material Id",
            "uuid": "53b13383-40de-4b5e-ab9f-94d0ec216c89",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "keyValues": []
          },
          "displayOrder": 16,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","11c11e55-7604-4f38-9f4f-3560e116e76e","6f6eb1de-88c4-4df2-a8ae-997a339a78c5").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Goonj product",
                            "Bulk Material",
                            "Contributed track"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "73e4cab9-b0d5-49a8-9cf2-c42f41523143",
                            "11c11e55-7604-4f38-9f4f-3560e116e76e",
                            "6f6eb1de-88c4-4df2-a8ae-997a339a78c5"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Purchased /High value",
          "uuid": "2c252233-d004-460e-bd57-85a2a3bcb5b4",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Purchased /High Value",
            "uuid": "8f2ce1e6-f2f9-4ce3-94c8-8b1f761a3b95",
            "dataType": "Text",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Distribution to",
          "uuid": "7cf4e5f8-6158-42fe-80e8-b6118882988e",
          "keyValues": [],
          "concept": {
            "name": "Distribution to (voided~207597)",
            "uuid": "db851d57-7457-4a12-9192-f75caf9fd54e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "732a9667-cb96-42d0-8531-578679dad52d",
          "keyValues": [],
          "concept": {
            "name": "Quantities",
            "uuid": "723422d4-ffe1-4a1d-a40e-30bea9ab1487",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 19,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
  visibility = condition11 ;
  
  let quantityFromDispatch = encounter.getObservationValue('Net Quantity');
  let quantityFromNonKit = encounter.getObservationValue('Quantities');
  
  if (_.toNumber(quantityFromDispatch) < _.toNumber(quantityFromNonKit)) {
      return validationErrors;
  }
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net quantity",
          "uuid": "1838e213-f8e9-42a9-8d00-cdbf56ae2fba",
          "keyValues": [],
          "concept": {
            "name": "Net quantity (voided~207599)",
            "uuid": "b8f74c0a-7fd4-4f60-b997-03a7e0da2e26",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Contributed",
          "uuid": "36dbb158-671a-4a89-8022-03e7ab00f8f4",
          "keyValues": [],
          "concept": {
            "name": "Contributed",
            "uuid": "d01e4097-3854-44f2-8706-ec36fceeadf9",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchase/High Value",
          "uuid": "b8c7463c-7c7a-4893-8c0b-bbbc0885ee46",
          "keyValues": [],
          "concept": {
            "name": "Purchase/High Value",
            "uuid": "dc5135d7-cd94-4c14-92fe-9b258c64f679",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Units",
          "uuid": "63704213-fd4d-4c2b-8dbd-de34eb36fc91",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207602)",
            "uuid": "1adb71c7-cb19-45b5-acd4-7736c29e007c",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Quantity",
          "uuid": "5231dd00-2f74-4122-ae60-e8228ff09c86",
          "keyValues": [],
          "concept": {
            "name": "Quantity number",
            "uuid": "b5585768-2b22-49a4-819c-50cab9395e30",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 24,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, materialTypeConceptName, qantityConceptName) => {
        return _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
                const values = obs.getReadableValue();
                const quantity = _.get(_.find(values, kv => kv[qantityConceptName]), qantityConceptName, 0);
                const typeOfMaterial = _.get(_.find(values, kv => kv[materialTypeConceptName]), materialTypeConceptName, '');
                return {[typeOfMaterial]: quantity}
            })
            .reduce((a, b) => {
                a['Contributed item'] = a['Contributed item'] + _.get(b, 'Contributed item', 0);
                a['Kit'] = a['Kit'] + _.get(b, 'Kit', 0);
                a['Purchased item'] = a['Purchased item'] + _.get(b, 'Purchased item', 0);
                return a;
            }, {'Contributed item': 0, 'Kit': 0, 'Purchased item': 0})
    };
    
    const totalQuantityDispatched = getItemQuantityFrom('Dispatch', '267fbb23-4168-4fb1-9bce-6b0d5f378c46', 'Type Of Material', 'Quantity (Dispatched)');
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Type Of Material', 'Quantity number');
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Type Of Material'])['Type Of Material'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity number']), 'Quantity number', 0);
        const remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
    }
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
}
,
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Total quantity distributed",
          "uuid": "4815eb0d-1b12-4c9a-9be0-9acd7298e305",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 25,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const _ = imports.lodash;
    let validationErrors = [];
    const visibility = new imports.rulesConfig.RuleCondition({encounter, formElement})
        .when
        .questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex)
        .containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624", "604f6297-724c-48ec-9078-0d4356d45910", "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
            "11c11e55-7604-4f38-9f4f-3560e116e76e", "6f6eb1de-88c4-4df2-a8ae-997a339a78c5", "73e4cab9-b0d5-49a8-9cf2-c42f41523143")
        .matches();

    const getItemQuantityFrom = (encName, obsUUID, dispatchLineItemIdKeyName, qantityConceptName) => {
        let result = _.filter(encounter.individual.getEncounters(), enc => enc.encounterType.name === encName && encounter.uuid !== enc.uuid)
            .flatMap(enc => enc.getObservationValue(obsUUID))
            .flatMap((obs) => {
               //  console.log('obs----->',obs);
                const values = obs.getReadableValue();
               //  console.log('values----->',values);
                const quantity = _.get(_.find(values, kv =>  kv[qantityConceptName]), qantityConceptName, 0);
               //  console.log('quantity----->',quantity);
                const dispatchLineItemId = _.get(_.find(values, kv => kv[dispatchLineItemIdKeyName]), dispatchLineItemIdKeyName, '');
               //  console.log('dispatchLineItemId----->',dispatchLineItemId);
                return {Id: dispatchLineItemId, qty: quantity};
            }).reduce(function(res, value) {
                if (!res[value.Id]) {
                    res[value.Id] = 0;
                }
                res[value.Id] += value.qty;
                return res;
        }, {});  
      //  console.log('result: ', result);
        return result;
    };

    const totalQuantityDispatched = getItemQuantityFrom('Dispatch receipt', '5dfb2f28-b866-4442-be01-0ed451c6aad9', 'Dispatch Line Item Id', 'Quantity');
    
    const toatlQuantityDistributedEarlier = getItemQuantityFrom('Distribution', '3093c0f1-5e3f-47eb-92ed-0067b41b6f9c', 'Dispatch Line Item Id', 'Quantity');
    
    const currentQuestionGroupObservation = encounter.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c');
  //  console.log('currentQuestionGroupObservation---->',currentQuestionGroupObservation);
    if (currentQuestionGroupObservation) {
        const currentGroupObservations = currentQuestionGroupObservation[params.questionGroupIndex];
        const readableValues = currentGroupObservations.getReadableValue();
        const currentTypeOfMaterial = _.find(readableValues, kv => kv['Dispatch Line Item Id'])['Dispatch Line Item Id'];
        const currentQuantity = _.get(_.find(readableValues, kv => kv['Quantity']), 'Quantity', 0);
       // console.log('currentTypeOfMaterial--->',currentTypeOfMaterial);
        
        let remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial] - toatlQuantityDistributedEarlier[currentTypeOfMaterial];
        
        if( _.isNaN(remainingQuantity ) ){
            remainingQuantity = totalQuantityDispatched[currentTypeOfMaterial]
        } 
        
      //  console.log('totalQuantityDispatched---->',totalQuantityDispatched); -- NaN
      //  console.log('toatlQuantityDistributedEarlier---->',toatlQuantityDistributedEarlier);
      //  console.log('currentTypeOfMaterial---->',currentTypeOfMaterial);
      //  console.log('currentQuantity---->',currentQuantity);
      //  console.log('remainingQuantity---->',remainingQuantity);
        
        if (currentQuantity > remainingQuantity) {
            validationErrors.push(`Quantity cannot be greater than ${remainingQuantity}`);
        }
        const filledEntries = _.map(currentQuestionGroupObservation, groupObservations => _.mapValues(_.pick(groupObservations.toResource, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4']), (v) => _.toNumber(v)));
        const isAllQuantityZero = _.every(filledEntries, ['bf591bee-f3a5-4481-9b01-ab40ca01c8b4', 0]);
        if(isAllQuantityZero) {
            validationErrors.push("All quantities cannot be equal to zero.");
        }
    }


    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null, [], validationErrors);
},
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "bc59499f-45bb-4ea6-9a63-85ac8f3519e3",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Unit",
            "uuid": "384789ec-1f69-4407-932c-9451d4e05a51",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Distribution done to",
          "uuid": "f2498451-5b71-4b29-8af5-fac1ab1dd0a1",
          "keyValues": [],
          "concept": {
            "name": "Distribution done to",
            "uuid": "0aaf0e79-d027-4412-87be-62507fb69bbf",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Families",
                "uuid": "15707d6a-47f0-430e-a43f-0ced5205e05a",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Individuals",
                "uuid": "495f1001-01c9-4057-ac84-8b003d35f48a",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Number of Families/Individuals",
          "uuid": "0ce67821-c8e4-44c1-aff7-b912b36d13dd",
          "keyValues": [],
          "concept": {
            "name": "Number of distributions",
            "uuid": "663f2d2e-4a9a-4b3c-a421-d4939a0b700e",
            "dataType": "Numeric",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624"
                          ]
                        },
                        "operator": "containsAnswerConceptNameOtherThan"
                      }
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "e847a92e-d713-47f0-a107-a71a4c227e6f",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207619)",
            "uuid": "d974928a-742d-465c-924d-aab56ca4e101",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type of material received",
                          "conceptUuid": "c6eb1105-50e8-4bc7-a3ff-f4d096e1e796",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Contributed item",
                            "Purchased item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "604f6297-724c-48ec-9078-0d4356d45910",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Total",
          "uuid": "3ff8679a-1649-44d4-aa1d-f98031771c01",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total",
            "uuid": "d5f535ba-8fa8-4504-b45f-6bd2f19dc02e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 30,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let answersToSkip = [];
  let validationErrors = [];
  let value = 0;
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("c6eb1105-50e8-4bc7-a3ff-f4d096e1e796", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
  visibility = condition11 ;
  
//  let valueOfContributed = encounter.getObservationValue('Contributed');
//  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
//  let valueOfUnits = encounter.getObservationValue('Units');
  
 // const totalUnitsDistributed = _.toNumber( valueOfContributed || 0 ) + _.toNumber( valueOfPurchase || 0 ) + _.toNumber( valueOfUnits ||0 );

  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Remarks",
          "uuid": "5835d690-e7b8-4d3f-9f1d-dbf996887a85",
          "keyValues": [],
          "concept": {
            "name": "Remarks",
            "uuid": "e132e4fe-7c7a-4612-b086-426b9f74147b",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 31,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Images",
          "uuid": "5ac137c2-bc76-4c65-8be0-4ccbbe56c84c",
          "keyValues": [],
          "concept": {
            "name": "Distribution Images",
            "uuid": "1c4eb3f2-4d1e-4618-aaae-74475c5d8e08",
            "dataType": "Image",
            "answers": [],
            "active": true
          },
          "displayOrder": 32,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c", params.questionGroupIndex).containsAnyAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624","5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Type Of Material",
                          "conceptUuid": "f25402e3-8d6c-4436-ba81-ad7b4f97131e",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "3093c0f1-5e3f-47eb-92ed-0067b41b6f9c"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Kit",
                            "Purchased item",
                            "Contributed item"
                          ],
                          "answerConceptUuids": [
                            "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                            "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                            "604f6297-724c-48ec-9078-0d4356d45910"
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
          "parentFormElementUuid": "b5500c32-6053-4e6a-a5a2-23ba28c66b00",
          "voided": true,
          "mandatory": false
        }
      ],
      "display": "Materials distributed",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "2b4274a7-6cf7-4ec1-ae4d-7e01695ff138",
      "name": "Kits",
      "displayOrder": 21,
      "formElements": [
        {
          "name": "Type",
          "uuid": "79096bc1-b595-4946-a3f3-162726decdc8",
          "keyValues": [],
          "concept": {
            "name": "Type",
            "uuid": "29a0c486-b23e-445c-9b89-0b2f5eb39682",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Other",
                "uuid": "df625e4f-b11f-40bd-b846-422af836f273",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Office",
                "uuid": "ce5bb7ef-b14c-4aaf-b9b6-c353c4e0e62b",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Parlur",
                "uuid": "dcc2441b-11ee-494d-9606-7db2edbd9a55",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Tent House",
                "uuid": "c1ba7eed-7cac-47b2-974b-0c0ff9a954bb",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Dance Drama",
                "uuid": "a865aa62-8fe4-4303-9394-2d06926fff43",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "S2S (Non-GBG)",
                "uuid": "bdd49cd0-5f26-4f80-98e0-a046b095a9e3",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Vaapsi",
                "uuid": "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "My Pad Woman",
                "uuid": "92f513a6-a892-4c06-8a30-a5252f4fccf4",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "New Born Baby",
                "uuid": "eecf1fe0-c01d-4a37-97f5-80894be39bd1",
                "dataType": "NA",
                "answers": [],
                "order": 11,
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
                "name": "S2S (GBG)",
                "uuid": "63555829-f7d1-41fa-b1ec-2079e960fa9d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Marriage Kits",
                "uuid": "7ec7c6ff-1593-4791-ae3b-71fcedb1f5cd",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Volunteer",
                "uuid": "b5d24787-22ce-4887-b211-f0d65718976c",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Toiletry",
                "uuid": "9d61ae52-6359-41bd-a8ed-b3e9cdb807f1",
                "dataType": "NA",
                "answers": [],
                "order": 13,
                "active": true
              },
              {
                "name": "S2S – AW",
                "uuid": "74144b99-b527-44b7-81d6-8f7c335b202b",
                "dataType": "NA",
                "answers": [],
                "order": 5,
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
          "name": "Sub type",
          "uuid": "4477dc5c-ccc5-4cb2-a9fa-1c96055d0f45",
          "keyValues": [],
          "concept": {
            "name": "Sub type (voided~207387)",
            "uuid": "72470239-07f4-4eab-969c-408d4e1e94f4",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              },
              {
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Ironing Kit",
                "uuid": "6a21fa2e-f99d-43dd-8ef7-64a5c172db3a",
                "dataType": "NA",
                "answers": [],
                "order": 9,
                "active": true
              },
              {
                "name": "Kirana Shop Kit",
                "uuid": "de2b3530-22b6-4c5d-9147-3e3faebfabae",
                "dataType": "NA",
                "answers": [],
                "order": 15,
                "active": true
              },
              {
                "name": "Labor Kit",
                "uuid": "90d580bd-f76c-4633-bb5b-4b92bc057c86",
                "dataType": "NA",
                "answers": [],
                "order": 16,
                "active": true
              },
              {
                "name": "Cobbler Kit",
                "uuid": "05a6aa27-1676-4a29-95a3-75ad8d6fe81b",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
                "active": true
              },
              {
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Marriage Kits (M)",
                "uuid": "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                "dataType": "NA",
                "answers": [],
                "order": 17,
                "active": true
              },
              {
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
                "active": true
              },
              {
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Mason Kit",
                "uuid": "54282559-0a72-42f3-b332-465e6b520cb8",
                "dataType": "NA",
                "answers": [],
                "order": 8,
                "active": true
              },
              {
                "name": "Electrician Kit",
                "uuid": "7f4bf480-99e2-483c-97b2-22629d0929c6",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "Marriage Kits (F)",
                "uuid": "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                "dataType": "NA",
                "answers": [],
                "order": 18,
                "active": true
              },
              {
                "name": "Painter Kit",
                "uuid": "7f9c3eea-f367-4bcc-9d99-d3130d9e755c",
                "dataType": "NA",
                "answers": [],
                "order": 11,
                "active": true
              },
              {
                "name": "Puncture Repair Kit",
                "uuid": "43b6d068-5d97-4413-887b-e9f7aedddaee",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Egg Shop Kit",
                "uuid": "365114d4-1272-41fb-85f0-8bc96aa22f7a",
                "dataType": "NA",
                "answers": [],
                "order": 13,
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
          "name": "Distribution to",
          "uuid": "4e9b1949-0f13-4af3-ae8f-2bdae02e4308",
          "keyValues": [],
          "concept": {
            "name": "Distribution to (voided~207390)",
            "uuid": "60aac647-9923-478d-b4a1-7197e2946065",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
          "name": "Net quantity",
          "uuid": "2f1293be-f8b4-44b6-8f95-df2d89f75081",
          "keyValues": [],
          "concept": {
            "name": "Net quantity (voided~207565)",
            "uuid": "240d945b-dec8-4f52-9cf3-09d021e90d80",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net Quantity",
          "uuid": "34ed0e34-0651-4319-b66e-93df73fec6de",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Net Quantity (voided~207391)",
            "uuid": "64839599-56e5-47d5-8254-70805ca4bad5",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 5,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Kits",
      "voided": true,
      "timed": false
    },
    {
      "uuid": "0479cef2-c03e-40db-aa36-8e4164e3d15f",
      "name": "Non-Kit",
      "displayOrder": 22,
      "formElements": [
        {
          "name": "Contributed (Non-Kit)",
          "uuid": "f2d33c6a-abcd-4df7-9827-bafccecd05bc",
          "keyValues": [],
          "concept": {
            "name": "Contributed (Non-Kit)",
            "uuid": "b10e2de0-32a0-48e4-9eaf-ec333132f57e",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Purchase/High Value",
          "uuid": "59805b08-21bd-46a4-a74f-a64767bab6f5",
          "keyValues": [],
          "concept": {
            "name": "Purchase/High Value (voided~207392)",
            "uuid": "dc64755c-772e-4489-89c9-41e522798472",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Units",
          "uuid": "af0a05fe-684e-4cee-9d62-425ea3e27857",
          "keyValues": [],
          "concept": {
            "name": "Units (voided~207393)",
            "uuid": "27b0631f-5cc7-4b03-80e3-498eeaa09bf7",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 3,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Distribution done to",
          "uuid": "b7c6b56a-ff0f-49b5-87d0-5abd956ca100",
          "keyValues": [],
          "concept": {
            "name": "Distribution done to (voided~207394)",
            "uuid": "915e0fbd-5281-4f9e-beb5-d463b7b4c6fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Family",
                "uuid": "c3481a91-ff17-46ce-ac78-7e7f2a1a483b",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Individual",
                "uuid": "a1289a00-c2de-43e0-b4d3-7bb631e4073d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity number",
          "uuid": "01e4161d-7360-4f37-b242-e6ead93f2415",
          "keyValues": [],
          "concept": {
            "name": "Quantity number (voided~207395)",
            "uuid": "013202c0-2a18-40fe-93be-2de9a635dacb",
            "dataType": "Numeric",
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
          "name": "Total",
          "uuid": "66ec1c25-e6df-4d65-a11f-2f246a57215f",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Total (voided~207568)",
            "uuid": "c5619838-d26c-49d0-95e6-1da026b2d127",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 6,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const encounter = params.entity;
  const formElement = params.formElement;
   
  let valueOfContributed = encounter.getObservationValue('Contributed (Non-Kit)');
  let valueOfPurchase = encounter.getObservationValue('Purchase/High Value');
  let valueOfUnits = encounter.getObservationValue('Units');
  let valueOfQuantityNumber = encounter.getObservationValue('Quantity number');
  
  let total = _.toNumber(valueOfContributed || 0) + _.toNumber(valueOfPurchase || 0) + _.toNumber(valueOfUnits || 0) + _.toNumber(valueOfQuantityNumber || 0);
  
   return new imports.rulesConfig.FormElementStatus(formElement.uuid, true,total );
},
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Remarks",
          "uuid": "71d14c25-d942-4128-937f-7a8644c833dd",
          "keyValues": [],
          "concept": {
            "name": "Remarks (voided~207569)",
            "uuid": "a9cf0d5d-602f-4a55-a3a4-27f2f80dee8d",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Images",
          "uuid": "9761417b-87cc-4ea1-8727-9be9c49d36ac",
          "keyValues": [],
          "concept": {
            "name": "Images (voided~207571)",
            "uuid": "cee6abca-9feb-48ae-8922-c083239f3f1e",
            "dataType": "Image",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 8,
          "type": "MultiSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Images",
          "uuid": "35d4636f-436d-49ee-9394-709e67ed7327",
          "keyValues": [
            {
              "key": "allowedMaxSize",
              "value": 1
            }
          ],
          "concept": {
            "name": "Images (voided~207570)",
            "uuid": "f81be2c1-8355-458e-9c3d-3e9c6bdc552f",
            "dataType": "File",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
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
        
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInEncounter("4745383c-21f3-4650-9358-10ab387f7728").containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","604f6297-724c-48ec-9078-0d4356d45910").matches();
  
        visibility = condition11 ;
  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "declarativeRule": [
        {
          "actions": [
            {
              "actionType": "showFormElementGroup"
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
                      "conceptName": "Type of material from received",
                      "conceptUuid": "4745383c-21f3-4650-9358-10ab387f7728",
                      "conceptDataType": "Coded"
                    },
                    "rhs": {
                      "type": "answerConcept",
                      "answerConceptNames": [
                        "Purchased item",
                        "Contributed item"
                      ],
                      "answerConceptUuids": [
                        "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                        "604f6297-724c-48ec-9078-0d4356d45910"
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
      "display": "Non-Kit",
      "voided": true,
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}