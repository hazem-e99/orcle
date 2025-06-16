import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
const PayrollSystemPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Oracle NetSuite Payroll System
              </h1>
              <p className="text-xl mb-8">
                Streamline your payroll processes and ensure accurate, timely
                payments with NetSuite's integrated payroll solution.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition">
                Schedule a Demo
              </button>
            </div>
            <div className="lg:flex justify-end hidden">
              <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite Payroll System" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Comprehensive Payroll Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Automated Calculations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tax calculations</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Deductions management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Benefits administration</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Compliance & Reporting
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tax form generation</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Regulatory compliance</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Custom reporting</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Employee Self-Service
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Pay stub access</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Tax document access</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Direct deposit management
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* New Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Benefits of NetSuite Payroll
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Payroll Dashboard" className="rounded-lg shadow-lg" />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Streamlined Payroll Processing
                </h3>
                <p className="text-gray-700">
                  Automate your entire payroll process from time tracking to tax
                  filing. Reduce manual errors and save valuable time with
                  automated calculations and direct deposit processing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Tax Compliance Made Easy
                </h3>
                <p className="text-gray-700">
                  Stay compliant with automatic tax table updates, built-in tax
                  calculations, and automated tax form generation for multiple
                  jurisdictions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Employee Self-Service Portal
                </h3>
                <p className="text-gray-700">
                  Empower your employees with 24/7 access to their pay stubs,
                  W-2s, and tax documents through a secure online portal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* New Integration Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Seamless Integration with NetSuite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Financial Integration" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Financial Integration
              </h3>
              <p className="text-gray-700">
                Automatically sync payroll data with your general ledger,
                ensuring accurate financial reporting and eliminating double
                entry.
              </p>
            </div>
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="HR Integration" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                HR Integration
              </h3>
              <p className="text-gray-700">
                Seamlessly connect payroll with HR processes, from onboarding to
                benefits administration, creating a unified employee experience.
              </p>
            </div>
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Time Tracking Integration" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Time Tracking Integration
              </h3>
              <p className="text-gray-700">
                Integrate with time and attendance systems for automatic
                calculation of regular and overtime hours, ensuring accurate
                payroll processing.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Existing CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Streamline Your Payroll?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to learn how NetSuite's Payroll System can help you
            save time and ensure accuracy.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition">
            Get Started
          </button>
        </div>
      </section>
    </div>;
};
export default PayrollSystemPage;