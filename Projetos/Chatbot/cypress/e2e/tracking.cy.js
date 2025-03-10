describe('Consulta de Encomenda no Chat', () => {

  const cenarios = [
    {titulo: 'Deve indicar que a encomenda já foi entregue', codigoDeRastreio: 'PD123456785BR', mensagemFinal: 'Boa notícia! Sua encomenda já foi entregue com sucesso. 🎉 Se precisar de algo mais, é só me chamar!'},
    {titulo: 'Deve indicar que a encomenda foi despachada e está a caminho', codigoDeRastreio: 'BR987654321BR', mensagemFinal: 'A sua encomenda já foi despachada e está a caminho! 🚚 Prazo estimado: 5 dias úteis.'},
    {titulo: 'Deve indicar que a encomenda está em rota de entrega e chega hoje', codigoDeRastreio: 'QW112233445BR', mensagemFinal: 'Ótima notícia! Sua encomenda está em rota de entrega e chega ainda hoje. Fique de olho! 👀📦'}
  ]

  cenarios.forEach(function(cenario) {
    it(cenario.titulo, () => {
      cy.abrirChatBot()
      cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
      cy.selecionarOpcao('Sim, por favor!')
      cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
      cy.enviarMensagem(cenario.codigoDeRastreio)
      cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${cenario.codigoDeRastreio}. Está tudo certo?`)
      cy.selecionarOpcao('Sim, está certo!')
      cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
      cy.verificarMensagem(cenario.mensagemFinal, 7000)
    })
  })

  it('Deve indicar que o código de rastreio não foi encontrado', () => {
    const codigoDeRastreio = 'AB123456789XY'

    cy.abrirChatBot()
    cy.verificarMensagem('Olá! Tudo bem? Posso te ajudar a consultar o status da sua encomenda?')
    cy.selecionarOpcao('Sim, por favor!')
    cy.verificarMensagem('Ótimo! Por favor, digite o código de rastreio da sua encomenda:')
    cy.enviarMensagem(codigoDeRastreio)
    cy.verificarMensagem(`Confirmando: você informou o código de rastreio ${codigoDeRastreio}. Está tudo certo?`)
    cy.selecionarOpcao('Sim, está certo!')
    cy.verificarMensagem('Perfeito! Estou consultando as informações nos Correios... Só um instante. 📦🔍')
    cy.verificarMensagem('Hmm... Não encontrei uma encomenda com os dados informados. Vamos tentar de novo?',
      7000
    )
    cy.selecionarOpcao('Encerrar atendimento')
    cy.verificarMensagem('Obrigado por falar comigo! 😊 Se precisar de mais alguma coisa, é só chamar.')
  })
})

Cypress.Commands.add('abrirChatBot', () => {
  cy.viewport('iphone-xr')
  cy.visit('/')

  cy.get('button[aria-label="Open Chat"]')
    .should('be.visible')
    .click()

  cy.get('.rcb-chat-header span')
    .should('be.visible')
    .and('have.text', 'Sensei')
})

Cypress.Commands.add('verificarMensagem', (mensagemEsperada, timeout = 4000) => {
  cy.contains('.rcb-bot-message', mensagemEsperada, { timeout: timeout })
    .should('be.visible')
})

Cypress.Commands.add('selecionarOpcao', (opcao) => {
  cy.contains('.rcb-options', opcao)
    .click()
})

Cypress.Commands.add('enviarMensagem', (mensagem) => {
  cy.get('textarea[placeholder^="Escreva sua mensagem"]')
    .type(mensagem)
  cy.get('.rcb-send-button').click()
})
