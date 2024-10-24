"use client"

import { useState, useEffect } from "react"

export default function useSearch(query) {
    const [result, setResult] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            if (query.trim() === '') {
                setResult([])
                return
            }
            const res = await fetch(`/api/pokemon/search?q=${query}`)
            const data = await res.json()

            setResult(data.results)
        }
        fetchData()
    }, [query])
    
  return result
}
