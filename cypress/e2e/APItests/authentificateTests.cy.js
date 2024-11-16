import { logIn } from '../../support/apiRequests/logIn';
import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';


describe('API Tests', () => {

    const mainPage_PO = new mainPage_Po();
    
    before(() => {
        cy.fixture('userCredentials').then((userCreds) => {
            globalThis.userCreds = userCreds;
        });
    });

    it("LogIn using API call", () => {
        const requestBody = { email: userCreds.email, password: userCreds.password }; 
        logIn(requestBody).then((response) => { 
            expect(response.status).to.eq(200); 
            expect(response.body.authentication.umail).to.eq(userCreds.email);
            expect(response.body.authentication.token).to.not.be.empty;
        });
    });

    it("Get auth token", () => {
        cy.getAuthToken(userCreds.email, userCreds.password).then(() => {
            cy.get('@userToken').then((token) => {
                cy.visit('/', {
                    onBeforeLoad: (browser) => {
                        browser.localStorage.setItem('token', token);
                    }
                });
            });
        });

        // Тест на проверку входа
        mainPage_PO.closeCookiesPopup();
        mainPage_PO.closeWelcomePopup();
        mainPage_PO.checkUserLogin();
    });
});
