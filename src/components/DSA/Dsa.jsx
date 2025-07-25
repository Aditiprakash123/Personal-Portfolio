import React from 'react';
import stats from './dsa-stats.png';
import { motion } from 'framer-motion';

export default function Dsa() {
  return (
    <section className="min-h-screen 
      bg-gradient-to-b from-blue-100 via-blue-50 to-white 
      dark:from-black dark:via-[#1a1a2e] dark:to-[#0f0f0f] 
      text-black dark:text-white py-16 px-6 transition-colors duration-700">

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#a259ff] mb-4"
        >
          Data Structures & Algorithms
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl mx-auto"
        >
          I'm consistently practicing Data Structures & Algorithms on <span className="text-orange-500 font-medium">LeetCode</span> to enhance my problem-solving skills and prepare for coding interviews. My goal is to strengthen my understanding of DSA using C++ and build strong logic through consistent practice.
        </motion.p>

        <div className="mt-12 flex flex-col md:flex-row items-center gap-10 justify-center">
          {/* LeetCode Stats Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.4 }}
            className="md:w-1/2 w-full"
          >
            <img
              src={stats}
              alt="LeetCode Stats"
              className="w-full rounded-lg border border-gray-400 dark:border-gray-600 shadow-lg"
            />
          </motion.div>

          {/* Profile Info */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="md:w-1/2 text-left"
          >
            <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">
              LeetCode Highlights
            </h3>
            <ul className="text-gray-700 dark:text-gray-300 space-y-2">
              <li>🔹 <strong>Username:</strong> <span className="text-orange-500">aditi_prakash8709</span></li>
              <li>🔹 <strong>Problems Solved:</strong> 98+ (and growing!)</li>
              <li>🔹 <strong>Contest Rating:</strong> 1470 | Top 54.38%</li>
              <li>🔹 <strong>Languages Used:</strong> C++, JavaScript</li>
              <li>🔹 <strong>Most Recent Badge:</strong> 50 Days Badge 2025</li>
              <li>🔹 <strong>Consistency:</strong> 52 active days, Max Streak: 37</li>
            </ul>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://leetcode.com/aditi_prakash8709/"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-6 py-3 rounded-lg transition"
            >
              🔗 Visit My LeetCode Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
