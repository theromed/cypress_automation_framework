class loginPage_Po {
    newCustomerLink() {
       cy.get('#newCustomerLink').should('be.visible').click()
    }

    checkSuccesfulRegistyrationConfiration(){
        cy.get(".mat-simple-snack-bar-content").should('have.text','Registration completed successfully. You can now log in.')
    }

    fillUserEmailField(email){
        cy.get("input[id='email']").type(email)
    }

    fillUserPasswordField(password){
        cy.get("input[id='password']").type(password)
    }

    selectRememberMeCheckbox(){
        cy.get("input[type='checkbox'][id='rememberMe-input']").check()
    }

    clickLoginButton(){
        cy.get("button[type='submit'][id='loginButton']").click()
    }

    fillLoginForm(email,password){
        cy.get("input[id='email']").type(email)
        cy.get("input[id='password']").type(password)
        cy.get("input[type='checkbox'][id='rememberMe-input']").check({force: true})
        cy.get("button[type='submit'][id='loginButton']").click()
    }
}
export default loginPage_Po;