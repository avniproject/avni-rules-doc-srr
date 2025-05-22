// No. of total Active Cases - Other Field Workers data ",
({params, imports}) => {
    let UUIDs = params.user.userUUID;
    let caseStatus = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND voided = false
      AND programExitDateTime = null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                  $observation.valueJSON CONTAINS '65688e86-a632-4e70-9ef8-4f19b0fc3bee' 
                  OR 
                  $observation.valueJSON CONTAINS 'd56b69db-da83-4f60-9a3f-4cc159e5e191'
            )
      ).@count > 0 AND createdByUUID != $0`,UUIDs
    ).map((enrl) => enrl.individual);
    
    return caseStatus;
}

// "No. of active case pre-lit - Other Field Workers data ",
({params, imports}) => {
    let UUIDs = params.user.userUUID;
    let caseStatus = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND voided = false
      AND programExitDateTime = null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                  $observation.valueJSON CONTAINS 'b5d60cc0-716a-4980-ac26-13559bfb31ac' 
            )
      ).@count > 0 AND createdByUUID != $0`,UUIDs
    ).map((enrl) => enrl.individual);
    
    return caseStatus;
}

// "No. of Active (litigation) - Other Field Workers data ",
({params, imports}) => {
    let UUIDs = params.user.userUUID;
    let caseStatus = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND voided = false
      AND programExitDateTime = null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                  $observation.valueJSON CONTAINS 'df2c6f91-cf67-494c-9e85-8816918f0fed' 
            )
      ).@count > 0 AND createdByUUID != $0`,UUIDs
    ).map((enrl) => enrl.individual);
    
    return caseStatus;
}

// "No. of Active (litigation) - Own Data",
({params, imports}) => {
    let UUIDs = params.user.userUUID;
    let caseStatus = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND voided = false
      AND programExitDateTime = null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                  $observation.valueJSON CONTAINS 'df2c6f91-cf67-494c-9e85-8816918f0fed' 
            )
      ).@count > 0 AND (createdByUUID = NULL OR createdByUUID = $0)`,UUIDs
    ).map((enrl) => enrl.individual);
    
    return caseStatus;
}

// "No. of active case pre-lit - Own Data",
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.name);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        program.name = 'Case Status' 
        AND voided = false
        AND programExitDateTime = null 
        AND individual.voided = false
        AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                $observation.valueJSON CONTAINS 'b5d60cc0-716a-4980-ac26-13559bfb31ac'
            )
        ).@count > 0
        AND (createdByUUID = NULL OR createdByUUID = $0)
    `;

    let queryParams = [UUIDs];

    if (minDateValue && maxDateValue) {
        query += ` AND enrollmentDateTime >= $1 AND enrollmentDateTime <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    }

    if (addressValue.length > 0) {
        query += ` AND individual.lowestAddressLevel.name IN $3`;
        queryParams.push(addressValue);
    }

    let caseStatus = params.db.objects("ProgramEnrolment").filtered(query, ...queryParams)
        .map((enrl) => enrl.individual);

    return caseStatus;
}

