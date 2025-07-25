import React from 'react';
import { FaSchool, FaUniversity, FaGraduationCap } from 'react-icons/fa';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

export default function Education() {
  return (
    <section className="min-h-screen 
      bg-gradient-to-b from-blue-100 via-blue-50 to-white 
      dark:from-[#0f0f0f] dark:via-[#1a1a2e] dark:to-black 
      text-black dark:text-white py-16 px-4 transition-colors duration-700">
      
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#a259ff]">
          My Education
        </h2>

        <div className="space-y-8">
          {[
            {
              icon: <FaSchool className="text-3xl text-orange-500 mt-1" />,
              title: "Secondary School (10th)",
              place: "2021 – 2023 | A.S.Krishna Niketan",
              desc: <>Secured <span className="text-orange-500 font-semibold">97%</span> in 10th Grade. Demonstrated strong academic excellence and foundational understanding.</>,
            },
            {
              icon: <FaUniversity className="text-3xl text-orange-500 mt-1" />,
              title: "Senior Secondary (12th)",
              place: "Completed in 2023 | Patna Convent School",
              desc: <>Achieved <span className="text-orange-500 font-semibold">91%</span> with core subjects in PCM. Focused on analytical and logical problem solving.</>,
            },
            {
              icon: <FaGraduationCap className="text-3xl text-orange-500 mt-1" />,
              title: "Bachelor of Technology (Electrical Engineering)",
              place: "2024 – 2028 | NIT Patna",
              desc: <>Currently pursuing B.Tech with a CGPA of <span className="text-orange-500 font-semibold">9.1</span>. Actively learning DSA and MERN stack alongside core Electrical subjects.</>,
            },
          ].map((edu, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-[#1f1f2f] 
                text-black dark:text-white 
                p-6 rounded-lg shadow-md 
                border-l-4 border-orange-500 
                flex gap-4 items-start transition-colors duration-700"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
              variants={cardVariants}
            >
              {edu.icon}
              <div>
                <h3 className="text-2xl font-semibold">{edu.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 mt-1">{edu.place}</p>
                <p className="text-gray-700 dark:text-gray-300 mt-2">{edu.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
