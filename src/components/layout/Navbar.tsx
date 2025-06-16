import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDownIcon, MenuIcon, XIcon, HomeIcon, BriefcaseIcon, MessageSquareIcon, BuildingIcon, PuzzleIcon, InfoIcon, ArrowRightIcon } from 'lucide-react';
import ContactFormModal from '../common/ContactFormModal';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [showContactModal, setShowContactModal] = useState(false);
  const [mobileActiveMenu, setMobileActiveMenu] = useState<string | null>(null);
  let hoverTimeout: NodeJS.Timeout;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setMobileActiveMenu(null);
  };
  const handleMouseEnter = (menu: string) => {
    clearTimeout(hoverTimeout);
    setActiveMenu(menu);
  };
  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setActiveMenu(null);
    }, 2000); // 2 seconds delay
  };
  const toggleMobileSubmenu = (menu: string) => {
    setMobileActiveMenu(mobileActiveMenu === menu ? null : menu);
  };
  return <>
      <header className="sticky top-0 z-50 w-full bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-blue-800">
                Bellatrix
              </span>
            </Link>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                Home
              </Link>
              {/* Services with Mega Menu */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
                <button className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                  Services
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </button>
                {activeMenu === 'services' && <div className="absolute left-0 w-[90vw] -ml-[45vw] bg-white bg-opacity-95 shadow-xl rounded-b-lg py-6 px-8 mt-2 z-50 grid grid-cols-5 gap-6" style={{
                height: '40vh'
              }}>
                    <div className="col-span-1 border-r border-gray-200 pr-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">
                        Implementation
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/implementation" className="text-gray-600 hover:text-blue-600 transition">
                            NetSuite Implementation
                          </Link>
                        </li>
                        <li>
                          <Link to="/implementation" className="text-gray-600 hover:text-blue-600 transition">
                            ERP Implementation
                          </Link>
                        </li>
                        <li>
                          <Link to="/implementation" className="text-gray-600 hover:text-blue-600 transition">
                            System Migration
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-1 border-r border-gray-200 pr-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">
                        Customization
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            NetSuite Customization
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            SuiteScript Development
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            Workflow Automation
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-1 border-r border-gray-200 pr-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">
                        Support
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/support" className="text-gray-600 hover:text-blue-600 transition">
                            Oracle NetSuite Support
                          </Link>
                        </li>
                        <li>
                          <Link to="/support" className="text-gray-600 hover:text-blue-600 transition">
                            Admin Support
                          </Link>
                        </li>
                        <li>
                          <Link to="/support" className="text-gray-600 hover:text-blue-600 transition">
                            Technical Support
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-1 border-r border-gray-200 pr-6">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">
                        Integration
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            API Integration
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            Third-party Connectors
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className="text-gray-600 hover:text-blue-600 transition">
                            Data Migration
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-span-1">
                      <h3 className="text-lg font-bold text-blue-800 mb-4">
                        Training
                      </h3>
                      <ul className="space-y-2">
                        <li>
                          <Link to="/training" className="text-gray-600 hover:text-blue-600 transition">
                            NetSuite Training
                          </Link>
                        </li>
                        <li>
                          <Link to="/training" className="text-gray-600 hover:text-blue-600 transition">
                            User Workshops
                          </Link>
                        </li>
                        <li>
                          <Link to="/training" className="text-gray-600 hover:text-blue-600 transition">
                            Admin Certification
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>}
              </div>
              <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                Testimonials
              </Link>
              <Link to="/" className="font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                Industries
              </Link>
              {/* Solutions with Mega Menu */}
              <div className="relative" onMouseEnter={() => handleMouseEnter('solutions')} onMouseLeave={handleMouseLeave}>
                <button className="flex items-center font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                  Solutions
                  <ChevronDownIcon className="ml-1 w-4 h-4" />
                </button>
                {activeMenu === 'solutions' && <div className="absolute left-0 w-[600px] -ml-[200px] bg-white bg-opacity-95 shadow-xl rounded-b-lg py-6 px-8 mt-2 z-50">
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-lg font-bold text-blue-800 mb-4">
                          Enterprise Systems
                        </h3>
                        <ul className="space-y-3">
                          <li>
                            <Link to="/payroll-system" className="flex items-start group">
                              <div className="mr-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                  $
                                </span>
                              </div>
                              <div>
                                <span className="block font-medium text-gray-900 group-hover:text-blue-600">
                                  Oracle NetSuite Payroll System
                                </span>
                                <span className="text-sm text-gray-600">
                                  Streamline your payroll processes
                                </span>
                              </div>
                            </Link>
                          </li>
                          <li>
                            <Link to="/hr-system" className="flex items-start group">
                              <div className="mr-3">
                                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                  👥
                                </span>
                              </div>
                              <div>
                                <span className="block font-medium text-gray-900 group-hover:text-blue-600">
                                  Oracle NetSuite HR System
                                </span>
                                <span className="text-sm text-gray-600">
                                  Manage your workforce effectively
                                </span>
                              </div>
                            </Link>
                          </li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-2">
                          Why Choose NetSuite?
                        </h4>
                        <p className="text-sm text-gray-600 mb-4">
                          Get enterprise-grade solutions that scale with your
                          business
                        </p>
                        <Link to="/implementation" className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700">
                          Learn more
                          <ArrowRightIcon className="ml-1 w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>}
              </div>
              <Link to="/about" className="font-medium text-gray-700 hover:text-blue-600 transition duration-300">
                About
              </Link>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-5 rounded-md transition duration-300" onClick={() => setShowContactModal(true)}>
                Contact Us
              </button>
            </nav>
            {/* Mobile menu button */}
            <button className="md:hidden text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>
      <ContactFormModal isOpen={showContactModal} onClose={() => setShowContactModal(false)} />
      {isMenuOpen && <div className="md:hidden fixed inset-0 top-[73px] bg-white z-50 overflow-y-auto">
          <nav className="px-4 py-6">
            <Link to="/" className="block py-3 text-gray-700 hover:text-blue-600 transition" onClick={toggleMenu}>
              Home
            </Link>
            {/* Services Dropdown */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileSubmenu('services')} className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600 transition">
                <span>Services</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileActiveMenu === 'services' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveMenu === 'services' && <div className="pl-4 pb-3">
                  <Link to="/implementation" className="block py-2 text-gray-600 hover:text-blue-600 transition" onClick={toggleMenu}>
                    Implementation
                  </Link>
                  <Link to="/support" className="block py-2 text-gray-600 hover:text-blue-600 transition" onClick={toggleMenu}>
                    Support
                  </Link>
                  <Link to="/training" className="block py-2 text-gray-600 hover:text-blue-600 transition" onClick={toggleMenu}>
                    Training
                  </Link>
                </div>}
            </div>
            <Link to="/" className="block py-3 text-gray-700 hover:text-blue-600 transition border-b border-gray-100" onClick={toggleMenu}>
              Testimonials
            </Link>
            <Link to="/" className="block py-3 text-gray-700 hover:text-blue-600 transition border-b border-gray-100" onClick={toggleMenu}>
              Industries
            </Link>
            {/* Solutions Dropdown */}
            <div className="border-b border-gray-100">
              <button onClick={() => toggleMobileSubmenu('solutions')} className="flex items-center justify-between w-full py-3 text-gray-700 hover:text-blue-600 transition">
                <span>Solutions</span>
                <ChevronDownIcon className={`w-5 h-5 transition-transform ${mobileActiveMenu === 'solutions' ? 'rotate-180' : ''}`} />
              </button>
              {mobileActiveMenu === 'solutions' && <div className="pl-4 pb-3">
                  <Link to="/payroll-system" className="block py-2 text-gray-600 hover:text-blue-600 transition" onClick={toggleMenu}>
                    Oracle NetSuite Payroll System
                  </Link>
                  <Link to="/hr-system" className="block py-2 text-gray-600 hover:text-blue-600 transition" onClick={toggleMenu}>
                    Oracle NetSuite HR System
                  </Link>
                </div>}
            </div>
            <Link to="/about" className="block py-3 text-gray-700 hover:text-blue-600 transition border-b border-gray-100" onClick={toggleMenu}>
              About
            </Link>
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-5 rounded-md transition" onClick={() => {
          setShowContactModal(true);
          setIsMenuOpen(false);
        }}>
              Contact Us
            </button>
          </nav>
        </div>}
    </>;
};
export default Navbar;