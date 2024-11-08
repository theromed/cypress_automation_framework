class AutoStore_HairCare_Po {
    addHairCareProductsToBasket() {
        globalThis.data.productName.forEach(function(element) {
            cy.AddProductToBasket(element)
            // .then(()=>{
            //     debugger  //для дебага в консоли, каждый шаг будет с паузой 
            // })
         
        })
        cy.get('.dropdown-toggle > .fa').click();
    }
}
export default AutoStore_HairCare_Po;