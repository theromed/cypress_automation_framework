describe('Handle JS alerts', () => {
    it("Confirm JS Alert contaions the correct text", ()=>{
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button1').click()
        cy.on('window:alert', (str)=>{
            expect(str).to.eq("I am an alert box!")   //how to check text in alert
        })
    })

    it("Validate JS Confirm Alert box", ()=>{
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:alert', (str)=>{   //if need to confirm in alerrt window
            return true;
        })
        cy.get('#confirm-alert-text').contains('You pressed OK!')
    })

    it("Validate JS Confirm Alert box", ()=>{
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        cy.get('#button4').click()
        cy.on('window:confirm', (str)=>{
            return false;     //if need to decline in alerrt window
        })
        cy.get('#confirm-alert-text').contains('You pressed Cancel!')
    })

    it("Validate JS Confirm Alert box using stub", ()=>{
        cy.visit('/')
        cy.get('#popup-alerts').invoke('removeAttr', 'target').click({force:true})
        const stub = cy.stub()
        cy.on('window:confirm', stub)   //Google me!!!
        cy.get('#button4').click().then(()=>{
            expect(stub.getCall(0)).to.be.calledWith("Press a button!")
        }).then(()=>{
            return true
        }).then(()=>{
            cy.get('#confirm-alert-text').contains('You pressed OK!')

        })
      
    })
});