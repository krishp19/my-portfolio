// pages/About.jsx
"use client";
import { motion } from 'framer-motion';
import DeveloperShowcase from '@/components/Card3D';
import Footer from '@/components/Footer';

const AboutPage = () => {
  // Animation variants for fade-in on scroll
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Particle Background */}
      <DeveloperShowcase />

      {/* Main Content */}
      <div className="flex-grow bg-transparent text-white font-sans relative z-10">
        {/* Hero Section */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col justify-center text-center items-center lg:px-12 min-h-[60vh] px-4 py-12 sm:px-6"
        >
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="bg-clip-text bg-gradient-to-r text-4xl text-transparent duration-300 ease-in-out font-extrabold from-teal-400 hover:scale-105 sm:text-5xl to-blue-500 tracking-tight transition-transform">
              About Me
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl">
              I’m Krish Prasad, a dedicated B-Tech student pursuing a degree in Computer Science with a specialization in Cyber Security at Silver Oak University, where I maintain a 9.2 CGPA.
            </p>
            <p className="text-base text-gray-400 sm:text-lg">
              With 3 years of experience in web development, I’m passionate about building impactful and secure web applications.
            </p>
          </div>
        </motion.section>

        {/* Journey Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:px-12 px-4 py-12 sm:px-6"
        >
          <h2 className="text-3xl text-center text-teal-400 font-bold mb-8 sm:text-4xl tracking-tight">
            My Journey
          </h2>
          <div className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto sm:text-lg space-y-4">
            <p>
              I began my academic journey at Sabarmati High School, where I completed my SSC and HSC board exams. My passion for technology led me to pursue a B-Tech in Computer Science with a specialization in Cyber Security at Silver Oak University, where I’ve maintained a 9.2 CGPA.
            </p>
            <p>
              Over the past 3 years, I’ve immersed myself in web development, starting with my first project—a Task Manager built using Next.js. This project sparked my love for creating user-friendly and efficient applications. Since then, I’ve worked on various projects, honing my skills in modern web technologies.
            </p>
            <p>
              Currently, I’m working as a Software Developer Intern at Wappnet Systems, where I’m gaining hands-on experience in building real-world applications. My goal is to continue growing as a developer, focusing on creating secure, high-performance, and accessible web solutions.
            </p>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gray-900/50 lg:px-12 px-4 py-12 sm:px-6"
        >
          <h2 className="text-3xl text-center text-teal-400 font-bold mb-8 sm:text-4xl tracking-tight">
            Skills & Expertise
          </h2>
          <div className="grid grid-cols-2 gap-6 max-w-5xl md:grid-cols-4 mx-auto sm:grid-cols-3">
            {[
              "NEXT.JS",
              "REACT",
              "ANGULAR",
              "NODE.JS",
              "TYPESCRIPT",
              "TAILWIND",
              "NEST.JS",
              "MONGODB",
            ].map((skill) => (
              <div
                key={skill}
                className="bg-gray-800/50 p-4 rounded-lg text-center text-gray-300 duration-300 hover:bg-gray-700/50 hover:text-teal-400 transition-all"
              >
                {skill}
              </div>
            ))}
          </div>
        </motion.section>

        {/* Achievements Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:px-12 px-4 py-12 sm:px-6"
        >
          <h2 className="text-3xl text-center text-teal-400 font-bold mb-8 sm:text-4xl tracking-tight">
            Achievements
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-800/30 p-4 rounded-lg text-gray-300">
              <h3 className="text-lg text-teal-400 font-semibold">Task Manager Project</h3>
              <p className="text-sm">
                Built my first web development project—a Task Manager using Next.js, which helped me understand the fundamentals of modern web frameworks and state management.
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg text-gray-300">
              <h3 className="text-lg text-teal-400 font-semibold">E-Commerce Website</h3>
              <p className="text-sm">
                Developed a fully functional e-commerce website, implementing features like product listings, cart functionality, and secure checkout processes.
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg text-gray-300">
              <h3 className="text-lg text-teal-400 font-semibold">Chatbot Application</h3>
              <p className="text-sm">
                Created a chatbot application to assist users with automated responses, enhancing user engagement and support.
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg text-gray-300">
              <h3 className="text-lg text-teal-400 font-semibold">Real-Time Typing Application</h3>
              <p className="text-sm">
                Built a real-time typing application that allows users to practice typing with live feedback and performance tracking.
              </p>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-lg text-gray-300">
              <h3 className="text-lg text-teal-400 font-semibold">Software Developer Intern at Wappnet Systems</h3>
              <p className="text-sm">
                Currently working as a Software Developer Intern at Wappnet Systems, where I’m contributing to real-world projects and gaining hands-on experience in web development.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="bg-gray-900/50 lg:px-12 px-4 py-12 sm:px-6"
        >
          <h2 className="text-3xl text-center text-teal-400 font-bold mb-8 sm:text-4xl tracking-tight">
            Personal Interests
          </h2>
          <div className="text-base text-gray-300 leading-relaxed max-w-3xl mx-auto sm:text-lg space-y-4">
            <p>
              When I’m not coding, you can find me diving into immersive game worlds. Gaming is more than a hobby for me—it inspires me to create interactive and engaging user experiences in my projects.
            </p>
            <p>
              I also enjoy exploring new technologies, keeping up with the latest trends in web development, and experimenting with side projects to fuel my creativity and growth as a developer.
            </p>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center lg:px-12 px-4 py-12 sm:px-6"
        >
          <h2 className="text-2xl text-gray-300 mb-4">
            Let’s Build Something Amazing Together!
          </h2>
          <a
            href="/contact"
            className="bg-teal-400 rounded-lg text-gray-900 duration-300 font-semibold hover:bg-teal-500 inline-block px-6 py-3 transition-colors"
          >
            Get in Touch
          </a>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Styling */}
      <style jsx global>{`
        .bg-gray-900\/50 {
          background: rgba(17, 24, 39, 0.5);
        }
      `}</style>
    </div>
  );
};

export default AboutPage;