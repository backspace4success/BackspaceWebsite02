import React from 'react';
import { Check } from 'lucide-react';

const serviceComparison = [
  {
    feature: "Learning Materials",
    individual: true,
    group: true,
    corporate: true
  },
  {
    feature: "Expert Instructors",
    individual: true,
    group: true,
    corporate: true
  },
  {
    feature: "1-on-1 Mentoring",
    individual: true,
    group: false,
    corporate: true
  },
  {
    feature: "Group Projects",
    individual: false,
    group: true,
    corporate: true
  },
  {
    feature: "Custom Curriculum",
    individual: false,
    group: false,
    corporate: true
  },
  {
    feature: "Progress Tracking",
    individual: true,
    group: true,
    corporate: true
  },
  {
    feature: "Career Support",
    individual: true,
    group: true,
    corporate: true
  },
  {
    feature: "Certificate",
    individual: true,
    group: true,
    corporate: true
  }
];

function ServiceComparison() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Compare Our Services</h2>
          <p className="text-xl text-black/70">Find the perfect learning solution for your needs</p>
        </div>
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold text-black">Features</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Individual Training</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Group Training</th>
                    <th className="text-center py-4 px-6 font-semibold text-black">Corporate Training</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceComparison.map((item, index) => (
                    <tr 
                      key={index} 
                      className={`border-t border-gray-100 hover:bg-gray-50 transition-colors duration-150
                        ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}
                    >
                      <td className="py-4 px-6 text-black/70">{item.feature}</td>
                      <td className="text-center py-4 px-6">
                        {item.individual ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-6">
                        {item.group ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-6">
                        {item.corporate ? (
                          <Check className="h-5 w-5 text-accent mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceComparison;