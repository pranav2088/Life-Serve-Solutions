import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Clock, Award } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Staffing', path: '/staffing' },
    { name: 'Contact Us', path: '/contact' }
  ];

  const services = [
    'Personal Care',
    'Home Care',
    'Companion Care',
    'Live-in Care',
    'Respite Care',
    'Specialized Care'
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 p-3 rounded-xl shadow-lg">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold tracking-tight">LifeServe</span>
                <span className="text-sm font-medium text-blue-400 -mt-1">Solutions</span>
              </div>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Providing compassionate, professional home care services that enhance quality of life 
              and promote independence for individuals and families across our community.
            </p>
            <div className="flex items-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Award className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">Licensed & Insured</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-blue-400" />
                <span className="text-sm text-gray-300">24/7 Support</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 p-2 rounded-lg hover:bg-gray-800">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    to="/services"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 group-hover:scale-110 transition-transform duration-200" />
                <div>
                  <p className="text-gray-300">123 Care Street</p>
                  <p className="text-gray-300">Suite 100</p>
                  <p className="text-gray-300">Hometown, ST 12345</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  (123) 456-7890
                </a>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-blue-400 group-hover:scale-110 transition-transform duration-200" />
                <a href="mailto:info@lifeservesolutions.com" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  info@lifeservesolutions.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {currentYear} LifeServe Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;