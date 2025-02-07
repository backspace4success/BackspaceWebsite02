import React from 'react';

interface FiltersProps {
  filters: {
    level: string;
    category: string;
    duration: string;
  };
  setFilters: (filters: any) => void;
}

function CourseFilters({ filters, setFilters }: FiltersProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <select 
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={filters.level}
          onChange={(e) => setFilters(prev => ({ ...prev, level: e.target.value }))}
        >
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        
        <select 
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={filters.category}
          onChange={(e) => setFilters(prev => ({ ...prev, category: e.target.value }))}
        >
          <option>All Categories</option>
          <option>Programming Languages</option>
          <option>Web Development</option>
          <option>Data Science</option>
          <option>Computer Science</option>
          <option>Networking</option>
          <option>Cybersecurity</option>
        </select>
        
        <select 
          className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          value={filters.duration}
          onChange={(e) => setFilters(prev => ({ ...prev, duration: e.target.value }))}
        >
          <option>Any</option>
          <option>0-4 weeks</option>
          <option>5-8 weeks</option>
          <option>9+ weeks</option>
        </select>

        <button 
          onClick={() => setFilters({ level: 'All Levels', category: 'All Categories', duration: 'Any' })}
          className="bg-primary text-white rounded-md py-2 px-4 hover:bg-primary/90 transition"
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}

export default CourseFilters;