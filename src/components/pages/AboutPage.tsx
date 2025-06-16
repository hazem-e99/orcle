import React from 'react';
import { CheckIcon } from 'lucide-react';
const AboutPage = () => {
  return <div className="w-full">
      {/* Header Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Bellatrix
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Enterprise software consultancy specializing in NetSuite and cloud
            solutions with over 20 years of experience
          </p>
        </div>
      </section>
      {/* Company Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Our Story
            </h2>
            <p className="text-gray-700 mb-6">
              Founded in 2003, Bellatrix has grown from a small team of NetSuite
              consultants to a leading enterprise software consultancy with
              offices across North America, Europe, and Asia. Our team of over
              200 certified consultants has helped hundreds of businesses
              implement, customize, and optimize NetSuite to meet their unique
              business needs.
            </p>
            <p className="text-gray-700 mb-6">
              As an Oracle NetSuite Alliance Partner and Solution Provider, we
              have the expertise and resources to deliver successful
              implementations across a wide range of industries, from
              manufacturing and wholesale distribution to professional services
              and retail.
            </p>
            <p className="text-gray-700">
              Our mission is simple: to help our clients leverage technology to
              drive business growth, improve operational efficiency, and gain a
              competitive edge in their respective markets.
            </p>
          </div>
        </div>
      </section>
      {/* Methodology Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Methodology
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            Our proven Sherpa methodology ensures successful implementations by
            focusing on four key areas:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">S</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Strategic Initiatives
              </h3>
              <p className="text-gray-700">
                We align your NetSuite implementation with your strategic
                business objectives to ensure maximum ROI and long-term success.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">B</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Business Processes
              </h3>
              <p className="text-gray-700">
                We optimize your business processes to take full advantage of
                NetSuite's capabilities and best practices.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">T</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Technology
              </h3>
              <p className="text-gray-700">
                We leverage our deep technical expertise to configure,
                customize, and integrate NetSuite to meet your specific
                requirements.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 text-2xl font-bold">C</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Change Management
              </h3>
              <p className="text-gray-700">
                We ensure successful adoption through comprehensive training,
                communication, and change management strategies.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Why Bellatrix Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Choose Bellatrix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </span>
                Unmatched Expertise
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    200+ certified NetSuite consultants
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    20+ years of NetSuite experience
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Deep industry-specific knowledge
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                Proven Track Record
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    500+ successful implementations
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    98% client retention rate
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Multiple NetSuite partner awards
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  3
                </span>
                Comprehensive Services
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    End-to-end implementation services
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Custom development and integration
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Ongoing support and optimization
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  4
                </span>
                Client-Centric Approach
              </h3>
              <ul className="space-y-3 pl-11">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Dedicated project teams</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Transparent communication
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Focus on business outcomes
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Leadership Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="Michael Anderson" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Michael Anderson
                </h3>
                <p className="text-blue-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-700">
                  With over 25 years of experience in enterprise software,
                  Michael leads our global strategy and operations.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="Sarah Johnson" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  Sarah Johnson
                </h3>
                <p className="text-blue-600 mb-4">Chief Operating Officer</p>
                <p className="text-gray-700">
                  Sarah oversees our global delivery operations, ensuring client
                  success across all projects and services.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80" alt="David Chen" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  David Chen
                </h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-700">
                  David leads our technology strategy and innovation, keeping us
                  at the forefront of NetSuite development.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Global Presence Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Global Presence
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            With offices across North America, Europe, and Asia, we provide
            local support with global expertise.
          </p>
          <div className="bg-gray-100 rounded-lg p-8 text-center">
            <p className="text-gray-700 mb-8">
              Map visualization would go here
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  North America
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">San Francisco (HQ)</li>
                  <li className="text-gray-700">New York</li>
                  <li className="text-gray-700">Chicago</li>
                  <li className="text-gray-700">Toronto</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Europe</h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">London</li>
                  <li className="text-gray-700">Paris</li>
                  <li className="text-gray-700">Amsterdam</li>
                  <li className="text-gray-700">Frankfurt</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Asia Pacific
                </h3>
                <ul className="space-y-2">
                  <li className="text-gray-700">Singapore</li>
                  <li className="text-gray-700">Sydney</li>
                  <li className="text-gray-700">Tokyo</li>
                  <li className="text-gray-700">Mumbai</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to learn how Bellatrix can help you maximize your
            NetSuite investment.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition">
            Contact Us
          </button>
        </div>
      </section>
    </div>;
};
export default AboutPage;