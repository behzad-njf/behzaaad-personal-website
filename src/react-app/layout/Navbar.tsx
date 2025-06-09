import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Make sure you have `lucide-react` installed

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">Behzad Njf</span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#about" className="px-3 py-2 text-gray-700 hover:text-gray-900">About</a>
            <a href="#skills" className="px-3 py-2 text-gray-700 hover:text-gray-900">Skills</a>
            <a href="#projects" className="px-3 py-2 text-gray-700 hover:text-gray-900">Projects</a>
            <a href="#contact" className="px-3 py-2 text-gray-700 hover:text-gray-900">Contact</a>
          </div>
          <div className="flex md:hidden items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>About</a>
            <a href="#skills" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Skills</a>
            <a href="#projects" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Projects</a>
            <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-gray-900" onClick={closeMenu}>Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
