import React from "react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "LeetMetric",
    desc: "Live LeetCode stats tracker to monitor your problem-solving progress.",
    link: "https://illustrious-tapioca-a999c5.netlify.app/",
    github: "https://github.com/Aditiprakash123/Leetmetric.git",
  },
  {
    name: "FocusFlow",
    desc: "A minimalist to-do list app to add, delete, and manage tasks effectively.",
    link: "https://to-do-app-dark.netlify.app/",
    github: "https://github.com/Aditiprakash123/To-Do-List.git",
  },
  {
    name: "Portfolio",
    desc: "My personal portfolio with skills, achievements, and projects.",
    link: "https://your-portfolio-link.vercel.app/",
    github: "https://github.com/Aditiprakash123/portfolio",
  },
  {
    name: "MoneyKnow",
    desc: "A real-time currency converter with clean design and API integration.",
    link: "https://your-moneyknow-link.vercel.app/",
    github: "https://github.com/Aditiprakash123/moneyknow",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="min-h-screen px-6 py-16 flex flex-col items-center gap-12 bg-blue-100 dark:bg-[#0f0f0f] text-black dark:text-white transition-colors duration-800"
    >
      <h2 className="text-4xl font-bold text-pink-600 dark:text-pink-500 mb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-6xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-[#1a1a2e] p-6 rounded-xl shadow-md border border-pink-500 dark:border-pink-600 hover:shadow-lg hover:shadow-pink-500 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 dark:text-pink-400 mb-2">
                {project.name}
              </h3>
              <p className="text-sm text-gray-800 dark:text-gray-300 mb-4">
                {project.desc}
              </p>
            </div>

            <div className="flex gap-4 mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-pink-600 hover:bg-pink-700 text-white text-sm px-4 py-2 rounded-full transition"
              >
                View Live
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-black dark:text-white text-sm px-4 py-2 rounded-full transition"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
