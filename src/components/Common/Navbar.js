// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaSearch, FaMoon, FaSun } from 'react-icons/fa';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <nav className={`navbar ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} shadow-md fixed w-full z-10`}>
      <div className="container mx-auto flex justify-between items-center p-4">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className="text-2xl font-bold">
            HarmonyMind
          </Link>
        </motion.div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-600 transition duration-300">Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition duration-300">About</Link>
          <Link to="/resources" className="hover:text-indigo-600 transition duration-300">Resources</Link>
          <Link to="/dashboard" className="hover:text-indigo-600 transition duration-300">Dashboard</Link>
        </div>

        <div className="hidden md:flex space-x-4 items-center">
          <FaSearch className="hover:text-indigo-600 transition duration-300" />
          <motion.div whileTap={{ scale: 0.8 }}>
            <FaMoon className={`cursor-pointer ${darkMode ? 'hidden' : 'block'}`} onClick={toggleDarkMode} />
            <FaSun className={`cursor-pointer ${darkMode ? 'block' : 'hidden'}`} onClick={toggleDarkMode} />
          </motion.div>
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white text-gray-900 flex flex-col items-center space-y-4 py-4">
          <Link to="/" className="hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Home</Link>
          <Link to="/about" className="hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>About</Link>
          <Link to="/resources" className="hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Resources</Link>
          <Link to="/dashboard" className="hover:text-indigo-600 transition duration-300" onClick={toggleMenu}>Dashboard</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
