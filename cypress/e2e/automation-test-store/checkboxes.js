describe('Checkboxes', () => {
    it("Check box",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#checkboxes > :nth-child(1) > input').check()
        cy.get('#checkboxes > :nth-child(1) > input').should('be.checked')
        cy.get('#checkboxes > :nth-child(1) > input').uncheck()
        cy.get('#checkboxes > :nth-child(1) > input').should('not.be.checked')

        cy.get('#checkboxes > :nth-child(1) > input').as('option-1')
        cy.get('@option-1').check().should('be.checked')
    }) 

    it("Check multiple  checkboxes",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('input[type="checkbox"]').check(['option-1','option-2','option-3','option-4']).should('be.checked')
  
    }) 
 
 });