[
  {
    "uuid": "ade954f4-0376-424b-9010-e5dc89649d52",
    "id": 2042,
    "name": "Distributed - Activities pending",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const isDistributionDone = (individual) => {
        const distributionWithoutactivities = individual.getEncounters()
            .filter((enc) => enc.encounterType.name === 'Distribution')
            .filter((enc) => _.isEmpty(enc.getObservationValue('Activities Done') ));
        if (distributionWithoutactivities.length > 0){     
            return true;
        }
        else {
            return false;
        }
    };
    let Activities = params.db.objects('Individual')
        .filter((individual) => individual.voided === false && individual.subjectType.name === 'Demand' && isDistributionDone(individual));
    return _.orderBy(Activities, ind => ind.registrationDate, 'desc');
},
    "description": "Demands with Distribution present with no values for "Activities done"",
    "color": "#ebc944",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "dd871765-c5ca-4696-8718-2d6af9ae56a3",
    "id": 2040,
    "name": "Distributions done",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;
        
    let Distributions = params.db.objects('Individual').filtered('subjectType.name = "Distribution" AND voided = false');
     
     if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            Distributions = Distributions.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }    


        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                Distributions = Distributions.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            Distributions = Distributions.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
    }     


                 
   return _.orderBy(Distributions, ind => ind.registrationDate, 'desc');
},
    "description": "",
    "color": "#92c5d3",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "65483e90-e323-4096-9e99-c3009800a1cc",
    "id": 2037,
    "name": "Dispatches to be received",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;
    
    const isOpenDispatch = (individual) => {
        const dispactReceiptEncounter = individual.getEncounters()
            .filter((enc) => enc.encounterType.name === 'Dispatch receipt' && (!enc.voided));
        if (dispactReceiptEncounter.length < 1 ){
            return true;
        }
        else {
            return false;
        }
    };

    let inds = params.db.objects('Individual').filtered('subjectType.name = "Dispatch" AND voided = false');
  
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            inds = inds.filtered(`registrationDate >= $0 and  registrationDate <= $1`,startDate,endDate);
        }
        

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "District").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                inds = inds.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            inds = inds.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
       
    }     
        

    inds = inds.filter(individual => {
        let val = individual.getObservationValue('b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392');
        return isOpenDispatch(individual) && val && val != 'Reached'
    })
          
    return _.orderBy(inds, ind => ind.registrationDate, 'desc')
},
    "description": "Total dispatch without having a dispatch receipt",
    "color": "#f58b4c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "82468ce4-0ef1-4aed-89bd-a6985ad55e89",
    "id": 2043,
    "name": "Distributions without activities",
    "query" : 
({params, imports}) => {
  const _= imports.lodash;
  const moment = imports.moment;  
  const Distributions = params.db.objects('Individual').filtered('subjectType.name = "Distribution" AND voided = false');
   
    
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            Distributions = Distributions.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }            

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                Distributions = Distributions.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            Distributions = Distributions.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
    }     
    

    Distributions = Distributions.filter((individual) => {
        const observationValue = individual.getObservationReadableValue('3fb0d2c5-0210-49be-a31c-a6a134131af3');
        if (!observationValue || _.isEmpty(observationValue) || _.isEmpty(observationValue[0])) {
          return true;
        }
        return false;
      });
  

  return _.orderBy(Distributions, ind => ind.registrationDate, 'desc');
  return Distributions;
},
    "description": "",
    "color": "#3d4caf",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "e5da553a-5f07-4cec-aedb-55e3f1fd11aa",
    "id": 2035,
    "name": "Demands to be dispatched",
    "query" : 
