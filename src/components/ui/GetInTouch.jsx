import React from "react";
import { Link } from 'react-router-dom'


export default function GetInTouch() {
  return (
   <div className="contact-page mx-auto w-[90%] py-10 gap-10 flex flex-col justify-center h-[200px] lg:h-[500px]">
  <div className="linkedin flex items-baseline text-3xl">
    <p className=" text-pink-500 font-bold leading-0">LinkedIn </p>
    <a className="ml-3 text-black" href="https://www.linkedin.com/in/noor-fatima-imran/" target="_blank">
      <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={0} className="w-5" viewBox="0 0 24 24">
        <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx={4} cy={4} r={2} stroke="none" />
      </svg>
    </a>
  </div>
  <div className="linkedin flex items-baseline text-3xl">
    <p className=" text-pink-500 font-bold leading-0">Instagram </p>
    <a className="ml-3 text-black" href="https://www.instagram.com/noorcroches/" target="_blank">
      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
        <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
      </svg>
    </a>
  </div>
</div>

  );
}
