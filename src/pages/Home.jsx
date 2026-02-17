import React from 'react'
import StarBackgound from '../components/StarBackgound'
import { ThemeToggle } from '../components/ThemeToggle'

const Home = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-8">
          <ThemeToggle />
          <StarBackgound />
        </div>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      </div>
    </div>
  )
}

export default Home