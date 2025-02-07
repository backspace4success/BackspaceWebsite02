import React from 'react';
import { Zap, Shield, Globe, Award } from 'lucide-react';

const benefits = [
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Fast-Track Learning",
    description: "Accelerated programs designed for quick skill acquisition"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Quality Guarantee",
    description: "Industry-standard curriculum and expert instruction"
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "Global Community",
    description: "Connect with learners worldwide"
  },
  {
    icon: <Award className="h-6 w-6" />,
    title: "Certification",
    description: "Recognized certificates upon completion"
  }
];

function Benefits() {
  return (
    <div className="relative mt-24 mb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg text-primary transform transition-transform duration-300 group-hover:scale-110">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-black">{benefit.title}</h3>
                  <p className="text-sm text-black/70">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Benefits