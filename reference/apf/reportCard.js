[
  {
    "uuid": "709cb6b2-4012-46b3-9f29-6a586f7b2d80",
    "id": 1389,
    "name": "Overdue for QRT PW",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "d1cff8a6-df41-40f0-aeb7-1a6ada34ac97",
    "id": 1387,
    "name": "Overdue for PW Home Visit",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "f1cd0afd-17b6-4def-8042-e13a73f51b80",
    "id": 816,
    "name": "Total households registered",
    "query" : 
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
},
    "description": "",
    "color": "#319da0",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "9a3dcdd7-0b25-45fc-9f72-e83dd4208c65",
    "id": 2742,
    "name": "Child with age more than 5 years",
    "query" : 
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
},
    "description": "",
    "color": "#6c62e2",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ab44995a-b918-4cb5-9105-a99e921635ff",
    "id": 1383,
    "name": "Due visits for PNC",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "b8f5c4e7-da6b-439e-b63a-8f2d21aa39e3",
    "id": 1390,
    "name": "Overdue for QRT SAM child",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6cb847b2-db53-4a2a-99b3-522f015849eb",
    "id": 3103,
    "name": "Due visits for NRC (Admitted)",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "87f959f7-7afa-4b69-a887-de7026162c36",
    "id": 824,
    "name": "High risk pregnancies",
    "query" : 
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
},
    "description": "",
    "color": "#E65100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "7dbfed4b-5a1a-448a-a5e3-4af983d1ddde",
    "id": 2745,
    "name": " High Risk Pregnancy (pregnancy program)",
    "query" : 
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
},
    "description": "",
    "color": "#E65100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ba8c9508-6b02-4da9-b5ce-a1ef8ab8726a",
    "id": 820,
    "name": "Total enrolments in pregnancy program",
    "query" : 
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
},
    "description": "",
    "color": "#2196f3",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "7bcb72d8-2db3-4a7f-8868-a86f5baa95d7",
    "id": 818,
    "name": "Due visits",
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardType": "27020b32-c21b-43a4-81bd-7b88ad3a6ef0",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "13156709-f8ee-4906-b8da-392d51aac410",
    "id": 1744,
    "name": "To Be Exited Mother",
    "query" : 
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
},
    "description": "Women who gave birth earlier than six months ago and have have not yet exited from the program",
    "color": "#c868d0",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "99771a35-495b-4fa4-bbdc-badef22febd9",
    "id": 815,
    "name": "Total Village Profiles Registered",
    "query" : 
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
},
    "description": "",
    "color": "#38c790",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "e827e968-1cdb-4f45-aa0b-23367a1b8f0a",
    "id": 823,
    "name": "SAM children",
    "query" : 
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
},
    "description": "",
    "color": "#E65100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "0244a027-e9ac-4dff-87c8-4298c3168804",
    "id": 819,
    "name": "Overdue visits",
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardType": "9f88bee5-2ab9-4ac4-ae19-d07e9715bdb5",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "abade9ab-fbe4-47e9-9bfd-a7f0bfce70cb",
    "id": 1742,
    "name": "Child Exit due",
    "query" : 
({params, imports}) => {
    var date = new Date();
    date.setFullYear(date.getFullYear() - 5);
    
    return params.db.objects('Individual')
        .filtered(`voided = false 
    and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' 
            and $enrolment.programExitDateTime = null 
            and $enrolment.voided = false).@count > 0 and dateOfBirth <= $0`,date)
},
    "description": "Children over 5 years of age who  have not yet exited from the program",
    "color": "#6c62e2",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "4fbba91c-cab8-418e-a9d9-df79f224cdcb",
    "id": 1385,
    "name": "Overdue for QRT child followup",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "7a199bca-66b5-4ca7-a006-25e7c16eb448",
    "id": 1382,
    "name": "Due visits for ANC",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "5f45e0bc-c21e-465d-a62c-7c55c48f4626",
    "id": 1391,
    "name": "Overdue for NRC (voided~2913)",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": true
  },
  {
    "uuid": "3235075b-65aa-4727-a2d0-e48c847a359a",
    "id": 2739,
    "name": "Growth Faltering-1",
    "query" : 
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
},
    "description": "",
    "color": "#dfa75c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "a9d5b70b-3d46-40a7-85ff-2b39477e85c1",
    "id": 817,
    "name": "Total AWC Profiles Registered",
    "query" : 
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
},
    "description": "",
    "color": "#688297",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "9367ae53-d3cb-499e-847e-dfc9f23fff1e",
    "id": 1384,
    "name": "Overdue visits for Growth Monitoring",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "1485a4d4-a1ad-47d5-b2d8-ced2ec5b2837",
    "id": 1381,
    "name": "Overdue visits for delviery",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "b3f19a1a-2b78-454d-9af3-c0d9c19ce265",
    "id": 2740,
    "name": "Lactating Mother ",
    "query" : 
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
},
    "description": "",
    "color": "#8b6e43",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "711aad72-f8d7-4a6b-a777-5b83c55e0bb7",
    "id": 821,
    "name": "Total individuals registered",
    "query" : 
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
},
    "description": "",
    "color": "#5a8f7b",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "7f25acfc-437b-42c8-901f-ceb170364eda",
    "id": 1386,
    "name": "Due visits for QRT child followup",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "fdea8428-2197-4fc5-bf5e-af77a90a8b4d",
    "id": 1394,
    "name": "Due visits for Delivery",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ef8f89d1-ab13-4018-8e63-02ef11bcbebf",
    "id": 1379,
    "name": "Overdue visits for ANC",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "5517b13f-2320-4895-af00-5386d0207711",
    "id": 1396,
    "name": "Due for NRC (voided~2914)",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": true
  },
  {
    "uuid": "579edeb1-fd56-4997-bc2b-df92711373dd",
    "id": 3101,
    "name": "QRT Intervention Required?",
    "query" : 
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
        query = `individual.lowestAddressLevel.uuid IN ${output}`;
    }

    let indList = params.db.objects('ProgramEnrolment').filtered(`voided = false AND programExitDateTime = null AND program.name = 'Child' AND individual.voided = false`).filtered(`${query}`);

    indList =  indList.filter(enrolment=>{
        let ans = false;
        const poshansathi_encounter = enrolment.lastFulfilledEncounter("Medical Facilitation for Poshan Sathi");
        
        if(poshansathi_encounter){
            const val = poshansathi_encounter.getObservationReadableValue("Is QRT Intervention Required?") == "Yes";
            if(val){
                ans = true;
                const qrt_encounter = enrolment.lastFulfilledEncounter("Medical Facilitation for QRT");
                if(qrt_encounter){
                    ans = !moment(qrt_encounter.encounterDateTime).isAfter(poshansathi_encounter.encounterDateTime);
                }
            }
        }
        return ans;
    }).map(enrolment=>enrolment.individual);
    
    return indList;     
},
    "description": "",
    "color": "#7ce8cb",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "cdc19d43-8e4d-45c5-b3e6-21dba492eaae",
    "id": 1380,
    "name": "Overdue visits for PNC",
    "query" : 
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
},
    "description": "",
    "color": "#ee6983",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "cf6dfbe4-1b22-49c7-a620-615130ab0be7",
    "id": 3102,
    "name": "Monthly Training Done?",
    "query" : 
