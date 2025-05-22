{
  "name": "Growth Monitoring",
  "uuid": "847c45ab-9b06-470a-9229-7e848ad597b6",
  "formType": "ProgramEncounter",
  "formElementGroups": [
    {
      "uuid": "826b9bb1-9788-4c8d-8b10-72dd742dbe26",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Weight",
          "uuid": "6b5057b1-c623-40af-8e8f-efbc6d622430",
          "keyValues": [],
          "concept": {
            "name": "Weight",
            "uuid": "8b187dda-a88e-487a-981a-0e4cb6142904",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 100,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("8b187dda-a88e-487a-981a-0e4cb6142904").greaterThan(50).matches();
  
  if(condition11 ){
    validationErrors.push("Sould be 50, or less than 50");  
}
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "declarativeRule": [
            {
              "actions": [
                {
                  "details": {
                    "validationError": "Sould be 50, or less than 50"
                  },
                  "actionType": "validationError"
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
                          "conceptName": "Weight",
                          "conceptUuid": "8b187dda-a88e-487a-981a-0e4cb6142904",
                          "conceptDataType": "Numeric"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 50
                        },
                        "operator": "greaterThan"
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
          "uuid": "1d9ca058-6b4f-4d9f-924f-e85ca100824e",
          "keyValues": [],
          "concept": {
            "name": "Height",
            "uuid": "346902c4-9938-4ba5-90d1-587f36f1ab92",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 40,
            "highAbsolute": 150,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Nutritional Status",
          "uuid": "215b4043-cc6a-4036-9814-bce8db726f92",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Nutritional Status",
            "uuid": "053b4f97-eacf-4f20-9d68-d6850966ce93",
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
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
    const height = programEncounter.getObservationValue("Height");
    const weight = programEncounter.getObservationValue("Weight");
    const asOnDate = programEncounter.encounterDateTime;
    const individual = programEncounter.programEnrolment.individual;
    const age = programEncounter.programEnrolment.individual.getAgeInMonths();

    const addIfRequired = (decisions, name, value) => {
        if (value === -0) value = 0;
        if (value !== undefined) decisions.push({name: name, value: value});
    };

    const getGradeforZscore = (zScore) => {
        let grade;
        if (zScore <= -3) {
            grade = 3;
        } else if (zScore > -3 && zScore < -2) {
            grade = 2;
        } else if (zScore >= -2) {
            grade = 1;
        }
        return grade;
    };

    const zScoresForChild = ruleServiceLibraryInterfaceForSharingModules.common.getZScore(individual, asOnDate, weight, height);

    const zScoreGradeStatusMappingWeightForHeight = [
        ["SAM", -3],
        ["MAM", -2],
        ["Normal", 1],
        ["Normal", 2],
        ["Normal", 3],
        ["Normal", Infinity],
    ];

    const weightForHeightStatus = function (zScore) {
        let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
            return zScore <= currentStatus[1];
        });
        return found && found[0];
    };

    const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);
    const wfhGrade = getGradeforZscore(zScoresForChild.wfh);
    
    value = wfhStatus;

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Growth Faltering",
          "uuid": "9bb2c8dc-7e97-49bd-82de-c1856d2e6534",
          "keyValues": [
            {
              "key": "editable",
              "value": false
            }
          ],
          "concept": {
            "name": "Growth Faltering",
            "uuid": "a9d8db9a-8411-412c-82ed-e6e177353561",
            "dataType": "Text",
            "answers": [],
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

    const encounters = programEncounter.programEnrolment.getEncountersOfType('Growth Monitoring');
    let enc1 = _.chain(encounters)
        .filter((enc) => !_.isNil(enc.encounterDateTime) && !_.isNil(enc.earliestVisitDateTime) && _.isNil(enc.cancelDateTime))
        .filter((enc) => enc.uuid !== programEncounter.uuid)
        .filter((enc) => enc.encounterDateTime < programEncounter.encounterDateTime)
        .sortBy((enc) => -imports.moment(enc.earliestVisitDateTime)) 
        .nth(0)
        .value();

    let enc2 = _.chain(encounters)
        .filter((enc) => !_.isNil(enc.encounterDateTime) && !_.isNil(enc.earliestVisitDateTime) && _.isNil(enc.cancelDateTime))
        .filter((enc) => enc.uuid !== programEncounter.uuid)
        .filter((enc) => enc.encounterDateTime < programEncounter.encounterDateTime)
        .sortBy((enc) => -imports.moment(enc.earliestVisitDateTime))
        .nth(1)
        .value();

    let enc1Weight = null, enc2Weight = null;
    let currentWeight = programEncounter.getObservationReadableValue('Weight');
    if (enc1) {
        enc1Weight = enc1.getObservationReadableValue('Weight');
        
    }
    if (enc2) {
        enc2Weight = enc2.getObservationReadableValue('Weight');
        
    }
     
    if(enc1Weight && enc2Weight && (currentWeight <= enc1Weight) && (enc1Weight <= enc2Weight)){
          value = "GF2"; // If current weight is less than the second last 2 weights, GF status is GF2 
    } else if(enc1Weight && (currentWeight <= enc1Weight)){
          value = "GF1"; // If current weight is less than the last weight, GF status is GF1
    } else {
          value = "None";
    }

    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is the child going to PPK?",
          "uuid": "c84d73c2-6735-4189-b0a5-b75d6525239e",
          "keyValues": [],
          "concept": {
            "name": "Is the child going to PPK?",
            "uuid": "41366f6d-6263-4fb1-a182-edd6cb109667",
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
  let visibility = false;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  //const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.greaterThanOrEqualTo(36).and.when.ageInMonths.lessThanOrEqualTo(60).matches();
  let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'months');

  
  let condition11 =  (age >= 36) && (age<=60);
  
  let condition12 = false;
  
  
  const locationProperties = programEncounter.programEnrolment.individual.lowestAddressLevel.locationProperties;  
  
  if(locationProperties.length > 0){
     const locationProperty = locationProperties.filter(prop=>prop.concept.name == 'PPK Village');
     if(locationProperty.length==1){
         const valueJSON = locationProperty[0].valueJSON;
         const answer = JSON.parse(valueJSON).answer;
         if(answer=="8ebbf088-f292-483e-9084-7de919ce67b7"){
            condition12 = true;
         } 
     }
  }
  
  visibility = condition11 && condition12;
  
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is the child going to Creche?",
          "uuid": "c81f70de-ec0e-432e-a2dd-d567036dfe00",
          "keyValues": [],
          "concept": {
            "name": "Is the child going to Creche?",
            "uuid": "d248cf77-2051-4501-935c-10e718df7f6e",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Ombardc",
                "uuid": "b31c3757-f91d-4bde-ae30-3591633e0484",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "STSC department",
                "uuid": "e59be2f8-18e5-462f-8d15-b8ad650f4c64",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "No Creche",
                "uuid": "6d410210-65a6-4b01-bd09-2b888782a17c",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "RCI",
                "uuid": "8069a1cc-90d7-4e0f-98eb-97ee508ef795",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "DMF",
                "uuid": "30cafc2e-b87b-4a8f-8602-ce7e32e64676",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "WCD department",
                "uuid": "26806613-fb24-4364-a4ea-b40f24299163",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
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
  
    let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'months');

  
  const condition11 = (age >= 7) && (age<=36);
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is the child being currently exclusively breastfed?",
          "uuid": "bf31d84b-4417-4c8f-a3de-034ce765cdee",
          "keyValues": [],
          "concept": {
            "name": "Is the child being currently exclusively breastfed?",
            "uuid": "da2b553e-a445-40d0-8190-1b4767004211",
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
    let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'months');

  
  const condition11 = (age <= 6);
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is the child being currently breastfed?",
          "uuid": "8c4dab0e-245a-4f19-925b-5916eaa4a41c",
          "keyValues": [],
          "concept": {
            "name": "Is the child being currently breastfed?",
            "uuid": "c3d795ce-ce22-425e-a20d-7596d1d7b73a",
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
  
    let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'months');

  
  const condition11 = (age >= 7) && (age <=24);
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Number of days attended AWC (last month)",
          "uuid": "1d023c01-b319-4eb2-97af-ab04688611c3",
          "keyValues": [],
          "concept": {
            "name": "Number of day attended AWC (last month)",
            "uuid": "829e4938-92d7-4277-a1fe-56acaa67d5b4",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 0,
            "highAbsolute": 32,
            "active": true
          },
          "displayOrder": 9,
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
  
    let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'years');

  
  const condition11 = (age >= 3 ) && (age<=5);
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        },
        {
          "name": "Is the mother receiving THR from AWC in last month?",
          "uuid": "a18f2fb7-eceb-4994-9633-3db4d95d68c0",
          "keyValues": [],
          "concept": {
            "name": "Is the mother receiving THR from AWC in last month?",
            "uuid": "2165a161-887b-4479-9ddb-7cf22d57cf9d",
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
    let age = moment(programEncounter.earliestVisitDateTime).diff(programEncounter.programEnrolment.individual.dateOfBirth,'months');

  
  const condition11 = (age < 7);
  
  visibility = condition11 ;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is the child continiously breast fed upto 2 years?",
          "uuid": "f519966b-d12f-446e-9fc8-dc1fe90415ec",
          "keyValues": [],
          "concept": {
            "name": "Is the child continiously breast fed upto 2 years?",
            "uuid": "38d6c4c3-22be-458a-b7be-c38cf0c9db08",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInYears.greaterThanOrEqualTo(3).and.when.ageInYears.lessThanOrEqualTo(6).matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 3
                        },
                        "operator": "greaterThanOrEqualTo"
                      },
                      {
                        "lhs": {
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "lessThanOrEqualTo"
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
          "name": "Is the child receiving THR from AWC in last month?",
          "uuid": "972cae5a-fa84-4ec0-bf45-6f14beb2eefa",
          "keyValues": [],
          "concept": {
            "name": "Is the child receiving THR from AWC",
            "uuid": "8bb34e68-b3f1-4168-940c-219b699e6fe5",
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

  const calculateAgeInYears = (birthDate, referenceDate) => {
  
    const birth = moment(birthDate).startOf('day');
    const reference = moment(referenceDate).startOf('day');

    const ageInYears = reference.diff(birth, 'years', true);
    
    return ageInYears;
  };
  
  const dateOfBirth = programEncounter.programEnrolment.individual.dateOfBirth;
  const earliestVisitDateTime = programEncounter.earliestVisitDateTime;

  let age = calculateAgeInYears(dateOfBirth, earliestVisitDateTime);
  
  visibility = age <= 3;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is the child receiving egg from AWC in last month?",
          "uuid": "90362cbd-c0d1-4dd3-b78a-ef9dacea08fc",
          "keyValues": [],
          "concept": {
            "name": "Is the child receiving egg from AWC",
            "uuid": "45644b33-e398-4686-94ca-11837acbe5c9",
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
          "displayOrder": 13,
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

  const calculateAgeInYears = (birthDate, referenceDate) => {
  
    const birth = moment(birthDate).startOf('day');
    const reference = moment(referenceDate).startOf('day');

    const ageInYears = reference.diff(birth, 'years', true);
    
    return ageInYears;
  };
  
  const dateOfBirth = programEncounter.programEnrolment.individual.dateOfBirth;
  const earliestVisitDateTime = programEncounter.earliestVisitDateTime;

  let age = calculateAgeInYears(dateOfBirth, earliestVisitDateTime);
  
  visibility = age <= 3;
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Did the child attended VHND last month?",
          "uuid": "f2e5296d-0849-4d39-b58d-94d4eb8539fd",
          "keyValues": [],
          "concept": {
            "name": "Did the child attended VHND last month",
            "uuid": "7e4d3545-27a5-4598-a703-50fc5907faa3",
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
          "mandatory": false
        },
        {
          "name": "Is the child receiving additional THR for SUW in last month?",
          "uuid": "9d1a531b-a916-4ae9-adda-586133975365",
          "keyValues": [],
          "concept": {
            "name": "Is the child receiving additional THR for SUW in last month?",
            "uuid": "76f772ca-aa9d-4fdc-9606-e5310f62bf02",
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
              },
              {
                "name": "NA",
                "uuid": "a1da52a7-f587-4f8f-9349-2d4ee4dae563",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 15,
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInYears.greaterThanOrEqualTo(3).and.when.ageInYears.lessThanOrEqualTo(6).matches();
  
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
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 3
                        },
                        "operator": "greaterThanOrEqualTo"
                      },
                      {
                        "lhs": {
                          "type": "ageInYears"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "lessThanOrEqualTo"
                      }
                    ],
                    "conjunction": "and"
                  }
                }
              ]
            }
          ],
          "mandatory": false
        },
        {
          "name": "What is the treatment advise for the SAM/MAM/GF2 child?",
          "uuid": "d86586fa-2826-4f0a-b3d8-ebc526cd113c",
          "keyValues": [],
          "concept": {
            "name": "What is the treatment advise for the SAM/MAM/GF2 child?",
            "uuid": "2f136d99-f500-4710-89fe-d8007c977843",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Any other higher facility/DH/MC",
                "uuid": "48b9d172-fa2d-45c4-ba54-842517202c72",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Treatment at home",
                "uuid": "397f526d-9247-4b3b-bb09-27c4e21fd062",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Referred to CHC",
                "uuid": "3dd2c48c-7b49-4972-be04-b9deb1c3fe84",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("053b4f97-eacf-4f20-9d68-d6850966ce93").equals("SAM").or.when.valueInEncounter("053b4f97-eacf-4f20-9d68-d6850966ce93").equals("MAM").or.when.valueInEncounter("a9d8db9a-8411-412c-82ed-e6e177353561").equals("GF2").matches();
  
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
                          "conceptName": "Nutritional Status",
                          "conceptUuid": "053b4f97-eacf-4f20-9d68-d6850966ce93",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "SAM"
                        },
                        "operator": "equals"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Nutritional Status",
                          "conceptUuid": "053b4f97-eacf-4f20-9d68-d6850966ce93",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "MAM"
                        },
                        "operator": "equals"
                      },
                      {
                        "lhs": {
                          "type": "concept",
                          "scope": "encounter",
                          "conceptName": "Growth Faltering",
                          "conceptUuid": "a9d8db9a-8411-412c-82ed-e6e177353561",
                          "conceptDataType": "Text"
                        },
                        "rhs": {
                          "type": "value",
                          "value": "GF2"
                        },
                        "operator": "equals"
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
          "name": "Place of decision/advise",
          "uuid": "d3ae0c5d-8b09-479e-a0ba-4f45042f8eda",
          "keyValues": [],
          "concept": {
            "name": "Place of decision/advise",
            "uuid": "91c0799a-848d-480d-8fea-a44bd6ecc681",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Immunization Day",
                "uuid": "26a07970-c7f4-47e1-bc9e-3effe3ac96fb",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Over a phone call to ANM",
                "uuid": "a0232b48-ff54-4264-8294-3483d8cb9450",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "AWC",
                "uuid": "e842c1f9-138d-4b00-9e6d-59d7cc114e66",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "VHSND",
                "uuid": "dde6f1c8-e34e-4d80-8ebb-8e6783fd8da6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "SAM Child Home",
                "uuid": "4d9c84d7-1f70-4e0e-acf9-d42fd4cef72c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Others (please specify)",
                "uuid": "95ad204b-e263-4c3a-ac0a-adc68c75b8f2",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              }
            ],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("2f136d99-f500-4710-89fe-d8007c977843").defined.matches();
  
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
                          "conceptName": "What is the treatment advise for the SAM/MAM/GF2 child?",
                          "conceptUuid": "2f136d99-f500-4710-89fe-d8007c977843",
                          "conceptDataType": "Coded"
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
          "mandatory": true
        },
        {
          "name": "Others, please specify place of decision/advise",
          "uuid": "9de6cca9-46e3-478f-a203-861f9b808f61",
          "keyValues": [],
          "concept": {
            "name": "Others, please specify place of decision/advise",
            "uuid": "aa1890c9-f8fd-4a9d-8a73-2aa5a9e945b8",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("91c0799a-848d-480d-8fea-a44bd6ecc681").containsAnswerConceptName("95ad204b-e263-4c3a-ac0a-adc68c75b8f2").matches();
  
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
                          "conceptName": "Place of decision/advise",
                          "conceptUuid": "91c0799a-848d-480d-8fea-a44bd6ecc681",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Others (please specify)"
                          ],
                          "answerConceptUuids": [
                            "95ad204b-e263-4c3a-ac0a-adc68c75b8f2"
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
          "name": "Is the child enrolled in the CMAM program?",
          "uuid": "f729e0b3-0d1f-4d43-9d9a-93fe9463a87a",
          "keyValues": [],
          "concept": {
            "name": "Is the child enrolled in the CMAM program?",
            "uuid": "001b3307-731e-4606-a8f4-9aaa1e264000",
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
          "displayOrder": 19,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const earliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
    const formElement = params.formElement;
    const _ = imports.lodash;
    let visibility = true;
    let value = null;
    let answersToSkip = [];
    let validationErrors = [];

    function hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter){
        let growthMonitoringEncounters = programEncounter.programEnrolment.getEncounters()
            .filter((enc) => 
                enc.encounterType.name === 'Growth Monitoring' && 
                enc.voided === false &&
                enc.uuid !== programEncounter.uuid
            );
          
        let subsequentGrowthMonitoringEncounters = [];
        
        growthMonitoringEncounters.forEach((enc) => {

            if (earliestVisitDateTime.isAfter(moment(enc.earliestVisitDateTime))) {
                subsequentGrowthMonitoringEncounters.push(enc);
            }
        });

        if(subsequentGrowthMonitoringEncounters.length == 0) return false;

        subsequentGrowthMonitoringEncounters = subsequentGrowthMonitoringEncounters.slice(0, 3);

        return subsequentGrowthMonitoringEncounters.some((enc) => enc.getObservationReadableValue('001b3307-731e-4606-a8f4-9aaa1e264000') === 'Yes');
    }
    
    function hasEverBeenEnrolledInCMAM(programEncounter){
        let growthMonitoringEncounters = programEncounter.programEnrolment.getEncounters()
            .filter((enc) => 
                enc.encounterType.name === 'Growth Monitoring' && 
                enc.voided === false && 
                enc.uuid !== programEncounter.uuid
            );
        
        if(growthMonitoringEncounters.length == 0) return false;

        return growthMonitoringEncounters.some((enc) => enc.getObservationReadableValue('001b3307-731e-4606-a8f4-9aaa1e264000') === 'Yes');
    }

    const treatmentAtHome = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("2f136d99-f500-4710-89fe-d8007c977843").containsAnswerConceptName("397f526d-9247-4b3b-bb09-27c4e21fd062").matches();

    visibility = treatmentAtHome && (!hasEverBeenEnrolledInCMAM(programEncounter) || !hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter));
  
    return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Is the child availing benefits (ATHR) under the CMAM program?",
          "uuid": "a99d4076-5c27-4f39-ade6-94c0e13c579a",
          "keyValues": [],
          "concept": {
            "name": "Is the child availing benefits (ATHR) under the CMAM program?",
            "uuid": "98e9c3ab-b6f5-4292-bc10-009cd27bb689",
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
          "displayOrder": 20,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const earliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  function hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter){
    let growthMonitoringEncounters = programEncounter.programEnrolment.getEncounters()
        .filter((enc) => 
            enc.encounterType.name === 'Growth Monitoring' && 
            enc.voided === false &&
            enc.uuid !== programEncounter.uuid
        );
      
    let subsequentGrowthMonitoringEncounters = [];
    
    growthMonitoringEncounters.forEach((enc) => {

        if (earliestVisitDateTime.isAfter(moment(enc.earliestVisitDateTime))) {
            subsequentGrowthMonitoringEncounters.push(enc);
        }
    });

    if(subsequentGrowthMonitoringEncounters.length == 0) return false;

    subsequentGrowthMonitoringEncounters = subsequentGrowthMonitoringEncounters.slice(0, 3);

    return subsequentGrowthMonitoringEncounters.some((enc) => enc.getObservationReadableValue('001b3307-731e-4606-a8f4-9aaa1e264000') === 'Yes');
  }
  
  const hasBeenEnrolledInCMAM = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("001b3307-731e-4606-a8f4-9aaa1e264000").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  const ageLessThanOrEqualTo5 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInYears.lessThanOrEqualTo(5).matches();
  
  visibility = ageLessThanOrEqualTo5 && (hasBeenEnrolledInCMAM || hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter))
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": true
        },
        {
          "name": "Did you receive additional THR (MSPY)?",
          "uuid": "22cc5204-3108-4e7a-88fd-aa48b5a7c474",
          "keyValues": [],
          "concept": {
            "name": "Did you receive additional THR (MSPY)?",
            "uuid": "914f2acc-d449-4911-a14f-82c4d51ad20a",
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
          "displayOrder": 21,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const earliestVisitDateTime = moment(programEncounter.earliestVisitDateTime);
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];

  function hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter){
    let growthMonitoringEncounters = programEncounter.programEnrolment.getEncounters()
        .filter((enc) => 
            enc.encounterType.name === 'Growth Monitoring' && 
            enc.voided === false &&
            enc.uuid !== programEncounter.uuid
        );
      
    let subsequentGrowthMonitoringEncounters = [];
    
    growthMonitoringEncounters.forEach((enc) => {

        if (earliestVisitDateTime.isAfter(moment(enc.earliestVisitDateTime))) {
            subsequentGrowthMonitoringEncounters.push(enc);
        }
    });

    if(subsequentGrowthMonitoringEncounters.length == 0) return false;

    subsequentGrowthMonitoringEncounters = subsequentGrowthMonitoringEncounters.slice(0, 3);

    return subsequentGrowthMonitoringEncounters.some((enc) => enc.getObservationReadableValue('001b3307-731e-4606-a8f4-9aaa1e264000') === 'Yes');
  }
  
  const hasBeenEnrolledInCMAM = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInEncounter("001b3307-731e-4606-a8f4-9aaa1e264000").containsAnswerConceptName("8ebbf088-f292-483e-9084-7de919ce67b7").matches();
  
  const ageInMonthLessThanOrEqualTo6 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.ageInMonths.lessThanOrEqualTo(6).matches();
  
  visibility = ageInMonthLessThanOrEqualTo6 && (hasBeenEnrolledInCMAM || hasBeenEnrolledInCMAMDuringLast4Encounters(programEncounter))
  
  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors);
},
          "mandatory": false
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule" : 
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const _ = imports.lodash;
    const decisions = params.decisions;
    const complicationsBuilderForWFA = new imports.rulesConfig.complicationsBuilder({
            programEncounter: programEncounter,
            complicationsConcept: "Weight for age z-score"
        },
        {
            programEnrolment: programEncounter,
            complicationsConcept: "High risk condition"
        });

    const height = programEncounter.getObservationValue("Height");
    const weight = programEncounter.getObservationValue("Weight");
    const asOnDate = programEncounter.encounterDateTime;
    const individual = programEncounter.programEnrolment.individual;
    const age = programEncounter.programEnrolment.individual.getAgeInMonths();

    const addIfRequired = (decisions, name, value) => {
        if (value === -0) value = 0;
        if (value !== undefined) decisions.push({name: name, value: value});
    };

    const getGradeforZscore = (zScore) => {
        let grade;
        if (zScore <= -3) {
            grade = 3;
        } else if (zScore > -3 && zScore < -2) {
            grade = 2;
        } else if (zScore >= -2) {
            grade = 1;
        }
        return grade;
    };

    const zScoresForChild = ruleServiceLibraryInterfaceForSharingModules.common.getZScore(individual, asOnDate, weight, height);

    const zScoreGradeStatusMappingWeightForAge = {
        '1': 'Normal',
        '2': 'Moderately Underweight',
        '3': 'Severely Underweight'
    };

    const zScoreGradeStatusMappingHeightForAge = {
        '1': 'Normal',
        '2': 'Stunted',
        '3': 'Severely stunted'
    };

    const zScoreGradeStatusMappingWeightForHeight = [
        ["SAM", -3],
        ["MAM", -2],
        ["Normal", 1],
        ["Normal", 2],
        ["Normal", 3],
        ["Normal", Infinity],
    ];

    const weightForHeightStatus = function (zScore) {
        let found = _.find(zScoreGradeStatusMappingWeightForHeight, function (currentStatus) {
            return zScore <= currentStatus[1];
        });
        return found && found[0];
    };


    const wfaGrade = getGradeforZscore(zScoresForChild.wfa);
    const wfaStatus = zScoreGradeStatusMappingWeightForAge[wfaGrade];
    const wfaZScore= zScoresForChild.wfa;



    const wfhStatus = weightForHeightStatus(zScoresForChild.wfh);
    const wfhGrade = getGradeforZscore(zScoresForChild.wfh)

    const hfaGrade = getGradeforZscore(zScoresForChild.hfa);
    const hfaZScore = zScoresForChild.hfa;
    const hfaStatus = zScoreGradeStatusMappingHeightForAge[hfaGrade];

    addIfRequired(decisions.encounterDecisions, "Weight for age z-score", zScoresForChild.wfa);
    addIfRequired(decisions.encounterDecisions, "Weight for age Grade", wfaGrade);
    addIfRequired(decisions.encounterDecisions, "Weight for age Status", wfaStatus ? [wfaStatus] : []);

    addIfRequired(decisions.encounterDecisions, "Height for age z-score", zScoresForChild.hfa);
    addIfRequired(decisions.encounterDecisions, "Height for age Grade", hfaGrade);
    addIfRequired(decisions.encounterDecisions, "Height for age Status", hfaStatus ? [hfaStatus] : []);


    addIfRequired(decisions.encounterDecisions, "Weight for height z-score", zScoresForChild.wfh);
    addIfRequired(decisions.encounterDecisions, "Weight for Height Status", wfhStatus ? [wfhStatus] : []);


    const isTreatmentNotAtHome = programEncounter.getObservationValue("What is the treatment advise for the SAM/MAM/GF2 child?") ? programEncounter.getObservationReadableValue("What is the treatment advise for the SAM/MAM/GF2 child?") != "Treatment at home" : false;
    const latest = programEncounter.programEnrolment.lastFulfilledEncounter("Growth Monitoring","QRT Child","Child Home Visit");


    if(latest === undefined || programEncounter.uuid === latest.uuid || moment(programEncounter.encounterDateTime).isAfter(moment(latest.encounterDateTime))){

        if(wfhStatus == "SAM" || isTreatmentNotAtHome){
            decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "Yes"});
            decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "Yes"});
            decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "Yes"});
        }else {
            decisions.registrationDecisions.push({name : "To be monitored by QRT", value : "No"});
            decisions.enrolmentDecisions.push({name : "To be monitored by QRT", value : "No"});
            decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
        }
    }else {
        if(wfhStatus == "SAM" || isTreatmentNotAtHome){
            decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "Yes"});
        }else {
            decisions.encounterDecisions.push({name : "To be monitored by QRT", value : "No"});
        }
    }
    
    // Pushing decisions to the registration for the optimizing performance of offlne dashborad cards
  
