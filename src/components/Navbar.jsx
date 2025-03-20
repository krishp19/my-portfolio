import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 shadow-lg text-white">
      <div className="container flex justify-center items-center mx-auto">
        <ul className="flex space-x-8">
          <li>
            <Link
              href="/"
              className="text-gray-300 text-lg block font-semibold group hover:text-yellow-500 px-6 py-3 relative uppercase"
            >
              Home
              <span className="border-b-2 border-gray-300 border-t-2 h-full w-full absolute duration-300 group-hover:opacity-100 group-hover:scale-y-100 left-0 opacity-0 scale-y-200 top-0 transform transition-all"></span>
              <span className="bg-gray-300 h-full w-full absolute duration-300 group-hover:opacity-20 group-hover:scale-100 left-0 opacity-0 scale-0 top-0 transform transition-all z-[-1]"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="text-gray-300 text-lg block font-semibold group hover:text-yellow-500 px-6 py-3 relative uppercase"
            >
              about
              <span className="border-b-2 border-gray-300 border-t-2 h-full w-full absolute duration-300 group-hover:opacity-100 group-hover:scale-y-100 left-0 opacity-0 scale-y-200 top-0 transform transition-all"></span>
              <span className="bg-gray-300 h-full w-full absolute duration-300 group-hover:opacity-20 group-hover:scale-100 left-0 opacity-0 scale-0 top-0 transform transition-all z-[-1]"></span>
            </Link>
          </li>

          <li>
            <Link
              href="/skills"
              className="text-gray-300 text-lg block font-semibold group hover:text-yellow-500 px-6 py-3 relative uppercase"
            >
              Skills
              <span className="border-b-2 border-gray-300 border-t-2 h-full w-full absolute duration-300 group-hover:opacity-100 group-hover:scale-y-100 left-0 opacity-0 scale-y-200 top-0 transform transition-all"></span>
              <span className="bg-gray-300 h-full w-full absolute duration-300 group-hover:opacity-20 group-hover:scale-100 left-0 opacity-0 scale-0 top-0 transform transition-all z-[-1]"></span>
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="text-gray-300 text-lg block font-semibold group hover:text-yellow-500 px-6 py-3 relative uppercase"
            >
              Projects
              <span className="border-b-2 border-gray-300 border-t-2 h-full w-full absolute duration-300 group-hover:opacity-100 group-hover:scale-y-100 left-0 opacity-0 scale-y-200 top-0 transform transition-all"></span>
              <span className="bg-gray-300 h-full w-full absolute duration-300 group-hover:opacity-20 group-hover:scale-100 left-0 opacity-0 scale-0 top-0 transform transition-all z-[-1]"></span>
            </Link>
          </li>
          
          <li>
            <Link
              href="/contact"
              className="text-gray-300 text-lg block font-semibold group hover:text-yellow-500 px-6 py-3 relative uppercase"
            >
              Contact
              <span className="border-b-2 border-gray-300 border-t-2 h-full w-full absolute duration-300 group-hover:opacity-100 group-hover:scale-y-100 left-0 opacity-0 scale-y-200 top-0 transform transition-all"></span>
              <span className="bg-gray-300 h-full w-full absolute duration-300 group-hover:opacity-20 group-hover:scale-100 left-0 opacity-0 scale-0 top-0 transform transition-all z-[-1]"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
