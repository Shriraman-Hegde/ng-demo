describe('Search',()=>{
  beforeEach(()=>{
    cy.visit('/search');
  })
  it('should have input and search button',  () => {
    cy.get('app-root app-search form input').should('exist');
    cy.get('app-root app-search form button').should('exist');
  });

  it('should allow searching',  () => {
    cy.get('input').type('A');
    cy.get('button').click({multiple:true});
    const list = cy.get('app-search mat-list mat-list-item');
    list.should('have.length',3);
  });

});


