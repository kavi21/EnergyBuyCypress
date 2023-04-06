import homePage from "../page/homePage";
import aboutPage from "../page/aboutPage";
describe("ENSEK  About us", () => {
    beforeEach(() => {
        aboutPage.visit('/')
        homePage.exit()
    })
    //MORE TESTS CAN ADDED AFTER MORE FEATURES ADDED
    it('Verify AboutPage Header', () => {
        aboutPage.pageHeader();
    })
    it('Verify AboutPage Link Navigates to main Ensek Page', () => {
        aboutPage.PageNavigateLink();
        //cy.catchExpectedErrors();
    })
})