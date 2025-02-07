import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

function DemoVideo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const videoId = 'pM8yfkQ-LuM';
  const thumbnailUrl = 'https://github.com/anwar211944/BackspaceWebsite/blob/main/img/WorkshopCover01.png?raw=true';

  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">See Backspace in Action</h2>
          <p className="text-xl text-black/70">Watch how our platform transforms the learning experience</p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div 
            className="relative rounded-xl overflow-hidden shadow-xl cursor-pointer group transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="aspect-video relative">
              <img 
                src={thumbnailUrl}
                alt="Course Preview"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-300 group-hover:bg-black/30">
                <div className="bg-white/90 p-4 rounded-full transition-all duration-300 transform group-hover:scale-110 group-hover:bg-white">
                  <Play className="h-8 w-8 text-primary fill-current" />
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              {
                title: "Interactive Learning",
                description: "Engage with hands-on exercises and real-time feedback"
              },
              {
                title: "Expert Support",
                description: "Get help from industry professionals whenever you need"
              },
              {
                title: "Project-Based",
                description: "Build a portfolio with real-world projects"
              }
            ].map((highlight, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:bg-primary/5"
              >
                <h3 className="text-lg font-semibold text-black mb-2 transition-colors duration-300 group-hover:text-primary">
                  {highlight.title}
                </h3>
                <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {isModalOpen && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm">
            <div className="relative w-full max-w-6xl mx-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute -top-12 right-0 text-white transition-all duration-300 transform hover:scale-110 hover:rotate-90"
                aria-label="Close video"
              >
                <X className="h-8 w-8" />
              </button>
              <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="Course Preview Video"
                  className="absolute top-0 left-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default DemoVideo;