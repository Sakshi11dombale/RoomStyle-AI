
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-design-cream py-12 mt-20">
      <div className="content-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold mb-4">RoomStyle <span className="text-design-terracotta">AI</span></h3>
            <p className="text-sm text-gray-600 mb-4">
              Transform your living spaces with AI-powered interior design suggestions, color palettes, and furniture recommendations.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Features</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/analyzer" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  Room Analyzer
                </Link>
              </li>
              <li>
                <Link to="/inspiration" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  Design Inspiration
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  Color Palettes
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/" className="text-sm text-gray-600 hover:text-design-terracotta transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8">
          <p className="text-sm text-gray-500 text-center">
            &copy; {new Date().getFullYear()} RoomStyle AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
