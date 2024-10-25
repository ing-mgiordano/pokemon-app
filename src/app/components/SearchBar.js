'use client'

import React, { useState } from 'react'
import useSearch from '../hooks/useSearch'
import PokemonCard from './PokemonCard'
import Button from './ui/Button'

export default function SearchBar() {
    const [query, setQuery] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const results = useSearch(searchQuery)

    const handleSearch = () => {
        if (query.trim() === '') {
            return
        }
        setSearchQuery(query)
    }

    const handleClearSearch = () => {
        setQuery('')
        setSearchQuery('')
    }

  return (
    <div>
      <div className="flex flex-col mb-10">
        <div className="flex items-center mb-2 relative">
            <input 
                type='text'
                placeholder='Pokémon Search'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className='mb-2 mr-2 p-2 border rounded w-48 text-black'
            />
            {query && (
                <button
                    onClick={handleClearSearch}
                    className="text-white bg-red-500 rounded-full px-2 py-1"
                >
                    x
                </button>
            )}
        </div>
        <Button
            onClick={handleSearch}
            className='mr-2 p-2 border rounded w-48'
        >
            Search
        </Button>
        {results.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-4">
                {results.map((pokemon, index) => (
                    <PokemonCard key={index} pokemon={pokemon} />
                ))}
            </div>
        )}
      </div>
    </div>
  )
}
