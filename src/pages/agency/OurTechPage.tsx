import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBanner } from '../../components/Agency/Sections';

const OurTechPage: React.FC = () => {
  const technologies = [
    {
      name: 'Android App Development',
      image: '/img/android-sdk-technology.webp',
      description: 'Native Android applications with modern UI/UX and performance optimization'
    },
    {
      name: 'Cross Platform App Development',
      image: '/img/react.webp',
      description: 'React Native and Flutter solutions for iOS and Android from a single codebase'
    },
    {
      name: 'Django Development',
      image: '/img/django.webp',
      description: 'Robust web applications built with Django framework and Python'
    },
    {
      name: 'Flutter Development',
      image: '/img/flutter-technology.webp',
      description: 'Beautiful, natively compiled applications for mobile, web, and desktop'
    },
    {
      name: 'iOS App Development Services',
      image: '/img/swift.webp',
      description: 'Native iOS applications with Swift and SwiftUI for optimal performance'
    },
    {
      name: 'Progressive Web App Development',
      image: '/img/react.webp',
      description: 'PWAs that provide app-like experiences across all devices'
    },
    {
      name: 'Python Development',
      image: '/img/frameworks/python.webp',
      description: 'Backend development, data science, and automation with Python'
    },
    {
      name: 'React Native Development',
      image: '/img/react-native-technology.webp',
      description: 'Cross-platform mobile applications with React Native'
    },
    {
      name: 'Vue Development',
      image: '/img/vue.webp',
      description: 'Modern web applications with Vue.js framework'
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Our Technology Stack"
        intro="Discover the cutting-edge technologies and frameworks we use for full-stack software development, AI, and blockchain solutions"
      />

      {/* Technologies Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Full-Stack Development Technologies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest technologies and frameworks to deliver high-performance, scalable software solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 flex-shrink-0">
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{tech.name}</h3>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Frontend Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• React.js & React Native</li>
                <li>• Vue.js</li>
                <li>• Angular</li>
                <li>• TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Progressive Web Apps</li>
              </ul>
            </div>

            {/* Backend Technologies */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Backend Technologies</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Python & Django</li>
                <li>• Node.js & Express</li>
                <li>• PHP & Laravel</li>
                <li>• Java & Spring Boot</li>
                <li>• .NET Core</li>
                <li>• PostgreSQL & MongoDB</li>
              </ul>
            </div>

            {/* Mobile & AI */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Mobile & AI</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• iOS (Swift/SwiftUI)</li>
                <li>• Android (Kotlin/Java)</li>
                <li>• Flutter</li>
                <li>• Machine Learning</li>
                <li>• Natural Language Processing</li>
                <li>• Computer Vision</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build with Modern Technology?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your project and choose the perfect technology stack for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              to="/contact"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Schedule a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurTechPage;
