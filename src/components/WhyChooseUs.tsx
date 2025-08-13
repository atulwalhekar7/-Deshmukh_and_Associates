import React from 'react';
import { CheckCircle } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "15+ Years of Experience",
      description: "Proven track record with extensive experience across multiple legal domains."
    },
    {
      title: "Transparent Legal Process",
      description: "Clear communication and transparent billing with no hidden costs or surprises."
    },
    {
      title: "High Success Rate",
      description: "Consistently achieving favorable outcomes for our clients through strategic legal approach."
    }
  ];

  return (
    <section className="py-24 bg-slate-900 dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-rose-gold-400 to-rose-gold-600 bg-clip-text text-transparent">
              Why Choose Us
            </span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto">
            Our commitment to excellence and client satisfaction sets us apart in the legal industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="text-center group animate-fade-in-up hover:bg-slate-800/50 dark:hover:bg-slate-900/50 p-6 rounded-lg transition-all duration-500"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-6 flex justify-center">
                <CheckCircle className="w-16 h-16 text-rose-gold-500 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{reason.title}</h3>
              <p className="text-gray-300 dark:text-gray-400 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;