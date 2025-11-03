describe('Exemplo todo filtros', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')

    });
    it('filtros', () => {
    cy.get('li:nth-child(1) input.toggle').check();
    cy.get('a[href="#/active"]').click();

    cy.contains('Walk the dog').should('be.visible');
    cy.get('a[href="#/completed"]').click();
    cy.contains('Pay electric bill').should('be.visible');

    cy.get('a[href="#/"]').click();
    cy.get('.todo-list li').should('have.length', 2);

});
    
});



