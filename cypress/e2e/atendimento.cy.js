describe('Testes automatizados Portfolio_MyCloset', () => {
  beforeEach(() => {
    // Arrange: Visita a página principal antes de cada teste
    cy.visit('index.html');
  });

  it('1 - Filtro por canal: Selecionar WhatsApp no combo de canais', () => {
    cy.get('[data-cy=canal-select]').select('WhatsApp');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.channel-tag').should('contain', 'WhatsApp');
    });
  });

  it('2 - Filtro por canal: Selecionar E-mail no combo de canais', () => {
    cy.get('[data-cy=canal-select]').select('E-mail');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.channel-tag').should('contain', 'E-mail');
    });
  });

  it('3 - Filtro por canal: Selecionar Instagram no combo de canais', () => {
    cy.get('[data-cy=canal-select]').select('Instagram');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.channel-tag').should('contain', 'Instagram');
    });
  });

  it('4 - Filtro por canal: Selecionar Telegram no combo de canais', () => {
    cy.get('[data-cy=canal-select]').select('Telegram');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.channel-tag').should('contain', 'Telegram');
    });
  });

  it('5 - Filtro por status: Selecionar Concluídas no combo de Status', () => {
    cy.get('[data-cy=status-select]').select('Concluídas');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.status-tag').should('contain', 'Concluída');
    });
  });

  it('6 - Filtro por status: Selecionar Em Andamento no combo de Status', () => {
    cy.get('[data-cy=status-select]').select('Em Andamento');
    cy.get('[data-cy=mensagem]').each(($msg) => {
      cy.wrap($msg).find('.status-tag').should('contain', 'Em Andamento');
    });
  });

  it('7 - Seleção de mensagem exibe chat correspondente', () => {
    cy.get('[data-cy=mensagem]').first().click();
    cy.get('#chatMessages').should('be.visible');
  });

  it('8 - Campo de resposta respeita limite de 255 caracteres', () => {
    cy.get('[data-cy=mensagem]').first().click();
    cy.get('#replyInput').type('a'.repeat(256));
    cy.get('#replyInput').should('have.value', 'a'.repeat(255));
  });

  it('9 - Envio de mensagem aparece no chat da conversa', () => {
    const mensagem = 'Teste de envio';
    cy.get('[data-cy=mensagem]').first().click();
    cy.get('#replyInput').type(mensagem);
    cy.get('#sendBtn').click();
    cy.get('#chatMessages').should('contain', mensagem);
  });
});
