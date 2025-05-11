
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="py-4 px-4 sm:px-6 lg:px-8 border-b">
      <div className="content-container flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-serif font-bold text-design-charcoal">
            <Link to="/">RoomStyle <span className="text-design-terracotta">AI</span></Link>
          </div>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Home
          </Link>
          <Link to="/analyzer" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Room Analyzer
          </Link>
          <Link to="/inspiration" className="text-sm font-medium text-gray-700 hover:text-design-terracotta transition-all-300">
            Inspiration
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="hidden sm:flex">Sign In</Button>
          <Button className="bg-design-terracotta hover:bg-design-terracotta/90 text-white">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
