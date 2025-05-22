[
  {
    "name": "Pregnancy",
    "uuid": "7e905823-0326-4f67-8bc3-84cc4bb9f407",
    "colour": "#8b008b",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;

  return individual.isFemale() && individual.getAgeInYears() >= 10;
},
    "enrolmentSummaryRule" : 
({params, imports}) =>  {
    const summaries = [];
    const _ = imports.lodash;
    const programEnrolment = params.programEnrolment;
    
    const isDeliveryEncounterCompleted = programEnrolment.hasCompletedEncounterOfType("Delivery");
    
    if(!isDeliveryEncounterCompleted){
    
        const highRisk = programEnrolment.getObservationReadableValue('To be monitored by QRT');
        const highRiskEntireEnl = programEnrolment.findLatestObservationInEntireEnrolment('To be monitored by QRT').getValue();
        
          
        if (highRiskEntireEnl) {
            summaries.push({name : 'To be monitored by QRT',value : highRiskEntireEnl});
    
        } else{
            summaries.push({name : 'To be monitored by QRT',value : ['a77bd700-1409-4d52-93bc-9fe32c0e169b']});
        }
        
        const highRiskconditions  = programEnrolment.findLatestObservationInEntireEnrolment('High risk condition');
        
             if (highRiskconditions) {
                 summaries.push({name: 'High risk condition', value: highRiskconditions.getValue()});
             }
    }
    
    return summaries;
},
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Child",
    "uuid": "5538d0f1-194c-4055-9311-dcc0239fe1ce",
    "colour": "#ff8c00",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment; 
  return individual.getAgeInYears() <= 5;
},
    "enrolmentSummaryRule" : 
({params, imports}) =>  {
    const summaries = [];
    const programEnrolment = params.programEnrolment;
    
    const highrisk = programEnrolment.findLatestObservationInEntireEnrolment('To be monitored by QRT'); 
    if(highrisk){
      summaries.push({name: 'To be monitored by QRT', value: highrisk.getValue() });
    }
    
    const value1 = programEnrolment.findLatestObservationFromEncounters('Weight for age z-score');
    if (value1) {
      summaries.push({name: 'Weight for age z-score', value: value1.getValue()});
    }
    
    const value2 = programEnrolment.findLatestObservationFromEncounters('Weight for age Grade');
    if (value2) {
      summaries.push({name: 'Weight for age Grade', value: value2.getValue()});
    }
    
    const value3 = programEnrolment.findLatestObservationFromEncounters('Weight for age Status');
    if (value3) {
      summaries.push({name: 'Weight for age Status', value: value3.getValue()});
    }
    
    const value4 = programEnrolment.findLatestObservationFromEncounters('Height for age z-score');
    if (value4) {
      summaries.push({name: 'Height for age z-score', value: value4.getValue()});
    }
    
    const value5 = programEnrolment.findLatestObservationFromEncounters('Height for age Grade');
    if (value5) {
      summaries.push({name: 'Height for age Grade', value: value5.getValue()});
    }
    
    const value6 = programEnrolment.findLatestObservationFromEncounters('Height for age Status');
    if (value6) {
      summaries.push({name: 'Height for age Status', value: value6.getValue()});
    }
    
    const value7 = programEnrolment.findLatestObservationFromEncounters('Weight for height z-score');
    if (value7) {
      summaries.push({name: 'Weight for height z-score', value: value7.getValue()});
    }
    
    const value8 = programEnrolment.findLatestObservationFromEncounters('Weight for Height Status');
    if (value8) {
      summaries.push({name: 'Weight for Height Status', value: value8.getValue()});
    }
    
    const value9 = programEnrolment.findLatestObservationFromEncounters('Weight for Height Status at Discharge');
    if (value9) {
      summaries.push({name: 'Weight for Height Status at Discharge', value: value9.getValue()});
    }
    
    return summaries;
},
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  }
]