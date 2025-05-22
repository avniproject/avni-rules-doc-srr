{
  "name": "PNC Encounter Cancellation",
  "uuid": "17cbfc90-56ff-4726-9e0a-9ba5267855d0",
  "formType": "ProgramEncounterCancellation",
  "formElementGroups": [
    {
      "uuid": "94b9519a-a518-40c5-afc3-50192d48909e",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "Cancel reason",
          "uuid": "ba6ba061-7544-4c1a-9960-f0481bdc724a",
          "keyValues": [
            {
              "key": "ExcludedAnswers",
              "value": [
                "Sick",
                "Away from village",
                "Defaulter",
                "Delivery/Abortion",
                "Absent"
              ]
            }
          ],
          "concept": {
            "name": "Cancel reason",
            "uuid": "f0a6eee8-3421-46cb-a500-309127e98231",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Sick",
                "uuid": "5686e4c8-7551-4d1b-8ed8-dbe8c6f38e2b",
                "dataType": "NA",
                "answers": [],
                "order": 2,
                "active": true
              },
              {
                "name": "Away from village",
                "uuid": "f8a0eaf5-cfc0-4231-9d21-669d6402f71d",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "Defaulter",
                "uuid": "f9ba64b3-021d-411f-aa1c-84ae82f79047",
                "dataType": "NA",
                "answers": [],
                "order": 5,
                "active": true
              },
              {
                "name": "Death",
                "uuid": "1c3c9c97-ba3f-46a2-88af-2a4e26dd0039",
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
                "name": "Migrated to other geography",
                "uuid": "83caedd7-16a7-4346-941c-342eadb97c18",
                "dataType": "NA",
                "answers": [],
                "order": 6,
                "active": true
              },
              {
                "name": "Delivery/Abortion",
                "uuid": "1d98de98-c449-4d9f-93ce-f70bb233f509",
                "dataType": "NA",
                "answers": [],
                "order": 3,
                "active": true
              },
              {
                "name": "Absent",
                "uuid": "3607ff60-534b-46aa-b7a7-83edec491994",
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
          "name": "Other reason for cancelling the visit",
          "uuid": "4ebed5ad-e548-485c-a0c6-320404c00b19",
          "keyValues": [],
          "concept": {
            "name": "Other reason for cancelling the visit",
            "uuid": "7ce99999-c243-4502-afaf-52da5f674ab7",
            "dataType": "Text",
            "answers": [],
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
  
  const condition11 = new imports.rulesConfig.RuleCondition({programEncounter, formElement}).when.valueInCancelEncounter("f0a6eee8-3421-46cb-a500-309127e98231").containsAnswerConceptName("f169230d-809b-4d06-9ccb-96586977bb68").matches();
  
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
                          "scope": "cancelEncounter",
                          "conceptName": "Cancel reason",
                          "conceptUuid": "f0a6eee8-3421-46cb-a500-309127e98231",
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
  "visitScheduleRule": ""use strict";
({ params, imports }) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const _ = imports.lodash;
  const scheduleBuilder = new imports.rulesConfig.VisitScheduleBuilder({
    programEncounter
  });
  
  const currentlyActiveInProgram = !programEncounter.programEnrolment.programExitDateTime;
  
  const isDeathOrDeliveryOrAbortionOrMigrated = new imports.rulesConfig.RuleCondition({programEncounter}).when.valueInCancelEncounter("f0a6eee8-3421-46cb-a500-309127e98231").containsAnyAnswerConceptName("1c3c9c97-ba3f-46a2-88af-2a4e26dd0039","1d98de98-c449-4d9f-93ce-f70bb233f509","83caedd7-16a7-4346-941c-342eadb97c18").matches();
  
  if(!isDeathOrDeliveryOrAbortionOrMigrated){
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
  }
  
  
  return scheduleBuilder.getAll();
},
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}