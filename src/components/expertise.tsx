"use client";
import { motion } from "framer-motion";
import { Code2, Terminal, Database } from "lucide-react";



export default function Expertise() {
  const skills = [
    { title: "Frontend", desc: "Crafting responsive interfaces using modern frameworks.", icon: <Code2 size={22}/>, tags: ["HTML5", "CSS3", "JS", "Tailwind"] },
    { title: "Backend", desc: "Developing scalable server-side logic and API architectures.", icon: <Terminal size={22}/>, tags: ["PHP", "Python", "Node.js"] },
    { title: "Tools & Cloud", desc: "Leveraging ecosystems for data management and deployment.", icon: <Database size={22}/>, tags: ["Supabase", "PostgreSQL", "Git", "MySQL"] }
  ];

  return (
    <section className="py-24">
      <h2 className="text-accent text-[11px] font-bold tracking-[0.3em] mb-3 uppercase">Expertise</h2>
      <h3 className="text-4xl font-bold mb-14">Technical Proficiency</h3>
      <div className="grid md:grid-cols-3 gap-6">
        {skills.map((s, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: false }} 
            className="bg-card/40 border border-white/5 p-10 rounded-[32px] hover:border-accent/20 transition-all group">
            <div className="bg-accent/10 w-fit p-3 rounded-xl mb-8 border border-accent/10 text-accent group-hover:bg-accent group-hover:text-background transition-all">{s.icon}</div>
            <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-10">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map(t => <span key={t} className="text-[9px] font-bold tracking-widest text-gray-500 bg-white/5 px-3 py-1 rounded border border-white/5 uppercase">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}