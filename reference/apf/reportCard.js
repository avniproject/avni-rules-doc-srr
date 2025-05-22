// Overdue for QRT PW
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
      let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'QRT PW') and  maxVisitDateTime <= $0 and cancelDateTime == null`,date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Overdue for PW Home Visit"
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'PW Home Visit') and  maxVisitDateTime <= $0 and cancelDateTime == null`,date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Total households registered",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }
    
    let lst = params.db.objects('Individual')
            .filtered(`voided = false AND subjectType.name = 'Household'`)
            .filtered(`${query}`);

     return lst;
};

//"Child with age more than 5 years",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }
    
    return  params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.programExitDateTime = null and $enrolment.program.name = 'Child' and $enrolment.voided = false).@count > 0 AND dateOfBirth <= $0`,date)
        .filtered(`${query}`)
};

//"Due visits for PNC",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    
    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }
        
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'PNC') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)        
        .map(enc => enc.programEnrolment.individual)

    return lst;
};

//"Overdue for QRT SAM child",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Child' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'QRT Child') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Due visits for NRC (Admitted)",
({params, imports}) => {
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
            console.log(addressValue, addressValue)
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }; 

    var date = new Date();
    
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Child' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'NRC Admission') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`,date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)

    return lst;
};

//"High risk pregnancies",
({params, imports}) => {
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    let list = params.db.objects('Individual')
        .filtered(`voided==false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY( $enrolment.observations, $observation, $observation.concept.uuid = 'be0ab05f-b0f3-43ec-b598-fdde0679104a' and $observation.valueJSON CONTAINS '8ebbf088-f292-483e-9084-7de919ce67b7').@count > 0).@count > 0 `)
        .filtered(`${query}`)

    return list;
};

//" High Risk Pregnancy (pregnancy program)",
({params, imports}) => {

    const _ = imports.lodash;
    const moment = imports.moment;
    const isHighRisk = (enrolment) => {
        const isGeoHighRisk =_.includes(enrolment.getObservationReadableValue('Pregnancy geographically high risk'), 'Yes');
        const isClinicHighRisk = _.includes(enrolment.getObservationReadableValue('Clinically high risk'), 'Yes');
        return isGeoHighRisk || isClinicHighRisk;
    }; 

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    let lst = params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' and $enrolment.programExitDateTime = null and $enrolment.voided = false).@count > 0`)
        .filtered(`${query}`)
        .filter((individual) => individual.voided === false && _.some(individual.enrolments, enrolment => enrolment.program.name === 'Pregnancy' && isHighRisk(enrolment)));

    return lst;
};

//"Total enrolments in pregnancy program",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;

    }
    
    
    let lst = params.db.objects('Individual')
            .filtered(`voided = false AND subjectType.name = 'Individual' AND
            SUBQUERY(enrolments, $enrolment, $enrolment.programExitDateTime = null and $enrolment.program.name = 'Pregnancy' and $enrolment.voided = false).@count > 0
            `).filtered(`${query}`)
           ;

     return lst;
};

//"To Be Exited Mother",
({params, imports}) => {
    const isDelivered = (enrolment) => {
        const encounter = enrolment.lastFulfilledEncounter('Delivery');
        if (encounter === undefined){
          return false
        };
        
        const obs = encounter.getObservationReadableValue('f72ec1db-50d5-409e-883a-421825fbebb5');
        let currentDate = new Date();
        let sixMonthsPrior = new Date(currentDate);
        sixMonthsPrior.setMonth(sixMonthsPrior.getMonth() - 6);
        return obs < sixMonthsPrior;
    };

    return params.db.objects('Individual')
    .filtered(`voided = false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Pregnancy' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Delivery' and $encounter.voided = false and SUBQUERY($encounter.observations, $observation, $observation.concept.uuid = 'f72ec1db-50d5-409e-883a-421825fbebb5').@count > 0).@count > 0).@count > 0`)
    .filter((individual) => individual.enrolments.some(enrolment =>  enrolment.programExitDateTime == null &&  isDelivered(enrolment)));
};

//"Total Village Profiles Registered",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }


    let lst = params.db.objects('Individual')
            .filtered(`voided = false AND subjectType.name = 'Village Profile'`)
            .filtered(`${query}`);

     return lst;
};

