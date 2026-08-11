import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils';
import { ChevronRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={staggerContainer(0.2, 0.4)}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-6"
        >
          <motion.div variants={fadeIn("right", 0.5)}>
            <span className="px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-semibold tracking-wide uppercase">
              Welcome to my universe
            </span>
          </motion.div>

          <motion.h1
            variants={fadeIn("right", 0.6)}
            className="text-5xl md:text-7xl font-bold leading-tight font-outfit"
          >
            Hi, I'm <span className="text-blue-500 text-glow">Jayendhran</span> <br />
            <span className="text-white/90">Software Developer</span>
          </motion.h1>

          <motion.p
            variants={fadeIn("right", 0.7)}
            className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            I build functional, backend-focused applications using Java, relational databases, and object-oriented programming. Currently, I am expanding my development skills towards modern enterprise backend architectures.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.8)}
            className="flex flex-wrap gap-4 mt-4"
          >
            <button className="btn-primary flex items-center gap-2 group">
              Explore Projects
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn-outline flex items-center gap-2">
              <Download size={20} />
              Resume
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeIn("left", 0.5)}
          initial="hidden"
          animate="show"
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Animated rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-blue-500/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dashed border-sky-500/20 rounded-full"
            />

            <div className="w-full h-full rounded-2xl overflow-hidden glass border-white/20 glow-blue rotate-3 hover:rotate-0 transition-transform duration-500">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover scale-110 hover:scale-100 transition-transform duration-700"
              />
            </div>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 glass px-4 py-2 rounded-xl text-xs font-bold text-blue-400 flex items-center gap-2 glow-blue"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available for Hire
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
