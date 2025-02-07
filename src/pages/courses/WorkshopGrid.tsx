import React from 'react';
import { Clock, Star, ArrowRight, Calendar } from 'lucide-react';
import { Workshop } from '../../data/workshops';

interface WorkshopGridProps {
  workshops: Workshop[];
  onViewWorkshop: (index: number) => void;
}

function WorkshopGrid({ workshops, onViewWorkshop }: WorkshopGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {workshops.map((workshop, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
        >
          <div className="relative overflow-hidden">
            <img
              src={workshop.image}
              alt={workshop.title}
              className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <span className="text-sm font-medium text-primary px-3 py-1 bg-primary/10 rounded-full transition-colors duration-300 group-hover:bg-primary/20">
                {workshop.level}
              </span>
              <div className="flex items-center transition-transform duration-300 group-hover:scale-110">
                <Star className="h-4 w-4 text-secondary fill-current" />
                <span className="ml-1 text-sm text-gray-600">{workshop.rating}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 transition-colors duration-300 group-hover:text-primary">{workshop.title}</h3>
            <p className="text-black/70 mb-4 line-clamp-2 transition-colors duration-300 group-hover:text-black/80">{workshop.description}</p>
            
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center transition-all duration-300 group-hover:text-primary">
                <Clock className="h-5 w-5 text-primary mr-2" />
                <span className="text-black/70 group-hover:text-black/80">{workshop.duration}</span>
              </div>
              <div className="flex items-center transition-all duration-300 group-hover:text-primary">
                <Calendar className="h-5 w-5 text-primary mr-2" />
                <span className="text-black/70 group-hover:text-black/80">
                  {new Date(workshop.nextDate).toLocaleDateString()}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-gray-100">
              <div className="flex items-center group/instructor">
                <img 
                  src={workshop.instructor.avatar} 
                  alt={workshop.instructor.name}
                  className="w-10 h-10 rounded-full object-cover mr-3 transition-transform duration-300 group-hover/instructor:scale-110"
                />
                <div>
                  <p className="font-medium text-black text-sm transition-colors duration-300 group-hover:text-primary">{workshop.instructor.name}</p>
                  <p className="text-xs text-black/60 transition-colors duration-300 group-hover:text-black/80">{workshop.instructor.role}</p>
                </div>
              </div>
              <button 
                onClick={() => onViewWorkshop(index)}
                className="bg-primary text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:bg-primary/90 hover:scale-105 hover:shadow-lg flex items-center text-sm group/button"
              >
                View Details 
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover/button:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WorkshopGrid;