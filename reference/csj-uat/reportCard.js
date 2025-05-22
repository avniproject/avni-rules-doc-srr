[
  {
    "uuid": "9e436998-101d-4b97-b8de-a24fa59e9e85",
    "id": 3860,
    "name": "No. of total Active Cases - Other Field Workers data ",
    "query" : 
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
},
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ad412b45-198e-4631-ba92-950a016ff43d",
    "id": 3868,
    "name": "No. of active case pre-lit - Other Field Workers data ",
    "query" : 
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
},
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "f5322473-00da-4a1b-93a0-b68ef439f8a4",
    "id": 3870,
    "name": "No. of Active (litigation) - Other Field Workers data ",
    "query" : 
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
},
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "f8a88f9b-8f74-45d8-a8c0-19389cb7ad94",
    "id": 3869,
    "name": "No. of Active (litigation) - Own Data",
    "query" : 
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
},
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "daa9f02f-e63a-48b4-a135-77a7491420f7",
    "id": 3867,
    "name": "No. of active case pre-lit - Own Data",
    "query" : 

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
,
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "12672744-33e7-4330-95d3-bba2a264945b",
    "id": 3859,
    "name": "No. of total Active Cases - Own Data",
    "query" : 
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
},
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6085c2f4-52e7-4b08-85b6-d6b2612b4cf5",
    "id": 3513,
    "name": "Scheduled visits",
    "color": "#388e3c",
    "nested": false,
    "count": 1,
    "standardReportCardType": "27020b32-c21b-43a4-81bd-7b88ad3a6ef0",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "85ce7239-e8b5-4e57-b07d-66c18cee47b2",
    "id": 3514,
    "name": "Overdue visits",
    "color": "#d32f2f",
    "nested": false,
    "count": 1,
    "standardReportCardType": "9f88bee5-2ab9-4ac4-ae19-d07e9715bdb5",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "a1673f8a-c394-4bcf-8b6f-63d83a5443e2",
    "id": 3515,
    "name": "Total",
    "color": "#ffffff",
    "nested": false,
    "count": 1,
    "standardReportCardType": "1fbcadf3-bf1a-439e-9e13-24adddfbf6c0",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "f366f35a-5c4f-4ff7-b510-2dc9f5f88847",
    "id": 3516,
    "name": "Recent registrations",
    "color": "#ffffff",
    "nested": false,
    "count": 1,
    "standardReportCardType": "88a7514c-48c0-4d5d-a421-d074e43bb36c",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "standardReportCardInputRecentDuration": "{"value":"1","unit":"days"}",
    "voided": false
  },
  {
    "uuid": "e1036b69-df46-4351-9916-10cd4cfcb6bd",
    "id": 3517,
    "name": "Recent enrolments",
    "color": "#ffffff",
    "nested": false,
    "count": 1,
    "standardReportCardType": "a5efc04c-317a-4823-a203-e62603454a65",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "standardReportCardInputRecentDuration": "{"value":"1","unit":"days"}",
    "voided": false
  },
  {
    "uuid": "dd961ee1-9d4e-4ec9-99f0-99b36672be7c",
    "id": 3518,
    "name": "Recent visits",
    "color": "#ffffff",
    "nested": false,
    "count": 1,
    "standardReportCardType": "77b5b3fa-de35-4f24-996b-2842492ea6e0",
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "standardReportCardInputRecentDuration": "{"value":"1","unit":"days"}",
    "voided": false
  },
  {
    "uuid": "2cf489cb-c117-416a-9ffd-d23271784a99",
    "id": 3877,
    "name": "Cases with dates with court dates in the next one month - Own Data",
    "query" : 
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
},
    "description": "",
    "color": "#0094ff",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "63d51ddf-1a82-43bc-83cb-2136693017cf",
    "id": 3843,
    "name": "Count of total outreach registered till date",
    "description": "",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardType": "1fbcadf3-bf1a-439e-9e13-24adddfbf6c0",
    "standardReportCardInputSubjectTypes": [
      "a92cdaae-19cd-4778-920c-235e30c5ecdf"
    ],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "85694b94-40e9-459e-af1d-ab1a61ad5250",
    "id": 3844,
    "name": "No. of total Active Cases  (voided~3844)",
    "description": "Count of all cases whose "Status of case " is not Closed or Disposed",
    "color": "#ff0000",
    "nested": false,
    "count": 1,
    "standardReportCardType": "1fbcadf3-bf1a-439e-9e13-24adddfbf6c0",
    "standardReportCardInputSubjectTypes": [
      "0bc1dbf5-6790-4c9b-b5eb-d241ec6b0379"
    ],
    "standardReportCardInputPrograms": [
      "73651784-823d-43b0-a967-7e4508a6d12f"
    ],
    "standardReportCardInputEncounterTypes": [],
    "voided": true
  },
  {
    "uuid": "aec690c9-4937-43fd-9bd0-23d1dcde9e32",
    "id": 3907,
    "name": "Cases with dates with court dates in the next one month - Other Field Workers data ",
    "query" : 
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
},
    "description": "",
    "color": "#00fff0",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "462a7927-aa88-4813-80ea-c0f9846be5ce",
    "id": 3850,
    "name": "Internal Trainings - Other Field Workers data ",
    "query" : 

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
},
    "description": "",
    "color": "#66e618",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "a4bad348-33bf-47b0-998e-92f7fe083e76",
    "id": 3906,
    "name": "Cases with non-court next steps scheduled in the next month - Own Data",
    "query" : 
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
},
    "description": "Show count of all casesWas it a court hearing date? : No
