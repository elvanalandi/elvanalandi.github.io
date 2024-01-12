import Hero from "@/app/main/hero";
import Particle from "@/app/main/particle";
import StarsCanvas from "./main/starBackground";

export default function Home() {
  return (
    <main className={`flex items-center h-screen relative bg-cover bg-[url('/assets/background.jpg')]`}>
      <StarsCanvas />
      <div className="absolute right-0 top-0 h-full w-[80%] z-[2]">
        {/* <Particle /> */}
      </div>
      <div className="flex flex-col gap-20">
        <Hero />
      </div>
    </main>
  )
};
