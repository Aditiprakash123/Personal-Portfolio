import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiMail } from 'react-icons/fi';
import { GoLocation } from 'react-icons/go';
import { SiLeetcode } from "react-icons/si";
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
  return (
    <div className="relative min-h-screen 
      bg-gradient-to-br from-white via-blue-100 to-blue-200 
      dark:from-black dark:via-[#0f0f0f] dark:to-[#1a1a2e] 
      text-black dark:text-white 
      px-8 sm:px-16 md:px-24 py-20 
      flex flex-col sm:flex-row items-center justify-center 
      gap-16 overflow-hidden transition-colors duration-700">

      {/* 🔮 Animated Blobs */}
      <div className="absolute top-[-4rem] left-[-4rem] w-80 h-80 
        bg-purple-300 dark:bg-purple-500 
        opacity-30 dark:opacity-20 
        rounded-full animate-pulse blur-3xl" />
      
      <div className="absolute bottom-[-3rem] right-[-3rem] w-96 h-96 
        bg-pink-200 dark:bg-pink-400 
        opacity-20 dark:opacity-10 
        rounded-full animate-ping blur-2xl" />
      
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 w-60 h-60 
        bg-blue-200 dark:bg-blue-500 
        opacity-20 dark:opacity-10 
        rounded-full animate-bounce blur-2xl" />

      {/* 💬 Left Content */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-4 max-w-xl w-full z-10"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text 
          bg-gradient-to-r from-purple-500 via-pink-400 to-blue-400 
          dark:from-[#a259ff] dark:via-pink-400 dark:to-[#57ccff]">
          I'm Aditi Prakash
        </h1>

        <h2 className="text-2xl mt-1 font-semibold text-pink-500 dark:text-pink-400 tracking-wide">
          <Typewriter
            words={['MERN Developer', 'DSA Enthusiast', 'Open Source Contributor', 'Tech Explorer']}
            loop={true}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={60}
            delaySpeed={1500}
          />
        </h2>

        {/* 📍 Contact Info */}
        <div className="flex flex-col sm:flex-row items-start gap-3 mt-4 text-black dark:text-gray-300 text-sm sm:text-base">
          <div className="flex items-center gap-2">
            <FiMail className="text-[#57ccff]" />
            <span>aditiprakash173@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <GoLocation className="text-[#57ccff]" />
            <span>Patna, Bihar, India</span>
          </div>
        </div>

        {/* 📄 Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to="https://drive.google.com/file/d/1xmh9NtRkf2XRr--Q2k536zhzDhsHqq-u/view?usp=sharing"
            className="bg-[#a259ff] hover:bg-[#8935db] text-white px-6 py-2 rounded-lg font-medium shadow-md transition transform hover:scale-105 hover:shadow-purple-500/50"
          >
            View Resume
          </Link>
          <a
            href="#projects"
            className="bg-[#a259ff] hover:bg-[#8935db] text-white px-6 py-2 rounded-lg font-medium shadow-md transition transform hover:scale-105 hover:shadow-pink-500/50"
          >
            View Projects
          </a>
        </div>

        {/* 🔗 Social Icons */}
        <div className="flex gap-5 mt-6 text-2xl text-black dark:text-white">
          <a href="https://github.com/Aditiprakash123" target="_blank" rel="noreferrer" className="hover:text-[#a259ff] transition duration-300"><FaGithub /></a>
          <a href="https://www.instagram.com/diva_aditi08/" target="_blank" rel="noreferrer" className="hover:text-pink-400 transition duration-300"><FaInstagram /></a>
          <a href="https://www.linkedin.com/in/aditi-prakash-32861a317/" target="_blank" rel="noreferrer" className="hover:text-blue-400 transition duration-300"><FaLinkedin /></a>
          <a href="https://leetcode.com/u/aditi_prakash8709/" target="_blank" rel="noreferrer" className="hover:text-yellow-400 transition duration-300"><SiLeetcode /></a>
        </div>
      </motion.div>

      {/* 👩‍💻 Right Side Image */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-sm w-full z-10"
      >
        <div className="rounded-2xl shadow-lg border border-purple-700 backdrop-blur-md bg-white/10 dark:bg-white/5 hover:scale-105 transform transition duration-500 ease-in-out overflow-hidden">
          <img
            src="https://img.freepik.com/premium-photo/hacker-using-laptop-with-blurry-digital-interface-dark-background-social-network-criminal-concept-double-exposure_670147-52671.jpg"
            alt="Hacker Girl"
            className="rounded-2xl w-full"
          />
        </div>
      </motion.div>
    </div>
  );
}
