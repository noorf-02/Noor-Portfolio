import React from "react";

export default function Spage() {
  return (
    <div className="container w-[90%] mx-auto py-10 flex flex-col">



      <div className="skill-card flex justify-center gap-[50px]">
        
        <div className="card justify-around bg-pink-500 w-[300px] h-[300px] rounded-4xl p-4 flex flex-col items-center">
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

        <div className="card justify-around bg-pink-500 w-[300px] h-[300px] rounded-4xl p-4 flex flex-col items-center">
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

        <div className="card justify-around bg-pink-500 w-[300px] h-[300px] rounded-4xl p-4 flex flex-col items-center">
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