//"SAM children",
({params, imports}) => {
    const _ = imports.lodash;
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('Individual')
        .filtered(`voided = false AND enrolments.voided = false AND enrolments.program.name = 'Child' AND enrolments.programExitDateTime = null `)
        .filtered("SUBQUERY(observations, $observation, ($observation.concept.uuid = '053b4f97-eacf-4f20-9d68-d6850966ce93' and ($observation.valueJSON  CONTAINS 'SAM'))OR ($observation.concept.uuid = '053b4f97-eacf-4f20-9d68-d6850966ce93' and ($observation.valueJSON  CONTAINS 'Severely Underweight'))).@count > 0")
        .filtered(`${query}`)
        .filter((individual) => individual.getAgeInYears() <= 5)
};

//"Overdue visits",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'Delivery') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Child Exit due",
({params, imports}) => {
    var date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    
    return params.db.objects('Individual')
        .filtered(`voided = false 
    and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' 
            and $enrolment.programExitDateTime = null 
            and $enrolment.voided = false).@count > 0 and dateOfBirth <= $0`,date)
};

//"Overdue for QRT child followup",
({params, imports}) => {
const _ = imports.lodash;
const moment = imports.moment;

const qrtChildFollowUpOverdue = (enrolment) => {
    const qrtChildFollowUpEnc = enrolment.scheduledEncountersOfType('QRT Child Followup');
    
    const qrtChildFollowUp = qrtChildFollowUpEnc
    .filter((e) => moment().isSameOrAfter(moment(e.maxVisitDateTime)) &&
    e.cancelDateTime === null && e.encounterDateTime === null );
    
    return qrtChildFollowUp.length > 0 ? true : false;
    
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'QRT Child Followup' and $encounter.voided = false ).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false  && _.some(individual.enrolments, enrolment => qrtChildFollowUpOverdue(enrolment)
        ))
};

//"Due visits for ANC",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    
    
    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }
    
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'ANC') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)        
        .map(enc => enc.programEnrolment.individual)


    return lst;
};

//"Overdue for NRC (voided~2913)",
({params, imports}) => {
const _ = imports.lodash;
const moment = imports.moment;

const nrcOverdue = (enrolment) => {
    const nrcEnc = enrolment.scheduledEncountersOfType('NRC');
    
    const nrc = nrcEnc
    .filter((e) => moment().isSameOrAfter(moment(e.maxVisitDateTime)) &&
    e.cancelDateTime === null && e.encounterDateTime === null );
    
    return nrc.length > 0 ? true : false;
    
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'NRC' and $encounter.voided = false ).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false  && _.some(individual.enrolments, enrolment => nrcOverdue(enrolment)
        ))
};

//"Growth Faltering-1",
({params, imports}) => {
    const _ = imports.lodash;
    let addressValue = null;
   
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('Individual')
        .filtered(`voided = false AND enrolments.voided = false AND enrolments.program.name = 'Child' AND enrolments.programExitDateTime = null AND voided = false `)
        .filtered(`SUBQUERY(observations, $observation, $observation.concept.uuid = 'a9d8db9a-8411-412c-82ed-e6e177353561' and $observation.valueJSON CONTAINS 'GF1').@count > 0`)
        .filtered(`${query}`)
        .filter((individual) => individual.getAgeInYears() <= 5)
};

//"Total AWC Profiles Registered",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "AWC").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }


    let lst = params.db.objects('Individual')
            .filtered(`voided = false AND subjectType.name = 'AWC Profile'`)
            .filtered(`${query}`);

     return lst;
};

//"Overdue visits for Growth Monitoring",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    };  
    
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Child' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'Growth Monitoring') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)

    return lst;
};

//"Overdue visits for delviery",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }


    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'Delivery') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Lactating Mother ",
