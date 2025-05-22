{
  "uuid": "1b8e061e-cbe5-4fc9-83ac-68986d1e7ed8",
  "settings": {
    "languages": [
      "en"
    ],
    "customRegistrationLocations": [
      {
        "subjectTypeUUID": "c26ea079-e6f5-451f-ba38-1ed55f5860a9",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "0ab6edd4-2a80-4ce9-9bfa-0464cb4ae6b0",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "92bf310a-6ddb-4010-8d44-d7cb009cbc9c",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "b3b98338-35af-4f29-a74d-3c8999d92165",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "cadc8363-b121-4cd4-bbbf-5bee4fd620d1",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "cd93d6db-d4be-47a0-9f84-d25391f90e77",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "816da5ca-d4df-449d-bcd4-8eef62930d5a",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "cffd3a47-d8cb-4a6f-99fc-21fddfa94b44",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      },
      {
        "subjectTypeUUID": "0bc1dbf5-6790-4c9b-b5eb-d241ec6b0379",
        "locationTypeUUIDs": [
          "c1f26e98-816d-4cf5-aada-6f4dcab46487"
        ]
      }
    ],
    "saveDrafts": true,
    "lowestAddressLevelType": [
      "2226.2227.2228.2229",
      "2344.2345.2346.2347"
    ],
    "searchFilters": [],
    "myDashboardFilters": []
  },
  "worklistUpdationRule": "({ params, imports }) => {
  const workLists = params.workLists;
  const context = params.context;
  const WorkItem = imports.models.WorkItem;
  const currentWorkItem = workLists.getCurrentWorkItem();

  function generateUUID() {
      const timestamp = new Date().getTime();
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = (timestamp + Math.random() * 16) % 16 | 0;
          return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
  }
  

  function registrationWorkFlow() {
      const individual = context.entity;
      const currentWorkList = workLists.currentWorkList;
      if (currentWorkItem.parameters.subjectTypeName === 'Campaign') {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem("39c684ad-e72b-40ac-b353-ddb50e05c58c",
                  WorkItem.type.REGISTRATION,
                  {
                      subjectTypeName: "Outreach",
                      saveAndProceedLabel: "Register Outreach"
                  })
          );
      }
      
      if (currentWorkItem.parameters.subjectTypeName === 'Claim') {
      
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem("94d1567c-3614-4b5b-9e84-39a1c55390ce",
                  WorkItem.type.PROGRAM_ENROLMENT,
                 {
                     subjectTypeName: "Claim",
                     subjectUUID: individual.uuid,
                     saveAndProceedLabel: "Enrol to Claim Status",
                     programName: "Claim Status"
                  })
          );
      }
      if (currentWorkItem.parameters.subjectTypeName === 'Outreach') {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem("8b9ba76f-bf61-4b9c-9b82-4399a2d44e8f",
                  WorkItem.type.ENCOUNTER,
                  {
                      encounterTypeName: "Outreach Location Specific Details",
                      subjectTypeName: 'Outreach',
                      subjectUUID: individual.uuid,
                      encounterType: "Outreach Location Specific Details"
                  })
          );
      }
      if (currentWorkItem.parameters.subjectTypeName === 'Case') {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem("9690aae8-95a8-48a7-b8b8-d208c70fe282",
                  WorkItem.type.PROGRAM_ENROLMENT,
                 {
                     subjectTypeName: "Case",
                     subjectUUID: individual.uuid,
                     saveAndProceedLabel: "Enrol to Case Status",
                     programName: "Case Status"
                  })
          );
      }
     
     const observationKey = "387e72d2-1ced-4032-b273-ea3ef5c5a159";
     const singleEventUUID = "9d91df97-79f6-4e42-8d61-19d8926edd9f";
     const phasedUUID = "cfdfb311-ac5d-48ff-b250-57259194016b";
     const internalTraining = "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a";
     const externalTraining = "f882e2b6-52e1-43cf-a45b-215e76ff05eb";
     const typeOfTraining = individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd");
     const observationValue = individual.getObservationValue(observationKey);
     const isSingleEvent = observationValue === singleEventUUID;
     const isPhaseWise = observationValue === phasedUUID;

     const hasTrainingAlreadyFilled = (type) => 
  individual.getEncounters(true).some(enc => 
    enc.encounterType.name === type && !enc.voided && enc.encounterDateTime == null
  );

  const hasOneTimeTrainingAlreadyFilled = hasTrainingAlreadyFilled("One Time Training");
  const hasInternalTrainingAlreadyFilled = hasTrainingAlreadyFilled("Internal Training");
  const hasExternalTrainingAlreadyFilled = hasTrainingAlreadyFilled("External Training");

     
function replaceWorkItems(workList, workItemId, workItemType, params) {
    workList.workItems.splice(0, workList.workItems.length, new WorkItem(workItemId, workItemType, params));
}

