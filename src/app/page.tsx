"use client";
import DeveloperShowcase from '@/components/Card3D';

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-950 via-black to-gray-900 text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-8">
          {/* Left Side - Card */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <div className="relative p-4 rounded-xl shadow-xl">
              <DeveloperShowcase />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="w-full md:w-1/2 space-y-6 md:pl-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500 hover:scale-105 transition-transform duration-300 ease-in-out">
              Hi, I'm Krish Prasad
            </h1>

            {/* Sliding Text Animation with No Overlap */}
            <div className="text-lg sm:text-xl text-gray-300">
              A passionate developer skilled in{' '}
              <span className="text-teal-400 inline-flex flex-col h-10 sm:h-8 overflow-hidden">
                <ul className="block animate-text-slide text-left leading-tight">
                  <li>NEXT.JS</li>
                  <li>REACT</li>
                  <li>ANGULAR</li>
                  <li>NODE.JS</li>
                  <li>TYPESCRIPT</li>
                  <li>TAILWIND</li>
                  <li>NEST.JS</li>
                  <li>MONGODB</li>
                  <li aria-hidden="true">NEXT.JS</li> {/* Duplicate for loop */}
                </ul>
              </span>
            </div>

            {/* Education Section */}
            <div className="text-base sm:text-lg text-gray-300 space-y-2">
              <p className="flex items-center gap-2 hover:text-teal-200 transition-colors duration-200">
                <span className="text-teal-400 font-semibold">🎓 College:</span> Silver Oak University
              </p>
              <p className="flex items-center gap-2 hover:text-teal-200 transition-colors duration-200">
                <span className="text-teal-400 font-semibold">💻 Education:</span> B-Tech in Computer Science with Cyber Security
              </p>
              <p className="flex items-center gap-2 hover:text-teal-200 transition-colors duration-200">
                <span className="text-teal-400 font-semibold">🏫 School:</span> Sabarmati High School
              </p>
            </div>

            <p className="max-w-xl text-base sm:text-lg text-gray-200 leading-relaxed bg-gray-800/30 p-4 rounded-lg shadow-md hover:bg-gray-700/50 transition-colors duration-300">
              I’m obsessed with tech and building things that matter. My mission? To craft impactful apps with tools like Next.js, React, and Node.js—pushing boundaries one line of code at a time.
            </p>
          </div>
        </section>

        {/* New What I Do Section with Light Background */}
        <section className="min-h-[60vh] flex flex-col md:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 py-12 bg-black">
          {/* Left Side - Content */}
          <div className="w-full md:w-1/2 space-y-6 md:pr-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-teal-400 tracking-tight">
              What I Do
            </h2>
            <ul className="text-base sm:text-lg text-gray-300 space-y-4">
              <li className="flex items-start gap-2">
                <span className="text-teal-400">✨</span>
                <span>
                  <strong>Web Design:</strong> Crafting visually stunning and user-friendly interfaces that leave a lasting impression.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">💻</span>
                <span>
                  <strong>Web Development:</strong> Building robust, scalable applications with cutting-edge technologies like Next.js and Node.js.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">🔒</span>
                <span>
                  <strong>Cyber Security:</strong> Ensuring applications are secure and resilient against modern threats.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-teal-400">🎮</span>
                <span>
                  <strong>Gaming (Hobby):</strong> Unwinding by diving into immersive game worlds or experimenting with game development.
                </span>
              </li>
            </ul>
          </div>

          {/* Right Side - Smaller Image */}
          <div className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0">
            <img
              src="https://tomoliverharrison.co.uk/wp-content/themes/toh2025/dist/images/puzzle-cube-resized.png"
              alt="Puzzle Cube"
              className="max-w-xs h-auto rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </div>
        </section>
      </div>

      {/* Updated Animation Styles */}
      <style jsx global>{`
        @keyframes text-slide {
          0%, 11% {
            transform: translateY(0px); /* Hold NEXT.JS */
          }
          12.5%, 22% {
            transform: translateY(-24px); /* Hold REACT */
          }
          23.5%, 33% {
            transform: translateY(-48px); /* Hold ANGULAR */
          }
          34.5%, 44% {
            transform: translateY(-72px); /* Hold NODE.JS */
          }
          45.5%, 55% {
            transform: translateY(-96px); /* Hold TYPESCRIPT */
          }
          56.5%, 66% {
            transform: translateY(-120px); /* Hold TAILWIND */
          }
          67.5%, 77% {
            transform: translateY(-144px); /* Hold NEST.JS */
          }
          78.5%, 88% {
            transform: translateY(-168px); /* Hold MONGODB */
          }
          89.5%, 100% {
            transform: translateY(0px); /* Back to NEXT.JS */
          }
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
            0%, 11% {
              transform: translateY(0px); /* Hold NEXT.JS */
            }
            12.5%, 22% {
              transform: translateY(-32px); /* Hold REACT */
            }
            23.5%, 33% {
              transform: translateY(-64px); /* Hold ANGULAR */
            }
            34.5%, 44% {
              transform: translateY(-96px); /* Hold NODE.JS */
            }
            45.5%, 55% {
              transform: translateY(-128px); /* Hold TYPESCRIPT */
            }
            56.5%, 66% {
              transform: translateY(-160px); /* Hold TAILWIND */
            }
            67.5%, 77% {
              transform: translateY(-192px); /* Hold NEST.JS */
            }
            78.5%, 88% {
              transform: translateY(-224px); /* Hold MONGODB */
            }
            89.5%, 100% {
              transform: translateY(0px); /* Back to NEXT.JS */
            }
          }
        }
      `}</style>
    </>
  );
}