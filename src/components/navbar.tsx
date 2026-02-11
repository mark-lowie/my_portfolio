"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Download, X } from "lucide-react";

export default function Navbar() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <nav className="flex justify-between items-center py-8 sticky top-0 z-50 bg-background/80 backdrop-blur-md px-4 md:px-0">
        <div className="text-xl font-bold flex items-center gap-2">
          <div className="bg-accent p-1.5 rounded text-background"><Code2 size={18}/></div>
          <span>Mark Lowie<span className="text-accent">.dev</span></span>
        </div>
        <button 
  onClick={() => setShowModal(true)}
  className="bg-accent text-background px-6 py-2.5 rounded-lg font-bold text-[11px] tracking-widest 
             hover:brightness-110 hover:shadow-[0_0_20px_rgba(0,209,193,0.3)] 
             transition-all duration-300 uppercase"
>
  Resume
</button>
      </nav>

      <AnimatePresence>
        {showModal && (
      
          <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 overflow-hidden">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="absolute inset-0 bg-black/95 backdrop-blur-xl"
            />
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="relative bg-[#1a2424] border border-accent/40 p-10 rounded-[40px] max-w-sm w-full shadow-[0_0_80px_-15px_rgba(0,209,193,0.4)] text-center"
            >
              <button onClick={() => setShowModal(false)} className="absolute top-6 right-6 text-gray-400 hover:text-white p-2 transition-colors"><X size={24} /></button>
              <div className="bg-accent/10 w-fit p-5 rounded-3xl mb-8 text-accent mx-auto ring-1 ring-accent/20"><Download size={36} /></div>
              <h3 className="text-2xl font-bold mb-4 text-white uppercase tracking-widest">Download CV?</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-10">
                Are you sure you want to download Mark Lowie's latest resume?
              </p>
              <div className="flex gap-4">
                <button onClick={() => setShowModal(false)} className="flex-1 py-4 font-bold text-[10px] tracking-widest text-gray-500 hover:text-white uppercase transition-colors">Cancel</button>
                <a href="/Resume-Mark Lowie.pdf" download onClick={() => setShowModal(false)} 
                   className="flex-1 bg-accent text-background py-4 rounded-2xl font-bold text-[10px] tracking-widest hover:brightness-110 transition-all uppercase text-center">Confirm</a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}