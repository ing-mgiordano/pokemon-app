
export async function GET(request, { params }) {
    const resParams = await params // Change in how Next.js handles dynamic parameters
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${resParams.id}`)
    const data = await res.json()

  return new Response(JSON.stringify(data), {
    headers: { 'Content-Type': 'application/json' }
  })
}
