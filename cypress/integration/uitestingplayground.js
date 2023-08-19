/// <reference types="cypress"/>


describe('Automaton Test Suites for ',()=>{
    beforeEach('',()=>{
      cy.visit('https://asanlogin.my.gov.az/auth?origin=https://e-gov.az/az/services/read/3766/')
  })
  
      it(" Test Scripts", function () {
        cy.contains('Asan İmza ilə',{timeout:60000}).should('exist').click({force:true})
        cy.wait(1000)
        cy.get(':nth-child(3) > [style="display: flex"] > .botton-center > .button-title').click({force:true})
        cy.get('.login-page-heading',{timeout:60000}).should('exist')
        cy.get('select').select('055')
        cy.get('[style="display: flex; width: 100%"] > div.ng-tns-c5-1 > .ng-pristine').type('5649831')
         
        cy.get('.ng-untouched').eq(1).type('140879')
        cy.get('.btn').click()
        cy.get('.login-page-heading',{timeout:60000}).should('exist')
    })
  })
  