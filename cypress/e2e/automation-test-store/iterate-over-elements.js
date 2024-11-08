describe('iterate over elements', () => {

    beforeEach(()=>{
        cy.visit('https://www.automationteststore.com/')
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })
    
    it("Log information about haor care products",()=>{
        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
            cy.log("Index: " + index + " : " +$el.text())
        })

    })

    it("Add specific product to basket",()=>{

        // cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list)=>{
        //     if($el.text().includes("Curls to straight shampoo")){
        //         cy.wrap($el).click()
        //     }
        // })
        cy.selectProduct("Curls to straight shampoo")

    })
});