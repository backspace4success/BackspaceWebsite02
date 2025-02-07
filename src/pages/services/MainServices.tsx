import React from 'react';
import { BookOpen, Users, Briefcase, Code2 } from 'lucide-react';

const mainServices = [
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Structured Learning Programs",
    description: "Comprehensive courses designed to take you from beginner to professional with clear learning paths and milestones.",
    features: [
      "Personalized learning tracks",
      "Progress monitoring",
      "Interactive assignments",
      "Regular assessments"
    ]
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Group Training",
    description: "Collaborative learning sessions where students work together on projects and share knowledge under expert guidance.",
    features: [
      "Team-based projects",
      "Peer learning opportunities",
      "Group discussions",
      "Collaborative problem solving"
    ]
  },
  {
    icon: <Briefcase className="h-8 w-8" />,
    title: "Corporate Training",
    description: "Customized training programs for companies looking to upskill their workforce in technology and programming.",
    features: [
      "Customized curriculum",
      "On-site training",
      "Team assessments",
      "Progress reporting"
    ]
  }
];

function MainServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainServices.map((service, index) => (
          <div 
            key={index} 
            className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="p-8">
              <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mb-6 text-primary transform transition-all duration-300 group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-black mb-4">{service.title}</h3>
              <p className="text-black/70 mb-6">{service.description}</p>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-black/70">
                    <Code2 className="h-5 w-5 text-accent mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all duration-300 transform hover:scale-[1.02]">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainServices