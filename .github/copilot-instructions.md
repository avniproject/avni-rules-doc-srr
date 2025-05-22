### The javascript code in this repository uses the following files. Index them.
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

### More about the code
1. Some of the JavaScript and JSON code in this repository contains multiline JavaScript code within a JS/JSON string.
2. The report cards use
3. the data model is expressed in the files under */forms/* folder. these are called Forms.
4. Each Form has form-element-groups. Each form element group has form-element. Each form element links to a concept. The full definition of concepts are present in */concepts.json file.
5. Each form is like a table in database.
6. Concept has unique uuid, name, dataType, answers, which are of use to us. Each concept is like a field in an entity or column in database table.
7. the reference code is present in */reference/* folder which can be used as context. in reference folder there are multiple projects as child folder.
8. reportCards.js is present in */reportCards.js* file and it uses Mongo Realm database querying
9. program summmary is same as enrolment summary
10. offline dashboard report is same as report card
11. db variable is the Realm database instance
12. There is no SQL database, so queries always mean Realm queries
