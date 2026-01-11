import React from 'react';
import { HeaderBanner, ContactSection, TestimonialCarousel } from '../../components/Agency/Sections';

const IndustryAwardsPage: React.FC = () => {
  const awards = [
    {
      year: '2024',
      title: 'Best Software Development Agency',
      organization: 'Tech Excellence Awards',
      description: 'Recognized for outstanding contributions to software development and innovation',
      category: 'Excellence in Development',
      icon: '🏆'
    },
    {
      year: '2023',
      title: 'AI Innovation Award',
      organization: 'Artificial Intelligence Summit',
      description: 'Awarded for breakthrough AI solutions and machine learning implementations',
      category: 'AI & Machine Learning',
      icon: '🤖'
    },
    {
      year: '2023',
      title: 'Blockchain Excellence',
      organization: 'Crypto & Blockchain Conference',
      description: 'Recognized for innovative blockchain solutions and smart contract development',
      category: 'Blockchain Technology',
      icon: '⛓️'
    },
    {
      year: '2022',
      title: 'Mobile App Development Excellence',
      organization: 'Mobile World Congress',
      description: 'Awarded for exceptional mobile application development and user experience',
      category: 'Mobile Development',
      icon: '📱'
    },
    {
      year: '2022',
      title: 'Web Development Innovation',
      organization: 'Web Development Awards',
      description: 'Recognized for cutting-edge web applications and full-stack solutions',
      category: 'Web Development',
      icon: '🌐'
    },
    {
      year: '2021',
      title: 'Startup Partner of the Year',
      organization: 'Startup Ecosystem Awards',
      description: 'Awarded for supporting startups with innovative software solutions',
      category: 'Startup Support',
      icon: '🚀'
    }
  ];

  const certifications = [
    {
      name: 'ISO 27001',
      description: 'Information Security Management System',
      year: '2024',
      icon: '🔒'
    },
    {
      name: 'AWS Advanced Consulting Partner',
      description: 'Amazon Web Services Partnership',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'Google Cloud Partner',
      description: 'Google Cloud Platform Partnership',
      year: '2023',
      icon: '☁️'
    },
    {
      name: 'Microsoft Gold Partner',
      description: 'Microsoft Azure Partnership',
      year: '2022',
      icon: '💻'
    }
  ];

  const recognitions = [
    {
      title: 'Top 100 Software Companies',
      organization: 'Software Development Magazine',
      year: '2024',
      description: 'Listed among the top 100 software development companies globally'
    },
    {
      title: 'Best Workplace for Developers',
      organization: 'Developer Experience Awards',
      year: '2023',
      description: 'Recognized for creating an excellent work environment for developers'
    },
    {
      title: 'Innovation Leader',
      organization: 'Tech Innovation Forum',
      year: '2023',
      description: 'Awarded for leadership in technological innovation and digital transformation'
    },
    {
      title: 'Client Satisfaction Excellence',
      organization: 'Customer Experience Awards',
      year: '2022',
      description: 'Achieved highest client satisfaction scores in the industry'
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Industry Awards & Recognition"
        intro="Our commitment to excellence in software development, AI innovation, and blockchain technology has been recognized by industry leaders and prestigious organizations worldwide."
        image="/img/hero-1920x1080.webp"
      />

      {/* Awards Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Awards & Achievements
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Recognition from industry leaders and prestigious organizations for our 
              excellence in software development and innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">6+ Awards</h3>
              <p className="text-gray-600">Industry recognition for excellence</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">4 Certifications</h3>
              <p className="text-gray-600">Professional standards and partnerships</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">100% Success</h3>
              <p className="text-gray-600">Client satisfaction and project success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Professional Certifications
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-recognized certifications and partnerships that demonstrate our 
              commitment to quality and security standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="text-4xl mb-4">{cert.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{cert.description}</p>
                <span className="text-xs bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Recognition */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Recognition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Additional recognition and acknowledgments from industry publications and organizations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{recognition.title}</h3>
                  <span className="text-sm font-semibold text-blue-600">{recognition.year}</span>
                </div>
                <p className="text-blue-600 font-semibold mb-3">{recognition.organization}</p>
                <p className="text-gray-600">{recognition.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievement Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Journey of Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our major achievements and milestones in the software development industry
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-200 h-full"></div>
            <div className="space-y-12">
              {awards.slice().reverse().map((award, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="w-1/2 px-8">
                    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-2xl">{award.icon}</span>
                        <span className="text-lg font-bold text-blue-600">{award.year}</span>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{award.title}</h3>
                      <p className="text-blue-600 font-semibold text-sm">{award.organization}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2 px-8"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What These Awards Mean */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What These Awards Mean
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Recognition that validates our commitment to excellence and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
              <p className="text-blue-100">Validation of our high standards and quality processes</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">💡</div>
              <h3 className="text-lg font-semibold mb-2">Innovation Leadership</h3>
              <p className="text-blue-100">Recognition of our pioneering work in emerging technologies</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Client Trust</h3>
              <p className="text-blue-100">Confirmation of our commitment to client success</p>
            </div>
          </div>
        </div>
      </section>

             {/* Future Goals */}
       <section className="py-16 bg-white">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
             Continuing Our Legacy of Excellence
           </h2>
           <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
             We remain committed to pushing the boundaries of software development and 
             maintaining the highest standards of quality and innovation.
           </p>
           
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
             <div className="bg-gray-50 p-6 rounded-xl">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Goals</h3>
               <p className="text-gray-600 mb-4">Pioneering new technologies and methodologies</p>
               <div className="text-2xl">🚀</div>
             </div>
             <div className="bg-gray-50 p-6 rounded-xl">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Standards</h3>
               <p className="text-gray-600 mb-4">Maintaining and exceeding industry standards</p>
               <div className="text-2xl">⭐</div>
             </div>
             <div className="bg-gray-50 p-6 rounded-xl">
               <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Success</h3>
               <p className="text-gray-600 mb-4">Delivering exceptional value to our clients</p>
               <div className="text-2xl">🎯</div>
             </div>
           </div>
         </div>
       </section>

       {/* Client Testimonials */}
       <TestimonialCarousel backgroundColor="gray" />

       <ContactSection
         title="Ready to Work with an Award-Winning Team?"
         backgroundColor="gray"
         showForm={true}
         showCalendly={true}
       />
    </div>
  );
};

export default IndustryAwardsPage;
