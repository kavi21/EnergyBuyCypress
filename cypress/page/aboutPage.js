class aboutPage {
    visit() {
        cy.log("Opening browser")
        cy.viewport('macbook-15')
        cy.visit('https://ensekautomationcandidatetest.azurewebsites.net/Home/About') // Visit the register page URL
    }


    pageHeader() {
        cy.get('h2').contains('About ENSEK Energy Corp..')
        // cy.get('a.btn-primary').click() 
    }

    PageNavigateLink() {
        //cy.get('a.btn-primary').click() 
        cy.get('.btn').contains('Find out more about us').should('be.visible')
            .and('not.be.disabled');

    }
}
/* cy.visit('https://ensek.com')
cy.get('.btn-primary').click()
cy.origin('https://ensek.com', () => {
cy.on('uncaught:exception', (e) => {
  if (e.message.includes('Unexpected token')) {
    return false
  }
})
})
cy.visit('https://ensek.com/about-us')
cy.url().should('eq', 'https://ensek.com/about-us')

*/
//cy.url().should('contain', '/about-us')

// cy.contains('Get In Touch').click();





export default new aboutPage()
