import React, { useState, useEffect } from 'react';
import { Search, Box, BookOpen, ArrowRight, Play, Menu, X } from 'lucide-react';
import ElectronicsPage from './ElectronicsPage';
import ComputerSciencePage from './ComputerSciencePage';
import BiotechnologyPage from './pages/BiotechnologyPage.jsx';
import ChemicalPage from './ChemicalPage';
import CivilPage from './CivilPage';
import ElectricalPage from './ElectricalPage';
import MechanicalPage from './MechanicalPage';
import PhysicalSciencesPage from './PhysicalSciencesPage';
import AboutPage from './AboutPage';
import InstitutesPage from './InstitutesPage';
import OutreachPage from './OutreachPage';

// Navbar button component with light blue and light green gradient
const NavButton = ({ name, onClick, isActive = false }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden group
        px-5 py-2.5 rounded-lg font-medium
        transition-all duration-300 transform hover:scale-105
        ${isActive 
          ? 'bg-gradient-to-r from-sky-400/80 to-green-400/80 text-white shadow-md' 
          : 'bg-gray-800 text-gray-300 hover:text-white'}
      `}
    >
      {/* Background gradient effect on hover */}
      <span className={`
        absolute inset-0 bg-gradient-to-r from-sky-400/60 to-green-400/60 
        transition-opacity duration-300 opacity-0 group-hover:opacity-100
        ${isActive ? 'opacity-0' : ''}
      `}></span>
      
      {/* Button border glow effect */}
      <span className={`
        absolute inset-0 rounded-lg border border-sky-400/30 border-t-green-400/30 border-l-green-400/30
        group-hover:border-sky-400/50 group-hover:border-t-green-400/50 group-hover:border-l-green-400/50
        transition-all duration-300
        ${isActive ? 'border-sky-400/70 border-t-green-400/70 border-l-green-400/70' : ''}
      `}></span>
      
      {/* Button text */}
      <span className="relative z-10">{name}</span>
    </button>
  );
};

export default function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [showIntro, setShowIntro] = useState(true);
  const [introComplete, setIntroComplete] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  // Navigation links - updated with handlers for all links
  const navLinks = [
    { name: 'Home', url: '#', handler: () => setCurrentPage('home') },
    { name: 'About', url: '#', handler: () => setCurrentPage('about') },
    { name: 'Outreach Portal', url: '#', handler: () => setCurrentPage('outreach') },
    { name: 'Institutes', url: '#', handler: () => setCurrentPage('institutes') },
  ];

  // Text animation effect with staggered appearance
  useEffect(() => {
    // First make text visible with a small delay
    const textTimer = setTimeout(() => {
      setTextVisible(true);
    }, 300);

    // Then start the exit animation after showing for a while
    const exitTimer = setTimeout(() => {
      setIntroComplete(true);
      setTimeout(() => {
        setShowIntro(false);
      }, 800); // Longer fade-out for smoother transition
    }, 3000); // Duration of intro display

    return () => {
      clearTimeout(textTimer);
      clearTimeout(exitTimer);
    };
  }, []);

  // Skip animation if already seen
  const skipIntro = () => {
    setIntroComplete(true);
    setTimeout(() => {
      setShowIntro(false);
    }, 300);
  };

  // Homepage content continues as normal
  const slides = [
    {
      image: 'https://www.vlab.co.in/images/slider/3.jpg',
      title: 'Virtual Learning Excellence',
    },
    {
      image: 'https://www.vlab.co.in/images/slider/6.jpg',
      title: 'Collaborative Education',
    },
    {
      image: 'https://www.vlab.co.in/images/slider/7.jpg',
      title: 'Digital Innovation',
    },
    {
      image: 'https://www.vlab.co.in/images/slider/8.jpg',
      title: '',
    },
    {
      image: 'https://www.vlab.co.in/images/slider/9.png',
      title: 'Collaborative Education',
    },
    {
      image: 'https://www.vlab.co.in/images/slider/12.png',
      title: 'Digital Innovation',
    },
  ];

  const broadAreas = [
    { title: 'Electronics & Communications', icon: Box, url: '/electronics-communications', page: 'ElectronicsPage' },
    { title: 'Computer Science & Engineering', icon: Box, url: '/computer-science', page: 'ComputerSciencePage' },
    { title: 'Electrical Engineering', icon: Box, url: '/electrical-engineering', page: 'electrical' },
    { title: 'Mechanical Engineering', icon: Box, url: '/mechanical-engineering', page: 'mechanical' },
    { title: 'Chemical Engineering', icon: Box, url: '/chemical-engineering', page: 'chemical' },
    { title: 'Biotechnology and Biomedical Engineering', icon: Box, url: '/biotechnology', page: 'biotechnology' },
    { title: 'Civil Engineering', icon: Box, url: '/civil-engineering', page: 'civil' },
    { title: 'Physical Sciences', icon: Box, url: '/physical-sciences', page: 'physical' },
    { title: 'Chemical Sciences', icon: Box, url: '/chemical-sciences', page: 'chemical-sciences' },
  ];

  // Sample electronics labs data for the page that would open when clicking "Electronics & Communications"
  const electronicsLabs = [
    {
      name: 'Analog and Digital Electronics Lab - I (New)',
      institute: 'IIT ROORKEE',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
    {
      name: 'Analog and Digital Electronics Lab - II (New)',
      institute: 'IIT ROORKEE',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
    {
      name: 'Analog Electronics Circuits Virtual Lab',
      institute: 'IIT KHARAGPUR',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
    {
      name: 'Analog Electronics Lab',
      institute: 'IIT ROORKEE',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
    {
      name: 'Basic Electronics Lab',
      institute: 'IIT KHARAGPUR',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
    {
      name: 'Digital Applications Lab',
      institute: 'IIT BOMBAY',
      referenceUrl: '#',
      syllabusUrl: '#',
    },
  ];

  const institutes = [
    { name: "IIT Kharagpur", logo: "/src/images/iitkharagpur.png" },
    { name: "IIT Roorkee", logo: "/src/images/iitroorke.jpg" },
    { name: "IIT Guwahati", logo: "/src/images/iitguwahati.png" },
    { name: "IIT Delhi", logo: "/src/images/iitdelhi.png" },
    { name: "IIT Bombay", logo: "/src/images/iitbombay.png" },
    { name: "IIT Kanpur", logo: "/src/images/iitkanpur.png" },
    { name: "IIIT Hyderabad", logo: "/src/images/iithyd.png" },
    { name: "Amrita Vishwa Vidyapeetham", logo: "/src/images/amrita.png" },
    { name: "Dayalbagh Educational Institute", logo: "/src/images/dayalbagh.jpg" },
    { name: "NITK Surathkal", logo: "/src/images/nitk.jpg" },
    { name: "COEP Technological University Pune", logo: "/src/images/coep.jpg" },
  ];

  const labs = [
    { name: 'Artificial Intelligence I Lab (New)', institute: 'IIIT HYDERABAD' },
    { name: 'Artificial Intelligence II Lab (New)', institute: 'IIIT HYDERABAD' },
    { name: 'Artificial Neural Networks Lab', institute: 'IIIT HYDERABAD' },
    { name: 'Computational Linguistics Lab', institute: 'IIIT HYDERABAD' },
    { name: 'Computer Organisation and Architecture Lab', institute: 'IIT KHARAGPUR' },
  ];

  const testimonials = [
    {
      text: 'One of the primary advantages associated with the utilization of Virtual Laboratory is the ability for students to engage in self-paced learning. This technology facilitates students in engaging in studying, preparing for, and doing laboratory experiments at their own convenience.',
      author: 'Student',
    },
    {
      text: 'Virtual Labs are implemented in USAR, GGSIPU and are useful in understanding the theories and concepts of science or other subjects that cannot be studied alone only by textbooks. It has the great potential to enhance actual laboratory experiences.',
      author: 'Professor',
    },
  ];

  // State to track if Electronics & Communications page is open
  const [showElectronicsPage, setShowElectronicsPage] = useState(false);

  // State to track if Computer Science page is open
  const [showComputerSciencePage, setShowComputerSciencePage] = useState(false);

  // Handler for clicking on a broad area
  const handleBroadAreaClick = (areaTitle) => {
    if (areaTitle === 'Electronics & Communications') {
      setShowElectronicsPage(true);
    } else if (areaTitle === 'Computer Science & Engineering') {
      setShowComputerSciencePage(true);
    }
  };

  // Handler to go back to the main page
  const handleBackToHome = () => {
    setShowElectronicsPage(false);
    setShowComputerSciencePage(false);
    setCurrentPage('home');
  };

  // If showing Electronics page
  if (showElectronicsPage) {
    return <ElectronicsPage onBackToHome={handleBackToHome} />;
  }

  // If Institutes page is selected
  if (currentPage === 'institutes') {
    return <InstitutesPage onBackToHome={handleBackToHome} />;
  }

  // If Outreach Portal page is selected
  if (currentPage === 'outreach') {
    return <OutreachPage onBackToHome={handleBackToHome} />;
  }

  // If About page is selected
  if (currentPage === 'about') {
    return <AboutPage onBackToHome={handleBackToHome} />;
  }

  // If showing Computer Science & Engineering page
  if (showComputerSciencePage) {
    return <ComputerSciencePage onBackToHome={handleBackToHome} />;
  }

  if (showIntro) {
    return (
      <div
        className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-sky-900"
        onClick={skipIntro}
      >
        <div className={`text-center transition-all duration-800 transform ${introComplete ? 'opacity-0 scale-150' : 'opacity-100 scale-100'} ${textVisible ? 'translate-y-0' : 'translate-y-8'}`}>
          <div className="relative">
            {/* Glowing effect behind text */}
            <div className="absolute inset-0 blur-xl bg-green-600 bg-opacity-30 rounded-full transform scale-150"></div>

            {/* Main title with fancy styling and highlighted "Virtual" text */}
            <h1 className="relative text-7xl font-extrabold mb-4 tracking-tight">
              <span className="inline-block mx-4 text-green-300 drop-shadow-md">
                <span className="inline-block transform transition-all duration-700 hover:scale-125 delay-350">Virtual Labs</span>
              </span>
            </h1>
          </div>

          {/* Animated underline */}
          <div className="h-1 w-0 bg-gradient-to-r from-green-400 to-green-600 mx-auto rounded-full animate-grow"></div>

          <p className="text-xl text-green-100 mt-6 font-light">Empowering Education Through Technology</p>
          <p className="mt-12 text-green-200/70 text-sm animate-pulse">Click anywhere to continue</p>
        </div>

        {/* Add custom animation */}
        <style jsx>{`
          @keyframes grow {
            0% { width: 0; }
            100% { width: 240px; }
          }
          .animate-grow {
            animation: grow 1.5s forwards ease-out;
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navbar - Updated with Logo */}
      <div className="bg-gray-900 shadow-lg border-b border-gray-800 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* Added Virtual Labs Logo */}
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vlabs.png" 
                alt="Virtual Labs Logo" 
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Virtual Labs</span>
            </div>

            {/* Desktop Navigation with Updated Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              {navLinks.map((link, index) => (
                <NavButton
                  key={index}
                  name={link.name}
                  onClick={link.handler}
                  isActive={currentPage === link.name.toLowerCase()}
                />
              ))}
            </div>

            {/* Mobile Menu Button - Styled with gradient */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="bg-gradient-to-r from-sky-500/20 to-green-500/20 
                          hover:from-sky-500/30 hover:to-green-500/30
                          text-gray-300 hover:text-white rounded-lg p-2
                          border border-sky-400/30 border-t-green-400/30 border-l-green-400/30
                          transition-all duration-300"
              >
                {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation - Updated with gradient styling */}
          {menuOpen && (
            <div className="md:hidden bg-gray-800/95 backdrop-blur-sm py-4 px-2 rounded-b-lg border-t border-sky-400/30 border-l-green-400/30 border-r-green-400/30">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link, index) => (
                  <NavButton
                    key={index}
                    name={link.name}
                    onClick={link.handler}
                    isActive={currentPage === link.name.toLowerCase()}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Carousel - adjusted for navbar */}
      <div className="relative pt-16">
        <div className="relative h-[500px] mt-16">
          <img
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white">
              <h2 className="text-4xl font-bold mb-4">{slides[activeSlide].title}</h2>
              <p className="text-xl">Empowering Education Through Technology</p>
              <button className="mt-8 bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 transition-all duration-300 transform hover:scale-105 text-white font-semibold py-3 px-8 rounded-full shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-3 w-3 rounded-full transform transition-all duration-300 ${
                activeSlide === index ? 'bg-gradient-to-r from-sky-400 to-green-400 scale-125' : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for labs..."
              className="w-full py-3 px-4 pr-12 rounded-lg shadow-sm border-2 border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all duration-300 bg-gray-700 text-white placeholder-gray-300"
            />
            <Search className="absolute right-4 top-3 text-sky-400" />
          </div>
        </div>
      </div>

      {/* Broad Areas */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Broad Areas of Virtual Labs</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {broadAreas.map((area, index) => (
              <button
                key={index}
                onClick={() => handleBroadAreaClick(area.title)}
                className="flex items-center p-5 bg-gray-800 rounded-lg border border-gray-700 shadow-sm hover:bg-gray-700 hover:border-sky-700 transform hover:-translate-y-1 transition-all duration-300 w-full text-left"
              >
                <Box className="h-6 w-6 text-sky-400" />
                <span className="ml-3 text-gray-200">{area.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Participating Institutes */}
<div className="py-16 bg-gray-800">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">
      <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Participating Institutes</span>
    </h2>
    <div className="grid md:grid-cols-5 gap-8">
      {institutes.map((institute, index) => (
        <div key={index} className="flex flex-col items-center group">
          <div className="w-24 h-24 bg-gray-700 rounded-full flex items-center justify-center shadow-md border-2 border-transparent group-hover:border-sky-500 transition-all duration-300 transform group-hover:scale-110">
            <img
              src={institute.logo}
              alt={institute.name}
              className="w-20 h-20 object-contain"
            />
          </div>
          <p className="mt-4 text-center text-sm font-medium text-gray-200 group-hover:text-sky-400 transition-colors duration-300">{institute.name}</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Featured Labs */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Featured Labs</span>
          </h2>
          <div className="space-y-4">
            {labs.map((lab, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700 shadow-sm hover:border-green-700 hover:shadow-md transition-all duration-300">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-medium text-sky-400">{lab.name}</h3>
                    <p className="text-sm text-gray-400">{lab.institute}</p>
                  </div>
                  <div className="flex space-x-4">
                    <button className="flex items-center text-gray-400 hover:text-sky-400 transition-colors duration-300">
                      <BookOpen className="h-5 w-5" />
                      <span className="ml-2">Reference</span>
                    </button>
                    <button className="flex items-center px-4 py-2 bg-gradient-to-r from-sky-500 to-green-500 hover:from-sky-600 hover:to-green-600 text-white rounded-lg transform hover:scale-105 transition-all duration-300">
                      <Play className="h-5 w-5" />
                      <span className="ml-2">Start Lab</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-6 py-3 bg-gradient-to-r from-sky-600/80 to-green-600/80 hover:from-sky-600 hover:to-green-600 text-white rounded-full transition-all duration-300 font-medium transform hover:scale-105">
              View All Labs
            </button>
          </div>
        </div>
      </div>

      {/* Announcements */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Announcements</span>
          </h2>
          <div className="bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-700">
            <div className="space-y-4">
              <a href="#" className="block hover:bg-gray-700 p-4 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500" />
                  <p className="ml-3 text-gray-300">Various projects/ICT initiatives of the Ministry of Education are available</p>
                </div>
              </a>
              <a href="#" className="block hover:bg-gray-700 p-4 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500" />
                  <p className="ml-3 text-gray-300">Tutorial for using Flash-based Labs through Virtual Box</p>
                </div>
              </a>
              <a href="#" className="block hover:bg-gray-700 p-4 rounded-lg transition-all duration-300 transform hover:translate-x-2">
                <div className="flex items-center">
                  <ArrowRight className="h-5 w-5 text-green-500" />
                  <p className="ml-3 text-gray-300">Expression of Interest (EOI) Form 2025 <span className="text-red-500 text-sm font-bold">NEW</span></p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-sky-400 to-green-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
                <p className="text-gray-300 italic mb-4">{testimonial.text}</p>
                <p className="text-sky-400 font-medium">- {testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="bg-gradient-to-r from-sky-600 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">81,330,147</h3>
              <p className="text-xl">Website PageViews</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">8,560,251</h3>
              <p className="text-xl">Participants Attended</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">1,531</h3>
              <p className="text-xl">Nodal Centres</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <h3 className="text-4xl font-bold mb-2">4,679,904</h3>
              <p className="text-xl">Usage</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Virtual Labs. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}