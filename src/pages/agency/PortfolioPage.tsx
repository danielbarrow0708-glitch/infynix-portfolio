import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeaderBanner } from '../../components/Agency/Sections';
import { submitContactForm, ContactFormData } from '../../utils/formUtils';

const PortfolioPage: React.FC = () => {
  // Portfolio form state
  const [portfolioFormData, setPortfolioFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isPortfolioSubmitting, setIsPortfolioSubmitting] = useState(false);
  const [portfolioSubmitStatus, setPortfolioSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handlePortfolioFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsPortfolioSubmitting(true);
    setPortfolioSubmitStatus('idle');

    try {
      const result = await submitContactForm(portfolioFormData as ContactFormData);
      
      if (result.success) {
        setPortfolioSubmitStatus('success');
        
        // Reset form after successful submission
        setPortfolioFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        setPortfolioSubmitStatus('error');
      }
      
      // Show status message
      setTimeout(() => {
        setPortfolioSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Portfolio form submission error:', error);
      setPortfolioSubmitStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setPortfolioSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsPortfolioSubmitting(false);
    }
  };

  const handlePortfolioInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setPortfolioFormData({
      ...portfolioFormData,
      [e.target.name]: e.target.value
    });
  };
  const featuredProjects = [
    {
      id: 1,
      name: 'FUJI',
      description: 'Social media-style app for reporting production errors, with an admin web app for project and user management.',
      image: '/img/portfolio/Fujikikkai-Thumbnail.png',
      tags: ['Django', 'Vue', 'Flutter'],
      category: 'Featured',
      slug: 'fuji'
    },
    {
      id: 2,
      name: 'PLANE FAX',
      description: 'Aviation logistics and tracking platform for real-time flight monitoring and cargo management.',
      image: '/img/templates/testimonials/plane-fax.webp',
      tags: ['MOBILE', 'LOGISTICS'],
      category: 'Featured',
      slug: 'plane-fax'
    },
    {
      id: 3,
      name: 'BLODGIC',
      description: 'Blockchain-based supply chain management system with transparent tracking and smart contracts.',
      image: '/img/portfolio/Blodgic-Portfolio-Thumbnail.png',
      tags: ['BLOCKCHAIN', 'WEB'],
      category: 'Featured',
      slug: 'blodgic'
    }
  ];

  const allProjects = [
    { id: 4, name: 'GENERAC', description: 'Energy management platform for renewable energy monitoring and optimization', tags: ['WEB', 'ENERGY'], slug: 'generac', image: '/img/portfolio/generac-thumbnail-370x265.webp' },
    { id: 5, name: 'Export Orbital', description: 'AI SaaS platform that guides users through compliance documents and builds strategies to meet regulations', tags: ['AI', 'SAAS'], slug: 'export-orbital', image: '/img/portfolio/export-orbital-new-thumbnail-370x265.webp' },
    { id: 6, name: 'Yellowbook-CPE', description: 'Performance optimization and custom feature development for a high-traffic e-learning WordPress website', tags: ['WEB', 'EDUCATION'], slug: 'yellowbook-cpe', image: '/img/portfolio/yellowbook-thumbnail-370x265.webp' },
    { id: 7, name: 'Pitch The Problem', description: 'Startup pitch deck automation tool with AI-powered content generation', tags: ['AI', 'SAAS'], slug: 'pitch-the-problem', image: '/img/portfolio/Pitch-The-Problem-370x265.png' },
    { id: 8, name: 'Happy Grader', description: 'Educational reading app for children with interactive learning features', tags: ['MOBILE', 'EDUCATION'], slug: 'happy-grader', image: '/img/portfolio/Happy-Grader-Thumbnail-370x265.png' },
    { id: 9, name: 'Arcor', description: 'Legal case management system with document automation and workflow optimization', tags: ['WEB', 'LEGAL'], slug: 'arcor', image: '/img/portfolio/Arcor-Thumbnail.png' },
    { id: 10, name: 'Support Sherpa', description: 'AI-powered customer support platform with automated responses and ticket management', tags: ['AI', 'SAAS'], slug: 'support-sherpa', image: '/img/portfolio/Support-Sherpa-Thumbnail.png' },
    { id: 11, name: 'VacayDelay', description: 'Travel booking and management platform with real-time updates and notifications', tags: ['TRAVEL', 'WEB'], slug: 'vacaydelay', image: '/img/portfolio/VacayDelay-3-370x265.png' },
    { id: 12, name: 'Hello Vacay', description: 'Vacation planning and booking platform with personalized recommendations', tags: ['TRAVEL', 'MOBILE'], slug: 'hello-vacay', image: '/img/portfolio/HelloVacay-1-370x265.png' },
    { id: 13, name: 'RAIA', description: 'AI-powered research assistant for academic and professional research', tags: ['AI', 'RESEARCH'], slug: 'raia', image: '/img/portfolio/raia-thumbnail.webp' },
    { id: 14, name: 'Lincoln', description: 'Financial planning and wealth management platform for individuals', tags: ['FINTECH', 'WEB'], slug: 'lincoln', image: '/img/portfolio/lincoln-thumbnail.webp' },
    { id: 15, name: 'QuickFriends', description: 'Social networking platform for connecting friends and family', tags: ['MOBILE', 'SOCIAL'], slug: 'quickfriends', image: '/img/portfolio/quickfriends-thumbnail.webp' },
    { id: 16, name: 'Pink Avenue', description: 'E-commerce platform for fashion and lifestyle products', tags: ['WEB', 'E-COMMERCE'], slug: 'pink-avenue', image: '/img/portfolio/pink-avenue-thumbnail.webp' },
    { id: 17, name: 'Mileage Quest', description: 'Travel rewards and mileage tracking application', tags: ['MOBILE', 'TRAVEL'], slug: 'mileage-quest', image: '/img/portfolio/mileagequest-thumbnail.webp' },
    { id: 18, name: 'Merceo', description: 'B2B marketplace for industrial equipment and supplies', tags: ['WEB', 'B2B'], slug: 'merceo', image: '/img/portfolio/merceo-thumbnail.webp' },
    { id: 19, name: 'Fujikikai', description: 'Manufacturing automation and quality control system', tags: ['IOT', 'MANUFACTURING'], slug: 'fujikikai', image: '/img/portfolio/fujikikai-thumbnail.webp' },
    { id: 20, name: 'Coast 2 Coast', description: 'Logistics and transportation management platform', tags: ['WEB', 'LOGISTICS'], slug: 'coast-2-coast', image: '/img/portfolio/coast-2-coast-thumbnail.webp' },
    { id: 21, name: 'Cover Fields', description: 'Insurance management and claims processing system', tags: ['WEB', 'INSURANCE'], slug: 'cover-fields', image: '/img/portfolio/cover-fields-thumbnail.webp' },
    { id: 22, name: 'QC Analytics', description: 'Business intelligence and data analytics platform', tags: ['AI', 'ANALYTICS'], slug: 'qcanalytics', image: '/img/portfolio/qcanalytics-thumbnail.webp' },
    { id: 23, name: 'I Am Available', description: 'Professional networking and availability management app', tags: ['MOBILE', 'NETWORKING'], slug: 'i-am-available', image: '/img/portfolio/i-am-available-thumbnail.webp' },
    { id: 24, name: 'Medicare Chatbot', description: 'AI-powered healthcare assistant for Medicare information', tags: ['AI', 'HEALTHCARE'], slug: 'medicare-chatbot', image: '/img/portfolio/medicare-thumbnail.webp' },
    { id: 25, name: 'SaaS E-Learning', description: 'Online learning management system for educational institutions', tags: ['SAAS', 'EDUCATION'], slug: 'saas-e-learning', image: '/img/portfolio/saas-e-learning-platform-thumbnail.webp' },
    { id: 26, name: 'Word Welder', description: 'AI-powered content creation and writing assistance platform', tags: ['AI', 'CONTENT'], slug: 'word-welder', image: '/img/portfolio/word-welder-new-thumbnail-370x265.webp' },
    { id: 27, name: 'Outschool', description: 'Online learning marketplace for K-12 education', tags: ['EDUCATION', 'SAAS'], slug: 'outschool', image: '/img/portfolio/Outschool-Thumbnail-370x265.webp' },
    { id: 28, name: 'AI Marketing Website', description: 'AI-optimized marketing website with automated content generation', tags: ['AI', 'MARKETING'], slug: 'ai-marketing-website', image: '/img/portfolio/ai-optimized-marketing-website-thumbnail.webp' },
    { id: 29, name: 'Excel Processing App', description: 'Automatic Excel processing webapp using machine learning', tags: ['AI', 'PRODUCTIVITY'], slug: 'excel-processing-app', image: '/img/portfolio/automatic-excel-processing-webapp-using-machine-learning-thumbnail.webp' }
  ];

  return (
    <div>
      <HeaderBanner
        title="250+ Successfully Delivered Projects: A Showcase of Our Expertise"
        intro="Discover how we've helped businesses transform their ideas into powerful digital solutions across various industries and technologies."
        image="/img/e-money-in-phone.webp"
        imageAlt="250+ Successfully Delivered Projects: A Showcase of Our Expertise"
      />

      {/* Featured Projects */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most impactful projects that demonstrate our expertise across different industries and technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
             {featuredProjects.map((project) => (
               <Link key={project.id} to={`/portfolio/${project.slug}`} className="group">
                 <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                   <div className="h-60 bg-gray-100 flex items-center justify-center">
                     <img
                       src={project.image}
                       alt={project.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.parentElement!.innerHTML = `<div class="text-gray-600 text-4xl font-bold">${project.name}</div>`;
                       }}
                     />
                   </div>
                   <div className="p-6">
                     <div className="flex flex-wrap gap-2 mb-3">
                       {project.tags.map((tag, index) => (
                         <span
                           key={index}
                           className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
                     <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                     <p className="text-blue-900 mb-4 text-xl">{project.description}</p>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Complete Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our diverse range of projects across various industries and technologies
            </p>
          </div>

                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {allProjects.map((project) => (
               <Link key={project.id} to={`/portfolio/${project.slug}`} className="group">
                 <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                   <div className="h-60 bg-gray-100 flex items-center justify-center">
                     <img
                       src={project.image}
                       alt={project.name}
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                       onError={(e) => {
                         const target = e.target as HTMLImageElement;
                         target.style.display = 'none';
                         target.parentElement!.innerHTML = `<div class="text-gray-600 text-2xl font-semibold">${project.name}</div>`;
                       }}
                     />
                   </div>
                   <div className="p-6 min-h-60">
                     <div className="flex flex-wrap gap-2 mb-3">
                       {project.tags.map((tag, index) => (
                         <span
                           key={index}
                           className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                         >
                           {tag}
                         </span>
                       ))}
                     </div>
                     <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">{project.name}</h3>
                     <p className="text-blue-900 mb-4 text-xl">{project.description}</p>
                   </div>
                 </div>
               </Link>
             ))}
           </div>
        </div>
      </section>

      {/* Let's Talk About Your Project Section */}
      <section className="py-16 bg-professional-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Let's Talk About Your Project!
              </h2>
              <p className="text-lg text-gray-300 mb-8 font-light">
                Ready to start your next project? Our team is here to help bring your vision to life with our expertise and proven track record.
              </p>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
                  <span className="text-white text-xl font-bold">Y</span>
                </div>
                <div>
                  <h4 className="font-semibold text-base">Yeongjun, CEO</h4>
                  <p className="text-gray-400 text-sm">Leading our team of experts to deliver exceptional results</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-8 shadow-professional border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Tell Us About Your Project</h3>
              <form className="space-y-4" onSubmit={handlePortfolioFormSubmit}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={portfolioFormData.name}
                    onChange={handlePortfolioInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={portfolioFormData.email}
                    onChange={handlePortfolioInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={portfolioFormData.phone}
                    onChange={handlePortfolioInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={portfolioFormData.message}
                    onChange={handlePortfolioInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isPortfolioSubmitting}
                  className={`w-full py-3 px-6 rounded-md font-semibold transition-all duration-200 ${
                    isPortfolioSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-professional-accent text-white hover:bg-professional-accent-dark shadow-professional hover:shadow-professional-lg'
                  }`}
                >
                  {isPortfolioSubmitting ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>

                {/* Status Messages */}
                {portfolioSubmitStatus === 'success' && (
                  <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                )}

                {portfolioSubmitStatus === 'error' && (
                  <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <p className="text-red-800 font-medium">Something went wrong. Please try again or contact us directly.</p>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognitions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Some of Our Awards and Recognitions
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We're proud to be recognized for our excellence in software development and client satisfaction
          </p>
          
                     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/aws-badge.webp"
                   alt="AWS Certified"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">AWS</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">AWS Certified</h4>
               <p className="text-gray-600 text-xs">100 CERTIFIED</p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/clutch-badge.webp"
                   alt="Clutch"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-orange-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">CLUTCH</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">Clutch</h4>
               <p className="text-gray-600 text-xs">TOP B2B COMPANY</p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/upcity-badge.webp"
                   alt="Upcity"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-green-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">UPCITY</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">Upcity</h4>
               <p className="text-gray-600 text-xs">TOP SERVICE PROVIDER</p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/upwork-badge.webp"
                   alt="Upwork"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-green-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">UPWORK</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">Upwork</h4>
               <p className="text-gray-600 text-xs">TOP RATED PLUS</p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/bark-badge.webp"
                   alt="Bark"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-purple-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">BARK</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">Bark</h4>
               <p className="text-gray-600 text-xs">TRUSTED PROVIDER</p>
             </div>
             
             <div className="text-center">
               <div className="w-20 h-20 mx-auto mb-4">
                 <img
                   src="/img/awards/thumbtack-badge.webp"
                   alt="Thumbtack"
                   className="w-full h-full object-contain"
                   onError={(e) => {
                     const target = e.target as HTMLImageElement;
                     target.style.display = 'none';
                     target.parentElement!.innerHTML = '<div class="w-full h-full bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">THUMBTACK</div>';
                   }}
                 />
               </div>
               <h4 className="font-semibold text-gray-900 text-sm">Thumbtack</h4>
               <p className="text-gray-600 text-xs">PRO VERIFIED</p>
             </div>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-professional-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto font-light">
            Let's discuss how we can help bring your vision to life with our expertise and proven track record
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-professional-dark px-8 py-3.5 rounded-md text-base font-semibold hover:bg-gray-100 transition-all duration-200 shadow-professional hover:shadow-professional-lg"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="inline-block border border-white/20 text-white px-8 py-3.5 rounded-md text-base font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;