({params, imports}) => {
    const _ = imports.lodash;
    const moment = imports.moment;
    
    let demands = params.db.objects('Individual').filtered('subjectType.name = "Demand" AND voided = false');

           
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
               
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();            
            
            demands = demands.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }
        
        
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
           
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "District").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                demands = demands.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            demands = demands.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
        
       
    }                

    demands = demands.filter(individual => individual.getObservationValue('82970f35-d1aa-4e05-95fa-19b71617db0d') !== 'Dispatched');
    return _.orderBy(demands, ind => ind.registrationDate, 'desc');
},
    "description": "Total Demands with no Dispatch",
    "color": "#1496bb",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "979e3934-6533-4ad1-a3a5-ca77fe5ab742",
    "id": 2038,
    "name": "Received Dispatches",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;
        
    const dispatchesReceived = (individual) => {
        const dispatchEncounter = individual.getEncounters()
            .filter((enc) => enc.encounterType.name === 'Dispatch receipt' && enc.encounterDateTime != null);
        if (dispatchEncounter.length > 0) {
            return true;
        } 
        else {
            return false;
        }
    };
    
    let inds = params.db.objects('Individual').filtered('subjectType.name = "Dispatch" AND voided = false');
    


   if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            inds = inds.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }        

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "District").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                inds = inds.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            inds = inds.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
        
       
    }

    inds = inds.filter((individual)=> individual.getObservationValue('b7e82e4d-ee4c-4a6e-bb98-7a0b4eb21392') === 'Reached'
    || dispatchesReceived(individual));
    
          
    return _.orderBy(inds, ind => ind.registrationDate, 'desc')
},
    "description": "Showing the count of demands which have the Dispatch and Dispatch receipt form.",
    "color": "#a3b86c",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "934b2405-61c6-4576-8ce0-b9c8587215ac",
    "id": 2034,
    "name": "Activities not linked to distributions",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;     
    let addressQuery = '';
    let accountQuery = '';
    let startDate = null;  
    let endDate = null;

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter = params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
        }                

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village").map(add => add.uuid);

            if (addressValue.length > 0) {
                addressQuery = "lowestAddressLevel.uuid in {\\"" + addressValue.join("\\", \\"") + "\\"}";
            }
        }

        if (accountFilter.length > 0 && accountFilter[0].filterValue) {
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            accountQuery = ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            };
        }
    }

    let allDistributions = params.db.objects('Individual')
        .filtered('voided = false and subjectType.name = "Distribution"');

    const uuidsOfAllLinkedActivitiesSet = new Set();    

    allDistributions
        .filter(()=>true)
        .flatMap((individual) => individual.getObservationReadableValue('3fb0d2c5-0210-49be-a31c-a6a134131af3'))  // activity details
        .flatMap(arr => arr ? arr.map(obj => obj["Activities Done"]) : []) //question group
        .forEach(uuid => uuid && uuidsOfAllLinkedActivitiesSet.add(uuid) );

    let allActivities = params.db.objects('Individual')
        .filtered('voided = false and subjectType.name = "Activity"');
        
    if(startDate!=null && endDate!=null){
        allActivities = allActivities.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);    
    }         

    if (addressQuery.length > 0) {
        allActivities = allActivities.filtered(addressQuery);
    }
    if (accountQuery !== '') {
        allActivities = allActivities.filter(accountQuery);
    }
    let arr = allActivities.filter(i => !uuidsOfAllLinkedActivitiesSet.has(i.uuid));
    
    let allLinkedActivities = () => {
        return _.orderBy(arr, ind => ind.registrationDate, 'desc');
    };

    return{primaryValue:arr.length, lineListFunction : allLinkedActivities};
    // return _.orderBy(allLinkedActivities, ind => ind.registrationDate, 'desc');
};

