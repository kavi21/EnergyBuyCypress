class logInPage {
    openUrl () {
        cy.open('https://ensekautomationcandidatetest.azurewebsites.net/')
    }

    clickLogInLink () {
        cy.Click('a#loginLink')
    }
    enterEmailAddress (email) {
        cy.enter('input#Email',email)
    }
    enterPassword (password) {
        cy.enter('input#Password',password)
    }
    clickLogInButton () {
        cy.Click('input[value="Log in"]')
    }
    clickRememberMeCheckBox () {
        cy.Click('input#RememberMe')
    }
    clickRegisterLink () {
        cy.Click('p a[href*="Register"]')
    }
    verifyRegisterPage () {
        cy.assertShould('input[value="Register"]','be.visible')
    }
    verifyUserLogInErrorPage () {
        cy.assertTextContains('h1.text-danger','Error','not.be.visible')
    } 
    verifyLogInPageAfterLogIn () {
        cy.assertShould('input#Email','not.be.visible')
    }
    verifyLogInPageAfterInvalidLogIn () {
        cy.assertShould('input#Email','be.visible')
    }
    verifyPasswordMasked() {
        cy.assertShould('input[id="Password"][type="password"]','be.visible')
    }
    verifyPasswordFieldValidationErrorMsg () {
        cy.assertTextContains('span#Password-error','The Password field is required.','be.visible')
    }
    verifyEmailFieldValidationErrorMsg () {
        cy.assertTextContains('span#Email-error','The Email field is required.','be.visible')
    }
    verifyEmailFieldErrorMsg () {
        cy.assertTextContains('span#Email-error','The Email field is not a valid e-mail address.','be.visible')
    }
    clickThisArticleLink() {
        cy.Click('section[id="socialLoginForm"] a');
    }
    verifyMicrosoftPageLoaded() {
        cy.getCurrentUrlAndValidate('contain','https://learn.microsoft.com/')
    }
}

export default new logInPage();