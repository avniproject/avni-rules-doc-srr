{
  "name": "Checklist Form",
  "uuid": "5f615cf0-e475-47a3-8638-7df487e3362c",
  "formType": "ChecklistItem",
  "formElementGroups": [
    {
      "uuid": "7efb38a5-09d0-4db1-829e-d72dad09ebc5",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Place of Vaccination",
          "uuid": "a1d3f1b7-7cb8-4749-bc22-4705eb2af573",
          "keyValues": [],
          "concept": {
            "name": "Place of Vaccination",
            "uuid": "3a62ecce-fff3-4749-a6e6-96a182dd0893",
            "dataType": "Coded",
            "answers": [
              {
                "name": "AWC/ VHND",
                "uuid": "ff8b3ed2-b326-4eee-9a21-cc8b54c71408",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "PHC",
                "uuid": "19891cc9-2dc5-47b9-8a42-30d7bb63934c",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              },
              {
                "name": "Sub Centre",
                "uuid": "3a95fc4a-2247-41c4-8837-798f14bfc6b3",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Home",
                "uuid": "b0a00c8b-b190-41a0-8b65-1afb0db00a81",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "CHC",
                "uuid": "7f0d8995-6b14-4d2c-b285-9e1c0bb3d03b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Medical college",
                "uuid": "5593bab8-8a8f-4c65-a358-e7e5daae4c55",
                "dataType": "NA",
                "answers": [],
                "order": 4,
                "active": true
              },
              {
                "name": "Other",
                "uuid": "f169230d-809b-4d06-9ccb-96586977bb68",
                "dataType": "NA",
                "answers": [],
                "order": 7,
                "active": true
              },
              {
                "name": "DH",
                "uuid": "aeff17ad-99ba-423a-8754-d1430836d178",
                "dataType": "NA",
                "answers": [],
                "order": 3,
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
          "name": "Specify Other",
          "uuid": "dc1db0cf-0233-4a89-8893-42729ecf9496",
          "keyValues": [],
          "concept": {
            "name": "Specify Other place of vaccination",
            "uuid": "e339f45b-28c1-4b87-98bf-19757b862e43",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const checklistItem = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let validationErrors = [];
  
  const condition11 = new imports.rulesConfig.RuleCondition({checklistItem, formElement}).when.valueInChecklistItem("3a62ecce-fff3-4749-a6e6-96a182dd0893").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "scope": "checklistItem",
                          "conceptName": "Place of Vaccination",
                          "conceptUuid": "3a62ecce-fff3-4749-a6e6-96a182dd0893",
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
          "mandatory": true
        }
      ],
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}