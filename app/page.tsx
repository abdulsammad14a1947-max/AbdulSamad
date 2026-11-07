import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Specializations from "@/components/Specializations";
import SkillsDashboard from "@/components/SkillsDashboard";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import CertificationsPreview from "@/components/CertificationsPreview";
import Services from "@/components/Services";
import Workflow from "@/components/Workflow";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <>
      <Nav />
      <main id="main-content">
        <Hero />
        <About />
        <Specializations />
        <SkillsDashboard />
        <Projects />
        <Experience />
        <Workflow />
        <Services />
        <CertificationsPreview />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
