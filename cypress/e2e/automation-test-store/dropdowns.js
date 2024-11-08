describe('Dropdowns', () => {
    it("Select value in dropdown",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#dropdowm-menu-1').select('c#')
        cy.get('#dropdowm-menu-2').select('junit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('JavaScript').contains("JavaScript")

        
    }) 

    it("Validate state of radio button",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})

    }) 
 
 });