describe('Exemplo todo delete', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo')
    });
    
    it('Consegue deletar todas as tarefas', () => {
        
        cy.get('li:nth-child(1) input.toggle').check();
        cy.get('button.clear-completed').click();
        cy.get('.todo-list li label').should('not.contain.text', 'Pay eletric bill');
        
        cy.contains('Clear completed').should('not.exist');
    })
});

