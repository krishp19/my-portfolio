import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-center items-center">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="relative block uppercase text-lg font-semibold text-gray-300 py-3 px-6 hover:text-yellow-500 group"
            >
              Home
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 border-gray-300 transform scale-y-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 transform scale-0 opacity-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-100 z-[-1]"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="relative block uppercase text-lg font-semibold text-gray-300 py-3 px-6 hover:text-yellow-500 group"
            >
              Skills
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 border-gray-300 transform scale-y-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 transform scale-0 opacity-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-100 z-[-1]"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="relative block uppercase text-lg font-semibold text-gray-300 py-3 px-6 hover:text-yellow-500 group"
            >
              Projects
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 border-gray-300 transform scale-y-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 transform scale-0 opacity-0 transition-all duration-300  group-hover:opacity-20  group-hover:scale-100 z-[-1]"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="relative block uppercase text-lg font-semibold text-gray-300 py-3 px-6 hover:text-yellow-500 group"
            >
              about
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 border-gray-300 transform scale-y-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 transform scale-0 opacity-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-100 z-[-1]"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="relative block uppercase text-lg font-semibold text-gray-300 py-3 px-6 hover:text-yellow-500 group"
            >
              Contact
              <span className="absolute top-0 left-0 w-full h-full border-t-2 border-b-2 border-gray-300 transform scale-y-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-y-100"></span>
              <span className="absolute top-0 left-0 w-full h-full bg-gray-300 transform scale-0 opacity-0 transition-all duration-300 group-hover:opacity-20 group-hover:scale-100 z-[-1]"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
