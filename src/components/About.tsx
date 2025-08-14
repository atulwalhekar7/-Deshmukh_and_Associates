import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <img
              src="https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
              alt="Law firm office"
              className="w-full h-96 object-cover rounded-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
            />
          </div>
          <div className="animate-fade-in-right">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 bg-clip-text text-transparent">
              About us
              </span>
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Deshmukh & Associates is a full-service law firm based in Pune, with over 15 years of 
              experience in civil, criminal, corporate, and property law. We are dedicated to providing 
              exceptional legal services with integrity, professionalism, and a deep commitment to our 
              clients' success.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
              Our team combines extensive legal expertise with a personalized approach, ensuring that 
              each client receives the attention and representation they deserve. We pride ourselves on 
              building lasting relationships based on trust, transparency, and results.
            </p>
            <button className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 hover:from-rose-gold-600 hover:to-rose-gold-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;