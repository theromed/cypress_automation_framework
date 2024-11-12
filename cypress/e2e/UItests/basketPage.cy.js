import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';
import searchResultsPage_Po from '../../support/pageObjects/juice-shop/searchResultsPage-PO';


describe('Tests related to Basket page', () => {

    const mainPage_PO = new mainPage_Po();
    const searchResultsPage_PO = new searchResultsPage_Po()


    before(() => {
        cy.fixture('userCredentials').then((user) => {
            globalThis.user = user;
        });
    });

    beforeEach(() => {
      cy.ensureTestUserExists(user.email, user.password, user.securityQuestionNumber, user.securityAnswer);
      cy.getAuthToken(user.email, user.password).then(() => {
            cy.get('@userToken').then((token) => {
              cy.visit('/', {
                onBeforeLoad: (browser) => {
                  browser.localStorage.setItem('token', token);
                }
              });
            });
        });
        cy.ClosePopups()
    });

    it.skip('User is able add product to basket', () => {
        mainPage_PO.searchProduct("Apple Juice")
        searchResultsPage_PO.addProductToBasket()
        mainPage_PO.checkUserLogin(1)

    });
});