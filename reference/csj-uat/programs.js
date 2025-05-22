[
  {
    "name": "Letter Status",
    "uuid": "e95f886c-4fbc-4b87-b3af-45bbd12bc86f",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const letterUUID = "266cb87a-87f9-419d-a572-0ec7744118a1";
  const isNatureLetter = individual.getObservationValue("f304d6c0-dc78-4373-b584-b91d269d0835") == letterUUID;
  return isNatureLetter; //todo exitDatetime check
}
,
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "RTI Status",
    "uuid": "2fa0b7e8-eae9-4e5e-87dd-0509f2f17017",
    "colour": "#ea280e",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const rtiUUID = "acb37b0d-4732-45b2-8fa3-ac20fc6fd233";
  const isNatureRTI = individual.getObservationValue("f304d6c0-dc78-4373-b584-b91d269d0835") == rtiUUID;
  return isNatureRTI;
}
,
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "PIL Status",
    "uuid": "91449b25-83dd-44c5-86cb-8d2eacd33a4e",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) => {
  const individual = params.entity;
  const pilUUID = "04f01759-725d-4995-85a1-d628c0a4176a";
  const isNaturePIL = individual.getObservationValue("f304d6c0-dc78-4373-b584-b91d269d0835") == pilUUID;
  return isNaturePIL;
}
,
    "enrolmentSummaryRule": "",
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Claim Status (voided~1211)",
    "uuid": "7a4c9ea2-9668-431f-908c-184545fa7e87",
    "colour": "#ff0000",
    "voided": true,
    "active": null,
    "enrolmentEligibilityCheckRule" : 
