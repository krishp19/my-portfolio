// pages/Home.jsx
"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import DeveloperShowcase from '@/components/Card3D';
import DrivingGame from '@/components/Sphere'; // Updated import
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Frontend Developer';

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    return () => clearInterval(typingInterval);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <DeveloperShowcase />
      <div className="flex-grow bg-transparent text-white font-sans relative z-10">
        <motion.section
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex flex-col justify-center items-center lg:px-12 md:flex-row min-h-[85vh] px-4 py-8 sm:px-6"
        >
          <div className="flex justify-center w-full items-center mb-6 md:mb-0 md:w-1/2">
            <div className="relative">
              <DrivingGame />
            </div>
          </div>
          <div className="w-full md:pl-8 md:w-1/2 space-y-6">
            <h1 className="bg-clip-text bg-gradient-to-r text-4xl text-transparent duration-300 ease-in-out font-extrabold from-teal-400 hover:scale-105 sm:text-5xl to-blue-500 tracking-tight transition-transform">
              Hi, I&apos;m Krish Prasad
            </h1>
            <div className="text-gray-300 text-lg sm:text-xl">
              <span className="text-teal-400 glowing-text inline-block">{displayedText}</span>
              <span className="text-teal-400 blinking-cursor">|</span>
            </div>
            <div className="text-gray-300 text-lg sm:text-xl">
              Skilled in{' '}
              <span className="flex-col h-10 text-teal-400 font-bold inline-flex overflow-hidden sm:h-8">
                <ul className="text-left animate-text-slide block leading-tight">
                  <li>NEXT.JS</li>
                  <li>REACT</li>
                  <li>ANGULAR</li>
                  <li>NODE.JS</li>
                  <li>TYPESCRIPT</li>
                  <li>TAILWIND</li>
                  <li>NEST.JS</li>
                  <li>MONGODB</li>
                  <li aria-hidden="true">NEXT.JS</li>
                </ul>
              </span>
            </div>
            <div className="text-base text-gray-300 sm:text-lg space-y-2">
              <p className="flex duration-200 gap-2 hover:text-teal-200 items-center transition-colors">
                <span className="text-teal-400 font-semibold">🎓 College:</span> Silver Oak University
              </p>
              <p className="flex duration-200 gap-2 hover:text-teal-200 items-center transition-colors">
                <span className="text-teal-400 font-semibold">💻 Education:</span> B-Tech in Computer Science with Cyber Security
              </p>
              <p className="flex duration-200 gap-2 hover:text-teal-200 items-center transition-colors">
                <span className="text-teal-400 font-semibold">🏫 School:</span> Sabarmati High School
              </p>
            </div>
            <p className="bg-gray-800/30 p-4 rounded-lg shadow-md text-base text-gray-200 duration-300 hover:bg-gray-700/50 leading-relaxed max-w-xl sm:text-lg transition-colors">
              I&apos;m obsessed with tech and building things that matter. My mission? To craft impactful apps with tools like Next.js, React, and Node.js—pushing boundaries one line of code at a time.
            </p>
          </div>
        </motion.section>
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="flex flex-col justify-center items-center lg:px-12 md:flex-row min-h-[60vh] px-4 py-12 sm:px-6"
        >
          <div className="w-full md:pr-8 md:w-1/2 space-y-6">
            <h2 className="text-3xl text-teal-400 font-bold sm:text-4xl tracking-tight">
              What I Do
            </h2>
            <ul className="text-base text-gray-300 sm:text-lg space-y-4">
              <li className="flex gap-2 items-start">
                <span className="text-teal-400">✨</span>
                <span>
                  <strong>Web Design:</strong> Crafting visually stunning and user-friendly interfaces that leave a lasting impression.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-teal-400">💻</span>
                <span>
                  <strong>Web Development:</strong> Building robust, scalable applications with cutting-edge technologies like Next.js and Node.js.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-teal-400">🔒</span>
                <span>
                  <strong>Cyber Security:</strong> Ensuring applications are secure and resilient against modern threats.
                </span>
              </li>
              <li className="flex gap-2 items-start">
                <span className="text-teal-400">🎮</span>
                <span>
                  <strong>Gaming (Hobby):</strong> Unwinding by diving into immersive game worlds or experimenting with game development.
                </span>
              </li>
            </ul>
          </div>
          <div className="flex justify-center w-full items-center mb-6 md:mb-0 md:w-1/2">
            <Image
              height={350}
              width={350}
              src="https://tomoliverharrison.co.uk/wp-content/themes/toh2025/dist/images/puzzle-cube-resized.png"
              alt="Puzzle Cube"
              className="h-auto rounded-lg shadow-xl duration-300 ease-in-out hover:scale-105 max-w-xs transform transition-transform"
            />
          </div>
        </motion.section>
      </div>
      <Footer />
      <style jsx global>{`
        @keyframes text-slide {
          0%, 11% { transform: translateY(0px); }
          12.5%, 22% { transform: translateY(-24px); }
          23.5%, 33% { transform: translateY(-48px); }
          34.5%, 44% { transform: translateY(-72px); }
          45.5%, 55% { transform: translateY(-96px); }
          56.5%, 66% { transform: translateY(-120px); }
          67.5%, 77% { transform: translateY(-144px); }
          78.5%, 88% { transform: translateY(-168px); }
          89.5%, 100% { transform: translateY(0px); }
        }
        .animate-text-slide {
          animation: text-slide 16s infinite;
        }
        .animate-text-slide li {
          height: 24px;
          line-height: 24px;
        }
        @media (min-width: 640px) {
          .animate-text-slide li {
            height: 32px;
            line-height: 32px;
          }
          @keyframes text-slide {
            0%, 11% { transform: translateY(0px); }
            12.5%, 22% { transform: translateY(-32px); }
            23.5%, 33% { transform: translateY(-64px); }
            34.5%, 44% { transform: translateY(-96px); }
            45.5%, 55% { transform: translateY(-128px); }
            56.5%, 66% { transform: translateY(-160px); }
            67.5%, 77% { transform: translateY(-192px); }
            78.5%, 88% { transform: translateY(-224px); }
            89.5%, 100% { transform: translateY(0px); }
          }
        }
        @keyframes glow {
          0% { text-shadow: 0 0 5px #2DD4BF, 0 0 10px #2DD4BF, 0 0 15px #2DD4BF; }
          50% { text-shadow: 0 0 10px #2DD4BF, 0 0 20px #2DD4BF, 0 0 30px #2DD4BF; }
          100% { text-shadow: 0 0 5px #2DD4BF, 0 0 10px #2DD4BF, 0 0 15px #2DD4BF; }
        }
        .glowing-text {
          animation: glow 2s infinite;
          font-weight: bold;
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .blinking-cursor {
          display: inline-block;
          animation: blink 1s infinite;
          font-weight: normal;
        }
      `}</style>
    </div>
  );
}