describe('Páginas de login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    });

    it('Deve preencher os campos do login corretamente e autenticar o usuário na página', () => {
        cy.login('carlosbeto@email.com', 'Senha123')
        cy.contains('Olá!').should('be.visible')
        
         
    })
    
});