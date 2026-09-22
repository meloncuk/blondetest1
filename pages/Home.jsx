import React from "react";
import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Introduction from "@/components/site/Introduction";
import Services from "@/components/site/Services";
import BrandStatement from "@/components/site/BrandStatement";
import Projects from "@/components/site/Projects";
import WhyBlondeLeeuw from "@/components/site/WhyBlondeLeeuw";
import Process from "@/components/site/Process";
import About from "@/components/site/About";
import Testimonials from "@/components/site/Testimonials";
import FinalCTA from "@/components/site/FinalCTA";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";

export default function Home() {
  return (
    <div className="bg-background">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <BrandStatement />
        <Projects />
        <WhyBlondeLeeuw />
        <Process />
        <About />
        <Testimonials />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}