import React from 'react';
import { ArrowRight } from 'lucide-react';

function CTA() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-2xl p-8 md:p-12 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/90"></div>
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
              alt="CTA background"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative">
            <div className="max-w-3xl">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
              <p className="text-xl text-white/80 mb-8">
                Join thousands of students who have already transformed their careers through our programs.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-white text-primary px-8 py-3 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CTA;