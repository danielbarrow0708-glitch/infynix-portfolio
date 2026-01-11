import React from 'react';
import { 
  HeaderBanner, 
  Features, 
  TestimonialCarousel, 
  ProcessBlocks,
  ContactSection,
  FAQs
} from '../../components/Agency/Sections';

const AIDevelopmentPage: React.FC = () => {
  const services = [
    {
      title: "Machine Learning Models",
      description: "Custom ML models for prediction, classification, and data analysis tailored to your business needs.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "Intelligent Chatbots",
      description: "AI-powered chatbots that provide natural conversations and automate customer support.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"/>
      </svg>`
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis systems for various applications.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding for content automation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Predictive Analytics",
      description: "AI models that analyze data patterns to predict future trends and business outcomes.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    },
    {
      title: "AI Integration",
      description: "Seamless integration of AI capabilities into your existing applications and workflows.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>`
    }
  ];

  const whyChooseUs = [
    {
      title: "Deep AI Expertise",
      description: "Our team has extensive experience in machine learning, deep learning, and AI implementation across various industries.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>`
    },
    {
      title: "Custom Solutions",
      description: "We don't believe in one-size-fits-all. Every AI solution is tailored to your specific business requirements.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
      </svg>`
    },
    {
      title: "Proven Results",
      description: "Our AI solutions have helped clients increase efficiency by 40%, reduce costs by 30%, and improve customer satisfaction significantly.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"/>
      </svg>`
    }
  ];

  const industries = [
    {
      title: "Healthcare",
      description: "AI solutions for medical diagnosis, patient care optimization, and healthcare automation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15.586 13H14a1 1 0 01-1-1z" clipRule="evenodd"/>
      </svg>`
    },
    {
      title: "Finance",
      description: "Fraud detection, algorithmic trading, risk assessment, and financial automation systems.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
      </svg>`
    },
    {
      title: "E-commerce",
      description: "Recommendation engines, price optimization, inventory management, and customer behavior analysis.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
      </svg>`
    },
    {
      title: "Manufacturing",
      description: "Quality control, predictive maintenance, supply chain optimization, and process automation.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const developmentProcess = [
    {
      step: 1,
      title: "Discovery & Analysis",
      description: "We analyze your business requirements, data sources, and define the AI solution scope.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 9a2 2 0 114 0 2 2 0 01-4 0z"/>
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z" clipRule="evenodd"/>
      </svg>`
    },
    {
      step: 2,
      title: "Data Preparation",
      description: "We clean, structure, and prepare your data for optimal AI model training and performance.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
      </svg>`
    },
    {
      step: 3,
      title: "Model Development",
      description: "Our experts develop and train custom AI models using the latest machine learning techniques.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"/>
      </svg>`
    },
    {
      step: 4,
      title: "Testing & Deployment",
      description: "We thoroughly test the AI solution and deploy it with monitoring and continuous optimization.",
      icon: `<svg class="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
      </svg>`
    }
  ];

  const faqs = [
    {
      question: "What types of AI solutions do you develop?",
      answer: "We develop a wide range of AI solutions including machine learning models, chatbots, computer vision systems, natural language processing applications, predictive analytics, and AI integration services. Our solutions are customized to meet your specific business needs."
    },
    {
      question: "How long does it take to develop an AI solution?",
      answer: "The development timeline varies depending on the complexity and scope of the project. Simple AI integrations may take 4-8 weeks, while complex custom AI systems can take 3-6 months. We provide detailed timelines during the discovery phase."
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer: "Yes, we offer comprehensive support and maintenance packages including model retraining, performance monitoring, updates, and technical support to ensure your AI solution continues to perform optimally."
    },
    {
      question: "What data do you need for AI development?",
      answer: "The data requirements depend on your specific AI solution. Generally, we need relevant, clean, and sufficient data related to your problem domain. We can help you identify, collect, and prepare the necessary data during the project."
    },
    {
      question: "How do you ensure data security and privacy?",
      answer: "We follow strict data security protocols including encryption, secure data transfer, limited access controls, and compliance with relevant regulations like GDPR. We can sign NDAs and work within your security requirements."
    }
  ];

  return (
    <div>
      <HeaderBanner
        title="AI & Machine Learning Development"
        intro="Build intelligent software solutions with our AI development services. We create custom machine learning models, chatbots, and AI-powered applications that drive business innovation."
        image="/img/templates/services/ai-development/New-AI-Development-Service-Hero-Section-Img.png"
      />

      <Features
        title="Our AI & Machine Learning Services"
        intro="Comprehensive AI development services for building intelligent software solutions that drive business innovation and automation."
        features={services}
        columns={3}
        backgroundColor="white"
        showDivider={false}
      />

      <Features
        title="Why Choose Our AI Development Team?"
        intro="We bring deep expertise and proven results to every AI project."
        features={whyChooseUs}
        columns={3}
        backgroundColor="gray"
        showDivider={false}
      />

      <TestimonialCarousel backgroundColor="white" />

      <Features
        title="Industries We Serve"
        intro="Our AI solutions have helped businesses across various industries achieve remarkable results."
        features={industries}
        columns={4}
        backgroundColor="blue"
        showDivider={false}
      />

      <ProcessBlocks
        title="Our AI Development Process"
        intro="We follow a proven methodology to ensure successful AI implementation."
        steps={developmentProcess}
        backgroundColor="gray"
      />

      <FAQs
        title="Frequently Asked Questions"
        faqs={faqs}
        backgroundColor="white"
      />

      <ContactSection 
        title="Ready to Build AI-Powered Software?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default AIDevelopmentPage;

