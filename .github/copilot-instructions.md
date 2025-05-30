- Always ask question if you didn't understand the request properly.
- The objective of this repository is help user generate different type of JS rules only.
- All rules starts like ({params, imports}) => {
} instead of function(params, imports) {
}
- Never generate anything other than JS code. Always generate the full function body like found in this repository.
- Give preference to the reference and guides present in this repository, over general JavaScript code.
- All rule code is like present in guides and reference folder only.
- Never generate any other type of code. All requests are of one of the above types. All above types are JavaScript rule.
- Each rule has different return type present in guides and reference.
- In the guides they are present in sections.
- Form contains form element groups which contains form elements which refers to concept.
- Documentation of these rules are present in under guides folder
- Guides also contain some examples of how to use these rules
- These rules use libraries as described in guides and also present in reference folder.
- There are three different project references (csj-uat, apf, goonj). Each independent from other. All using same libraries.
- Reference folder contains json as well as JS code. All JS code in reference are some type of rule or other.
- User would generate rule for their own project. Users project is not present in this repository.
- Users data model is also not present in this repository.
- db variable is the realm database instance.
- There is no SQL database, so queries always mean Realm queries.
- Report cards rules are present in reference/<project>/reportCard.js files. It uses Mongo Realm database language for querying.
- Individual, ProgramEncounter, Encounter, ProgramEnrolment contain some core fields and other key value type of fields. Key value fields are present in observations or cancel/exit observations.
- In reference ignore everything that has is like declarative rule.
- RuleEvaluationService is the caller of these rules with a method for each rule.
- For references and patterns only ever use the guides folder. Always provide a list to the guide if relevant.
- Only refer to the main branch in this repository.
- Program, EncounterType, SubjectType each has a name and uuid.

### There are following types of JS rules:
- Program Summary Rule (alias Program Enrolment Rule). In reference present in "enrolmentSummaryRule" in programs.js.
- Subject Summary Rule (alias Individual Summary Rule). In reference present in "subjectSummaryRule" in subjectTypes.js.
- Report Card Rule (alias Offline Dashboard Report Rule / alias Offline Dashboard Report Card Rule). In reference present in "query" in reportCard.js files. Report card rule always returns list of Individuals.
- Form Element Rule (alias Skip logic rule). In reference present in formElement.rule path. 
- Visit Schedule Rule. In reference present in "visitScheduleRule". params.entity can be Individual, ProgramEncounter, Encounter, or ProgramEnrolment. Always ask for which entity if not provided.
- Decision Rule. In reference present in "decisionRule". params.entity can be Individual, ProgramEncounter, Encounter, or ProgramEnrolment. Always ask for which entity if not provided.
- Validation Rule. In reference present in reference/validationRule.js. params.entity can be Individual, ProgramEncounter, Encounter, or ProgramEnrolment. Always ask for which entity if not provided. Do not generate any other code other than this file when asked for validation rule.
- Encounter Eligibility Check Rule. In reference present in "entityEligibilityCheckRule" in encounterTypes.js.
- Enrolment Eligibility Check Rule or Program Eligibility Check Rule. In reference present in "entityEligibilityCheckRule" in programs.js.
- Task Schedule Rule.
- Checklists Rule
- Worklist Rule. In reference present in "worklistUpdationRule".
- Edit form rule.


### Following libraries are used. But these are not rules code.
1. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/AdditionalComplicationsBuilder.js
2. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/FormElementStatusBuilder.js
3. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/StatusBuilderAnnotationFactory.js
4. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/TaskScheduleBuilder.js
5. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/VisitScheduleBuilder.js
6. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/WithName.js
7. https://github.com/avniproject/rules-config/blob/master/src/rules/builder/complicationsBuilder.js
8. https://github.com/avniproject/avni-models/blob/master/src/Individual.js
9. https://github.com/avniproject/avni-models/blob/master/src/ProgramEnrolment.js
10. https://github.com/avniproject/avni-models/blob/master/src/ProgramEncounter.js
11. https://github.com/avniproject/avni-models/blob/master/src/Encounter.js
12. https://github.com/avniproject/avni-models/blob/master/src/Checklist.js
13. https://github.com/avniproject/avni-models/blob/master/src/ChecklistItem.js
14. https://github.com/avniproject/avni-models/blob/master/src/ChecklistDetail.js
15. https://github.com/avniproject/avni-models/blob/master/src/ChecklistItemDetail.js
16. https://github.com/avniproject/avni-models/blob/master/src/AbstractEncounter.js
17. https://github.com/avniproject/avni-models/blob/master/src/application/FormElementStatus.js
18. https://github.com/avniproject/avni-models/blob/master/src/CustomFilter.js
19. https://github.com/avniproject/avni-client/blob/master/packages/openchs-android/src/service/facade/IndividualServiceFacade.js
20. https://github.com/avniproject/avni-client/blob/master/packages/openchs-android/src/service/facade/AddressLevelServiceFacade.js
21. lodash
22. realm
23. moment