({params, imports}) => {
    const moment = imports.moment;

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter').filtered(`
      voided = false AND
      encounterDateTime != null AND
      encounterType.name = 'Delivery' AND
      programEnrolment.programExitDateTime = null AND
      programEnrolment.individual.voided = false AND
      SUBQUERY(observations, $observation,
          $observation.concept.uuid = '976db865-27a4-41e7-be18-6b59f42bb900' AND
          $observation.valueJSON CONTAINS '1ece5dd3-864e-460a-9116-874b94ce22eb'
      ).@count > 0  `)
        .filtered('TRUEPREDICATE sort(programEnrolment.individual.uuid asc , encounterDateTime desc) Distinct(programEnrolment.individual.uuid)')
        .filtered(`${query}`)
        .filter(enc => {
            const deliveryDate = moment(enc.getObservationReadableValue("Date of delivery")).add(6, 'M');
            return moment(deliveryDate).isSameOrAfter(moment());
        })
        .map(enc => enc.programEnrolment.individual);
};

//"Total individuals registered",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }


    let lst = params.db.objects('Individual')
            .filtered(`voided = false AND subjectType.name = 'Individual'`)
            .filtered(`${query}`);

     return lst;
};

//"Due visits for QRT child followup",
({params, imports}) => {
const _ = imports.lodash;
const moment = imports.moment;

const qrtChildFollowUpDue = (enrolment) => {
    const qrtChildFollowUpEnc = enrolment.scheduledEncountersOfType('QRT Child Followup');
    
    const qrtChildFollowUp = qrtChildFollowUpEnc
    .filter((e) => moment().isSameOrAfter(moment(e.earliestVisitDateTime)) && moment().isSameOrBefore(moment(e.maxVisitDateTime)) && e.cancelDateTime === null && e.encounterDateTime === null );
    
    return qrtChildFollowUp.length > 0 ? true : false;
    
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'QRT Child Followup' and $encounter.voided = false ).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false  && _.some(individual.enrolments, enrolment => qrtChildFollowUpDue(enrolment)
        ))
};

//"Due visits for Delivery",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    
    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    };    
    
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'Delivery') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)        
        .map(enc => enc.programEnrolment.individual)


    return lst;
};

//"Overdue visits for ANC",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'ANC') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Due for NRC (voided~2914)",
({params, imports}) => {
const _ = imports.lodash;
const moment = imports.moment;

const nrcDue = (enrolment) => {
    const nrcEnc = enrolment.scheduledEncountersOfType('NRC');
    
    const nrc = nrcEnc
    .filter((e) => moment().isSameOrAfter(moment(e.earliestVisitDateTime)) && moment().isSameOrBefore(moment(e.maxVisitDateTime)) && e.cancelDateTime === null && e.encounterDateTime === null );
    
    return nrc.length > 0 ? true : false;
    
    };

    return params.db.objects('Individual')
        .filtered(`SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'NRC' and $encounter.voided = false ).@count > 0 and voided = false).@count > 0`)
        .filter((individual) => individual.voided === false  && _.some(individual.enrolments, enrolment => nrcDue(enrolment)
        ))
};

//"Overdue visits for PNC",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }; 

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'PNC') and  maxVisitDateTime <= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};

//"Due visits for PW Home Visit",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return  params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'PW Home Visit') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`,date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)   
};

//"Growth Faltering-2",
({params, imports}) => {
    const _ = imports.lodash;
    let addressValue = null;
 
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('Individual')
        .filtered(`voided = false AND enrolments.voided = false AND enrolments.program.name = 'Child' AND enrolments.programExitDateTime = null AND voided = false`)
        .filtered(`SUBQUERY(observations, $observation, $observation.concept.uuid = 'a9d8db9a-8411-412c-82ed-e6e177353561' and $observation.valueJSON CONTAINS 'GF2').@count > 0 `)
        .filtered(`${query}`)
        .filter((individual) => individual.getAgeInYears() <= 5)
};

//"Total children enrolled in CMAM program",
({params, imports}) => {
    const _ = imports.lodash;
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('Individual')
        .filtered(`voided = false AND enrolments.voided = false AND enrolments.program.name = 'Child' AND enrolments.programExitDateTime = null `)
        .filtered("SUBQUERY(observations, $observation, ($observation.concept.uuid = '001b3307-731e-4606-a8f4-9aaa1e264000' and ($observation.valueJSON  CONTAINS '8ebbf088-f292-483e-9084-7de919ce67b7'))).@count > 0")
        .filtered(`${query}`)
};

