import React from 'react';
import { useParams } from 'react-router-dom';
import { HeaderBanner, TestimonialCarousel, ContactSection } from '../../components/Agency/Sections';

const SinglePortfolioPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Project data - in a real app, this would come from an API
  const projectData = {
    'fuji': {
      name: 'FUJI',
      description: 'Social media-style app for reporting production errors, with an admin web app for project and user management',
      problem: 'Manufacturing companies need an efficient way to report and track production errors in real-time, with proper project and user management capabilities.',
      solution: 'FUJI provides a social media-style interface for error reporting combined with a comprehensive admin web application for project and user management.',
      whatWeDid: [
        'Developed social media-style mobile app for error reporting',
        'Built comprehensive admin web application',
        'Created real-time notification system',
        'Implemented project and user management features',
        'Built cross-platform mobile and web solutions'
      ],
      technologies: ['Django', 'Vue', 'Flutter'],
      image: '/img/portfolio/fujikikai-in-mobile.webp'
    },
    'plane-fax': {
      name: 'PLANE FAX',
      description: 'Aviation logistics and tracking platform for real-time flight monitoring and cargo management',
      problem: 'Aviation companies need real-time tracking of flights, cargo, and logistics operations to ensure efficient delivery and compliance with aviation regulations.',
      solution: 'PLANE FAX provides comprehensive aviation logistics management with real-time flight tracking, cargo monitoring, and automated compliance reporting.',
      whatWeDid: [
        'Built real-time flight tracking and monitoring system',
        'Developed cargo management and tracking platform',
        'Created automated compliance and reporting tools',
        'Implemented IoT integration for cargo sensors',
        'Built mobile applications for field operations'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS IoT', 'Socket.io'],
      image: '/img/templates/testimonials/plane-fax.webp'
    },
    'blodgic': {
      name: 'BLODGIC',
      description: 'Blockchain-based supply chain management system with transparent tracking and smart contracts',
      problem: 'Supply chains lack transparency and trust, making it difficult to track products from source to destination and ensure authenticity.',
      solution: 'BLODGIC leverages blockchain technology to create a transparent, immutable supply chain tracking system with smart contracts for automated compliance.',
      whatWeDid: [
        'Developed blockchain-based tracking system',
        'Built smart contracts for automated compliance',
        'Created transparent supply chain dashboard',
        'Implemented IoT integration for real-time tracking',
        'Built mobile applications for field verification'
      ],
      technologies: ['Ethereum', 'Solidity', 'React', 'Node.js', 'Web3.js'],
      image: '/img/portfolio/Blodgic-Portfolio-Thumbnail.png'
    },
    'generac': {
      name: 'GENERAC',
      description: 'Energy management platform for renewable energy monitoring and optimization',
      problem: 'Energy companies need to monitor and optimize renewable energy systems to maximize efficiency and reduce operational costs.',
      solution: 'GENERAC provides comprehensive energy management with real-time monitoring, predictive analytics, and automated optimization for renewable energy systems.',
      whatWeDid: [
        'Built real-time energy monitoring system',
        'Developed predictive analytics for energy optimization',
        'Created automated control systems for energy management',
        'Implemented IoT integration for sensor networks',
        'Built comprehensive reporting and analytics dashboard'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'TensorFlow'],
      image: '/img/portfolio/generac-thumbnail-370x265.webp'
    },
    'export-orbital': {
      name: 'Export Orbital',
      description: 'AI SaaS platform that guides users through compliance documents and builds strategies to meet regulations',
      problem: 'Companies struggle to navigate complex compliance requirements and need intelligent guidance to ensure regulatory compliance.',
      solution: 'Export Orbital uses AI to analyze compliance documents and provide strategic guidance for meeting regulatory requirements.',
      whatWeDid: [
        'Developed AI-powered compliance analysis system',
        'Built document processing and analysis engine',
        'Created strategic compliance guidance platform',
        'Implemented automated compliance checking',
        'Built comprehensive reporting and audit trails'
      ],
      technologies: ['Django', 'React Native', 'Python', 'TensorFlow', 'AWS'],
      image: '/img/portfolio/export-orbital-new-thumbnail-370x265.webp'
    },
    'yellowbook-cpe': {
      name: 'Yellowbook-CPE',
      description: 'Performance optimization and custom feature development for a high-traffic e-learning WordPress website',
      problem: 'High-traffic e-learning websites need performance optimization and custom features to handle large user loads efficiently.',
      solution: 'Yellowbook-CPE provides performance optimization and custom feature development for WordPress-based e-learning platforms.',
      whatWeDid: [
        'Optimized WordPress performance for high traffic',
        'Developed custom e-learning features',
        'Implemented caching and CDN solutions',
        'Created custom plugins and themes',
        'Built scalable infrastructure for e-learning'
      ],
      technologies: ['PHP', 'WordPress', 'MySQL', 'AWS', 'CDN'],
      image: '/img/portfolio/yellowbook-thumbnail-370x265.webp'
    },
    'pitch-the-problem': {
      name: 'Pitch The Problem',
      description: 'Startup pitch deck automation tool with AI-powered content generation',
      problem: 'Startups struggle to create compelling pitch decks that effectively communicate their value proposition and attract investors.',
      solution: 'Pitch The Problem uses AI to analyze business models and automatically generate professional pitch decks with compelling content and visual design.',
      whatWeDid: [
        'Developed AI-powered pitch deck generation system',
        'Built content analysis and optimization algorithms',
        'Created automated visual design templates',
        'Implemented investor-focused content strategies',
        'Built comprehensive pitch deck management platform'
      ],
      technologies: ['React', 'Node.js', 'OpenAI API', 'AWS', 'Figma API'],
      image: '/img/portfolio/Pitch-The-Problem-370x265.png'
    },
    'happy-grader': {
      name: 'Happy Grader',
      description: 'Educational reading app for children with interactive learning features',
      problem: 'Children need engaging, interactive tools to develop reading skills and maintain interest in learning.',
      solution: 'Happy Grader provides an interactive reading platform with gamified learning experiences, progress tracking, and personalized content recommendations.',
      whatWeDid: [
        'Developed interactive reading interface for children',
        'Built gamification and reward systems',
        'Created progress tracking and analytics',
        'Implemented personalized learning algorithms',
        'Built cross-platform mobile applications'
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'AWS'],
      image: '/img/portfolio/Happy-Grader-Thumbnail-370x265.png'
    },
    'arcor': {
      name: 'Arcor',
      description: 'Legal case management system with document automation and workflow optimization',
      problem: 'Law firms need efficient case management systems that automate document processing and streamline workflow operations.',
      solution: 'Arcor provides comprehensive legal case management with automated document generation, workflow optimization, and client communication tools.',
      whatWeDid: [
        'Built comprehensive case management system',
        'Developed automated document generation',
        'Created workflow optimization tools',
        'Implemented client communication portal',
        'Built secure document storage and retrieval'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'DocuSign API'],
      image: '/img/portfolio/Arcor-Thumbnail.png'
    },
    'support-sherpa': {
      name: 'Support Sherpa',
      description: 'AI-powered customer support platform with automated responses and ticket management',
      problem: 'Businesses struggle to provide efficient customer support while managing high volumes of support tickets and inquiries.',
      solution: 'Support Sherpa uses AI to automate customer support responses, intelligently route tickets, and provide 24/7 customer assistance.',
      whatWeDid: [
        'Developed AI-powered chatbot system',
        'Built intelligent ticket routing algorithms',
        'Created automated response generation',
        'Implemented comprehensive analytics dashboard',
        'Built integration with multiple support channels'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'AWS'],
      image: '/img/portfolio/Support-Sherpa-Thumbnail.png'
    },
    'vacaydelay': {
      name: 'VacayDelay',
      description: 'Travel booking and management platform with real-time updates and notifications',
      problem: 'Travelers need real-time updates about flight delays, cancellations, and alternative booking options.',
      solution: 'VacayDelay provides real-time travel monitoring with automated notifications, alternative booking suggestions, and comprehensive travel management.',
      whatWeDid: [
        'Built real-time flight monitoring system',
        'Developed automated notification system',
        'Created alternative booking engine',
        'Implemented travel itinerary management',
        'Built mobile applications for travelers'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Flight APIs'],
      image: '/img/portfolio/VacayDelay-3-370x265.png'
    },
    'hello-vacay': {
      name: 'Hello Vacay',
      description: 'Vacation planning and booking platform with personalized recommendations',
      problem: 'Travelers need personalized vacation planning tools that simplify the booking process and provide tailored recommendations.',
      solution: 'Hello Vacay offers personalized vacation planning with AI-powered recommendations, seamless booking integration, and comprehensive travel management.',
      whatWeDid: [
        'Developed AI-powered recommendation engine',
        'Built comprehensive booking system',
        'Created personalized travel planning tools',
        'Implemented user preference learning',
        'Built mobile-responsive web platform'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Machine Learning'],
      image: '/img/portfolio/HelloVacay-1-370x265.png'
    },
    'raia': {
      name: 'RAIA',
      description: 'AI-powered research assistant for academic and professional research',
      problem: 'Researchers and academics struggle to efficiently process large volumes of academic papers, extract relevant information, and synthesize findings across multiple sources.',
      solution: 'RAIA is an advanced AI-powered research assistant that uses natural language processing and machine learning to analyze academic papers, extract key insights, and provide comprehensive research summaries.',
      whatWeDid: [
        'Developed custom NLP algorithms for academic text processing',
        'Built intelligent search and recommendation systems',
        'Created automated citation and reference management',
        'Implemented advanced data visualization for research insights',
        'Integrated with major academic databases and APIs'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
      image: '/img/portfolio/raia-system-showcase.webp'
    },
    'lincoln': {
      name: 'Lincoln',
      description: 'Financial planning and wealth management platform for individuals',
      problem: 'Individuals need a comprehensive platform to manage their financial planning, track investments, and make informed decisions about wealth management.',
      solution: 'Lincoln provides a complete financial planning and wealth management platform with portfolio tracking, investment analysis, and personalized financial advice.',
      whatWeDid: [
        'Built secure portfolio management system',
        'Developed real-time investment tracking',
        'Created financial planning tools and calculators',
        'Implemented secure data encryption and compliance',
        'Built mobile-responsive web application'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      image: '/img/portfolio/lincoln-showcase.webp'
    },
    'quickfriends': {
      name: 'QuickFriends',
      description: 'Social networking platform for connecting friends and family',
      problem: 'People want to stay connected with friends and family through a simple, intuitive social platform that focuses on meaningful relationships.',
      solution: 'QuickFriends is a social networking platform designed for close friends and family, featuring real-time messaging, photo sharing, and event planning.',
      whatWeDid: [
        'Developed real-time messaging system',
        'Built photo and media sharing features',
        'Created event planning and coordination tools',
        'Implemented privacy controls and security',
        'Built cross-platform mobile applications'
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB', 'AWS'],
      image: '/img/portfolio/quickfriends-in-tablet-and-mobile.webp'
    },
    'pink-avenue': {
      name: 'Pink Avenue',
      description: 'E-commerce platform for fashion and lifestyle products',
      problem: 'Fashion retailers need modern e-commerce platforms that provide seamless shopping experiences and effective inventory management.',
      solution: 'Pink Avenue offers a comprehensive e-commerce solution with advanced product management, personalized shopping experiences, and integrated payment processing.',
      whatWeDid: [
        'Built comprehensive e-commerce platform',
        'Developed advanced product management system',
        'Created personalized shopping recommendations',
        'Implemented secure payment processing',
        'Built mobile-responsive web application'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Stripe'],
      image: '/img/portfolio/pink-avenue-in-tablet-and-mobile.webp'
    },
    'mileage-quest': {
      name: 'Mileage Quest',
      description: 'Travel rewards and mileage tracking application',
      problem: 'Frequent travelers need efficient tools to track and maximize their travel rewards and mileage across multiple airlines and programs.',
      solution: 'Mileage Quest provides comprehensive travel rewards tracking with automated mileage monitoring, reward optimization, and redemption suggestions.',
      whatWeDid: [
        'Developed automated mileage tracking system',
        'Built reward optimization algorithms',
        'Created multi-airline integration',
        'Implemented redemption planning tools',
        'Built mobile applications for travelers'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Airline APIs'],
      image: '/img/portfolio/mileage-quest-showcase.webp'
    },
    'merceo': {
      name: 'Merceo',
      description: 'B2B marketplace for industrial equipment and supplies',
      problem: 'Industrial businesses need efficient B2B marketplaces to source equipment and supplies with transparent pricing and reliable suppliers.',
      solution: 'Merceo provides a comprehensive B2B marketplace with supplier verification, transparent pricing, and streamlined procurement processes.',
      whatWeDid: [
        'Built comprehensive B2B marketplace platform',
        'Developed supplier verification system',
        'Created transparent pricing mechanisms',
        'Implemented procurement workflow automation',
        'Built mobile-responsive web application'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Payment APIs'],
      image: '/img/portfolio/merceo-in-laptop.webp'
    },
    'fujikikai': {
      name: 'Fujikikai',
      description: 'Manufacturing automation and quality control system',
      problem: 'Manufacturing companies need automated quality control systems that can detect defects and optimize production processes in real-time.',
      solution: 'Fujikikai provides comprehensive manufacturing automation with AI-powered quality control, real-time monitoring, and predictive maintenance.',
      whatWeDid: [
        'Developed AI-powered quality control system',
        'Built real-time production monitoring',
        'Created predictive maintenance algorithms',
        'Implemented automated defect detection',
        'Built comprehensive analytics dashboard'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'IoT Sensors'],
      image: '/img/portfolio/fujikikai-thumbnail.webp'
    },
    'coast-2-coast': {
      name: 'Coast 2 Coast',
      description: 'Logistics and transportation management platform',
      problem: 'Logistics companies need comprehensive transportation management systems to optimize routes, track shipments, and manage fleet operations.',
      solution: 'Coast 2 Coast provides end-to-end logistics management with route optimization, real-time tracking, and comprehensive fleet management.',
      whatWeDid: [
        'Built comprehensive logistics management system',
        'Developed route optimization algorithms',
        'Created real-time shipment tracking',
        'Implemented fleet management tools',
        'Built mobile applications for drivers'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'GPS APIs'],
      image: '/img/portfolio/coast-2-coast-in-laptop.webp'
    },
    'cover-fields': {
      name: 'Cover Fields',
      description: 'Insurance management and claims processing system',
      problem: 'Insurance companies need efficient systems to manage policies, process claims, and provide customer support while maintaining compliance.',
      solution: 'Cover Fields provides comprehensive insurance management with automated claims processing, policy management, and customer self-service portal.',
      whatWeDid: [
        'Built comprehensive insurance management system',
        'Developed automated claims processing',
        'Created policy management tools',
        'Implemented customer self-service portal',
        'Built compliance and reporting features'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Compliance APIs'],
      image: '/img/portfolio/cover-fields-510x260.webp'
    },
    'qcanalytics': {
      name: 'QC Analytics',
      description: 'Business intelligence and data analytics platform',
      problem: 'Businesses need powerful analytics tools to make data-driven decisions and gain insights from complex datasets.',
      solution: 'QC Analytics provides comprehensive business intelligence with advanced data visualization, predictive analytics, and automated reporting.',
      whatWeDid: [
        'Developed advanced data visualization system',
        'Built predictive analytics engine',
        'Created automated reporting tools',
        'Implemented data integration capabilities',
        'Built comprehensive dashboard platform'
      ],
      technologies: ['React', 'Python', 'PostgreSQL', 'AWS', 'Tableau API'],
      image: '/img/portfolio/qcanalytics-showcase.webp'
    },
    'i-am-available': {
      name: 'I Am Available',
      description: 'Professional networking and availability management app',
      problem: 'Professionals need efficient tools to manage their availability, schedule meetings, and network with other professionals.',
      solution: 'I Am Available provides comprehensive availability management with smart scheduling, professional networking, and meeting coordination.',
      whatWeDid: [
        'Built availability management system',
        'Developed smart scheduling algorithms',
        'Created professional networking features',
        'Implemented meeting coordination tools',
        'Built mobile applications for professionals'
      ],
      technologies: ['React Native', 'Node.js', 'MongoDB', 'AWS', 'Calendar APIs'],
      image: '/img/portfolio/i-am-available-510x260.webp'
    },
    'medicare-chatbot': {
      name: 'Medicare Chatbot',
      description: 'AI-powered healthcare assistant for Medicare information',
      problem: 'Medicare beneficiaries need easy access to accurate information about their benefits, coverage, and healthcare options.',
      solution: 'Medicare Chatbot provides 24/7 AI-powered assistance for Medicare information, benefit explanations, and healthcare guidance.',
      whatWeDid: [
        'Developed AI-powered chatbot system',
        'Built comprehensive Medicare knowledge base',
        'Created natural language processing for healthcare',
        'Implemented secure information handling',
        'Built multi-platform deployment system'
      ],
      technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'Healthcare APIs'],
      image: '/img/portfolio/medicare-chatbot-demo.webp'
    },
    'saas-e-learning': {
      name: 'SaaS E-Learning',
      description: 'Online learning management system for educational institutions',
      problem: 'Educational institutions need scalable e-learning platforms that can handle large numbers of students and provide comprehensive learning management.',
      solution: 'SaaS E-Learning provides a comprehensive learning management system with course creation, student tracking, and advanced analytics.',
      whatWeDid: [
        'Built comprehensive learning management system',
        'Developed course creation and management tools',
        'Created student progress tracking',
        'Implemented advanced analytics and reporting',
        'Built scalable cloud infrastructure'
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Video Streaming'],
      image: '/img/portfolio/saas-e-learning-platform-thumbnail.webp'
    },
    'word-welder': {
      name: 'Word Welder',
      description: 'AI-powered content creation and writing assistance platform',
      problem: 'Content creators and writers need AI-powered tools to enhance their writing, generate ideas, and improve content quality.',
      solution: 'Word Welder provides AI-powered writing assistance with content generation, grammar checking, and style optimization.',
      whatWeDid: [
        'Developed AI-powered content generation',
        'Built advanced grammar checking system',
        'Created style optimization tools',
        'Implemented content idea generation',
        'Built comprehensive writing platform'
      ],
      technologies: ['React', 'Python', 'OpenAI API', 'AWS', 'NLP'],
      image: '/img/portfolio/word-welder-new-thumbnail-370x265.webp'
    },
    'outschool': {
      name: 'Outschool',
      description: 'Online learning marketplace for K-12 education',
      problem: 'Parents and students need access to diverse, high-quality online learning opportunities for K-12 education.',
      solution: 'Outschool provides a comprehensive online learning marketplace with live classes, recorded content, and personalized learning paths.',
      whatWeDid: [
        'Built comprehensive learning marketplace',
        'Developed live class streaming system',
        'Created content management platform',
        'Implemented personalized learning algorithms',
        'Built mobile-responsive web application'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Video Streaming'],
      image: '/img/portfolio/Outschool-Thumbnail-370x265.webp'
    },
    'ai-marketing-website': {
      name: 'AI Marketing Website',
      description: 'AI-optimized marketing website with automated content generation',
      problem: 'Businesses need marketing websites that can automatically optimize content, improve SEO, and generate leads effectively.',
      solution: 'AI Marketing Website provides automated content optimization, SEO enhancement, and lead generation through AI-powered marketing tools.',
      whatWeDid: [
        'Developed AI-powered content optimization',
        'Built automated SEO enhancement system',
        'Created lead generation automation',
        'Implemented performance analytics',
        'Built comprehensive marketing platform'
      ],
      technologies: ['React', 'Python', 'OpenAI API', 'AWS', 'SEO Tools'],
      image: '/img/portfolio/ai-optimized-marketing-website-thumbnail.webp'
    },
    'excel-processing-app': {
      name: 'Excel Processing App',
      description: 'Automatic Excel processing webapp using machine learning',
      problem: 'Businesses need automated tools to process large Excel files, extract data, and generate insights without manual intervention.',
      solution: 'Excel Processing App provides automated Excel file processing with data extraction, analysis, and report generation using machine learning.',
      whatWeDid: [
        'Developed automated Excel processing system',
        'Built machine learning data extraction',
        'Created automated report generation',
        'Implemented data validation and cleaning',
        'Built comprehensive web application'
      ],
      technologies: ['React', 'Python', 'TensorFlow', 'AWS', 'Excel APIs'],
      image: '/img/portfolio/automatic-excel-processing-webapp-using-machine-learning-thumbnail.webp'
    }
  };

  const project = projectData[slug as keyof typeof projectData];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <p className="text-gray-600">The project you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      {/* Header Banner */}
      <HeaderBanner
        title={project.name}
        intro={project.description}
        image={project.image}
      />

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Problem
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.problem}
              </p>
            </div>
            <div className="bg-gray-100 rounded-xl p-8">
              <div className="text-6xl text-gray-400 mb-4">❓</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Challenge</h3>
              <p className="text-gray-600">Understanding the core problem and user pain points</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-blue-100 rounded-xl p-8">
                <div className="text-6xl text-blue-400 mb-4">💡</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Solution</h3>
                <p className="text-gray-600">Innovative approach to solve the problem</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Solution
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Did Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What We Did
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive approach to delivering this project
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {project.whatWeDid.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Used */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies Used
            </h2>
            <p className="text-xl text-gray-600">
              Cutting-edge technologies that power this solution
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-shadow">
                <div className="text-2xl font-bold text-blue-600 mb-2">{tech}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialCarousel backgroundColor="white" />

      {/* Contact Section */}
      <ContactSection
        title="Ready to Start Your Project?"
        backgroundColor="blue"
        showForm={true}
        showCalendly={true}
      />
    </div>
  );
};

export default SinglePortfolioPage;
