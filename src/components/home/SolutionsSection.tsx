import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
const SolutionsSection = () => {
  const solutions = [{
    title: 'NetSuite ERP',
    description: "Streamline your financial operations, improve visibility, and accelerate growth with NetSuite's cloud-based ERP solution.",
    link: '/',
    icon: '📊'
  }, {
    title: 'NetSuite CRM',
    description: 'Unify sales, marketing, and customer service to deliver exceptional customer experiences across all touchpoints.',
    link: '/',
    icon: '🤝'
  }, {
    title: 'SuiteCommerce',
    description: "Create seamless, personalized shopping experiences across all channels with NetSuite's ecommerce platform.",
    link: '/',
    icon: '🛒'
  }, {
    title: 'SuiteAnalytics',
    description: 'Transform your data into actionable insights with powerful analytics, reporting, and business intelligence tools.',
    link: '/',
    icon: '📈'
  }];
  return <section className="py-16 bg-blue-50 w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive NetSuite solutions tailored to meet your business
            needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col">
              <div className="text-3xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h3>
              <p className="text-gray-700 mb-6 flex-grow">
                {solution.description}
              </p>
              <a href={solution.link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition mt-auto">
                Learn more
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </a>
            </div>)}
        </div>
        <div className="mt-12 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition">
            Explore All Solutions
          </button>
        </div>
      </div>
    </section>;
};
export default SolutionsSection;