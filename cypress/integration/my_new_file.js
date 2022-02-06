/// <reference types="cypress" />

//const { expect } = require("chai")


it('google test', function()
{
    cy.visit("https://google.com")
    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type("hello world{enter}")
   // cy.get('[href="https://en.wikipedia.org/wiki/Bad_Apple!!"]').click()
})

it.only('cloudAppE2ETest', function()
{
    
    cy.visit("http://localhost:3001")
   
    cy.wait(10000)
    cy.get('q').then(($lbl1) => {

        const txt = $lbl1.text()

        cy.reload()
        cy.wait(5000)
         
        cy.get('q').should(($lbl2) => {
          expect($lbl2.text()).not.to.eq(txt)
        })
      })
    
    cy.wait(5000)

})