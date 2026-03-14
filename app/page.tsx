import { Hero }       from "@/components/sections/Hero";
import { About }      from "@/components/sections/About";
import { Skills }     from "@/components/sections/Skills";
import { Projects }   from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Contact }    from "@/components/sections/Contact";
import { getPinnedRepos } from "@/lib/github";

export default async function HomePage() {
  const repos = await getPinnedRepos();

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects repos={repos} />
      <Experience />
      <Contact />
    </>
  );
}
