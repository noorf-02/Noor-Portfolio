import { useState } from 'react'
import Navbar from './components/shared/Navbar'
import Footer from './components/shared/Footer'
import Hero from './components/ui/Hero'
import LandingPage from './pages/LandingPage'
import Spage from './components/ui/Spage'
import GetInTouch from './components/ui/GetInTouch'
import {BrowserRouter, Routes, Route} from 'react-router-dom' 
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import { Link } from 'react-router-dom'



function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col min-h-screen">
  <Navbar />

<main className="flex-1">
<Routes>
  
    <Route path='/' element={<LandingPage />} ></Route>
    <Route path='MySkills' element={<Skills />}></Route>
    <Route path='Contact' element={<Contact />}></Route>
 
</Routes> 
 </main> 

  <Footer />
</div>
</BrowserRouter>
  )
}

export default App
