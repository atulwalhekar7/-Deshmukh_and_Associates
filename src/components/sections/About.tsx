
  import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import A1 from '../../assets/team/gallery29.jpg'

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="animate-fade-in-up">
            <img
              src= { A1 }
              alt="Law firm office"
              className="w-full h-[505px] object-cover rounded-xl shadow-2xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
            />
          </div>

          {/* Right Text Content */}
          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-bold text-black mb-3">
              <span className="text-gold">{t('whoWeAre')}</span>
            </h2>

            {/* Always visible part */}
            <p className="text-lg text-charcoal mb-2 leading-relaxed">{t('aboutDesc01')}</p>
            <p className="text-lg text-charcoal mb-2 leading-relaxed">{t('aboutDesc1')}</p>
                {/* <p className="text-lg text-charcoal mb-1 leading-relaxed">{t('aboutDesc2')}</p> */}
                <p className="text-lg text-charcoal mb-1 leading-relaxed">{t('aboutDesc3')}</p>
              
            

            {/* Always visible: comes AFTER aboutDesc2/3 */}
            <div className="text-right text-charcoal">
              <p className="text-lg text-gold font-bold mb-0 mt-4 leading-relaxed">
                {t('aboutDesc4')}
              </p>
              <p className="text-lg text-gold font-bold mb-6 leading-relaxed">
                {t('aboutDesc5')}
              </p>
            </div>

            {/* Button to toggle */}
            {/* <button
              onClick={() => setShowMore(prev => !prev)}
              className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 mt-4"
            >
              {showMore ? t('readLess') : t('learnMoreAbout')}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
          