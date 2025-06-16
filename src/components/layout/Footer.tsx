import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PhoneIcon, MailIcon, MapPinIcon, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon, ArrowRightIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
const Footer = () => {
  const [showContactModal, setShowContactModal] = useState(false);
  return <>
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-bold mb-4">Bellatrix</h3>
              <p className="text-gray-400 mb-4">
                Enterprise software consultancy specializing in NetSuite and
                cloud solutions with over 20 years of experience.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <FacebookIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <TwitterIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  <YoutubeIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-400 hover:text-white transition">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/implementation" className="text-gray-400 hover:text-white transition">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-400 hover:text-white transition">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-gray-400 hover:text-white transition">
                    NetSuite Training
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Our Services</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/implementation" className="text-gray-400 hover:text-white transition">
                    NetSuite Implementation
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    NetSuite Customization
                  </Link>
                </li>
                <li>
                  <Link to="/support" className="text-gray-400 hover:text-white transition">
                    NetSuite Support
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    NetSuite Integration
                  </Link>
                </li>
                <li>
                  <Link to="/training" className="text-gray-400 hover:text-white transition">
                    NetSuite Training
                  </Link>
                </li>
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition">
                    SuiteCommerce
                  </Link>
                </li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-3 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-400">
                    123 Business Avenue, Suite 500
                    <br />
                    San Francisco, CA 94107
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">(555) 123-4567</span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-3 text-blue-400 flex-shrink-0" />
                  <span className="text-gray-400">info@bellatrix.com</span>
                </li>
                <li>
                  <button onClick={() => setShowContactModal(true)} className="text-blue-400 hover:text-blue-300 transition flex items-center mt-4">
                    Send us a message
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Bellatrix. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition">
                Privacy Policy
              </Link>
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition">
                Terms of Service
              </Link>
              <Link to="/" className="text-gray-500 hover:text-white text-sm transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
      <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
    </>;
};
export default Footer;