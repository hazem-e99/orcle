import React from 'react';
import HeroSection from '../home/HeroSection';
import ServicesSection from '../home/ServicesSection';
import TestimonialsSection from '../home/TestimonialsSection';
import IndustriesSection from '../home/IndustriesSection';
import SolutionsSection from '../home/SolutionsSection';
const HomePage = () => {
  return <div className="w-full">
      <HeroSection />
      <ServicesSection />
      <TestimonialsSection />
      <IndustriesSection />
      <SolutionsSection />
    </div>;
};
export default HomePage;