import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const AgencyHeader: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0 });
  const location = useLocation();
  const headerRef = useRef<HTMLElement>(null);

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Home', href: '/' },
    { 
      name: 'Services', 
      href: '#',
      submenu: [
        {
          category: 'CUSTOM SOFTWARE DEVELOPMENT',
          items: [
            { name: 'Custom Software Development', href: '/custom-software-development', icon: '💻' },
            { name: 'SaaS Development', href: '/saas-development', icon: '☁️' },
            { name: 'Fintech Software Development', href: '/fintech-software-development', icon: '💰' },
            { name: 'Database Development', href: '/database-development', icon: '🗄️' },
          ]
        },
        {
          category: 'AI ( LLM ) DEVELOPMENT SERVICES',
          items: [
            { name: 'AI Development Services', href: '/ai-development', icon: '🧠' },
            { name: 'ChatGPT App Development', href: '/ai-development', icon: '🤖' },
            { name: 'Generative AI Development', href: '/ai-development', icon: '✨' },
            { name: 'Generative AI Consulting', href: '/ai-development', icon: '💡' },
          ]
        },
        {
          category: 'MOBILE APP DEVELOPMENT & WEBSITE DESIGN',
          items: [
            { name: 'Mobile App Development', href: '/mobile-app-development', icon: '📱' },
            { name: 'Web Development', href: '/web-development', icon: '🌐' },
            { name: 'UI/UX Design', href: '/ui-ux', icon: '🎨' },
          ]
        }
      ]
    },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Our Tech', href: '/our-tech' },
    { 
      name: 'About', 
      href: '#',
      submenu: [
        {
          category: 'COMPANY INFORMATION',
          items: [
            { name: 'About Dragon Agency', href: '/about', icon: '🏢' },
            { name: 'Our Mission & Vision', href: '/mission-vision', icon: '🎯' },
            { name: 'Our Team', href: '/team', icon: '👥' },
            { name: 'Company Values', href: '/company-values', icon: '💎' },
          ]
        },
        {
          category: 'PROCESS & METHODOLOGY',
          items: [
            { name: 'Development Process', href: '/development-process', icon: '⚙️' },
            { name: 'Design Process', href: '/about', icon: '🎨' },
            { name: 'Quality Assurance', href: '/about', icon: '✅' },
            { name: 'Project Management', href: '/about', icon: '📋' },
          ]
        },
        {
          category: 'AWARDS & RECOGNITIONS',
          items: [
            { name: 'Industry Awards', href: '/industry-awards', icon: '🏆' },
            { name: 'Client Testimonials', href: '/about#testimonials', icon: '💬' },
            { name: 'Success Stories', href: '/about', icon: '📈' },
            { name: 'Partnerships', href: '/about', icon: '🤝' },
          ]
        }
      ]
    },
    { name: 'Contact', href: '/contact' },
  ];

  const handleDropdownEnter = (name: string) => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(name);
  };

  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 150); // 150ms delay before hiding
    setDropdownTimeout(timeout);
  };

  // Calculate dropdown position when it becomes active
  useEffect(() => {
    if (activeDropdown && headerRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      setDropdownPosition({ top: headerRect.bottom + 8 }); 
    }
  }, [activeDropdown]);

  return (
    <nav ref={headerRef} className="bg-professional-dark text-white sticky top-0 z-50 shadow-professional border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <img
                src="/img/logo/logo.png"
                alt="Dragon Agency"
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
            <span className="text-white text-2xl font-bold ml-2">Dragon Agency</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <div 
                key={item.name} 
                className="relative"
                onMouseEnter={() => item.submenu && handleDropdownEnter(item.name)}
                onMouseLeave={handleDropdownLeave}
              >
                {item.submenu ? (
                  <>
                    <button className="text-white hover:text-gray-200 px-4 py-2 text-sm font-medium transition-all duration-200 flex items-center rounded-md hover:bg-white/5">
                      {item.name}
                      <svg className="ml-1 w-4 h-4 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* Mega Dropdown */}
                    {activeDropdown === item.name && (
                      <div 
                        className="fixed left-1/2 transform -translate-x-1/2 w-[900px] max-w-[90vw] bg-professional-dark shadow-professional-lg opacity-100 visible transition-all duration-200 rounded-lg border border-white/10 backdrop-blur-xl z-50"
                        style={{ top: `${dropdownPosition.top}px` }}
                        onMouseEnter={() => handleDropdownEnter(item.name)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="p-8">
                          <div className="grid grid-cols-3 gap-8">
                            {item.submenu.map((category, categoryIndex) => (
                              <div key={categoryIndex}>
                                <h3 className="text-gray-400 font-semibold text-xs uppercase mb-6 tracking-wider border-b border-white/10 pb-2">
                                  {category.category}
                                </h3>
                                <div className="space-y-2">
                                  {category.items.map((subItem, itemIndex) => (
                                    <Link
                                      key={itemIndex}
                                      to={subItem.href}
                                      className="flex items-center space-x-3 p-2.5 rounded-md hover:bg-white/5 transition-all duration-200 group"
                                    >
                                      <span className="text-lg group-hover:scale-105 transition-transform duration-200">{subItem.icon}</span>
                                      <span className="text-gray-300 group-hover:text-white text-sm font-normal">
                                        {subItem.name}
                                      </span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                            
                            {/* CTA Box */}
                            <div className="bg-professional-dark-light rounded-lg p-6 text-white border border-white/10">
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                  {item.name === 'Services' ? (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                  ) : (
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                  )}
                                </div>
                                <h4 className="font-bold text-lg mb-3">
                                  {item.name === 'Services' 
                                    ? 'Get a FREE Consultation From Our Experts'
                                    : 'Learn More About Dragon Agency'
                                  }
                                </h4>
                                <p className="text-blue-100 text-sm mb-4">
                                  {item.name === 'Services'
                                    ? 'AI • Blockchain • Full-Stack Development'
                                    : 'Discover our story, team, and commitment to excellence'
                                  }
                                </p>
                                <Link
                                  to={item.name === 'Services' ? '/contact' : '/about'}
                                  className="inline-block bg-white text-professional-dark px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-all duration-200 mt-4 shadow-professional hover:shadow-professional-lg"
                                >
                                  {item.name === 'Services' ? 'Start Your Project' : 'Explore About Us'}
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-200 rounded-md ${
                      isActive(item.href)
                        ? 'text-white bg-white/10 border border-white/20'
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            
            {/* CTA Button */}
            <Link
              to="/contact"
              className="bg-white text-professional-dark px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-gray-100 transition-all duration-200 shadow-professional hover:shadow-professional-lg"
            >
              Start Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-blue-200 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.submenu ? (
                    <>
                      <div className="text-gray-700 font-medium px-3 py-2 text-sm">
                        {item.name}
                      </div>
                      {item.submenu.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="ml-4">
                          <div className="text-blue-600 font-bold text-xs uppercase px-3 py-1">
                            {category.category}
                          </div>
                          {category.items.map((subItem, itemIndex) => (
                            <Link
                              key={itemIndex}
                              to={subItem.href}
                              className="block pl-6 pr-3 py-2 text-sm text-gray-600 hover:text-blue-600"
                              onClick={() => setIsMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link
                to="/contact"
                className="block w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors mx-3 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default AgencyHeader;

