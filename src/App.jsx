import { useState } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/ui/Hero'
import LandingPage from './pages/LandingPage'
import Spage from './components/ui/Spage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
  <Navbar />
  <main className="flex-1">
    <Spage/>
  </main>
  <Footer />
</div>
  
  )
}

export default App
