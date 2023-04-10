import homePage from "../page/homePage";
import aboutPage from "../page/aboutpage";
describe("ENSEK  About us", () => {
    beforeEach(() => {
        aboutPage.visit('/')
        homePage.exit()
    })
    //MORE TESTS CAN ADDED AFTER MORE FEATURES ADDED
    it('Verify AboutPage Header', () => {
        aboutpage.pageHeader();
    })
    it('Verify AboutPage Link Navigates to main Ensek Page', () => {
        aboutpage.PageNavigateLink();
        //cy.catchExpectedErrors();
    })
})
