import Card from "./ui/Card"
import Button from "./ui/Button"
import Link from "next/link"

export default function PokemonCard({ pokemon }) {
    const id = pokemon.url.split('/').filter(Boolean).pop()

  return (
    <Card className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold capitalize">{pokemon.name}</h2>
        <Link href={`/pokemon/${id}`}>
            <Button className="mt-5 object-center">Show Details</Button>
        </Link>
    </Card>
  )
}
