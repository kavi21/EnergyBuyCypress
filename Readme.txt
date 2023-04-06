1. Download node from "https://nodejs.org/en/download"
2. Install nodeJs from the official site and enter the following command to check node is installed "node -v"
3. Extract project and navigate to project folder
4. The e2e folder contains test files(grouped page file scripts)
5. The page folder contains page files for the test scenarios
6. The support folder contains "command.js" file
7. Open command prompt inside the project root directory
8. Enter 'npm install' command
9. Once the packages are done installing, Enter the below command to run
	'npm test' - it will start the execution on chrome browser
10. After Execution completed, report will be generated in the following directory "/reports/mochareports"
11. Navigate "report.html" inside "/reports/mochareports" folder


# ENSEK-QA-TASK


This application appears to have several issues with its functionality. Here are some notes to consider when testing:

Registration Tests:
When attempting to register, the application will not allow you to proceed past the registration page, even if you enter valid credentials.
This issue causes other validation test cases to fail as well.
Tests added for verifying all the validation.

Login Tests:
There are no valid username/password combinations to check, so all tests will fail.
Tests added for verifying all the validation.

Buy Energy Tests:
The system allows purchasing of 0, negative quantities, and invalid characters.
Negative quantity purchases also allow changing the existing quantity.

Sale confirm Automation test added for Oil,Gas and Electrity.Manual test cases not for this case
No time to do that
