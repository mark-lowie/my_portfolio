"use client";
import { motion } from "framer-motion";
import { Layout, ArrowUpRight, BarChart3, Package, Cpu } from "lucide-react";



export default function Projects() {
  const projects = [
    { title: "VitaAssess", icon: <BarChart3 className="text-accent/20" size={60}/>, desc: "Health analytics for monitoring patient metrics in New Corella.", tech: "NEXT.JS • D3.JS" },
    { title: "POS System", icon: <Package className="text-accent/20" size={60}/>, desc: "Inventory management for retail efficiency and automated reporting.", tech: "PYTHON • POSTGRESQL" },
    { title: "ML Integration", icon: <Cpu className="text-accent/20" size={60}/>, desc: "Llama 3.2 research for automated health data processing.", tech: "LLAMA 3.2 • SUPABASE" }
  ];

  return (
    <section className="py-24">
      <div className="flex justify-between items-end mb-16">
        <div>
          <h2 className="text-accent text-[11px] font-bold tracking-[0.3em] mb-3 uppercase">Portfolio</h2>
          <h3 className="text-4xl font-bold">Featured Projects</h3>
        </div>
        <a href="#" className="text-accent text-xs font-bold tracking-widest border-b-2 border-accent/30 pb-1 hover:border-accent transition-all uppercase">View archive</a>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: false }} 
            className="group bg-card/30 border border-white/5 rounded-[32px] p-8 hover:border-accent/30 transition-all flex flex-col">
            <div className="h-52 bg-accent/5 rounded-2xl mb-8 flex items-center justify-center border border-white/5 overflow-hidden">{p.icon}</div>
            <h4 className="text-2xl font-bold mb-3 flex justify-between items-center">{p.title} <ArrowUpRight className="text-gray-600 group-hover:text-accent transition-all" size={20}/></h4>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed flex-grow">{p.desc}</p>
            <div className="text-[10px] font-bold tracking-widest text-accent bg-accent/5 px-3 py-1.5 rounded-lg border border-accent/10">{p.tech}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}