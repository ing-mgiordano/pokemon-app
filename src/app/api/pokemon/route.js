
export async function GET(request) {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1000')
    const data = await res.json()

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
}
