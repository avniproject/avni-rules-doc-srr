'use strict';
({ params, imports }) => {
    const encounter = params.entity;
    const validationResults = [];
    const moment = imports.moment;
    if (moment(encounter.encounterDateTime).isBefore(moment(encounter.earliestVisitDateTime), 'day')) {
        const validationError = imports.common.createValidationError('Cannot save attendance for the future date.');
        validationResults.push(validationError);
    }
    return validationResults;
};


'use strict';
({ params, imports }) => {
    const validationResults = [];
    const Individual = params.entity;
    var cond_1 = Individual.getObservationReadableValue('Are you willing to share the household information ?') == 'Yes';
    if (cond_1) {
        const hh_mem = Individual.getObservationReadableValue('Number of household members');
        const f_mem = Individual.getObservationReadableValue('Total number of female members (including children)');
        const m_mem = Individual.getObservationReadableValue('Total number of male members (including children)');
        const o_mem = Individual.getObservationReadableValue('Total number of third gender members (including children)?');
        if (parseInt(hh_mem) != (parseInt(f_mem) + parseInt(m_mem) + parseInt(o_mem))) {
            validationResults.push(imports.common.createValidationError("Please enter correct member count information"));
        };
        const age_under_5 = Individual.getObservationReadableValue('under 5 yrs.');
        const age_5_18 = Individual.getObservationReadableValue('Number of people in the age group 5-18');
        const age_18_45 = Individual.getObservationReadableValue('Number of people in the age group 18-45');
        const age_45_60 = Individual.getObservationReadableValue('Number of people in the age group 45-60');
        const age_above_60 = Individual.getObservationReadableValue('Number of persons above 60 yrs.');
        let total = (parseInt(age_under_5) + parseInt(age_5_18) + parseInt(age_18_45) + parseInt(age_45_60) + age_above_60);
        if (hh_mem && hh_mem != total) {
            validationResults.push(imports.common.createValidationError("Please enter correct member count in age group"));
        };
    }
    return validationResults;
};



