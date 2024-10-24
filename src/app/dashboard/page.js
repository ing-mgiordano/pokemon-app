'use client'

import { useState, useEffect } from 'react'
import { Chart } from 'chart.js/auto'
import { Doughnut } from 'react-chartjs-2'

export default function Dashboard() {
  const [chartData, setChartData] = useState(null)
  const [totalPokemons, setTotalPokemons] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('/api/dashboard')
        const data = await res.json()

        const { totalPokemons, typeCounts } = data

        if (!totalPokemons || totalPokemons === 0) return

        const typePercentages = {}
        Object.entries(typeCounts).forEach(([type, count]) => {
            typePercentages[type] = ((count / totalPokemons) * 100).toFixed(2)
        })

        const chartData  = {
          labels: Object.keys(typePercentages),
          datasets: [
            {
              data: Object.values(typePercentages),
              backgroundColor: [
                '#F7464A',
                '#46BFBD',
                '#FDB45C',
                '#949FB1',
                '#4D5360',
                '#AC64AD',
                '#4BC0C0',
                '#9966FF',
                '#FF9F40',
                '#FF6384',
                '#36A2EB',
                '#FFCE56',
                '#2ecc71',
                '#e74c3c',
                '#e67e22',
                '#1abc9c',
                '#9b59b6',
                '#34495e',
              ],
              hoverBackgroundColor: [
                '#FF5A5E',
                '#5AD3D1',
                '#FFC870',
                '#A8B3C5',
                '#616774',
                '#DA92DB',
                '#5AD4D4',
                '#B38CFF',
                '#FFB870',
                '#FF7394',
                '#5AB3EF',
                '#FFD966',
                '#48e68b',
                '#ff6b6b',
                '#ff8c42',
                '#2ee8b9',
                '#b370cf',
                '#57606f',
              ],
            },
          ],
        }

        setChartData(chartData)
        setTotalPokemons(totalPokemons)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchData()
  }, [])

  if (!chartData) return <p>Loading...</p>

  const options = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            size: 14,
            family: 'sans-serif',
          },
          color: 'white',
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || ''
            const value = context.raw || ''
            return `${label}: ${value}%`
          },
        },
      },
    },
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Pokémon Dashboard</h1>
      <p className="text-xl text-center mb-6">Total number of Pokémon: {totalPokemons}</p>
      <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center text-gray-700 dark:text-gray-300">
            Percentage of Pokémon by Type
        </h2>
        <div className="relative">
          <Doughnut data={chartData} options={options} />
        </div>
      </div>
    </div>
  )
}
