import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../components/Agency/Sections';

const WebDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: "Custom Web Applications",
      description: "Full-stack web applications built with modern frameworks like React, Vue.js, and Node.js for optimal performance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "E-commerce Platforms",
      description: "Scalable online stores with secure payment processing, inventory management, and user-friendly interfaces.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>`
    },
    {
      title: "Progressive Web Apps",
      description: "PWAs that combine the best of web and mobile apps with offline functionality and native-like experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs that power your applications with secure, scalable backend services.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      title: "Content Management Systems",
      description: "Custom CMS solutions that give you complete control over your content with intuitive admin interfaces.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
      </svg>`
    },
    {
      title: "Web Performance Optimization",
      description: "Speed optimization, SEO enhancements, and technical improvements for better user experience and search rankings.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    }
  ];

  const technologies = [
    {
      title: "Frontend Excellence",
      description: "React, Vue.js, Angular, TypeScript, Next.js, and modern CSS frameworks for stunning user interfaces.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
      </svg>`
    },
    {
      title: "Backend Power",
      description: "Node.js, Python, PHP, .NET, and robust databases for scalable server-side architecture.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Cloud & DevOps",
      description: "AWS, Google Cloud, Docker, CI/CD pipelines, and automated deployment for reliable hosting.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "We analyze your requirements, target audience, and create a detailed project roadmap.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes for optimal user experience.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"/>
      </svg>`
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Agile development with continuous testing to ensure quality and performance standards.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      step: 4,
      title: "Launch & Support",
      description: "Smooth deployment with ongoing maintenance, updates, and technical support.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What technologies do you use for web development?",
      answer: "We use modern technologies including React, Vue.js, Angular for frontend; Node.js, Python, PHP for backend; and cloud platforms like AWS and Google Cloud. We choose the best tech stack based on your project requirements."
    },
    {
      question: "How long does it take to develop a website?",
      answer: "Timeline varies by complexity. A simple website takes 4-6 weeks, a complex web application takes 3-6 months. We provide detailed timelines during the planning phase and keep you updated throughout development."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including security updates, performance optimization, content updates, and technical support to keep your website running smoothly."
    },
    {
      question: "Can you integrate with existing systems?",
      answer: "Absolutely! We specialize in integrating websites with existing CRM, ERP, payment systems, and third-party APIs. We ensure seamless data flow between all your business systems."
    },
    {
      question: "Is the website mobile-responsive?",
      answer: "Yes, all our websites are fully responsive and optimized for all devices including desktops, tablets, and smartphones. We follow mobile-first design principles for optimal user experience."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Full-Stack Web Development Services"
        intro="Build scalable, high-performance web applications with our full-stack development expertise. From frontend to backend, database design to cloud deployment, we deliver complete web solutions."
        image="/img/templates/services/web-development/web-design-and-development.webp"
      />

      <Features
        title="Our Full-Stack Web Development Services"
        intro="End-to-end web development solutions from frontend to backend, ensuring scalable and maintainable web applications."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Technologies We Master"
        intro="We use cutting-edge technologies to build websites that are fast, secure, and scalable."
        features={technologies}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Web Development Process"
        intro="We follow a proven methodology to deliver websites that exceed your expectations."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Web Application?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default WebDevelopmentPage;

