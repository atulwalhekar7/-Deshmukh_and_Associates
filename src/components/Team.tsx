import React from 'react';

const Team = () => {
  const teamMembers = [
    {
      name: "Adv. Rajesh Deshmukh",
      role: "Senior Partner",
      specialization: "Civil & Property Law",
      image: "https://images.pexels.com/photos/5668772/pexels-photo-5668772.jpeg"
    },
    {
      name: "Adv. Priya Deshmukh",
      role: "Partner",
      specialization: "Criminal & Family Law",
      image: "https://images.pexels.com/photos/5668473/pexels-photo-5668473.jpeg"
    },
    {
      name: "Adv. Amit Sharma",
      role: "Associate",
      specialization: "Corporate & Commercial Law",
      image: "https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg"
    }
  ];

  return (
    <section id="team" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 bg-clip-text text-transparent">
              Our Legal Team
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Meet our experienced attorneys dedicated to providing exceptional legal representation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-2 animate-fade-in-up border border-transparent hover:border-rose-gold-200 dark:hover:border-rose-gold-400"
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
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-rose-gold-500 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{member.specialization}</p>
                <button className="mt-4 text-slate-900 dark:text-white font-semibold hover:text-rose-gold-500 transition-all duration-300 group-hover:translate-x-2">
                  View Full Profile →
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