import React, { useState } from 'react';
import { Search, BookOpen, ArrowRight, Play, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Import for navigation

const ComputerSciencePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLab, setHoveredLab] = useState(null);
  const navigate = useNavigate(); // Hook for navigation
  
  // Function to navigate to HomePage.tsx
  const navigateToHome = () => {
    navigate('/'); // Navigate to root path where HomePage is typically rendered
  };

  // Navigation links with proper routing
  const navLinks = [
    { name: "Home", url: "/", action: navigateToHome },
    { name: "About", url: "#" },
    { name: "Labs", url: "#" },
    { name: "Resources", url: "#" },
    { name: "Contact", url: "#" }
  ];

  // Sample computer science labs data
  const computerScienceLabs = [
    { 
      name: "Artificial Intelligence I Lab (New)", 
      institute: "IIIT HYDERABAD",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Artificial Intelligence II Lab (New)", 
      institute: "IIIT HYDERABAD",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Artificial Neural Networks Lab", 
      institute: "IIIT HYDERABAD",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Computational Linguistics Lab", 
      institute: "IIIT HYDERABAD",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Computer Organisation and Architecture Lab", 
      institute: "IIT KHARAGPUR",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Cryptography Lab", 
      institute: "IIT KHARAGPUR",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Data Structures Lab", 
      institute: "IIT BOMBAY",
      referenceUrl: "#",
      syllabusUrl: "#"
    },
    { 
      name: "Database Management Systems Lab", 
      institute: "IIT KANPUR",
      referenceUrl: "#",
      syllabusUrl: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar - Enhanced with animations and glassy effect */}
      <div className="bg-sky-100 backdrop-blur-sm bg-opacity-80 shadow-lg fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer"
                onClick={navigateToHome}
              >
                Virtual Labs
              </span>
            </div>
            
            {/* Desktop Navigation with Home navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  onClick={(e) => {
                    if (link.action) {
                      e.preventDefault();
                      link.action();
                    }
                  }}
                  className="text-sky-700 hover:text-green-600 font-medium transition-colors duration-300 relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gradient-to-r from-sky-300 to-green-300 text-sky-800 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Login
              </button>
              <button className="bg-gradient-to-r from-green-300 to-sky-300 text-green-800 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md">
                Sign Up
              </button>
            </div>
            
            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-sky-700 hover:text-green-500 transition-colors duration-300"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation with Home navigation */}
          {menuOpen && (
            <div className="md:hidden bg-sky-50 py-4 px-2 rounded-b-lg shadow-md animate-fadeIn">
              <div className="flex flex-col space-y-3">
                {navLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.url}
                    onClick={(e) => {
                      if (link.action) {
                        e.preventDefault();
                        link.action();
                      }
                    }}
                    className="text-sky-700 hover:text-green-600 font-medium transition-colors duration-300 px-2 py-1 hover:bg-sky-100 rounded cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex space-x-2 pt-2">
                  <button className="bg-gradient-to-r from-sky-300 to-green-300 text-sky-800 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1">
                    Login
                  </button>
                  <button className="bg-gradient-to-r from-green-300 to-sky-300 text-green-800 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Computer Science Header - Enhanced with gradient */}
      <div className="pt-24 pb-6 bg-gradient-to-r from-sky-600 to-green-600">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-white">Computer Science & Engineering</h1>
          <div className="mt-4 text-white">
            <button 
              onClick={navigateToHome} 
              className="hover:underline flex items-center group"
            >
              <span>Home</span> 
              <span className="mx-2">›</span> 
              <span className="group-hover:text-sky-200 transition-colors duration-300">Broad Areas of Virtual Labs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Section with animated focus */}
      <div className="bg-gradient-to-r from-sky-50 to-green-50 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative transition-all duration-300 hover:shadow-lg rounded-lg">
            <input
              type="text"
              placeholder="Search for labs..."
              className="w-full py-3 px-4 pr-12 rounded-lg shadow-sm border-2 border-transparent focus:border-sky-300 focus:ring-2 focus:ring-green-300 focus:outline-none transition-all duration-300"
            />
            <Search className="absolute right-4 top-3 text-sky-400 transition-colors duration-300 hover:text-green-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Computer Science Labs Listing with Enhanced Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-4">
          {computerScienceLabs.map((lab, index) => (
            <div 
              key={index} 
              className={`border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${hoveredLab === index ? 'bg-sky-50' : 'bg-white'}`}
              onMouseEnter={() => setHoveredLab(index)}
              onMouseLeave={() => setHoveredLab(null)}
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-4">
                  <a href="#" className="text-sky-700 hover:text-green-600 hover:underline font-medium text-lg transition-colors duration-300">
                    {lab.name}
                  </a>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4">
                    <button className="flex items-center text-sky-600 hover:text-green-500 hover:underline transition-colors duration-300 group">
                      <BookOpen className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                      <span>Reference Books</span>
                    </button>
                    <button className="flex items-center text-sky-600 hover:text-green-500 hover:underline transition-colors duration-300 group">
                      <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      <span>Syllabus Mapping</span>
                    </button>
                    <button className="flex items-center bg-gradient-to-r from-sky-500 to-green-500 hover:from-green-500 hover:to-sky-500 text-white py-1 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 ml-auto md:ml-0 group shadow hover:shadow-md">
                      <Play className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Start Lab</span>
                    </button>
                  </div>
                </div>
                <div className={`md:col-span-2 bg-gradient-to-r ${hoveredLab === index ? 'from-green-500 to-sky-500' : 'from-sky-600 to-green-600'} flex items-center justify-center p-4 transition-colors duration-500`}>
                  <span className="text-white font-medium text-center">
                    {lab.institute}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Areas with Enhanced Cards */}
      <div className="bg-gradient-to-r from-sky-50 to-green-50 py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-sky-500 to-green-500 bg-clip-text text-transparent">Related Areas</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Machine Learning", count: 14 },
              { title: "Web Development", count: 9 },
              { title: "Cybersecurity", count: 11 }
            ].map((area, index) => (
              <button key={index} className="p-6 bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 hover:bg-gradient-to-br hover:from-sky-50 hover:to-green-50 text-left transform hover:scale-105 group">
                <h3 className="font-medium text-sky-700 group-hover:text-green-600 transition-colors duration-300">{area.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{area.count} labs available</p>
                <div className="mt-3 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm">
                  <span>Explore</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with gradient */}
      <div className="bg-gradient-to-r from-sky-700 to-green-700 text-white py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sky-100">© 2025 Virtual Labs. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {["Terms", "Privacy", "Support", "FAQ"].map((item, index) => (
              <a key={index} href="#" className="text-sky-200 hover:text-green-200 text-sm transition-colors duration-300 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add global styles for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ComputerSciencePage;