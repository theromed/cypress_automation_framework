describe('browserNavigation', () => {
    it("Confirm links redirect to he correct pages", ()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.reload()
        cy.reload(true) //reload without using cache
        cy.url().should('include', 'https://www.webdriveruniversity.com/')
        cy.go('forward')
        cy.url().should('include', 'contactus')

        cy.go('back')
        cy.get('#login-portal').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'Login-Portal')
        cy.go('back')

        cy.get('#to-do-list').invoke('removeAttr', 'target').click({force:true})
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
    })
});