import React from 'react';
import aboutprofile from './aboutprofile.jpg';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen 
      bg-blue-100 dark:bg-[#0d0c1d] 
      text-black dark:text-white 
      flex items-center justify-center px-6 py-16 transition-colors duration-700">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* IMAGE: Animate on scroll into view */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={aboutprofile}
            alt="Aditi Prakash"
            className="w-3/4 max-w-sm rounded-lg shadow-lg 
              border border-gray-300 dark:border-gray-600"
          />
        </motion.div>

        {/* TEXT: Animate on scroll into view */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-pink-500 dark:text-pink-400 mb-4">
            Hey! I'm Aditi Prakash
          </h2>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I'm a passionate web developer and problem solver from Patna, Bihar.
            Currently exploring the exciting world of <span className="text-purple-700 dark:text-purple-400 font-semibold">MERN Stack development</span> and diving deep into <span className="text-blue-700 dark:text-blue-400 font-semibold">DSA with C++</span>.
          </p>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed mb-4">
            I love building intuitive user experiences, debugging logic puzzles, and pushing frontend-backend integration. I also explore D3.js visualizations & animations.
          </p>

          <p className="text-gray-800 dark:text-gray-300 text-lg leading-relaxed">
            Whether personal or team projects, I'm always driven by curiosity and the desire to grow.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-6 bg-[#a259ff] hover:bg-[#8935db] text-white px-6 py-2 rounded-lg font-medium shadow-md transition"
          >
            Connect
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
