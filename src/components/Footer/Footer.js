import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#334a07] text-white py-6 mt-10">
      <div className="container mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <p className="text-sm sm:text-base">
            &copy; {new Date().getFullYear()} Islamic Art Gallery. All Rights Reserved.
          </p>
        </div>

        {/* Center Section */}
        <div className="flex gap-4">
          <a
            href="#about"
            className="text-sm hover:text-gray-300 transition duration-200"
          >
            About
          </a>
          <a
            href="#contact"
            className="text-sm hover:text-gray-300 transition duration-200"
          >
            Contact
          </a>
          <a
            href="#gallery"
            className="text-sm hover:text-gray-300 transition duration-200"
          >
            Gallery
          </a>
        </div>

        {/* Right Section */}
        <div className="text-center md:text-right">
          <p className="text-sm">
            Built with ❤️ by <span className="font-semibold">Asma Tariq Ansari</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
