import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderBanner, TestimonialCarousel } from '../../components/Agency/Sections';

const AboutPage: React.FC = () => {

  return (
    <div>
      <HeaderBanner
        title="About Dragon Agency"
        intro="Premier full-stack software development company specializing in web, mobile, AI, and blockchain solutions. We build scalable, innovative software that drives business growth."
        image="/img/logo/logo-3d.png"
        imageAlt="About Dragon Agency"
      />

      {/* Company Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Software Development Impact
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering exceptional software solutions through technical excellence and innovation
              </p>
            </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">8+</div>
              <div className="text-gray-600">Years of Software Development</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Client Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">250+</div>
              <div className="text-gray-600">Software Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                      <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Dragon Agency?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We combine full-stack development expertise with AI and blockchain innovation to deliver scalable software solutions
              </p>
            </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Full-Stack Development</h3>
              <p className="text-gray-600">End-to-end software development from frontend to backend and infrastructure</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI & Blockchain Expertise</h3>
              <p className="text-gray-600">Deep specialization in machine learning, AI integration, and blockchain solutions</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile & Web Solutions</h3>
              <p className="text-gray-600">Native and cross-platform mobile apps with responsive web applications</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Scalable Architecture</h3>
              <p className="text-gray-600">Enterprise-grade solutions designed for growth and performance</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔧</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Modern Tech Stack</h3>
              <p className="text-gray-600">Latest technologies and frameworks for future-proof software solutions</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Business-Focused</h3>
              <p className="text-gray-600">Software solutions that drive real business value and ROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <TestimonialCarousel backgroundColor="gray" />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Software Solution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss your software project and see how we can help bring your vision to life with our full-stack expertise
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-blue-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
