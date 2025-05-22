[
  {
    "name": "Village Form",
    "uuid": "770d8de1-9a52-4e54-875a-fba268a7732c",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("78f9d6cb-356e-45dc-90d5-216185784fe6").defined.matches();
  
  eligibility = condition11 ;
  
  return eligibility;
},
    "active": true,
    "entityEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "showEncounterType"
          }
        ],
        "conditions": [
          {
            "compoundRule": {
              "rules": [
                {
                  "lhs": {
                    "type": "concept",
                    "scope": "latestInAllEncounters",
                    "conceptName": "Dispatch Received Date",
                    "conceptUuid": "78f9d6cb-356e-45dc-90d5-216185784fe6",
                    "conceptDataType": "Date"
                  },
                  "rhs": {},
                  "operator": "defined"
                }
              ],
              "conjunction": "and"
            }
          }
        ]
      }
    ],
    "immutable": false,
    "voided": true
  },
  {
    "name": "Dispatch (voided~1674)",
    "uuid": "018267d2-9dac-4636-8458-74e98b4cb150",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("132868ab-811a-401e-9fd3-7c87f5512436").defined.matches();
  
  eligibility = !(condition11 );
  
  return eligibility;
},
    "active": true,
    "entityEligibilityCheckDeclarativeRule": [
      {
        "actions": [
          {
            "actionType": "hideEncounterType"
          }
        ],
        "conditions": [
          {
            "compoundRule": {
              "rules": [
                {
                  "lhs": {
                    "type": "concept",
                    "scope": "latestInAllEncounters",
                    "conceptName": "Dispatch Status Id",
                    "conceptUuid": "132868ab-811a-401e-9fd3-7c87f5512436",
                    "conceptDataType": "Text"
                  },
                  "rhs": {},
                  "operator": "defined"
                }
              ],
              "conjunction": "and"
            }
          }
        ]
      }
    ],
    "immutable": false,
    "voided": true
  },
  {
    "name": "Dispatch receipt",
    "uuid": "543c3eb6-fc01-4e3a-b3e1-ef50ec6a8896",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  let eligibility = true;
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("132868ab-811a-401e-9fd3-7c87f5512436").notDefined.matches();
  
  const condition21 = new imports.rulesConfig.RuleCondition({individual}).when.latestValueInAllEncounters("78f9d6cb-356e-45dc-90d5-216185784fe6").defined.matches();
  
  const condition31 = new imports.rulesConfig.RuleCondition({individual}).when.valueInRegistration("b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392").equals("In Transit").matches();
  
  eligibility = !(condition11 || condition21 || !condition31 );

  
  return eligibility;
},
    "active": true,
    "immutable": false
  }
]