import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/data/project";

// Define types for project properties
interface Project {
  title: string;
  category: string;
  techStack: string[];
  image: string;
  slug: string;
  description?: string;
  status?: string;
  stats?: {
    linesOfCode?: string;
    devTime?: string;
  };
  sourceCode?: string;
  liveDemo?: string;
}

// Define the component props type
interface ProjectDetailsProps {
  params: {
    slug: string;
  };
}

export default function ProjectDetails({ params }: ProjectDetailsProps) {
  const { slug } = params;

  console.log("Slug received:", slug);

  // Find the project matching the slug
  const project: Project | undefined = projects.find((p) => p.slug === slug);

  console.log("Found project:", project);

  if (!project) {
    console.log("Project not found for slug:", slug);
    notFound();
    return null; // Ensure no further execution
  }

  return (
    <div className="bg-black min-h-screen flex flex-col items-center py-12 px-6 pb-32">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-yellow-400">
          {project.title}
        </h1>
        <p className="text-gray-300 mt-2">{project.category}</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full max-w-4xl bg-gray-800 rounded-xl shadow-lg p-8"
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <div className="text-white">
          <h2 className="text-2xl font-bold text-yellow-400 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-300 mb-6">{project.description || "No description available."}</p>

          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Tech Stack
          </h3>
          <div className="flex gap-2 mb-6">
            {project.techStack.map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-yellow-700 text-white rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-semibold text-yellow-400 mb-2">
            Stats
          </h3>
          <div className="text-gray-300 mb-6">
            <p>Lines of Code: {project.stats?.linesOfCode || "N/A"}</p>
            <p>Development Time: {project.stats?.devTime || "N/A"}</p>
            <p>Status: {project.status || "N/A"}</p>
          </div>

          <div className="flex gap-4">
            {project.sourceCode && (
              <a
                href={project.sourceCode}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-yellow-600 text-white rounded-full font-semibold hover:bg-yellow-500 transition"
              >
                View Source Code
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-500 transition"
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>

      <motion.a
        href="/projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 px-6 py-2 bg-gray-600 text-white rounded-full font-semibold hover:bg-gray-500 transition"
      >
        Back to Projects
      </motion.a>
    </div>
  );
}

// Function to generate static paths
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}
