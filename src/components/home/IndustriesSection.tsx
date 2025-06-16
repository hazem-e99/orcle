import React, { useState } from 'react';
import { ArrowRightIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
const IndustriesSection = () => {
  const [activeTab, setActiveTab] = useState('manufacturing');
  const industries = [{
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Streamline operations, gain real-time visibility into production, and optimize your supply chain with NetSuite for manufacturing.',
    clients: ['Acme Manufacturing', 'Precision Parts Inc.', 'Global Industrial'],
    image: 'https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'professional',
    name: 'Professional Services',
    description: 'Improve project profitability, resource utilization, and client satisfaction with NetSuite for professional services firms.',
    clients: ['Global Consulting Group', 'Legal Partners LLC', 'Design Studio Co.'],
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'retail',
    name: 'Retail',
    description: 'Unify your omnichannel operations, enhance customer experiences, and optimize inventory management with NetSuite for retail.',
    clients: ['Fashion Forward', 'Home Goods Co.', 'Sports Outlet'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }, {
    id: 'wholesale',
    name: 'Wholesale Distribution',
    description: 'Optimize inventory, streamline order processing, and improve customer service with NetSuite for wholesale distribution.',
    clients: ['Global Supply Co.', 'Parts Distributors Inc.', 'Med Supplies Direct'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80'
  }];
  const activeIndustry = industries.find(industry => industry.id === activeTab);
  return <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We deliver tailored NetSuite solutions for the unique needs of your
            industry.
          </p>
        </div>
        {/* Tab Navigation with Progress Bar */}
        <div className="relative mb-10 max-w-3xl mx-auto">
          <div className="flex justify-between items-center">
            <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
              <ChevronLeftIcon className="w-5 h-5" />
            </button>
            <div className="flex-1 mx-4 relative">
              <div className="h-1 bg-gray-200 rounded-full">
                <div className="h-1 bg-blue-600 rounded-full transition-all duration-300" style={{
                width: `${activeTab === 'manufacturing' ? '25%' : activeTab === 'professional' ? '50%' : activeTab === 'retail' ? '75%' : '100%'}`
              }}></div>
              </div>
              <div className="flex justify-between mt-4">
                {industries.map(industry => <button key={industry.id} className={`text-sm font-medium transition ${activeTab === industry.id ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'}`} onClick={() => setActiveTab(industry.id)}>
                    {industry.name}
                  </button>)}
              </div>
            </div>
            <button className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
              <ChevronRightIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
        {/* Content Area */}
        {activeIndustry && <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                NetSuite for {activeIndustry.name}
              </h3>
              <p className="text-gray-700 mb-6">{activeIndustry.description}</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Key Benefits:
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">
                      End-to-end visibility across operations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Industry-specific functionality out of the box
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Real-time reporting and analytics
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">
                      Streamlined compliance and financial management
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Trusted by:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeIndustry.clients.map((client, index) => <span key={index} className="bg-gray-100 text-gray-700 text-sm py-1 px-3 rounded-full">
                      {client}
                    </span>)}
                </div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition flex items-center">
                Learn More
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="order-1 lg:order-2">
              <img src={activeIndustry.image} alt={`NetSuite for ${activeIndustry.name}`} className="rounded-lg shadow-md w-full h-auto object-cover" />
            </div>
          </div>}
      </div>
    </section>;
};
export default IndustriesSection;