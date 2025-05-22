[
  {
    "name": "TIMS for Poshan Sathi",
    "uuid": "542e9019-04c8-4aec-9801-26a7be8a39ad",
    "active": true,
    "type": "User",
    "subjectSummaryRule" : 
({params, imports}) =>  {
  const {summaries, individual} = params;
  const highRiskValue = individual.getObservationReadableValue('To be monitored by QRT')[0];
    if(highRiskValue == 'Yes'){
        const highrisk =  individual.findObservation('To be monitored by QRT');
        summaries.push({name: 'To be monitored by QRT', value: highrisk.getValue()});
    }
  return summaries;
},
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "syncRegistrationConcept1": "be0ab05f-b0f3-43ec-b598-fdde0679104a",
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
    "name": "AWC area inputs (voided~562)",
    "uuid": "387cc2ab-3981-4ffd-85fa-faf9fdb04150",
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
    "voided": true
  }
]