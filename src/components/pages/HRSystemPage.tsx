import React from 'react';
import { CheckIcon, ArrowRightIcon } from 'lucide-react';
const HRSystemPage = () => {
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Oracle NetSuite HR System
              </h1>
              <p className="text-xl mb-8">
                Transform your HR operations with NetSuite's comprehensive human
                resource management solution.
              </p>
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition">
                Schedule a Demo
              </button>
            </div>
            <div className="lg:flex justify-end hidden">
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite HR System" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Complete HR Management Solution
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Employee Management
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Personnel records</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Performance tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Document management</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Time & Attendance
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Leave management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Time tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Shift scheduling</span>
                </li>
              </ul>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Recruitment & Onboarding
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Applicant tracking</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Interview management</span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">Onboarding workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* New Employee Experience Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Enhanced Employee Experience
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Self-Service Portal
                </h3>
                <p className="text-gray-700">
                  Give employees control over their information with a
                  comprehensive self-service portal for managing personal
                  details, time off requests, and benefit selections.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Mobile Access
                </h3>
                <p className="text-gray-700">
                  Enable employees to access HR services anytime, anywhere
                  through our mobile-responsive platform, improving engagement
                  and satisfaction.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Performance Management
                </h3>
                <p className="text-gray-700">
                  Streamline performance reviews, goal setting, and feedback
                  processes with our integrated performance management tools.
                </p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Employee Portal" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>
      {/* New Analytics Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            HR Analytics & Reporting
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Workforce Analytics" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Workforce Analytics
              </h3>
              <p className="text-gray-700">
                Gain insights into workforce trends, demographics, and
                performance metrics through comprehensive analytics dashboards.
              </p>
            </div>
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Compliance Reporting" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compliance Reporting
              </h3>
              <p className="text-gray-700">
                Generate required compliance reports automatically, ensuring
                accuracy and timeliness in regulatory reporting.
              </p>
            </div>
            <div className="p-6">
              <img src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Custom Reports" className="rounded-lg shadow-md mb-4 w-full h-48 object-cover" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Custom Reports
              </h3>
              <p className="text-gray-700">
                Create custom reports and dashboards tailored to your
                organization's specific needs and KPIs.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Existing CTA Section */}
      <section className="py-12 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your HR Operations
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Contact us today to learn how NetSuite's HR System can help you
            manage your workforce more effectively.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-8 rounded-md transition">
            Get Started
          </button>
        </div>
      </section>
    </div>;
};
export default HRSystemPage;