({params, imports}) =>  {
    const summaries = [];
    const programEnrolment = params.programEnrolment;

    const encounterUUID = programEnrolment.getObservationValue("0d1c7661-4d1a-4229-87c1-d45fc170dede");

    if(encounterUUID) {
        const outReachEncounter = programEnrolment.individual.getEncounters().filter((enc) => enc.uuid == encounterUUID)[0];
        const whereDidOutReachHappen = outReachEncounter.getObservationValue('f619854c-9ed3-44ec-944e-ad9e51a768e0');
      
        if (whereDidOutReachHappen) {
            summaries.push({name:"Where did the Outreach Activity happen - village or other space?", value: [whereDidOutReachHappen]});
        }

        const whereInVillageDidYouGo = outReachEncounter.getObservationValue('0f22d77f-3b4d-44f6-a587-bc90d3855b98');
        const whereInOtherSpaceDidYouGo = outReachEncounter.getObservationValue('6188571c-711c-4466-be71-18362ce555de');

        if(whereInVillageDidYouGo){
            summaries.push({name:"Where did you go?", value: [whereInVillageDidYouGo]});
        }
        else if(whereInOtherSpaceDidYouGo){
            summaries.push({name:"Where did you go?", value: [whereInOtherSpaceDidYouGo]});
        }


        const whatInVillageDidYouDo = outReachEncounter.getObservationValue('2b465290-f555-4d3b-b418-b0b9a483d963');
        const whatInOtherSpaceDidYouDo = outReachEncounter.getObservationValue('5ccfa48e-8d07-44c3-9f58-9f52c7327ba0');

        if(whatInVillageDidYouDo){
            summaries.push({name:"What did you do?", value: whatInVillageDidYouDo});
        }
        else if(whatInOtherSpaceDidYouDo){
            summaries.push({name:"What did you do?", value: whatInOtherSpaceDidYouDo});
        }
    }
    
    const clientName = programEnrolment.getObservationValue('2dd148df-6fd0-43ba-a777-ceaf5dd9fca9');

    if(clientName){
        summaries.push({name:"Name of client", value: clientName});
    }

    const issueIdentified = programEnrolment.getObservationValue('08e8417e-85ab-4e92-a729-e04f10c48f9c');
    if(issueIdentified){
        summaries.push({name:"Issue identified", value: issueIdentified});
    }
    
    const clientFollowUpStatus = programEnrolment.findLatestObservationInEntireEnrolment("e26a61db-d7bf-4fbe-b5e2-ed60294e8f62");
    if(clientFollowUpStatus){
        summaries.push({name:"Client Follow up Status", value: [clientFollowUpStatus.getValue()]});
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
    "name": "Claim Status",
    "uuid": "13de258f-7f58-421e-95f7-4822b8cb2c41",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 

({ params }) => {
  const { programEnrolment } = params;
  const { individual } = programEnrolment;
  const summaries = [];

  const addSummary = (name, value) => {
    if (value !== undefined && value !== null) summaries.push({ name, value });
  };

  const nameOfApplicant = individual.findObservation('Name of Applicant');
  if (nameOfApplicant) addSummary('Name of Applicant', nameOfApplicant.getValue());
  
  const lowestAddressLevel = individual.lowestAddressLevel;
  if (lowestAddressLevel) addSummary('Village Name', lowestAddressLevel.name);

  const claimScheme = individual.findObservation('Claim Scheme');
  if (claimScheme) addSummary('Claim Scheme', claimScheme.getValue());


  const status = programEnrolment.getObservationValue('f3ce6acf-60e2-4b93-8de0-40348e40db79');
  if (status) addSummary('Status', [status]);

  return summaries;
}
,
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  },
  {
    "name": "Case Status",
    "uuid": "73651784-823d-43b0-a967-7e4508a6d12f",
    "colour": "#ff0000",
    "voided": false,
    "active": null,
    "enrolmentEligibilityCheckRule" : 

({ params, imports }) => {
  const individual = params.entity;
  
  const caseStatusEnrolments = individual.enrolments
    .filter(
      (enrl) => 
        enrl.program.name === "Case Status" && 
        !enrl.voided && 
        enrl.enrolmentDateTime
    );

  return caseStatusEnrolments;
}
,
    "enrolmentSummaryRule": "({ params }) => {
    const summaries = [];
    const { programEnrolment } = params;
  const { individual } = programEnrolment;

    const actOffenceRights = [
        ['05865e79-c454-47c2-af03-fc719213b576', 'Theme of case', true],
        ['57df7482-20dc-4af0-87ce-c4110df7fdf3', 'Act / Offence (womens right)', true],
        ['3db5dae3-5b17-4d0d-9a4d-f1878d4c2243', 'Act / offence (land rights)', true],
        ['30df70d5-96c0-4147-95a3-d6196b1e7924', 'Act / offence (labour rights)', true],
        ['2897555a-ba05-4dfe-9e34-7e98395c0792', 'Act / offence (consumer)', true],
        ['8ffdedc8-d8e4-4808-aa60-7b074a1a5958', 'Act / offence (prisoners rights)', true],
        ['ed44e193-f685-4911-b997-ba04b007e8ad', 'Act/ offence (child rights)',true],
        ['2c886435-bb26-4206-9fd4-7811083a5871', 'Act / offence (Rights of fisherfolk)', true],
        ['197b8fef-49a9-428d-adda-f8c9f1f800da', 'Act / offence (minority rights)', true],
        ['74056c05-df3f-4e9e-aa2f-ffcedc98cd16', 'Rights of SC/ST community', true],
        ['0122fe96-a79b-4f6f-8ed2-c050998cb642', 'Act / offence (financial fraud)', true],
        ['0127d408-91fb-4eb1-906f-febbc882f69b', 'Act / offence (Social Boycott)', true],
        ['6779b8e0-f60d-446d-a371-e5d05931c69c', 'Primary Theme', false],
    ];
       
    const caseStatusStages = [
        ['252f4c55-d113-4951-8ebb-eed01b9ccbb9', 'Nature of Case', false],
        ['b1927aeb-ab4c-46a6-8eff-6ccdf38f5478', 'Status of case', false],
        ['c8bafd78-6fdf-48ac-bd54-f180b00ce46f', 'Stage of Active (pre-litigation)', false],
        ['065e005a-3203-4192-91ad-37e55480a695', 'Stage of Active (litigation) status', false],
        ['e1945ebb-19df-4055-b9c2-9fbcda959671', 'Stage of Active (pre-litigation) - Criminal Prosecution/ Defence fresh filing', false],
        ['ee698620-9b14-4379-a7de-6098c9f009b0', 'Stage of Active (litigation) status - Criminal Prosecution/ Defence fresh filing', false],
        ['c4d9571c-1f78-45d7-a415-83589595ae9d', 'Stage of Active (pre-litigation) - Civil / revenue / labour / consumer / family etc. fresh filing', false],
        ['aa7cfb95-21f2-48fb-9c28-e6a46c3d88a8', 'Stage of Active (litigation) status - Civil / revenue / labour / consumer / family etc. fresh filing', false]
    ];

    function addSummary(entity, id, name, isMultiSelect) {
        let observation = entity.findObservation(id);
        if (observation) {
            observation = observation.getValue();
            if (!isMultiSelect) {
                observation = [observation];
            }
            summaries.push({ name, value: observation });
        }
    }

    actOffenceRights.forEach(([id, name, isMultiSelect]) => addSummary(individual, id, name, isMultiSelect));
    
     const otherThemeOfCase = individual.findObservation('Others theme of case, please specify'); 
     if(otherThemeOfCase) {
      summaries.push({name: 'Others theme of case, please specify', value: otherThemeOfCase.getValue()});
     }
     
     let caseStatusDetails = individual.enrolments.filter((enr) => 
    enr.program.name === "Case Status" && 
    enr.programExitDateTime == null && 
    !enr.voided 
  );
  

    if (caseStatusDetails.length>0) {
        caseStatusDetails = caseStatusDetails[0];
        caseStatusStages.forEach(([id, name, isMultiSelect]) => addSummary(caseStatusDetails, id, name, isMultiSelect));
    }

    return summaries;
}
,
    "enrolmentEligibilityCheckDeclarativeRule": null,
    "manualEligibilityCheckRequired": false,
    "manualEnrolmentEligibilityCheckRule": "",
    "manualEnrolmentEligibilityCheckDeclarativeRule": null,
    "allowMultipleEnrolments": false
  }
]