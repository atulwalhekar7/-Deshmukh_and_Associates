import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    {
      quote: t('testimonial1'),
      author: "S. Patel",
      rating: 5
    },
    {
      quote: t('testimonial2'),
      author: "R. Mehta",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-gold fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
    ));
  };

  return (
    <section className="py-24 bg-white transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="text-gold">
              {t('clientsSay')}
            </span>
          </h2>
          <p className="text-xl text-charcoal max-w-2xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-transparent hover:border-gold"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-lg text-charcoal mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-black font-semibold">— {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;