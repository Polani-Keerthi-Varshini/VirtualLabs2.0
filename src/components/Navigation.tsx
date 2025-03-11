import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <Link to="/" className="flex items-center">
            <GraduationCap className="h-8 w-8 text-blue-600" />
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-800">Virtual Labs</h1>
              <p className="text-xs text-gray-600">Ministry of Education Initiative</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Home</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>About Us</Link>
            <Link to="/outreach" className={`${isActive('/outreach') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Outreach Portal</Link>
            <Link to="/institutes" className={`${isActive('/institutes') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Institutes</Link>
            <Link to="/contact" className={`${isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Contact</Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-blue-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className={`block px-3 py-2 ${isActive('/') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Home</Link>
            <Link to="/about" className={`block px-3 py-2 ${isActive('/about') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>About Us</Link>
            <Link to="/outreach" className={`block px-3 py-2 ${isActive('/outreach') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Outreach Portal</Link>
            <Link to="/institutes" className={`block px-3 py-2 ${isActive('/institutes') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Institutes</Link>
            <Link to="/contact" className={`block px-3 py-2 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'} font-medium`}>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}