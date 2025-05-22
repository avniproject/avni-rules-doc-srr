{
  "name": "Child Enrolment",
  "uuid": "4a35c83e-f7a0-4181-b839-7983923a914d",
  "formType": "ProgramEnrolment",
  "formElementGroups": [
    {
      "uuid": "d3160851-266f-4fed-8bf1-896e0b2e20a5",
      "name": "Enrolment Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Place of birth",
          "uuid": "742e8872-23e9-4367-a382-5f790639b9da",
          "keyValues": [],
          "concept": {
            "name": "Place of birth",
            "uuid": "c720943f-4091-47e2-bced-50a91fc453fe",
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
                "name": "Home",
                "uuid": "b0a00c8b-b190-41a0-8b65-1afb0db00a81",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Hospital",
                "uuid": "b6b1a9cb-4b5f-42c7-b27c-39b9ab92107f",
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
          "name": "Birth weight",
          "uuid": "67be9f40-b74e-4b6c-9720-97f5e240cbed",
          "keyValues": [],
          "concept": {
            "name": "Birth weight",
            "uuid": "536f46bc-8beb-42d7-a7ed-2958b21a9021",
            "dataType": "Numeric",
            "answers": [],
            "lowAbsolute": 1,
            "highAbsolute": 15,
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Timely initiation of Breast feeding",
          "uuid": "55c6aa1a-86c4-4bfd-b2a6-9577ba9b8927",
          "keyValues": [],
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
          "displayOrder": 3,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the child exclusively breastfed till 6 months?",
          "uuid": "2990dd14-88d8-4f44-b380-b8290f664337",
          "keyValues": [],
          "concept": {
            "name": "Is the child exclusively breastfed til 6 months",
            "uuid": "23e53b0d-2e6b-4a07-a57c-7d065ee017d5",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.ageInMonths.greaterThanOrEqualTo(6).matches();
  
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
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "greaterThanOrEqualTo"
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
          "name": "Is Annaprassan done for the child at 6 months?",
          "uuid": "7ad0d433-3fc7-47e2-8b5e-47cb4397772d",
          "keyValues": [],
          "concept": {
            "name": "Is Annaprassan done for the child at 6 months",
            "uuid": "4ee74b7c-5685-446d-ba73-5496e159e1f4",
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
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.ageInMonths.greaterThanOrEqualTo(6).matches();
  
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
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 6
                        },
                        "operator": "greaterThanOrEqualTo"
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
          "name": "Is the child registered under poshan tracker?",
          "uuid": "c2533488-eb3e-476c-a4a7-e3ae8fb1aa52",
          "keyValues": [],
          "concept": {
            "name": "Is the child registered under poshan tracker?",
            "uuid": "48fe0fb6-31b9-402f-9671-07554570ce81",
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
          "displayOrder": 6,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Is the child Breast feed til 2 years?",
          "uuid": "86c70cc5-3ee6-4457-8e96-ac0184521a2a",
          "keyValues": [],
          "concept": {
            "name": "Is the child Breast feed til 2 years",
            "uuid": "7a01cfe5-9296-42a6-8585-c0e441206e5c",
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
  const programEnrolment = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEnrolment, formElement}).when.ageInMonths.greaterThanOrEqualTo(24).matches();
  
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
                          "type": "ageInMonths"
                        },
                        "rhs": {
                          "type": "value",
                          "value": 24
                        },
                        "operator": "greaterThanOrEqualTo"
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
          "name": "Is the child migrated?",
          "uuid": "1b948d54-8a96-4ce8-97e1-aab10d52069c",
          "keyValues": [],
          "concept": {
            "name": "Is the child migrated?",
            "uuid": "46fb33ba-2d93-4674-932e-f3f644353abc",
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
          "mandatory": false
        }
      ],
      "display": "Enrolment Details",
      "timed": false
    }
  ],
  "decisionRule" : 
({params, imports}) => {
  let vaccination = params.checklistDetails.find(cd => cd.name === 'Vaccination');
  if (vaccination === undefined) return [];
  

  const vaccinationList = {
    baseDate: params.entity.individual.dateOfBirth,
    detail: {uuid: vaccination.uuid},
    items: vaccination.items.map(vi => ({
      detail: {uuid: vi.uuid}
    }))
  };

  return [vaccinationList];
  
}
,
  "decisionConcepts": [
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
    }
  ]
}