// app/projects/page.tsx
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "@/data/project"; // ✅ Import from data file
import DeveloperShowcase from '@/components/Card3D'; // Import DeveloperShowcase for particle background
import Footer from '@/components/Footer'; // Import Footer for consistency

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(projects.map((p) => p.category))];
  const filteredProjects =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Particle Background */}
      <DeveloperShowcase />

      {/* Main Content */}
      <div className="flex-grow bg-transparent text-white font-sans relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 pt-12"
        >
          <h1 className="text-4xl text-white font-extrabold md:text-5xl tracking-widest">
            WORK
          </h1>
        </motion.div>

        {/* Category Filters */}
        <div className="flex justify-center gap-4 mb-10 px-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
                filter === cat
                  ? "bg-teal-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 w-full gap-8 lg:grid-cols-3 max-w-6xl mx-auto px-6 sm:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Link href={`projects/${project.slug}`} key={index}>
              <motion.div
                className="bg-gray-800 border-2 border-teal-500/30 h-64 rounded-lg shadow-lg w-full cursor-pointer group overflow-hidden relative"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                  boxShadow: "0px 10px 30px rgba(45, 212, 191, 0.5)", // Changed to teal-400 color for consistency
                  transition: { duration: 0.3 },
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full duration-500 group-hover:opacity-30 object-cover transition-opacity"
                />

                {/* Hover Overlay */}
                <div className="flex flex-col bg-black/70 justify-center p-6 absolute duration-500 group-hover:opacity-100 inset-0 items-start opacity-0 transition-opacity">
                  <h3 className="text-2xl text-white duration-400 ease-out font-bold group-hover:translate-x-0 mb-2 transition-transform translate-x-[-50px]">
                    {project.title.toUpperCase()}
                  </h3>
                  <p className="text-gray-300 text-sm delay-100 duration-400 ease-out group-hover:translate-x-0 transition-transform translate-x-[-50px]">
                    {project.techStack.join(" | ")}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;