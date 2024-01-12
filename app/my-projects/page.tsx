import React from "react";
import ProjectList from "./projectList";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          Tech projects<span className="text-red-500"></span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Explore my portfolio projects, showcasing a blend of academic projects, freelance web development, and cybersecurity CTF write-ups. It's a journey through my growth and accomplishments in the evolving world of tech
        </p>
      </div>

      <ProjectList />
    </div>
  )
};

export default page;