import React, { useState, useEffect, useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }
  }, []);

  return (
    <>
    <section id="home">
      <header 
        ref={headerRef}
        className="fixed top-0 left-0 w-full z-[9999] bg-[#0d1b2a] shadow-md"
      >
        {/* Top Bar */}
        <div className="hidden md:flex justify-between items-center text-sm px-6 py-2 bg-[#1b263b] text-gray-300">
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-2">
              <FaPhoneAlt className="text-yellow-500" /> +91-98765-43210
            </span>
            <span className="flex items-center gap-2">
              <FaEnvelope className="text-yellow-500" /> info@deshmukhlaw.com
            </span>
            <span className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-yellow-500" /> पुणे, महाराष्ट्र
            </span>
          </div>
          <span className="text-yellow-500 font-medium">
            24/7 Emergency Legal Support
          </span>
        </div>

        {/* Main Nav */}
        <div className="flex justify-between items-center px-6 py-2">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold text-yellow-500">
            Deshmukh <span className="text-white">& Associates</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8  text-gray-200">
            <a href="#home" className="hover:text-yellow-500 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-500 transition">
              About
            </a>
            <a
              href="#services"
              className="hover:text-yellow-500 transition"
            >
              Practice Areas
            </a>
            <a href="#team" className="hover:text-yellow-500 transition">
              Team
            </a>
            <a href="#contact" className="hover:text-yellow-500 transition">
              Contact
            </a>
            <button className="bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400  transition">
              Free Consultation
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-500 text-3xl focus:outline-none"
            >
              {isMenuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#1b263b] text-gray-200 px-6 py-4 space-y-4">
            <a
              href="#home"
              className="block hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#about"
              className="block hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="block hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Practice Areas
            </a>
            <a
              href="#team"
              className="block hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Team
            </a>
            <a
              href="#contact"
              className="block hover:text-yellow-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            <a href="contact" className="w-full bg-yellow-500 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-400  transition">
              Free Consultation
            </a>
          </div>
        )}
      </header>

      {/* Padding to push hero down */}
      <div style={{ paddingTop: headerHeight }} />
      </section>
    </>
  )
}