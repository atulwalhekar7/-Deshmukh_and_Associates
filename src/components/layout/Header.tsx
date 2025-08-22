import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Languages } from 'lucide-react';
// import { ThemeController } from '../../controllers/ThemeController';
import { NavigationController } from '../../controllers/NavigationController';
import { useTranslation } from '../../hooks/useTranslation';
import E2M from '../../assets/team/E2M.png';
import M2E from '../../assets/team/M2E.png';
import logo from '../../assets/team/logo.ico';


const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  // const [isDarkMode, setIsDarkMode] = useState(true);
  const { t, language, toggleLanguage } = useTranslation();
  const [showE2M, setShowE2M] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();
  // const themeController = ThemeController.getInstance();
  const navigationController = new NavigationController(navigate);

  // useEffect(() => {
  //   setIsDarkMode(themeController.isDark);
  // }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const toggleDarkMode = () => {
  //   themeController.toggleTheme();
  //   setIsDarkMode(themeController.isDark);
  // };

  const handleClick = () => {
    setShowE2M(!showE2M);
    toggleLanguage();
  }

  const handleNavigation = (path: string, sectionId?: string) => {
    if (path === '/') {
      navigationController.goToHome();
      if (sectionId) {
        setTimeout(() => navigationController.scrollToSection(sectionId), 100);
      }
    } else {
      navigate(path);
    }
    setIsMenuOpen(false);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-charcoal text-gold py-2 text-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>{t('phoneNumber')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>{t('emailAddress')}</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>पुणे, महाराष्ट्र</span>
              </div>
            </div>
            <div className="text-white">
              {t('emergencySupport')}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled
        ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl shadow-gold/10 mt-0'
        : 'bg-transparent mt-10'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center px-4 py-5">
            {/* Logo */}
           <div className="flex items-center gap-2 flex-shrink-0 mr-4 ml-[-1rem] sm:ml-0">
             <a href="#home"><img  src={logo} alt="logo" className="rounded-full w-12 h-12 ml-2 object-cover sm:w-14 sm:h-14 md:w-16 md:h-16 min-w-[48px] min-h-[48px]" /></a>
             <div className="flex-shrink-0 cursor-pointer ml-0" onClick={() => handleNavigation('/')}>
              <a href='#home'><h1 className={`text-1.5xl md:text-2xl font-bold transition-all duration-300 ${isScrolled
                ? 'text-white'
                : 'text-white'
                }`}>
                <span className="text-gold">
                  {language === 'mr' ? 'देशमुख' : 'Deshmukh'}
                </span>
                <span className={isScrolled ? 'text-white' : 'text-white'}>
                  {language === 'mr' ? ' अँड असोसिएट्स' : ' & Associates'}
                </span>
              </h1></a>
              <p className={`text-sm font-medium mt-1 ${isScrolled
                ? 'text-gold'
                : 'text-gold'
                }`}>
                {t('legalExcellence')}
              </p>
             </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-7">
              {[
                { name: t('home'), path: '/', sectionId: 'home' },
                { name: t('about'), path: '/', sectionId: 'about' },
                { name: t('practiceAreas'), path: '/', sectionId: 'services' },
                // { name: t('team'), path: '/', sectionId: 'team' },
                { name: t('gallery'), path: '/', sectionId: 'gallery' },
                { name: t('contact'), path: '/', sectionId: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className={`text-base font-semibold hover:text-golden-400 transition-all duration-300 relative group ${isActive(item.path) ? 'text-gold' :
                    isScrolled
                      ? 'text-white'
                      : 'text-white'
                    }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}

              {/* CTA Button */}
              <button
                onClick={() => handleNavigation('/', 'contact')}
                className="bg-gold hover:bg-gold-600 text-black px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
              >
                {t('freeConsultation')}
              </button>

              {/* Language Toggle */}
              <button
                onClick={handleClick}
                className={`flex items-center  space-x-2 p-1 rounded-full transition-all duration-300 hover:scale-110 ${isScrolled
                  ? 'text-white hover:bg-gold/20'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                {/* <Languages className="w-5 h-5" /> */}
                <img
                  src={showE2M ? E2M : M2E}
                  alt="English to Marathi Icon"
                  className="w-14 h-12"
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${showE2M ? 'text-white' : 'text-gold'
                  }`}>{language === 'en' ? 'मराठी' : 'ENGLISH'}</span>
              </button>

              {/* Dark Mode Toggle */}
              {/* <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-white hover:bg-gold/20' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button> */}
            </nav>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-7">
              {/* Language Toggle */}
              <button
                onClick={handleClick}
                className={`flex items-center  space-x-1 p-1 rounded-full transition-all duration-300 hover:scale-110 ${isScrolled
                  ? 'text-white hover:bg-gold/20'
                  : 'text-white hover:bg-white/10'
                  }`}
              >
                {/* <Languages className="w-5 h-5" /> */}
                <img
                  src={showE2M ? E2M : M2E}
                  alt="English to Marathi Icon"
                  className="w-14 h-12"
                />
                <span className={`text-sm font-medium transition-colors duration-300 ${showE2M ? 'text-white' : 'text-gold'
                  }`}>{language === 'en' ? 'मराठी' : 'ENGLISH'}</span>
              </button>

              {/* <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-white'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button> */}

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-all duration-300 ixed top-4 right-4 z-50 ${isScrolled
                  ? 'text-white'
                  : 'text-white'
                  }`}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden bg-charcoal/95 backdrop-blur-md border-t border-gold/20 animate-fade-in rounded-b-xl">
              <div className="px-4 pt-4 pb-6 space-y-2">
                {[
                  { name: t('home'), path: '/', sectionId: 'home' },
                  { name: t('about'), path: '/', sectionId: 'about' },
                  { name: t('practiceAreas'), path: '/', sectionId: 'services' },
                  // { name: t('team'), path: '/', sectionId: 'team' },
                  { name: t('gallery'), path: '/', sectionId: 'gallery' },
                  { name: t('contact'), path: '/', sectionId: 'contact' }
                ].map((item) => (
                  <button
                    key={item.name}
                    onClick={() => handleNavigation(item.path, item.sectionId)}
                    className="block w-full text-left px-4 py-4 text-lg font-semibold text-white hover:text-gold hover:bg-gold/10 transition-all duration-300 rounded-lg"
                  >
                    {item.name}
                  </button>
                ))}

                <button
                  onClick={() => handleNavigation('/', 'contact')}
                  className="w-full mt-4 bg-gold hover:bg-gold-600 text-black px-6 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg"
                >
                  {t('freeConsultation')}
                </button>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;