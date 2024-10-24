import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar";

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <SearchBar />
      <PokemonList />
    </div>
  )
}
