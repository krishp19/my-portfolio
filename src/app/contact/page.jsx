// pages/Contact.jsx
"use client";
import { motion } from 'framer-motion';
import DeveloperShowcase from '@/components/Card3D';
import Footer from '@/components/Footer';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';

const ContactPage = () => {
  // Animation variant for fade-in on scroll
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Handle form submission (placeholder for now)
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., send data to an API)
    alert("Form submitted! (This is a placeholder)");
  };

  return (
    <div className="flex flex-col min-h-screen">

      {/* Particle Background */}
      <DeveloperShowcase />

      {/* Main Content */}
      <div className="flex-grow bg-transparent text-white font-sans pt-16 relative z-10">
        {/* Hero Section with Grid Layout */}
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:px-12 min-h-[60vh] px-4 py-12 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-6 items-center max-w-5xl md:grid-cols-2 mx-auto">
            {/* Left Side - Heading */}
            <div className="text-center md:text-left">
              <h1 className="bg-clip-text bg-gradient-to-r text-4xl text-transparent duration-300 ease-in-out font-extrabold from-teal-400 hover:scale-105 sm:text-5xl to-blue-500 tracking-tight transition-transform">
                Let’s Connect and Build Something Amazing!
              </h1>
            </div>
            {/* Right Side - Subheading */}
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg sm:text-xl">
                Have a project in mind? Let’s turn your ideas into reality—drop me a message!
              </p>
            </div>
          </div>
        </motion.section>

        {/* Contact Form and Info Section */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:px-12 px-4 py-12 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-8 max-w-5xl md:grid-cols-2 mx-auto">
            {/* Contact Form */}
            <div className="bg-gradient-to-r bg-opacity-20 p-6 rounded-lg shadow-lg backdrop-blur-md from-gray-900 to-gray-800">
              <h2 className="text-2xl text-teal-400 font-bold mb-4">
                Send Me a Message
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                I’m just a message away—let’s create something extraordinary!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-gray-800/30 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-300 text-sm block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-gray-800/30 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="text-gray-300 text-sm block mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="bg-gray-800/30 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="text-gray-300 text-sm block mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="bg-gray-800/30 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-400 rounded-lg text-gray-900 w-full duration-300 font-semibold hover:bg-teal-500 hover:scale-105 py-3 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col justify-center space-y-6">
              <h2 className="text-2xl text-teal-400 font-bold">
                Get in Touch
              </h2>
              <p className="text-gray-300 text-sm">
                I’d love to hear from you! Reach out using the form or the contact details below.
              </p>
              <div className="space-y-4">
                <div className="flex gap-3 items-center">
                  <FaEnvelope className="text-teal-400 text-xl" />
                  <a
                    href="mailto:krishprasad.work@gmail.com"
                    className="text-gray-300 duration-300 hover:text-teal-400 transition-colors"
                  >
                    krishprasad.work@gmail.com
                  </a>
                </div>
                <div className="flex gap-3 items-center">
                  <FaPhone className="text-teal-400 text-xl" />
                  <a
                    href="tel:+917383923807"
                    className="text-gray-300 duration-300 hover:text-teal-400 transition-colors"
                  >
                    +91 738-392-3807
                  </a>
                </div>
              </div>
              {/* Social Media Icons */}
              <ul className="social-icons">
                <li>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF className="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter className="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
                    <FaLinkedinIn className="icon" />
                  </a>
                </li>
                <li>
                  <a href="https://plus.google.com" target="_blank" rel="noopener noreferrer">
                    <FaGooglePlusG className="icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Footer */}
      <Footer />

      {/* Styling */}
      <style jsx global>{`
        .backdrop-blur-md {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        /* Social Media Icons Styling */
        .social-icons {
          display: flex;
          gap: 10px;
        }

        .social-icons li {
          list-style: none;
        }

        .social-icons li a {
          align-items: center;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          background-color: #fff;
          text-align: center;
          line-height: 50px;
          font-size: 24px;
          margin: 0;
          border-radius: 50%;
          position: relative;
          overflow: hidden;
          border: 2px solid #fff;
          z-index: 1;
        }

        .social-icons li a .icon {
          position: relative;
          color: #262626;
          transition: 0.5s;
          z-index: 3;
        }

        .social-icons li a:hover .icon {
          color: #fff;
          transform: rotateY(360deg);
        }

        .social-icons li a:before {
          content: "";
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          height: 100%;
          background: #2dd4bf; /* Default teal color */
          transition: 0.5s;
          z-index: 2;
        }

        .social-icons li a:hover:before {
          top: 0;
        }

        /* Specific colors for each icon on hover */
        .social-icons li:nth-child(1) a:before {
          background: #3b5999; /* Facebook blue */
        }

        .social-icons li:nth-child(2) a:before {
          background: #55acee; /* Twitter blue */
        }

        .social-icons li:nth-child(3) a:before {
          background: #0077b5; /* LinkedIn blue */
        }

        .social-icons li:nth-child(4) a:before {
          background: #dd4b39; /* Google Plus red */
        }
      `}</style>
    </div>
  );
};

export default ContactPage;