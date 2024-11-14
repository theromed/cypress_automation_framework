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
      failOnStatusCode: false,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(response => { 
      expect(response.status).to.eq(200); 
      expect(response.body).to.have.property('authentication'); 
      expect(response.body.authentication).to.have.property('token'); 
      const token = response.body.authentication.token; 
      cy.wrap(token).as('userToken');
    })
  });

Cypress.Commands.add('performLogin', (email, password) => { 
  cy.visit('/')
  cy.ClosePopups()
  mainPage_PO.proceedToLoginPage();
  loginPage_PO.fillLoginForm(email, password); 
});

Cypress.Commands.add("ClosePopups", ()=>{
    //mainPage_PO.closeWelcomePopup();
  
  //mainPage_PO.closeCookiesPopup();
  cy.wait(1000)
  mainPage_PO.closeCookiesPopup2();

  mainPage_PO.closeWelcomePopup2()

})

Cypress.Commands.add("ClosePopups2", () => {
  cy.get('body').then($body => {
    // Проверяем наличие и видимость попапа cookies
    if ($body.find('#cookie-popup').length > 0 && $body.find('#cookie-popup').is(':visible')) {
      mainPage_PO.closeCookiesPopup();
    }
    // Проверяем наличие и видимость приветственного попапа
    if ($body.find('div[aria-label="cookieconsent"]').length > 0 && $body.find('div[aria-label="cookieconsent"]').is(':visible')) {
      mainPage_PO.closeWelcomePopup();
    }
  });
});


Cypress.Commands.add("ReregisterTestUser", (email, password,securityQuestionNumber, securityAnswer )=>{
    cy.visit('/')
    //  cy.ClosePopups()
    mainPage_PO.proceedToLoginPage();
    loginPage_PO.newCustomerLink();
    registrationPage_PO.fillRegistrationForm(email, password, securityQuestionNumber, securityAnswer);
    loginPage_PO.checkSuccesfulRegistyrationConfiration();
})

Cypress.Commands.add('ensureTestUserExists', (email, password, securityQuestionNumber, securityAnswer) => { 
  // Пробуем выполнить логин 
  cy.visit('/')
  cy.ClosePopups()
  mainPage_PO.proceedToLoginPage();
  loginPage_PO.fillLoginForm(email, password); 
  // Проверяем наличие ошибки при логине 
  cy.wait(2000)
    cy.url().then((url) => {
      if (url.includes('login')) {
        cy.get('body').then(($body) => { 
          cy.get('.error.ng-star-inserted').invoke('text').then((errorText) => 
            { if (errorText.includes('Invalid email or password.')) {
               cy.ReregisterTestUser(email, password, securityQuestionNumber, securityAnswer); 
              } else{
                cy.log('Логин прошел успешно, регистрация не требуется');
              }
            }); 
          });
      }  else {
        cy.log('Находимся на другой странице');
        // Логика для других страниц
      }
    });
    


})


Cypress.on('uncaught:exception', (err, runnable) => {
  // Проверяем, содержит ли ошибка статус 401
  if (err.message.includes('401') || (err.response && err.response.status === 401)) {
    // Возвращаем false, чтобы предотвратить остановку теста
    return false;
  }

  // Разрешаем обработку других ошибок
  return true;
});



  