import React, { useState, useEffect } from 'react';

interface Testimonial {
  id: number;
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  avatar?: string;
}

interface TestimonialCarouselProps {
  backgroundColor?: 'white' | 'gray' | 'blue';
}

const TestimonialCarousel: React.FC<TestimonialCarouselProps> = ({ 
  backgroundColor = 'gray' 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Arthur Niewiarowski",
      company: "TechStart Inc.",
      role: "CEO",
      content: "Dragon Agency transformed our business with their AI solutions. The chatbot they developed increased our customer satisfaction by 40% and reduced response time significantly.",
      rating: 5,
      avatar: "/img/avatars/arthur.jpg",
    },
    {
      id: 2,
      name: "Devon Colomb",
      company: "DPOI Solutions",
      role: "CEO",
      content: "Dragon Agency's web development team created an amazing e-commerce platform for us. Sales increased by 60% in the first quarter after launch. Highly recommended!",
      rating: 5,
      avatar: "/img/avatars/Nurp-Devon.png",
    },
    {
      id: 3,
      name: "Sterling Baldwin",
      company: "HealthTech Solutions",
      role: "Product Manager",
      content: "The team's attention to detail and innovative approach to AI development exceeded our expectations. They delivered a complex healthcare AI system on time and under budget.",
      rating: 5,
      avatar: "/img/avatars/sterling baldwin.jpg",
    },
    {
      id: 4,
      name: "Mykola Zeleniuk",
      company: "FinanceFlow",
      role: "CTO",
      content: "Working with Dragon Agency was a game-changer. Their fintech development expertise helped us build a secure, scalable platform that processed over $10M in transactions in the first month.",
      rating: 5,
      avatar: "/img/avatars/mykola zeleniuk.jpeg",
    },
    // {
    //   id: 5,
    //   name: "Legal Company",
    //   company: "Legal Company",
    //   role: "CEO",
    //   content: "Dragon Agency's blockchain solutions revolutionized our legal tech platform. Their expertise in smart contracts and decentralized applications exceeded all expectations.",
    //   rating: 5,
    //   avatar: "/img/avatars/legal-company-testimonial-logo.webp",
    // },
    // {
    //   id: 6,
    //   name: "Quick Friends",
    //   company: "Quick Friends",
    //   role: "CTO",
    //   content: "The mobile app development team at Dragon Agency delivered an exceptional social networking platform. User engagement increased by 80% within the first month.",
    //   rating: 5,
    //   avatar: "/img/avatars/quick-friends-testimonial-logo.webp",
    // },
    // {
    //   id: 7,
    //   name: "Hello Vacay",
    //   company: "Hello Vacay",
    //   role: "Product Manager",
    //   content: "Dragon Agency's full-stack development expertise helped us create a comprehensive travel booking platform. The system handles thousands of bookings daily with zero downtime.",
    //   rating: 5,
    //   avatar: "/img/avatars/hello-vacay-testimonial-logo.webp",
    // },
  ];

  const bgClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    blue: 'bg-blue-50'
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <section id="testimonials" className={`py-16 lg:py-24 ${bgClasses[backgroundColor]}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience working with Dragon Agency.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-2xl bg-white shadow-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 p-8 lg:p-12">
                  <div className="text-center">
                    {/* Stars */}
                    <div className="flex justify-center space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                        </svg>
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-xl lg:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                      "{testimonial.content}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center justify-center">
                      {testimonial.avatar ? (
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full mr-4"
                        />
                      ) : (
                        <div className="w-16 h-16 rounded-full bg-blue-500 flex items-center justify-center text-white font-semibold text-xl mr-4">
                          {testimonial.name.split(' ').map(n => n[0]).join('')}
                        </div>
                      )}
                      <div className="text-left">
                        <div className="font-semibold text-gray-900">
                          {testimonial.name}
                        </div>
                        <div className="text-gray-600">
                          {testimonial.role} at {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow text-gray-600 hover:text-blue-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;

