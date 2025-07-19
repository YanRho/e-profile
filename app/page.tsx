import About from "@/components/About";
import Hero from "@/components/Hero";
import Navigation from "@/components/Navigation";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navigation />
      <Hero/>
      <About/>
      <Skills/>
    </>
  );
}
