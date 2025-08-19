import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Scale, Gavel, Building, Award, Shield, Users, BookOpen, TrendingUp } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

interface BannerSlide {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  background: string;
  pattern: string;
  cta: string;
}

const CarouselBanner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { t, language } = useTranslation();

  const slides: BannerSlide[] = [
    {
      id: 1,
      title: t('excellence'),
      subtitle: t('excellenceSubtitle'),
      description: t('excellenceDesc'),
      icon: <Scale className="w-20 h-20 text-golden-400" />,
      background: "from-white via-gray-50 to-white",
      pattern: "legal-scales",
      cta: t('scheduleConsultation')
    },
    {
      id: 2,
      title: t('criminalDefense'),
      subtitle: t('criminalSubtitle'),
      description: t('criminalDesc'),
      icon: <Shield className="w-20 h-20 text-golden-400" />,
      background: "from-charcoal via-charcoal-800 to-charcoal",
      pattern: "justice-gavel",
      cta: t('getConsultation')
    },
    {
      id: 3,
      title: t('corporateLegal'),
      subtitle: t('corporateSubtitle'),
      description: t('corporateDesc'),
      icon: <Building className="w-20 h-20 text-golden-400" />,
      background: "from-white via-gray-50 to-white",
      pattern: "corporate-building",
      cta: t('businessConsultation')
    },
    {
      id: 4,
      title: t('awardWinning'),
      subtitle: t('awardSubtitle'),
      description: t('awardDesc'),
      icon: <Award className="w-20 h-20 text-golden-400" />,
      background: "from-charcoal via-charcoal-800 to-charcoal",
      pattern: "award-trophy",
      cta: t('viewSuccess')
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {/* Carousel Container */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlide
              ? 'opacity-100 translate-x-0 z-10'
              : index < currentSlide
                ? 'opacity-0 -translate-x-full z-0'
                : 'opacity-0 translate-x-full z-0'
              }`}
          >
            <div className={`h-full bg-gradient-to-br ${slide.background} relative overflow-hidden`}>
              {/* Animated Background Patterns */}
              <div className={`absolute inset-0 opacity-10 ${slide.background.includes('white') ? 'text-charcoal' : 'text-gold'}`}>
                {slide.pattern === 'legal-scales' && (
                  <>
                    <div className="absolute top-20 left-20 w-40 h-40 border-2 border-current rounded-full animate-pulse"></div>
                    <div className="absolute bottom-32 right-32 w-32 h-32 border border-current rotate-45 animate-bounce"></div>
                    <div className="absolute top-1/2 left-16 w-24 h-24 border border-current rotate-12 animate-spin-slow"></div>
                  </>
                )}
                {slide.pattern === 'justice-gavel' && (
                  <>
                    <div className="absolute top-32 right-24 w-36 h-36 border-2 border-current rotate-45 animate-pulse"></div>
                    <div className="absolute bottom-24 left-24 w-28 h-28 border border-current animate-bounce"></div>
                    <div className="absolute top-2/3 right-16 w-20 h-20 border border-current rotate-45 animate-spin-slow"></div>
                  </>
                )}
                {slide.pattern === 'corporate-building' && (
                  <>
                    <div className="absolute top-24 left-32 w-32 h-48 border border-current animate-pulse"></div>
                    <div className="absolute bottom-40 right-20 w-24 h-36 border border-current animate-bounce"></div>
                    <div className="absolute top-1/3 right-32 w-16 h-24 border border-current animate-spin-slow"></div>
                  </>
                )}
                {slide.pattern === 'award-trophy' && (
                  <>
                    <div className="absolute top-28 left-28 w-32 h-32 border-2 border-current rounded-full animate-pulse"></div>
                    <div className="absolute bottom-28 right-28 w-24 h-32 border border-current animate-bounce"></div>
                    <div className="absolute top-1/2 left-20 w-20 h-20 border border-current rotate-45 animate-spin-slow"></div>
                  </>
                )}
              </div>

              {/* Content */}
              <div className="relative z-20 h-full flex items-center pt-16">
                <div className="max-w-6xl mx-auto  w-full ">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <div className="text-left animate-fade-in-up">
                      <div className="mb-6 animate-bounce-gentle">
                        {slide.icon}
                      </div>

                      <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold mb-5 leading-tight">
                        <span className={slide.background.includes('white') ? 'text-black' : 'text-gold'}>
                          {language === 'mr' ? 'देशमुख' : 'Deshmukh'}
                        </span>
                        <br />
                        <span className={slide.background.includes('white') ? 'text-black' : 'text-white'}>
                          {language === 'mr' ? 'अँड असोसिएट्स' : '& Associates'}
                        </span>
                      </h1>

                      <h2 className={`text-lg md:text-lg lg:text-xl mb-4 font-light leading-relaxed ${slide.background.includes('white') ? 'text-charcoal' : 'text-gold'}`}>
                        {slide.subtitle}
                      </h2>

                      <p className={`text-base md:text-base mb-8 max-w-xl leading-relaxed ${slide.background.includes('white') ? 'text-charcoal' : 'text-gray-300'}`}>
                        {slide.description}
                      </p>

                      <div className="flex flex-col sm:flex-row gap-5 max-w-max">
                        <button
                          onClick={scrollToContact}
                          className="group bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 shadow-2xl hover:shadow-gold/25 transform hover:-translate-y-1 hover:scale-105"
                        >
                          <span className="flex items-center justify-center">
                            {slide.cta}
                            <div className="ml-2 group-hover:translate-x-2 transition-transform duration-300 text-lg">→</div>
                          </span>
                        </button>

                        <button
                          className={`border-2 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${slide.background.includes('white')
                            ? 'border-charcoal text-charcoal hover:bg-charcoal hover:text-white'
                            : 'border-gold text-gold hover:bg-gold hover:text-black'
                            }`}
                        >
                          {t('learnMore')}
                        </button>
                      </div>
                    </div>

                   
                    <div className="hidden lg:block animate-fade-in-right">
                      <div className="relative w-56 h-56 mx-auto">
                        {/* Outer circle */}
                        <div
                          className={`absolute inset-0 m-auto w-56 h-56 rounded-full animate-pulse-slow ${slide.background.includes('white')
                              ? 'bg-gradient-to-br from-charcoal/10 to-charcoal/20'
                              : 'bg-gradient-to-br from-gold/10 to-gold/20'
                            }`}
                          style={{ zIndex: 10 }}
                        ></div>

                        {/* Middle circle */}
                        <div
                          className={`absolute inset-0 m-auto w-40 h-40 rounded-full animate-spin-very-slow ${slide.background.includes('white')
                              ? 'bg-gradient-to-br from-charcoal/20 to-charcoal/30'
                              : 'bg-gradient-to-br from-gold/20 to-gold/30'
                            }`}
                          style={{ zIndex: 20 }}
                        ></div>

                        {/* Inner circle with border and icon */}
                        <div
                          className={`absolute inset-0 m-auto w-28 h-28 bg-gradient-to-br from-white/5 to-white/10 rounded-full backdrop-blur-sm flex items-center justify-center border ${slide.background.includes('white') ? 'border-charcoal/20' : 'border-gold/20'
                            }`}
                          style={{ zIndex: 30 }}
                        >
                          <div className={slide.background.includes('white') ? 'text-charcoal' : 'text-gold'}>
                            {slide.icon}
                          </div>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-charcoal/80 hover:bg-charcoal/90 text-gold p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 backdrop-blur-sm border border-gold/20"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-charcoal/80 hover:bg-charcoal/90 text-gold p-4 rounded-full transition-all duration-300 hover:scale-110 z-30 backdrop-blur-sm border border-gold/20"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4 z-30">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${index === currentSlide
              ? 'w-12 h-3 bg-gold rounded-full scale-125'
              : 'w-3 h-3 bg-white/50 hover:bg-white/75 rounded-full hover:scale-110'
              }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default CarouselBanner;