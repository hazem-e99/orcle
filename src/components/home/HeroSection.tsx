import React from 'react';
import { CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
const HeroSection = () => {
  return <section className="w-full bg-gradient-to-r from-blue-50 to-blue-100 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left column */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Enterprise Software Solutions{' '}
              <span className="text-blue-600">That Drive Results</span>
            </h1>
            <p className="text-lg text-gray-700 max-w-lg">
              Bellatrix delivers tailored NetSuite and cloud solutions that
              empower your business with 20+ years of implementation expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition flex items-center justify-center">
                Get Started
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-md transition">
                Schedule a Demo
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">
                    Oracle NetSuite Partner
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Elite-tier solution provider
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">
                    500+ Implementations
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">
                  Across diverse industries
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="flex items-center mb-2">
                  <CheckCircleIcon className="w-5 h-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold text-gray-900">
                    98% Client Retention
                  </h3>
                </div>
                <p className="text-gray-600 text-sm">Long-term partnerships</p>
              </div>
            </div>
          </div>
          {/* Right column with image */}
          <div className="flex justify-center md:justify-end">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Enterprise software consultancy" className="rounded-lg shadow-lg max-w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;