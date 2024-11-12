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


// Импорт Page Object классов 
import LoginPage_PO from './pageObjects/juice-shop/loginPage-PO'; 
import MainPage_PO from './pageObjects/juice-shop/mainPage-PO'; 
import RegistrationPage_PO from './pageObjects/juice-shop/registrationPage-PO'; 
// Создание экземпляров Page Object классов 
const loginPage_PO = new LoginPage_PO(); 
const mainPage_PO = new MainPage_PO(); 
const registrationPage_PO = new RegistrationPage_PO();

Cypress.Commands.add("GenerateUserEmail", domain=>{

    const emailName  = Math.random().toString(36).substring(2);
    const fullEmail = `${emailName}${domain}`; 
    // Используем cy.wrap для возврата значения внутри команды 
    return cy.wrap(fullEmail);
})


Cypress.Commands.add('getAuthToken', (email, password) => {
    const requestBody = { email: user.email, password: user.password }; 
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

Cypress.Commands.add('performLogin', (email, password) => { 
  cy.visit('/')
  cy.ClosePopups()
  mainPage_PO.proceedToLoginPage();
  loginPage_PO.fillLoginForm(email, password); 
});

Cypress.Commands.add("ClosePopups", ()=>{
  mainPage_PO.closeCookiesPopup();
  mainPage_PO.closeWelcomePopup();
 
})

Cypress.Commands.add("ReregisterTestUser", (email, password,securityQuestionNumber, securityAnswer )=>{
    cy.visit('/')
    cy.ClosePopups()
    mainPage_PO.proceedToLoginPage();
    loginPage_PO.newCustomerLink();
    registrationPage_PO.fillRegistrationForm(email, password, securityQuestionNumber, securityAnswer);
    loginPage_PO.checkSuccesfulRegistyrationConfiration();
})

Cypress.Commands.add('ensureTestUserExists', (email, password, securityQuestionNumber, securityAnswer) => { 
  // Пробуем выполнить логин 
  cy.performLogin(email, password); 
  // Проверяем наличие ошибки при логине 
  cy.get('body').then(($body) => { if ($body.find('.error ng-star-inserted').length > 0) { 
    // Замените '.error' на ваш селектор ошибки 
    cy.reregisterTestUser(email, password, securityQuestionNumber, securityAnswer); 
    } 
  } );
})
  