'use strict';
({ params, imports }) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const validationResults = [];
    let PhaseOneDate = null;
    let PhaseTwoDate = null;
    let PhaseThreeDate = null;
    /* The below JavaScript code is checking if the First Phase Material is available based on an
  observation in a program encounter. If the First Phase Material is available, it then checks if
  dates for the First Phase Material (bricks, pre mix, crush sand, fine sand, river sand, cement) have been provided. If no
  dates have been provided for the First Phase Material, it adds a validation error message. */
    const phaseOneAvailable = programEncounter.getObservationReadableValue('First Phase Material is Given ?') == 'Yes';
    if (phaseOneAvailable) {
        let noPhaseOneDate = null;
        const phaseOneArr = [
            programEncounter.getObservationReadableValue('Date on which bricks are given'),
            programEncounter.getObservationReadableValue('Date on which Pre mix plaster are given ?'),
            programEncounter.getObservationReadableValue('Date on which crush sand is given'),
            programEncounter.getObservationReadableValue('Date on which fine sand is given'),
            programEncounter.getObservationReadableValue('Date on which river sand is given'),
            programEncounter.getObservationReadableValue('Date on which cement is given'),
        ]
        noPhaseOneDate = phaseOneArr.every(element => element === null || element === undefined);
        if (noPhaseOneDate) {
            validationResults.push(imports.common.createValidationError("You had selected First Phase Material is Given as Yes but not provided date for first phase. Please check!!!"));
        } else {
            PhaseOneDate = new Date(Math.max(...phaseOneArr.filter(date => date)));
        }
    };

    /* The below JavaScript code is checking if the second phase material is available based on an
    observation in a program encounter. If the second phase material is available, it then checks if
    dates for the second phase material (pan, tiles, other hardware items) have been provided. If no
    dates have been provided for the second phase material, it adds a validation error message. If dates
    have been provided, it compares the latest date among the provided dates for the second phase
    material with the date for the first phase material. If any of the dates for the second phase
    material are earlier than the date for the first phase */
    const phaseTwoAvailable = programEncounter.getObservationReadableValue('Second Phase Material is Given ?') == 'Yes';
    if (phaseTwoAvailable) {
        let noPhaseTwoDate = null;
        const phaseTwoArr = [
            programEncounter.getObservationReadableValue('Date on which pan is given'),
            programEncounter.getObservationReadableValue('Date on which Tiles are given'),
            programEncounter.getObservationReadableValue('Date on which other hardware items are given')
        ]
        noPhaseTwoDate = phaseTwoArr.every(element => element === null || element === undefined);
        if (noPhaseTwoDate) {
            validationResults.push(imports.common.createValidationError("You had selected Second Phase Material is Given as Yes but not provided date for Second phase. Please check!!!"));
        } else {
            PhaseTwoDate = new Date(Math.max(...phaseTwoArr.filter(date => date)));
            if (PhaseTwoDate < PhaseOneDate) {
                validationResults.push(imports.common.createValidationError("Dates for Second Phase Material cannot be earlier than the dates for First phase material. Please check!!!"));
            }
        }
    };

    /* The below JavaScript code is checking if the Third Phase Material is available based on an
  observation in a program encounter. If the Third Phase Material is available, it then checks if
  dates for the Third Phase Material (pan, tiles, other hardware items) have been provided. If no
  dates have been provided for the Third Phase Material, it adds a validation error message. If dates
  have been provided, it compares the latest date among the provided dates for the Third Phase Material 
  with the date for the first phase material. If any of the dates for the Third Phase Material are earlier than the date for the first phase */
    const phaseThreeAvailable = programEncounter.getObservationReadableValue('Third Phase Material is Given ?') == 'Yes';
    if (phaseThreeAvailable) {
        let noPhaseThreeDate = programEncounter.getObservationReadableValue('Date on which door is given');
        if (!noPhaseThreeDate) {
            validationResults.push(imports.common.createValidationError("You had selected Third Phase Material is Given as Yes but not provided date for Third phase. Please check!!!"));
        } else {
            PhaseThreeDate = noPhaseThreeDate;
            if (noPhaseThreeDate < PhaseOneDate) {
                validationResults.push(imports.common.createValidationError("Dates for Third Phase Material cannot be earlier than the dates for First phase material. Please check!!!"));
            }
        }
    };

    /* The below JavaScript code is checking if the construction is completed based on an
  observation in a program encounter. If the Third Phase Material is available, it then checks if
  date of completion is less then the date for Third Phase Material have been provided. If yes, then it adds a validation error message. This same process
  is going to check with second phase material date if third phase material is not provided. */
    const completionDate = programEncounter.getObservationReadableValue('Date on which toilet construction is complete');
    if (completionDate) {
        if (PhaseThreeDate) {
            if (PhaseThreeDate > completionDate) {
                validationResults.push(imports.common.createValidationError("You have selected Toilet Completion Date before the Third Phase Material delivery date. Please check!!!"));
            }
        } else if (PhaseTwoDate) {
            if (PhaseTwoDate > completionDate) {
                validationResults.push(imports.common.createValidationError("You have selected Toilet Completion Date before the Second Phase Material delivery date. Please check!!!"));
            }
        }
    };

    // Validations for First phase material.
    const validateBricks = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which bricks are given").defined.and.when.valueInEncounter("vendor name for first phase material Bricks").notDefined.matches();

    const sandPresent = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which crush sand is given").defined.or.when.valueInEncounter("Date on which fine sand is given").defined.or.when.valueInEncounter("Date on which river sand is given").defined.matches();

    const sandVendor = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Vendor name for first phase material Sand").notDefined.matches();

    const validateCement = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which cement is given").defined.and.when.valueInEncounter("Vendor name for first phase material Cement").notDefined.matches();

    // Validations for Second phase material.
    const validatePan = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which pan is given").defined.and.when.valueInEncounter("Vendor name for second phase material Pan").notDefined.matches();

    const validateTiles = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which Tiles are given").defined.and.when.valueInEncounter("Vendor name for second phase material Tiles").notDefined.matches();

    const validateHardware = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which other hardware items are given").defined.and.when.valueInEncounter("Vendor name for secnod phase material Hardware").notDefined.matches();

    // Validations for Third Phase Material

    const doorButNotVendor = new imports.rulesConfig.RuleCondition({ programEncounter }).when.valueInEncounter("Date on which door is given").defined.and.when.valueInEncounter("Vendor name for third phase material ?").notDefined.matches();

    // Validation error for First Phase Material
    if (validateBricks) {
        validationResults.push(imports.common.createValidationError("Date of Bricks is Defined But Vendor Not defined !!!"));
    }
    if (sandPresent && sandVendor) {
        validationResults.push(imports.common.createValidationError("Date of Sand is Defined But Vendor Not defined !!!"));
    }
    if (validateCement) {
        validationResults.push(imports.common.createValidationError("Date of Cement is Defined But Vendor Not defined !!!"));
    }
    // Validation error for Second Phase Material
    if (validatePan) {
        validationResults.push(imports.common.createValidationError("Date of Pan is Defined But Vendor Not defined !!!"));
    }
    if (validateTiles) {
        validationResults.push(imports.common.createValidationError("Date of Tiles is Defined But Vendor Not defined !!!"));
    }
    if (validateHardware) {
        validationResults.push(imports.common.createValidationError("Date of Hardware is Defined But Vendor Not defined !!!"));
    }
    // Validation error for Third Phase Material
    if (doorButNotVendor) {
        validationResults.push(imports.common.createValidationError("Date of Door is Defined But Vendor Not defined !!!"));
    }
    return validationResults;
};



