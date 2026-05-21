import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-700 mb-4 md:mb-0 cursor-pointer">
        <img className="w-[50px]" src="logo.png" alt="" />
      <span className="ml-3 text-xl">Noor's Portfolio</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center gap-2.5">
      <Link to="/"  className="mr-5 text-gray-700 relative inline-block after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-pink-500 after:transition-all after:duration-300 hover:after:w-full hover:text-pink-500 cursor-pointer">About Me</Link>
      <Link to="MySkills" className="mr-5 text-gray-700 relative inline-block after:content-[''] after:absolute after:w-0  after:bg-pink-500 after:left-0 after:-bottom-1 after:h-[2px] after:duration-300 after:transition-all hover:after:w-full hover:text-pink-500 cursor-pointer">My Skills</Link>
      <Link to="Contact"  className="mr-5 text-gray-700 relative inline-block after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-full after:bg-pink-500 hover:text-pink-500 cursor-pointer">Get In Touch</Link>
    </nav>
    <a href="https://www.linkedin.com/in/noor-fatima-imran/" target='_blank'><button className="inline-flex items-center bg-pink-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-pink-600 cursor-pointer rounded-3xl text-base mt-4 md:mt-0">Connect With Me
    </button></a>
    
  </div>
  <hr className="w-6xl m-auto border-gray-300 border-0 border-t"/>
</header>
  )
}
