import React from 'react';
import { Laptop, Video, Layout, Book, Target, MessageSquare } from 'lucide-react';

const additionalServices = [
  {
    icon: <Laptop className="h-6 w-6" />,
    title: "One-on-One Mentoring",
    description: "Personal guidance from industry experts"
  },
  {
    icon: <Video className="h-6 w-6" />,
    title: "Online Workshops",
    description: "Interactive live sessions on specific topics"
  },
  {
    icon: <Layout className="h-6 w-6" />,
    title: "Project Support",
    description: "Assistance with personal coding projects"
  },
  {
    icon: <Book className="h-6 w-6" />,
    title: "Study Materials",
    description: "Comprehensive learning resources"
  },
  {
    icon: <Target className="h-6 w-6" />,
    title: "Career Guidance",
    description: "Professional development support"
  },
  {
    icon: <MessageSquare className="h-6 w-6" />,
    title: "Community Access",
    description: "Join our active learning community"
  }
];

function AdditionalServices() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Additional Services</h2>
          <p className="text-xl text-black/70">Supporting your learning journey every step of the way</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4 transform transition-transform duration-300 hover:scale-110">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-black mb-2">{service.title}</h3>
                  <p className="text-black/70">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdditionalServices