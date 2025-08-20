import React from 'react';
import CarouselBanner from '../components/ui/CarouselBanner';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import Team from '../components/sections/Team';
import Testimonials from '../components/sections/Testimonials';
import Contact from '../components/sections/Contact'; 
import Gallery from '../components/sections/Gallery';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <CarouselBanner />
      <About />
      <Services />
      <WhyChooseUs />
      <Team />
      <Testimonials />
      <Contact />
      <Gallery />
    </div>
  );
};

export default HomePage;