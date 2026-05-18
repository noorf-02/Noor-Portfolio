import React from 'react'

export default function Hero() {
  return (
  <section>
  <div className="container px-5 py-8 mx-auto w-[90%] flex items-center sm:flex-row flex-col justify-between">

    <div className="col-left">
      <p className="text-2xl">I am <span className="text-pink-500 font-extrabold">Noor Fatima</span>, an aspiring MERN stack developer</p>

      <div className="skills flex justify-center gap-40 py-10">

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

        {/* <div className="hero-bottom bg-pink-500 w-2xl h-32 rounded-3xl flex ">
            <p className='p-5 text-white font-medium'>Creating highly creative and fully SEO optimized websites for your businesses from scratch. The designing, creation and the optimization is in our hands. Just say the word and 
            </p>
            <button className='cursor-pointer bg-white rounded-4xl text-[12px] w-[400px] text-pink-500 font-bold h-[50px]'>GET STARTED WITH US</button>
        </div> */}

        <div className="hero-bottom bg-pink-500 w-2xl h-32 rounded-3xl flex items-center px-5 gap-4">
  <p className='text-white font-medium'>
    Creating highly creative and fully SEO optimized websites for your businesses from scratch. 
    The designing, creation and the optimization is in our hands. Just say the word and
  </p>
  <button className='cursor-pointer bg-white rounded-full text-[12px] whitespace-nowrap px-6 text-pink-500 font-bold h-[50px] hover:bg-pink-50 hover:text-pink-800'>
    GET STARTED WITH US
  </button>
</div>

    </div>

    <div className="col-right flex flex-col gap-5">

         <div className="hero-bottom bg-green-400 w-[600px] h-24 rounded-3xl flex items-center px-5 gap-4 cursor-pointer">
  <p className='text-white font-medium'>
    <span className="text-green-400 bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <i className="fa-solid fa-pen-fancy text-lg"></i>
          </span>
  </p>
  <p className='font-bold text-white '>
    Planning and Design
  </p>
</div>

 <div className="hero-bottom bg-yellow-500 w-[600px] h-24 rounded-3xl flex items-center px-5 gap-4 cursor-pointer">
  <p className='text-white font-medium'>
    <span className="text-yellow-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <i className="fa-solid fa-brain text-lg"></i>
          </span>
  </p>
  <p className='font-bold text-white '>
    Creation and Testing
  </p>
</div>

 <div className="hero-bottom bg-blue-400 w-[600px] h-24 rounded-3xl flex items-center px-5 gap-4 cursor-pointer">
  <p className='text-white font-medium'>
    <span className="text-blue-400 bg-white rounded-full w-14 h-14 flex items-center justify-center">
            <i className="fa-solid fa-ranking-star text-lg"></i>
          </span>
  </p>
  <p className='font-bold text-white '>
    Optimization and Ranking test 
  </p>
</div>

    </div>


  </div>
</section>
  )
}
