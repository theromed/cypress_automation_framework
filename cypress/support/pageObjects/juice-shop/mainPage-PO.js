class mainPage_Po {
    closeCookiesPopup() {
        cy.get('.cc-btn').then($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click({force: true})
            }
          })
    }
    closeWelcomePopup() {
        cy.get('.close-dialog').then($button => {
            if ($button.is(':visible')){
                cy.wrap($button).click({force: true})
            }
          })
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
    proceedToBasketPage() {
        cy.get('button[aria-label="Show the shopping cart"]').click()
    }
}
export default mainPage_Po;