if (currentWorkItem.parameters.subjectTypeName === 'Training') {
    if (isSingleEvent && !hasOneTimeTrainingAlreadyFilled) {
        replaceWorkItems(currentWorkList, "cc6181b4-8656-4527-8c99-96ae75f07906", WorkItem.type.ENCOUNTER, {
            encounterTypeName: "One Time Training",
            subjectTypeName: 'Training',
            subjectUUID: individual.uuid,
            encounterType: "One Time Training"
        });
    } else if (isPhaseWise) {
        if (typeOfTraining == internalTraining && !hasInternalTrainingAlreadyFilled) {
            replaceWorkItems(currentWorkList, "99a0a00b-37b0-4cbd-805f-33abbb137018", WorkItem.type.ENCOUNTER, {
                encounterTypeName: "Internal Training",
                subjectTypeName: 'Training',
                subjectUUID: individual.uuid,
                encounterType: "Internal Training"
            });
        } 
        else if (!hasExternalTrainingAlreadyFilled) {  
            if (typeOfTraining == externalTraining) {
                replaceWorkItems(currentWorkList, "23030d1b-7a0b-438a-870d-51c4c2d07e1c", WorkItem.type.ENCOUNTER, {
                    encounterTypeName: "External Training",
                    subjectTypeName: 'Training',
                    subjectUUID: individual.uuid,
                    encounterType: "External Training"
                });
            } else {
                replaceWorkItems(currentWorkList, "6b48c60c-8a2e-4d05-827b-92181495069b", WorkItem.type.REGISTRATION, {
                    subjectTypeName: "Training",
                    saveAndProceedLabel: "Register Another Training"
                });
            }
        }
    } else {
        replaceWorkItems(currentWorkList, "6b48c60c-8a2e-4d05-827b-92181495069b", WorkItem.type.REGISTRATION, {
            subjectTypeName: "Training",
            saveAndProceedLabel: "Register Another Training"
        });
    }
}


  
  const natureOfEngagement = individual.getObservationReadableValue('f304d6c0-dc78-4373-b584-b91d269d0835');

const hasAlreadyEnrolledInLetter = individual.enrolments.some(enl=>
    enl.program.name === 'Letter Status' 
    && enl.programExitDateTime == null 
    && !enl.voided);

const hasAlreadyEnrolledInRTI = individual.enrolments.some(enl=>
        enl.program.name === 'RTI Status' 
        && enl.programExitDateTime == null 
        && !enl.voided);

const hasAlreadyEnrolledInPIL = individual.enrolments.some(enl=>
            enl.program.name === 'PIL Status' 
            && enl.programExitDateTime == null 
            && !enl.voided);
        

