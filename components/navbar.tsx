"use client";
import { Socials } from "@/constants";
import React, { useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
    const navbar = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const onScroll = () => {
        console.log("Scroll event triggered");
        if(navbar.current) {
            if (window.scrollY > 0) {
                navbar.current.classList.add('bg-opacity-30');
            } else {
                navbar.current.classList.remove('bg-opacity-30');
            }
            };
            
            console.log("Adding scroll event listener");
            window.addEventListener('scroll', onScroll);
            return () => {
                console.log("Removing scroll event listener");
                window.removeEventListener('scroll', onScroll)
            };
        }
    }, []);

  return (
    <div className="fixed top-0 z-[20] w-full flex flex-row gap-3 md:gap-5 md:justify-between px-4 md:px-60 p-3 md:p-5" ref={navbar}>
        <h1 className="text-white text-[32px] md:text-[45px]">
            Elvan <span className="font-thin">Alandi</span>
            <span className="text-red-500"></span>
        </h1>
        <div className="flex flex-row gap-3 md:gap-5 mt-2 ml-auto">
            {Socials.map((social) => (
                <a key={social.name} href={social.link} target="_blank">
                    <Image
                        key={social.name}
                        src={social.src}
                        alt={social.name}
                        width={24}
                        height={24}
                    />
                </a>
            ))}
        </div>
    </div>
  )
};

export default Navbar;