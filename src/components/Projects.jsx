import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const projects = [
  {
    title: 'Tender Management System',
    desc: 'A basic Java-based console application for relational database-driven tender information management using JDBC, SQL, and MySQL.',
    detailedDesc: 'This is a basic Java-based desktop application designed to handle tender details, bids, and vendor profiles. The system establishes database connectivity directly using JDBC to run SQL commands, allowing users to save, modify, and view records interactively through a command-line interface. Key Features: Dynamic database integration via JDBC; Full CRUD (Create, Read, Update, Delete) capability on tender and bid records; Input validation for data integrity.',
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&auto=format&fit=crop',
    tags: ['Basic', 'Java', 'JDBC', 'MySQL', 'SQL', 'OOP'],
    github: 'https://github.com/jayendhran1811/tender-management-system',
    live: '#'
  },
  {
    title: 'AutoQuick Rental & Buying System',
    desc: 'An intermediate console-based automobile rental and buying system built using MVC architecture, DAO pattern, and role-based access.',
    detailedDesc: 'AutoQuick is an intermediate console application built to simulate rental and purchase transactions for vehicles. To keep the database transactions decoupled from the application logic, the project organizes code using the Model-View-Controller (MVC) architecture and executes database operations via the Data Access Object (DAO) pattern. Key Features: Role-based dashboard functionality for Admin, Seller, and User inputs; Automobile catalog management; Simulation of car leasing, buying, and rental transactions.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&auto=format&fit=crop',
    tags: ['Intermediate', 'Java', 'JDBC', 'MySQL', 'MVC', 'DAO'],
    github: 'https://github.com/jayendhran1811/autoquick',
    live: '#'
  },
  {
    title: 'OS Management System',
    desc: 'An intermediate Java-based application designed to simulate and demonstrate process management, scheduling, and resource management.',
    detailedDesc: 'Developed a Java application to demonstrate core operating system concepts and improve practical understanding of process and resource management. The project applies object-oriented programming and data-structure concepts to model operating-system operations in a simplified environment. Key Features: Process Management, Scheduling, Resource Management.',
    image: 'https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&auto=format&fit=crop',
    tags: ['Intermediate', 'Java', 'OOP', 'Data Structures'],
    github: 'https://github.com/jayendhran1811/os-management-system',
    live: '#'
  }
];

function ProjectCard({ proj, idx }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      variants={fadeIn("up", 0.2 * idx)}
      whileHover={{ y: -10 }}
      className="glass-dark rounded-3xl overflow-hidden group border border-white/5 hover:border-blue-500/30 transition-all duration-500 flex flex-col justify-between h-full"
    >
      <div>
        <div className="relative h-56 overflow-hidden">
          <img 
            src={proj.image} 
            alt={proj.title} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 md:grayscale md:group-hover:grayscale-0" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
            {proj.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-[10px] bg-blue-600/20 text-blue-400 rounded-md border border-blue-500/20 backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-6 pb-2">
          <h3 className="text-2xl font-bold font-outfit mb-2 group-hover:text-blue-500 transition-colors">{proj.title}</h3>
          
          <div className="text-slate-400 text-sm mb-4 transition-all duration-300">
            {isExpanded ? (
              <p className="leading-relaxed">{proj.detailedDesc}</p>
            ) : (
              <p className="line-clamp-2 leading-relaxed">{proj.desc}</p>
            )}
          </div>
          
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs font-semibold text-blue-400 hover:text-blue-300 focus:outline-none transition-colors"
          >
            {isExpanded ? 'Read Less ▲' : 'Read More ▼'}
          </button>
        </div>
      </div>

      <div className="p-6 pt-4 flex gap-4">
        <a 
          href={proj.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all"
        >
          <Github size={20} />
        </a>
        <a 
          href={proj.live} 
          className="p-3 bg-white/5 rounded-full hover:bg-blue-600 hover:text-white transition-all"
        >
          <ExternalLink size={20} />
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4">Featured <span className="text-blue-500">Projects</span></h2>
          <p className="text-slate-400 max-w-2xl mx-auto">A selection of my recent works and explorations.</p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((proj, idx) => (
            <ProjectCard key={proj.title} proj={proj} idx={idx} />
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <button className="btn-outline flex items-center gap-2 mx-auto">
            <Code2 size={20} />
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
