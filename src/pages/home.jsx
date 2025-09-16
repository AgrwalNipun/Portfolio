import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBackGround } from '../components/StarBackGround'
import { Navbar } from '../components/NavBar'

const HomeScreen = () => {
  return (
    <div className = "min-h-screen bg-background text-foreground">

      {/* <ThemeToggle/> */}

      <StarBackGround />
      <Navbar/>





    </div>
  )
}

export default HomeScreen
