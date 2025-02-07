import React from 'react';

function TrustSignals() {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-black/60">Trusted by leading companies worldwide</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {[
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
              alt: "Google"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
              alt: "IBM"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
              alt: "Microsoft"
            },
            {
              src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
              alt: "AWS"
            }
          ].map((logo, index) => (
            <div 
              key={index}
              className="transition-all duration-300 transform hover:scale-110 hover:opacity-100 opacity-50 cursor-pointer"
            >
              <img src={logo.src} alt={logo.alt} className="h-8" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TrustSignals;