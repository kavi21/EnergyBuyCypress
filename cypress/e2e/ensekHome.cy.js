
import homePage from "../page/homePage";
describe("ENSEK  HomePage", () => {
  beforeEach(() => {
    homePage.visit('/')
    homePage.exit()
  })
  it('Verify the Home Page Image displays as expected ', () => {
    //cy.get("img[src='/Content/Images/ensek.jpg']").should('be.visible')
    homePage.pageLogo();
  })
  it('Verify the Home Page Title displays as expected ', () => {
    //cy.get('h1').contains('ENSEK Energy Corp.')
    homePage.pageTitle();
  })
  // Get all the tabs on the page return status code 200
  it('Verify  all the Home Page Tabs are working and retruning status code 200 ', () => {
    cy.get('a').each(($a) => {
      const href = $a.prop('href');
      if (href && !href.includes('#')) { // check if the link has a valid href
        cy.request(href).then((response) => { // make a request to the link URL
          expect(response.status).to.eq(200);
        })
      }
    })
  })
  // Verify that the About page is accessible from the Home page:
  it('Verify About Page should be accessible from the Home page', () => {
    homePage.aboutPageNavigation();
    //..More Tests can be added after the features added
  })
  it('Verify Contact Page should be accessible from the Home page', () => {
    homePage.contactPageNavigation();
    //..More Tests can be added after the features added
  })

  it('Verify Registration Page should be accessible from the Home page', () => {
    homePage.registerPageNavigation();
    //..More Tests can be added after the features added
  })
  it('Verify Login Page should be accessible from the Home page', () => {
    homePage.loginPageNavigation();
    //..More Tests can be added after the features added
  })
})













