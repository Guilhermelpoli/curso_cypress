describe('Página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.contains('Quem ama adota!').should('be.visible')
    cy.get('[data-test="register-button"]').click();
    
  });
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Joao Paulo', 'joaop@email.com', 'Senha123', "Senha123")
    
    
  })
});

it('teste', function() {
  cy.visit('https://adopet-frontend-cypress.vercel.app/');
});