",
    "description": "",
    "color": "#3f7229",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "1a030630-8541-4e81-9f9a-7912412b723c",
    "id": 2033,
    "name": "Activities linked to distribution",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;    
    let addressQuery = '';
    let accountQuery = '';
    let startDate = null;
    let endDate = null;
    

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter = params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();            
                       
            
        }            

        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village").map(add => add.uuid);

            if (addressValue.length > 0) {
                addressQuery = "lowestAddressLevel.uuid in {\\"" + addressValue.join("\\", \\"") + "\\"}";
            }
        }

        if (accountFilter.length > 0 && accountFilter[0].filterValue) {
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            accountQuery = ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            };
        }
    }

    let allDistributions = params.db.objects('Individual')
        .filtered('voided = false and subjectType.name = "Distribution"');

    const uuidsOfAllLinkedActivitiesSet = new Set();    

    allDistributions
        .filter(()=>true)
        .flatMap((individual) => individual.getObservationReadableValue('3fb0d2c5-0210-49be-a31c-a6a134131af3'))  // activity details
        .flatMap(arr => arr ? arr.map(obj => obj["Activities Done"]) : []) //question group
        .forEach(uuid => uuid && uuidsOfAllLinkedActivitiesSet.add(uuid) );

    let allActivities = params.db.objects('Individual')
        .filtered('voided = false and subjectType.name = "Activity"');
        
    if(startDate!=null && endDate!=null){
        allActivities = allActivities.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);    
    }    

    if (addressQuery.length > 0) {
        allActivities = allActivities.filtered(addressQuery);
    }
    if (accountQuery !== '') {
        allActivities = allActivities.filter(accountQuery);
    }
    let arr = allActivities.filter(i => uuidsOfAllLinkedActivitiesSet.has(i.uuid));
    
    let allLinkedActivities = () => {
        return _.orderBy(arr, ind => ind.registrationDate, 'desc');
    };

    return{primaryValue:arr.length, lineListFunction : allLinkedActivities};
    // return _.orderBy(allLinkedActivities, ind => ind.registrationDate, 'desc');
}
,
    "description": "",
    "color": "#d44f4f",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "6867dca0-474d-49d8-a30c-19510364e286",
    "id": 2041,
    "name": "Activity Done - Distribution pending",
    "query" : 
({params, imports}) => {
    const isDistributionPending = (individual) => {
        const activities = individual.getEncounters()
            .filter((enc) => enc.encounterType.name === 'Activity');
        const distros = individual.getEncounters()
            .filter((enc) => enc.encounterType.name === 'Distribution');
       return (activities.length > 0 && distros.length === 0);     
    };
    let Activities = params.db.objects('Individual')
        .filter((individual) => individual.voided === false && individual.subjectType.name === 'Demand' && isDistributionPending(individual));
    return _.orderBy(Activities, ind => ind.registrationDate, 'desc');
},
    "description": "Are Distributions pending for this Demand",
    "color": "#c300ff",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "88484e51-e81c-4859-b6a9-7f0e4c55e17c",
    "id": 2031,
    "name": "Pending Distribution - New",
    "query" : 
