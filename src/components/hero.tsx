"use client";
import { ArrowRight } from "lucide-react";
import { motion, Transition } from "framer-motion";

export default function Hero() {
  const springTransition: Transition = { 
    type: "spring", 
    stiffness: 50, 
    damping: 20, 
    duration: 1.2 
  };

  return (
    <section className="min-h-[85vh] grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center py-20 overflow-hidden">
      
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ ...springTransition, delay: 0.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="flex items-center gap-2 text-accent text-[10px] font-bold mb-8 bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20 uppercase tracking-widest">
          <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
          AVAILABLE FOR NEW PROJECTS
        </div>
        <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] mb-8 text-white tracking-tight">
          Hi, I'm <span className="text-accent italic font-light">Mark Lowie</span>, a Web Developer.
        </h1>
        <p className="text-gray-400 max-w-lg mb-12 text-lg leading-relaxed">
          4th Year BSIT student at University of Mindanao Tagum City. 
          Focused on health analytics like **VitaAssess** for **New Corella**.
        </p>
        <button className="group bg-accent text-background px-10 py-5 rounded-2xl font-bold text-xs uppercase tracking-widest hover:brightness-110 hover:shadow-[0_0_30px_rgba(0,209,193,0.4)] transition-all duration-500 flex items-center gap-2">
          View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </motion.div>

      <div className="flex items-center justify-center md:justify-end relative h-full">
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...springTransition, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="relative z-10 w-full max-w-[280px] md:max-w-[340px] aspect-square"
        >
    
          <div className="absolute inset-0 border-[2px] border-accent/30 rounded-full bg-gradient-to-t from-accent/10 to-transparent"></div>
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-[100px] -z-10"></div>
          
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <img 
              src="/my-profile.png" 
              alt="Jhone Body" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain scale-150 origin-bottom"
            />
          </div>

 
          <div className="absolute inset-0">
            <img 
              src="/my-profile.png" 
              alt="Jhone Head" 
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-auto object-contain scale-150 origin-bottom z-20"
              style={{ clipPath: 'inset(0 0 50% 0)' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}