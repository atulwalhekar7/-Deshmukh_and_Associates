// import React, { useState, useEffect } from "react";

// const CarouselBanner = () => {
//   const [navSolid, setNavSolid] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setNavSolid(true);
//       } else {
//         setNavSolid(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const slide = {
//     background: "from-gray-900 via-gray-800 to-gray-900",
//     title: "Deshmukh & Associates",
//     subtitle: "Excellence in Legal Representation",
//     description:
//       "With over two decades of combined experience, we deliver strategic legal solutions that protect your interests and secure favorable outcomes.",
//     button1: "Get Legal Help",
//     button2: "Learn More",
//     image: "/assets/your-image.png", // replace with actual path
//   };

//   return (
//     // <<<<<<< HEAD
//     // <section id='hero' className="relative h-screen overflow-hidden">
//     //   {/* Carousel Container */}
//     {/* //   <div className="relative h-full">
//     //     {slides.map((slide, index) => ( */}
//     //       <div
//     //         key={slide.id}
//     //         className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
//     //           index === currentSlide 
//     //             ? 'opacity-100 translate-x-0 z-10' 
//     //             : index < currentSlide 
//     //               ? 'opacity-0 -translate-x-full z-0' 
//     //               : 'opacity-0 translate-x-full z-0'
//     //         }`}
//     //       >
//     //         <div className={`h-full bg-gradient-to-br ${slide.background} relative overflow-hidden`}>
//     //           {/* Animated Background Patterns */}
//     //           <div className={`absolute inset-0 opacity-10 ${slide.background.includes('white') ? 'text-charcoal' : 'text-gold'}`}>
//     //             {slide.pattern === 'legal-scales' && (
//     //               <>
//     //                 <div className="absolute top-20 left-20 w-40 h-40 border-2 border-current rounded-full animate-pulse"></div>
//     //                 <div className="absolute bottom-32 right-32 w-32 h-32 border border-current rotate-45 animate-bounce"></div>
//     //                 <div className="absolute top-1/2 left-16 w-24 h-24 border border-current rotate-12 animate-spin-slow"></div>
//     //               </>
//     //             )}
//     //             {slide.pattern === 'justice-gavel' && (
//     //               <>
//     //                 <div className="absolute top-32 right-24 w-36 h-36 border-2 border-current rotate-45 animate-pulse"></div>
//     //                 <div className="absolute bottom-24 left-24 w-28 h-28 border border-current animate-bounce"></div>
//     //                 <div className="absolute top-2/3 right-16 w-20 h-20 border border-current rotate-45 animate-spin-slow"></div>
//     //               </>
//     //             )}
//     //             {slide.pattern === 'corporate-building' && (
//     //               <>
//     //                 <div className="absolute top-24 left-32 w-32 h-48 border border-current animate-pulse"></div>
//     //                 <div className="absolute bottom-40 right-20 w-24 h-36 border border-current animate-bounce"></div>
//     //                 <div className="absolute top-1/3 right-32 w-16 h-24 border border-current animate-spin-slow"></div>
//     //               </>
//     //             )}
//     //             {slide.pattern === 'award-trophy' && (
//     //               <>
//     //                 <div className="absolute top-28 left-28 w-32 h-32 border-2 border-current rounded-full animate-pulse"></div>
//     //                 <div className="absolute bottom-28 right-28 w-24 h-32 border border-current animate-bounce"></div>
//     //                 <div className="absolute top-1/2 left-20 w-20 h-20 border border-current rotate-45 animate-spin-slow"></div>
//     //               </>
//     //             )}
//     //           </div>
//     // =======
//     < div className = "relative h-[580px] bg-gradient-to-br overflow-hidden" >
//       {/* Navbar */ }
//       <nav nav
//   className = {`fixed top-0 left-0 w-full z-20 transition-all duration-300 ${navSolid ? "bg-gray-900 shadow-lg" : "bg-transparent"
//     }`
// }
//       >
//   <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center text-white">
//     <h1 className="text-xl font-bold">Deshmukh & Associates</h1>
//     <ul className="hidden md:flex gap-6">
//       <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
//       <li><a href="#about" className="hover:text-yellow-400">About</a></li>
//       <li><a href="#practice" className="hover:text-yellow-400">Practice Areas</a></li>
//       <li><a href="#team" className="hover:text-yellow-400">Team</a></li>
//       <li><a href="#contact" className="hover:text-yellow-400">Contact</a></li>
//     </ul>
//   </div>
//       </nav >
//   {/* >>>>>>> 22de5d5b9d75d7e67b4244847a8026053785f8f1 */ }

// {/* Background */ }
// <div
//   className={`h-full w-full bg-gradient-to-br ${slide.background} relative`}
// >
//   <div className="absolute inset-0 flex flex-col md:flex-row items-center justify-between px-8 md:px-16 lg:px-24 text-white pt-[100px]">
//     {/* Text */}
//     <div className="max-w-lg">
//       <h1 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
//         {slide.title}
//       </h1>
//       <h2 className="text-xl md:text-2xl font-semibold mb-4">
//         {slide.subtitle}
//       </h2>
//       <p className="mb-6 text-gray-300">{slide.description}</p>
//       <div className="flex gap-4">
//         <button className="bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-yellow-400 transition">
//           {slide.button1}
//         </button>
//         <button className="border border-yellow-500 text-yellow-400 px-6 py-3 rounded-lg hover:bg-yellow-500 hover:text-gray-900 transition">
//           {slide.button2}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
//     </div >
//   );
// };

// export default CarouselBanner;
import React, { useState, useEffect } from "react";
import law4 from "../../assets/team/hero1.png";

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
    image: law4 // replace with actual path
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