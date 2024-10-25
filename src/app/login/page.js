"use client"

import { signIn } from 'next-auth/react'

export default function Login() {
    return (
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-3xl font-bold mb-4">Iniciar Sesión</h1>
          <button
            onClick={() => signIn(undefined, { callbackUrl: "/" })}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Sign in with GitHub
          </button>
        </div>
    )
}
