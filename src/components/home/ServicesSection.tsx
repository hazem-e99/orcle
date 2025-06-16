import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SettingsIcon, PencilRulerIcon, LifeBuoyIcon, PuzzleIcon, GraduationCapIcon, ArrowRightIcon } from 'lucide-react';
const ServicesSection = () => {
  const [activeTab, setActiveTab] = useState('implementation');
  const tabs = [{
    id: 'implementation',
    label: 'Implementation',
    icon: <SettingsIcon className="w-5 h-5" />,
    content: {
      title: 'NetSuite Implementation',
      description: 'Our implementation methodology ensures a smooth transition to NetSuite, minimizing disruption while maximizing ROI. We follow a proven process that includes requirements gathering, system design, configuration, data migration, testing, and go-live support.',
      features: ['Business process analysis and optimization', 'Custom implementation roadmap', 'Data migration and validation', 'User acceptance testing', 'Go-live support and post-implementation review'],
      link: '/implementation'
    }
  }, {
    id: 'customization',
    label: 'Customization',
    icon: <PencilRulerIcon className="w-5 h-5" />,
    content: {
      title: 'NetSuite Customization',
      description: 'Tailor NetSuite to fit your unique business requirements with our customization services. Our team of certified developers can create custom fields, forms, records, workflows, scripts, and integrations to enhance your NetSuite experience.',
      features: ['SuiteScript development', 'Custom workflows and approval processes', 'Advanced reporting and dashboards', 'Custom forms and fields', 'SuiteFlow automation'],
      link: '/'
    }
  }, {
    id: 'support',
    label: 'Support',
    icon: <LifeBuoyIcon className="w-5 h-5" />,
    content: {
      title: 'NetSuite Support',
      description: 'Get the help you need to maximize your NetSuite investment with our comprehensive support services. Our team of experts is available to assist with technical issues, system optimization, and ongoing maintenance.',
      features: ['Dedicated support team', 'Issue resolution and troubleshooting', 'System optimization and performance tuning', 'User training and enablement', 'Regular system health checks'],
      link: '/support'
    }
  }, {
    id: 'integration',
    label: 'Integration',
    icon: <PuzzleIcon className="w-5 h-5" />,
    content: {
      title: 'NetSuite Integration',
      description: 'Connect NetSuite with your other business systems to create a unified ecosystem. Our integration services ensure seamless data flow between NetSuite and your CRM, e-commerce, marketing, and other platforms.',
      features: ['API-based integrations', 'SuiteTalk web services', 'RESTlet development', 'Third-party connector implementation', 'Data synchronization and validation'],
      link: '/'
    }
  }, {
    id: 'training',
    label: 'Training',
    icon: <GraduationCapIcon className="w-5 h-5" />,
    content: {
      title: 'NetSuite Training',
      description: 'Empower your team with the knowledge they need to succeed with NetSuite. Our training programs are designed to help users at all levels maximize their efficiency and effectiveness with the platform.',
      features: ['Role-based training programs', 'Admin and developer training', 'Custom training materials', 'Hands-on workshops', 'Ongoing education and certification support'],
      link: '/training'
    }
  }];
  const activeContent = tabs.find(tab => tab.id === activeTab)?.content;
  return <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive NetSuite services to help your business thrive in the
            digital economy
          </p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
          {tabs.map(tab => <button key={tab.id} className={`flex items-center px-6 py-4 text-sm font-medium transition-colors ${activeTab === tab.id ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'}`} onClick={() => setActiveTab(tab.id)}>
              <span className="mr-2">{tab.icon}</span>
              {tab.label}
            </button>)}
        </div>
        {/* Tab Content */}
        {activeContent && <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-50 rounded-lg p-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {activeContent.title}
              </h3>
              <p className="text-gray-700 mb-6">{activeContent.description}</p>
              <ul className="space-y-3 mb-8">
                {activeContent.features.map((feature, index) => <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>)}
              </ul>
              <Link to={activeContent.link} className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition">
                Learn more about {activeContent.title}
                <ArrowRightIcon className="ml-2 w-4 h-4" />
              </Link>
            </div>
            <div className="flex justify-center">
              <img src={`https://images.unsplash.com/photo-${activeTab === 'implementation' ? '1552664730-d307ca884978' : activeTab === 'customization' ? '1581291518633-472d2e08bd82' : activeTab === 'support' ? '1560264280-88b0915fa7ac' : activeTab === 'integration' ? '1581291518633-472d2e08bd82' : '1523240795612-9a054b0db644'}?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`} alt={activeContent.title} className="rounded-lg shadow-md max-w-full h-auto" />
            </div>
          </div>}
      </div>
    </section>;
};
export default ServicesSection;