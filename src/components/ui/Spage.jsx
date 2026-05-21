import React from "react";
import { Link } from 'react-router-dom'

export default function Spage() {
  return (

//     <div className="container w-[90%] mx-auto py-10 flex flex-col">

//   <h1 className="text-3xl font-bold text-center pb-10 text-pink-500">My Skills</h1>

//   <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-center lg:items-stretch lg:gap-[50px]">

//     <div className="card justify-around bg-pink-500 w-[280px] sm:w-[300px] rounded-4xl p-10 flex flex-col items-center">
//       <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
//         <i className="fa-solid fa-code text-lg"></i>
//       </span>
//       <div className="flex flex-col items-center gap-1.5">
//         <p className="text-white font-bold text-2xl">Web Development</p>
//         <p className="text-center text-white">
//           Creating Highly creative and Efficient websites for your business
//         </p>
//       </div>
//       <div className="w-[15rem] bg-white rounded-full">
//         <div className="h-full rounded-full bg-pink-100 w-[40%] font-bold text-pink-500 px-2.5 text-center">40%</div>
//       </div>
//     </div>

//     <div className="card justify-around bg-pink-500 w-[280px] sm:w-[300px] rounded-4xl p-4 flex flex-col items-center">
//       <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
//         <i className="fa-solid fa-ranking-star text-lg"></i>
//       </span>
//       <div className="flex flex-col items-center gap-1.5">
//         <p className="text-white font-bold text-2xl">SEO</p>
//         <p className="text-center text-white">
//           Optimizing your websites against low competition keywords
//         </p>
//       </div>
//       <div className="w-[15rem] bg-white rounded-full">
//         <div className="h-full rounded-full bg-pink-100 w-[60%] font-bold text-pink-500 px-2.5 text-center">60%</div>
//       </div>
//     </div>

//     <div className="card justify-around bg-pink-500 w-[280px] sm:w-[300px] rounded-4xl p-4 flex flex-col items-center">
//       <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
//         <i className="fa-solid fa-hashtag text-lg"></i>
//       </span>
//       <div className="flex flex-col items-center gap-1.5">
//         <p className="text-white font-bold text-2xl">SMM</p>
//         <p className="text-center text-white">
//           Grow an engaging presence online that builds trust among users.
//         </p>
//       </div>
//       <div className="w-[15rem] bg-white rounded-full">
//         <div className="h-full rounded-full bg-pink-100 w-[80%] font-bold text-pink-500 px-2.5 text-center">80%</div>
//       </div>
//     </div>

//   </div>
// </div>

    <div className="container w-[90%] mx-auto py-10 flex flex-col">

    <h1 className="text-3xl font-bold text-center pb-10 text-pink-500">My Skills</h1>

      <div className="skill-card flex flex-col lg:flex-row justify-center gap-[50px] lg:items-stretch items-center">
        
        <div className="card justify-around bg-pink-500 w-[300px] rounded-4xl p-10 flex flex-col items-center">
          <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
              <i class="fa-solid fa-code text-lg"></i>
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <p className="text-white font-bold text-2xl">Web Development</p>
          <p className="text-center text-white">
            Creating Highly creative and Efficient websites for your business
          </p>
          </div>
            <div className="w-[15rem] bg-white rounded-full">
                <div className="h-full rounded-full bg-pink-100 w-[40%] font-bold text-pink-500 px-2.5 text-center"> 40% </div>
            </div>
        </div>

        <div className="card justify-around bg-pink-500 w-[300px] rounded-4xl p-10 flex flex-col items-center gap-3.5">
          <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
              <i class="fa-solid fa-ranking-star text-lg"></i>
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <p className="text-white font-bold text-2xl">SEO</p>
          <p className="text-center text-white">
            Optimizing your websites agaisnt low competiton keywords
          </p>
          </div>
            <div className="w-[15rem] bg-white rounded-full">
                <div className="h-full rounded-full bg-pink-100 w-[60%] font-bold text-pink-500 px-2.5 text-center"> 60% </div>
            </div>
        </div>

        <div className="card justify-around bg-pink-500 w-[300px] rounded-4xl p-10 flex flex-col items-center">
          <span className="text-pink-500 bg-white rounded-full w-14 h-14 flex items-center justify-center">
              <i class="fa-solid fa-hashtag text-lg"></i>
          </span>

          <div className="flex flex-col items-center gap-1.5">
            <p className="text-white font-bold text-2xl">SMM</p>
          <p className="text-center text-white">
            Grow and engaging presence online that builds trust among users.
          </p>
          </div>
            <div className="w-[15rem] bg-white rounded-full">
                <div className="h-full rounded-full bg-pink-100 w-[80%] font-bold text-pink-500 px-2.5 text-center"> 80% </div>
            </div>
        </div>
        
      </div>
    </div>
  );
}


