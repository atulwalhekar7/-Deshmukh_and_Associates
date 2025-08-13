import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin, Instagram, Scale } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const { t, language } = useTranslation();

  const practiceAreas = [
    { name: t('civilLaw'), path: '/practice-areas/civil-law' },
    { name: t('criminalLaw'), path: '/practice-areas/criminal-law' },
    { name: t('corporateLaw'), path: '/practice-areas/corporate-law' },
    { name: t('propertyLaw'), path: '/practice-areas/property-law' }
  ];

  const quickLinks = [
    { name: t('about'), path: '/#about' },
    { name: t('team'), path: '/#team' },
    { name: t('clientsSay'), path: '/#testimonials' },
    { name: t('contact'), path: '/#contact' }
  ];

  const legalLinks = [
    { name: t('privacyPolicy'), path: '/privacy' },
    { name: t('termsOfService'), path: '/terms' },
    { name: t('legalDisclaimer'), path: '/disclaimer' },
    { name: t('cookiePolicy'), path: '/cookies' }
  ];

  return (
    <footer className="bg-black text-white transition-colors duration-500">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2">
                <span className="text-gold">
                  {language === 'mr' ? 'देशमुख' : 'Deshmukh'}
                </span>
                <span className="text-white">{language === 'mr' ? ' अँड असोसिएट्स' : ' & Associates'}</span>
              </h3>
              <p className="text-gold font-medium">{t('legalExcellence')}</p>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-6">
              {t('footerDesc')}
            </p>
            
            {/* Social Media */}
            <div className="flex space-x-4">
              {[
                { icon: Facebook, href: '#' },
                { icon: Twitter, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Instagram, href: '#' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-charcoal hover:bg-gold text-gold hover:text-black p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold flex items-center">
              <Scale className="w-5 h-5 mr-2" />
              {t('practiceAreasTitle')}
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area.name}>
                  <button
                    onClick={() => navigate(area.path)}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {area.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">{t('quickLinks')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
            
            <div className="mt-8">
              <h5 className="text-lg font-semibold mb-4 text-gold">{t('legal')}</h5>
              <ul className="space-y-2">
                {legalLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => navigate(link.path)}
                      className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-gold">{t('contactInfo')}</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    {t('addressText').split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < t('addressText').split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+919876543210" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('phoneNumber')}
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@deshmukhlaw.com" className="text-gray-300 hover:text-gold transition-colors duration-300">
                  {t('emailAddress')}
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>{language === 'mr' ? 'सोम - शुक्र: सकाळी ९:०० - संध्याकाळी ६:००' : 'Mon - Fri: 9:00 AM - 6:00 PM'}</p>
                  <p>{language === 'mr' ? 'शनि: सकाळी १०:०० - दुपारी ४:००' : 'Sat: 10:00 AM - 4:00 PM'}</p>
                  <p className="text-gold font-medium">{t('emergencySupport')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-center md:text-left">
              <p>{t('copyright')}</p>
              <p className="text-sm mt-1">{t('barRegistration')}</p>
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <span>{t('ratedFirm')}</span>
              <span>{t('clientSatisfaction')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;