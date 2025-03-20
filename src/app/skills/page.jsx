// app/skills/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import DeveloperShowcase from '@/components/Card3D'; // Import DeveloperShowcase for particle background
import Footer from '@/components/Footer'; // Import Footer for consistency

const Skills = () => {
  const skills = [
    { category: "Languages", skills: ["C++", "Python", "Java"], icon: "🖥️" },
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript"], icon: "🎨" },
    { category: "Frameworks", skills: ["Node.js", "React.js", "Angular.js", "Nest.js", "Three.js"], icon: "⚙️" },
    { category: "Software", skills: ["Postman", "Burp Suite"], icon: "🛠️" },
    { category: "Databases", skills: ["MongoDB", "PostgreSQL", "SQLite"], icon: "🗄️" },
    { category: "Deployment", skills: ["AWS"], icon: "☁️" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Particle Background */}
      <DeveloperShowcase />

      {/* Main Content */}
      <div className="flex flex-col flex-grow bg-transparent justify-center text-white items-center min-h-screen px-6 py-12 relative">
        {/* Animated Background Gradient */}
        <div className="bg-gradient-to-r absolute blur-2xl from-teal-700 inset-0 opacity-30 to-black via-black"></div>

        {/* Section Header */}
        <h2 className="text-5xl text-center text-teal-400 font-extrabold mb-10 relative z-10">
          My Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 sm:grid-cols-2 z-10">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="group relative p-6 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg
              transition-transform transform hover:scale-105 hover:shadow-teal-500/50"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* Glowing Effect on Hover */}
              <div className="bg-teal-500 rounded-xl absolute group-hover:opacity-20 inset-0 opacity-0 transition-opacity"></div>

              {/* Skill Title */}
              <h3 className="flex text-2xl text-teal-300 font-semibold gap-2 items-center relative z-10">
                {skill.icon} {skill.category}
              </h3>

              {/* Skill List */}
              <ul className="text-gray-300 mt-3 relative space-y-2 z-10">
                {skill.skills.map((item, i) => (
                  <li
                    key={i}
                    className="flex text-lg gap-2 group-hover:text-white items-center transition-colors"
                  >
                    <span className="text-teal-400">▶</span> {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Skills;