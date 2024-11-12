import { logIn } from '../../support/apiRequests/logIn';
import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';


describe('API Tests', () => {

    const mainPage_PO = new mainPage_Po();

    before(() => {
        cy.fixture('userCredentials').then((user) => {
            globalThis.user = user;
        });
    });

    it("LogIn using API call", () => {
        const requestBody = { email: user.email, password: user.password }; 
        logIn(requestBody).then((response) => { 
            expect(response.status).to.eq(200); 
            expect(response.body.authentication.umail).to.eq(user.email);
            expect(response.body.authentication.token).to.not.be.empty;
        });
    });

    it("Get auth token", () => {
        cy.getAuthToken(user.email, user.password).then(() => {
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
        mainPage_PO.checkUserLogin(0);
    });
});
