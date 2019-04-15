describe('Search input', () => {

  it('accepts input', () => {
    const query = 'Yamato Nadeshiko Shichihenge'

    cy.get('#query')
      .type(query)
      .should('have.value', query)
  })

})
