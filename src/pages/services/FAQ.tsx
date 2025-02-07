import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What makes your training programs different?",
    answer: "Our programs combine theoretical knowledge with practical application, guided by industry experts. We focus on real-world projects and provide personalized attention to ensure each student's success."
  },
  {
    question: "How long are your training programs?",
    answer: "Program duration varies based on the course and learning path. Individual courses typically range from 8-12 weeks, while corporate training can be customized to meet your team's schedule and needs."
  },
  {
    question: "Do you offer job placement assistance?",
    answer: "Yes, we provide comprehensive career support including resume building, interview preparation, and connections with our industry partners for potential job opportunities."
  },
  {
    question: "Can I switch between individual and group training?",
    answer: "Yes, we offer flexible learning options. You can switch between training formats based on your learning preferences and schedule, subject to availability."
  },
  {
    question: "What kind of support is available during the training?",
    answer: "We provide multiple support channels including 1-on-1 mentoring, group discussions, online help desk, and access to our learning community. Our instructors are available during scheduled hours for questions and guidance."
  }
];

function FAQ() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div className="bg-gray-50 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-black/70">Find answers to common questions about our services</p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg"
            >
              <button
                className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
              >
                <span className="font-semibold text-black">{faq.question}</span>
                <div className={`transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}>
                  <ChevronDown className="h-5 w-5 text-primary" />
                </div>
              </button>
              <div 
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openFaq === index ? 'max-h-48 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-black/70">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;