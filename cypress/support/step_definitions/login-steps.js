import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"

let userCredentials;

Given('I load login data', () => { 
    cy.fixture('userCredentials').then((data) => { 
        userCredentials = data; // Загружаем данные из первого объекта в массиве 
        }); 
    });

When("I access to login page", ()=>{
    cy.visit('/')
    cy.ClosePopups()
    cy.get('#navbarAccount').click()
    cy.get('#navbarLoginButton').click()
})

And("I enter a email", (email)=>{
    cy.get("input[id='email']").type(userCredentials.email)
})

And ("I enter a password", (password)=>{
    cy.get("input[id='password']").type(userCredentials.password)
})

And ("I click login button", ()=>{
    cy.get("button[type='submit'][id='loginButton']").click()
})

Then ("I should be logged in",()=>{
    cy.get(".fa-layers-counter").contains(0)
})