'use strict';
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  
  let treatmentStartDate = programEncounter.programEnrolment
  .findObservationInEntireEnrolment('Treatment start date').getValue();
  let visitDate = programEncounter.encounterDateTime; 
  
  //console.log('treatmentStartDate',treatmentStartDate);
  //console.log('visitDate',visitDate);
  
  
  if(imports.moment(visitDate).isSameOrBefore(treatmentStartDate, 'date')) {
    validationResults
    .push(imports.common
    .createValidationError('IP/CP check in cannot be before Start treatment date'));
  }
  
  return validationResults;
};


//SAMPLE RULE EXAMPLE
'use strict';
({params, imports}) => {
  const programEnrolment = params.entity;
  const validationResults = [];
  const programEncounter = params.entity;
  const heightB = programEnrolment.getObservationReadableValue('Height of Boy');
  const heightG = programEnrolment.getObservationReadableValue('Height of Girl');
  if(heightB > 86.5) {
      validationResults.push(imports.common.createValidationError('The app does not support for height greater than 86.5 cm for boys currently.'));
  }
  if(heightB < 45) {
      validationResults.push(imports.common.createValidationError('The app does not support for height less than 45 cm for boys currently.'));
  }
  
  if(heightG > 120) {
      validationResults.push(imports.common.createValidationError('The app does not support for height greater than 120 cm for girls currently.'));
  }
  if(heightG < 45) {
      validationResults.push(imports.common.createValidationError('The app does not support for height less than 45 cm for girls currently.'));
  }
  return validationResults;
};



'use strict';
({params, imports}) => {
  const encounter = params.entity;
  const validationResults = [];
  const moment = imports.moment;
  if(encounter.earliestVisitDateTime && moment(encounter.encounterDateTime).isBefore(moment(encounter.earliestVisitDateTime), 'day')) {
  const validationError = imports.common.createValidationError('Cannot save attendance for the future date.');
  validationResults.push(validationError);
  }
  return validationResults;
};



//SAMPLE RULE EXAMPLE
'use strict';
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  const moment = imports.moment;
  
   if ( moment(programEncounter.encounterDateTime) < moment(programEncounter.earliestVisitDateTime).subtract(10,'days') ) {
       validationResults.push(imports.common.createValidationError('Cannot complete future scheduled encounter'));
   }
  return validationResults;
};



"'use strict';
({params, imports}) => {
    const encounter = params.entity;
    const validationResults = [];
    const totalNonPregnant = encounter.getObservationReadableValue('Number of non pregnant screened cases');
    const totalPregnant = encounter.getObservationReadableValue('Number of pregnant screened cases');
    const nonPregnantSol = encounter.getObservationReadableValue('Number of non pregnant solubility positive cases');
    const pregnantSol = encounter.getObservationReadableValue('Number of pregnant solubility positive cases');
    const nonPregnantAS = encounter.getObservationReadableValue('Number of non pregnant AS cases');
    const pregnantAS = encounter.getObservationReadableValue('Number of pregnant AS cases');
    const nonPregnantSS = encounter.getObservationReadableValue('Number of non pregnant SS cases');
    const pregnantSS = encounter.getObservationReadableValue('Number of pregnant SS cases');
    const moment = imports.moment;
    
    if(moment(encounter.encounterDateTime).isBefore(moment(encounter.earliestVisitDateTime), 'day')) {
      validationResults.push(imports.common.createValidationError(""Cannot fill the data before the schedule date""));
    }
    if (totalPregnant < pregnantSol) {
        validationResults.push(imports.common.createValidationError('Total pregnant solublity positive cases cannot be more than total pregnant screened cases'))
    }
    if (totalNonPregnant < nonPregnantSol) {
        validationResults.push(imports.common.createValidationError('Total non pregnant solublity positive cases cannot be more than total non pregnant screened cases'))
    }
    if(pregnantSol < (pregnantAS + pregnantSS)) {
        validationResults.push(imports.common.createValidationError('(Total pregnant AS + total pregnant SS) cases cannot be more than total pregnant solubility positive cases'))
    }
    if(nonPregnantSol < (nonPregnantAS + nonPregnantSS)) {
        validationResults.push(imports.common.createValidationError('(Total non pregnant AS + total non pregnant SS) cases cannot be more than total non pregnant solubility positive cases'))
    }
    return validationResults;
};


