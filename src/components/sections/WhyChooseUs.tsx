import React from 'react';
import { CheckCircle } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const WhyChooseUs: React.FC = () => {
  const { t } = useTranslation();

  const reasons = [
    {
      title: t('experience'),
      description: t('experienceDesc')
    },
    {
      title: t('transparent'),
      description: t('transparentDesc')
    },
    {
      title: t('successRate'),
      description: t('successRateDesc')
    }
  ];

  return (
    <section className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="text-gold">
              {t('whyChooseUs')}
            </span>
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            {t('whyChooseDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up hover:bg-gray-50 p-8 rounded-xl transition-all duration-500 border border-transparent hover:border-gold/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <CheckCircle className="w-16 h-16 text-gold group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{reason.title}</h3>
              <p className="text-charcoal leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;