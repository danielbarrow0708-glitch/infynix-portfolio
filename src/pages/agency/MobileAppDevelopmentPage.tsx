import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeaderBanner, 
  Features, 
  ProcessBlocks, 
  TestimonialCarousel, 
  ContactSection,
  FAQs 
} from '../../components/Agency/Sections';

const MobileAppDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: "Native iOS App Development",
      description: "Custom iOS applications built with Swift and SwiftUI for optimal performance and user experience.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "Native Android App Development",
      description: "High-performance Android applications using Kotlin and modern Android development practices.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "Cross-Platform App Development",
      description: "React Native and Flutter solutions for building apps that work seamlessly on both iOS and Android.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    }
  ];

  const expertise = [
    {
      title: "UI/UX Design Excellence",
      description: "Beautiful, intuitive interfaces that engage users and drive conversions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
      </svg>`
    },
    {
      title: "Performance Optimization",
      description: "Lightning-fast apps with optimized code and efficient resource management.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
      </svg>`
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with data protection and privacy compliance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "App Store Optimization",
      description: "Strategic ASO to maximize visibility and downloads in app stores.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    }
  ];

  const frameworks = [
    {
      title: "React Native",
      description: "Cross-platform development with native performance using JavaScript.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Flutter",
      description: "Google's UI toolkit for building natively compiled applications.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Swift & SwiftUI",
      description: "Modern iOS development with Apple's latest frameworks and tools.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "Kotlin",
      description: "Modern Android development with enhanced productivity and safety.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    }
  ];

  const technologies = [
    {
      title: "Firebase",
      description: "Backend services for authentication, database, and cloud functions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "AWS Mobile",
      description: "Cloud services for mobile app backend and infrastructure.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Push Notifications",
      description: "Engaging push notification systems for user retention.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"/>
      </svg>`
    },
    {
      title: "Analytics & Tracking",
      description: "Comprehensive analytics to understand user behavior and app performance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and business goals to create a comprehensive development plan."
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Our designers create wireframes and prototypes to visualize the app's user interface and experience."
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Our developers build your app using the latest technologies while ensuring quality through rigorous testing."
    },
    {
      step: 4,
      title: "Deployment & Launch",
      description: "We handle app store submissions and ensure a smooth launch with proper optimization and monitoring."
    }
  ];

  const whyChooseUs = [
    {
      title: "Experienced Team",
      description: "Our mobile developers have years of experience building successful apps across various industries.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>`
    },
    {
      title: "Client-Centric Approach",
      description: "We work closely with you throughout the development process, ensuring your vision is realized.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "Quality Assurance",
      description: "Rigorous testing ensures your app performs flawlessly across all devices and platforms.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "How long does it take to develop a mobile app?",
      answer: "The development timeline varies based on complexity. Simple apps take 2-3 months, while complex enterprise apps can take 6-12 months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "Do you provide app store submission services?",
      answer: "Yes, we handle the entire app store submission process for both iOS App Store and Google Play Store, including optimization and compliance requirements."
    },
    {
      question: "Can you maintain and update my app after launch?",
      answer: "Absolutely! We offer ongoing maintenance, updates, and support services to keep your app current and performing optimally."
    },
    {
      question: "What platforms do you develop for?",
      answer: "We develop for iOS, Android, and cross-platform solutions using React Native and Flutter. We'll recommend the best approach based on your specific needs."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Bring Your Business to Life with Our Mobile Application Development Services"
        intro="Transform your ideas into powerful mobile applications that engage users and drive business growth. Our expert team delivers native and cross-platform solutions with cutting-edge technology."
        image="/img/templates/our-tech/android-app-development/android-app-dev.webp"
      />

      {/* Services Section */}
      <Features
        title="Our Mobile App Development Services"
        intro="We offer comprehensive mobile app development solutions tailored to your business needs and target audience."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={true}
      />

      {/* Free Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Set Up a Free Consultation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your mobile app project and explore how we can help bring your vision to life
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>

      {/* Expertise Section */}
      <Features
        title="Mobile App Development Expertise"
        intro="Our team brings deep expertise in mobile app development, ensuring your project is built with the latest best practices and technologies."
        features={expertise}
        columns={4}
        backgroundColor="gray"
        showDivider={true}
      />

      {/* Frameworks Section */}
      <Features
        title="Mobile App Development Frameworks We Use"
        intro="We leverage the most powerful and reliable frameworks to build high-performance mobile applications."
        features={frameworks}
        columns={4}
        backgroundColor="white"
        showDivider={false}
      />

      {/* Free Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Mobile App Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Get in touch with our experts to discuss your mobile app development needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Technologies Section */}
      <Features
        title="Mobile App Development Technology We Use"
        intro="We integrate cutting-edge technologies to create robust, scalable, and feature-rich mobile applications."
        features={technologies}
        columns={4}
        backgroundColor="gray"
        showDivider={false}
      />

      {/* Development Process */}
      <ProcessBlocks
        title="Our App Development Process"
        intro="We follow a proven development methodology that ensures quality, transparency, and successful project delivery."
        steps={developmentProcess}
        backgroundColor="blue"
      />

      {/* Why Choose Us */}
      <Features
        title="Why Choose Us?"
        intro="We combine technical expertise with business acumen to deliver mobile apps that drive real results."
        features={whyChooseUs}
        columns={3}
        backgroundColor="white"
        showDivider={true}
      />

      {/* Testimonials */}
      <TestimonialCarousel backgroundColor="gray" />

      {/* More Info Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Build Your Mobile App?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Our team is ready to help you create a mobile app that stands out in the market and delivers exceptional user experiences.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Let's Discuss Your Mobile App Project
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Schedule a free consultation to discuss your mobile app development needs
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Schedule a Call
          </Link>
        </div>
      </section>

      {/* Related Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Our Mobile App Projects
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore some of our successful mobile app development projects
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">ATLAS</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">ATLAS</h3>
                <p className="text-gray-600 text-sm mb-4">Enterprise resource planning mobile app</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MOBILE</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">ENTERPRISE</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">PLANE FAX</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">PLANE FAX</h3>
                <p className="text-gray-600 text-sm mb-4">Aviation logistics tracking platform</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MOBILE</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">LOGISTICS</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                <div className="text-white text-2xl font-bold">BLODGIC</div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">BLODGIC</h3>
                <p className="text-gray-600 text-sm mb-4">Blockchain supply chain management</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">MOBILE</span>
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">BLOCKCHAIN</span>
                </div>
              </div>
            </div>
          </div>
          <Link
            to="/portfolio"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Projects
          </Link>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Related Services
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Explore our other development services that complement mobile app development
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/web-development" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">Web Development</h3>
                <p className="text-gray-600">Modern, responsive websites and web applications</p>
              </div>
            </Link>
            <Link to="/ai-development" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">AI Development</h3>
                <p className="text-gray-600">Intelligent solutions to enhance your mobile apps</p>
              </div>
            </Link>
            <Link to="/ui-ux" className="group">
              <div className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600">UI/UX Design</h3>
                <p className="text-gray-600">Beautiful, intuitive user interfaces and experiences</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        title="Ready to Build Your Mobile App?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />

      {/* FAQs */}
      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="gray"
      />
    </div>
  );
};

export default MobileAppDevelopmentPage;

