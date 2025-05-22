[
  {
    "name": "ANC",
    "uuid": "25c6c7d8-d779-43e2-b53e-d1cbf92f3865",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.ageInDays.lessThan(0).matches();
  
  eligibility = condition11 ;
  
  return eligibility;
},
    "active": true,
    "entityEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "showEncounterType"
          },
          {}
        ],
        "conditions": [
          {
            "compoundRule": {
              "rules": [
                {
                  "lhs": {
                    "type": "ageInDays"
                  },
                  "rhs": {
                    "type": "value",
                    "value": 0
                  },
                  "operator": "lessThan"
                }
              ],
              "conjunction": "and"
            }
          }
        ]
      }
    ],
    "immutable": false
  },
  {
    "name": "AWC inputs",
    "uuid": "818786a0-eb92-413d-85ab-c7fff52a5cbb",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const visibility = individual.getEncounters(true).filter((enc) => enc.encounterDateTime !== null ).length < 1;
  return visibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Delivery",
    "uuid": "0ffc5fe0-eb12-40e2-b707-65ef26efc70e",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "QRT PW",
    "uuid": "231e81b3-8f1c-474a-bc2e-4398006e2579",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Village inputs (voided~1408)",
    "uuid": "d5bc489e-713d-44ef-bd09-6e862fae6eac",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const visibility = individual.getEncounters(true).filter((enc) => enc.encounterDateTime !== null ).length < 1;
  return visibility;
},
    "active": true,
    "immutable": false,
    "voided": true
  },
  {
    "name": "PNC",
    "uuid": "aaaa9032-072c-4662-acb1-f651e6b67946",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.valueInEncounter("f72ec1db-50d5-409e-883a-421825fbebb5").defined.matches();
  
  eligibility = condition11 ;
  
  return eligibility;
},
    "active": true,
    "entityEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "showEncounterType"
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
                    "conceptName": "Date of delivery",
                    "conceptUuid": "f72ec1db-50d5-409e-883a-421825fbebb5",
                    "conceptDataType": "Date"
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
    "immutable": false
  },
  {
    "name": "NRC (voided~1403)",
    "uuid": "196ebfd9-9649-41c1-b07d-2ea5f6b7cd59",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Growth Monitoring",
    "uuid": "5c68b335-0456-4111-ae77-4697cb61cd56",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "QRT Child",
    "uuid": "24474001-f69a-433f-8a65-737c1662bbca",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Child Home Visit",
    "uuid": "91719f2a-0312-41ad-80ce-9e010f193e0b",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Training",
    "uuid": "039b6488-5395-4fda-989e-d3b00760c5bd",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const currentDate = moment();
  const currentMonth = currentDate.month(); 
  const currentYear = currentDate.year();
  const encounters = individual.getEncounters(true);

  function trainingCompletedThisMonth(encounterDateTime){

    if(encounterDateTime.month() == currentMonth && encounterDateTime.year() == currentYear) return true;

    return false;
  }
  
  function hasTrainingCompletionScheduled(encounters){
    return encounters.some((enc)=> 
      enc.encounterType.name === 'Training Completion' && 
      enc.voided === false &&
      enc.earliestVisitDateTime != null && 
      enc.encounterDateTime == null
    );
  }
  //!hasTrainingCompletionScheduled(encounters)
  const eligibility = !encounters.some((enc)=> 
    enc.encounterType.name === 'Training' && 
    enc.voided === false &&
    enc.encounterDateTime != null && 
    trainingCompletedThisMonth(moment(enc.encounterDateTime))
  );
  
  return eligibility;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Training Completion",
    "uuid": "e8ec379d-8cc7-4617-a74e-264854b7139d",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Medical Facilitation for Poshan Sathi",
    "uuid": "362996b5-aaef-4474-b037-03a7f52df5ce",
    "entityEligibilityCheckRule": "",
    "active": true,
    "immutable": false
  },
  {
    "name": "Medical Facilitation for QRT",
    "uuid": "7cd16d3f-ecc1-442d-8f77-9125edb31a4a",
    "entityEligibilityCheckRule": "",
    "active": true,
    "immutable": false
  }
]