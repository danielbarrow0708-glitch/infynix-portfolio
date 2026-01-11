import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ContactSection 
} from '../../components/Agency/Sections';

const HomePage: React.FC = () => {
  const services = [
    {
      title: "Full-Stack Web Development",
      description: "End-to-end web applications with modern frontend frameworks, robust backend systems, and scalable cloud infrastructure.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Mobile App Development",
      description: "Native iOS/Android apps and cross-platform solutions with React Native, Flutter, and modern mobile technologies.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "AI & Machine Learning",
      description: "Custom AI solutions, machine learning models, chatbots, and intelligent automation systems for business optimization.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "Blockchain Development",
      description: "Smart contracts, DeFi applications, NFT platforms, and enterprise blockchain solutions with cutting-edge technology.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      title: "Custom Software Solutions",
      description: "Tailored enterprise software, SaaS platforms, and business automation systems designed for scalability and performance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions with modern interfaces, intuitive experiences, and conversion-optimized layouts.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
      </svg>`
    }
  ];

  const whyChooseUs = [
    {
      title: "Full-Stack Expertise",
      description: "End-to-end development capabilities from frontend to backend, database design, and cloud infrastructure deployment.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "AI & Blockchain Specialists",
      description: "Deep expertise in machine learning, AI integration, smart contracts, and blockchain technology implementation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>`
    },
    {
      title: "Scalable Architecture",
      description: "Enterprise-grade solutions designed for growth, performance, and long-term maintainability with modern tech stack.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
      </svg>`
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Full-Stack Software Development Agency"
        intro="Dragon Agency is a premier software development company specializing in full-stack web and mobile development, AI solutions, and blockchain technology. We transform businesses through innovative, scalable software solutions."
        image="/img/logo/logo-3d.png"
        imageAlt="Full-Stack Software Development Agency"
      />

      <Features
        title="Our Software Development Services"
        intro="Comprehensive full-stack development solutions combining web, mobile, AI, and blockchain technologies for modern businesses."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={true}
      />

      <Features
        title="Why Choose Dragon Agency?"
        intro="We combine technical excellence with business acumen to deliver scalable, innovative software solutions that drive real results."
        features={whyChooseUs}
        columns={3}
        backgroundColor="gray"
        showDivider={true}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ContactSection 
        title="Ready to Build Your Software Solution?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default HomePage;

