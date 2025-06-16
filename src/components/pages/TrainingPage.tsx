import React from 'react';
import { CheckIcon } from 'lucide-react';
const TrainingPage = () => {
  return <div className="w-full">
      {/* Main Section */}
      <section className="w-full bg-blue-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              NetSuite Training
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Comprehensive training programs designed to help your team
              maximize the value of your NetSuite investment
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Video */}
            <div className="bg-white rounded-lg shadow-md p-4">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-md relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-600 font-medium">
                      NetSuite Training Overview Video
                    </p>
                    <p className="text-sm text-gray-500">(Click to play)</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why Train with Bellatrix?
                </h3>
                <p className="text-gray-700">
                  Our training programs are delivered by certified NetSuite
                  experts with years of implementation and customization
                  experience. We focus on practical, hands-on training that
                  addresses your specific business needs.
                </p>
              </div>
            </div>
            {/* Right: Form */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Request More Info From an Expert
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input type="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@company.com" />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Company
                    </label>
                    <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Company name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone
                    </label>
                    <input type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(123) 456-7890" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Tell us about your training needs"></textarea>
                </div>
                <button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition">
                  Submit
                </button>
              </form>
            </div>
          </div>
          {/* Benefits List */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Benefits of NetSuite Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 max-w-4xl mx-auto">
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Maximize your ROI on NetSuite investment
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Improve user adoption and satisfaction
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Reduce dependency on external consultants
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Increase productivity and efficiency
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Customize training to your specific needs
                </span>
              </div>
              <div className="flex items-start">
                <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Learn best practices from certified experts
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 3-Column Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Ongoing Improvement
              </h3>
              <p className="text-gray-700 mb-4">
                Our training programs are designed to provide continuous
                learning opportunities for your team, ensuring they stay
                up-to-date with the latest NetSuite features and best practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Regular refresher courses
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">New release training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Advanced topic workshops
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Custom training materials
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Focus Areas
              </h3>
              <p className="text-gray-700 mb-4">
                Our training programs cover all aspects of NetSuite, from basic
                navigation to advanced customization and development.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    User training for daily operations
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Administrator training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Report and search creation
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    SuiteScript and customization
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Deliverables
              </h3>
              <p className="text-gray-700 mb-4">
                All training programs include comprehensive materials and
                resources to support ongoing learning and reference.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Custom training manuals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Video recordings of sessions
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">Quick reference guides</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Practice exercises and solutions
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">How Can We Help You?</h2>
          <p className="text-lg max-w-2xl mx-auto mb-8">
            Contact our team to discuss your specific NetSuite training needs
            and how we can help your team maximize the value of your NetSuite
            investment.
          </p>
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>;
};
export default TrainingPage;