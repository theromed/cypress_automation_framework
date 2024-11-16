import mainPage_Po from '../../support/pageObjects/juice-shop/mainPage-PO';
import searchResultsPage_Po from '../../support/pageObjects/juice-shop/searchResultsPage-PO';


describe('Search page tests', () => {
    const mainPage_PO = new mainPage_Po();
    const searchResultsPage_PO = new searchResultsPage_Po()

    before(() => {
        cy.fixture('userCredentials').then((user) => {
            globalThis.user = user;
        });
    });

    beforeEach(() => {
      cy.ensureTestUserExists(user.email, user.password, user.securityQuestionNumber, user.securityAnswer);

    });
    
    it('User is able to search the product', () => {
        mainPage_PO.searchProduct("Apple Juice")
        searchResultsPage_PO.validateSearchResult("Apple Juice", "1.99")
    });
});