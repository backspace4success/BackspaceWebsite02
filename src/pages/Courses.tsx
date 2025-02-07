import React, { useState } from 'react';
import CourseFilters from './courses/CourseFilters';
import CourseGrid from './courses/CourseGrid';
import WorkshopGrid from './courses/WorkshopGrid';
import { courses } from '../data/courses';
import { workshops } from '../data/workshops';

interface CoursesProps {
  onViewCourse: (courseId: number) => void;
  onViewWorkshop: (workshopId: number) => void;
}

interface Filters {
  level: string;
  category: string;
  duration: string;
}

function Courses({ onViewCourse, onViewWorkshop }: CoursesProps) {
  const [activeTab, setActiveTab] = useState<'courses' | 'workshops'>('courses');
  const [filters, setFilters] = useState<Filters>({
    level: 'All Levels',
    category: 'All Categories',
    duration: 'Any'
  });

  const filterItems = (items: typeof courses) => {
    return items.filter(item => {
      const matchesLevel = filters.level === 'All Levels' || item.level === filters.level;
      
      const itemCategories = new Set(item.topics.map(topic => {
        if (topic.includes('Python')) return 'Programming Languages';
        if (topic.includes('Web') || topic.includes('Frontend') || topic.includes('Backend')) return 'Web Development';
        if (topic.includes('Data')) return 'Data Science';
        if (topic.includes('Algorithm') || topic.includes('Structure')) return 'Computer Science';
        if (topic.includes('Network')) return 'Networking';
        if (topic.includes('Security')) return 'Cybersecurity';
        return 'Other';
      }));
      const matchesCategory = filters.category === 'All Categories' || itemCategories.has(filters.category);

      const weeksDuration = parseInt(item.duration);
      const matchesDuration = filters.duration === 'Any' ||
        (filters.duration === '0-4 weeks' && weeksDuration <= 4) ||
        (filters.duration === '5-8 weeks' && weeksDuration > 4 && weeksDuration <= 8) ||
        (filters.duration === '9+ weeks' && weeksDuration > 8);

      return matchesLevel && matchesCategory && matchesDuration;
    });
  };

  const filteredCourses = filterItems(courses);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Courses Hero */}
      <div className="bg-primary py-20 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">
              {activeTab === 'courses' ? 'Our Courses' : 'Live Workshops'}
            </h1>
            <p className="text-xl text-white/80">
              {activeTab === 'courses' 
                ? 'Choose from our comprehensive selection of programming courses'
                : 'Join our interactive live workshops led by industry experts'}
            </p>
          </div>
        </div>
      </div>

      {/* Tab Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 -mt-8">
        <div className="bg-white rounded-lg shadow-sm p-4 flex space-x-4">
          <button
            onClick={() => setActiveTab('courses')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
              activeTab === 'courses'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Regular Courses
          </button>
          <button
            onClick={() => setActiveTab('workshops')}
            className={`flex-1 py-3 px-6 rounded-lg font-medium transition ${
              activeTab === 'workshops'
                ? 'bg-primary text-white'
                : 'bg-gray-100 text-black hover:bg-gray-200'
            }`}
          >
            Workshops
          </button>
        </div>
      </div>

      {/* Course Filters - Only show for courses */}
      {activeTab === 'courses' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 py-8">
          <CourseFilters filters={filters} setFilters={setFilters} />
          <div className="mb-8">
            <p className="text-black/70">
              Showing {filteredCourses.length} courses
            </p>
          </div>
        </div>
      )}

      {/* Course/Workshop Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 pb-24">
        {activeTab === 'courses' ? (
          filteredCourses.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-black mb-2">No courses found</h3>
              <p className="text-black/70">Try adjusting your filters to find more courses</p>
            </div>
          ) : (
            <CourseGrid courses={filteredCourses} onViewCourse={onViewCourse} />
          )
        ) : (
          <WorkshopGrid workshops={workshops} onViewWorkshop={onViewWorkshop} />
        )}
      </div>
    </div>
  );
}

export default Courses;