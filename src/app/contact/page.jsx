"use client";
import { motion } from 'framer-motion';
import DeveloperShowcase from '@/components/Card3D';
import Footer from '@/components/Footer';
import { FaEnvelope, FaPhone, FaFacebookF, FaTwitter, FaLinkedinIn, FaGooglePlusG } from 'react-icons/fa';
import { useState } from 'react';

const ContactPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Message sent successfully!');
        e.target.reset();
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DeveloperShowcase />
      <div className="flex-grow bg-transparent text-white font-sans pt-16 relative z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="lg:px-12 min-h-[60vh] px-4 py-12 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-6 items-center max-w-5xl md:grid-cols-2 mx-auto">
            <div className="text-center md:text-left">
              <h1 className="bg-clip-text bg-gradient-to-r text-4xl text-transparent duration-300 ease-in-out font-extrabold from-teal-400 hover:scale-105 sm:text-5xl to-blue-500 tracking-tight transition-transform">
                Let’s Connect and Build Something Amazing!
              </h1>
            </div>
            <div className="text-center md:text-right">
              <p className="text-gray-300 text-lg sm:text-xl">
                Have a project in mind? Let’s turn your ideas into reality—drop me a message!
              </p>
            </div>
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="lg:px-12 px-4 py-12 sm:px-6"
        >
          <div className="grid grid-cols-1 gap-8 max-w-5xl md:grid-cols-2 mx-auto">
            <div className="bg-transparent bg-opacity-10 p-6 rounded-lg shadow-lg backdrop-blur-md">
              <h2 className="text-2xl text-teal-400 font-bold mb-4">
                Send Me a Message
              </h2>
              <p className="text-gray-300 text-sm mb-6">
                I’m just a message away—let’s create something extraordinary!
              </p>
              <form onSubmit={handleSubmit} className="space-y-4 relative">
                <div>
                  <label htmlFor="name" className="text-gray-300 text-sm block mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="bg-gray-800/20 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Name"
                    disabled={isLoading}
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
                    className="bg-gray-800/20 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Email"
                    disabled={isLoading}
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
                    className="bg-gray-800/20 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Subject"
                    disabled={isLoading}
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
                    className="bg-gray-800/20 border border-gray-600 p-3 rounded-lg text-white w-full duration-300 focus:border-teal-400 focus:outline-none transition-colors"
                    placeholder="Your Message"
                    disabled={isLoading}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-teal-400 rounded-lg text-gray-900 w-full duration-300 font-semibold hover:bg-teal-500 hover:scale-105 py-3 transition-all disabled:opacity-70 disabled:cursor-not-allowed relative"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
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
      <Footer />
      <style jsx global>{`
        .backdrop-blur-md {
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }
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
          background: #2dd4bf;
          transition: 0.5s;
          z-index: 2;
        }
        .social-icons li a:hover:before {
          top: 0;
        }
        .social-icons li:nth-child(1) a:before {
          background: #3b5999;
        }
        .social-icons li:nth-child(2) a:before {
          background: #55acee;
        }
        .social-icons li:nth-child(3) a:before {
          background: #0077b5;
        }
        .social-icons li:nth-child(4) a:before {
          background: #dd4b39;
        }
      `}</style>
    </div>
  );
};

export default ContactPage;