describe('Checkboxes', () => {
    it("Click radi buttons",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('#radio-buttons').find('[type="radio"]').first().check()
        cy.get('#radio-buttons').find('[type="radio"]').eq(2).check()
        cy.get('input[value="orange"]').check()
        
    }) 

    it("Validate state of radio button",()=>{
        cy.visit('/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
        cy.get('[value="pumpkin"]').should('be.checked')
    }) 
 
 });