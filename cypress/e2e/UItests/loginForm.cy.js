// cypress/e2e/loginForm.cy.js
import loginPage_Po from '../../support/pageObjects/juice-shop/loginPage-PO';
import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';

describe('Login Form', () => {
    const loginPage_PO = new loginPage_Po();
    const mainPage_PO = new mainPage_Po();

    beforeEach(()=>{
        cy.visit('/')
    })

    before(() => {
        cy.fixture('userCredentials').then((userCreds) => {
            globalThis.userCreds = userCreds;
        });
    });

    it("Check login of previously registered user", () => {
        mainPage_PO.closeCookiesPopup();
        mainPage_PO.closeWelcomePopup();
        mainPage_PO.proceedToLoginPage();
        loginPage_PO.fillLoginForm(userCreds.email, userCreds.password);
    });
});
