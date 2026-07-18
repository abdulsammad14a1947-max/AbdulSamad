import LiquidBackground from "@/components/LiquidBackground";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import LogoStrip from "@/components/LogoStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Services from "@/components/Services";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Testimonials from "@/components/Testimonials";
import TechMarquee from "@/components/TechMarquee";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <LiquidBackground />
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <TechMarquee />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
