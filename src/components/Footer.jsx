import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer component - Consistent footer across all pages
 */
export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">MH</span>
              </div>
              <span>Mental Health</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Supporting your mental health journey with care and compassion.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="hover:text-white transition">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/forum" className="hover:text-white transition">
                  Forum
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition">
                  Articles & Guides
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Self-Help Tools
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Emergency Hotlines
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: support@mentalhealth.com</li>
              <li>Phone: 1-800-XXX-XXXX</li>
              <li>Available 24/7</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; 2024 Mental Health Support Platform. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
