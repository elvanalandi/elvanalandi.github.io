"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import getLatestRepos, { Repo } from "@/lib/getLatestRepos";
import { ProImage } from "@/constants";

const ProjectList = () => {
  
  const [latestRepos, setLatestRepos] = useState<Repo[]>([]);

  useEffect(() => {
    getLatestRepos().then(repos => setLatestRepos(repos))
      .catch(error => {
        // Handle any errors here
        console.error("Error fetching repositories:", error);
      });
  }, []);

  return (
    <div className="w-[70%] md:w-[40%]">
      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">
        {latestRepos.map((latestRepo) => (
          <div className="relative group w-[150px] h-[150px]  md:w-[230px] md:h-[230px]" key={latestRepo.name}>
            {/* Background Image for each card */}
            <Image 
              alt="Background"
              src={ProImage.src} // Replace with your dynamic image source if needed
              layout="fill"
              objectFit="cover"
              className="z-0 rounded"
            />

            {/* Card Content */}
            <div className="relative z-10 p-4 opacity-100 group-hover:opacity-0 transition-opacity duration-200">
              <h1 className="font-semibold text-xl dark:text-white my-6 text-slate-100">
                {latestRepo.name}
              </h1>
              <p className="text-base font-normal my-6 text-slate-300">
                {latestRepo.description}
              </p>
            </div>

            <div className="cursor-pointer absolute inset-0 bg-gradient-to-r from-purple-800 via-pink-500 to-purple-800 opacity-0 group-hover:opacity-70 transition-opacity duration-200" />
            <a href={latestRepo.html_url} className="cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white md:text-lg">
              View Github
              <Image
                src="/assets/icons/arrow-right.svg"
                alt="arrow right"
                width={20}
                height={20}
                className="invert brightness-0 ml-2"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;