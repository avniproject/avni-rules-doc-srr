[
  {
    "name": "Influencing State",
    "uuid": "cffd3a47-d8cb-4a6f-99fc-21fddfa94b44",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule" : 

({ params, imports }) => {
    const { summaries, individual } = params;

 const addSummary = (key, label) => {
  const observation = individual.findObservation(key);
  if (observation) {
    summaries.push({ name: label, value: observation.getValue() });
  }
};

addSummary("Theme of Influencing State", "Theme of Influencing State");
addSummary("Nature of engagement", "Nature of engagement");
addSummary("Posted to (Name of Authority)", "Posted to (Name of Authority)");
addSummary("Date of Posting", "Date of Posting");
addSummary("Posted to (Authority)", "Posted to (Authority)");
addSummary("Date of posting RTI", "Date of posting RTI");
addSummary("Date of PIL filing", "Date of PIL filing");
addSummary("Name of appointee", "Name of appointee");
addSummary("Post", "Post");
addSummary("Committee / organisation", "Committee / organisation");
addSummary("Date to capture date of the event", "Date to capture date of the event");


    function addProgramStatus(programName, conceptId, summaryName) {
        const enrolments = individual.enrolments
            .filter((enrl) => 
                enrl.program.name === programName &&
                enrl.programExitDateTime == null &&
                !enrl.voided
            );

        if (enrolments.length > 0) {
            const programEnrolment = enrolments[0];
            const answer = programEnrolment.getObservationValue(conceptId);
            if (answer) {
                summaries.push({ name: summaryName, value: [answer] });
            }
        }
    }
    addProgramStatus('PIL Status', 'b3f6962b-9509-42b0-a658-457fc464d646', 'PIL status');
    addProgramStatus('RTI Status', '10854671-98b9-422c-bd82-3337c5746f30', 'RTI Status');
    addProgramStatus('Letter Status', '8bda3fb7-379c-4eaa-95fb-41a13fe28796', 'Letter Status');

    return summaries;
}
,
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": false
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Intern",
    "uuid": "92bf310a-6ddb-4010-8d44-d7cb009cbc9c",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule" : 

({ params, imports }) => {
  const { summaries, individual } = params;

  // REGISTRATION SUMMARY
  const observations = {
    typeOfTraining: individual.findObservation("Type of training"),
    natureOfTraining: individual.findObservation("Nature of training"),
    trainingParticipants: individual.findObservation("Training Participants"),
    whetherPhased: individual.findObservation("Whether phased"),
  };
    
  const trainingTypeUUIDs = {
    internal: "3feb2dac-7f40-49e7-82c8-a5c55b3feb8a",
    external: "f882e2b6-52e1-43cf-a45b-215e76ff05eb"
  };
  
  const selectedTrainingType = individual.getObservationValue("c7afa395-baae-4434-b8f7-b938b78051bd");

  if (observations.typeOfTraining) {
    summaries.push({ name: "Type of training", value: observations.typeOfTraining.getValue() });
  }

  if (selectedTrainingType === trainingTypeUUIDs.internal && observations.natureOfTraining) {
    summaries.push({ name: "Nature of training", value: observations.natureOfTraining.getValue() });
  }

  if (selectedTrainingType === trainingTypeUUIDs.external && observations.trainingParticipants) {
    summaries.push({ name: "Training Participants", value: observations.trainingParticipants.getValue() });
  }

  if (observations.whetherPhased) {
    summaries.push({ name: "Whether phased", value: observations.whetherPhased.getValue() });
  }

  // IF INTERNAL ENCOUNTER SUMMARY
  const isInternalTraining = individual.getObservationReadableValue("c7afa395-baae-4434-b8f7-b938b78051bd") === 'Internal';
  const isExternalTraining = individual.getObservationReadableValue("c7afa395-baae-4434-b8f7-b938b78051bd") === 'External';

  if (isInternalTraining) {
    let internalTrainingEncounter = individual.encounters.filter((enc) => 
        enc.encounterType.name === 'Internal Training' &&
        enc.encounterDateTime != null &&
        enc.voided === false &&
        enc.cancelDateTime == null
    );

    if (internalTrainingEncounter.length > 0) {
        internalTrainingEncounter = internalTrainingEncounter[0];

        const whichPhase = internalTrainingEncounter.getObservationValue("1732f13a-26c0-4ef9-a92b-78d65519b024");
        if (whichPhase) {
            summaries.push({ name: 'Which phase', value: [whichPhase] });
        }

        const trainingStart = internalTrainingEncounter.getObservationValue("841e5c85-9626-433c-a7a9-e27073025b68");
        if (trainingStart) {
            summaries.push({ name: 'Date (start date)', value: trainingStart });
        }

        const trainingEnd = internalTrainingEncounter.getObservationValue("5d01a701-f8b1-4edf-ab48-3d9b36d28554");
        if (trainingEnd) {
            summaries.push({ name: 'Date (end date)', value: trainingEnd });
        }

        const topicsCovered = internalTrainingEncounter.getObservationValue("7e8c602d-3f11-4bec-a463-174a40b98ffd");
        if (topicsCovered) {
            summaries.push({ name: 'Topics Covered', value: topicsCovered });
        }
    }
  }
  //IF External Training 
  else if (isExternalTraining) {
    let externalTrainingEncounter = individual.encounters.filter((enc) => 
        enc.encounterType.name === 'External Training' &&
        enc.encounterDateTime != null &&
        enc.voided === false &&
        enc.cancelDateTime == null
    );

    if (externalTrainingEncounter.length > 0) {
        externalTrainingEncounter = externalTrainingEncounter[0];

        const whichPhase = externalTrainingEncounter.getObservationValue("1732f13a-26c0-4ef9-a92b-78d65519b024");
        if (whichPhase) {
            summaries.push({ name: 'Which phase', value: [whichPhase] });
        }

        const trainingStart = externalTrainingEncounter.getObservationValue("841e5c85-9626-433c-a7a9-e27073025b68");
        if (trainingStart) {
            summaries.push({ name: 'Date (start date)', value: trainingStart });
        }

        const trainingEnd = externalTrainingEncounter.getObservationValue("5d01a701-f8b1-4edf-ab48-3d9b36d28554");
        if (trainingEnd) {
            summaries.push({ name: 'Date (end date)', value: trainingEnd });
        }

        const topicsCovered = externalTrainingEncounter.getObservationValue("7e8c602d-3f11-4bec-a463-174a40b98ffd");
        if (topicsCovered) {
            summaries.push({ name: 'Topics Covered', value: topicsCovered });
        }
    }
  }

  return summaries;
}
,
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": false
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Court",
    "uuid": "cadc8363-b121-4cd4-bbbf-5bee4fd620d1",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Case",
    "uuid": "0bc1dbf5-6790-4c9b-b5eb-d241ec6b0379",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": false
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  },
  {
    "name": "Training (voided~1741)",
    "uuid": "7c618fef-b244-47bc-9e7c-773198b03d94",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": true
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": true
  },
  {
    "name": "Claim",
    "uuid": "cd93d6db-d4be-47a0-9f84-d25391f90e77",
    "active": true,
    "type": "Individual",
    "subjectSummaryRule": "",
    "programEligibilityCheckRule": "",
    "allowEmptyLocation": false,
    "allowMiddleName": false,
    "lastNameOptional": false,
    "allowProfilePicture": false,
    "uniqueName": false,
    "shouldSyncByLocation": true,
    "settings": {
      "displayRegistrationDetails": true,
      "displayPlannedEncounters": false
    },
    "household": false,
    "group": false,
    "directlyAssignable": false,
    "voided": false
  }
]