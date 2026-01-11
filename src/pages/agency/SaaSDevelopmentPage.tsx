import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../components/Agency/Sections';

const SaaSDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: "Multi-Tenant Architecture",
      description: "Scalable SaaS platforms with secure multi-tenant architecture for thousands of users and organizations.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Subscription Management",
      description: "Complete billing systems with subscription plans, payment processing, and automated invoicing capabilities.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    },
    {
      title: "API Development",
      description: "Robust RESTful and GraphQL APIs that enable third-party integrations and mobile app connectivity.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics dashboards and reporting tools to track user behavior and business metrics.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Cloud Infrastructure",
      description: "Scalable cloud deployment with auto-scaling, load balancing, and high availability across multiple regions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with data encryption, compliance features, and regular security audits.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const features = [
    {
      title: "Rapid Scalability",
      description: "Built to handle growth from 10 users to 10 million users without performance degradation or architectural changes.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
      </svg>`
    },
    {
      title: "Global Accessibility",
      description: "Multi-region deployment with CDN integration for fast loading times and 99.9% uptime worldwide.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Revenue Optimization",
      description: "Advanced pricing models, A/B testing for features, and conversion optimization to maximize your revenue.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Market Research & Strategy",
      description: "Analyze target market, competitors, and define your SaaS business model and monetization strategy.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "MVP Development",
      description: "Build a minimum viable product with core features to validate your concept and gather user feedback.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      step: 3,
      title: "Scale & Enhance",
      description: "Iteratively add features, optimize performance, and scale infrastructure based on user growth and feedback.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
      </svg>`
    },
    {
      step: 4,
      title: "Launch & Growth",
      description: "Go-to-market strategy implementation with marketing automation, user onboarding, and growth optimization.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What's the difference between SaaS and traditional software?",
      answer: "SaaS (Software as a Service) is cloud-based, accessible anywhere, with subscription pricing and automatic updates. Traditional software requires installation and manual updates. SaaS offers better scalability, lower upfront costs, and easier maintenance."
    },
    {
      question: "How long does it take to develop a SaaS platform?",
      answer: "A basic MVP takes 3-6 months, while a full-featured SaaS platform takes 6-12 months. Timeline depends on complexity, features, integrations, and team size. We provide detailed project roadmaps with milestone deliveries."
    },
    {
      question: "How do you ensure data security and compliance?",
      answer: "We implement enterprise-grade security including data encryption, secure authentication, regular security audits, and compliance with standards like GDPR, HIPAA, and SOC 2 based on your requirements."
    },
    {
      question: "Can you help with the business model and pricing strategy?",
      answer: "Yes! We provide strategic consulting on business models, pricing strategies, market positioning, and monetization optimization based on industry best practices and market research."
    },
    {
      question: "What ongoing support do you provide after launch?",
      answer: "We offer comprehensive post-launch support including infrastructure monitoring, security updates, feature enhancements, performance optimization, and 24/7 technical support to ensure your SaaS success."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="SaaS Development Services"
        intro="Build scalable Software-as-a-Service platforms that grow with your business. From MVP to enterprise-grade solutions, we create SaaS applications that drive recurring revenue and customer success."
        image="/img/templates/services/saas-application-development/saas.webp"
      />

      <Features
        title="Our SaaS Development Services"
        intro="Complete SaaS development solutions from concept to successful market launch."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Why Choose Our SaaS Development"
        intro="We understand the unique challenges and opportunities of building successful SaaS businesses."
        features={features}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our SaaS Development Process"
        intro="From idea validation to market success, we guide you through every step of SaaS development."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your SaaS Platform?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default SaaSDevelopmentPage;

