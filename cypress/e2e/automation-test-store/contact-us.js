/// <reference types="cypress" />
require('@cypress/xpath')
import { faker } from '@faker-js/faker' 

describe('Test contact us from via Automation Store', () => {
  it('passes', () => {
    let name = faker.internet.username()
    
    cy.visit('https://www.automationteststore.com/')
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title().should('include', "A place to practice your automation skills!" )
    cy.url().should('include', "automationteststore")
    //cy.get('[href="https://automationteststore.com/index.php?rt=content/contact"]').click()
    cy.get('a[href$="contact"]').click() //the best locator for this button
    //cy.xpath("//a[contains(@href,'contact')]").click() //xpath alternate to line above
    cy.get('[name="first_name"]').type(name)
    cy.get('#ContactUsFrm_email').type(faker.internet.email(name))
    cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
    cy.get('[name="enquiry"]').type(faker.lorem.paragraph(1))
    cy.get('button[title="Submit"]' ).click()
    cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
    //cy.wait('fountainG')
    //cy.get('h1').should('have.text','Thank You for your Message!')
    


  })
  it("Click on he first item using item text",()=>{
    cy.visit('https://www.automationteststore.com/')
    cy.get(".prdocutname").contains("Skinsheen Bronzer Stick").click()
  })
  it("Click on he first item using index",()=>{
    cy.visit('https://www.automationteststore.com/')
    cy.get('.fixed_wrapper').find(".prdocutname").eq(0).click()
  })
})
