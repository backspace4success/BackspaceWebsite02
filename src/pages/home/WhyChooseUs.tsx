import React from 'react';
import { GraduationCap, Target, Users, Clock, Award, Shield } from 'lucide-react';

function WhyChooseUs() {
  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Why Choose Backspace?</h2>
          <p className="text-xl text-black/70">We provide the best learning experience for our students</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <GraduationCap className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Expert Instructors</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              Learn from industry professionals with years of real-world experience.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Target className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Practical Learning</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              Hands-on projects and real-world applications to build your portfolio.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Users className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Community Support</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              Join a community of learners and get help when you need it.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Clock className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Flexible Learning</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              Learn at your own pace with lifetime access to course content.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Award className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Certifications</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              Earn industry-recognized certificates upon course completion.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl group">
            <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
              <Shield className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-12" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 transition-colors duration-300 group-hover:text-primary">Money-Back Guarantee</h3>
            <p className="text-black/70 transition-colors duration-300 group-hover:text-black/80">
              30-day money-back guarantee if you're not satisfied.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;