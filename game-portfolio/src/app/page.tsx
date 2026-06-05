import { Navbar } from "@/components/layout/Navbar";
import { BackgroundEffects } from "@/components/layout/BackgroundEffects";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { SoundToggle } from "@/components/layout/SoundToggle";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Achievements } from "@/components/sections/Achievements";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <BackgroundEffects />
      <div className="crt-overlay" aria-hidden="true" />
      <CustomCursor />
      <SoundToggle />
      <Navbar />
      <main className="relative w-full overflow-x-hidden">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
    </>
  );
}
