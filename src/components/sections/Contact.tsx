import React, { useState } from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import emailjs from 'emailjs-com'

const Contact: React.FC = () => {
  const { t } = useTranslation();

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
    emailjs.send(
      'service_0mcts9s',    
      'template_lu098gq',     
      formData,
      'h9MsXYabq8Hq16INN'        
    )
      .then(() => {
        alert(t('language') === 'mr' ? 'तुमच्या संदेशाबद्दल धन्यवाद. आम्ही लवकरच तुमच्याशी संपर्क साधू!' : 'Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send message. Please try again later.');
      });
  };
  
 


  return (
    <section id="contact" className="py-24 bg-charcoal transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-gold">
              {t('getInTouch')}
            </span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('contactDesc')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">
                  {t('name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={t('yourName')}
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  {t('email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={t('emailAddresss')}
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 bg-white text-black"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                  {t('message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder={t('message')}
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold focus:border-transparent transition-all duration-300 resize-none bg-white text-black"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold hover:bg-gold-600 text-black px-6 py-4 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                {t('sendMessage')}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="animate-fade-in-right">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <a href="https://www.google.com/maps/dir//Mhaskar+Complex,+Patil+Wada+Rd,+near+Talathi+Office,+Dhore+Wada,+Vadgaon,+Maharashtra+412106/@18.7394903,73.5571633,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3bc2af00576f9a27:0x8c2364e1889d56c!2m2!1d73.639565!2d18.7395083?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D" target="_blank"><MapPin className="w-6 h-6 text-gold mt-1" /></a>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('address')}</h3>
                  <p className="text-white">
                    {t('addressText').split('\n').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < t('addressText').split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('phone')}</h3>
                  <p className="text-white">{t('phoneNumber')}</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{t('email')}</h3>
                  <p className="text-white">{t('emailAddress')}</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            {/* <div className="mt-12 bg-gray-200 h-64 rounded-lg flex items-center justify-center hover:bg-gray-300 transition-colors duration-300">
              <p className="text-gray-500">Google Maps Integration</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;