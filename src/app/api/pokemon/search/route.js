
export async function GET(request) {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1300')
    const data = await res.json()

    const filtered = data.results.filter((pokemon) => 
        pokemon.name.includes(query.toLowerCase())
    )

  return new Response(JSON.stringify({ results: filtered }), {
    headers: { 'Content-Type': 'application/json' },
  })
}
