import React, { useState } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
const SupportPage = () => {
  const [showPopup, setShowPopup] = useState(false);
  return <div className="w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Oracle NetSuite Support Services
          </h1>
          <p className="text-xl max-w-2xl mx-auto mb-8">
            Maximize your NetSuite investment with our comprehensive support
            services
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition" onClick={() => setShowPopup(true)}>
            Request Support
          </button>
        </div>
      </section>
      {/* Two-column Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite Support Services" className="rounded-lg shadow-md w-full h-auto" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Bellatrix Support Services
              </h2>
              <p className="text-gray-700 mb-6">
                Our NetSuite support services are designed to help you get the
                most out of your NetSuite investment. From day-to-day assistance
                to strategic guidance, our team of certified NetSuite experts is
                here to help.
              </p>
              <p className="text-gray-700 mb-6">
                With Bellatrix as your support partner, you'll have access to a
                dedicated team that understands your business and your NetSuite
                implementation, ensuring faster issue resolution and continuous
                improvement.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
                  Learn More
                </button>
                <button className="border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium py-2 px-6 rounded-md transition" onClick={() => setShowPopup(true)}>
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Quote Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need NetSuite support? We can help!
            </h3>
            <p className="text-gray-700 mb-6">
              Answer the question to get started with our dedicated support
              team.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-md transition" onClick={() => setShowPopup(true)}>
              Continue
            </button>
          </div>
        </div>
      </section>
      {/* 3-column list Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-blue-50 rounded-lg p-8">
            <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
              Our NetSuite support services are designed to provide you with the
              assistance you need, when you need it. From troubleshooting to
              optimization, we've got you covered.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Technical Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Issue troubleshooting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Error resolution</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Performance optimization
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">System monitoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Functional Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">User assistance</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Process optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Configuration changes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Report creation</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">
                  Strategic Support
                </h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Roadmap planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">Release management</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">System optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-700">
                      Best practices guidance
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Team Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Meet Our Support Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="Jennifer Smith" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">
                Jennifer Smith
              </h3>
              <p className="text-blue-600 mb-4">Support Team Lead</p>
              <p className="text-gray-700">
                NetSuite certified administrator with 10+ years of experience in
                ERP implementations and support.
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="David Johnson" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">David Johnson</h3>
              <p className="text-blue-600 mb-4">Technical Support Specialist</p>
              <p className="text-gray-700">
                SuiteScript expert with extensive experience in custom
                development and integrations.
              </p>
            </div>
            <div className="text-center">
              <img src="https://images.unsplash.com/photo-1534751516642-a1af1ef26a56?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200&q=80" alt="Michelle Chen" className="rounded-full w-32 h-32 object-cover mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900">Michelle Chen</h3>
              <p className="text-blue-600 mb-4">Functional Consultant</p>
              <p className="text-gray-700">
                Specialized in finance and accounting modules with deep industry
                knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Dedicated Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Your Own Dedicated Team of Bellatrix
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-700 mb-6">
                When you choose Bellatrix for NetSuite support, you get more
                than just technical assistance. You get a dedicated team that
                understands your business and your NetSuite implementation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    A committed team that knows your NetSuite instance
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    One Project Manager and two NetSuite Consultants
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Regular rotation to ensure no tribal knowledge
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">
                    Access to 80+ consultants with specialized expertise
                  </span>
                </li>
              </ul>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
                Learn More About Our Team
              </button>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Your Support Team Includes:
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 text-xl font-bold">PM</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Dedicated Project Manager
                    </h4>
                    <p className="text-gray-700">
                      Your single point of contact who coordinates all support
                      activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 text-xl font-bold">FC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Functional Consultant
                    </h4>
                    <p className="text-gray-700">
                      Expert in NetSuite business processes and configuration
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-3 mr-4">
                    <span className="text-blue-600 text-xl font-bold">TC</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">
                      Technical Consultant
                    </h4>
                    <p className="text-gray-700">
                      Specialized in customizations, integrations, and
                      SuiteScript
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Your One-Stop-Shop for NetSuite Support
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-red-500">
                Admin Support
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    User management and access control
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Role and permission configuration
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Form customization and field management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Workflow and approval process setup
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Saved searches and reporting
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-red-500">
                Functional Support
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Financial management and accounting
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Order management and fulfillment
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Inventory and warehouse management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    CRM and customer management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Project and resource management
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 mb-2 pb-2 border-b-2 border-red-500">
                Development Support
              </h3>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    SuiteScript development and troubleshooting
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">SuiteFlow automation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    Custom report development
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    API integration management
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span className="text-gray-700">
                    SuiteCommerce and web store customization
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Billing Model Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Only Pay for the Hours You Use
              </h2>
              <p className="text-gray-700 mb-4">
                Our flexible support model allows you to purchase support hours
                in advance and use them as needed. No long-term contracts or
                monthly minimums required.
              </p>
              <p className="text-gray-700 mb-6">
                This approach ensures you get the support you need, when you
                need it, without paying for services you don't use.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition">
                View Support Packages
              </button>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="Flexible Billing Model" className="rounded-lg shadow-md w-full h-auto" />
            </div>
          </div>
        </div>
      </section>
      {/* Availability Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            NetSuite Customer Support: When and How You Need It
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" alt="NetSuite Support Availability" className="rounded-lg shadow-md w-full h-auto" />
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Standard Support Hours
                  </h3>
                  <p className="text-gray-700">
                    Our support team is available Monday through Friday, 8:00 AM
                    to 6:00 PM EST, to assist with your NetSuite questions and
                    issues.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Emergency Support
                  </h3>
                  <p className="text-gray-700">
                    For critical issues outside of standard hours, our emergency
                    support team is available 24/7 to ensure your business
                    operations continue uninterrupted.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Multiple Support Channels
                  </h3>
                  <p className="text-gray-700">
                    Get support through our dedicated portal, email, phone, or
                    scheduled video calls, depending on your preference and the
                    nature of your issue.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Proactive Monitoring
                  </h3>
                  <p className="text-gray-700">
                    Our team proactively monitors your NetSuite instance to
                    identify and address potential issues before they impact
                    your business.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Support Form Popup */}
      {showPopup && <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
            <div className="flex justify-between items-center border-b border-gray-200 p-4">
              <h3 className="text-xl font-bold text-gray-900">
                Ask for Support
              </h3>
              <button onClick={() => setShowPopup(false)} className="text-gray-400 hover:text-gray-600 transition">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6">
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
                    Issue Type
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                    <option value="">Select issue type</option>
                    <option value="technical">Technical Issue</option>
                    <option value="functional">Functional Question</option>
                    <option value="customization">Customization Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-24" placeholder="Please describe your issue in detail"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>}
    </div>;
};
export default SupportPage;