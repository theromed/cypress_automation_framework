import 'cypress-file-upload';

describe('Test related to prfile page', () => {
      
  before(() => {
        cy.fixture('userCredentials').then((user) => {
          globalThis.user = user;
      });
  });

  beforeEach(() => {
        cy.ensureTestUserExists(user.email, user.password, user.securityQuestionNumber, user.securityAnswer);
  });

  it('User is able change the profile username and image', () => {
        
        cy.get('#navbarAccount').click()
        cy.get('button[aria-label="Go to user profile"]').click()
        cy.get('#username').type("SuperUser")
        cy.get('#submit').click()
        cy.get('#picture').attachFile("avatar.jpeg")
        cy.get('button[aria-label="Button to upload the profile picture"]').click()
        cy.get('.img-rounded').invoke('attr', 'src').should('match', /assets\/public\/images\/uploads\/22\.jpg/);
        cy.get('#username').clear()
        cy.get('#submit').click()
    });
});






