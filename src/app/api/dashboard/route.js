
export async function GET() {
    try {
      const resTotal = await fetch('https://pokeapi.co/api/v2/pokemon?limit=0')
      const dataTotal = await resTotal.json()
      const totalPokemons = dataTotal.count
  
    
      const resType = await fetch('https://pokeapi.co/api/v2/type')
      const dataType = await resType.json()
  
      const validTypes = dataType.results.filter(
        (type) => type.name !== 'unknown'
      )
      const typeCounts = {}

      for (const type of validTypes) {
        const typeResponse = await fetch(type.url)
        const typeDetails = await typeResponse.json()
        typeCounts[type.name] = typeDetails.pokemon.length
      }
  
      return new Response(
        JSON.stringify({
          totalPokemons,
          typeCounts,
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        }
      )
    } catch (error) {
      console.error('Error fetching data:', error)
      return new Response(JSON.stringify({ error: 'Error fetching data' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      })
    }
  }