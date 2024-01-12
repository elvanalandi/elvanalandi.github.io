import React from "react";
import Timeline from "./timeline";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          Work experience & education<span className="text-red-500"></span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
          Explore my professional and educational journey
        </p>
      </div>
      <div className="flex flex-col h-3/5 justify-center items-center bg-transparent text-white text-base pb-8 sm:text-lg overflow-y-auto">
        <Timeline />
      </div>
    </div>
  )
};

export default page;