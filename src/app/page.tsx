import Navbar from "@/components/Navbar";
import TerminalHero from "@/components/TerminalHero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <TerminalHero />
      <TechStack />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  );
}
