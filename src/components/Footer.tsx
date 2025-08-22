import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 dark:bg-black text-white py-12 transition-colors duration-500" id='footer'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-rose-gold-400 to-rose-gold-600 bg-clip-text text-transparent">
                Deshmukh
              </span>
              <span className="text-white"> & Associates</span>
            </h3>
            <p className="text-gray-300 dark:text-gray-400 leading-relaxed">
              Providing exceptional legal services with integrity, professionalism, 
              and a commitment to our clients' success for over 15 years.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Home</a></li>
              <li><a href="#services" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Services</a></li>
              <li><a href="#team" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Team</a></li>
              <li><a href="#contact" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 dark:text-gray-400 hover:text-rose-gold-400 transition-colors duration-300">Disclaimer</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300 dark:text-gray-400">
            © 2025 Deshmukh & Associates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;