({params, imports}) => {
    const moment = imports.moment;
    const currentDate = moment();
    const currentMonth = currentDate.month(); 
    const currentYear = currentDate.year();

    const pashanSathis = () => params.db.objects('Individual').filtered("voided == false and subjectType.name == 'TIMS for Poshan Sathi'");
    
    function isCurrentMonth(encounterDateTime){

        if(encounterDateTime == null) return false;
        
        const encounterDate = moment(encounterDateTime)
        if(encounterDate.month() == currentMonth && encounterDate.year() == currentYear) return true;

        return false;
    }

    const trainingEnc = params.db.objects('Encounter').filtered("voided = false and encounterType.name = 'Training'")
        
    const isTrainingDone =  trainingEnc.some((enc)=> isCurrentMonth(enc.encounterDateTime));
    
    const colours = {
        red: '#ff1300',
        green: '#3cc936'
    }
    
    const primaryValue = pashanSathis().length
    const cardColor = isTrainingDone ? colours.green: colours.red;

    return {
        reportCards: [
            {
                cardColor: cardColor,
                primaryValue: primaryValue,   
                secondaryValue: null,
                lineListFunction: pashanSathis
            }
        ]
    };
},
    "description": "Green indicates completed and Red indicates not completed",
    "color": "#8b3e75",
    "nested": true,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "d1bb6b10-d7fb-4891-b928-5791c753af56",
    "id": 1395,
    "name": "Due visits for PW Home Visit",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "1376248d-7f82-472a-8674-81791ea378f5",
    "id": 2743,
    "name": "Growth Faltering-2",
    "query" : 
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
},
    "description": "",
    "color": "#c47f23",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ff1ce5a0-3d5a-46c9-9914-23a29893ed9d",
    "id": 2744,
    "name": "Total children enrolled in CMAM program",
    "query" : 
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
},
    "description": "",
    "color": "#2196f3",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "fb76dd4c-b8f0-4d01-8761-5bdc27638a0d",
    "id": 2738,
    "name": "Current Pregnant Women",
    "query" : 
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
        .filtered(`voided=false and SUBQUERY(enrolments, $enrolment, $enrolment.program.name = 'Child' and $enrolment.programExitDateTime = null and $enrolment.voided = false and SUBQUERY($enrolment.encounters, $encounter, $encounter.encounterType.name = 'Growth Monitoring' and $encounter.voided = false ).@count > 0 and voided = false).@count > 0 AND dateOfBirth >= $0`,date)
        .filter((individual) => _.some(individual.enrolments, enrolment => currentMonthChildFollowup(enrolment)))
};

",
    "description": "Growth Monitoring due for current month",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "374053d2-6ff1-495c-a272-dce1a86df587",
    "id": 1743,
    "name": "MAM children",
    "query" : 
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
},
    "description": "",
    "color": "#FFBF40",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "228f024c-c5ad-4b52-9dff-c92ab65398b4",
    "id": 1388,
    "name": "Due visits for QRT PW",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "36144580-032c-4b33-833c-5c8622b39728",
    "id": 1393,
    "name": "Due visits for Growth Monitoring",
    "query" : 
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
}
,
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "34bf9d6a-96bb-442b-99f0-f860b36486c9",
    "id": 2741,
    "name": "Number of growth monitoring visits done this month",
    "query" : 
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
}
,
    "description": "",
    "color": "#f4bb59",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "14937ab7-b8d0-4d06-93b6-a874a49b72a6",
    "id": 822,
    "name": "Total enrolments in child program",
    "query" : 
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
},
    "description": "",
    "color": "#2196f3",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ec717e09-ee5f-4bcb-bb1d-690a3c6f8d35",
    "id": 1392,
    "name": "Due for QRT SAM child",
    "query" : 
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
},
    "description": "",
    "color": "#f7a76c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  }
]