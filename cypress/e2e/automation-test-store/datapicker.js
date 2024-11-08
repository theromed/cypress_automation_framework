describe('Date picker', () => {

    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#datepicker").invoke("removeAttr", "target").click({ force: true });
      })

    it.skip("Date picker",()=>{

        cy.get('#datepicker').click()
        let date = new Date()
        date.setDate(date.getDate() + 1);

        var futureYear = date.getFullYear()
        var futureMonth = date.toLocaleString("default", {month: "long"})
        var futureDay = date.getDate()

        function selectMonthAndYear(){
            cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate=>{
                    if(!currentDate.text().includes(futureYear)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
            }).then(()=>{
                cy.get(".datepicker-dropdown").find(".datepicker-switch").first().then(currentDate=>{
                    if(!currentDate.text().includes(futureMonth)){
                        cy.get('.next').first().click()
                        selectMonthAndYear()
                    }
            })
        })
        }

        function selectFutureDay(){
            cy.get('[class="day"]').contains(futureDay).click()
        }

        selectMonthAndYear()
        selectFutureDay()


        
    }) 
});