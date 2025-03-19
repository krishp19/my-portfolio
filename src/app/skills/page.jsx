"use client";

import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  const skills = [
    { category: "Languages", skills: ["C++", "Python", "Java"], icon: "🖥️" },
    { category: "Frontend", skills: ["HTML", "CSS", "JavaScript"], icon: "🎨" },
    { category: "Frameworks", skills: ["Node.js", "React.js", "Angular.js", "Nest.js", "Three.js"], icon: "⚙️" },
    { category: "Software", skills: ["Postman", "Burp Suite"], icon: "🛠️" },  // New Category Added!
    { category: "Databases", skills: ["MongoDB", "PostgreSQL", "SQLite"], icon: "🗄️" },
    { category: "Deployment", skills: ["AWS"], icon: "☁️" },
  ];

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-12">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-700 via-black to-black opacity-30 blur-2xl"></div>

      {/* Section Header */}
      <h2 className="text-5xl font-extrabold text-teal-400 text-center mb-10 relative z-10">
        My Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
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
            <div className="absolute inset-0 bg-teal-500 opacity-0 group-hover:opacity-20 transition-opacity rounded-xl"></div>

            {/* Skill Title */}
            <h3 className="text-2xl font-semibold text-teal-300 flex items-center gap-2 relative z-10">
              {skill.icon} {skill.category}
            </h3>

            {/* Skill List */}
            <ul className="mt-3 text-gray-300 space-y-2 relative z-10">
              {skill.skills.map((item, i) => (
                <li
                  key={i}
                  className="text-lg flex items-center gap-2 group-hover:text-white transition-colors"
                >
                  <span className="text-teal-400">▶</span> {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
