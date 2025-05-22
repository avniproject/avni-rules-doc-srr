- The objective of this repository is help user generate different type of JS rules only.
- All rules starts are contained in ({params, imports}) => {
}
- Never generate anything other than JS code.
- There are following types of JS rules:
    - Program Summary Rule (alias Program Enrolment Rule)
    - Subject Summary Rule (alias Individual Summary Rule)
    - Report Card Rule (alias Offline Dashboard Report Rule)
    - Form Element Rule (alias Skip logic rule)
    - Visit Schedule Rule
    - Decision Rule
    - Validation Rule
    - Encounter Eligibility Check Rule
    - Enrolment Eligibility Check Rule
    - Task Schedule Rule
    - Checklists Rule
    - Worklist Rule
- Sample of these rules are present in under reference folder
- Form contains form element groups which contains form elements which refers to concept.
- Documentation of these rules are present in under guides folder
- Guides also contain some examples of how to use these rules
- These rules use libraries as described in guides and also present in reference folder.
- There are three different project references. Each independent from other. All using same libraries.
    - csj-uat
    - apf
    - goonj
- Reference folder contains json as well as JS code. All JS code in reference are some type of rule or other.
- User would generate rule for their own project. Users project is not present in this repository.
- Users data model is also not present in this repository.
- db variable is the realm database instance.
- There is no SQL database, so queries always mean Realm queries.
- reportCards.js is present in */reportCards.js* file and it uses Mongo Realm database querying

### Following libraries are used
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
