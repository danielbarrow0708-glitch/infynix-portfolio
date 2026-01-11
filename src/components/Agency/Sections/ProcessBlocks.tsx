import React from 'react';
import { Link } from 'react-router-dom';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
  icon?: string;
}

interface ProcessBlocksProps {
  title: string;
  intro?: string;
  steps: ProcessStep[];
  backgroundColor?: 'white' | 'gray' | 'blue';
}

const ProcessBlocks: React.FC<ProcessBlocksProps> = ({ 
  title, 
  intro, 
  steps,
  backgroundColor = 'gray'
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50'
  };

  return (
    <section className={`py-16 lg:py-24 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
          {intro && (
            <div className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {intro}
            </div>
          )}
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-blue-200 transform -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                  {/* Step Number */}
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>

                  {/* Icon */}
                  {step.icon && (
                    <div className="w-12 h-12 mx-auto mb-4 text-blue-600">
                      <div dangerouslySetInnerHTML={{ __html: step.icon }} />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Mobile Connection Arrow */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6 mb-2">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg"
          >
            Start Your Project
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessBlocks;

