/// <reference types="cypress" />
require('@cypress/xpath')
import { faker } from '@faker-js/faker' 

describe('Test contact us from via Automation Store', () => {
  it.skip('passes', () => {
    let name = faker.internet.username()
    
    cy.visit('https://www.automationteststore.com/')
    const makeupLink = cy.get("a[href*='product/category&path=']").contains("Makeup")
    const skincareLink = cy.get("a[href*='product/category&path=']").contains("Skincare")
    makeupLink.click();
    skincareLink.click()
    })
it('Valiate proreties of Contact us Page', ()=>{
    cy.visit('https://www.automationteststore.com/index.php?rt=content/contact')
    cy.contains("#ContactUsFrm", "Contact Us Form").find('#field_11').should('contain', 'First name')

    cy.contains("#ContactUsFrm", "Contact Us Form").then(textFr=>{
        const fieldtext = textFr.find('#field_11').text()
        expect(textFr).to.contain('First name')

        cy.get('#field_11').then((textFn)=>{
            cy.log(textFn.text())
        })
    })
})
it.skip('passes', () => {
        let name = faker.internet.username()
        
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains("Makeup").click();
        cy.get("h1 .maintext").then(($headerText)=>{     //get text frrom element
            cy.log($headerText.text())
            expect($headerText.text()).is.eq("Makeup")
        })
        
        })
})