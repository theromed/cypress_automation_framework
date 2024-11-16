import loginPage_Po from '../../support/pageObjects/juice-shop/loginPage-PO';
import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';
import registrationPage_Po from '../../support/pageObjects/juice-shop/registrationPage-PO';

describe('Registration Form', () => {
    const loginPage_PO = new loginPage_Po();
    const mainPage_PO = new mainPage_Po();
    const reistrationPage_PO = new registrationPage_Po();
    const securityQuestionNumber = 9;

    beforeEach(()=>{
        cy.visit('/')
    })
    
    before(() => {
        cy.fixture('newUserCreads').then((newUser) => {
            globalThis.newUser = newUser;
        });

        cy.GenerateUserEmail('@example.com').then((email) => {
            newUser.email = email;
        });
    });

    it("Check able to create a new user", () => {
        newUser.password = "Qazwsx123!@#";
        newUser.securityAnswer = "Freya";
        mainPage_PO.closeCookiesPopup();
        mainPage_PO.closeWelcomePopup();
        mainPage_PO.proceedToLoginPage();
        loginPage_PO.newCustomerLink();
        reistrationPage_PO.fillRegistrationForm(newUser.email, newUser.password, securityQuestionNumber, newUser.securityAnswer);
        loginPage_PO.checkSuccesfulRegistyrationConfiration();
    });
});
