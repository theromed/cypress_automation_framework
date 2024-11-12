// cypress/e2e/registrationForm.cy.js

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
        cy.fixture('userCredentials').then((user) => {
            globalThis.user = user;
        });

    });

    it("Check able to create a new user", () => {
        cy.ReregisterTestUser(user.email, user.password, user.securityQuestionNumber, user.securityAnswer)
        
    });
});