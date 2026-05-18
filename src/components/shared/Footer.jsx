import React from 'react'

export default function Footer() {
  return (
    <footer class="text-gray-700 body-font bg-pink-500 shadow-[0_-4px_20px_rgba(10,0,0,0.3)]">
  <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
     <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0 cursor-pointer">
        {/* <img class="w-[50px]" src="logo.png" alt="" /> */}
      <span class="ml-3 text-xl">Noor's Portfolio</span>
    </a>
    
    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <a class="ml-3 text-white" href='https://www.instagram.com/noorcroches/' target='_blank'>
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a class="ml-3 text-white" href='https://www.linkedin.com/in/noor-fatima-imran/' target='_blank'>
        <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
    </span>
  </div>
</footer>
  )
}
