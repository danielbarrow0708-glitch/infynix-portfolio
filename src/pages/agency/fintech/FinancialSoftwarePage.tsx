import React from 'react';
import { HeaderBanner, Features, ContactSection, TestimonialCarousel, ProcessBlocks, FAQs } from '../../../components/Agency/Sections';

const FinancialSoftwarePage: React.FC = () => {
  const financialServices = [
    {
      title: 'Core banking systems',
      description: 'We build and customize software platforms for banking operations, including account management, transaction processing, and customer relationship management.',
    },
    {
      title: 'Risk management software',
      description: 'We develop tools to assess and mitigate financial risks, such as credit risk, market risk, and operational risk.',
    },
    {
      title: 'Portfolio management',
      description: 'We create financial software for managing investment portfolios, tracking asset performance, and making investment decisions.',
    },
    {
      title: 'Trading platforms',
      description: 'We design trading systems and platforms for buying and selling financial instruments, such as stocks, bonds, and derivatives.',
    },
    {
      title: 'Regulatory compliance',
      description: 'We develop software that helps financial institutions comply with regulatory requirements and reporting obligations.',
    },
    {
      title: 'Payment processing',
      description: 'We build payment processing solutions for handling financial transactions, including online payments and electronic funds transfers.',
    },
  ];

  const additionalFeatures = [
    {
      title: 'Security and data privacy',
      description: 'We build secure financial systems with advanced encryption and authentication methods, ensuring ongoing protection against evolving cyber threats.',
    },
    {
      title: 'Integrations',
      description: 'We seamlessly integrate your financial software with existing systems, enhancing workflow efficiency and data accuracy.',
    },
    {
      title: 'Regulatory compliance',
      description: 'We ensure compliance with industry standards, including AML, KYC, GDPR, PCI DSS, and PSD2, reducing legal risks and maintaining your reputation.',
    },
    {
      title: 'Support and maintenance',
      description: 'We provide ongoing support to keep your financial software running smoothly and efficiently.',
    },
    {
      title: 'UX research and design',
      description: 'We prioritize user experience (UX) research and design to create intuitive and user-friendly financial software, enhancing user satisfaction and productivity.',
    },
    {
      title: 'Product management',
      description: 'Our product management expertise helps you define and refine your financial software roadmap, ensuring it aligns with your business goals and evolves to meet changing market demands.',
    },
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Analyze",
      description: "Budget Consulting, Strategy Consulting, and Product Discovery Workshop to understand your financial software requirements and business objectives.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Discover & Define",
      description: "UX Research, Product Roadmap, UX Design, and UI Design to create intuitive financial software interfaces and seamless user experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Deliver & Scale",
      description: "Product Development, DevOps Architecture, and Continuous User Feedback & Delivery to build and deploy your financial software solution.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 4,
      title: "Expand",
      description: "Recruit your own team with our help to scale your financial software operations and maintain long-term growth and innovation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What is custom financial software development?",
      answer: "Custom financial software services refer to the development, design, and implementation of software solutions tailored specifically to the needs and requirements of financial institutions or businesses operating in the financial industry. These solutions are designed to address specific challenges, automate business processes, and enhance the efficiency of financial operations, and are developed by providers with a deep understanding of financial markets, instruments, regulations, and the industry-specific requirements."
    },
    {
      question: "What sets you apart from other financial software development companies?",
      answer: "We're an experienced financial software development company that excels in: Quality Assurance: At Pragmatic Coders, we integrate testing and quality checking into our development process, reducing costs, minimizing bugs, and ensuring code quality through continuous monitoring. Modern development with Agile methodology: Unlike traditional methods, our apps undergo multiple releases during development, eliminating the need for post-testing stabilization. We embrace Agile practices like Continuous Delivery, Test-Driven Development, and Scrum for efficient deployment. Product management focus: Our Product Managers oversee the entire financial software development lifecycle, prioritizing value, speed, and revenue generation, ensuring products meet customer needs and business requirements, and get a competitive edge over your competitors. Effective Scrum implementation: We adopt Scrum for iterative development, gathering early feedback and optimizing MVP outcomes. Cross-functional teams and self-organization enhance collaboration and productivity for outstanding client results."
    },
    {
      question: "What's your experience in UX research and product design for fintech products?",
      answer: "Our expertise extends to conducting in-depth UX research and crafting intuitive interfaces, ensuring a seamless customer experience for a multitude of financial solutions. We have experience with various fintech products including banking apps, trading platforms, and investment management tools."
    },
    {
      question: "How long does it take you to build an MVP?",
      answer: "Building an MVP for the finance industry takes us up to 3 months. To learn more about our MVP-building process, read this guide: How long and how much does it take to build an MVP?"
    },
    {
      question: "What's your technology stack for financial software development?",
      answer: "Our core technologies include React, JavaScript, Node.js, and AWS. We've built a diverse portfolio of mobile and web apps. If a specific technology isn't in our wheelhouse, we can always bring in the right developer for the job."
    },
    {
      question: "How long will it take you to gather the software development team for my product?",
      answer: "Usually from 0 days to 2 months. To learn more about the delivery time for different types of outsourcing, check this site: Nearshore & Offshore Software Development Centers"
    },
  ];

  return (
    <div>
      <HeaderBanner
        category="Fintech"
        title="Custom financial software development services"
        intro="We create custom financial software solutions that match the needs of both fintech startups and well-established institutions."
        image="/img/templates/services/fintech/financial-software.webp"
      />
      
      <Features
        title="Custom financial software development services"
        intro="Our custom financial software development services encompass a wide range of solutions, including but not limited to the following:"
        features={financialServices}
        columns={3}
        backgroundColor="white"
      />

      <ProcessBlocks
        title="Our financial software development process"
        intro="This is how we work"
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <TestimonialCarousel />

      <Features
        title="Our financial software development services provide you with comprehensive end-to-end solutions"
        intro=""
        features={additionalFeatures}
        columns={3}
        backgroundColor="gray"
      />

      <FAQs
        title="Custom financial software development FAQ"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Financial Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default FinancialSoftwarePage;
