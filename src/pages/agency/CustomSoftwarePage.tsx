import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../components/Agency/Sections';

const CustomSoftwarePage: React.FC = () => {
  const services = [
    {
      title: "Enterprise Software Solutions",
      description: "Scalable enterprise applications designed to streamline operations and boost productivity across your organization.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Business Process Automation",
      description: "Custom automation tools that eliminate manual tasks and optimize workflows for maximum efficiency.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Data Management Systems",
      description: "Robust database solutions and data analytics platforms for informed decision-making and insights.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "Integration Platforms",
      description: "Seamless integration solutions that connect your existing systems and third-party applications.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>`
    },
    {
      title: "Custom CRM/ERP Solutions",
      description: "Tailored customer relationship management and enterprise resource planning systems for your business.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
      </svg>`
    },
    {
      title: "Legacy System Modernization",
      description: "Upgrade and modernize your legacy systems with new technologies while preserving critical business logic.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18v2h20v-2H0z"/>
      </svg>`
    }
  ];

  const benefits = [
    {
      title: "Perfect Fit for Your Business",
      description: "Unlike off-the-shelf solutions, our custom software is designed specifically for your unique requirements and workflows.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Scalability & Growth",
      description: "Built to grow with your business, our solutions can easily scale to accommodate increased users and functionality.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Cost-Effective Long-term",
      description: "While initial investment may be higher, custom software eliminates recurring licensing fees and provides better ROI.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Requirements Analysis",
      description: "Deep dive into your business processes, challenges, and goals to define detailed requirements.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Architecture Design",
      description: "Create robust system architecture and technical specifications for optimal performance and scalability.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      step: 3,
      title: "Agile Development",
      description: "Iterative development with regular feedback and testing to ensure the solution meets your expectations.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      step: 4,
      title: "Deployment & Training",
      description: "Smooth deployment with comprehensive user training and ongoing support for successful adoption.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "How is custom software different from off-the-shelf solutions?",
      answer: "Custom software is built specifically for your business needs, offering perfect fit, better integration, and unique competitive advantages. Off-the-shelf solutions are generic and may require workarounds for your specific processes."
    },
    {
      question: "What's the typical timeline for custom software development?",
      answer: "Timeline varies by complexity. Simple applications take 3-6 months, while complex enterprise systems can take 6-18 months. We provide detailed project timelines during the planning phase with regular milestone updates."
    },
    {
      question: "How do you ensure the software meets our requirements?",
      answer: "We use an agile development approach with regular demos, feedback sessions, and iterative improvements. You're involved throughout the process to ensure the final product exceeds your expectations."
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes, we offer comprehensive maintenance packages including bug fixes, security updates, performance optimization, and feature enhancements to keep your software running smoothly and up-to-date."
    },
    {
      question: "Can the software integrate with our existing systems?",
      answer: "Absolutely! We specialize in creating solutions that seamlessly integrate with your existing databases, CRM, ERP, and third-party applications to ensure smooth data flow and unified operations."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="Custom Software Development Services"
        intro="Transform your business with tailor-made software solutions. We build scalable, secure, and efficient applications designed specifically for your unique requirements and workflows."
        image="/img/templates/services/custom-software-development/custom-software-dev.webp"
      />

      <Features
        title="Our Custom Software Development Services"
        intro="Comprehensive custom software solutions tailored to your business needs and objectives."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Benefits of Custom Software"
        intro="Why choose custom software development over off-the-shelf solutions?"
        features={benefits}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Custom Software Development Process"
        intro="We follow a proven methodology to deliver software that perfectly fits your business needs."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Custom Software Solution?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default CustomSoftwarePage;

