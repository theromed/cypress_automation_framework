describe('Auto complete field ', () => {
    it("Autocomplete",()=>{
        cy.visit('/')
        cy.get('#autocomplete-textfield').invoke('removeAttr', 'target').click({force:true})
        cy.get('#myInput').type("A")
        cy.get("#myInputautocomplete-list > *").each(($el, index, $list)=>{
            const product = $el.text()
            const productToSelect = "Avacado"
            if (product === productToSelect){
                $el.trigger("Click")
                cy.get("#submit-button").click()
               
            }
        })


        
    }) 
});