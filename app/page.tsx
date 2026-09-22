import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { LiveLab } from "@/components/sections/LiveLab";
import { Research } from "@/components/sections/Research";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Certifications } from "@/components/sections/Certifications";
import { Experience } from "@/components/sections/Experience";
import { Contact } from "@/components/sections/Contact";
import { getPinnedRepos } from "@/lib/github";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function HomePage() {
  const repos = await getPinnedRepos();

  return (
    <>
      <Hero />
      <About />
      <LiveLab />
      <Research />
      <Projects repos={repos} />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
    </>
  );
}
