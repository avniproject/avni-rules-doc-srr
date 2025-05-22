{
  "name": "Dispatch receipt form",
  "uuid": "57bb2d3a-f8a5-4405-8d2c-514456e91533",
  "formType": "Encounter",
  "formElementGroups": [
    {
      "uuid": "a8941c26-f3ab-4f12-8c91-216d25729e45",
      "name": "Dispatch receipt",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Dispatch status id",
          "uuid": "72666c1a-7256-4e70-aa7a-30d74c5ec007",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch status id (voided~207738)",
            "uuid": "42ba2dbe-3dc1-4718-b924-237eb637e089",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Account / Organisation name",
          "uuid": "df958a0c-0eb0-4166-bdb4-1d1ac43f2a79",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Account / Organisation name",
            "uuid": "3b371318-ca39-4fd5-9fd8-fa6cc50f6543",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Dispatch status id",
          "uuid": "b5357dc4-1f30-4121-9120-107aa8bd38be",
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
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const dispatchIdValue = encounter.individual.getObservationReadableValue("132868ab-811a-401e-9fd3-7c87f5512436");  
  if (dispatchIdValue) {
  visibility = true;
  value = dispatchIdValue;
  }
 
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Account/Organisation Name",
          "uuid": "95e42e3e-7510-4850-b92a-5ad2712be04e",
          "keyValues": [],
          "concept": {
            "name": "Account name (voided~207310)",
            "uuid": "ba04af96-c044-48f5-ae3b-b8fe78579e10",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
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
    const accountNameValue = firstDispatchEncounter.getObservationReadableValue('2978117c-a297-4171-99c6-23c3522ca0f8');
    
    statusBuilder.value(accountNameValue);
  }
  return statusBuilder.build();
},
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Dispatch Received Date",
          "uuid": "87fc77d2-2f6c-419a-8d55-92cb84ff1bf9",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Received Date",
            "uuid": "78f9d6cb-356e-45dc-90d5-216185784fe6",
            "dataType": "Date",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
  
  let dispatchDateValue = encounter.individual.registrationDate;
  dispatchDateValue = moment(dispatchDateValue);
  let dispatchReceivedDateObservation = encounter.findObservation('78f9d6cb-356e-45dc-90d5-216185784fe6');

  let dispatchReceivedDateValue = _.isEmpty(dispatchReceivedDateObservation) ? dispatchReceivedDateObservation : dispatchReceivedDateObservation.getReadableValue();
  dispatchReceivedDateValue = moment(dispatchReceivedDateValue);
  
  const condition11 = dispatchDateValue.isSame(dispatchReceivedDateValue, 'year') && dispatchDateValue.isSame(dispatchReceivedDateValue, 'month') && dispatchDateValue.isSame(dispatchReceivedDateValue, 'day')
  
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("78f9d6cb-356e-45dc-90d5-216185784fe6").lessThan(dispatchDateValue, 'ms').matches();

  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("78f9d6cb-356e-45dc-90d5-216185784fe6").greaterThan(encounter.encounterDateTime, 'ms').matches();
  
  if (!condition11) {
    if (condition12) {
      validationErrors.push("Date cannot be earlier than Dispatch date");
    }
    if (condition13) {
      validationErrors.push("Dispatch received date cannot be after dispatch receipt encounter's date");
    }
  }
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        }
      ],
      "display": "Dispatch receipt",
      "timed": false
    },
    {
      "uuid": "f20534ab-931a-44dc-85dc-bae6911857be",
      "name": "Received Material",
      "displayOrder": 2,
      "formElements": [
        {
          "name": "Received Material",
          "uuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
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
            "name": "Received Material",
            "uuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9",
            "dataType": "QuestionGroup",
            "answers": [],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const formElement = params.formElement;
    const statusBuilder = new imports.rulesConfig.FormElementStatusBuilder({encounter, formElement});
    const _ = imports.lodash;
    const conceptsToCopy = ['f25402e3-8d6c-4436-ba81-ad7b4f97131e', '944cb7a1-a537-4e4f-bd15-74db621abefa',
        '1b637749-2537-42d5-a5a4-b7e522967855', 'ef2f247e-209f-4a8a-9fc5-4b27264d0cec',
        '4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b',
        '384789ec-1f69-4407-932c-9451d4e05a51', '44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa',
        '318902e6-f7a5-4e70-8f5f-72b83f3ccb22', 'aaede45f-53ca-40dc-a349-feca810810f5'];
    if(encounter.individual) {
        const materialsDispatchedValue = encounter.individual.getObservationValue('267fbb23-4168-4fb1-9bce-6b0d5f378c46');
        const valueArray = _.map(materialsDispatchedValue, groupObservations => {
            const valueObj = groupObservations.toResource;
            const newQuantityValue = {'4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b': valueObj['bf591bee-f3a5-4481-9b01-ab40ca01c8b4']};
            return _.pick({...valueObj, ...newQuantityValue}, conceptsToCopy);
        });
        statusBuilder.value(valueArray);
    }
    return statusBuilder.build();
},
          "mandatory": false
        },
        {
          "name": "Type of material",
          "uuid": "502838fb-cbd6-4643-8f3d-7edb3f0fad3b",
          "keyValues": [],
          "concept": {
            "name": "Type of material (voided~207327)",
            "uuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "unique": true,
                "active": true
              },
              {
                "name": "Kit",
                "uuid": "3b41522d-a009-4d64-a718-9ecf7ea7b624",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "unique": true,
                "active": true
              },
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "unique": true,
                "active": true
              }
            ],
            "active": true,
            "voided": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Type of material",
          "uuid": "00208323-713f-4853-9ae9-40364347869b",
          "keyValues": [],
          "concept": {
            "name": "Type of Material (voided~207317)",
            "uuid": "274a5e34-2cc8-46f9-9e1f-a0044e7397fc",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Contributed item",
                "uuid": "604f6297-724c-48ec-9078-0d4356d45910",
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
                "order": 1,
                "active": true
              },
              {
                "name": "Purchased item",
                "uuid": "5d8aeacb-3fdc-4f6c-ab21-1d68465ef354",
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Dispatch Line Item Id",
          "uuid": "9ff169d8-3cfa-4ed6-b66b-9f28d3bd44cb",
          "keyValues": [],
          "concept": {
            "name": "Dispatch Status Line Item Id (voided~209758)",
            "uuid": "1b097354-81f5-4466-97c1-ff4028699b95",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Dispatch Line Item Id",
          "uuid": "08c5ec0b-9347-49bc-8b3e-fa2935b966a7",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Dispatch Line Item Id",
            "uuid": "44cd43e1-d2a7-46e4-92f3-1fcf3508f8aa",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 5,
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": false
        },
        {
          "name": "Type of material",
          "uuid": "b2cfdac2-2e3a-436d-a5f9-5aeb0b0c71ee",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Kit type",
          "uuid": "0b31b8e5-5719-4143-b0e9-4e05f34ba4ca",
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
          "displayOrder": 8,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": false
        },
        {
          "name": "Sub type",
          "uuid": "edad336a-3d8d-4260-96b4-8e85ad04a658",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Sub type (Dispatched) (voided~207733)",
            "uuid": "36b3abc2-663f-45c3-bdf2-b89cb5984f77",
            "dataType": "Text",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 9,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub type",
          "uuid": "ca1cac0b-62f6-495d-babf-0399f4d5f1d6",
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
          "displayOrder": 10,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition12 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca","e246e9b5-e7b9-42f0-be1c-daf4a4393a36","85eda3f4-ee7c-4123-b330-77b4a7f817fd").matches();
    
  const condition13 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("e246e9b5-e7b9-42f0-be1c-daf4a4393a36").matches();
    
  const condition14 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("944cb7a1-a537-4e4f-bd15-74db621abefa", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("971c7a76-d296-4d47-9a90-47a612ceb4ca").matches();
  
  if(condition11 ) {
    _.forEach(["04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    visibility = condition12 ;
    if(condition13 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6","05a6aa27-1676-4a29-95a3-75ad8d6fe81b","43b6d068-5d97-4413-887b-e9f7aedddaee","7f4bf480-99e2-483c-97b2-22629d0929c6","1855ccd4-9005-4ef4-af39-ee526425aa67","54282559-0a72-42f3-b332-465e6b520cb8","6a21fa2e-f99d-43dd-8ef7-64a5c172db3a","4c968381-9a3a-4a33-86b4-a075d0d57d39","7f9c3eea-f367-4bcc-9d99-d3130d9e755c","1df1a87d-c6a7-4db6-b12b-31aa946c05a9","365114d4-1272-41fb-85f0-8bc96aa22f7a","a2385cfa-06b1-4c53-a63d-b4b963650cfe","de2b3530-22b6-4c5d-9147-3e3faebfabae","4a29b8af-dc91-44b8-b820-586568a02870","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
        const answerToSkip = formElement.getAnswerWithConceptUuid(answer);
        if (answerToSkip) answersToSkip.push(answerToSkip);
    });
};
    if(condition14 ) {
    _.forEach(["9e0f3a28-ca42-45e7-8d62-384d86ce8dd8","d4d7519d-8247-464b-a136-c29147aeb34d","6d103506-e529-4cb8-9e57-d3fbab0675e3","f4897faa-440c-4da7-bca8-f8c4cee6ec35","a4ceacf3-d692-496d-b12d-9251b0af85c1","ceefacdd-14b0-408f-b1cb-d6c3651299ff","687c20b4-617a-4ae6-ac46-e686aa1283f1"], (answer) => {
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                          "conceptName": "Kit type",
                          "conceptUuid": "944cb7a1-a537-4e4f-bd15-74db621abefa",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Vaapsi",
                            "Marriage kits",
                            "CFW"
                          ],
                          "answerConceptUuids": [
                            "971c7a76-d296-4d47-9a90-47a612ceb4ca",
                            "e246e9b5-e7b9-42f0-be1c-daf4a4393a36",
                            "85eda3f4-ee7c-4123-b330-77b4a7f817fd"
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
                      "Labour Kit",
                      "L",
                      "X"
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
                      "4a29b8af-dc91-44b8-b820-586568a02870",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1"
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                      "Marriage Kits (F)",
                      "L",
                      "X"
                    ],
                    "answerUuidsToSkip": [
                      "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                      "d4d7519d-8247-464b-a136-c29147aeb34d",
                      "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                      "f4897faa-440c-4da7-bca8-f8c4cee6ec35",
                      "a4ceacf3-d692-496d-b12d-9251b0af85c1",
                      "ceefacdd-14b0-408f-b1cb-d6c3651299ff",
                      "687c20b4-617a-4ae6-ac46-e686aa1283f1"
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": false
        },
        {
          "name": "Kit Name",
          "uuid": "612d7633-163a-474c-8903-9eab4f2f9d5a",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": false
        },
        {
          "name": "Contributed item",
          "uuid": "0cb216c4-2749-4054-b77f-b83a7741f4ee",
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
          "displayOrder": 12,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                        "operator": "containsAnyAnswerConceptName"
                      }
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Purchased /High value",
          "uuid": "a5b7ef16-d374-4661-b496-82bb7be98b8a",
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
          "displayOrder": 13,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": false
        },
        {
          "name": "Material Name",
          "uuid": "21d4ff36-19e3-47ba-b095-e6a11d8f1434",
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
  const encounter = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnyAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354","73e4cab9-b0d5-49a8-9cf2-c42f41523143","6f6eb1de-88c4-4df2-a8ae-997a339a78c5","11c11e55-7604-4f38-9f4f-3560e116e76e").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Purchased item",
                            "Goonj product",
                            "Contributed track",
                            "High Value Material"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Quantity as per dispatch",
          "uuid": "08bbc52c-3601-4676-abba-1a2889cb6bb4",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Quantity as per dispatch",
            "uuid": "4d9a9cb8-1c7c-4d86-b7d7-f6a03a1d520b",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 15,
          "type": "SingleSelect",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Unit",
          "uuid": "2c864413-75b3-421f-96d6-aa4db6619df8",
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
          "displayOrder": 16,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("f25402e3-8d6c-4436-ba81-ad7b4f97131e", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptNameOtherThan("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                    ]
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Quantity matching",
          "uuid": "018f21e3-97a5-41ad-a6ac-4c268140f637",
          "keyValues": [],
          "concept": {
            "name": "Quantity matching",
            "uuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
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
          "displayOrder": 17,
          "type": "SingleSelect",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "4feaee3c-1407-46ae-93b6-4a47a7b07599",
          "keyValues": [],
          "concept": {
            "name": "Quantity received (voided~207830)",
            "uuid": "45172599-4b47-42cc-8b64-a55f8ce2276d",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 18,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
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
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "d748e438-dd32-4b72-889d-e38efb1fcc08",
          "keyValues": [],
          "concept": {
            "name": "Quantity",
            "uuid": "bf591bee-f3a5-4481-9b01-ab40ca01c8b4",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
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
                          "scope": "questionGroupEncounter",
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "43c04206-7c11-4520-8ca5-68e1dc81da0f",
          "keyValues": [],
          "concept": {
            "name": "Quantity for not matching",
            "uuid": "78ef9fcf-0d32-49f8-b0af-a29e80c4a9ed",
            "dataType": "Numeric",
            "answers": [],
            "active": true
          },
          "displayOrder": 20,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.questionGroupValueInEncounter("71644765-6e55-4b8b-b01a-082e311bfa11", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("40f13680-bc05-46ef-8223-e56cf20b8d0a").matches();
  
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
                          "conceptName": "Quantity matching",
                          "conceptUuid": "71644765-6e55-4b8b-b01a-082e311bfa11",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "No"
                          ],
                          "answerConceptUuids": [
                            "40f13680-bc05-46ef-8223-e56cf20b8d0a"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Quantity",
          "uuid": "54a0b669-a74e-4c8f-af8d-d2d56ab6e479",
          "keyValues": [],
          "concept": {
            "name": "Net Quantity (voided~207562)",
            "uuid": "0b302304-8534-459d-a151-08289ac97a6e",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 21,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Sub-Type",
          "uuid": "f52e2d2d-f28e-41e0-b29d-3b071225d791",
          "keyValues": [],
          "concept": {
            "name": "Sub-Type",
            "uuid": "edc2c868-9380-4855-b670-7193e9ccad94",
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
                "name": "A",
                "uuid": "9e0f3a28-ca42-45e7-8d62-384d86ce8dd8",
                "dataType": "NA",
                "answers": [],
                "order": 0,
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
                "name": "B",
                "uuid": "d4d7519d-8247-464b-a136-c29147aeb34d",
                "dataType": "NA",
                "answers": [],
                "order": 1,
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
                "name": "Plumbing Kit",
                "uuid": "4c968381-9a3a-4a33-86b4-a075d0d57d39",
                "dataType": "NA",
                "answers": [],
                "order": 10,
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
                "name": "Barber Kit",
                "uuid": "04df33ce-9c6c-4424-b7a3-ee5c77d8d3e6",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
                "name": "Carpenter Kit",
                "uuid": "1855ccd4-9005-4ef4-af39-ee526425aa67",
                "dataType": "NA",
                "answers": [],
                "order": 7,
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
                "name": "C",
                "uuid": "6d103506-e529-4cb8-9e57-d3fbab0675e3",
                "dataType": "NA",
                "answers": [],
                "order": 2,
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
                "name": "Labour Kit",
                "uuid": "4a29b8af-dc91-44b8-b820-586568a02870",
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
                "name": "Farmer Kit",
                "uuid": "1df1a87d-c6a7-4db6-b12b-31aa946c05a9",
                "dataType": "NA",
                "answers": [],
                "order": 12,
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
                "name": "Tea Shop Kit",
                "uuid": "a2385cfa-06b1-4c53-a63d-b4b963650cfe",
                "dataType": "NA",
                "answers": [],
                "order": 14,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 28,
          "type": "MultiSelect",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("3b41522d-a009-4d64-a718-9ecf7ea7b624").matches();
  
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Item name",
          "uuid": "88d1f928-fcfd-4a9b-bf13-80c0f5d5d8bd",
          "keyValues": [],
          "concept": {
            "name": "Item name",
            "uuid": "64f74002-bb29-48b2-a5ce-2cbe31b1d71d",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 29,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").or.when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("604f6297-724c-48ec-9078-0d4356d45910").matches();
  
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
                    ],
                    "conjunction": "or"
                  }
                }
              ]
            }
          ],
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Item Category",
          "uuid": "798d6977-ecc6-4fca-bb08-3ba09a155bc2",
          "keyValues": [],
          "concept": {
            "name": "Item Category",
            "uuid": "54f456f5-94ee-4537-bc72-49947404521e",
            "dataType": "Text",
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
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({encounter, formElement}).when.valueInEncounter("10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae", "5dfb2f28-b866-4442-be01-0ed451c6aad9", params.questionGroupIndex).containsAnswerConceptName("5d8aeacb-3fdc-4f6c-ab21-1d68465ef354").matches();
  
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
                          "conceptName": "Type of material",
                          "conceptUuid": "10a49c5d-ad8c-4ad9-80de-49e97ea5e0ae",
                          "conceptDataType": "Coded",
                          "parentConceptUuid": "5dfb2f28-b866-4442-be01-0ed451c6aad9"
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
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Net quantity",
          "uuid": "1374ac17-2432-4e9e-918b-dbd53fde7b90",
          "keyValues": [],
          "concept": {
            "name": "Net quantity (voided~207369)",
            "uuid": "964bdf93-a65c-410f-8f42-a76e46a5bfab",
            "dataType": "Numeric",
            "answers": [],
            "active": true,
            "voided": true
          },
          "displayOrder": 31,
          "type": "SingleSelect",
          "parentFormElementUuid": "3d9b2113-c9f4-4c1b-a4fe-010daa6602e5",
          "voided": true,
          "mandatory": true
        }
      ],
      "display": "Received Material",
      "timed": false
    },
    {
      "uuid": "cea60ef9-af6f-434a-95ef-c1cd2df4968e",
      "name": "Other Details",
      "displayOrder": 3,
      "formElements": [
        {
          "name": "Remarks",
          "uuid": "31bd1417-77cb-4fff-ba59-4373e40a951b",
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
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const encounter = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = false;
    return formElementGroup.formElements.map((formElement) => {
        
     const qgroupsList = encounter.getObservationReadableValue("5dfb2f28-b866-4442-be01-0ed451c6aad9");
    
    if(qgroupsList){
        let isQuantityMatching = 'Quantity matching';
        qgroupsList.forEach(qgroup=>{
            qgroup.forEach(question=>{
                if(question[isQuantityMatching] && question[isQuantityMatching]=== 'No'){
                  visibility = true;
                }
            });
        });
    }
    

  
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
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