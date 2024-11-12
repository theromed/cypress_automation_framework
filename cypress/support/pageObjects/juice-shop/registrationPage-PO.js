class registrationPage_Po {
    fillRegistrationForm(email, password, securityQuestionNumber, securityAnswer) {
        cy.get("input[id='emailControl']").type(email)
        cy.get("input[id='passwordControl']").type(password)
        cy.get("input[id='repeatPasswordControl']").type(password)
        cy.get("[name='securityQuestion']").click()
        cy.get("#mat-option-" + securityQuestionNumber).click()
        cy.get("input[id='securityAnswerControl']").type(securityAnswer)
        cy.get("button[type='submit']").click()

    }

}
export default registrationPage_Po;



