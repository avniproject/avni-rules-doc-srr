{
  "name" : 
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
  "decisionConcepts": []
}