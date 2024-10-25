"use client"

import { useSession } from 'next-auth/react'
import Link from 'next/link';
import PokemonList from "./components/PokemonList"
import SearchBar from "./components/SearchBar"
import Button from './components/ui/Button';

export default function Home() {
  const { data: session } = useSession()

  return (
    <div className="container mx-auto p-4">
      {session ? (
        <>
          <SearchBar />
          <PokemonList />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center h-screen text-center">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-4">Welcome</h1>
          <p className="mb-6 text-gray-600 text-lg">Sign in to explore more</p>
          <Link href="/login">
            <Button className="px-4 py-2 bg-blue-500 text-white rounded">
              Sign in
            </Button>
          </Link>
        </div>
      )}
    </div>
  )
}
