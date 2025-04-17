import { motion } from "framer-motion";
import NavHeader from "@/components/nav-header";
import Hero from "@/components/sections/hero";
import CV from "@/components/sections/cv";
import Resume from "@/components/sections/about";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";
import Infographic from "@/components/sections/infographic";
import Insights from "@/components/sections/insights";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavHeader />
      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-8"
      >
        <Hero />
        <Resume />
        <CV />
        <Infographic />
        <Insights />
        <Projects />
        <Contact />
      </motion.main>
    </div>
  );
}