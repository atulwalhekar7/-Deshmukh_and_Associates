import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <img
              src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
              alt="Law firm office"
              className="w-full h-96 object-cover rounded-xl shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-bold text-black mb-6">
              <span className="text-gold">
                {t('whoWeAre')}
              </span>
            </h2>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              {t('aboutDesc01')}
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              {t('aboutDesc1')}
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              {t('aboutDesc2')}
            </p>
            <p className="text-lg text-charcoal mb-8 leading-relaxed">
              {t('aboutDesc3')}
            </p>
            
            <button className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              {t('learnMoreAbout')}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;