import React from "react";
import Skill from "./skill";
import { SkillData } from "@/constants";
import { isMobile } from "@/utils/device";

const page = () => {
  const checkIsMobile = isMobile();

  return (
    <div className="flex flex-col md:flex-row h-screen overflow-y-auto bg-gradient-to-r from-[#0C011A] via-[#1a1a2e] to-[#3a3a5e]">
    <div className="flex items-center justify-center gap-3 md:gap-5 flex-col md:flex-row mt-20 md:mt-0 mb-2 md:mb-0 mx-4 md:mx-0 px-4 md:w-1/2">
      <div className="flex flex-col gap-3 md:ml-20">
        <h1 className="text-4xl md:text-5xl text-white font-semibold text-center md:text-left">
          About me<span className="text-red-500"></span>
        </h1>
        <p className="max-w-[400px] text-sm md:text-base text-gray-200 md:text-gray-400 text-center md:text-left">
          Hey there! I'm Elvan Alandi, currently pursuing a master's in cybersecurity and exploring this field through self-learning. My journey began in computer and web development, leading me to the exciting world of digital security. I've gained valuable skills and am thrilled to apply them in cybersecurity. In my free time, I enjoy solving Capture The Flag (CTF) challenges, constantly learning and growing in this fascinating field.
        </p>
      </div>
    </div>
    <div className="grid grid-cols-3 md:grid-cols-5 justify-around gap-3 md:gap-5 items-center rounded-md bg-slate-300 p-2 md:p-4 max-w-[90%] md:max-w-[70%] md:mr-40 m-auto overflow-y-scroll md:overflow-hidden">
      {SkillData.map((img, index) => (
        <Skill
          key={index}
          alt={img.skillName}
          src={img.image}
          width={checkIsMobile ? 20 : img.width}
          height={checkIsMobile ? 20 : img.height}
          index={index}
        />
      ))}
    </div>
</div>
  )
};

export default page;