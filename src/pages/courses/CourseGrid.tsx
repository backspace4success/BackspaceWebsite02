import React from 'react';
import { Clock, Star, ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  description: string;
  level: string;
  duration: string;
  rating: number;
  image: string;
  topics: string[];
}

interface CourseGridProps {
  courses: Course[];
  onViewCourse: (index: number) => void;
}

function CourseGrid({ courses, onViewCourse }: CourseGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {courses.map((course, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
        >
          <div className="relative overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
            />
          </div>
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-primary transition-colors duration-300 hover:text-primary/80">{course.level}</span>
              <div className="flex items-center transition-transform duration-300 hover:scale-110">
                <Star className="h-4 w-4 text-secondary fill-current" />
                <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
              </div>
            </div>
            <h3 className="text-xl font-bold text-black mb-2 transition-colors duration-300 hover:text-primary">{course.title}</h3>
            <p className="text-black/70 mb-4">{course.description}</p>
            <div className="flex items-center text-sm text-black/60 mb-4 transition-all duration-300 hover:text-primary">
              <Clock className="h-4 w-4 mr-1" />
              <span>{course.duration}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-6">
              {course.topics.slice(0, 3).map((topic, i) => (
                <span 
                  key={i} 
                  className="bg-accent/10 text-primary text-sm px-3 py-1 rounded-full transition-all duration-300 hover:bg-accent/20 hover:scale-105"
                >
                  {topic}
                </span>
              ))}
            </div>
            <button 
              onClick={() => onViewCourse(index)}
              className="w-full bg-primary text-white py-2 rounded-md transition-all duration-300 transform hover:bg-primary/90 hover:scale-105 hover:shadow-lg flex items-center justify-center group"
            >
              View Course 
              <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseGrid;