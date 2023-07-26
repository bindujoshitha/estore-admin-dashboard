import { contains } from "cypress/types/jquery"

describe('My First Test', () => {
  beforeEach(()=>{
    cy.visit('/')
  })
  it('Visits the initial project page', () => {
    //cy.url().should('be.equal','http://localhost:4200/login')
    cy.get("h3[class='text-white text-uppercase m-0 mb-1']").should('be.equal','E-Commerce Store')
  })
  it("should have correct labels",()=>{
    cy.contains('label','Email')
    cy.contains('label','Password')
  })
  it("should login with given Email and Password Credentials",()=>{
    cy.get("input[name='email']").type('admin@example.com')
    cy.get("input[name='password']").type('admin123')
    cy.get("//button").click()
  })
})
