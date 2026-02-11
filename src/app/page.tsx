import Navbar from '../components/navbar';
import Hero from '../components/hero';
import Expertise from '../components/expertise';
import Projects from '../components/projects';
import Contact from '../components/contact';


export default function Home() {
  return (
    <main className="bg-background text-white min-h-screen selection:bg-accent selection:text-background">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <Navbar />
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
        
        <footer className="py-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] tracking-widest text-gray-500 font-bold uppercase">
          <p>© 2026 MARK LOWIE DEV PORTFOLIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/mark-lowie-artajo-83b539296/" className="hover:text-accent transition-colors">Linkedin</a>
            <a href="https://github.com/mark-lowie?tab=repositories" className="hover:text-accent transition-colors">Github</a>
          </div>
        </footer>
      </div>
    </main>
  );

}


