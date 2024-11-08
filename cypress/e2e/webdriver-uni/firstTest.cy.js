/// <reference types="cypress" />
import { faker } from '@faker-js/faker' 

describe('template spec',  {retries:{
  runMode:3,
  openMode:5
}
},
 () => {

  it('passes', () => {
    if(Cypress.isBrowser('chrome')){
      cy.log("Hello!")
    }
    cy.visit('/Contact-Us/contactus.html')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', "Contact Us" )
    cy.get('[name="first_name"]').type(faker.internet.username())
    cy.get('[name="last_name"]').type(faker.internet.username())
    cy.get('[name="email"]').type(faker.internet.email())
    cy.get('[name="message"]').type(faker.lorem.paragraph(1))
    cy.get('[type="submit"]').click()
    //cy.wait('fountainG')
    cy.get('h1').should('have.text','Thank You for your Message!')
    


  })
})
