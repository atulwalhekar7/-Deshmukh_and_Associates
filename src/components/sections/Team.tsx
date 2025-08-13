import React from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const Team: React.FC = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t('language') === 'mr' ? "अ‍ॅड. राजेश देशमुख" : "Adv. Rajesh Deshmukh",
      role: t('seniorPartner'),
      specialization: t('civilProperty'),
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg"
    },
    {
      name: t('language') === 'mr' ? "अ‍ॅड. प्रिया देशमुख" : "Adv. Priya Deshmukh",
      role: t('partner'),
      specialization: t('criminalFamily'),
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
    },
    {
      name: t('language') === 'mr' ? "अ‍ॅड. अमित शर्मा" : "Adv. Amit Sharma",
      role: t('associate'),
      specialization: t('corporateCommercial'),
      image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
    }
  ];

  return (
    <section id="team" className="py-24 bg-charcoal transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-gold">
              {t('ourTeam')}
            </span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('teamDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up border border-transparent hover:border-gold"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-black mb-2">{member.name}</h3>
                <p className="text-gold font-semibold mb-2">{member.role}</p>
                <p className="text-charcoal mb-4">{member.specialization}</p>
                <button className="text-black font-semibold hover:text-gold transition-all duration-300 group-hover:translate-x-2">
                  {t('viewProfile')} →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;