import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            <span className="bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Ready to discuss your legal needs? Contact us today for a consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-gold-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-gold-500 focus:border-transparent transition-all duration-300 bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-2 focus:ring-rose-gold-500 focus:border-transparent transition-all duration-300 resize-none bg-white dark:bg-slate-800 text-gray-900 dark:text-white"
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-rose-gold-500 to-rose-gold-600 hover:from-rose-gold-600 hover:to-rose-gold-700 text-white px-6 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Send Message
              </button>
            </form>
          </div>
          
          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-rose-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Address</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    123 Legal Plaza, MG Road<br />
                    Pune, Maharashtra 411001<br />
                    India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-rose-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">+91-98765-43210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-rose-gold-500 mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-300">info@deshmukhlaw.com</p>
                </div>
              </div>
            </div>
            
            {/* Map placeholder */}
            <div className="mt-12 bg-gray-200 dark:bg-slate-700 h-64 rounded-lg flex items-center justify-center hover:bg-gray-300 dark:hover:bg-slate-600 transition-colors duration-300">
              <p className="text-gray-500 dark:text-gray-400">Google Maps Integration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;