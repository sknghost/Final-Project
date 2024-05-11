import testtData from '../fixtures/example.json'

describe('Final Project',() =>{
    it('TC_ZT_13',()=>{
        //გახსენი ბრაუზერი
        //გადადი ლინკზე https://testzootopia.loremipsum.ge/ka
        cy.visit('https://testzootopia.loremipsum.ge/ka')
// 1.მთავარ გვერდზე ჩამოსქროლე
// 2.ძაღლთა სამყარო დაავერიფიცირე
cy.get('.pug'). should('be.contain','ძაღლთა სამყარო')
//3.დააწექი პროდუქტების  ნახვა
cy.get('.pug > .seepro').click()
// 4. დაამატე  პროდუქტი
cy.get(':nth-child(1) > .price-cart > .product-cart').click()

// 5.გახსენი კალათი
cy.get('.menu-pop > [href="https://testzootopia.loremipsum.ge/ka/cart"]').click()
// 6.დაავერიფიცირე დამატებული პროდუქტები
cy.get('.cart-item').should('be.visible')
    })


    it('TC_ZT_08',()=>{
        cy.visit('https://testzootopia.loremipsum.ge/ka')
//         1.დააწექი მარჯვენა კუთხეში "შესვლა"
cy.get('.menu-pop > .rprof').click()
// 2.ჩაწერე ვალიდური ელ.ფოსტა
cy.get(':nth-child(5) > .imail').type(testtData.email)
// 3.ჩაწერე ვალიდური პაროლი
cy.get('.ipass').type(testtData.password)
// 4.დააწექი "ავტორიზაცია"
cy.get('.avtorization > .input-shablon > .form-button').click()
//5.მთავარი გვერდი გამოჩნდა
cy.get('.main-index').should('be.visible')
    })



it('TC_ZT_09',()=>{
        cy.visit('https://testzootopia.loremipsum.ge/ka')
//         1.დააწექი მარჯვენა კუთხეში "შესვლა"
cy.get('.menu-pop > .rprof').click()
// 2.ჩაწერე არავალიდური ელ.ფოსტა
cy.get(':nth-child(5) > .imail').type(testtData.xEmail)
// 3.ჩაწერე ვალიდური პაროლი
cy.get('.ipass').type(testtData.password)
// 4.დააწექი "ავტორიზაცია"
cy.get('.avtorization > .input-shablon > .form-button').click()
// 5.დაავერიფიცირე ძახილის ნიშანი
cy.get('.input-div.alert > .alert > img').should('be.visible')
})

it('TC_ZT_10',()=>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
//         1.დააწექი მარჯვენა კუთხეში "შესვლა"
cy.get('.menu-pop > .rprof').click()
// 2.ჩაწერე ვალიდური ელ.ფოსტა
cy.get(':nth-child(5) > .imail').type(testtData.email)
// 3.ჩაწერე არავალიდური პაროლი
cy.get('.ipass').type(testtData.xPassword)
// 4.დააწექი "ავტორიზაცია"
cy.get('.avtorization > .input-shablon > .form-button').click()
// 5.დაავერიფიცირე ძახილის ნიშანი
cy.get('.input-div.alert > .alert > img').should('be.visible')
})



it('TC_ZT_11',()=>{
    cy.visit('https://testzootopia.loremipsum.ge/ka')
//         1.დააწექი მარჯვენა კუთხეში "შესვლა"
cy.get('.menu-pop > .rprof').click()
// 2.ჩაწერე არავალიდური ელ.ფოსტა
cy.get(':nth-child(5) > .imail').type(testtData.xEmail)
// 3.ჩაწერე არავალიდური პაროლი
cy.get('.ipass').type(testtData.xPassword)
// 4.დააწექი "ავტორიზაცია"
cy.get('.avtorization > .input-shablon > .form-button').click()
// 5.დაავერიფიცირე ძახილის ნიშანი
cy.get('.input-div.alert > .alert > img').should('be.visible')
})

})