({params, imports}) => {
    const _ = imports.lodash
    const distributionComplete = (demand) => {
        const calculateSumOfObservationValuesRecieved = (materialTypes) => {
            return demand.getEncounters()
                .filter((enc) => enc.encounterType.name === 'Dispatch receipt')
                .flatMap((enc) => enc.getObservationValue('5dfb2f28-b866-4442-be01-0ed451c6aad9'))
                .filter(obs => !_.isNil(obs))
                .map((obs) => obs.getReadableValue())
                .map((keyValues) => {
                    const isQuantityMatching = _.get(_.find(keyValues, (kv) => kv['Quantity matching']), 'Quantity matching');
                    const matchingQuantity = _.get(_.find(keyValues, (kv) => kv['Quantity (Dispatched)']), 'Quantity (Dispatched)') || 0;
                    const notMatchingQuantity =
                        _.get(_.find(keyValues, (kv) => kv['Quantity']), 'Quantity') || 0;
                    const typeOfMaterial = _.get(_.find(keyValues, (kv) => kv['Type Of Material']), 'Type Of Material');
               //     console.log('typeOfMaterial',typeOfMaterial);

                    if (isQuantityMatching === 'Yes' && materialTypes.includes(typeOfMaterial))
                        return matchingQuantity;
                    else if (isQuantityMatching === 'No' && materialTypes.includes(typeOfMaterial))
                        return notMatchingQuantity;
                    else return 0;
                })
                .reduce((a, b) => a + b, 0);
        };

        const calculateSumOfObservationValuesDistributed = (materialTypes) => {
            return demand.getEncounters()
                .filter((enc) => enc.encounterType.name === 'Distribution')
                .flatMap((enc) => enc.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c'))
                .map((obs) => obs.getReadableValue())
                .map((keyValues) => {
                    const quantityNumber = _.get(_.find(keyValues, (kv) => kv['Quantity']), 'Quantity') || 0;
                    const typeOfMaterial = _.get(_.find(keyValues, (kv) => kv['Type Of Material']), 'Type Of Material');
                    return materialTypes.includes(typeOfMaterial) ? quantityNumber : 0;
                })
                .reduce((a, b) => a + b, 0);
        };

        return calculateSumOfObservationValuesRecieved(['Kit']) === calculateSumOfObservationValuesDistributed(['Kit'])
            && calculateSumOfObservationValuesRecieved(['Contributed item']) === calculateSumOfObservationValuesDistributed(['Contributed item'])
            && calculateSumOfObservationValuesRecieved(['Purchased item', 'Contributed track', 'Goonj product', 'High Value Material']) === calculateSumOfObservationValuesDistributed(['Purchased item', 'Contributed track', 'Goonj product', 'High Value Material'])
    };
    
    return params.db.objects('Individual')
        .filter((demand) => demand.voided === false && !distributionComplete(demand))
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
    "uuid": "eed05543-ac8e-4262-897a-530da00a31f0",
    "id": 2036,
    "name": " Activities done",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;
    
    let Activities = params.db.objects('Individual').filtered('subjectType.name = "Activity" AND voided = false');

    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            Activities = Activities.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }            


        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            console.log(`address filter value`);
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "Village").map(add => {
               return add.uuid;
            });


            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                Activities = Activities.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }

        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            Activities = Activities.filter(ind => {
                let acName = ind.getObservationReadableValue("2978117c-a297-4171-99c6-23c3522ca0f8");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
    }


   return _.orderBy(Activities, ind => ind.registrationDate, 'desc');
},
    "description": "",
    "color": "#ebc944",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "8dded4ee-a054-41d8-9b7c-a84e79da5bc8",
    "id": 2032,
    "name": "Pending Distribution",
    "query" : 
