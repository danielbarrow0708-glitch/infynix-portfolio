import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../../components/Agency/Sections';

const BankingSoftwarePage: React.FC = () => {
  const bankingServices = [
    {
      title: "Core Banking Systems",
      description: "Build comprehensive core banking platforms that handle account management, transactions, deposits, loans, and all essential banking operations with high reliability and scalability.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Banking CRM",
      description: "Take control of your customer relationships, from data to sales and marketing. Get a full picture of customer interactions to improve satisfaction and build lasting loyalty.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
      </svg>`
    },
    {
      title: "ATM Software",
      description: "We craft highly efficient software engineered for ATMs, seamlessly handling a multitude of tasks – from cash dispensing to delivering comprehensive account information.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Mobile Banking",
      description: "Develop cutting-edge mobile banking applications for iOS and Android with intuitive UX design, secure authentication, and seamless user experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>
      </svg>`
    },
    {
      title: "AI Integration for Banks",
      description: "We can integrate AI solutions into various aspects of your banking app. Our AI bank development services improve operations, customer experiences, and decision-making.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Neobank Development",
      description: "We'll help you build an innovative and customer-focused challenger bank. Compete with traditional financial institutions with our digital banking services.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const officeSolutions = [
    {
      title: "Front Office Software Development",
      description: "Customer-facing solutions including account opening & onboarding, bots & virtual assistants, and authentication & biometrics for enhanced customer experience.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
      </svg>`
    },
    {
      title: "Middle Office Software Development",
      description: "Risk and compliance solutions including AML, KYC & identity verification, fraud & risk management, and legal & compliance systems.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Back Office Software Development",
      description: "Operational solutions including cybersecurity, finance & treasury management, RPA automation, lending & underwriting, infrastructure & APIs, and core banking & BaaS.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const securityFeatures = [
    {
      title: "Security and Data Privacy",
      description: "Building secure financial systems is our top priority. We make sure your product always stays safe through rigorous testing, advanced encryption and authentication methods.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Regulatory Compliance",
      description: "We ensure compliance with industry standards, such as AML, GDPR, PCI DSS, PSD2, and regulations specific to the regions our clients operate in.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Secure Integrations",
      description: "We seamlessly integrate your banking software with existing systems, enhancing workflow efficiency and data accuracy while maintaining security.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Support and Maintenance",
      description: "Protection goes beyond development. We provide ongoing support to keep your banking software running smoothly and efficiently.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Analyze",
      description: "Budget Consulting, Strategy Consulting, and Product Discovery Workshop to understand your banking requirements and business objectives.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Discover & Define",
      description: "UX Research, Product Roadmap, UX Design, and UI Design to create intuitive banking interfaces and seamless user experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Deliver & Scale",
      description: "Product Development, DevOps Architecture, and Continuous User Feedback & Delivery to build and deploy your banking software solution.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 4,
      title: "Expand",
      description: "Recruit your own team with our help to scale your banking software operations and maintain long-term growth and innovation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What types of banking software can you develop?",
      answer: "We develop comprehensive banking software solutions including core banking systems, banking CRM, ATM software, mobile banking applications, AI integration for banks, and neobank development. We also build solutions for front office (account opening, bots, authentication), middle office (AML, KYC, fraud management), and back office (cybersecurity, treasury, RPA, lending, infrastructure)."
    },
    {
      question: "How do you ensure banking software security?",
      answer: "We implement multiple security layers including end-to-end encryption, secure authentication, advanced encryption methods, rigorous testing, PCI DSS compliance, regular security audits, and real-time fraud monitoring. All banking software meets the highest financial industry security standards."
    },
    {
      question: "Can you integrate with existing banking systems?",
      answer: "Yes, we specialize in integrating banking software with core banking systems, legacy infrastructure, payment processors, third-party financial APIs, and existing banking platforms. We ensure seamless data flow while maintaining security and compliance standards."
    },
    {
      question: "What is the typical timeline for banking software development?",
      answer: "Timeline varies by complexity and requirements. Simple banking applications take 4-6 months, while comprehensive core banking platforms with multiple modules take 8-12 months. We provide detailed timelines including testing, security audits, and compliance milestones."
    },
    {
      question: "Do you provide regulatory compliance support?",
      answer: "Yes, we ensure compliance with industry standards including AML, GDPR, PCI DSS, PSD2, and regulations specific to the regions our clients operate in. We stay updated with evolving regulatory landscapes and build compliance into every solution."
    }
  ];

  return (
    <div>
      <HeaderBanner
        category="Banking Software"
        title="Custom Banking Software Solutions"
        intro="Innovative, secure, and regulation-compliant product development for both banking startups and enterprise companies. We create custom financial software solutions that match the needs of both fintech startups and well-established institutions."
        image="/img/templates/services/fintech/banking-software.webp"
      />

      <Features
        title="Custom Financial Software Development Services"
        intro="We build modern banking solutions with security and compliance, covering all aspects of banking operations from core systems to customer-facing applications."
        features={bankingServices}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Banking Software Development for Front, Middle, and Back Office"
        intro="As experienced fintech software developers, we build comprehensive banking solutions covering all operational areas of your financial institution."
        features={officeSolutions}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <Features
        title="We Ensure Security and Regulatory Compliance"
        intro="Technical expertise alone is not enough in such highly regulated sectors as fintech and banking. We understand the unique challenges and requirements of the finance industry."
        features={securityFeatures}
        columns={2}
        backgroundColor="white"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="gray" />

      <ProcessBlocks
        title="Our Banking Software Development Process"
        intro="This is how we work - from analysis to expansion, we guide you through every step of building your banking software solution."
        steps={developmentProcess}
        backgroundColor="white"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="gray"
      />

      <ContactSection 
        title="Ready to Build Your Banking Platform?"
        backgroundColor="white"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default BankingSoftwarePage;
