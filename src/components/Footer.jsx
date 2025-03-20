const Footer = () => {
    return (
      <footer className="bg-black text-white mt-12 py-4">
        <div className="container text-center mx-auto">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} YourName. All rights reserved.
          </p>
          <div className="mt-2">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 mx-3">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 mx-3">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  