and Deadline for next step is within 1 month",
    "color": "#00ffe0",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "5223ae04-52fa-4c19-ac4a-6c7945de6569",
    "id": 3908,
    "name": "Cases with non-court next steps scheduled in the next month - Other Field Workers data ",
    "query" : 
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
},
    "description": "Show count of all cases Was it a court hearing date? : No and Deadline for next step is within 1 month",
    "color": "#00d9ff",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "3539ddd9-533a-4b74-b530-9c1dbb4b3aae",
    "id": 3909,
    "name": "FF conversion  - Own Data",
    "query" : 
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
},
    "description": "Nature of the case :  Criminal prosecution fresh filing  or Criminal defence fresh filingStatus of case is in " Active (pre-litigation)" for more than 90days
and Fact Finding form for these cases are filled",
    "color": "#b5ff00",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "74e10e29-f266-4a51-a3f4-07fffaa199ac",
    "id": 3910,
    "name": "FF conversion  - Other Field Workers data ",
    "query" : 
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
},
    "description": "Nature of the case :  Criminal prosecution fresh filing  or Criminal defence fresh filingStatus of case is in " Active (pre-litigation)" for more than 90days
and Fact Finding form for these cases are filled",
    "color": "#ff9100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "347844fb-96d2-48ef-8dc1-d361852dc54a",
    "id": 3846,
    "name": "Number of Interns - Own Data",
    "query" : 
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
},
    "description": "",
    "color": "#1a87d7",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "951f5f88-ad00-4403-bb20-6cbf651e5dff",
    "id": 3847,
    "name": "Number of Interns - Other Field Workers data",
    "query" : 
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
},
    "description": "Total number of interns in catchment",
    "color": "#ff9900",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "cc0edb0f-78be-48f7-bfb6-e45819de4f36",
    "id": 3845,
    "name": "External Trainings - Own Data",
    "query" : 

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
,
    "description": "",
    "color": "#ffcf00",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "ef43ae77-576f-496e-9717-b24e5e1a3c75",
    "id": 3848,
    "name": "External Trainings - Other Field Workers data ",
    "query" : 

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
,
    "description": "",
    "color": "#ccff00",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "08148569-c29c-4b4e-8a2d-d41a50292270",
    "id": 3849,
    "name": "Internal Trainings - Own Data",
    "query" : 

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
},
    "description": "",
    "color": "#24bff0",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "7311597c-bab9-4fa3-bee7-be4333de4c66",
    "id": 3911,
    "name": "No. of claims registered this month - OWN DATA",
    "query" : 
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
},
    "description": "",
    "color": "#22b762",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "d9d046c9-fe08-4049-8db2-824020a76555",
    "id": 3858,
    "name": "Active Campaign - Other Field Workers data ",
    "query" : 

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
},
    "description": "",
    "color": "#ffa100",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6ef87d47-e2b3-45e7-a11d-72b10dfdd09e",
    "id": 3857,
    "name": "Active Campaign - Own Data",
    "query" : 

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
},
    "description": "",
    "color": "#ffde00",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "53464f4b-9022-4f56-9aa0-01ce85ad1339",
    "id": 3912,
    "name": "No. of claims registered this month - Other Field worker Data",
    "query" : 
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
},
    "description": "",
    "color": "#1ab8bd",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  }
]