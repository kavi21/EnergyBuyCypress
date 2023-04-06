
class HomePage {
  visit() {
    cy.log("Opening browser")
    cy.viewport('macbook-15')
    cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/') // Visit the login page URL
  }

  exit() {
    cy.log("Closing browser")
    cy.window().then(win => win.close());
  }

  pageLogo() {
    cy.get("img[src='/Content/Images/ensek.jpg']").should('be.visible') // Fill the email input field
  }

  pageTitle() {
    cy.get('h1').contains('ENSEK Energy Corp.')
  }

  aboutPageNavigation() {
    cy.contains('About').click();
    cy.url().should('include', '/Home/About')
    cy.get('h2').should('contain', 'About ENSEK Energy Corp..')
  }


  contactPageNavigation() {
    cy.contains('Contact').click();
    cy.url().should('include', 'Home/Contact')
  }


  registerPageNavigation() {
    cy.contains('Register').click();
    cy.url().should('include', 'Account/Register')

  }

  loginPageNavigation() {
    cy.contains('Log in').click();
    cy.url().should('include', 'Account/Login')

  }
}
export default new HomePage()