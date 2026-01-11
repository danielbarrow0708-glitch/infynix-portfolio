import React from 'react';

interface Feature {
  title: string;
  description: string;
  icon?: string;
  image?: string;
}

interface FeaturesProps {
  title: string;
  intro?: string;
  features: Feature[];
  columns?: 1 | 2 | 3 | 4;
  backgroundColor?: 'white' | 'gray' | 'blue';
  showDivider?: boolean;
}

const Features: React.FC<FeaturesProps> = ({ 
  title, 
  intro, 
  features, 
  columns = 3,
  backgroundColor = 'white',
  showDivider = true 
}) => {
  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-gray-50'
  };

  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  if (!title && !intro && features.length === 0) return null;

  return (
    <>
      <section className={`py-16 lg:py-24 ${bgClasses[backgroundColor]}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {title}
            </h2>
            {intro && (
              <div className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
                {intro}
              </div>
            )}
          </div>

          {/* Features Grid */}
          {features.length > 0 && (
            <div className={`grid ${gridClasses[columns]} gap-6 lg:gap-8`}>
              {features.map((feature, index) => (
                <div key={index} className="text-center group bg-white rounded-lg p-6 border border-gray-100 hover:border-gray-200 hover:shadow-professional transition-all duration-200">
                  {/* Icon or Image */}
                  {feature.icon && (
                    <div className="w-14 h-14 mx-auto mb-5 bg-gray-50 rounded-lg flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <div className="text-gray-700 text-xl" dangerouslySetInnerHTML={{ __html: feature.icon }} />
                    </div>
                  )}
                  
                  {feature.image && (
                    <div className="mb-5">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-16 h-16 mx-auto rounded-lg object-cover"
                      />
                    </div>
                  )}

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Divider */}
      {showDivider && (
        <div className="border-t border-gray-200"></div>
      )}
    </>
  );
};

export default Features;