// "No. of total Active Cases - Own Data",
({params, imports}) => {
    let UUIDs = params.user.userUUID;
    let caseStatus = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND voided = false
      AND programExitDateTime = null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
            $observation.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' AND
            (
                  $observation.valueJSON CONTAINS '65688e86-a632-4e70-9ef8-4f19b0fc3bee' 
                  OR 
                  $observation.valueJSON CONTAINS 'd56b69db-da83-4f60-9a3f-4cc159e5e191'
            )
      ).@count == 0 AND (createdByUUID = NULL OR createdByUUID = $0)`,UUIDs
    ).map((enrl) => enrl.individual);
    
    return caseStatus;
}

// "Cases with dates with court dates in the next one month - Own Data",
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);

    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Activity Register' 
        AND voided = false
        AND individual.voided = false
        AND SUBQUERY(observations, $obs,
            $obs.concept.uuid = 'cd8aa6fb-9277-47a5-b082-a70c76d3cc56'
        ).@count > 0 
        AND (createdByUUID == NULL OR createdByUUID = $0)
    `, UUIDs);
    
    let validEncounters = encounters.filter(encounter => {
        return encounter.observations.some(obs => {
            if (obs.concept.uuid === 'cd8aa6fb-9277-47a5-b082-a70c76d3cc56' && obs.valueJSON) {
                let parsedValue = typeof obs.valueJSON === "string" ? JSON.parse(obs.valueJSON) : obs.valueJSON;
                
                let dateString = null;
                if (parsedValue) {
                    if (parsedValue.answer) {
                        dateString = parsedValue.answer;
                    } else if (parsedValue.value) {
                        dateString = parsedValue.value;
                    }
                }
                if (!dateString) return false;
                let nextDate = new Date(dateString);
                return !isNaN(nextDate) && nextDate >= currentDate && nextDate <= nextMonthDate;
            }
            return false;
        });
    });

    return validEncounters.map(enc => enc.individual);
}

// Cases with dates with court dates in the next one month - Other Field Workers data
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);

    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Activity Register' 
        AND voided = false
        AND individual.voided = false
        AND SUBQUERY(observations, $obs,
            $obs.concept.uuid = 'cd8aa6fb-9277-47a5-b082-a70c76d3cc56'
        ).@count > 0 
        AND (createdByUUID == NULL OR createdByUUID != $0)
    `, UUIDs);
    
    let validEncounters = encounters.filter(encounter => {
        return encounter.observations.some(obs => {
            if (obs.concept.uuid === 'cd8aa6fb-9277-47a5-b082-a70c76d3cc56' && obs.valueJSON) {
                let parsedValue = typeof obs.valueJSON === "string" ? JSON.parse(obs.valueJSON) : obs.valueJSON;
                
                let dateString = null;
                if (parsedValue) {
                    if (parsedValue.answer) {
                        dateString = parsedValue.answer;
                    } else if (parsedValue.value) {
                        dateString = parsedValue.value;
                    }
                }
                if (!dateString) return false;
                let nextDate = new Date(dateString);
                return !isNaN(nextDate) && nextDate >= currentDate && nextDate <= nextMonthDate;
            }
            return false;
        });
    });

    return validEncounters.map(enc => enc.individual);
}

// Cases with non-court next steps scheduled in the next month - Own Data
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);

    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Activity Register' 
        AND voided = false
        AND individual.voided = false
        AND SUBQUERY(observations, $obs,
            $obs.concept.uuid = '12003b39-078c-4f63-aa93-ecfb2e774557'
            AND $obs.valueJSON CONTAINS '03ead610-1596-4a1f-b57d-07792c6e66b6'
        ).@count > 0 
        AND (createdByUUID == NULL OR createdByUUID = $0)
    `, UUIDs);
    
    let validEncounters = encounters.filter(encounter => {
        return encounter.observations.some(obs => {
            if (obs.concept.uuid === '3fe8e744-2225-420a-8d00-93f16cacf77b' && obs.valueJSON) {
                let parsedValue = typeof obs.valueJSON === "string" ? JSON.parse(obs.valueJSON) : obs.valueJSON;
                let dateString = null;
                if (parsedValue) {
                    if (parsedValue.answer) {
                        dateString = parsedValue.answer;
                    } else if (parsedValue.value) {
                        dateString = parsedValue.value;
                    }
                }
                if (!dateString) return false;
                let nextDate = new Date(dateString);
                return !isNaN(nextDate) && nextDate >= currentDate && nextDate <= nextMonthDate;
            }
            return false;
        });
    });

    return validEncounters.map(enc => enc.individual);
}


