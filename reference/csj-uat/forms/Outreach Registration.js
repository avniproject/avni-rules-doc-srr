{
  "name": "Outreach Registration",
  "uuid": "3e636d14-d55b-4e8f-a00d-c26506c1e132",
  "formType": "IndividualProfile",
  "formElementGroups": [
    {
      "uuid": "3774cb7a-af83-411b-953e-6f8c6d1605b0",
      "name": "Details",
      "displayOrder": 1,
      "formElements": [
        {
          "name": "First page is not getting refreshed",
          "uuid": "d88318ed-ced1-4259-a79b-29070240bfa5",
          "keyValues": [],
          "concept": {
            "name": "First page is not getting refreshed",
            "uuid": "5e092fe0-1e30-4c60-8f06-bbc7a1fdc5a2",
            "dataType": "Coded",
            "answers": [
              {
                "name": "Yes",
                "uuid": "d045b9b5-0d0f-4ead-82c4-7ff05bf4efa6",
                "dataType": "NA",
                "answers": [],
                "order": 0,
                "active": true
              },
              {
                "name": "No",
                "uuid": "03ead610-1596-4a1f-b57d-07792c6e66b6",
                "dataType": "NA",
                "answers": [],
                "order": 1,
                "active": true
              }
            ],
            "active": true
          },
          "displayOrder": 1,
          "type": "SingleSelect",
          "rule" : 
({params, imports}) => {
  const individual = params.entity;
  const moment = imports.moment;
  const formElement = params.formElement;
  const individualService = params.services.individualService;
  const _ = imports.lodash;
  let visibility = true;
  let value = null;
  let answersToSkip = [];
  let answersToShow = [];
  let validationErrors = [];

  const isCampaingDefined = new imports.rulesConfig.RuleCondition({individual, formElement}).when.valueInRegistration("87b53f71-b277-43d6-b891-59a58dfb3fb7").defined.matches();

  const lowestAddressLevel = individual.lowestAddressLevel;

  if(isCampaingDefined && lowestAddressLevel){
    const campaign = individual.getObservationValue("87b53f71-b277-43d6-b891-59a58dfb3fb7");
    const campaignSubjects = individualService.getSubjectsInLocation(lowestAddressLevel, 'Campaign').filter((cmp) => cmp.uuid == campaign);
    
    if(campaignSubjects.length == 0){  
      validationErrors.push('The selected campaign has a different address than the chosen outreach address. Please select a campaign associated with the selected address.');
    }
  }

  return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, value, answersToSkip, validationErrors, answersToShow);
},
          "mandatory": true
        }
      ],
      "rule" : 
({params, imports}) => {
    const individual = params.entity;
    const moment = imports.moment;
    const formElementGroup = params.formElementGroup;
    const _ = imports.lodash;
    let visibility = true;
    
    return formElementGroup.formElements.map((formElement) => {
    
        if(individual) {
            
            if(!individual.lowestAddressLevel || individual.lowestAddressLevel.name.length == 0) {
                individual.firstName = "Outreach: ";
                individual.name = "Outreach: ";
            } else {
                individual.firstName = "Outreach: " + individual.lowestAddressLevel.name;
                individual.name = "Outreach: " + individual.lowestAddressLevel.name;
            }
        }
        
        return new imports.rulesConfig.FormElementStatus(formElement.uuid, visibility, null);
    });
},
      "display": "Details",
      "timed": false
    }
  ],
  "decisionRule": "",
  "visitScheduleRule": "",
  "validationRule": "",
  "checklistsRule": "",
  "decisionConcepts": []
}