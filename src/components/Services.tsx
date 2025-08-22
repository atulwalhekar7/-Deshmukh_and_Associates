import React from 'react';
import { Scale, Building, Home, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scale className="w-12 h-12 text-rose-gold-500" />,
      title: "Civil Law",
      description: "Comprehensive civil litigation services including contract disputes and tort claims."
    },
    {
      icon: <Scale className="w-12 h-12 text-rose-gold-500" />,
      title: "Criminal Law",
      description: "Expert criminal defense representation for all types of criminal charges."
    },
    {
      icon: <Building className="w-12 h-12 text-rose-gold-500" />,
      title: "Corporate Advisory",
      description: "Strategic legal counsel for businesses, mergers, acquisitions, and compliance."
    },
    {
      icon: <Home className="w-12 h-12 text-rose-gold-500" />,
      title: "Property Disputes",
      description: "Specialized expertise in property law, real estate transactions, and disputes."
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-slate-800 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 bg-clip-text text-transparent">
              Practice Areas
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            We provide comprehensive legal services across multiple practice areas with unparalleled expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 transform animate-fade-in-up border border-transparent hover:border-rose-gold-200 dark:hover:border-rose-gold-400"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{service.description}</p>
              <button className="mt-6 text-rose-gold-500 font-semibold hover:text-rose-gold-600 transition-all duration-300 group-hover:translate-x-2">
                read More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;