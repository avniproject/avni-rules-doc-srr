[
  {
    "name": "Claim Activity Register",
    "uuid": "57486413-7045-491c-9596-c66c6fc61a2a",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Claim Activity Register" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Claim Impact (voided~3735)",
    "uuid": "779596f8-b162-42e7-ad00-678aadb6fc83",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Claim Impact" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false,
    "voided": true
  },
  {
    "name": "Claim Impact Form",
    "uuid": "0bb3b428-6057-4cf3-9d15-22851ecce74b",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Claim Impact Form" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Claim Legal Fund (voided~3736)",
    "uuid": "5c3e8378-68ff-476f-ae34-8548434d013f",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Claim Legal Fund" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false,
    "voided": true
  },
  {
    "name": "Claim Legal Fund (voided~3759)",
    "uuid": "2767916a-2bcc-4d64-9017-db0ad460a645",
    "entityEligibilityCheckRule" : 
({ params, imports }) => {
    const individual = params.entity;

    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => 
        enc.encounterType.name == "Claim Legal Fund" &&
        enc.encounterDateTime != null &&
        enc.voided == false &&
        enc.cancelDateTime == null
    );

 
    return !hasEncounterAlreadyFilled ; 
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "Internal Training",
    "uuid": "a5d29b8a-69d8-4a76-b18e-c28883ca82ba",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const internalConceptUUID = "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a";
  const phasedEventUUID = "cfdfb311-ac5d-48ff-b250-57259194016b";
  const isTypeOfTrainingInternal = individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd") == internalConceptUUID;
  const iswhetherPhased = individual.getObservationValue("387e72d2-1ced-4032-b273-ea3ef5c5a159") == phasedEventUUID ; 
  return isTypeOfTrainingInternal && iswhetherPhased
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "One Time Training (voided~3782)",
    "uuid": "20e89d9d-2237-4789-8d10-352fc4ef2261",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const externalConceptUUID = "f882e2b6-52e1-43cf-a45b-215e76ff05eb";
  const phasedEventUUID = "cfdfb311-ac5d-48ff-b250-57259194016b";
  const isTypeOfTrainingExternal = individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd") == externalConceptUUID;
  const iswhetherPhased = individual.getObservationValue("387e72d2-1ced-4032-b273-ea3ef5c5a159") == phasedEventUUID ; 
  return isTypeOfTrainingExternal && iswhetherPhased
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "Training Legal Fund",
    "uuid": "5bc44f70-46a9-4e7a-85e9-8cf0e44dc55b",
    "entityEligibilityCheckRule" : 

({ params, imports }) => {
    const individual = params.entity;

    const internalUUID = "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a";
    const phasedUUID = "cfdfb311-ac5d-48ff-b250-57259194016b";

    const isTypeOfTrainingInternal =
        individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd") === internalUUID;

    const isWhetherPhased =
        individual.getObservationValue("387e72d2-1ced-4032-b273-ea3ef5c5a159") === phasedUUID;

    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Training Legal Fund" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)

    return !hasEncounterAlreadyFilled && !(isTypeOfTrainingInternal && isWhetherPhased);
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "One Time Training",
    "uuid": "a3e30cab-ff81-4ed1-8706-9773ec2372c2",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const singleEventUUID = "9d91df97-79f6-4e42-8d61-19d8926edd9f";  
  const isSinglePhased = individual.getObservationValue("387e72d2-1ced-4032-b273-ea3ef5c5a159") == singleEventUUID ; 
  const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "One Time Training" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
  return  isSinglePhased && !hasEncounterAlreadyFilled
}
,
    "active": true,
    "immutable": false
  },
  {
    "name": "PIL Case Activity Register",
    "uuid": "7e42c11e-e3f1-4f04-8562-f67471ee157c",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    
    let outreachEncounters = individual.getEncounters()
        .filter((enc) => enc.encounterType.name == "Outreach Location Specific Details" && enc.voided == false && enc.encounterDateTime !=  null)

    if(outreachEncounters.length == 0) {
        return true; 
    }

    const previousEncounter = outreachEncounters[0];

    const whereDidTheOutreachActivityHappened = previousEncounter.getObservationValue("f619854c-9ed3-44ec-944e-ad9e51a768e0");
    const otherSpaceUUID = "326f1f66-0707-4eb3-b708-a89b8ffbab4a";

    if(whereDidTheOutreachActivityHappened == otherSpaceUUID){
        return false;
    }

    const kyaIssGanvMeinKoiOurSthalGaye = previousEncounter.getObservationValue("59a812b5-511d-44a5-99ef-a963881a6864");
    const yesUUID = "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6";

    if(kyaIssGanvMeinKoiOurSthalGaye == yesUUID) {
        return true;
    }
      
    return false;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "PIL Legal Fund",
    "uuid": "252c33f0-bd3f-48ff-bf80-22db679cff8c",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Case Documents" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "PIL Document",
    "uuid": "dac30d7e-97eb-4da9-8882-b3411fb39f26",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Case Status Details" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Letter Document",
    "uuid": "ecdc98b0-9b69-49c9-a798-faa8ed48ddbe",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Case Legal Fund" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Case Monetary Impact",
    "uuid": "37920b3f-5ad5-48c5-b11e-ae969bf8ffff",
    "entityEligibilityCheckRule" : 
({params, imports}) => {
    const individual = params.entity;
    
    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Case Monetary Impact" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
    
    return !hasEncounterAlreadyFilled;
},
    "active": true,
    "immutable": false
  },
  {
    "name": "Case Fact Finding",
    "uuid": "7630882f-8f18-4c13-b5a2-668ed15b5da9",
    "entityEligibilityCheckRule": "({ params, imports }) => {
    const individual = params.entity;
    const moment = imports.moment;

    const hasEncounterAlreadyFilled = individual.getEncounters(true).some((enc) => enc.encounterType.name == "Case Fact Finding" && enc.encounterDateTime != null && enc.voided == false && enc.cancelDateTime == null)
  
    const caseTypes = {
      "Criminal prosecution fresh filing": "a3d1b65d-0e00-4e78-9cf2-0bbd29e77642",
      "Criminal prosecution appeal": "ad47420b-5a60-42f0-9a49-60011af2bfd5",
      "Criminal defence fresh filing": "0fc2f7cb-ab3e-4474-8d85-c4e40917409f",
      "Criminal Defence appeal": "9882ada0-b5da-4662-8d88-baf57a7fdace",
      "Bail fresh filing": "4ab86dad-0ddf-4479-bf29-1c99a0a7579f",
      "Bail cancellation": "d92cfcaf-90ed-4a18-bb2b-e7804a66c1a7",
      "High Court writ / special powers / inherent powers": "a15c03bd-497c-44ca-930f-419b4163a3a0"
    };
  
    let natureOfCase = null; 

    let caseStatusDetails = individual.enrolments.filter(enrl=> {
        return enrl.program.name === "Case Status" && 
        !enrl.voided && 
        enrl.enrolmentDateTime
    })

    if(caseStatusDetails.length > 0){
        natureOfCase = caseStatusDetails[0].getObservationValue('252f4c55-d113-4951-8ebb-eed01b9ccbb9');
    }
  
    const cases = Object.values(caseTypes)
    
    return !hasEncounterAlreadyFilled && natureOfCase != null && cases.includes(natureOfCase)

  };
  ",
    "active": true,
    "immutable": false
  }
]