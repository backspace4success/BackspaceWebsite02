import React from 'react';

function Hero() {
  return (
    <div className="relative bg-primary overflow-hidden">
           {/* Hero Section */}
      <div className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Our Services</h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Comprehensive learning solutions to help you achieve your programming goals
          </p>
        </div>
      </div>

    </div>
  );
}

export default Hero;