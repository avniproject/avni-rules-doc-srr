[
  {
    "name": "Demand",
    "uuid": "360606c2-3514-4848-8e7e-8b5830325130",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule" : 
({params, imports}) =>  {
  const {summaries, individual} = params;
  console.log("summary", individual);
  //if(true){
  //summaries.push({name: CONCEPT_NAME, value: someValue})
  //}
  return summaries;
},
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "syncRegistrationConcept1Usable": true,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Dispatch",
    "uuid": "bc0a4ae3-77b3-4620-81c4-2d02d1c62280",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule" : 
({params, imports}) =>  {
  const {summaries, individual} = params;
    summaries.push({
      name: "Dispatch Status Id",
      value: individual.getObservationValue('132868ab-811a-401e-9fd3-7c87f5512436')
    });
    console.log(summaries);
    return summaries;
},
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "syncRegistrationConcept1Usable": true,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Activity",
    "uuid": "07d0e5b8-0dad-4469-9623-10278261f829",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "syncRegistrationConcept1": "2978117c-a297-4171-99c6-23c3522ca0f8",
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "syncRegistrationConcept1Usable": true,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Inventory Item",
    "uuid": "07df088a-7924-461d-9a9b-24a29d43813b",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "syncRegistrationConcept1": "41de93e4-daaf-4207-bf70-b32939d09ea5",
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "syncRegistrationConcept1Usable": true,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Village",
    "uuid": "c781319c-e47f-49f1-9ed7-7c85cd2bd16a",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  }
]