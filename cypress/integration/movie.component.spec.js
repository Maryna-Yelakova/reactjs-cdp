describe('movie', () => {

  // it('should have class', () => {
  //
  //   cy.get('[data-cy]="info"')
  //     .should('have.class', 'movie_main-info')
  // })

  it('should image exist', () => {

    cy.get('img')
      .should('exist')
  })
});
