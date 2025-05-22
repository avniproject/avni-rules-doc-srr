{
  "name": "Volunteer Registration",
  "uuid": "3585b468-0ff4-4979-881f-72e243e15db9",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "bc4e2a9f-b962-4067-ba7b-47f6da33d787",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Phone Number",
          "uuid": "ff8450c9-1dcf-42d0-815c-8ab4e7bd3b92",
          "keyValues": [],
          "concept": {
            "name": "Phone Number (voided~259989)",
            "uuid": "690172d4-9bdc-423d-9125-9243c7c95202",
            "dataType": "Numeric",
            "answers": [],
            "highAbsolute": 10,
            "active": true,
            "voided": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "voided": true,
          "mandatory": true
        },
        {
          "name": "Phone Number",
          "uuid": "ceb4ca6f-5517-4877-a7ac-a8c187d89fe5",
          "keyValues": [],
          "concept": {
            "name": "Phone",
            "uuid": "11394907-2df2-474e-919d-c3ddc393305f",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 2,
          "type": "SingleSelect",
          "validFormat": {
            "regex": "^[6-9]\\d{9}$",
            "descriptionKey": "The phone number must start with digits 6, 7, 8, or 9 and should be 10 digits"
          },
          "mandatory": true
        },
        {
          "name": "Social Category",
          "uuid": "1aa8c32d-b185-486a-8161-232292792277",
          "keyValues": [],
          "concept": {
            "name": "SocialCategory",
            "uuid": "c4f408b3-0112-4d12-af14-b5bbd25591c7",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Campaign Subject",
                "uuid": "87b53f71-b277-43d6-b891-59a58dfb3fb7",
                "dataType": "Subject",
                "answers": [],
                "order": 4,
                "active": true,
                "keyValues": [
                  {
                    "key": "subjectTypeUUID",
                    "value": "0ab6edd4-2a80-4ce9-9bfa-0464cb4ae6b0"
                  }
                ]
              },
              {
                "name": "General",
                "uuid": "d715cc92-9661-4885-88cc-aa240d41116d",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "SC",
                "uuid": "dc5d596d-3f05-4a48-ae28-a9faf4155a18",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "OBC",
                "uuid": "b835d5c4-8843-4396-98cb-08454f923a28",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "ST",
                "uuid": "5f88add0-3407-48cc-ba89-5f9218aa6e5a",
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
          "name": "Main livelihood",
          "uuid": "0da58f1a-5535-436e-bfe2-d06516feefc0",
          "keyValues": [],
          "concept": {
            "name": "MainLivelihood",
            "uuid": "3ec84c90-a614-4710-824c-321aa4fcccf3",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 4,
          "type": "SingleSelect",
          "mandatory": true
        },
        {
          "name": "Whether associated with any other NGO/GO/Samooh",
          "uuid": "de8030ad-12da-446e-b63d-0b869154a3b1",
          "keyValues": [],
          "concept": {
            "name": "Whether associated with any other NGO/GO/Samooh",
            "uuid": "27e6400f-ac99-4939-b065-0d1c570fec64",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
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
          "mandatory": true
        },
        {
          "name": "Name of NGO/GO/Samooh",
          "uuid": "9549326b-40b0-4ae2-9f5e-982226200ab3",
          "keyValues": [],
          "concept": {
            "name": "NgoName",
            "uuid": "534d012c-cff0-47a5-abc0-5effa7d80357",
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("27e6400f-ac99-4939-b065-0d1c570fec64").containsAnswerConceptName("d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6").matches();
  
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
                          "conceptName": "YesOrNo",
                          "conceptUuid": "27e6400f-ac99-4939-b065-0d1c570fec64",
                          "conceptDataType": "Coded"
                        },
                        "rhs": {
                          "type": "answerConcept",
                          "answerConceptNames": [
                            "Yes"
                          ],
                          "answerConceptUuids": [
                            "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6"
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
          "name": "Any other info",
          "uuid": "b6e0d68f-8513-4eb9-b529-6d85e320ebf8",
          "keyValues": [],
          "concept": {
            "name": "Info",
            "uuid": "94487220-b135-4980-90f7-cae13fd9f764",
            "dataType": "Text",
            "answers": [],
            "active": true
          },
          "displayOrder": 7,
          "type": "SingleSelect",
          "mandatory": false
        }
      ],
      "rule": "",
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