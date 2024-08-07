import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
// import RecentProjects from "../components/RecentProjects";
import { navItems } from "@/data";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import { Projects } from "@/components/Projects";

export default function Home() {
  return (
    <main
      className="relative bg-black-100 flex justify-center items-center
    flex-col overflow-clip mx-auto sm:px-10 px-5"
    >
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Projects />
        <Skills />
        <Experience />
        <Footer />
      </div>
    </main>
  );
}
