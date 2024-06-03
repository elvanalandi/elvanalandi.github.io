import React from "react";
import ProjectList from "./projectList";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-3 md:gap-5 flex-col md:flex-row min-h-screen bg-gradient-to-r from-[#0C011A] via-[#1a1a2e] to-[#3a3a5e] overflow-y-scroll md:overflow-hidden">
      <div className="flex flex-col md:gap-3 px-4 md:ml-20 md:w-1/2 mt-20 md:mt-0">
        <h1 className="text-4xl md:text-5xl text-white font-semibold text-center">
          Tech projects<span className="text-red-500"></span>
        </h1>
        <p className="text-center text-sm md:text-base text-gray-200 md:text-gray-400">
          Explore my portfolio projects, showcasing a blend of academic projects, freelance web development, and cybersecurity CTF write-ups. It's a journey through my growth and accomplishments in the evolving world of tech
        </p>
      </div>
      <div className="w-full max-w-[90%] mt-5 md:mr-20">
        <ProjectList />
      </div>
    </div>
  )
};

export default page;