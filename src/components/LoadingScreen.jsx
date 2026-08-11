import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onComplete }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-slate-950 flex flex-col items-center justify-center"
    >
      <div className="relative w-48 h-1 overflow-hidden bg-slate-800 rounded-full mb-4">
        <motion.div 
          className="absolute inset-0 bg-blue-500 glow-blue"
          initial={{ width: 0 }}
          animate={{ width: `${percent}%` }}
        />
      </div>
      <div className="flex flex-col items-center">
        <motion.span 
          key={percent}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-outfit font-bold text-4xl mb-2"
        >
          {percent}%
        </motion.span>
        <motion.p 
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-blue-500 text-sm font-medium tracking-[0.3em] uppercase"
        >
          Initializing Portfolio
        </motion.p>
      </div>
    </motion.div>
  );
}
