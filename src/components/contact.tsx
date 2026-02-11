"use client";
import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section className="py-32 grid md:grid-cols-2 gap-20">
  
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }} 
      >
        <h2 className="text-5xl font-bold leading-tight mb-8 text-white">
          Ready to build <br/> something <span className="text-accent italic text-6xl font-light">exceptional?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-md leading-relaxed">
          Currently based in the Tagum City / Samal area. 
          Accepting freelance projects and consultations for 2026.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-gray-300 font-medium">
            <div className="bg-accent/10 p-2.5 rounded-lg text-accent border border-accent/10">
              <Mail size={18}/>
            </div>
            <span>marklowienovember21@gmail.com</span>
          </div>
          <div className="flex items-center gap-4 text-gray-300 font-medium">
            <div className="bg-accent/10 p-2.5 rounded-lg text-accent border border-accent/10">
              <MapPin size={18}/>
            </div>
            <span>Tagum City, Davao Region, PH</span>
          </div>
        </div>
      </motion.div>

  
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="bg-card/40 border border-white/5 p-10 rounded-[40px] backdrop-blur-sm"
      >
        <div className="mb-8">
          <label className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-3 uppercase">Your Name</label>
          <input 
            type="text" 
            className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 focus:border-accent/50 outline-none transition-all text-white" 
            placeholder="Enter your name" 
          />
        </div>

        <div className="mb-10">
          <label className="block text-[10px] font-bold text-gray-500 tracking-[0.2em] mb-3 uppercase">Project Type</label>
          <select className="w-full bg-background/50 border border-white/5 rounded-xl px-4 py-4 outline-none focus:border-accent/50 transition-all text-gray-400">
            <option>Web Application</option>
            <option>Inventory System (POS)</option>
          </select>
        </div>

        <button className="w-full bg-accent text-background font-bold py-5 rounded-2xl hover:brightness-110 transition-all uppercase tracking-[0.2em] text-[11px]">
          Send Inquiry
        </button>
      </motion.div>
    </section>
  );
}