import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Award, Users, TrendingUp } from 'lucide-react';
import { practiceAreas } from '../data/practiceAreas';
import { useTranslation } from '../hooks/useTranslation';

const PracticeAreaPage: React.FC = () => {
  const { areaId } = useParams<{ areaId: string }>();
  const navigate = useNavigate();
  const { t, language } = useTranslation();
  
  const practiceArea = practiceAreas.find(area => area.id === areaId);

  if (!practiceArea) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-black mb-4">
            {t('practiceAreaNotFound')}
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
          >
            {t('returnHome')}
          </button>
        </div>
      </div>
    );
  }

  const scrollToContact = () => {
    navigate('/#contact');
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={() => navigate('/')}
            className="flex items-center text-gold hover:text-gold-300 mb-8 transition-colors duration-300"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            {t('backToHome')}
          </button>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="text-gold">
                  {practiceArea.title}
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                {practiceArea.fullDescription}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToContact}
                  className="bg-gold hover:bg-gold-600 text-black px-8 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {t('getLegalConsultation')}
                </button>
                <button className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-8 py-4 rounded-lg font-bold transition-all duration-300">
                  {t('downloadBrochure')}
                </button>
              </div>
            </div>
            
            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-gold/10 to-gold/20 rounded-2xl p-8 backdrop-blur-sm border border-gold/20">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">{practiceArea.experience}</div>
                    <div className="text-gray-300">{t('experience')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">{practiceArea.successRate}</div>
                    <div className="text-gray-300">{t('successRate')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">{language === 'mr' ? '५००+' : '500+'}</div>
                    <div className="text-gray-300">{t('casesWon')}</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gold mb-2">{language === 'mr' ? '२४/७' : '24/7'}</div>
                    <div className="text-gray-300">{t('support')}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              {t('ourServices', { area: practiceArea.title })}
            </h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              {t('servicesDesc', { area: practiceArea.title.toLowerCase() })}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceArea.services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 border border-transparent hover:border-gold animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6">
                  <CheckCircle className="w-12 h-12 text-gold group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-black mb-4">{service}</h3>
                <p className="text-charcoal leading-relaxed">
                  {language === 'mr' ? `${service.toLowerCase()} साठी तज्ञ कायदेशीर प्रतिनिधित्व आणि सल्लागार सेवा.` : `Expert legal representation and advisory services for ${service.toLowerCase()}.`}
                </p>
                <button className="mt-6 text-gold font-semibold hover:text-gold-600 transition-all duration-300 group-hover:translate-x-2">
                  {t('learnMore')} →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-black mb-4">
              {t('whyChooseTeam', { area: practiceArea.title })}
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Award className="w-16 h-16 text-gold" />,
                title: t('provenExpertise'),
                description: t('expertiseDesc', { area: practiceArea.title.toLowerCase() })
              },
              {
                icon: <Users className="w-16 h-16 text-gold" />,
                title: t('clientFocused'),
                description: t('clientFocusedDesc')
              },
              {
                icon: <TrendingUp className="w-16 h-16 text-gold" />,
                title: t('resultsDriven'),
                description: t('resultsDrivenDesc', { successRate: practiceArea.successRate, area: practiceArea.title.toLowerCase() })
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">{feature.title}</h3>
                <p className="text-charcoal leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('readyToStart', { area: practiceArea.title })}
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            {t('readyDesc', { area: practiceArea.title.toLowerCase() })}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button
              onClick={scrollToContact}
              className="bg-gold hover:bg-gold-600 text-black px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 shadow-2xl hover:shadow-gold/25 transform hover:-translate-y-2 hover:scale-105"
            >
              {t('scheduleFreeConsultation')}
            </button>
            <button
              onClick={() => navigate('/')}
              className="border-2 border-gold text-gold hover:bg-gold hover:text-black px-10 py-5 rounded-xl text-lg font-bold transition-all duration-300 transform hover:scale-105"
            >
              {t('exploreOtherServices')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreaPage;