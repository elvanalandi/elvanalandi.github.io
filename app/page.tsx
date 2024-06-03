"use client";
import Hero from "@/app/main/hero";
import StarsCanvas from "./main/starBackground";

export default function Home() {

  return (
    <main className={`flex items-center h-screen overflow-hidden relative bg-cover bg-[url('/assets/background.jpg')]`}>
      <StarsCanvas />
      <div className="flex flex-col gap-10 md:gap-20 min-h-screen">
        <Hero />
      </div>
    </main>
  )
};
