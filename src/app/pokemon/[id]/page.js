"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import Button from "@/app/components/ui/Button"

export default function PokemonDetails() {
    const { id } = useParams()

    const [data, setData] = useState(null)

    useEffect(() => {
        if(!id) return null
        const fetchData = async () => {
            try {
                const res = await fetch(`/api/pokemon/${id}`)
                const data = await res.json()
                setData(data) 
            } catch (error) {
                console.error("Error fetching data:", error) 
            }
        }
        fetchData()
    }, [id])

    if(!data) return <p>Loading...</p>

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900">
        <div className="rounded-lg shadow-lg p-6 max-w-md text-center">   
            <h1 className="text-4xl font-bold capitalize mb-4 text-gray-800 dark:text-gray-100">{data.name}</h1>
            <Image
                src={data.sprites.front_default}
                alt={data.name}
                width={150}
                height={150}
                className="mx-auto"
                />
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700 dark:text-gray-300">Type(s)</h2>
            <ul className="flex justify-center space-x-4">
            {data.types.map((typeInfo) => (
                <li
                key={typeInfo.type.name}
                className="capitalize bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-white px-3 py-1 rounded-full"
                >
                {typeInfo.type.name}
                </li>
            ))}
            </ul>
            <h2 className="text-2xl font-semibold mt-6 mb-4 text-gray-700 dark:text-gray-300">Characteristics</h2>
            <ul className="list-disc list-inside text-left text-gray-600 dark:text-gray-300">
                {data.stats.map((stat) => (
                    <li key={stat.stat.name} className="capitalize">
                        <span className="font-medium">{stat.stat.name}:</span> {stat.base_stat}
                    </li>
                ))}
            </ul>
            <Link href='/'>
                <Button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Back
                </Button>
            </Link>
        </div>
    </div>
  )
}
