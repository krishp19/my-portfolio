"use client";
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants for fade-in effect
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-12 mt-12 shadow-lg relative"
    >
      {/* Main Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400 tracking-wide">Krish Prasad</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              A passionate frontend developer crafting impactful web experiences with Next.js, React, and a love for innovation.
            </p>
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400 tracking-wide">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#home" className="hover:text-teal-400 transition-colors duration-300">Home</a></li>
              <li><a href="#about" className="hover:text-teal-400 transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</a></li>
              <li><a href="#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400 tracking-wide">Get in Touch</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <span className="text-teal-400">Email:</span>{' '}
                <a href="mailto:krishprasad.work@gmail.com" className="hover:text-teal-400 transition-colors duration-300">
                  krishprasad.work@gmail.com
                </a>
              </li>
              <li><span className="text-teal-400">Phone:</span> +91 738-392-3807</li>
              <li><span className="text-teal-400">Location:</span> Ahmedabad, India</li>
            </ul>
            <div className="flex space-x-4">
              <a
                href="https://github.com/krishp19"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-teal-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-full"></span>
                <span className="relative z-10">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/krish-prasad"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative text-gray-400 hover:text-teal-400 transition-colors duration-300"
              >
                <span className="absolute inset-0 w-full h-full bg-teal-400 opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300 rounded-full"></span>
                <span className="relative z-10">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-teal-400 tracking-wide">Stay Updated</h3>
            <p className="text-sm text-gray-300">
              Subscribe for updates on my latest projects and tech insights.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-gray-200 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Motivational Quote */}
        <div className="mt-10 text-center">
          <p className="text-lg sm:text-xl italic text-teal-400 font-light tracking-wide">
            "The only way to do great work is to love what you do."
          </p>
          <p className="text-sm text-gray-400 mt-1">— Steve Jobs</p>
        </div>

        {/* Decorative Line */}
        <div className="mt-6 h-1 w-32 mx-auto bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full"></div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-1 h-1 bg-teal-400 rounded-full absolute top-1/4 left-1/4 animate-float"></div>
        <div className="w-2 h-2 bg-teal-400 rounded-full absolute bottom-1/3 right-1/3 animate-float delay-1000"></div>
        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full absolute top-1/2 right-1/4 animate-float delay-500"></div>
      </div>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </motion.footer>
  );
};

export default Footer;