//<reference types="cypress" />

describe('Testes de funcionalidade da agenda', () => {
  beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/')
  })

  it('Deve incluir um contato', () => {
    cy.get('[type="text"]').type('Ana Claudia');
    cy.get('[type="email"]').type('teste@teste.com')
    cy.get('[type="tel"]').type('97225112')
    cy.get('.adicionar').click()

    cy.contains('Ana Claudia').should('exist');

    cy.screenshot('inclusão-de-contato')
  })

  it('Deve alterar um contato existente', () => {
    cy.contains('Ana Claudia')
    cy.get(':nth-child(4) > .sc-gueYoa > .edit').click()
    cy.get('[type="text"]').clear()
    cy.get('[type="text"]').type('Ana Claudia Meneiro');
    cy.get('[type="email"]').clear()
    cy.get('[type="email"]').type('teste-edit@teste.com')
    cy.get('[type="tel"]').clear()
    cy.get('[type="tel"]').type('1897225112')
    cy.get('.alterar').click()

    cy.screenshot('alteracao-de-contato')
  })

  it('Deve remover um contato', () => {
    cy.get(':nth-child(4) > .sc-gueYoa > .delete')

    cy.screenshot('deleta-contato')
  })
})