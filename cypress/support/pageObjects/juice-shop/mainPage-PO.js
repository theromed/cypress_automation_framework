class mainPage_Po {
    closeCookiesPopup() {
        cy.get('.cc-btn').click()
    }

    closeWelcomePopup() {
        cy.get('.close-dialog').click()
    }

    proceedToLoginPage() {
        cy.get('#navbarAccount').click()
        cy.get('#navbarLoginButton').click()
    }

    checkUserLogin(){
        cy.get(".fa-layers-counter").contains(0)
    }
}
export default mainPage_Po;