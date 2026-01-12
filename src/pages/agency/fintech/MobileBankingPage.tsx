import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../../components/Agency/Sections';

const MobileBankingPage: React.FC = () => {
  const mobileBankingServices = [
    {
      title: "Mobile Banking Applications",
      description: "Build cutting-edge mobile banking apps for iOS and Android with intuitive UX design, secure authentication, and seamless user experiences that compete with leading fintech offerings.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>
      </svg>`
    },
    {
      title: "Account Opening & Onboarding",
      description: "Streamline customer onboarding with digital account opening, KYC verification, and automated identity checks for seamless mobile banking experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
      </svg>`
    },
    {
      title: "Authentication & Biometrics",
      description: "Implement secure authentication methods including biometric login (fingerprint, face ID), multi-factor authentication, and advanced security features.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Bots & Virtual Assistants",
      description: "Integrate AI-powered chatbots and virtual assistants to provide 24/7 customer support, answer queries, and assist with banking operations.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
      </svg>`
    },
    {
      title: "Payment & Transfer Features",
      description: "Enable secure mobile payments, peer-to-peer transfers, bill payments, and international remittances with real-time transaction processing.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "AI Integration for Mobile Banking",
      description: "Integrate AI solutions to improve operations, customer experiences, and decision-making with personalized offers, fraud detection, and predictive analytics.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Core Banking Integration",
      description: "Seamlessly integrate mobile banking apps with core banking systems, ensuring real-time data synchronization and secure API connections.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Neobank Development",
      description: "Build innovative and customer-focused challenger banks with mobile-first design, competing with traditional financial institutions through superior digital banking services.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
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
      description: "We seamlessly integrate your mobile banking software with existing systems, enhancing workflow efficiency and data accuracy while maintaining security.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Support and Maintenance",
      description: "Protection goes beyond development. We provide ongoing support to keep your mobile banking software running smoothly and efficiently.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Analyze",
      description: "Budget Consulting, Strategy Consulting, and Product Discovery Workshop to understand your mobile banking requirements and business objectives.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Discover & Define",
      description: "UX Research, Product Roadmap, UX Design, and UI Design to create intuitive mobile banking interfaces and seamless user experiences.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Deliver & Scale",
      description: "Product Development, DevOps Architecture, and Continuous User Feedback & Delivery to build and deploy your mobile banking application.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 4,
      title: "Expand",
      description: "Recruit your own team with our help to scale your mobile banking operations and maintain long-term growth and innovation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What features can you include in a mobile banking app?",
      answer: "We can develop comprehensive mobile banking apps with features including account management, payments and transfers, bill payments, mobile check deposit, biometric authentication, AI-powered chatbots, investment tracking, loan applications, card management, and real-time notifications. We also integrate with core banking systems and third-party services."
    },
    {
      question: "How do you ensure mobile banking app security?",
      answer: "We implement multiple security layers including end-to-end encryption, secure authentication (biometrics, multi-factor authentication), secure API integrations, PCI DSS compliance, regular security audits, and real-time fraud monitoring. All mobile banking apps meet the highest financial industry security standards."
    },
    {
      question: "Can you integrate with existing banking systems?",
      answer: "Yes, we specialize in integrating mobile banking apps with core banking systems, payment processors, third-party financial APIs, and legacy banking infrastructure. We ensure seamless data flow while maintaining security and compliance standards."
    },
    {
      question: "What is the typical timeline for mobile banking app development?",
      answer: "Timeline varies by complexity and requirements. Simple mobile banking apps take 4-6 months, while comprehensive banking platforms with advanced features take 8-12 months. We provide detailed timelines including testing, security audits, and compliance milestones."
    },
    {
      question: "Do you support both iOS and Android development?",
      answer: "Yes, we develop native mobile banking apps for both iOS and Android platforms, as well as cross-platform solutions. We ensure consistent user experiences across platforms while leveraging platform-specific features like biometric authentication and push notifications."
    }
  ];

  return (
    <div>
      <HeaderBanner
        category="Mobile Banking"
        title="Custom Mobile Banking Software Development Services"
        intro="Innovative, secure, and regulation-compliant product development for both banking startups and enterprise companies. Build cutting-edge mobile banking apps with seasoned fintech developers and UX designers."
        image="/img/templates/services/fintech/mobile-banking.webp"
      />

      <Features
        title="Custom Mobile Banking Development Services"
        intro="We create secure and user-friendly mobile banking applications that compete with leading fintech offerings, enhancing usability and accelerating the evolution of mobile banking."
        features={mobileBankingServices}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="We Ensure Security and Regulatory Compliance"
        intro="Technical expertise alone is not enough in such highly regulated sectors as fintech and banking. We understand the unique challenges and requirements of the finance industry."
        features={securityFeatures}
        columns={2}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Mobile Banking Development Process"
        intro="This is how we work - from analysis to expansion, we guide you through every step of building your mobile banking solution."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Mobile Banking App?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default MobileBankingPage;