let allEnc = programEncounter.programEnrolment.getEncounters();
let growthEnc = allEnc.filter(enc => enc.encounterType.name == 'Growth Monitoring' && enc.encounterDateTime != null && enc.uuid == programEncounter.uuid)

const latest = programEncounter.programEnrolment.lastFulfilledEncounter("Growth Monitoring");

let pushRegDecision = (growthEnc) => {

  //  if (growthEnc.length == 0) {
    if(latest === undefined || programEncounter.uuid === latest.uuid || imports.moment(programEncounter.encounterDateTime).isAfter(imports.moment(latest.encounterDateTime)))
    {
        decisions.registrationDecisions.push({
            name: "Growth Faltering",
            value: programEncounter.getObservationValue("Growth Faltering")
        })
        if (wfhStatus) {
            decisions.registrationDecisions.push({name: "Nutritional Status", value: wfhStatus})
        }

        let cmamEnroll = programEncounter.getObservationReadableValue("Is the child enrolled in the CMAM program?");
        if (cmamEnroll) {
            decisions.registrationDecisions.push({
                name: "Is the child enrolled in the CMAM program?",
                value: cmamEnroll
            })
        }
    }

}
pushRegDecision(growthEnc)

    
    return decisions;
},
  "visitScheduleRule" : 
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const isMaxVisitDateTimeGreaterThanToday = moment(programEncounter.maxVisitDateTime).isBefore(moment(), 'day');

  if (isMaxVisitDateTimeGreaterThanToday) {
    validationResults.push(imports.common.createValidationError("You cannot complete an overdue visit. Please cancel this visit."));  
  }
  
  return validationResults;
},
  "checklistsRule": "",
  "decisionConcepts": [
    {
      "name": "Weight for age Status",
      "uuid": "efeb0a0b-aea4-4af1-9bc4-37d86bc865a1",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Moderately Underweight",
          "uuid": "f2a4a610-c96e-454b-8c5c-cd8fad2feeb6",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severely Underweight",
          "uuid": "4b855734-921c-4796-a752-39b3ede1c66c",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Normal",
          "uuid": "422604be-5776-4050-a779-9221935d6f7c",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    },
    {
      "name": "Weight for height z-score",
      "uuid": "84e6fe5e-5968-48df-bc51-9b151714e9be",
      "dataType": "Numeric",
      "answers": [],
      "active": true,
      "keyValues": []
    },
    {
      "name": "Height for age Status",
      "uuid": "3d4d5c56-8b3d-449c-9971-67712b6ca95c",
      "dataType": "Coded",
      "answers": [
        {
          "name": "Moderately Underweight",
          "uuid": "f2a4a610-c96e-454b-8c5c-cd8fad2feeb6",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Stunted",
          "uuid": "5c2109f2-c6ad-41bb-a055-e032d993bad5",
          "dataType": "NA",
          "answers": [],
          "order": 3,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Severely Underweight",
          "uuid": "4b855734-921c-4796-a752-39b3ede1c66c",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Normal",
          "uuid": "422604be-5776-4050-a779-9221935d6f7c",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "active": true
        },
        {
          "name": "Severely stunted",
          "uuid": "d21b3fcb-4272-44d0-b6f1-0f32437a492a",
          "dataType": "NA",
          "answers": [],
          "order": 4,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    },
    {
      "name": "To be monitored by QRT",
      "uuid": "be0ab05f-b0f3-43ec-b598-fdde0679104a",
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
      "active": true,
      "keyValues": []
    },
    {
      "name": "Weight for Height Status",
      "uuid": "2a2027c1-cec9-4237-a53a-80d6b1047979",
      "dataType": "Coded",
      "answers": [
        {
          "name": "SAM",
          "uuid": "7d0229c1-e69e-4cac-8937-cdd48c8ed9dd",
          "dataType": "NA",
          "answers": [],
          "order": 0,
          "abnormal": true,
          "active": true
        },
        {
          "name": "Normal",
          "uuid": "422604be-5776-4050-a779-9221935d6f7c",
          "dataType": "NA",
          "answers": [],
          "order": 2,
          "active": true
        },
        {
          "name": "MAM",
          "uuid": "da518460-f4ab-4fcb-89ae-3526619d43c5",
          "dataType": "NA",
          "answers": [],
          "order": 1,
          "abnormal": true,
          "active": true
        }
      ],
      "active": true,
      "keyValues": []
    }
  ]
}