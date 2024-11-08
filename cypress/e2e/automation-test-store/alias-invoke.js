describe('alias and invoke', () => {
    it("Validate specific hair care product",()=>{
        cy.visit('https://www.automationteststore.com/')
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke("text").as('productThumbnail')  //extract text by Invoke and save to variable using as
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', "Seaweed")

    })
    
    it("Validate specific hair care product",()=>{
        cy.visit('https://www.automationteststore.com/')
        const makeupLink = cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke("text").its('length').should('be.gt', 5)
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke("text").should('include', "Seaweed")

    })

    it("Validate specific hair care product",()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').its('length').should("eq", 16)
        cy.get('.thumbnail .productcart').eq(0).click()

    })

    it("Validate specific hair care product",()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').as("productThumbnail") 
        cy.get('@productThumbnail').its('length').should("eq", 16)
        cy.get('@productThumbnail').find(".productcart").invoke('attr', 'title').should('include', 'Add to Cart')

    })

    it.only("Calculate total of normal and sale products",()=>{
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').as("productThumbnail") 


        cy.get('@productThumbnail').find('.oneprice').invoke("text").as('itemPrice')
        cy.get('@productThumbnail').find('.pricenew').invoke("text").as('saleItemPrice')
        var itemsTotal = 0
        cy.get('@itemPrice').then($linkText =>{
            var totalPrice = 0
            var itemPrice = $linkText.split("$")
            for(var i = 0; i <itemPrice.length; i++){
                totalPrice += Number(itemPrice[i])
            }
            itemsTotal += totalPrice 
            cy.log(totalPrice)
            cy.log(itemsTotal)
        })

        cy.get('@saleItemPrice').then($linkText =>{
            var saleTotalPrice = 0
            var saleItemPrice = $linkText.split("$")
            for(var i = 0; i <saleItemPrice.length; i++){
                saleTotalPrice += Number(saleItemPrice[i])
            }
            itemsTotal += saleTotalPrice
            cy.log(saleTotalPrice)
            cy.log(itemsTotal)
        })
        .then(()=>{
            cy.log("the total price: " + itemsTotal)
        })
    })



});