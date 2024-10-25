'use client'

import { useSession, signOut } from 'next-auth/react'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const { data: session } = useSession()

  return (
    <header className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2 text-lg">
          <Link href='/'>
            <h2 className="font-bold cursor-pointer">Pokémons</h2>
          </Link>
          <span className="px-2">|</span>
          <Link href="/dashboard">
          <h2 className="font-bold cursor-pointer">Statistics</h2>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          {session ? (
              <>
                <span>Hi, {session.user.name}</span>
                <button
                  onClick={() => signOut()}
                  className="px-4 py-2 bg-red-500 text-white rounded"
                >
                  Sing Out
                </button>
              </>
            ) : null
          }
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}