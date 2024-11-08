

describe('Data tables', () => {
    beforeEach(() => {
        cy.visit("http://webdriveruniversity.com/");
        cy.get("#data-table").invoke("removeAttr", "target").click({ force: true });
      })

    it("Calculate total age of all users",()=>{
        //cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr', 'target').click({force:true})
        var userDetails = []
        let numb = 0
        //складываем в массив каждое значение из таблицы
        cy.get("#thumbnail-1 td").each(($el, index, $list)=>{
                userDetails[index] = $el.text()
        //идем по этому массиву и смотрим где числа и суммируем
        }).then(()=>{
            for(var i = 1; i < userDetails.length; i++ ){
                if(Number(userDetails[i])){
                    numb += Number(userDetails[i])
                }
                
            }
            expect(numb).to.eq(322)
        })


    }) 

    it("Check age base on lastname",()=>{
        //проходим по 2 столбцу и собераем ластнейм
        cy.get("#thumbnail-1 tr td:nth-child(2)").each(($el, index, $list)=>{
            const text = $el.text()
            //идем по собранным ласт немй, ищем нужную
            if(text.includes("Woods")){
                //когда нашли переходим на некст елемент в ДОМ, и передаем значение как параметр функции
                cy.get("#thumbnail-1 tr td:nth-child(2)").eq(index).next().then((age)=>{
                        const userAge = age.text()
                        expect(userAge).to.eq("80")
                })
            }
        })


    }) 
 
 });