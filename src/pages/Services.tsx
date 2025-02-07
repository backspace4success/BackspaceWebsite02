import React from 'react';
import Hero from './services/Hero';
import Benefits from './services/Benefits';
import MainServices from './services/MainServices';
import AdditionalServices from './services/AdditionalServices';
import ServiceComparison from './services/ServiceComparison';
import FAQ from './services/FAQ';
import CTA from './services/CTA';

const Services = () => {
  return (
    <div className="bg-white">
      <Hero />
      <Benefits />
      <MainServices />
      <AdditionalServices />
      <ServiceComparison />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Services;