"use client";

import { Navbar } from "@/components/navbar";
import Hero from "@/sections/Hero";
import Projects from "@/sections/Projects";
import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="w-full">
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
