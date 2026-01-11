import React from 'react';
import { Link } from 'react-router-dom';

const AgencyFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-professional-dark text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img
                className="h-16 w-auto"
                src="/img/logo/logo.png"
                alt="Dragon Agency"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premier software development agency specializing in full-stack web and mobile development, AI solutions, and blockchain technology. We build scalable, innovative software that drives business growth.
            </p>
            
            {/* Tech Stack Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-md border border-white/10">
                Full-Stack
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-md border border-white/10">
                AI & ML
              </span>
              <span className="px-3 py-1 bg-white/10 text-gray-300 text-xs font-medium rounded-md border border-white/10">
                Blockchain
              </span>
            </div>
            
            <div className="flex space-x-4">
              <span className="text-yellow-400 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
                <span className="ml-2 text-sm text-gray-300">4.9 (200+ reviews)</span>
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-5 text-white border-b border-white/10 pb-2">Software Development</h3>
            <ul className="space-y-2.5">
              <li><Link to="/ai-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🤖</span>
                AI & Machine Learning
              </Link></li>
              <li><Link to="/web-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🌐</span>
                Full-Stack Web
              </Link></li>
              <li><Link to="/mobile-app-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">📱</span>
                Mobile App Development
              </Link></li>
              <li><Link to="/custom-software-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">💻</span>
                Custom Software Solutions
              </Link></li>
              <li><Link to="/saas-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">☁️</span>
                SaaS Development
              </Link></li>
              <li><Link to="/ui-ux" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🎨</span>
                UI/UX Design
              </Link></li>
            </ul>
          </div>

          {/* AI & Blockchain */}
          <div>
            <h3 className="text-base font-semibold mb-5 text-white border-b border-white/10 pb-2">AI & Blockchain</h3>
            <ul className="space-y-2.5">
              <li><Link to="/ai-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🤖</span>
                AI Development
              </Link></li>
              <li><Link to="/fintech-software-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">💰</span>
                Fintech Development
              </Link></li>
              <li><Link to="/database-development" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🗄️</span>
                Database Development
              </Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-base font-semibold mb-5 text-white border-b border-white/10 pb-2">Company</h3>
            <ul className="space-y-2.5">
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">📞</span>
                Contact Us
              </Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🎯</span>
                Our Portfolio
              </Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors flex items-center group text-sm">
                <span className="mr-2 text-gray-500 group-hover:text-gray-300 transition-colors">🏢</span>
                About Us
              </Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4">
              <p className="text-gray-400 text-sm">
                © {currentYear} Dragon Agency. All rights reserved.
              </p>
              <span className="text-gray-600">•</span>
              <p className="text-gray-400 text-sm">
                AI • Blockchain • Full-Stack Development
              </p>
            </div>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">200+ Projects Delivered</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gray-500 rounded-full"></div>
                <span className="text-gray-400 text-sm">24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AgencyFooter;

