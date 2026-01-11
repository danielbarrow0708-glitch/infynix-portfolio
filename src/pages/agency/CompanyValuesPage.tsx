import React from 'react';
import { HeaderBanner, ContactSection } from '../../components/Agency/Sections';

const CompanyValuesPage: React.FC = () => {
  const coreValues = [
    {
      title: 'Innovation',
      icon: '💡',
      description: 'We constantly push the boundaries of what\'s possible in software development',
      details: [
        'Exploring cutting-edge technologies and methodologies',
        'Encouraging creative problem-solving approaches',
        'Staying ahead of industry trends and best practices',
        'Fostering a culture of experimentation and learning'
      ],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Excellence',
      icon: '🎯',
      description: 'We maintain the highest standards in every aspect of our work',
      details: [
        'Delivering code that meets enterprise-grade quality standards',
        'Ensuring robust testing and quality assurance processes',
        'Providing exceptional customer service and support',
        'Continuously improving our processes and methodologies'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Collaboration',
      icon: '🤝',
      description: 'We believe in the power of teamwork and partnership',
      details: [
        'Working closely with clients to understand their unique needs',
        'Fostering open communication and transparency',
        'Building strong relationships with stakeholders',
        'Creating an inclusive and supportive work environment'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Integrity',
      icon: '💎',
      description: 'We operate with honesty, transparency, and ethical practices',
      details: [
        'Maintaining complete transparency in all client communications',
        'Protecting client data and intellectual property',
        'Delivering on our promises and commitments',
        'Upholding the highest ethical standards in our industry'
      ],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Growth',
      icon: '🌱',
      description: 'We are committed to continuous learning and development',
      details: [
        'Investing in team training and skill development',
        'Staying updated with the latest technologies and trends',
        'Encouraging personal and professional growth',
        'Building a culture of continuous improvement'
      ],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Impact',
      icon: '🚀',
      description: 'We create meaningful solutions that drive real business value',
      details: [
        'Focusing on measurable outcomes and ROI',
        'Building solutions that scale with business growth',
        'Creating positive impact for our clients and communities',
        'Contributing to technological advancement and innovation'
      ],
      color: 'from-teal-500 to-blue-500'
    }
  ];

  const principles = [
    {
      title: 'Client-Centric Approach',
      description: 'Every decision we make is guided by what\'s best for our clients',
      icon: '👥'
    },
    {
      title: 'Technical Excellence',
      description: 'We maintain the highest standards in code quality and system architecture',
      icon: '⚙️'
    },
    {
      title: 'Agile Methodology',
      description: 'We embrace flexibility and rapid iteration to deliver better results',
      icon: '🔄'
    },
    {
      title: 'Security First',
      description: 'We prioritize security and data protection in all our solutions',
      icon: '🔒'
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Our Company Values"
        intro="The principles that guide our work, shape our culture, and define who we are as a software development agency committed to excellence and innovation."
        image="/img/hero-1920x1080.webp"
      />

      {/* Values Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Drives Us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values are more than just words on a page. They are the foundation of our culture, 
              the principles that guide our decisions, and the standards we hold ourselves to every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
                <div className={`h-32 bg-gradient-to-r ${value.color} flex items-center justify-center`}>
                  <span className="text-4xl">{value.icon}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  <ul className="space-y-2">
                    {value.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span className="text-sm text-gray-600">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guiding Principles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Guiding Principles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The fundamental beliefs that shape our approach to software development and client relationships
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-2xl">{principle.icon}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{principle.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Ethics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Culture & Ethics
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that great software is built by great teams working in an environment 
                that fosters creativity, collaboration, and continuous learning. Our culture is 
                built on mutual respect, open communication, and a shared commitment to excellence.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Diversity & Inclusion</h3>
                    <p className="text-gray-600">We celebrate diversity and create an inclusive environment where everyone can thrive</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Work-Life Balance</h3>
                    <p className="text-gray-600">We support our team members in maintaining healthy work-life balance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Continuous Learning</h3>
                    <p className="text-gray-600">We invest in our team's growth through training, conferences, and skill development</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">🏆</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h3>
                <p className="text-gray-600 italic mb-6">
                  "We are committed to building not just great software, but great relationships. 
                  Our values guide every interaction, every decision, and every line of code we write."
                </p>
                <div className="text-sm text-gray-500">
                  - Dragon Agency Team
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact & Responsibility */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Impact & Responsibility
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We recognize our responsibility to create positive change through technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Environmental Responsibility</h3>
              <p className="text-blue-100">Building energy-efficient solutions and promoting sustainable practices</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Community Engagement</h3>
              <p className="text-blue-100">Supporting local tech communities and educational initiatives</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-lg font-semibold mb-2">Data Privacy</h3>
              <p className="text-blue-100">Protecting client data and maintaining the highest security standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Living Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Living Our Values
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our values aren't just statements—they're actions. Here's how we put them into practice every day.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Learning Programs</h3>
              <p className="text-gray-600">Regular training sessions, workshops, and conference attendance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality Reviews</h3>
              <p className="text-gray-600">Rigorous code reviews and quality assurance processes</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Client Feedback</h3>
              <p className="text-gray-600">Regular check-ins and feedback sessions with clients</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600">Celebrating achievements and milestones as a team</p>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to Work with a Values-Driven Team?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default CompanyValuesPage;
