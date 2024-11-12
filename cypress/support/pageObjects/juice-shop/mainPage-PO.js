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

    checkUserLogin(value){
        cy.get(".fa-layers-counter").contains(value)
    }

    searchProduct(productName){
        cy.get("#searchQuery").click()
        cy.get(".mat-search_field").type(`${productName}{enter}`)
    }

}
export default mainPage_Po;