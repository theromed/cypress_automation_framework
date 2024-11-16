// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("GenerateUserEmail", domain=>{

    const emailName  = Math.random().toString(36).substring(2);
    const fullEmail = `${emailName}${domain}`; 
    // Используем cy.wrap для возврата значения внутри команды 
    return cy.wrap(fullEmail);
})


Cypress.Commands.add('getAuthToken', (email, password) => {
    const requestBody = { email: userCreds.email, password: userCreds.password }; 
    return cy.request({
      method: 'POST',
      url: 'rest/user/login',
      body: requestBody,
      headers: {
        'Content-Type': 'application/json'
      }
    }).its('body.authentication.token').then(token => {
      cy.wrap(token).as('userToken');
    });
  });
  