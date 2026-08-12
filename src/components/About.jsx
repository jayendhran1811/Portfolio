import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { fadeIn } from '../utils';
import { X, ZoomIn } from 'lucide-react';

const memories = [
  { id: 1, src: '/story-java.png', title: 'Java Development' },
  { id: 2, src: '/story-sql.png', title: 'Database & SQL' },
  { id: 3, src: '/story-react.png', title: 'Frontend Integration' },
  { id: 4, src: '/story-growth.png', title: 'Continuous Growth' },
];

export default function About() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="about" className="py-24 bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 font-outfit">
              My <span className="text-blue-500">Story</span>
            </h2>
            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
              <p>
                I am a Computer Science and Engineering graduate based in Coimbatore, Tamil Nadu. My passion lies in software development, with a primary focus on core Java application design and database integration. I enjoy translating logical requirements into structured backend code, relying heavily on OOP concepts, relational database queries, and JDBC.
              </p>
              <p>
                Currently, I am focused on bridging the gap between core desktop logic and web backends by learning Spring Boot and studying modern backend architectural patterns.
              </p>
            </div>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {memories.map((img, idx) => (
              <motion.div
                key={img.id}
                whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-square rounded-2xl overflow-hidden glass-dark cursor-pointer group"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover grayscale md:grayscale-0 md:group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="text-white" size={32} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              className="relative max-w-4xl w-full glass-dark rounded-3xl overflow-hidden p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-auto rounded-2xl"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold font-outfit">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
