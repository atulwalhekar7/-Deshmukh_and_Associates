import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Phone, Mail, MapPin, Languages } from 'lucide-react';
import { ThemeController } from '../../controllers/ThemeController';
import { NavigationController } from '../../controllers/NavigationController';
import { useTranslation } from '../../hooks/useTranslation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const { t, language, toggleLanguage } = useTranslation();
  
  const navigate = useNavigate();
  const location = useLocation();
  const themeController = ThemeController.getInstance();
  const navigationController = new NavigationController(navigate);

  useEffect(() => {
    setIsDarkMode(themeController.isDark);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    themeController.toggleTheme();
    setIsDarkMode(themeController.isDark);
  };

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
      <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-charcoal/95 backdrop-blur-md shadow-2xl shadow-gold/10 mt-0' 
          : 'bg-transparent mt-10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            {/* Logo */}
            <div className="flex-shrink-0 cursor-pointer" onClick={() => handleNavigation('/')}>
              <h1 className={`text-3xl font-bold transition-all duration-300 ${
                isScrolled 
                  ? 'text-white' 
                  : 'text-white'
              }`}>
                <span className="text-gold">
                  {language === 'mr' ? 'देशमुख' : 'Deshmukh'}
                </span>
                <span className={isScrolled ? 'text-white' : 'text-white'}>
                  {language === 'mr' ? ' अँड असोसिएट्स' : ' & Associates'}
                </span>
              </h1>
              <p className={`text-sm font-medium mt-1 ${
                isScrolled 
                  ? 'text-gold' 
                  : 'text-gold'
              }`}>
                {t('legalExcellence')}
              </p>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {[
                { name: t('home'), path: '/', sectionId: 'hero' },
                { name: t('about'), path: '/', sectionId: 'about' },
                { name: t('practiceAreas'), path: '/practice-areas' },
                { name: t('team'), path: '/', sectionId: 'team' },
                { name: t('contact'), path: '/', sectionId: 'contact' }
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavigation(item.path, item.sectionId)}
                  className={`text-base font-semibold hover:text-golden-400 transition-all duration-300 relative group ${
                    isActive(item.path) ? 'text-gold' : 
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
                onClick={toggleLanguage}
                className={`flex items-center space-x-2 p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-white hover:bg-gold/20' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Languages className="w-5 h-5" />
                <span className="text-sm font-medium">{language === 'en' ? 'मर' : 'EN'}</span>
              </button>
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${
                  isScrolled 
                    ? 'text-white hover:bg-gold/20' 
                    : 'text-white hover:bg-white/10'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </nav>

            {/* Mobile Controls */}
            <div className="lg:hidden flex items-center space-x-3">
              <button
                onClick={toggleLanguage}
                className={`flex items-center space-x-1 p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-white'
                }`}
              >
                <Languages className="w-4 h-4" />
                <span className="text-xs font-medium">{language === 'en' ? 'मर' : 'EN'}</span>
              </button>
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-all duration-300 ${
                  isScrolled 
                    ? 'text-white' 
                    : 'text-white'
                }`}
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`p-2 rounded-md transition-all duration-300 ${
                  isScrolled 
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
                  { name: t('home'), path: '/', sectionId: 'hero' },
                  { name: t('about'), path: '/', sectionId: 'about' },
                  { name: t('practiceAreas'), path: '/practice-areas' },
                  { name: t('team'), path: '/', sectionId: 'team' },
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