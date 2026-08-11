import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils';

const skills = [
  { name: 'Core Java & OOP', level: 80, category: 'Programming' },
  { name: 'Collections & Exception Handling', level: 75, category: 'Programming' },
  { name: 'React', level: 70, category: 'Web' },
  { name: 'SQL & MySQL', level: 75, category: 'Database' },
  { name: 'HTML, CSS & JavaScript', level: 65, category: 'Web' },
  { name: 'Git & GitHub', level: 70, category: 'Tools' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Core <span className="text-blue-500">Skills</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">My technical toolkit and expertise areas.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8"
        >
          {skills.map((skill, idx) => (
            <motion.div 
              key={skill.name}
              variants={fadeIn("up", 0.1 * idx)}
              className="group"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium flex items-center gap-2">
                  <span className="text-blue-500">•</span> {skill.name}
                  <span className="text-xs text-slate-500 px-2 py-0.5 rounded-full border border-slate-700">{skill.category}</span>
                </span>
                <span className="text-blue-400 font-bold">{skill.level}%</span>
              </div>
              <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1.5, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-blue-600 to-sky-400 rounded-full glow-blue"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
