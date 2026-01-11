import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderBannerProps {
  title: string;
  intro?: string;
  image?: string;
  imageAlt?: string;
  category?: string;
}

const HeaderBanner: React.FC<HeaderBannerProps> = ({ 
  title, 
  intro, 
  image, 
  imageAlt = "Header illustration",
  category
}) => {
  return (
    <section className="relative bg-professional-dark text-white py-16 lg:py-20 overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      {/* Background Image with subtle overlay */}
      {image && (
        <div className="absolute inset-0 opacity-[0.03]">
          <img
            src={image}
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center lg:text-left">
            {/* Category Label */}
            {category && (
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <span className="text-gray-400 text-sm uppercase tracking-wider font-semibold">
                  {category}
                </span>
              </div>
            )}

            {/* Star Rating - More subtle */}
            <div className="flex items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>
              <span className="text-gray-300 text-sm">4.9 (200+ reviews)</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              {title}
            </h1>

            {intro && (
              <div className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl font-light">
                {intro}
              </div>
            )}

            <Link
              to="/contact"
              className="inline-block bg-white text-professional-dark px-8 py-3.5 rounded-md text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-professional-lg hover:shadow-xl"
            >
              Talk to a Software Expert
            </Link>

            {/* Testimonial - More professional */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 bg-professional-dark-light/50 rounded-lg p-5 backdrop-blur-sm border border-white/10">
              <div className="flex -space-x-2">
                <img
                  src="/img/avatars/arthur.jpg"
                  alt="Client testimonials"
                  className="w-14 h-14 rounded-full border-2 border-white/20 object-cover"
                />
              </div>
              <div className="text-center sm:text-left">
                <p className="text-gray-300 text-sm leading-relaxed">
                  Over 200+ software projects delivered successfully across web, mobile, AI, and blockchain.
                </p>
                <Link to="/portfolio" className="text-white hover:text-gray-200 transition-colors text-sm font-medium mt-1 inline-block">
                  View our portfolio →
                </Link>
              </div>
            </div>
          </div>

          {/* Image */}
          {image && (
            <div className="flex-1 lg:order-last">
              <img
                src={image}
                alt={imageAlt}
                className="w-full max-w-md mx-auto lg:max-w-lg rounded-lg shadow-professional-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeaderBanner;