'use strict';
({params, imports}) => {
  console.log('validation rule ...');
  const programEncounter = params.entity;
  const validationResults = [];
  const moment = imports.moment;
  
  //use imports.common.createValidationError('sample error') to create validation error and push it to validationResults
   if ( moment(programEncounter.encounterDateTime) < moment(programEncounter.earliestVisitDateTime).subtract(20,'days') ) {
       validationResults.push(imports.common.createValidationError('Cannot complete future scheduled encounter'));
   }
   console.log('validationResults ...', validationResults);
  return validationResults;
};


//SAMPLE RULE EXAMPLE
'use strict';
({params, imports}) => {
  const programEncounter = params.entity;
  const validationResults = [];
  const moment = imports.moment;
  
  if ( (!programEncounter.earliestVisitDateTime) && moment(programEncounter.programEnrolment.enrolmentDateTime).year() <= 2020 && moment(programEncounter.encounterDateTime).year() > 2020  ) {
      validationResults.push(imports.common.createValidationError('Encounter date cannot be after 2020')); 
      }
  
  return validationResults;
};



'use strict';
({params, imports}) => {
    const programEncounter = params.entity;
    const moment = imports.moment;
    const validationResults = [];

    // Get schedule date (earliest visit date)
    const scheduleDate = programEncounter.earliestVisitDateTime;

    // Check if encounter date is before schedule month
    const isBeforeScheduleMonth = moment(programEncounter.encounterDateTime)
        .isBefore(moment(scheduleDate).startOf('month'));

    // Check if encounter date is after schedule month
    const isAfterScheduleMonth = moment(programEncounter.encounterDateTime)
        .isAfter(moment(scheduleDate).endOf('month'));



    return validationResults;
};


'use strict';
({params, imports}) => {
  const programEncounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  const isMaxVisitDateTimeGreaterThanToday = moment(programEncounter.maxVisitDateTime).isBefore(moment(), 'day');

  if (isMaxVisitDateTimeGreaterThanToday) {
    validationResults.push(imports.common.createValidationError("You cannot complete an overdue visit. Please cancel this visit."));  
  }
     // Get schedule date (earliest visit date)
    const scheduleDate = programEncounter.earliestVisitDateTime;
  
    // Check if encounter date is before schedule month
    const isBeforeScheduleMonth = moment(programEncounter.encounterDateTime)
        .isBefore(moment(scheduleDate));

    // Check if encounter date is after schedule month
    const isAfterScheduleMonth = moment(programEncounter.encounterDateTime)
        .isAfter(moment(scheduleDate).endOf('month'));

    if (isBeforeScheduleMonth) {
        validationResults.push(imports.common.createValidationError("Cannot fill this form before the scheduled date"));
    }  
  
  
  return validationResults;
};


({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  if(encounter.earliestVisitDateTime > encounter.encounterDateTime){
     validationResults.push(imports.common.createValidationError(""Visit cannot be done earlier""));  
  }
  
  return validationResults;
};

({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  if(encounter.earliestVisitDateTime > encounter.encounterDateTime){
     validationResults.push(imports.common.createValidationError(""Visit cannot be done earlier""));  
  }
  
  return validationResults;
};

({params, imports}) => {
  const encounter = params.entity;
  const moment = imports.moment;
  const validationResults = [];
  
  if(encounter.earliestVisitDateTime > encounter.encounterDateTime){
     validationResults.push(imports.common.createValidationError(""Visit cannot be done earlier""));  
  }
  
  return validationResults;
};



'use strict';
({params, imports}) => {
  const moment = imports.moment;
  const programEncounter = params.entity;
  const validationResults = [];
  const isOverDue = moment(programEncounter.encounterDateTime).isAfter(moment(programEncounter.maxVisitDateTime));
  
  const currentDate = moment().startOf('day');
  const dateOfBirth = moment(programEncounter.programEnrolment.individual.dateOfBirth).startOf('day');
  const ageInYears = currentDate.diff(dateOfBirth, 'years', true);

  const ageEligibility = ageInYears <= 19;
  
  if(isOverDue) validationResults.push(imports.common.createValidationError('Overdue forms cannot be filled, please cancel this form so that next due form can be scheduled'));
  
  if(!ageEligibility) validationResults.push(imports.common.createValidationError('Cancel the visit and exit the individual form the Adolescent program as age of individual is more than 19 years'));
  //use imports.common.createValidationError('sample error') to create validation error and push it to validationResults
  
  return validationResults;
};