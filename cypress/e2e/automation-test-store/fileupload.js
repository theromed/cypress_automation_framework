describe('File upload ', () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#file-upload").invoke("removeAttr", "target").click({ force: true });
      })

    it("Upload file",()=>{
        cy.get("#myFile").selectFile("cypress/fixtures/example.json")
        cy.get("#submit-button").click()
    }) 


    it("Upload file",()=>{
        //cy.get("#myFile").selectFile("cypress/fixtures/example1.json")
        cy.get("#submit-button").click()
    }) 
});