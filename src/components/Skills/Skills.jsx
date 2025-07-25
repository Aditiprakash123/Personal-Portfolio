import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJava,
  FaCode, FaCuttlefish, FaChartArea
} from 'react-icons/fa';
import {
  SiTailwindcss, SiJavascript, SiExpress, SiMongodb, SiMongoose,
  SiPostman, SiNetlify, SiCplusplus
} from 'react-icons/si';

const skillsData = {
  Frontend: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript (ES6+)', 'React.js', 'D3.js'],
  Backend: ['Node.js', 'Express.js', 'REST APIs'],
  Database: ['MongoDB', 'Mongoose'],
  'Programming Languages': ['C++ (DSA)', 'C', 'JavaScript'],
  Tools: ['Git & GitHub', 'Postman', 'VS Code', 'Netlify / Vercel'],
};

const skillIcons = {
  'HTML5': <FaHtml5 className="text-orange-500" />,
  'CSS3': <FaCss3Alt className="text-blue-500" />,
  'Tailwind CSS': <SiTailwindcss className="text-teal-400" />,
  'JavaScript (ES6+)': <SiJavascript className="text-yellow-400" />,
  'JavaScript': <SiJavascript className="text-yellow-400" />,
  'React.js': <FaReact className="text-cyan-400" />,
  'D3.js': <FaChartArea className="text-red-400" />,
  'Node.js': <FaNodeJs className="text-green-600" />,
  'Express.js': <SiExpress className="text-gray-800 dark:text-gray-200" />,
  'REST APIs': <FaNodeJs className="text-green-400" />,
  'MongoDB': <SiMongodb className="text-green-500" />,
  'Mongoose': <SiMongoose className="text-red-500" />,
  'C++ (DSA)': <SiCplusplus className="text-blue-400" />,
  'C': <FaCuttlefish className="text-gray-800 dark:text-gray-300" />,
  'Git & GitHub': <FaGitAlt className="text-orange-400" />,
  'Postman': <SiPostman className="text-orange-500" />,
  'VS Code': <FaCode className="text-blue-500" />,
  'Netlify / Vercel': <SiNetlify className="text-green-400" />,
};

const categories = Object.keys(skillsData);

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('Frontend');

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-100 via-blue-200 to-white dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-black text-black dark:text-white px-6 py-14 transition-colors duration-700">
      <div className="max-w-6xl mx-auto text-center">

        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-pink-600 dark:text-pink-500 mb-10"
        >
          My Skills
        </motion.h2>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${
                activeCategory === category
                  ? 'bg-pink-600 text-white'
                  : 'bg-transparent border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white'
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skill Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          {skillsData[activeCategory].map((skill) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.07 }}
              className="bg-white/70 dark:bg-white/10 backdrop-blur-sm p-5 rounded-lg flex flex-col items-center justify-center shadow-md dark:shadow-lg transition-all duration-300 hover:shadow-pink-500"
            >
              <div className="text-3xl mb-2">{skillIcons[skill] || '🔧'}</div>
              <p className="text-center text-sm">{skill}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* GitHub Stats */}
        <div className="flex justify-center items-center mt-10">
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            src="https://github-readme-stats.vercel.app/api?username=Aditiprakash123&show_icons=true&theme=radical"
            alt="GitHub Stats"
            className="w-full max-w-md rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
