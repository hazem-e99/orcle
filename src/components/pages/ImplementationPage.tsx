import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
const ImplementationPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-teal-500 to-blue-600 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern opacity-10"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                NetSuite Implementation Services
              </h1>
              <p className="text-xl mb-8">
                20 Years of NetSuite and Cloud Solutions Experience
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg p-4 flex items-center">
                  <img src="https://via.placeholder.com/60x60?text=20Y" alt="Bellatrix 20th Anniversary" className="w-12 h-12 mr-3" />
                  <span className="text-sm font-medium">
                    Bellatrix 20th Anniversary
                  </span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg p-4 flex items-center">
                  <img src="https://via.placeholder.com/60x60?text=NS" alt="Oracle NetSuite Alliance Partner" className="w-12 h-12 mr-3" />
                  <span className="text-sm font-medium">
                    Oracle NetSuite Alliance Partner
                  </span>
                </div>
                <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-sm rounded-lg p-4 flex items-center">
                  <img src="https://via.placeholder.com/60x60?text=SP" alt="Oracle NetSuite Solution Provider" className="w-12 h-12 mr-3" />
                  <span className="text-sm font-medium">
                    Oracle NetSuite Solution Provider
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                  <img src="https://via.placeholder.com/50x50?text=2023" alt="2023 Alliance Partner" className="w-10 h-10 mr-2" />
                  <span className="text-xs font-medium text-gray-800">
                    2023 Alliance Partner (Nonprofit)
                  </span>
                </div>
                <div className="bg-white rounded-lg p-3 flex items-center shadow-sm">
                  <img src="https://via.placeholder.com/50x50?text=2025" alt="2025 Private Equity Spotlight" className="w-10 h-10 mr-2" />
                  <span className="text-xs font-medium text-gray-800">
                    2025 Private Equity Spotlight (Carveout)
                  </span>
                </div>
              </div>
            </div>
            {/* Right Column */}
            <div>
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Get Started with NetSuite
                </h3>
                <p className="text-gray-700 mb-6">
                  Ready to transform your business with the world's #1 cloud
                  ERP? Fill out the form below to speak with one of our NetSuite
                  implementation experts.
                </p>
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Business Email
                  </label>
                  <input type="email" className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="your.email@company.com" />
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-md transition text-center">
                  GET STARTED WITH NETSUITE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* What is NetSuite Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite ERP" className="rounded-lg shadow-md w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is NetSuite?
              </h2>
              <p className="text-gray-700 mb-4">
                Oracle NetSuite is the world's leading cloud-based enterprise
                resource planning (ERP) system, providing a single, integrated
                platform for managing all core business processes.
              </p>
              <p className="text-gray-700 mb-4">
                With NetSuite, you can manage your entire business from a single
                platform, including:
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Financial management and accounting
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Order management and fulfillment
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Inventory and warehouse management
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Customer relationship management (CRM)
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    E-commerce and point of sale
                  </span>
                </li>
              </ul>
              <p className="text-gray-700">
                As a leading NetSuite implementation partner, Bellatrix has
                helped hundreds of businesses successfully implement NetSuite to
                streamline operations, improve visibility, and accelerate
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            NetSuite Pricing: ERP Implementation Cost
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 rounded-lg p-8 text-white mb-8">
                <h3 className="text-2xl font-bold mb-4">
                  NetSuite Implementation Pricing Guide
                </h3>
                <p className="mb-6">
                  Download our comprehensive guide to NetSuite implementation
                  costs and learn how to budget for your implementation project.
                </p>
                <button className="bg-transparent hover:bg-white hover:bg-opacity-20 text-white font-medium py-2 px-6 border-2 border-white rounded-md transition">
                  GET PRICING
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-md p-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  NetSuite Benefits
                </h4>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">
                        Accelerate order-to-cash by 50%+
                      </span>
                      <p className="text-sm text-gray-700">
                        Streamline the entire order-to-cash process
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">
                        Reduce financial close time by 50%+
                      </span>
                      <p className="text-sm text-gray-700">
                        Automate financial processes and reporting
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">
                        Improve productivity with remote access
                      </span>
                      <p className="text-sm text-gray-700">
                        Work from anywhere with cloud-based access
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <div>
                      <span className="font-medium text-gray-900">
                        Lower IT costs by eliminating upfront expenses
                      </span>
                      <p className="text-sm text-gray-700">
                        Subscription-based model with no hardware requirements
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <p className="text-gray-700 mb-6">
                NetSuite ERP implementation costs vary based on the size of your
                organization, the complexity of your requirements, and the scope
                of your implementation project. Typical NetSuite implementation
                projects include the following components:
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    NetSuite licensing fees (annual subscription)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Implementation services (one-time cost)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Data migration and integration costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Customization and development costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Training and change management costs
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Ongoing support and optimization costs
                  </span>
                </li>
              </ul>
              <p className="text-gray-700 mb-6">
                To get a better understanding of NetSuite pricing for your
                specific needs, use our
                <a href="#" className="text-red-600 font-medium underline mx-1">
                  NetSuite Price Calculator
                </a>
                or download our comprehensive
                <a href="#" className="text-red-600 font-medium underline mx-1">
                  NetSuite Pricing Guide
                </a>
                .
              </p>
              <p className="text-gray-700">
                As a leading NetSuite implementation partner, Bellatrix offers
                transparent pricing and flexible implementation options to fit
                your budget and timeline.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Industries Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            NetSuite Implementations by Industry
          </h2>
          <p className="text-gray-700 mb-12 text-center max-w-3xl mx-auto">
            We have extensive experience implementing NetSuite across a wide
            range of industries, tailoring the solution to meet the unique
            requirements of each sector.
          </p>
          <div className="relative mb-10">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-xl font-bold text-gray-900">
                Select Your Industry
              </h3>
              <div className="flex items-center">
                <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
                <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="h-1 bg-gray-200 rounded-full mb-6">
              <div className="h-1 bg-blue-600 rounded-full w-1/4 transition-all duration-300"></div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray-700 mb-6">
                  Streamline production, optimize inventory, and improve supply
                  chain visibility with NetSuite for manufacturing.
                </p>
                <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition">
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Trusted by:</p>
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Wholesale Distribution
                </h3>
                <p className="text-gray-700 mb-6">
                  Optimize inventory, streamline order processing, and improve
                  customer service with NetSuite.
                </p>
                <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition">
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Trusted by:</p>
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Retail</h3>
                <p className="text-gray-700 mb-6">
                  Unify your omnichannel operations, enhance customer
                  experiences, and optimize inventory management.
                </p>
                <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition">
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Trusted by:</p>
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-blue-600">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Professional Services
                </h3>
                <p className="text-gray-700 mb-6">
                  Improve project profitability, resource utilization, and
                  client satisfaction with NetSuite.
                </p>
                <button className="text-orange-500 hover:text-orange-600 font-medium flex items-center transition">
                  Learn More
                  <ArrowRightIcon className="ml-2 w-4 h-4" />
                </button>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-sm text-gray-600 mb-2">Trusted by:</p>
                <div className="flex items-center space-x-4">
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                  <img src="https://via.placeholder.com/40x20?text=Logo" alt="Client Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default ImplementationPage;