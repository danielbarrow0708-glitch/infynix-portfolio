import React, { useState, useEffect } from 'react';
import { submitContactForm, ContactFormData } from '../../../utils/formUtils';

interface ContactSectionProps {
  title?: string;
  showForm?: boolean;
  showCalendly?: boolean;
  backgroundColor?: 'white' | 'gray' | 'blue';
}

const ContactSection: React.FC<ContactSectionProps> = ({ 
  title = "Let's Talk About Your Project!",
  showForm = true,
  showCalendly = true,
  backgroundColor = 'white'
}) => {
  const [activeTab, setActiveTab] = useState<'form' | 'calendly'>('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [calendlyLoaded, setCalendlyLoaded] = useState(false);

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-gray-50'
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const result = await submitContactForm(formData as ContactFormData);
      
      if (result.success) {
        setSubmitStatus('success');
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
      
      // Show status message
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Reset error status after 3 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Initialize Calendly widget when component mounts or when switching to calendly tab
  useEffect(() => {
    if (activeTab === 'calendly' && showCalendly) {
      console.log('Attempting to initialize Calendly widget...');
      
      // Check if Calendly is loaded
      if (typeof window !== 'undefined' && window.Calendly) {
        console.log('Calendly is already loaded, initializing widget...');
        // Initialize the widget
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/contact-dragondev/30min',
          parentElement: document.querySelector('.calendly-inline-widget'),
          prefill: {},
          utm: {}
        });
        setCalendlyLoaded(true);
      } else {
        console.log('Calendly not loaded yet, waiting...');
        // Wait for Calendly to load
        const checkCalendly = setInterval(() => {
          if (typeof window !== 'undefined' && window.Calendly) {
            console.log('Calendly loaded, initializing widget...');
            window.Calendly.initInlineWidget({
              url: 'https://calendly.com/contact-dragondev/30min',
              parentElement: document.querySelector('.calendly-inline-widget'),
              prefill: {},
              utm: {}
            });
            setCalendlyLoaded(true);
            clearInterval(checkCalendly);
          }
        }, 100);
        
        // Clear interval after 10 seconds to prevent infinite checking
        setTimeout(() => {
          clearInterval(checkCalendly);
          console.log('Calendly loading timeout reached');
        }, 10000);
      }
    }
  }, [activeTab, showCalendly]);

  return (
    <section className={`py-16 lg:py-24 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          {/* Star Rating */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                </svg>
              ))}
            </div>
            <span className="text-gray-600 italic">4.9 (15+ reviews)</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            {title}
          </h2>
        </div>

        {/* Tab Navigation (if both form and calendly are enabled) */}
        {showForm && showCalendly && (
          <div className="flex justify-center mb-8">
            <div className="bg-gray-100 rounded-lg p-1 flex">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'form'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Contact Form
              </button>
              <button
                onClick={() => setActiveTab('calendly')}
                className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeTab === 'calendly'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Schedule Meeting
              </button>
            </div>
          </div>
        )}

        {/* Contact Form */}
        {showForm && (!showCalendly || activeTab === 'form') && (
          <div className="bg-white rounded-lg shadow-professional p-8 border border-gray-100">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3.5 px-6 rounded-md font-semibold transition-all duration-200 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-professional-accent text-white hover:bg-professional-accent-dark shadow-professional hover:shadow-professional-lg'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you within 24 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-red-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                    <p className="text-red-800 font-medium">Something went wrong. Please try again or contact us directly.</p>
                  </div>
                </div>
              )}
            </form>
          </div>
        )}

        {/* Calendly Widget */}
        {showCalendly && (!showForm || activeTab === 'calendly') && (
          <div className="bg-white rounded-lg shadow-professional p-8 border border-gray-100">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Schedule a Free Consultation
              </h3>
              <p className="text-gray-600 mb-8">
                Book a 30-minute call with our software development experts to discuss your project requirements.
              </p>
              
              {/* Calendly Inline Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/contact-dragondev/30min"
                data-page-title="Dragon Agency - Schedule Consultation"
                data-page-subtitle="Book a free 30-minute consultation with our software development experts"
                style={{ 
                  minWidth: '320px', 
                  height: '700px',
                  border: 'none',
                  borderRadius: '8px'
                }}
              ></div>
              
              {/* Loading state and fallback */}
              <div className="mt-4 text-center">
                {!calendlyLoaded ? (
                  <div className="text-sm text-gray-500 mb-4">
                    <div className="flex items-center justify-center mb-2">
                      <svg className="animate-spin h-5 w-5 text-blue-600 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span>Loading calendar...</span>
                    </div>
                    <p className="mt-2">If the calendar doesn't appear within a few seconds, use the button below:</p>
                  </div>
                ) : (
                  <div className="text-sm text-gray-500 mb-4">
                    <p>Calendar loaded successfully! 🎉</p>
                  </div>
                )}
                <a 
                  href="https://calendly.com/contact-dragondev/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Open Calendar in New Tab
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSection;

