import React from 'react';
import { Link } from 'react-router-dom';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../components/Agency/Sections';

const FintechDevelopmentPage: React.FC = () => {
  // Fintech Services from Reference - with original URLs
  const fintechServices = [
    {
      title: "Trading Software Development Services",
      description: "Craft intuitive trading platforms for diverse financial assets, providing seamless transactions and real-time analytics to boost trading experiences.",
      image: "/img/templates/services/fintech/trading-software.webp",
      link: "/trading-software-development-services"
    },
    {
      title: "Insurance Software Development Services",
      description: "Tailored insurance software solutions, optimizing underwriting, claims processing, policy management, and risk assessment.",
      image: "/img/templates/services/fintech/insurance-software.webp",
      link: "/fintech/custom-insurance-software-development-services"
    },
    {
      title: "Custom Banking Software Development",
      description: "Modernize banking services through mobile apps and blockchain integration. Improve customer experiences while maintaining security.",
      image: "/img/templates/services/fintech/banking-software.webp",
      link: "/fintech/banking-software-development"
    },
    {
      title: "Custom Financial Software Development",
      description: "AI, no-code, low-code - we create custom financial software solutions that match the needs of both fintech startups and well-established financial institutions.",
      image: "/img/templates/services/fintech/financial-software.webp",
      link: "/fintech/custom-financial-software-development-services"
    },
    {
      title: "Custom Mobile Banking App Development",
      description: "Build a cutting-edge mobile banking app with seasoned fintech developers and UX designers. Leverage our decade of experience.",
      image: "/img/templates/services/fintech/mobile-banking.webp",
      link: "/fintech/mobile-banking-app-development"
    },
    {
      title: "Accounting Software Development Services",
      description: "Save time and money by automating bookkeeping processes in your business. General ledger solutions, inventory management platforms & more.",
      image: "/img/templates/services/fintech/accounting-software.webp",
      link: "/fintech/accounting-software-development-services"
    },
    {
      title: "Custom Blockchain Development Services",
      description: "Everything you need to build blockchain products in one place: New blockchains, smart contracts, tokens, NFT, cryptocurrency exchanges.",
      image: "/img/templates/services/fintech/blockchain-development.webp",
      link: "/custom-blockchain-development"
    },
    {
      title: "Custom Asset Management Software",
      description: "Create investment solutions that boost revenue and ease wealth management. Expertly designed to meet your financial goals.",
      image: "/img/templates/services/fintech/asset-management.webp",
      link: "/fintech/wealth-investment-management-software"
    },
    {
      title: "NFT Trading Platforms Development",
      description: "Lead in the realm of digital assets with secure, scalable, and user-centric NFT exchange platforms. Liquidity, performance, and regulatory adherence.",
      image: "/img/templates/services/fintech/nft-trading.webp",
      link: "/custom-nft-trading-platforms-development"
    },
    {
      title: "Custom Lending Software Development",
      description: "Streamline lending operations and empower borrowers with custom loan origination systems, credit risk management, and tracking systems.",
      image: "/img/templates/services/fintech/lending-software.webp",
      link: "/fintech/lending-software-development-services"
    },
    {
      title: "Digital Wallet App Development Services",
      description: "Secure, trusted mobile and web e-wallet solutions for businesses & their clients. Convenient payments at your fingertips!",
      image: "/img/templates/services/fintech/digital-wallet.webp",
      link: "/fintech/digital-wallet-app-development"
    },
    {
      title: "Payment Gateway Integration Services",
      description: "Protect your business with our secure payment gateway integration services. Accept payments from all major credit cards and debit cards.",
      image: "/img/templates/services/fintech/payment-gateway.webp",
      link: "/fintech/payment-gateway-integration"
    },
    {
      title: "Cryptocurrency Exchange Development",
      description: "Build secure and scalable cryptocurrency exchanges with advanced trading features, liquidity management, and regulatory compliance.",
      image: "/img/templates/services/fintech/crypto-exchange.webp",
      link: "/fintech/cryptocurrency-exchange-development"
    }
  ];

  const services = [
    {
      title: "Payment Processing Systems",
      description: "Secure payment gateways, digital wallets, and transaction processing platforms with PCI DSS compliance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    },
    {
      title: "Trading Platforms",
      description: "High-frequency trading systems, portfolio management tools, and real-time market data integration.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Blockchain & Cryptocurrency",
      description: "Cryptocurrency wallets, DeFi platforms, smart contracts, and blockchain integration solutions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Risk Management Systems",
      description: "Advanced risk assessment, fraud detection, and compliance monitoring with AI-powered analytics.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Digital Banking Solutions",
      description: "Core banking systems, mobile banking apps, and digital-first financial services platforms.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
      </svg>`
    },
    {
      title: "RegTech Solutions",
      description: "Regulatory compliance automation, KYC/AML systems, and financial reporting tools.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>`
    }
  ];

  const compliance = [
    {
      title: "Security Standards",
      description: "PCI DSS, ISO 27001, SOX compliance with enterprise-grade security and encryption protocols.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Regulatory Compliance",
      description: "GDPR, PSD2, MiFID II, and other financial regulations with automated compliance monitoring.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>`
    },
    {
      title: "Financial Auditing",
      description: "Comprehensive audit trails, transaction monitoring, and regulatory reporting capabilities.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Compliance Assessment",
      description: "Analyze regulatory requirements, security standards, and compliance frameworks for your fintech solution.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Secure Architecture",
      description: "Design robust security architecture with encryption, secure APIs, and multi-layer protection systems.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Development & Testing",
      description: "Agile development with rigorous security testing, penetration testing, and compliance validation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      step: 4,
      title: "Launch & Monitoring",
      description: "Secure deployment with continuous monitoring, fraud detection, and regulatory compliance tracking.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "How do you ensure fintech applications are secure?",
      answer: "We implement multiple security layers including end-to-end encryption, secure authentication, PCI DSS compliance, regular security audits, and real-time fraud monitoring. All solutions meet the highest financial industry security standards."
    },
    {
      question: "What regulatory compliance do you support?",
      answer: "We ensure compliance with major financial regulations including PCI DSS, GDPR, PSD2, MiFID II, SOX, KYC/AML requirements, and region-specific banking regulations. We stay updated with evolving regulatory landscapes."
    },
    {
      question: "Can you integrate with existing banking systems?",
      answer: "Yes, we specialize in integrating with core banking systems, payment processors, trading platforms, and third-party financial APIs. We ensure seamless data flow while maintaining security and compliance."
    },
    {
      question: "How long does fintech development typically take?",
      answer: "Timeline varies by complexity and regulatory requirements. Simple payment solutions take 3-6 months, while comprehensive trading platforms take 6-12 months. We provide detailed timelines including compliance milestones."
    },
    {
      question: "Do you provide ongoing compliance monitoring?",
      answer: "Yes, we offer continuous compliance monitoring, security updates, regulatory change management, and 24/7 support to ensure your fintech solution remains compliant and secure as regulations evolve."
    }
  ];

  return (
    <div>
      <HeaderBanner
        category="Fintech"
        title="Dedicated Fintech Software Development Company"
        intro="We build financial apps with a strong understanding of industry regulations and a deep commitment to security and compliance."
        image="/img/templates/services/fintech-software-development/business-growth.webp"
      />

      {/* Fintech Services Grid - Exact Reference Design */}
      <section className="py-16 lg:py-24 bg-professional-dark text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fintechServices.map((service, index) => (
              <div
                key={index}
                className="group relative block-item"
                style={{ marginTop: index > 0 ? '70px' : '0' }}
              >
                <Link
                  to={service.link}
                  className="block-link absolute inset-0 z-10"
                  aria-label={service.title}
                />
                <div className="block-image-wrapper relative h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full bg-professional-dark-lighter flex items-center justify-center"><div class="text-4xl">💰</div></div>';
                      }
                    }}
                  />
                </div>
                <div className="block-item-content bg-professional-dark-light/80 backdrop-blur-sm p-6 rounded-b-lg border-t border-white/10 relative z-5">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-gray-200 transition-colors">
                    {service.title}
                  </h3>
                  <div className="block-txt">
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    to={service.link}
                    className="btn btn__tertiary inline-flex items-center text-white text-sm font-medium hover:text-gray-200 transition-colors"
                    title={`Go to ${service.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Learn More</span>
                  </Link>
                </div>
                <div 
                  className="block-bg absolute inset-0 rounded-lg -z-10 opacity-100"
                  style={{ backgroundColor: '#1F2125CC' }}
                ></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Features
        title="Our Fintech Development Services"
        intro="Comprehensive fintech solutions that meet the highest security and compliance standards."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Security & Compliance Excellence"
        intro="We prioritize security and regulatory compliance in every fintech solution we develop."
        features={compliance}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Fintech Development Process"
        intro="We follow rigorous security and compliance protocols throughout the development lifecycle."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Fintech Solution?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default FintechDevelopmentPage;
