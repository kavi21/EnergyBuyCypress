import logInPage from "../page/logInPage"


describe('ensek energy corp Log-In page', () => {
    beforeEach ( () => {
        logInPage.openUrl()
        logInPage.clickLogInLink()
    })
    it('EK0014,EK0028_Login with valid credentials', () => {
      logInPage.enterEmailAddress('xyz@gmail.com')
      logInPage.enterPassword('Aa!12345')
      logInPage.clickLogInButton()
      logInPage.verifyLogInPageAfterLogIn()
      logInPage.verifyUserLogInErrorPage()
    })
    it('EK0027_Login with remember me option', () => {
        logInPage.enterEmailAddress('xyz@gmail.com')
        logInPage.enterPassword('Aa!12345')
        logInPage.clickRememberMeCheckBox()
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterLogIn()
        logInPage.verifyUserLogInErrorPage()
      })
    it('EK0015,EK0016,EK0023,EK0025_Login with Invalid credentials', () => {
        logInPage.enterEmailAddress('invalid@gmail.com')
        logInPage.enterPassword('Aa!12345')
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyUserLogInErrorPage()
    })
    it('EK0019_Login without entering email', () => {
        logInPage.enterPassword('Aa!12345')
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyEmailFieldValidationErrorMsg()
    })
    it('EK0020_Login without entering password', () => {
        logInPage.enterEmailAddress('xyz@gmail.com')
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyPasswordFieldValidationErrorMsg()
    })
    it('EK0024_Login with invalid password', () => {
        logInPage.enterEmailAddress('xyz@gmail.com')
        logInPage.enterPassword('Invalid!1234')
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyUserLogInErrorPage()
    })
    it('EK0021_Login without entering credentials', () => {
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyEmailFieldValidationErrorMsg()
        logInPage.verifyPasswordFieldValidationErrorMsg()      
    })
    it('EK0026_Login with invalid email domain', () => {
        logInPage.enterEmailAddress('test.com')
        logInPage.enterPassword('A1bc!1234')
        logInPage.clickLogInButton()
        logInPage.verifyLogInPageAfterInvalidLogIn()
        logInPage.verifyEmailFieldErrorMsg()      
    })
    it('EK0017_verify register link', () => {
      logInPage.clickRegisterLink()
      logInPage.verifyRegisterPage()
    })
    it('EK0018_verify Password Masked', () => {
        logInPage.enterPassword('A1bc!1234')
        logInPage.verifyPasswordMasked()
    })
    it('EK0022_verify this article link redirects microsoft site', () => {
        logInPage.clickThisArticleLink()
        logInPage.verifyMicrosoftPageLoaded()
    })
})