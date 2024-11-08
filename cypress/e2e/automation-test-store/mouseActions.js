import 'cypress-drag-drop';

describe('Mouse actions ', () => {
    it("Scroll elemnt into view",()=>{
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
  
    }) 

    it.skip("Drag and drop element",()=>{
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get("#draggable").trigger('mousedown', {which:1})
        cy.get("#droppable").trigger("mousemove").trigger('mouseup', {forсe:true})

        //cy.get("#draggable").drag("#droppable")
        //cy.get("#droppable").should('contain', "Dropped!")

    }) 

    it("Double mouse click element",()=>{
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get("#double-click").dblclick()
   

    }) 


    it("Hold down left mouse click on a given element",()=>{
        cy.visit('/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr', 'target').click({force:true})
        cy.get("#click-box").trigger('mousedown', {which:1}).then(($el)=>{
            expect($el).to.have.css("background-color", 'rgb(0, 255, 0)')
        })
   

    }) 


});