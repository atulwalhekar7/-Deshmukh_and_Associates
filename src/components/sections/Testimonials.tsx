

import React from 'react';
import { Star } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';

const Testimonials: React.FC = () => {
  const { t } = useTranslation();

  const testimonials = [
    { quote: t('testimonial1'), author: "Nikhil Nagawade", rating: 5 },
    { quote: t('testimonial2'), author: "Atul Walhekar", rating: 5 },
    { quote: t('testimonial3'), author: "Aniket Dhumal", rating: 5 },
    { quote: t('testimonial4'), author: "Omkar Dhumal", rating: 5 }
  ];

  const renderStars = (rating: number) =>
    Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-gold fill-current" />
    ));

  return (
    <section className="py-24 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">
            <span className="text-gold">{t('clientsSay')}</span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('testimonialsDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, i) => (
           
            <a href="https://www.google.com/search?sca_esv=f59e2138defda713&sxsrf=AE3TifMwnSadzZLCo50JpfcWeHS1MI1a9w:1755835081210&q=deshmukh+associates+vadgaon+maval&spell=1&sa=X&ved=2ahUKEwi_1bKyw52PAxWq6qACHYFjFMgQBSgAegQIHBAB&biw=1366&bih=607&dpr=1#lrd=0x3bc2af00576f9a27:0x8c2364e1889d56c,1,,,," target="_blank"><div
              key={i}
              className="bg-gray-50 p-3 rounded-xl shadow-lg border hover:border-gold transition-all h-full flex flex-col justify-between"
            >
              <div>
                <div className="flex mb-4">{renderStars(testimonial.rating)}</div>
                <blockquote className="text-lg text-charcoal mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </div>
              <cite className="text-black font-semibold">— {testimonial.author}</cite>
            </div></a>
            

          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