({params, imports}) => {
    const distributionComplete = (demand) => {
        const calculateSumOfObservationValuesRecieved = (materialTypes) => {
            return demand.getEncounters()
                .filter((enc) => enc.encounterType.name === 'Dispatch receipt')
                .flatMap((enc) => enc.getObservationValue('5dfb2f28-b866-4442-be01-0ed451c6aad9'))
                .filter(obs => !_.isNil(obs))
                .map((obs) => obs.getReadableValue())
                .map((keyValues) => {
                    const isQuantityMatching = _.get(_.find(keyValues, (kv) => kv['Quantity matching']), 'Quantity matching');
                    const matchingQuantity = _.get(_.find(keyValues, (kv) => kv['Quantity (Dispatched)']), 'Quantity (Dispatched)') || 0;
                    const notMatchingQuantity =
                        _.get(_.find(keyValues, (kv) => kv['Quantity']), 'Quantity') || 0;
                    const typeOfMaterial = _.get(_.find(keyValues, (kv) => kv['Type Of Material']), 'Type Of Material');
                //    console.log('typeOfMaterial',typeOfMaterial);

                    if (isQuantityMatching === 'Yes' && materialTypes.includes(typeOfMaterial))
                        return matchingQuantity;
                    else if (isQuantityMatching === 'No' && materialTypes.includes(typeOfMaterial))
                        return notMatchingQuantity;
                    else return 0;
                })
                .reduce((a, b) => a + b, 0);
        };

        const calculateSumOfObservationValuesDistributed = (materialTypes) => {
            return demand.getEncounters()
                .filter((enc) => enc.encounterType.name === 'Distribution')
                .flatMap((enc) => enc.getObservationValue('3093c0f1-5e3f-47eb-92ed-0067b41b6f9c'))
                .map((obs) => obs.getReadableValue())
                .map((keyValues) => {
                    const quantityNumber = _.get(_.find(keyValues, (kv) => kv['Quantity']), 'Quantity') || 0;
                    const typeOfMaterial = _.get(_.find(keyValues, (kv) => kv['Type Of Material']), 'Type Of Material');
                    return materialTypes.includes(typeOfMaterial) ? quantityNumber : 0;
                })
                .reduce((a, b) => a + b, 0);
        };

        return calculateSumOfObservationValuesRecieved(['Kit']) === calculateSumOfObservationValuesDistributed(['Kit'])
            && calculateSumOfObservationValuesRecieved(['Contributed item']) === calculateSumOfObservationValuesDistributed(['Contributed item'])
            && calculateSumOfObservationValuesRecieved(['Purchased item', 'Contributed track', 'Goonj product', 'High Value Material']) === calculateSumOfObservationValuesDistributed(['Purchased item', 'Contributed track', 'Goonj product', 'High Value Material'])
    };
    
     let inds = params.db.objects('Individual')
     .filter((demand) => demand.voided === false && !distributionComplete(demand))
     
     return _.orderBy(inds, ind => ind.registrationDate, 'desc')
}
,
    "description": "Demands with dispatch receipt available but no distribution ",
    "color": "#93a661",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  },
  {
    "uuid": "3ef6be72-ab86-444b-9c23-9d4c1396b4ab",
    "id": 2039,
    "name": "Total Inventories",
    "query" : 
({params, imports}) => {
    const _= imports.lodash;
    const moment = imports.moment;
        
    let Inventories = params.db.objects('Individual').filtered('subjectType.name = "Inventory Item" AND voided = false');
     
     
    if (params.ruleInput) {
        let addressFilter = params.ruleInput.filter(rule => rule.type === "Address");
        let accountFilter =  params.ruleInput.filter(rule => rule.type === "Concept");
        let registrationDateFilter = params.ruleInput.filter(rule => rule.type === "RegistrationDate");
                
        
        if(registrationDateFilter.length>0 && registrationDateFilter[0].filterValue){
            let startDate = moment(registrationDateFilter[0].filterValue.minValue).startOf('day').toDate();
            let endDate = moment(registrationDateFilter[0].filterValue.maxValue).startOf('day').toDate();                                   
            
            Inventories = Inventories.filtered(`registrationDate >= $0 AND registrationDate <= $1`,startDate,endDate);
        }    
        
        if (addressFilter.length > 0 && addressFilter[0].filterValue) {
            let addressValue = addressFilter[0].filterValue.filter((add) => add.type == "District").map(add => add.uuid);

            if (addressValue.length > 0) {
                let addressValueString = "{\\"" + addressValue.join("\\", \\"") + "\\"}";
                Inventories = Inventories.filtered(`lowestAddressLevel.uuid in ${addressValueString}`);
            }
        }
        
        if(accountFilter.length > 0  && accountFilter[0].filterValue){
            let accountName = accountFilter[0].filterValue.toLowerCase().trim();
            Inventories = Inventories.filter(ind => {
                let acName = ind.getObservationReadableValue("41de93e4-daaf-4207-bf70-b32939d09ea5");
                return acName && acName.toLowerCase().includes(accountName)
            });
        }
        
       
    }        
    Inventories = Inventories.filter(ind => ind.getObservationReadableValue("Current Quantity")>0);     
     
     return _.orderBy(Inventories, ind => ind.registrationDate, 'desc');
};


",
    "description": "",
    "color": "#b975eb",
    "nested": false,
    "count": 1,
    "standardReportCardInputSubjectTypes": [],
    "standardReportCardInputPrograms": [],
    "standardReportCardInputEncounterTypes": [],
    "voided": false
  }
]