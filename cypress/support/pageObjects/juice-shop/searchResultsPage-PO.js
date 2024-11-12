class searchResultsPage_Po {

    validateSearchResult(productName,productPrice){
        cy.get(".mat-grid-list").children().should('have.length', 1);
        cy.get('.item-name').contains(productName)
        cy.get('.item-price')
        cy.get('.item-price').invoke('text').then((text) => {
            expect(text).to.contain(productPrice); 
            });
        cy.get('button[aria-label="Add to Basket"]').should('be.visible')
    }

    addProductToBasket(productName){
        cy.get('button[aria-label="Add to Basket"]').click()
    }

    

}
export default searchResultsPage_Po;