// Cases with non-court next steps scheduled in the next month - Other Field Workers data 
// Nature of the case :  Criminal prosecution fresh filing  or Criminal defence fresh filingStatus of case is in " Active (pre-litigation)" for more than 90days
// and Fact Finding form for these cases are filled"
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);

    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Activity Register' 
        AND voided = false
        AND individual.voided = false
        AND SUBQUERY(observations, $obs,
            $obs.concept.uuid = '12003b39-078c-4f63-aa93-ecfb2e774557'
            AND $obs.valueJSON CONTAINS '03ead610-1596-4a1f-b57d-07792c6e66b6'
        ).@count > 0 
        AND (createdByUUID == NULL OR createdByUUID != $0)
    `, UUIDs);
    
    let validEncounters = encounters.filter(encounter => {
        return encounter.observations.some(obs => {
            if (obs.concept.uuid === '3fe8e744-2225-420a-8d00-93f16cacf77b' && obs.valueJSON) {
                let parsedValue = typeof obs.valueJSON === "string" ? JSON.parse(obs.valueJSON) : obs.valueJSON;
                let dateString = null;
                if (parsedValue) {
                    if (parsedValue.answer) {
                        dateString = parsedValue.answer;
                    } else if (parsedValue.value) {
                        dateString = parsedValue.value;
                    }
                }
                if (!dateString) return false;
                let nextDate = new Date(dateString);
                return !isNaN(nextDate) && nextDate >= currentDate && nextDate <= nextMonthDate;
            }
            return false;
        });
    });

    return validEncounters.map(enc => enc.individual);
}

// FF conversion  - Own Data
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    
    let addressValue = [];
    let genderValue = [];
    
    let query = `voided = false `;

    if (addressValue.length > 0) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query += ` AND individual.lowestAddressLevel.uuid IN ${output} `;
    }
    if(genderValue.length > 0) {
        let output =  `{${genderValue.map(item => `'${item}'`).join(', ')}}`;
        query += ` AND individual.gender.uuid IN ${output}`
    }
    
    let enrolments = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND programExitDateTime != null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
        $observation.concept.uuid = '252f4c55-d113-4951-8ebb-eed01b9ccbb9' 
        AND (
          $observation.valueJSON CONTAINS 'a3d1b65d-0e00-4e78-9cf2-0bbd29e77642' 
          OR $observation.valueJSON CONTAINS '0fc2f7cb-ab3e-4474-8d85-c4e40917409f'
        )  
      ).@count > 0 
      AND SUBQUERY(observations, $observation2,
        $observation2.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' 
        AND $observation2.valueJSON CONTAINS 'b5d60cc0-716a-4980-ac26-13559bfb31ac'
      ).@count > 0
      AND (createdByUUID == NULL OR createdByUUID = $0)`
    , UUIDs);
    
    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Fact Finding' 
        AND voided = false
        AND individual.voided = false
        AND encounterDateTime != null 
        AND (createdByUUID == NULL OR createdByUUID = $0)
    `, UUIDs);
    
    let enrolmentArray = enrolments.map(enrl => ({
        individual: enrl.individual,
        enrolmentDateTime: enrl.enrolmentDateTime
    }));

    let encounterArray = encounters.map(enc => ({
        individual: enc.individual,
        encounterDateTime: enc.encounterDateTime
    }));
    
    let result = enrolmentArray.filter(enrl => {
        let matchedEncounters = encounterArray.filter(enc => 
            enc.individual.uuid === enrl.individual.uuid && 
            (new Date(enc.encounterDateTime) - new Date(enrl.enrolmentDateTime)) / (1000 * 60 * 60 * 24) > 90
        );
        return matchedEncounters.length > 0;
    }).map(enrl => enrl.individual);

    return result;
}

// FF conversion  - Other Field Workers data 
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let currentDate = new Date();
    let nextMonthDate = new Date();
    nextMonthDate.setMonth(currentDate.getMonth() + 1);
    
    let addressValue = [];
    let genderValue = [];
    
    let query = `voided = false `;

    if (addressValue.length > 0) {
        let output = `{${addressValue.map(item => `'${item}'`).join(', ')}}`;
        query += ` AND individual.lowestAddressLevel.uuid IN ${output} `;
    }
    if(genderValue.length > 0) {
        let output =  `{${genderValue.map(item => `'${item}'`).join(', ')}}`;
        query += ` AND individual.gender.uuid IN ${output}`
    }
    
    let enrolments = params.db.objects("ProgramEnrolment").filtered(`
      program.name = 'Case Status' 
      AND programExitDateTime != null 
      AND individual.voided = false
      AND SUBQUERY(observations, $observation,
        $observation.concept.uuid = '252f4c55-d113-4951-8ebb-eed01b9ccbb9' 
        AND (
          $observation.valueJSON CONTAINS 'a3d1b65d-0e00-4e78-9cf2-0bbd29e77642' 
          OR $observation.valueJSON CONTAINS '0fc2f7cb-ab3e-4474-8d85-c4e40917409f'
        )  
      ).@count > 0 
      AND SUBQUERY(observations, $observation2,
        $observation2.concept.uuid = 'b1927aeb-ab4c-46a6-8eff-6ccdf38f5478' 
        AND $observation2.valueJSON CONTAINS 'b5d60cc0-716a-4980-ac26-13559bfb31ac'
      ).@count > 0
      AND (createdByUUID == NULL OR createdByUUID != $0)`
    , UUIDs);
    
    let encounters = params.db.objects("Encounter").filtered(`
        encounterType.name = 'Case Fact Finding' 
        AND voided = false
        AND individual.voided = false
        AND encounterDateTime != null 
        AND (createdByUUID == NULL OR createdByUUID != $0)
    `, UUIDs);
    
    let enrolmentArray = enrolments.map(enrl => ({
        individual: enrl.individual,
        enrolmentDateTime: enrl.enrolmentDateTime
    }));

    let encounterArray = encounters.map(enc => ({
        individual: enc.individual,
        encounterDateTime: enc.encounterDateTime
    }));
    
    let result = enrolmentArray.filter(enrl => {
        let matchedEncounters = encounterArray.filter(enc => 
            enc.individual.uuid === enrl.individual.uuid && 
            (new Date(enc.encounterDateTime) - new Date(enrl.enrolmentDateTime)) / (1000 * 60 * 60 * 24) > 90
        );
        return matchedEncounters.length > 0;
    }).map(enrl => enrl.individual);

    return result;
}


// Number of Interns - Own Data
({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let addressValue = [];
    let asOnDateValue = null;
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type == "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type == "Level 4")
                .map(add => add.uuid);
        }

        let asOnDateFilter = params.ruleInput.filter(rule => rule.type == "AsOnDate");
        if (asOnDateFilter.length > 0 && asOnDateFilter[0].filterValue) {
            let dateInput = new Date(asOnDateFilter[0].filterValue);
            asOnDateValue = new Date(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDate(), 0, 0, 0, 0);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type == "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);
            
            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999); // Ensures end of day for max date
        }
    }

    let query = `voided = false AND subjectType.name = 'Intern'`;

    if (addressValue.length > 0) {
        let output = addressValue.map(item => `'${item}'`).join(", ");
        query += ` AND lowestAddressLevel.uuid IN {${output}}`;
    }

    if (asOnDateValue) {
        query += ` AND registrationDate == $1`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $2 AND registrationDate <= $3`;
    }

    query += ` AND (createdByUUID == NULL OR createdByUUID == $0)`;

    console.log('Final Query:', query);

    return params.db.objects('Individual')
        .filtered(query, userUUID, asOnDateValue, minDateValue, maxDateValue);
}

