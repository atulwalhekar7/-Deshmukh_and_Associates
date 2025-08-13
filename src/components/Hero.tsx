import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Scale, Gavel, Users, Award } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Expert Legal Representation",
      subtitle: "Trusted Legal Advisors. Expert Counsel. Proven Results.",
      description: "With over 15 years of experience, we provide comprehensive legal solutions across all practice areas.",
      icon: <Scale className="w-16 h-16 text-rose-gold-400" />,
      background: "from-slate-900 via-slate-800 to-slate-900"
    },
    {
      title: "Criminal Defense Excellence",
      subtitle: "Protecting Your Rights. Defending Your Future.",
      description: "Aggressive criminal defense representation with a track record of successful outcomes.",
      icon: <Gavel className="w-16 h-16 text-rose-gold-400" />,
      background: "from-slate-800 via-slate-900 to-slate-800"
    },
    {
      title: "Corporate Legal Solutions",
      subtitle: "Strategic Business Counsel. Compliance Expertise.",
      description: "Comprehensive corporate advisory services for businesses of all sizes.",
      icon: <Users className="w-16 h-16 text-rose-gold-400" />,
      background: "from-slate-900 via-slate-700 to-slate-900"
    },
    {
      title: "Award-Winning Service",
      subtitle: "Excellence Recognized. Results Delivered.",
      description: "Consistently rated among the top legal firms with numerous client success stories.",
      icon: <Award className="w-16 h-16 text-rose-gold-400" />,
      background: "from-slate-800 via-slate-900 to-slate-700"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-screen">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 translate-x-0' 
                : index < currentSlide 
                  ? 'opacity-0 -translate-x-full' 
                  : 'opacity-0 translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.background} flex items-center relative`}>
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 border border-rose-gold-400 rotate-45 animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-24 h-24 border border-rose-gold-400 rotate-12 animate-bounce"></div>
                <div className="absolute top-1/2 left-10 w-16 h-16 border border-rose-gold-400 rotate-45 animate-spin-slow"></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  <div className="text-left animate-fade-in-up">
                    <div className="mb-6 animate-bounce-gentle">
                      {slide.icon}
                    </div>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                      <span className="bg-gradient-to-r from-rose-gold-400 to-rose-gold-600 bg-clip-text text-transparent">
                        Deshmukh
                      </span>
                      <br />
                      <span className="text-white">& Associates</span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl text-rose-gold-300 mb-4 font-light">
                      {slide.subtitle}
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <button
                        onClick={scrollToContact}
                        className="group bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 hover:from-rose-gold-600 hover:to-rose-gold-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                      >
                        <span className="flex items-center justify-center">
                          Book a Consultation
                          <div className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</div>
                        </span>
                      </button>
                      <button className="border-2 border-rose-gold-400 text-rose-gold-400 hover:bg-rose-gold-400 hover:text-slate-900 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                        Learn More
                      </button>
                    </div>
                  </div>
                  
                  <div className="hidden lg:block animate-fade-in-right">
                    <div className="relative">
                      <div className="w-96 h-96 bg-gradient-to-br from-rose-gold-400/20 to-rose-gold-600/20 rounded-full animate-pulse-slow"></div>
                      <div className="absolute top-8 left-8 w-80 h-80 bg-gradient-to-br from-rose-gold-500/30 to-rose-gold-700/30 rounded-full animate-spin-very-slow"></div>
                      <div className="absolute top-16 left-16 w-64 h-64 bg-gradient-to-br from-white/10 to-white/5 rounded-full backdrop-blur-sm flex items-center justify-center">
                        <Scale className="w-32 h-32 text-rose-gold-400 animate-bounce-gentle" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-rose-gold-400 scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-rose-gold-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-gold-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;