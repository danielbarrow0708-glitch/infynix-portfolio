import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../../components/Agency/Sections';

const InsuranceSoftwarePage: React.FC = () => {
  const insuranceServices = [
    {
      title: "Claims Processing Software",
      description: "Digital transformation and workflow automation for your needs. Optimize claims management with AI-based claim validation, damage estimation, and machine learning for fraud detection.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Policy Administration Solutions",
      description: "Manage your policies, including underwriting, rating, and policy issuance. Automate policy management, reduce errors and improve efficiency.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Insurance Marketplaces",
      description: "Create a place where users can compare prices, coverage, and other policy details & purchase insurance policies from multiple providers.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>`
    },
    {
      title: "Risk Assessment Software",
      description: "Evaluate risks and determine premiums for policies. Use data analytics and predictive modeling to assess risk and provide insights into potential losses.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Customer Relationship Management Systems",
      description: "Improve customer satisfaction, increase retention rates, and drive revenue growth by organizing interactions within marketing, sales, and client support.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
      </svg>`
    },
    {
      title: "Document Management Systems",
      description: "Streamline document workflows with secure storage, version control, and automated processing for policies, claims, and customer records.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Underwriting Systems",
      description: "Automate and streamline the underwriting process with intelligent risk evaluation, automated decision-making, and comprehensive policy assessment tools.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Billing & Payment Solutions",
      description: "Automate premium collection, payment processing, and billing cycles with integrated payment gateways and flexible payment options.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Reinsurance Management",
      description: "Manage reinsurance contracts, track cessions, and automate reinsurance reporting with comprehensive reinsurance management solutions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Agent Portal Solutions",
      description: "Empower insurance agents with self-service portals for policy management, customer information access, and commission tracking.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Mobile Insurance Apps",
      description: "Build mobile-first insurance applications that enable customers to manage policies, file claims, and access services on-the-go.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>
      </svg>`
    }
  ];

  const capabilities = [
    {
      title: "Comprehensive Insurance Solutions",
      description: "We build end-to-end insurance software solutions covering all aspects of insurance operations from policy administration to claims processing.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "AI & Machine Learning Integration",
      description: "Leverage artificial intelligence and machine learning for fraud detection, risk assessment, claims automation, and predictive analytics.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Regulatory Compliance",
      description: "Ensure your insurance software meets all regulatory requirements including GDPR, HIPAA, and insurance industry-specific compliance standards.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Scalable Architecture",
      description: "Build insurance platforms that scale with your business, handling growing customer bases and increasing transaction volumes without performance degradation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Analyze",
      description: "Budget Consulting, Strategy Consulting, and Product Discovery Workshop to understand your insurance business needs and requirements.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Discover & Define",
      description: "UX Research, Product Roadmap, UX Design, and UI Design to create intuitive insurance software interfaces and workflows.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Deliver & Scale",
      description: "Product Development, DevOps Architecture, and Continuous User Feedback & Delivery to build and deploy your insurance software solution.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 4,
      title: "Expand",
      description: "Recruit your own team with our help to scale your insurance software operations and maintain long-term growth.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What types of insurance software can you develop?",
      answer: "We develop comprehensive insurance software solutions including claims processing systems, policy administration platforms, insurance marketplaces, risk assessment tools, CRM systems, document management, underwriting systems, billing solutions, reinsurance management, agent portals, and mobile insurance applications."
    },
    {
      question: "How do you ensure insurance software compliance?",
      answer: "We ensure compliance with all relevant regulations including GDPR, HIPAA, and insurance industry-specific standards. Our solutions include built-in compliance features, audit trails, and regular compliance monitoring to meet regulatory requirements."
    },
    {
      question: "Can you integrate with existing insurance systems?",
      answer: "Yes, we specialize in integrating with legacy insurance systems, third-party APIs, payment processors, and data providers. We ensure seamless data flow while maintaining security and compliance standards."
    },
    {
      question: "What is the typical timeline for insurance software development?",
      answer: "Timeline varies by complexity and requirements. Simple insurance applications take 4-6 months, while comprehensive enterprise insurance platforms with multiple modules take 8-12 months. We provide detailed timelines including testing and compliance milestones."
    },
    {
      question: "Do you provide AI and machine learning capabilities?",
      answer: "Yes, we integrate AI and machine learning for fraud detection, automated claims processing, risk assessment, predictive analytics, and intelligent document processing to enhance efficiency and accuracy in insurance operations."
    }
  ];

  return (
    <div>
      <HeaderBanner
        category="Insurance Software"
        title="Custom Insurance Software Development Services"
        intro="Streamline insurance workflows & lower operational costs with our digital solutions for the insurance industry, from insurtech startups to enterprise insurance companies."
        image="/img/templates/services/fintech/insurance-software.webp"
      />

      <Features
        title="We Build Custom Insurance Software Solutions"
        intro="Optimize workflows & lower operational costs with our insurance software development services. Get the perfect solution for your company."
        features={insuranceServices}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Why Choose Us for Insurance Software Development"
        intro="We bring comprehensive expertise and proven methodologies to every insurance software project."
        features={capabilities}
        columns={2}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Insurance Software Development Process"
        intro="This is how we work - from analysis to expansion, we guide you through every step of building your insurance software solution."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Insurance Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default InsuranceSoftwarePage;