// Number of Interns - Other Field Workers data
({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type == "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type == "Level 4")
                .map(add => add.uuid);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type == "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);
            
            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `voided = false AND subjectType.name = 'Intern'`;

    if (addressValue.length > 0) {
        let output = addressValue.map(item => `'${item}'`).join(", ");
        query += ` AND lowestAddressLevel.uuid IN {${output}}`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $1 AND registrationDate <= $2`;
    }

    query += ` AND (createdByUUID == NULL OR createdByUUID != $0)`;

    return params.db.objects('Individual')
        .filtered(query, userUUID, minDateValue, maxDateValue);
}

// External Trainings - Own Data
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.name);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        individual.voided = false 
        AND encounterType.name = "External Training"
        AND cancelDateTime = NULL 
        AND (createdByUUID = NULL OR createdByUUID = $0)
    `;

    let queryParams = [UUIDs];

    if (minDateValue && maxDateValue) {
        query += ` AND encounterDateTime >= $1 AND encounterDateTime <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    }

    if (addressValue.length > 0) {
        query += ` AND individual.lowestAddressLevel.name IN $3`;
        queryParams.push(addressValue); // Pass as an array
    }

    let externalTraining = params.db.objects('Encounter').filtered(query, ...queryParams);

    return {
        primaryValue: externalTraining.length,
        lineListFunction: () => externalTraining.map(enc => enc.individual)
    };
}

// External Trainings - Other Field Workers data 
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.name);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        individual.voided = false 
        AND encounterType.name = "External Training"
        AND cancelDateTime = NULL 
        AND (createdByUUID = NULL OR createdByUUID != $0)
    `;

    let queryParams = [UUIDs];

    if (minDateValue && maxDateValue) {
        query += ` AND encounterDateTime >= $1 AND encounterDateTime <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    }

    if (addressValue.length > 0) {
        query += ` AND individual.lowestAddressLevel.name IN $3`;
        queryParams.push(addressValue); // Pass as an array
    }

    let externalTraining = params.db.objects('Encounter').filtered(query, ...queryParams);

    return {
        primaryValue: externalTraining.length,
        lineListFunction: () => externalTraining.map(enc => enc.individual)
    };
}


//Internal Trainings - Other Field Workers data 
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.name);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        individual.voided = false 
        AND encounterType.name = "Internal Training"
        AND cancelDateTime = NULL 
        AND (createdByUUID = NULL OR createdByUUID != $0)
    `;

    let queryParams = [UUIDs];

    if (minDateValue && maxDateValue) {
        query += ` AND encounterDateTime >= $1 AND encounterDateTime <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    }

    if (addressValue.length > 0) {
        query += ` AND individual.lowestAddressLevel.name IN $3`;
        queryParams.push(addressValue); // Pass as an array
    }

    let internalTraining = params.db.objects('Encounter').filtered(query, ...queryParams);

    return {
        primaryValue: internalTraining.length,
        lineListFunction: () => internalTraining.map(enc => enc.individual)
    };
}

// Internal Trainings - Own Data
({ params, imports }) => {
    let UUIDs = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.name);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        individual.voided = false 
        AND encounterType.name = "Internal Training"
        AND cancelDateTime = NULL 
        AND (createdByUUID = NULL OR createdByUUID = $0)
    `;

    let queryParams = [UUIDs];

    if (minDateValue && maxDateValue) {
        query += ` AND encounterDateTime >= $1 AND encounterDateTime <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    }

    if (addressValue.length > 0) {
        query += ` AND individual.lowestAddressLevel.name IN $3`;
        queryParams.push(addressValue); // Pass as an array
    }

    let internalTraining = params.db.objects('Encounter').filtered(query, ...queryParams);

    return {
        primaryValue: internalTraining.length,
        lineListFunction: () => internalTraining.map(enc => enc.individual)
    };
}

// No. of claims registered this month - OWN DATA
({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let addressValue = [];
    let asOnDateValue = null;
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type == "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type == "Level 4")
                .map(add => add.uuid);
        }

        let asOnDateFilter = params.ruleInput.filter(rule => rule.type == "AsOnDate");
        if (asOnDateFilter.length > 0 && asOnDateFilter[0].filterValue) {
            let dateInput = new Date(asOnDateFilter[0].filterValue);
            asOnDateValue = new Date(dateInput.getFullYear(), dateInput.getMonth(), dateInput.getDate(), 0, 0, 0, 0);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type == "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);
            
            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999); // Ensures end of day for max date
        }
    }

    let query = `voided = false AND subjectType.name = 'Claim'`;

    if (addressValue.length > 0) {
        let output = addressValue.map(item => `'${item}'`).join(", ");
        query += ` AND lowestAddressLevel.uuid IN {${output}}`;
    }

    if (asOnDateValue) {
        query += ` AND registrationDate == $1`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $2 AND registrationDate <= $3`;
    }

    query += ` AND (createdByUUID == NULL OR createdByUUID == $0)`;

    console.log('Final Query:', query);

    return params.db.objects('Individual')
        .filtered(query, userUUID, asOnDateValue, minDateValue, maxDateValue);
}

// Active Campaign - Other Field Workers data 
({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for date comparison

    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        // Extract Address Filter
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.uuid);
        }
        
        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        voided = false 
        AND subjectType.name = 'Campaign' 
        AND registrationDate != $0
    `;
    let queryParams = [today];

    if (addressValue.length > 0) {
        query += ` AND lowestAddressLevel.uuid IN {${addressValue.map(item => `'${item}'`).join(", ")}}`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $1 AND registrationDate <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    } else {
        queryParams.push(null, null);
    }

    query += ` AND (createdByUUID = NULL OR createdByUUID != $3)`;
    queryParams.push(userUUID);

    return params.db.objects('Individual').filtered(query, ...queryParams);
}

// Active Campaign - Own Data

({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let today = new Date();
    today.setHours(0, 0, 0, 0); // Set time to midnight for date comparison

    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        // Extract Address Filter
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type === "Level 4")
                .map(add => add.uuid);
        }

        // Extract Date Range Filter
        let rangeDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);

            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `
        voided = false 
        AND subjectType.name = 'Campaign' 
        AND registrationDate != $0
    `;
    let queryParams = [today];

    if (addressValue.length > 0) {
        query += ` AND lowestAddressLevel.uuid IN {${addressValue.map(item => `'${item}'`).join(", ")}}`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $1 AND registrationDate <= $2`;
        queryParams.push(minDateValue, maxDateValue);
    } else {
        // If no date range filter, add placeholders for consistency
        queryParams.push(null, null);
    }

    query += ` AND (createdByUUID = NULL OR createdByUUID = $3)`;
    queryParams.push(userUUID);


    return params.db.objects('Individual').filtered(query, ...queryParams);
}

// No. of claims registered this month - Other Field worker Data
({ params, imports }) => {
    let userUUID = params.user.userUUID;
    let addressValue = [];
    let minDateValue = null;
    let maxDateValue = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type == "Address");
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            addressValue = addressFilter[0].filterValue
                .filter(add => add.type == "Level 4")
                .map(add => add.uuid);
        }

        let rangeDateFilter = params.ruleInput.filter(rule => rule.type == "RegistrationDate");
        if (rangeDateFilter.length > 0 && rangeDateFilter[0].filterValue) {
            let minDateInput = new Date(rangeDateFilter[0].filterValue.minValue);
            let maxDateInput = new Date(rangeDateFilter[0].filterValue.maxValue);
            
            minDateValue = new Date(minDateInput.getFullYear(), minDateInput.getMonth(), minDateInput.getDate(), 0, 0, 0, 0);
            maxDateValue = new Date(maxDateInput.getFullYear(), maxDateInput.getMonth(), maxDateInput.getDate(), 23, 59, 59, 999);
        }
    }

    let query = `voided = false AND subjectType.name = 'Claim'`;

    if (addressValue.length > 0) {
        let output = addressValue.map(item => `'${item}'`).join(", ");
        query += ` AND lowestAddressLevel.uuid IN {${output}}`;
    }

    if (minDateValue && maxDateValue) {
        query += ` AND registrationDate >= $1 AND registrationDate <= $2`;
    }

    query += ` AND (createdByUUID == NULL OR createdByUUID != $0)`;

    return params.db.objects('Individual')
        .filtered(query, userUUID, minDateValue, maxDateValue);
}