import React from 'react';
import { HeaderBanner, ContactSection, TestimonialCarousel } from '../../components/Agency/Sections';

const MissionVisionPage: React.FC = () => {
  return (
    <div>
      <HeaderBanner
        title="Our Mission & Vision"
        intro="Driving innovation through full-stack software development, AI solutions, and blockchain technology to transform businesses and create lasting impact."
        image="/img/hero-1920x1080.webp"
      />

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To empower businesses with cutting-edge software solutions that drive innovation, 
                efficiency, and growth. We combine full-stack development expertise with AI and 
                blockchain technology to create scalable, future-proof applications that solve 
                real-world problems.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Innovation First</h3>
                    <p className="text-gray-600">Pioneering new technologies and approaches in software development</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Client Success</h3>
                    <p className="text-gray-600">Delivering measurable business value through exceptional software solutions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Technical Excellence</h3>
                    <p className="text-gray-600">Maintaining the highest standards in code quality and system architecture</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🎯</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission Statement</h3>
                <p className="text-gray-600 italic">
                  "To revolutionize software development by combining full-stack expertise with 
                  cutting-edge AI and blockchain technologies, delivering innovative solutions 
                  that empower businesses to thrive in the digital age."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Vision
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              To be the leading software development agency that bridges the gap between 
              traditional development and emerging technologies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🌐</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Digital Transformation Leader</h3>
              <p className="text-gray-600 text-center">
                Leading the charge in digital transformation through innovative software solutions 
                that adapt to evolving business needs and technological advancements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🤖</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">AI & Blockchain Pioneer</h3>
              <p className="text-gray-600 text-center">
                Pioneering the integration of AI and blockchain technologies into mainstream 
                software development, creating new possibilities for businesses worldwide.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🚀</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Global Innovation Hub</h3>
              <p className="text-gray-600 text-center">
                Becoming a global hub for software innovation, attracting top talent and 
                fostering a community of developers, designers, and technology enthusiasts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our work and relationships with clients and partners
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">Constantly exploring new technologies and approaches to solve complex problems</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Collaboration</h3>
              <p className="text-gray-600">Working closely with clients and team members to achieve shared goals</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">Maintaining the highest standards in every project we undertake</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Growth</h3>
              <p className="text-gray-600">Continuously learning and evolving to stay ahead of industry trends</p>
            </div>
          </div>
        </div>
      </section>

             {/* Future Goals */}
       <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-12">
             <h2 className="text-3xl md:text-4xl font-bold mb-4">
               Our Future Goals
             </h2>
             <p className="text-xl text-blue-100 max-w-3xl mx-auto">
               Ambitious targets that drive our growth and innovation
             </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
               <div className="text-4xl font-bold text-blue-300 mb-2">500+</div>
               <h3 className="text-lg font-semibold mb-2">Projects Delivered</h3>
               <p className="text-blue-100">Expanding our portfolio with diverse and innovative software solutions</p>
             </div>

             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
               <div className="text-4xl font-bold text-blue-300 mb-2">50+</div>
               <h3 className="text-lg font-semibold mb-2">Team Members</h3>
               <p className="text-blue-100">Growing our team of talented developers, designers, and technology experts</p>
             </div>

             <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
               <div className="text-4xl font-bold text-blue-300 mb-2">25+</div>
               <h3 className="text-lg font-semibold mb-2">Countries Served</h3>
               <p className="text-blue-100">Expanding our global reach to serve clients worldwide</p>
             </div>
           </div>
         </div>
       </section>

       {/* Client Testimonials */}
       <TestimonialCarousel backgroundColor="white" />

       <ContactSection
         title="Ready to Partner with Dragon Agency?"
         backgroundColor="white"
         showForm={true}
         showCalendly={true}
       />
    </div>
  );
};

export default MissionVisionPage;
