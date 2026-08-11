import React from 'react';
import { motion } from 'framer-motion';
import { School, GraduationCap, Laptop, Trophy, Target } from 'lucide-react';
import { fadeIn } from '../utils';

const timelineData = [
  {
    id: 1,
    title: 'School Phase',
    subtitle: 'Sri Ramakrishna Matric Higher Secondary School',
    // date: '2016 - 2020',
    description: 'Developed a strong foundation in science and mathematics. Discovered a passion for programming.',
    icon: <School size={24} />,
    color: 'bg-blue-500'
  },
  {
    id: 2,
    title: 'College Phase',
    subtitle: ' Sri Shakthi Institute of Engineering and Technology - CSE Graduate',
    date: '2022 - 2026',
    description: 'Earned a degree in Computer Science and Engineering. Built practical applications.',
    icon: <GraduationCap size={24} />,
    color: 'bg-sky-500'
  },
  {
    id: 3,
    title: 'Current Focus',
    subtitle: 'Learning & Building',
    date: '2024 - Present',
    description: 'Mastering core Java, JDBC, SQL databases, and developing backend architecture skills using Spring Boot.',
    icon: <Laptop size={24} />,
    color: 'bg-indigo-500'
  },
  {
    id: 4,
    title: 'Future Goal',
    subtitle: 'Backend Software Developer',
    date: 'Goal',
    description: 'Build robust, scalable backend systems and practical enterprise software.',
    icon: <Target size={24} />,
    color: 'bg-cyan-500'
  }
];

export default function Timeline() {
  return (
    <section id="journey" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">My <span className="text-blue-500">Journey</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto italic">“Success is a journey, not a destination.”</p>
        </motion.div>

        <div className="relative">
          {/* Vertical Connecting Line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-600 via-sky-400 to-cyan-500 rounded-full opacity-20 hidden md:block" />

          <div className="space-y-12">
            {timelineData.map((item, idx) => (
              <div key={item.id} className={`flex flex-col md:flex-row items-center justify-between w-full ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Content Side */}
                <motion.div
                  variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.4)}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="w-full md:w-[45%] glass-dark p-8 rounded-3xl border border-white/5 relative glow-blue hover:border-blue-500/30 transition-colors"
                >
                  <span className="text-blue-500 text-sm font-bold tracking-widest">{item.date}</span>
                  <h3 className="text-2xl font-bold mt-2 font-outfit">{item.title}</h3>
                  <h4 className="text-slate-400 font-medium mb-4">{item.subtitle}</h4>
                  <p className="text-slate-500 leading-relaxed">{item.description}</p>
                </motion.div>

                {/* Center Icon */}
                <div className="relative flex items-center justify-center my-6 md:my-0">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className={`w-14 h-14 rounded-full ${item.color} flex items-center justify-center text-white z-10 shadow-[0_0_20px_rgba(37,99,235,0.5)]`}
                  >
                    {item.icon}
                  </motion.div>
                </div>

                {/* Empty Side for Desktop Spacing */}
                <div className="hidden md:block w-[45%]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
