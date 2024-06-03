"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-screen w-full">
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center justify-center px-10 md:px-20 mt-10 w-full z-[10]"
    >
      <motion.div variants={slideInFromLeft(0.2)} className="w-full flex flex-col gap-5 justify-center m-auto text-start container bg-gray-950 rounded-lg">

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-4 md:gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto p-3"
        >
          <span>
            Journey in the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Digital World{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-2 max-w-[600px] p-3"
        >
          Discover my journey in the IT world, where I blend software development, web creation, and a keen interest in cybersecurity. Explore my diverse projects in the ever-evolving landscape of technology.
        </motion.p>
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full flex justify-center items-center"
      >
      </motion.div>
    </motion.div>
    </div>
  )
};

export default Hero;