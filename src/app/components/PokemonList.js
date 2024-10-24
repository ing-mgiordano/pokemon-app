"use client"

import { useState, useEffect } from "react"
import PokemonCard from "./PokemonCard"
import Button from "./ui/Button"

export default function PokemonList() {
    const [data, setData] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('/api/pokemon')
                const data = await res.json()
                setData(data)
            } catch (error) {
                console.error("Error fetching data:", error)
            }
        }
        fetchData()
    }, [])

    if(!data) return <p>Loading...</p>

    const pokemonPerPage = 50
    const totalPage = Math.ceil(data.results.length/pokemonPerPage)
    const lastPokemon = currentPage*pokemonPerPage
    const firstPokemon = lastPokemon-pokemonPerPage
    const currentPokemon = data.results.slice(
        firstPokemon,
        lastPokemon
    )

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div>   
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {currentPokemon.map((pokemon, index) => (
                <PokemonCard key={index} pokemon={pokemon} />
            ))}
        </div>
        <div className="flex justify-center mt-4">
            {Array.from({ length: totalPage }, (_, i) =>(
                <Button
                    key={i}
                    onClick={() => paginate(i + 1)}
                    className={`mx-1 ${currentPage === i + 1 ? 'bg-blue-700' : ''}`}
                >
                    {i + 1}
                </Button>
            ))}
        </div>
    </div>
  )
}
