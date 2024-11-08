describe('Add multiple items in basket', () => {

    before(() => {
        cy.fixture("products").then((data) => {
            globalThis.data = data
        })
    })

    beforeEach(() => {
        cy.visit("https://www.automationteststore.com/")
        cy.get("a[href*='product/category&path=']").contains("Hair Care").click()
    })

    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach((element)=>{
            cy.AddProductToBasket(element)
        })
    })
});