//"Current Pregnant Women",
({params, imports}) => {
    const _ = imports.lodash;
    const moment = imports.moment;
    var date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    const currentMonthChildFollowup = (enrolment) => {
        const currentEnc = enrolment.scheduledEncountersOfType('Growth Monitoring');
        const currentMonthEnc = currentEnc
            .filter((e) => moment().format('MMM') == moment(e.earliestVisitDateTime).format('MMM') && moment().format('YYYY') == moment(e.earliestVisitDateTime).format('YYYY') && e.cancelDateTime == null && e.encounterDateTime == null);
        return currentMonthEnc.length > 0 ? true : false;
    };
    return params.db.objects('Individual')
        .filtered(`voided=false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Growth Monitoring' and $encounter.voided = false and $encounter.encounterDateTime != null).@count > 0 and voided = false).@count > 0 AND dateOfBirth >= $0`,date)
        .filter((individual) => _.some(individual.enrolments, enrolment => currentMonthChildFollowup(enrolment)))
};

//"MAM children",
({params, imports}) => {
    const _ = imports.lodash;
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;
    }


    return params.db.objects('Individual')
        .filtered(`voided = false AND enrolments.voided = false AND enrolments.program.name = 'Child' AND enrolments.programExitDateTime = null `)
        .filtered("SUBQUERY(observations, $observation, ($observation.concept.uuid = '053b4f97-eacf-4f20-9d68-d6850966ce93' and ($observation.valueJSON  CONTAINS 'MAM'))OR ($observation.concept.uuid = '053b4f97-eacf-4f20-9d68-d6850966ce93' and ($observation.valueJSON  CONTAINS 'Moderately Underweight'))).@count > 0")
        .filtered(`${query}`)
        .filter((individual) => individual.getAgeInYears() <= 5)
};

//"Due visits for QRT PW",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }
    
    return  params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Pregnancy' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'QRT PW') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`,date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual) 
};

//"Due visits for Growth Monitoring",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
        let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }
   
    let lst = params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Child' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'Growth Monitoring') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
    
    return lst;
};

//"Number of growth monitoring visits done this month",
({params, imports}) => {
    const _ = imports.lodash;
    const moment = imports.moment;
    var date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    const currentMonthChildFollowup = (enrolment) => {
        const currentEnc = enrolment.getEncountersOfType('Growth Monitoring').filter((enc) => enc.encounterType.name === 'Growth Monitoring' && enc.encounterDateTime !== null && moment().format('MMM') == moment(enc.encounterDateTime).format('MMM') && moment().format('YYYY') == moment(enc.encounterDateTime).format('YYYY'));

        return currentEnc.length > 0 ? true : false;
    };

    return params.db.objects('Individual')
        .filtered(`voided=false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Growth Monitoring' and $encounter.voided = false and $encounter.encounterDateTime != null).@count > 0 and voided = false).@count > 0 AND dateOfBirth >= $0`,date)
        .filter((individual) =>  _.some(individual.enrolments, enrolment => currentMonthChildFollowup(enrolment)))
};

//"Total enrolments in child program",
({params, imports}) => {

    let addressValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }

    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `lowestAddressLevel.uuid IN ${output}`;

    }

    let lst = params.db.objects('Individual')
        .filtered(`voided = false AND subjectType.name = 'Individual' AND
            SUBQUERY(enrolments, $enrolment, $enrolment.programExitDateTime = null and $enrolment.program.name = 'Child' and $enrolment.voided = false).@count > 0
            `).filtered(`${query}`)


    return lst;
};

//"Due for QRT SAM child",
({params, imports}) => {
    const _ = imports.lodash;
    var date = new Date();
    let addressValue = null;
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village/Hamlet").map(add => add.uuid);
        }
    }
    
    let query = 'voided=false ';

    if (addressValue != null) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query = `programEnrolment.individual.lowestAddressLevel.uuid IN ${output}`;
    }

    return params.db.objects('ProgramEncounter')
        .filtered(`programEnrolment.individual.voided = false AND programEnrolment.voided = false AND programEnrolment.program.name = 'Child' AND programEnrolment.programExitDateTime = null AND voided = false AND encounterDateTime == null and earliestVisitDateTime <> null AND (encounterType.name = 'QRT Child') and earliestVisitDateTime <= $0 and maxVisitDateTime >= $0 and cancelDateTime == null`, date)
        .filtered(`${query}`)
        .map(enc => enc.programEnrolment.individual)
};