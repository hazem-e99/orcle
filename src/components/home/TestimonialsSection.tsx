import React from 'react';
import { StarIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const TestimonialsSection = () => {
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    position: 'CFO, Manufacturing Inc.',
    company: 'Manufacturing Inc.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    quote: "Bellatrix transformed our financial operations with NetSuite. The implementation was smooth, and their support team is exceptional. We've reduced our monthly close time by 50%.",
    rating: 5
  }, {
    id: 2,
    name: 'Michael Chen',
    position: 'Director of IT',
    company: 'Tech Solutions Group',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    quote: 'We needed a partner who understood both technology and business processes. Bellatrix exceeded our expectations with their technical expertise and business acumen.',
    rating: 5
  }, {
    id: 3,
    name: 'Amanda Rodriguez',
    position: 'Operations Manager',
    company: 'Global Retail Co.',
    image: 'https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=150&q=80',
    quote: 'The customizations Bellatrix implemented have streamlined our inventory management across 50+ locations. Their team truly understood our complex retail requirements.',
    rating: 5
  }];
  return <section className="py-16 bg-gray-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say
            about working with Bellatrix.
          </p>
        </div>
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden md:block">
            <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition">
              <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md z-10 hover:bg-gray-100 transition">
              <ChevronRightIcon className="w-5 h-5 text-gray-700" />
            </button>
          </div>
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
                {/* Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />)}
                </div>
                {/* Quote */}
                <blockquote className="text-gray-700 mb-6 flex-grow">
                  "{testimonial.quote}"
                </blockquote>
                {/* Person */}
                <div className="flex items-center">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>)}
          </div>
          {/* Dots */}
          <div className="flex justify-center mt-8">
            <button className="w-2 h-2 rounded-full bg-blue-600 mx-1"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 mx-1"></button>
            <button className="w-2 h-2 rounded-full bg-gray-300 mx-1"></button>
          </div>
        </div>
      </div>
    </section>;
};
export default TestimonialsSection;