import React from 'react';
import { HeaderBanner, ContactSection } from '../../components/Agency/Sections';

const DevelopmentProcessPage: React.FC = () => {
  const processSteps = [
    {
      phase: 'Discovery & Planning',
      icon: '🔍',
      description: 'Understanding your business needs and creating a comprehensive project plan',
      steps: [
        'Requirements gathering and analysis',
        'Stakeholder interviews and workshops',
        'Technical feasibility assessment',
        'Project scope and timeline definition',
        'Technology stack selection',
        'Resource allocation and team formation'
      ],
      deliverables: ['Project Requirements Document', 'Technical Architecture Plan', 'Project Timeline', 'Resource Plan'],
      duration: '1-2 weeks'
    },
    {
      phase: 'Design & Prototyping',
      icon: '🎨',
      description: 'Creating intuitive user experiences and technical architecture',
      steps: [
        'User experience (UX) design',
        'User interface (UI) design',
        'Information architecture planning',
        'Wireframing and prototyping',
        'Technical architecture design',
        'Database schema design'
      ],
      deliverables: ['UX/UI Design Mockups', 'Interactive Prototypes', 'Technical Architecture Diagrams', 'Database Schema'],
      duration: '2-3 weeks'
    },
    {
      phase: 'Development & Implementation',
      icon: '💻',
      description: 'Building your software solution with best practices and quality standards',
      steps: [
        'Frontend development',
        'Backend development',
        'Database implementation',
        'API development and integration',
        'Third-party service integration',
        'Security implementation'
      ],
      deliverables: ['Working Software Application', 'API Documentation', 'Database Implementation', 'Security Features'],
      duration: '4-12 weeks'
    },
    {
      phase: 'Testing & Quality Assurance',
      icon: '✅',
      description: 'Ensuring your software meets the highest quality standards',
      steps: [
        'Unit testing and integration testing',
        'User acceptance testing (UAT)',
        'Performance and load testing',
        'Security testing and vulnerability assessment',
        'Cross-browser and device testing',
        'Accessibility testing'
      ],
      deliverables: ['Test Reports', 'Bug Fixes', 'Performance Optimization', 'Security Audit Report'],
      duration: '1-2 weeks'
    },
    {
      phase: 'Deployment & Launch',
      icon: '🚀',
      description: 'Safely deploying your application to production environment',
      steps: [
        'Production environment setup',
        'Database migration and data setup',
        'Application deployment',
        'Domain and SSL configuration',
        'Monitoring and logging setup',
        'Go-live checklist completion'
      ],
      deliverables: ['Live Application', 'Deployment Documentation', 'Monitoring Setup', 'Launch Report'],
      duration: '1 week'
    },
    {
      phase: 'Support & Maintenance',
      icon: '🔧',
      description: 'Ongoing support and continuous improvement of your software',
      steps: [
        'Post-launch monitoring and support',
        'Bug fixes and performance optimization',
        'Feature enhancements and updates',
        'Security patches and updates',
        'Backup and disaster recovery',
        'User training and documentation'
      ],
      deliverables: ['Support Documentation', 'Maintenance Schedule', 'Update Logs', 'User Guides'],
      duration: 'Ongoing'
    }
  ];

  const methodologies = [
    {
      name: 'Agile Development',
      description: 'Iterative approach with regular feedback and continuous improvement',
      benefits: ['Flexible and adaptive', 'Regular client feedback', 'Early delivery of features', 'Continuous improvement'],
      icon: '🔄'
    },
    {
      name: 'Scrum Framework',
      description: 'Structured approach with sprints, daily standups, and regular reviews',
      benefits: ['Clear sprint goals', 'Daily progress tracking', 'Regular stakeholder reviews', 'Transparent communication'],
      icon: '📋'
    },
    {
      name: 'DevOps Integration',
      description: 'Seamless integration of development and operations for faster delivery',
      benefits: ['Automated deployment', 'Continuous integration', 'Faster time to market', 'Reduced deployment risks'],
      icon: '⚙️'
    }
  ];

  const qualityStandards = [
    {
      title: 'Code Quality',
      description: 'Maintaining high coding standards and best practices',
      practices: ['Code reviews', 'Static analysis', 'Coding standards', 'Documentation']
    },
    {
      title: 'Testing Strategy',
      description: 'Comprehensive testing approach for reliable software',
      practices: ['Unit testing', 'Integration testing', 'End-to-end testing', 'Performance testing']
    },
    {
      title: 'Security Standards',
      description: 'Implementing robust security measures',
      practices: ['Security audits', 'Vulnerability scanning', 'Data encryption', 'Access controls']
    },
    {
      title: 'Performance Optimization',
      description: 'Ensuring optimal performance and scalability',
      practices: ['Performance monitoring', 'Load testing', 'Optimization', 'Scalability planning']
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Our Development Process"
        intro="A proven, systematic approach to software development that ensures quality, transparency, and successful project delivery. Our process combines industry best practices with years of experience."
        image="/img/hero-1920x1080.webp"
      />

      {/* Process Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Proven Development Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a systematic, transparent approach that ensures your project is delivered 
              on time, within budget, and to the highest quality standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Transparent</h3>
              <p className="text-gray-600">Clear communication and regular updates throughout the process</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Efficient</h3>
              <p className="text-gray-600">Optimized workflows and proven methodologies for faster delivery</p>
            </div>
            <div className="text-center p-6 bg-blue-50 rounded-xl">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality-Focused</h3>
              <p className="text-gray-600">Rigorous testing and quality assurance at every stage</p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Phases */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Phases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each phase is carefully planned and executed to ensure successful project delivery
            </p>
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-6">
                      <span className="text-2xl text-white">{step.icon}</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{step.phase}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    <div className="ml-auto text-right">
                      <div className="text-sm text-gray-500">Duration</div>
                      <div className="text-lg font-semibold text-blue-600">{step.duration}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Steps</h4>
                      <ul className="space-y-2">
                        {step.steps.map((s, stepIndex) => (
                          <li key={stepIndex} className="flex items-start space-x-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-gray-600">{s}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Deliverables</h4>
                      <ul className="space-y-2">
                        {step.deliverables.map((deliverable, delIndex) => (
                          <li key={delIndex} className="flex items-start space-x-2">
                            <span className="text-green-500 mt-1">✓</span>
                            <span className="text-gray-600">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Phase Goals</h4>
                      <p className="text-gray-600 text-sm">
                        Complete all deliverables on time and ensure stakeholder approval before 
                        proceeding to the next phase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodologies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Development Methodologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We use proven methodologies to ensure efficient and successful project delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {methodologies.map((methodology, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl">
                <div className="text-4xl mb-4">{methodology.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{methodology.name}</h3>
                <p className="text-gray-600 mb-4">{methodology.description}</p>
                <h4 className="font-semibold text-gray-900 mb-2">Key Benefits:</h4>
                <ul className="space-y-1">
                  {methodology.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2">
                      <span className="text-blue-500">→</span>
                      <span className="text-sm text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quality Standards & Best Practices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We maintain the highest quality standards throughout the development process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qualityStandards.map((standard, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{standard.title}</h3>
                <p className="text-gray-600 mb-4">{standard.description}</p>
                <div className="grid grid-cols-2 gap-2">
                  {standard.practices.map((practice, practiceIndex) => (
                    <div key={practiceIndex} className="flex items-center space-x-2">
                      <span className="text-blue-500">•</span>
                      <span className="text-sm text-gray-600">{practice}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Communication & Collaboration */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Communication & Collaboration
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that successful projects are built on strong communication and 
                collaboration. We keep you informed and involved throughout the entire process.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Regular Updates</h3>
                    <p className="text-gray-600">Weekly progress reports and milestone updates</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">🎯</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Sprint Reviews</h3>
                    <p className="text-gray-600">Regular demonstrations of completed features</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-blue-600 font-bold">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Direct Communication</h3>
                    <p className="text-gray-600">Direct access to project team and managers</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <div className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl">📊</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Project Transparency</h3>
                <p className="text-gray-600 mb-6">
                  Access to project management tools, real-time progress tracking, and 
                  transparent communication channels ensure you're always in the loop.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">100%</div>
                    <div className="text-gray-600">Transparency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-gray-600">Communication</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to Start Your Project?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default DevelopmentProcessPage;
