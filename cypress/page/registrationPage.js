class registration{
    openUrl () {
        cy.open('https://ensekautomationcandidatetest.azurewebsites.net/')
    }
    clickRegistrationButton () {
        cy.Click('a#registerLink')
    }
    enterEmailAddress (email) {
        cy.enter('input#Email',email)
    }
    enterPassword (password) {
        cy.enter('input#Password',password)
    }
    enterConfirmPassword (confirmPassword) {
        cy.enter('input#ConfirmPassword',confirmPassword)
    }
    clickRegisterButton () {
        cy.Click('input[value="Register"]')
    }
    verifyUserRegistration () {
        cy.assertTextContains('h1.text-danger','Error','not.be.visible')
    }
    verifyRegistrationPageDisplay () {
        cy.assertShould('input#Email','not.be.visible')
    } 
    verifyEmailIsRequiredMessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li','The Email field is required.','be.visible')
    }
    verifyInvalidEmailMessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li','The Email field is not a valid e-mail address.','be.visible') 
    }
    verifyUserNotAbleToRegisterwithSixCharPassword () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li','The Password must be greater than 6 characters long.','be.visible') 
    }
    
    verifyUpperCaseErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li',"Passwords must have at least one uppercase ('A'-'Z').",'be.visible') 
    }
    verifyLowerCaseErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li',"Passwords must have at least one lowercase ('a'-'z').",'be.visible') 
    }
    verifyNumberOrSpecialCharacterErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li',"Passwords must have at least one non letter or digit character. Passwords must have at least one digit ('0'-'9').",'be.visible') 
    }
    verifyPasswordMisMatchErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li','The password and confirmation password do not match.','be.visible') 
    }
    verifyPasswordRequiredErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li:nth-child(1)','The Password field is required.','be.visible') 
    }
    verifyRequiredErrormessage () {
        cy.assertTextContains('div[class*="validation-summary-errors"] li:nth-child(1)','The Email field is required.','be.visible')
        cy.assertTextContains('div[class*="validation-summary-errors"] li:nth-child(2)','The Password field is required.','be.visible') 
    }
}

export default new registration();