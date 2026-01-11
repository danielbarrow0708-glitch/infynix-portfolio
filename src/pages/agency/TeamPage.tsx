import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBanner, ContactSection } from '../../components/Agency/Sections';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'Chief Technology Officer',
      expertise: 'Full-Stack Development, AI Architecture',
      image: '/img/team/cto.webp',
      description: 'Leading our technical vision with 10+ years of experience in building scalable software solutions.',
      skills: ['React', 'Node.js', 'Python', 'AWS', 'AI/ML'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Sarah Johnson',
      role: 'Lead Software Engineer',
      expertise: 'Frontend Development, UI/UX',
      image: '/img/team/lead-dev.webp',
      description: 'Expert in creating intuitive user experiences and modern web applications.',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Next.js'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Senior Backend Engineer',
      expertise: 'Backend Development, Database Design',
      image: '/img/team/backend-dev.webp',
      description: 'Specialized in building robust backend systems and scalable architectures.',
      skills: ['Python', 'Django', 'PostgreSQL', 'Docker', 'Kubernetes'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Emily Wang',
      role: 'AI & Machine Learning Engineer',
      expertise: 'AI Development, Data Science',
      image: '/img/team/ai-engineer.webp',
      description: 'Pioneering AI solutions and machine learning models for business applications.',
      skills: ['Python', 'TensorFlow', 'PyTorch', 'NLP', 'Computer Vision'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'David Kim',
      role: 'Mobile App Developer',
      expertise: 'iOS & Android Development',
      image: '/img/team/mobile-dev.webp',
      description: 'Creating native and cross-platform mobile applications with exceptional performance.',
      skills: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      linkedin: '#',
      github: '#'
    },
    {
      name: 'Lisa Thompson',
      role: 'Blockchain Developer',
      expertise: 'Smart Contracts, DeFi Applications',
      image: '/img/team/blockchain-dev.webp',
      description: 'Building decentralized applications and smart contract solutions.',
      skills: ['Solidity', 'Ethereum', 'Web3.js', 'DeFi', 'Smart Contracts'],
      linkedin: '#',
      github: '#'
    }
  ];

  const departments = [
    {
      name: 'Development Team',
      description: 'Full-stack developers, mobile engineers, and technical specialists',
      count: '15+',
      icon: '💻'
    },
    {
      name: 'AI & Research',
      description: 'Machine learning engineers, data scientists, and AI researchers',
      count: '8+',
      icon: '🤖'
    },
    {
      name: 'Design & UX',
      description: 'UI/UX designers, product designers, and creative specialists',
      count: '6+',
      icon: '🎨'
    },
    {
      name: 'Project Management',
      description: 'Project managers, scrum masters, and delivery specialists',
      count: '5+',
      icon: '📋'
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Meet Our Team"
        intro="Talented professionals passionate about creating innovative software solutions. Our diverse team combines expertise in full-stack development, AI, blockchain, and design."
        image="/img/hero-1920x1080.webp"
      />

      {/* Team Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A diverse group of professionals dedicated to delivering exceptional software solutions 
              through innovation, collaboration, and technical excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {departments.map((dept, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className="text-4xl mb-4">{dept.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{dept.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{dept.count}</div>
                <p className="text-gray-600">{dept.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders guiding our mission to revolutionize software development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(0, 3).map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl text-white">👤</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 mb-4">{member.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a href={member.linkedin} className="text-blue-600 hover:text-blue-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href={member.github} className="text-gray-600 hover:text-gray-800">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Development Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled developers and engineers creating innovative software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.slice(3).map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <div className="text-2xl text-white">👤</div>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                    <p className="text-blue-600 font-semibold">{member.role}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{member.description}</p>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Team Culture
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Fostering innovation, collaboration, and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration</h3>
              <p className="text-blue-100">Working together to achieve common goals and deliver exceptional results</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Innovation</h3>
              <p className="text-blue-100">Encouraging creative thinking and exploring new technologies</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Learning</h3>
              <p className="text-blue-100">Continuous professional development and skill enhancement</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Excellence</h3>
              <p className="text-blue-100">Striving for the highest quality in everything we do</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Team
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals who are passionate about technology 
            and innovation. Join us in building the future of software development.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Open Positions</h3>
              <p className="text-gray-600 mb-4">Explore current job opportunities</p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                View Positions
              </Link>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Internship Program</h3>
              <p className="text-gray-600 mb-4">Learn and grow with our team</p>
              <Link to="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Ready to Work with Our Team?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default TeamPage;
