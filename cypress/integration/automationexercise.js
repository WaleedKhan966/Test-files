/// <reference types="cypress"/>


describe('Automaton Test Suites for automationexercise',()=>{
    before('',()=>{
      let url = Cypress.config().baseUrl;
      cy.log(url)
      cy.visit('/')
  })
  
      it(" A_TestCase_9-: Verify Search Product", function () {
        cy.contains('Products').should('contain','Products').click({force:true})
        cy.scrollTo(0,300)
        cy.get('#search_product').clear().type('Frozen Tops For Kids')
        cy.wait(1000)
        cy.get('#submit_search').click({force:true})
        cy.wait(1000)
        cy.get('.productinfo').should('contain','Frozen Tops For Kids')
  
  
    })
    it(" A_TestCase_12-: Verify Add Products in Cart", function () {
      cy.scrollTo(0,400)
      cy.wait(1000)
      cy.get('.productinfo > .btn').should('contain','Add to cart').click({force:true})
    cy.wait(1000)
    cy.get('.modal-body > :nth-child(1)').should('contain','Your product has been added to cart.')
    cy.wait(2000)
    cy.get('.modal-footer > .btn').click({force:true})
  })
  it(" A_TestCase_14-: Verify Place Order: Register while Checkout", function () {
    cy.contains('Products').should('contain','Products').click({force:true})
    cy.scrollTo(0,300)
    cy.get('#search_product').clear().type('Frozen Tops For Kids')
    cy.wait(1000)
    cy.get('#submit_search').click({force:true})
    cy.wait(1000)
    cy.get('.productinfo').should('contain','Frozen Tops For Kids')
    cy.scrollTo(0,400)
    cy.wait(1000)
    cy.get('.productinfo > .btn').should('contain','Add to cart').click({force:true})
  cy.wait(1000)
  cy.get('.modal-body > :nth-child(1)').should('contain','Your product has been added to cart.')
  cy.wait(2000)
    cy.get('u').click({force:true})
    cy.get('.col-sm-6 > .btn').should('contain','Proceed To Checkout').click({force:true})
    cy.wait(2000)
    cy.get('.modal-body > :nth-child(1)').should('contain','Register / Login account to proceed on checkout.')
  })
  })

  