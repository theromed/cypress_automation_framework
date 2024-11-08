import HomePage_PO from "../../support/pageObjects/webdriver-uni/Homepage_PO";
import Contact_Us_PO from "../../support/pageObjects/webdriver-uni/Contac_US_PO";

describe('test with page object pattern', () => {
    const homepage_PO = new HomePage_PO();
    const contactUs_PO = new Contact_Us_PO();
    
    beforeEach(()=>{
    
        homepage_PO.visitHomepage()
        homepage_PO.clickOn_ContactUs_button()
        cy.fixture('contactUsData').then(function(data) {
            globalThis.data = data;
        })
    })



    it("first test", ()=>{
 
        contactUs_PO.contactForm_Submission(Cypress.env("first_name"), data.last_name, " ", "How can I learn Cypress?", 'body', 'Error: Invalid email address');


    })
});