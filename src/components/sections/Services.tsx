import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Scale, Building, Home, Gavel} from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslation';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ForestIcon from '@mui/icons-material/Forest';
import LaptopIcon from '@mui/icons-material/Laptop';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
//


const Services: React.FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const services = [
    {
      icon: <Scale className="w-12 h-12 text-golden-500" />,
      title: t('civilLaw'),
      description: t('civilDesc'),
      path: "/Deshmukh&Associates/civil-law"
    },
    {
      icon: <Gavel className="w-12 h-12 text-golden-500" />,
      title: t('criminalLaw'),
      description: t('criminalLawDesc'),
      path: "/Deshmukh&Associates/criminal-law"
    },
    {
      icon: <Building className="w-12 h-12 text-golden-500" />,
      title: t('corporateLaw'),
      description: t('corporateLawDesc'),
      path: "/Deshmukh&Associates/corporate-law"
    },
    {
      icon: <Home className="w-12 h-12 text-golden-500" />,
      title: t('propertyLaw'),
      description: t('propertyDesc'),
      path: "/Deshmukh&Associates/property-law"
    },
    {
      icon: <LocalDiningIcon className="w-12 h-12 text-golden-500" />,
      title: t('consumerLaw'),
      description: t('consumerDesc'),
      path: "/Deshmukh&Associates/consumer-law"
    },
    {
      icon: <LaptopIcon className="w-12 h-12 text-golden-500" />,
      title: t('corporateandcommercialLaw'),
      description: t('corporateandcommercialLawDesc'),
      path: "/Deshmukh&Associates/corporateandcommercial-Law"
    },
    {
      icon: <ForestIcon className="w-12 h-12 text-golden-500" />,
      title: t('environmentLaw'),
      description: t('environmentLawDesc'),
      path: "/Deshmukh&Associates/environment-Law"
    },
    {
      icon: <LocalShippingIcon className="w-12 h-12 text-golden-500" />,
      title: t('insuranceLaw'),
      description: t('insuranceLawDesc'),
      path: "/Deshmukh&Associates/insurance-Law"
    }
  ];

  //];

  return (
    <section id="services" className="py-24 bg-charcoal transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="text-gold">
              {t('practiceAreasTitle')}
            </span>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto">
            {t('practiceAreasDesc')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group hover:-translate-y-4 transform animate-fade-in-up border border-transparent hover:border-gold cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => { window.scrollTo(0,0); navigate(service.path)}}
            >
              <div className="mb-6 group-hover:scale-125 transition-transform duration-500 group-hover:rotate-12">
                {React.cloneElement(service.icon, { className: "w-12 h-12 text-gold" })}
              </div>
              <h3 className="text-xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-charcoal leading-relaxed mb-6">{service.description}</p>
              <button onClick={() => window.scrollTo(0,0)} className="text-gold font-bold hover:text-gold-600 transition-all duration-300 group-hover:translate-x-2">
                {t('learnMore')} →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;