import React from 'react'
import { mount } from 'cypress/react'
import SearchBar from '../../src/app/components/SearchBar'

describe('SearchBar Component', () => {
  beforeEach(() => {
    cy.intercept('GET', '/api/pokemon/search?q=Pikachu', {
      statusCode: 200,
      body: { results: [{ name: 'Pikachu', url: '/pokemon/25' }] },
    }).as('searchPikachu')
  })

  it('Renderiza el campo de búsqueda y el botón', () => {
    mount(<SearchBar />)
    cy.get('input[placeholder="Pokémon Search"]').should('exist')
    cy.contains('Search').should('exist')
  })

  it('Actualiza el valor del input al escribir', () => {
    mount(<SearchBar />)
    cy.get('input[placeholder="Pokémon Search"]').type('Pikachu')
    cy.get('input[placeholder="Pokémon Search"]').should('have.value', 'Pikachu')
  })

  it('Muestra resultados al buscar', () => {
    mount(<SearchBar />)
    cy.get('input[placeholder="Pokémon Search"]').type('Pikachu')
    cy.contains('Search').click()
    cy.wait('@searchPikachu')
    cy.contains('Pikachu').should('exist')
  })
})