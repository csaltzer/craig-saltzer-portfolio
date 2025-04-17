import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useEffect, useState } from "react";

// Array of rotating statements
const heroStatements = [
  "I'm the one you call when you need it done—right, fast, and with foresight",
  "When the stakes are high and the path isn't clear, I get things moving",
  "I turn someday strategies into systems that work on Monday",
  "Execution is my love language",
  "I'm the one who turns your what if into done and dusted",
  "I get sh*t done. Strategically",
  "I'm the bridge between aspiration and implementation",
  "I turn we've never done it that way into why didn't we do this sooner?",
  "You'll give me the what, and I'll show you the why and what's next",
  "You know what you need today—I'll help you deliver it while quietly redesigning how you'll lead tomorrow",
  "Hire me to fix the problem. Keep me around if you want to prevent the next ten",
  "I'll fix the fire you see—and the nine smoldering under the surface",
  "Call me when it's urgent. Keep me when you want it to stop being urgent",
  "Brought in for the fire. Kept around to fireproof the system",
  "From triage to transformation—I'm who you call when it's urgent, and who you keep when you never want it to be again",
  "I show up when the pressure's high, and I stick around to make sure it stays low",
  "People call me when it's urgent. I build the solution, operate it to prove it works, and transfer it to a team that can sustain it—then I move on to the next big problem"
];

export default function Hero() {
  const [currentStatementIndex, setCurrentStatementIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);
  
  // Change statement every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      // First fade out
      setFadeIn(false);
      
      // After fade out complete, change text and fade in
      setTimeout(() => {
        setCurrentStatementIndex((prevIndex) => 
          prevIndex === heroStatements.length - 1 ? 0 : prevIndex + 1
        );
        setFadeIn(true);
      }, 500); // This should match the CSS transition time
      
    }, 5000); // Change every 5 seconds
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/CS6.jpeg"
            alt="Craig Saltzer"
            className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary/10"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Hi, I'm Craig Saltzer
        </motion.h1>
        
        <div className="h-20 flex items-center justify-center mb-4">
          <div 
            className={`transition-opacity duration-500 ease-in-out text-xl md:text-2xl font-medium text-primary max-w-3xl mx-auto ${fadeIn ? 'opacity-100' : 'opacity-0'}`}
          >
            {heroStatements[currentStatementIndex]}
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            onClick={() => document.querySelector("#cv")?.scrollIntoView({ behavior: "smooth" })}
            size="lg"
            className="group"
          >
            Learn More
            <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}