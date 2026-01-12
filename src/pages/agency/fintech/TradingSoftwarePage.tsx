import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../../components/Agency/Sections';

const TradingSoftwarePage: React.FC = () => {
  const tradingServices = [
    {
      title: "Custom Online Trading Platforms",
      description: "Pragmatic Coders as a FinTech Software House provides professional custom trading platform software development services, trading system customizations and integrations, trading monitoring software development, and more. Products made by our FinTech experts are characterized by the highest level of reliability, security, and full scalability.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      title: "OTC Trading Platforms",
      description: "Looking for an alternative to exchange trading? Our specialists will develop Over the Counter trading platform both based on the type of market participants and the type of derivative contracts.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Mobile Trading Apps",
      description: "Mobile Trading Software brings the trading opportunity to non-professional traders as well as leverages the trading possibilities of professionals. Mobile trading apps allow users to be on track and quickly respond to the latest market changes. That requires high-quality, secure solutions that our experienced team assures.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"/>
      </svg>`
    },
    {
      title: "Futures Trading Software",
      description: "Futures contracts allow sides to secure a specific price and protect against the possibility of wild price swings ahead. We would be happy to prepare an application for this type of contract.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Data Analysis Solutions",
      description: "Data is ruling the market. Custom, large-scale financial and market data analysis solutions create a great advantage over competitors in trading markets. Data visualization (charts, trends, etc.) combined with various analytical methods such as forecasting and searching for patterns might help your clients make better trading decisions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Liquidity Management Platforms",
      description: "Many businesses have much of their value in investments and assets such as real estate, inventory, and equipment. Want to help them better manage their liquidity? Let us help you create a successful product.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    },
    {
      title: "Commodities Trading Software",
      description: "Do you want software dedicated to commodities trading for various asset classes? Build it with a dedicated product development team from Pragmatic Coders experienced in developing these kinds of platforms.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>`
    },
    {
      title: "Stock and Equities Trading Software",
      description: "Developing software for stock and equities trading is part of our extensive FinTech skills. Our experts will get you a working product at a fast pace.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Currency Exchange Software",
      description: "We specialize in creating both Fiat currency exchanges and cryptocurrency exchanges. We have already created applications that allow you to exchange popular currencies for crypto and vice versa.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Hedging Software",
      description: "Protect your investments with sophisticated hedging software solutions that help manage risk and secure positions in volatile markets.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Brokerage Systems",
      description: "Online brokerage can offer ultra-high-speed and highly convenient information analysis to online traders. And it's all thanks to your app, which we'll be happy to prepare.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Market Monitoring Software",
      description: "Real-time market monitoring solutions that track price movements, volume changes, and market trends to help traders make informed decisions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "Trading Execution Middleware",
      description: "High-performance middleware solutions that ensure fast, reliable trade execution with minimal latency for critical trading operations.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Cryptocurrency Exchanges",
      description: "Secure and scalable cryptocurrency exchange platforms with advanced trading features, liquidity management, and regulatory compliance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const capabilities = [
    {
      title: "Partners in trading system development",
      description: "We work closely with our clients as strategic partners, understanding their business needs and delivering trading solutions that drive success.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5zM15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"/>
      </svg>`
    },
    {
      title: "Experience in web & mobile trading software projects",
      description: "Our team has extensive experience building both web-based and mobile trading platforms, ensuring seamless user experiences across all devices.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "We will help to scale your trading operations",
      description: "Our solutions are built for scalability, allowing your trading platform to grow with your business and handle increasing volumes without performance issues.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "All competencies needed to build your financial software",
      description: "From frontend development to backend infrastructure, security, compliance, and integration - we have all the skills needed to build comprehensive trading solutions.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Requirements & Analysis",
      description: "We analyze your trading requirements, regulatory needs, and market specifications to design the optimal solution architecture.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Architecture & Design",
      description: "We design scalable, secure trading platform architecture with real-time data processing, order management, and risk controls.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 3,
      title: "Development & Integration",
      description: "Agile development with continuous integration of market data feeds, payment gateways, and third-party trading APIs.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 4,
      title: "Testing & Launch",
      description: "Comprehensive testing including performance, security, and compliance validation before secure deployment and go-live.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What types of trading platforms can you develop?",
      answer: "We develop various trading platforms including online trading platforms, OTC trading platforms, mobile trading apps, futures trading software, cryptocurrency exchanges, brokerage systems, and specialized solutions for stocks, commodities, and currencies."
    },
    {
      question: "How do you ensure trading platform security?",
      answer: "We implement multiple security layers including end-to-end encryption, secure authentication, PCI DSS compliance, real-time fraud monitoring, and regular security audits. All trading platforms meet the highest financial industry security standards."
    },
    {
      question: "Can you integrate with market data providers?",
      answer: "Yes, we specialize in integrating with major market data providers, trading APIs, payment processors, and third-party financial services. We ensure real-time data feeds and seamless integration while maintaining security and compliance."
    },
    {
      question: "What is the typical timeline for trading platform development?",
      answer: "Timeline varies by complexity and requirements. Simple trading platforms take 4-6 months, while comprehensive multi-asset trading platforms with advanced features take 8-12 months. We provide detailed timelines including testing and compliance milestones."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer continuous support, security updates, performance optimization, and feature enhancements to ensure your trading platform remains secure, compliant, and competitive as market conditions evolve."
    }
  ];

  return (
    <div>
      <HeaderBanner
        category="Trading Software"
        title="Dedicated Trading Software Development Services"
        intro="Trading platforms, exchanges, trading software, commodity trading platforms. All you need to build your next trading platform in one place."
        image="/img/templates/services/fintech/trading-software.webp"
      />

      <Features
        title="Custom Trading Platform Development Services"
        intro="We provide professional custom trading platform software development services, trading system customizations and integrations, trading monitoring software development, and more. Products made by our FinTech experts are characterized by the highest level of reliability, security, and full scalability."
        features={tradingServices}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Why Choose Us for Trading Software Development"
        intro="We bring extensive experience and comprehensive capabilities to every trading software project."
        features={capabilities}
        columns={2}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <ProcessBlocks
        title="Our Trading Software Development Process"
        intro="We follow rigorous development protocols to deliver secure, scalable, and high-performance trading platforms."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build Your Trading Platform?"
        backgroundColor="gray"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default TradingSoftwarePage;
