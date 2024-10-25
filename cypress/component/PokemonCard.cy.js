import React from 'react'
import { mount } from 'cypress/react'
import PokemonCard from '../../src/app/components/PokemonCard'

describe('PokemonCard Component', () => {
  const pokemon = { name: 'Pikachu', url: '/pokemon/25' }

  it('Muestra el nombre del Pokémon', () => {
    mount(
        <PokemonCard pokemon={pokemon} />
    )
    cy.contains('Pikachu').should('exist')
  })
})