import React from 'react'
import { Link } from 'react-router-dom'


export default function Hero() {
  return (
  <section>
  <div className="container px-5 py-8 my-15 mx-auto w-[90%] flex flex-col lg:flex-row items-center justify-between gap-10">

    {/* COL LEFT */}
    <div className="col-left w-full lg:w-1/2">
      <p className="text-xl sm:text-2xl text-center lg:text-left">
        I am <span className="text-pink-500 font-extrabold">Noor Fatima</span>, an aspiring MERN stack developer
      </p>

      <div className="skills flex justify-center gap-16 sm:gap-24 py-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white bg-pink-500 rounded-full w-14 h-14 flex items-center justify-center">
            <i className="fa-solid fa-code text-lg"></i>
          </span>
          <p>MERN Stack</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <span className="text-white bg-pink-500 rounded-full w-14 h-14 flex items-center justify-center">
            <i className="fa-brands fa-think-peaks text-lg"></i>
          </span>
          <p>SEO</p>
        </div>
      </div>

      <div className="hero-bottom bg-pink-500 w-full rounded-3xl flex flex-col sm:flex-row items-center px-5 py-4 gap-4">
        <p className="text-white font-medium text-sm sm:text-base text-center sm:text-left">
          Creating highly creative and fully SEO optimized websites for your businesses from scratch.
          The designing, creation and the optimization is in our hands. Just say the word and
        </p>
        <button className="cursor-pointer bg-white rounded-full text-[12px] whitespace-nowrap px-6 text-pink-500 font-bold h-[50px] hover:bg-pink-50 hover:text-pink-800 shrink-0">
          GET STARTED WITH US
        </button>
      </div>
    </div>

    {/* COL RIGHT */}
    <div className="col-right flex flex-col gap-5 w-full lg:w-1/2">

      <div className="bg-green-400 w-full rounded-3xl flex items-center px-5 h-24 gap-4 cursor-pointer">
        <span className="text-green-400 bg-white rounded-full w-14 h-14 shrink-0 flex items-center justify-center">
          <i className="fa-solid fa-pen-fancy text-lg"></i>
        </span>
        <p className="font-bold text-white">Planning and Design</p>
      </div>

      <div className="bg-yellow-500 w-full rounded-3xl flex items-center px-5 h-24 gap-4 cursor-pointer">
        <span className="text-yellow-500 bg-white rounded-full w-14 h-14 shrink-0 flex items-center justify-center">
          <i className="fa-solid fa-brain text-lg"></i>
        </span>
        <p className="font-bold text-white">Creation and Testing</p>
      </div>

      <div className="bg-blue-400 w-full rounded-3xl flex items-center px-5 h-24 gap-4 cursor-pointer">
        <span className="text-blue-400 bg-white rounded-full w-14 h-14 shrink-0 flex items-center justify-center">
          <i className="fa-solid fa-ranking-star text-lg"></i>
        </span>
        <p className="font-bold text-white">Optimization and Ranking</p>
      </div>

    </div>

  </div>
</section>
  )
}