if(currentWorkItem.parameters.subjectTypeName === 'Influencing State'){
    if(natureOfEngagement === 'Letter' && !hasAlreadyEnrolledInLetter){
    currentWorkList.workItems.splice(
        0,
        currentWorkList.workItems.length,
        new WorkItem("1e41369d-4ee1-4648-a552-9581a2801c75",
            WorkItem.type.PROGRAM_ENROLMENT,
           {
               subjectTypeName: "Influencing State",
               subjectUUID: individual.uuid,
               saveAndProceedLabel: "Enrol to Letter status",
               programName: "Letter Status"
            })
    );
}
else if(natureOfEngagement === 'PIL' && !hasAlreadyEnrolledInPIL){
    currentWorkList.workItems.splice(
        0,
        currentWorkList.workItems.length,
        new WorkItem("9103d9f0-5a22-4358-8a6b-a0f52540b326",
            WorkItem.type.PROGRAM_ENROLMENT,
           {
               subjectTypeName: "Influencing State",
               subjectUUID: individual.uuid,
               saveAndProceedLabel: "Enrol to PIL status",
               programName: "PIL Status"
            })
    );
}
else if(natureOfEngagement === 'Independent RTI' && !hasAlreadyEnrolledInRTI){
    currentWorkList.workItems.splice(
        0,
        currentWorkList.workItems.length,
        new WorkItem("8509bf0f-0180-4ff8-b6ff-384a72cb84fb",
            WorkItem.type.PROGRAM_ENROLMENT,
           {
               subjectTypeName: "Influencing State",
               subjectUUID: individual.uuid,
               saveAndProceedLabel: "Enrol to RTI status",
               programName: "RTI Status"
            })
    );
}
}   
}

  function encounterWorkFlow() {
      const currentWorkList = workLists.currentWorkList;
      const generalEncounter = context.entity;
      let encounters = generalEncounter.individual.getEncounters(true);
      let isEncPresent = encounters.some((enl) => enl.uuid === generalEncounter.uuid);
      
      if(currentWorkItem.parameters.encounterType === 'Case Status Details'){
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem("8d8058d4-723a-411e-8670-5d8998ac87d6",
                  WorkItem.type.ENCOUNTER,
                  {
                      encounterTypeName: "Case Activity Register",
                      subjectTypeName: 'Case',
                      subjectUUID: generalEncounter.individual.uuid,
                      encounterType: "Case Activity Register"
                  })
          );
      }
      
      if (currentWorkItem.parameters.encounterType === 'Outreach Location Specific Details' && !isEncPresent) {
          let outreachVisit = generalEncounter.getObservationReadableValue('59a812b5-511d-44a5-99ef-a963881a6864');

          if (outreachVisit === 'Yes') {
              currentWorkList.workItems.splice(
                  0,
                  currentWorkList.workItems.length,
                  new WorkItem(generateUUID(),
                      WorkItem.type.ENCOUNTER,
                      {
                          encounterTypeName: "Outreach Location Specific Details",
                          subjectTypeName: 'Outreach',
                          subjectUUID: generalEncounter.individual.uuid,
                          encounterType: "Outreach Location Specific Details"
                      })
              );
          } else {
              currentWorkList.workItems.splice(
                  0,
                  currentWorkList.workItems.length,
                  new WorkItem(generateUUID(),
                      WorkItem.type.PROGRAM_ENROLMENT,
                      {
                          programName: "Outreach Clients",
                          subjectUUID: generalEncounter.individual.uuid
                      })
              );
          }
      }
  }

  function enrolmentWorkFlow() {
      const currentWorkList = workLists.currentWorkList;
      const enrolment = context.entity;
      const individual = enrolment.individual;
      let allEnrolments = enrolment.individual.enrolments;
      let isEnlPresent = allEnrolments.some((enl) => enl.uuid === enrolment.uuid);

      if (currentWorkItem.parameters.programName === "Outreach Clients" && !isEnlPresent) {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem(generateUUID(),
                  WorkItem.type.PROGRAM_ENCOUNTER,
                  {
                      encounterType: 'Client Follow Up',
                      subjectUUID: enrolment.individual.uuid
                  })
          );
      }
      
    const hasDocumentFile = individual.getEncounters(true).some(enc=>
    enc.encounterType.name == "Letter Document" && !enc.voided && enc.encounterDateTime)

    if (currentWorkItem.parameters.programName === "Letter Status" && !hasDocumentFile) {
    currentWorkList.workItems.splice(
        0,
        currentWorkList.workItems.length,
        new WorkItem(generateUUID(),
            WorkItem.type.PROGRAM_ENCOUNTER,
            {
                encounterType: 'Letter Document',
                subjectUUID: enrolment.individual.uuid
            })
    );
}
}

  function programEncounterWorkFlow() {
      const currentWorkList = workLists.currentWorkList;
      const programEncounter = context.entity;

      let encounters = programEncounter.programEnrolment.getEncounters(true);
      let isEncPresent = encounters.some((enc) => enc.uuid === programEncounter.uuid);

      let doYouHaveMoreIssues = programEncounter.getObservationReadableValue('51400375-9167-44cd-93b9-4d19d79f8c68');
      let followUpStatus = programEncounter.getObservationReadableValue('e26a61db-d7bf-4fbe-b5e2-ed60294e8f62');

      if (currentWorkItem.parameters.encounterType === "Client Follow Up" && doYouHaveMoreIssues === 'Yes' && !isEncPresent) {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem(generateUUID(),
                  WorkItem.type.PROGRAM_ENROLMENT,
                  {
                      programName: "Outreach Clients",
                      subjectUUID: programEncounter.individual.uuid
                  })
          );
      } else if (currentWorkItem.parameters.encounterType === "Client Follow Up" && followUpStatus === 'Follow-up required' && !isEncPresent) {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem(generateUUID(),
                  WorkItem.type.PROGRAM_ENCOUNTER,
                  {
                      encounterType: 'Client Follow Up',
                      subjectUUID: programEncounter.individual.uuid
                  })
          );
      } else {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length
          );
      }
      
      if (currentWorkItem.parameters.encounterType === "Follow Up Letter" && !isEncPresent) {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem(generateUUID(),
                  WorkItem.type.PROGRAM_ENCOUNTER,
                  {
                      encounterType: 'Letter Document',
                      subjectUUID: programEncounter.individual.uuid
                  })
          );
      }
      if (currentWorkItem.parameters.encounterType === "Follow Up RTI" && !isEncPresent) {
          currentWorkList.workItems.splice(
              0,
              currentWorkList.workItems.length,
              new WorkItem(generateUUID(),
                  WorkItem.type.PROGRAM_ENCOUNTER,
                  {
                      encounterType: 'Letter Document',
                      subjectUUID: programEncounter.individual.uuid
                  })
          );
      }
  }
  

  const main = () => {
      switch (currentWorkItem.type) {
          case 'REGISTRATION':
              registrationWorkFlow();
              break;
          case 'ENCOUNTER':
              encounterWorkFlow();
              break;
          case 'PROGRAM_ENROLMENT':
              enrolmentWorkFlow();
              break;
          case 'PROGRAM_ENCOUNTER':
              programEncounterWorkFlow();
              break;
      }


      return workLists;
  };
  

  return main();
};

"
}