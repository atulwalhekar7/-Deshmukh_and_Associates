import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Deshmukh & Associates provided exceptional legal support during our property dispute. Their expertise and dedication resulted in a favorable outcome.",
      author: "S. Patel",
      rating: 5
    },
    {
      quote: "Professional, reliable, and thorough. The team's attention to detail and clear communication made the entire legal process smooth and stress-free.",
      author: "R. Mehta",
      rating: 5
    }
  ];

  const renderStars = (rating: number) => {
    return Array(rating).fill(0).map((_, i) => (
      <Star key={i} className="w-5 h-5 text-rose-gold-500 fill-current animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
    ));
  };

  return (
    <section className="py-24 bg-gray-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 animate-fade-in-up border border-transparent hover:border-rose-gold-200 dark:hover:border-rose-gold-400"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              <blockquote className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              <cite className="text-slate-900 dark:text-white font-semibold">— {testimonial.author}</cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;