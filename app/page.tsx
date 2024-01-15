"use client";
import Hero from "@/app/main/hero";
import StarsCanvas from "./main/starBackground";

export default function Home() {

  return (
    <main className={`flex items-center h-screen relative bg-cover bg-[url('/assets/background.jpg')]`}>
      <StarsCanvas />
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  )
};
