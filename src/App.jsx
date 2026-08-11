import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative bg-slate-950 selection:bg-blue-500/30 selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <main key="content" className="relative">
            <CustomCursor />
            <Navbar />
            <div id="home"><Hero /></div>
            <div id="about"><About /></div>
            <div id="journey"><Timeline /></div>
            <div id="skills"><Skills /></div>
            <div id="projects"><Projects /></div>
            <div id="contact"><Contact /></div>
            
            <footer className="py-12 border-t border-white/5 bg-slate-950 relative overflow-hidden">
               <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
               <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                 <p className="text-slate-500 text-sm">
                   &copy; {new Date().getFullYear()} Muthu Portfolio. All rights reserved.
                 </p>
                 <div className="flex items-center gap-2">
                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                   <span className="text-blue-500 text-sm font-medium">Built with React & Framer Motion</span>
                 </div>
               </div>
            </footer>
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
