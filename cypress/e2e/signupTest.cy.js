
import loginPage_Po from '../support/pageObjects/juice-shop/loginPage-PO';
import mainPage_Po from '../support/pageObjects/juice-shop/mainPage-PO';
import registrationPage_Po from '../support/pageObjects/juice-shop/registrationPage-PO';
import { logIn } from '../support/apiRequests/logIn';

describe('test', () => {

    const loginPage_PO = new loginPage_Po();
    const mainPage_PO = new mainPage_Po();
    const reistrationPage_PO = new registrationPage_Po();
    const securityQuestionNumber = 9
    //const email = faker.internet.email()
    //const password = faker.internet.password()

    before(() => { cy.fixture('userCredentials').then((userCreds) => { globalThis.userCreds = userCreds; }); });
    
    beforeEach(() => {
      cy.getAuthToken(userCreds.email, userCreds.password).then(() => {
          cy.get('@userToken').then((token) => {
            cy.visit('/', {
              onBeforeLoad: (browser) => {
                browser.localStorage.setItem('token', token);
              }
            });
          });
        });
      });
      

    before(() => {
        cy.fixture('newUserCreads').then((newUser) => {
            globalThis.newUser = newUser
        })

        cy.GenerateUserEmail('@example.com').then((email) => {
            newUser.email = email
        })
    })

    it("Check able to create a new user", () => {
        newUser.password = "Qazwsx123!@#" 
        newUser.securityAnswer = "Freya"
        mainPage_PO.closeCookiesPopup()
        mainPage_PO.closeWelcomePopup()
        mainPage_PO.proceedToLoginPage()
        loginPage_PO.newCustomerLink()
        reistrationPage_PO.fillRegistrationForm(newUser.email, newUser.password, securityQuestionNumber, newUser.securityAnswer)
        loginPage_PO.checkSuccesfulRegistyrationConfiration()
    })

    it("Check login of previously registered user", () => {
        mainPage_PO.closeCookiesPopup()
        mainPage_PO.closeWelcomePopup()
        mainPage_PO.proceedToLoginPage()
        loginPage_PO.fillLoginForm(userCreds.email, userCreds.password)

    })

    it("LogIn using API call", ()=>{
        const requestBody = { email: userCreds.email, password: userCreds.password }; 
        logIn(requestBody).then((response) => { 
            expect(response.status).to.eq(200); 
            expect(response.body.authentication.umail).to.eq(userCreds.email)
            expect(response.body.authentication.token).to.not.be.empty
        })
    })

    it("Get auth token", ()=>{
        mainPage_PO.closeCookiesPopup()
        mainPage_PO.closeWelcomePopup()
        mainPage_PO.checkUserLogin()
        
    })

});