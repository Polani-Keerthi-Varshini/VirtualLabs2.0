import React, { useState, useEffect } from 'react';
import { Search, BookOpen, ArrowRight, Play, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ComputerSciencePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLab, setHoveredLab] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  
  // Track scroll for navbar effects
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigateToHome = () => {
    navigate('/');
  };

  const navLinks = [
    { name: "Home", url: "/", action: navigateToHome },
    { name: "About", url: "#" },
    { name: "Labs", url: "#" },
    { name: "Resources", url: "#" },
    { name: "Contact", url: "#" }
  ];

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
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Navbar - Dark theme with glowing effects */}
      <div className={`backdrop-blur-lg bg-opacity-70 shadow-lg fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900 shadow-cyan-500/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <span 
                className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent transition-all duration-300 hover:scale-105 cursor-pointer group"
                onClick={navigateToHome}
              >
                Virtual Labs
                <span className="block h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </span>
            </div>
            
            {/* Desktop Navigation with glow effects */}
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
                  className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group cursor-pointer"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
              <button className="bg-gray-800 border border-cyan-500/30 text-cyan-400 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-cyan-500/20 group">
                <span className="group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-cyan-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">Login</span>
              </button>
              <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-green-500/20 hover:from-green-500 hover:to-cyan-500">
                Sign Up
              </button>
            </div>
            
            {/* Mobile Menu Button with glow effect */}
            <div className="md:hidden">
              <button 
                onClick={() => setMenuOpen(!menuOpen)}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-300"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          
          {/* Mobile Navigation with dark theme */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800 py-4 px-2 rounded-b-lg shadow-md animate-fadeIn border border-gray-700">
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
                    className="text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 px-2 py-1 hover:bg-gray-700 rounded cursor-pointer"
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex space-x-2 pt-2">
                  <button className="bg-gray-800 border border-cyan-500/30 text-cyan-400 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1">
                    Login
                  </button>
                  <button className="bg-gradient-to-r from-cyan-500 to-green-500 text-gray-900 font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex-1">
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Computer Science Header - Dark gradient with animated underline */}
      <div className="pt-24 pb-6 bg-gradient-to-r from-gray-900 to-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-green-500"></div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-1/3 w-64 h-64 bg-green-500/10 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h1 className="text-3xl font-bold text-white">Computer Science <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">&</span> Engineering</h1>
          <div className="mt-4 text-gray-300">
            <button 
              onClick={navigateToHome} 
              className="hover:text-cyan-400 flex items-center group transition-colors duration-300"
            >
              <span>Home</span> 
              <span className="mx-2">›</span> 
              <span className="group-hover:text-green-400 transition-colors duration-300">Broad Areas of Virtual Labs</span>
            </button>
          </div>
        </div>
      </div>

      {/* Search Section with glow effect */}
      <div className="bg-gray-800 py-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-5 left-1/3 w-32 h-32 bg-green-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="relative transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/20 rounded-lg">
            <input
              type="text"
              placeholder="Search for labs..."
              className="w-full py-3 px-4 pr-12 rounded-lg shadow-sm border-2 border-gray-700 focus:border-cyan-500 focus:ring-2 focus:ring-green-500/20 focus:outline-none transition-all duration-300 bg-gray-900 text-gray-100"
            />
            <Search className="absolute right-4 top-3 text-cyan-400 transition-colors duration-300 hover:text-green-400 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Computer Science Labs Listing with Glowing Cards */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {computerScienceLabs.map((lab, index) => (
            <div 
              key={index} 
              className={`border border-gray-700 rounded-lg overflow-hidden transition-all duration-500 ${
                hoveredLab === index 
                  ? 'shadow-lg shadow-cyan-500/20 bg-gray-800' 
                  : 'shadow-md shadow-gray-800/50 bg-gray-800/50'
              }`}
              onMouseEnter={() => setHoveredLab(index)}
              onMouseLeave={() => setHoveredLab(null)}
            >
              <div className="grid md:grid-cols-5">
                <div className="md:col-span-3 p-4">
                  <a href="#" className="text-cyan-400 hover:text-green-400 hover:underline font-medium text-lg transition-colors duration-300">
                    {lab.name}
                  </a>
                  <div className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 mt-4">
                    <button className="flex items-center text-gray-300 hover:text-cyan-400 hover:underline transition-colors duration-300 group">
                      <BookOpen className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" />
                      <span>Reference Books</span>
                    </button>
                    <button className="flex items-center text-gray-300 hover:text-cyan-400 hover:underline transition-colors duration-300 group">
                      <svg className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
                      </svg>
                      <span>Syllabus Mapping</span>
                    </button>
                    <button className="flex items-center bg-gradient-to-r from-cyan-500 to-green-500 hover:from-green-500 hover:to-cyan-500 text-gray-900 py-1 px-3 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md hover:shadow-green-500/20 ml-auto md:ml-0 group">
                      <Play className="w-4 h-4 mr-1 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>Start Lab</span>
                    </button>
                  </div>
                </div>
                <div className={`md:col-span-2 flex items-center justify-center p-4 relative overflow-hidden ${
                  hoveredLab === index 
                    ? 'bg-gradient-to-r from-gray-800 to-gray-800' 
                    : 'bg-gray-800'
                }`}>
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    hoveredLab === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/20 rounded-full filter blur-3xl"></div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-green-500/20 rounded-full filter blur-3xl"></div>
                  </div>
                  <span className="text-white font-medium text-center relative z-10">
                    {lab.institute}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Areas with Glowing Cards */}
      <div className="bg-gray-800 py-10 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-green-500/5 rounded-full filter blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <h2 className="text-2xl font-bold mb-8 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Related Areas</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Machine Learning", count: 14 },
              { title: "Web Development", count: 9 },
              { title: "Cybersecurity", count: 11 }
            ].map((area, index) => (
              <button key={index} className="p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700 hover:border-cyan-500/30 shadow-lg hover:shadow-cyan-500/20 transition-all duration-500 text-left transform hover:scale-105 group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <h3 className="font-medium text-cyan-400 group-hover:text-green-400 transition-colors duration-300 relative z-10">{area.title}</h3>
                <p className="text-gray-400 text-sm mt-1 relative z-10">{area.count} labs available</p>
                <div className="mt-3 text-green-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm relative z-10">
                  <span>Explore</span>
                  <ArrowRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer with dark gradient and glowing borders */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-gray-300 py-8 mt-10 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-cyan-500/50 via-green-500/50 to-cyan-500/50"></div>
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Virtual Labs. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-4">
            {["Terms", "Privacy", "Support", "FAQ"].map((item, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-cyan-400 text-sm transition-colors duration-300 hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Add global styles for animations and effects */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(to right, rgba(55, 65, 81, 0.1) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(55, 65, 81, 0.1) 1px, transparent 1px);
          background-size: 20px 20px;
        }
      `}</style>
    </div>
  );
};

export default ComputerSciencePage;