describe('My First Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(true)
  })
})

describe('My first failing Test', function() {
  it('Does not do much!', function() {
    expect(true).to.equal(false)
  })
})
describe('My First real Test', function() {
  it('Visits the Kitchen Sink', function() {

    cy.visit('https://example.cypress.io')

    cy.pause()

    cy.contains('type').click()

    cy.url().should('include', '/commands/actions')

    cy.debug()

    cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
  })
})