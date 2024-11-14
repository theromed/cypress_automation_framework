class basketPage_Po {
    validateBasket(email, productName, productPrice) {

        cy.get('h1').should('contain', email)
        cy.get('.mat-row > .cdk-column-product').should('contain', productName)
        cy.get('.mat-row > .cdk-column-price').should('contain', productPrice)

    }

    cleanBasket(){
        cy.get('.cdk-column-remove > .mat-focus-indicator').click()
    }

}
export default basketPage_Po;