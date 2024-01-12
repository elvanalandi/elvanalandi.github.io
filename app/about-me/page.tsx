import React from "react";
import Skill from "./skill";
import { SkillData } from "@/constants";

const page = () => {
  return (
    <div className="flex items-center justify-center gap-5 flex-col md:flex-row h-screen bg-[#0C011A]">
      <div className="flex flex-col gap-3">
        <h1 className="text-[50px] text-white font-semibold">
          About me<span className="text-red-500"></span>
        </h1>
        <p className="max-w-[400px] text-[16px] text-gray-200 md:text-gray-400">
        Hey there! I'm Elvan Alandi, currently pursuing a master's in cybersecurity and exploring this field through self-learning. My journey began in computer and web development, leading me to the exciting world of digital security. I've gained valuable skills and am thrilled to apply them in cybersecurity. In my free time, I enjoy solving Capture The Flag (CTF) challenges, constantly learning and growing in this fascinating field.
        </p>
      </div>
      <div className="grid grid-cols-5 md:grid-cols-6 justify-around flex-wrap mt-4 gap-5 items-center rounded-md bg-slate-300 p-4">
        {SkillData.map((img, index) => (
          <Skill
            key={index}
            alt={img.skillName}
            src={img.image}
            width={img.width}
            height={img.height}
            index={index}
          />
        ))}
      </div>
    </div>
    
  )
};

export default page;