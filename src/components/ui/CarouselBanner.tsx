import React, { useState, useEffect } from "react";

const CarouselBanner = () => {
  const [navSolid, setNavSolid] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavSolid(true);
      } else {
        setNavSolid(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slide = {
    background: "from-gray-900 via-gray-800 to-gray-900",
    title: "Deshmukh & Associates",
    subtitle: "Excellence in Legal Representation",
    description:
      "With over two decades of combined experience, we deliver strategic legal solutions that protect your interests and secure favorable outcomes.",
    button1: "Get Legal Help",
    button2: "Learn More",
    image: "/assets/your-image.png", // replace with actual path
  };

  return (
    <div className="relative h-[580px] bg-gradient-to-br overflow-hidden">
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${
          navSolid ? "bg-gray-900 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
          <h1 className="text-xl font-bold">Deshmukh & Associates</h1>
          <ul className="hidden md:flex gap-6">
            <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#about" className="hover:text-yellow-400">About</a></li>
            <li><a href="#practice" className="hover:text-yellow-400">Practice Areas</a></li>
            <li><a href="#team" className="hover:text-yellow-400">Team</a></li>
            <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Background */}
      <div
        className={`h-full w-full bg-gradient-to-br ${slide.background} relative`}
      >
        <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 text-white pt-[100px]">
          {/* Text */}
          <div className="max-w-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
              {slide.title}
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold mb-4">
              {slide.subtitle}
            </h2>
            <p className="mb-6 text-gray-300">{slide.description}</p>
            <div className="flex gap-4">
              <button className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
                {slide.button1}
              </button>
              <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition">
                {slide.button2}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselBanner;
