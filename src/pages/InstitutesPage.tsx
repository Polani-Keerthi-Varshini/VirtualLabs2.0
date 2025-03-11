import React, { useState, useEffect } from "react";

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

const ParticipatingInstitutes = () => {
  const [showIntro, setShowIntro] = useState(true);
  const [animatedInstitutes, setAnimatedInstitutes] = useState([]);

  useEffect(() => {
    // Hide intro after 2 seconds
    const introTimer = setTimeout(() => {
      setShowIntro(false);
      
      // Start animating institutes one by one after intro
      let currentInstitutes = [];
      const animationInterval = setInterval(() => {
        if (currentInstitutes.length < institutes.length) {
          currentInstitutes = [...currentInstitutes, institutes[currentInstitutes.length]];
          setAnimatedInstitutes([...currentInstitutes]);
        } else {
          clearInterval(animationInterval);
        }
      }, 100);
      
      return () => clearInterval(animationInterval);
    }, 2000);

    return () => clearTimeout(introTimer);
  }, []);

  // Add floating particles effect
  const Particles = () => {
    return (
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i} 
            className="absolute rounded-full opacity-20"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}vw`,
              top: `${Math.random() * 100}vh`,
              background: Math.random() > 0.5 ? '#4ade80' : '#38bdf8',
              boxShadow: `0 0 20px ${Math.random() > 0.5 ? '#4ade80' : '#38bdf8'}`,
              animation: `float ${Math.random() * 20 + 10}s linear infinite, 
                          pulse ${Math.random() * 4 + 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 10}s`
            }}
          ></div>
        ))}
      </div>
    );
  };

  // Intro animation screen
  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-sky-900 to-green-900 flex items-center justify-center z-50">
        <Particles />
        <div className="text-center relative">
          <div className="absolute -inset-10 bg-gradient-to-r from-sky-500/20 to-green-500/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <h1 className="text-4xl font-bold text-white mb-4 relative">
            <div className="overflow-hidden">
              <div className="animate-[slideDown_1s_ease-in-out]">
                Participating
              </div>
            </div>
            <div className="overflow-hidden">
              <div className="animate-[slideUp_1s_ease-in-out_0.3s]">
                Institutes
              </div>
            </div>
          </h1>
          <div className="flex justify-center mt-8 space-x-1">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i} 
                className="w-3 h-3 rounded-full bg-white opacity-75"
                style={{
                  animation: `pulse 1s ease-in-out ${i * 0.2}s infinite`
                }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6 relative">
      <Particles />
      
      {/* Glow effect in background */}
      <div className="fixed top-1/4 left-1/4 w-2/3 h-2/3 bg-sky-500/10 rounded-full blur-3xl"></div>
      <div className="fixed top-2/3 right-1/3 w-1/2 h-1/2 bg-green-500/10 rounded-full blur-3xl"></div>
      
      {/* Header with wave effect */}
      <div className="relative mb-12">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-green-800 rounded-lg"></div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path fill="rgba(20, 24, 30, 0.5)" d="M0,288L48,272C96,256,192,224,288,224C384,224,480,256,576,245.3C672,235,768,181,864,170.7C960,160,1056,192,1152,170.7C1248,149,1344,75,1392,37.3L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="relative p-8 text-white">
          <br></br>
          <h1 className="text-4xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300">
            Participating Institutes
          </h1>
          <p className="text-lg opacity-90">Collaborative partners in Virtual Labs initiative</p>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {animatedInstitutes.map((institute, index) => (
            <div 
              key={index} 
              className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-lg overflow-hidden group transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-sky-500/10"
              style={{
                animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
              }}
            >
              <div 
                className="h-32 bg-gradient-to-r from-sky-900/50 to-green-900/50 flex items-center justify-center p-4 relative overflow-hidden"
              >
                {/* Glowing effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 to-green-500/0 group-hover:from-sky-500/20 group-hover:to-green-500/20 transition-all duration-300 opacity-0 group-hover:opacity-100"></div>
                
                <img
                  src={institute.logo}
                  alt={institute.name}
                  className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-110 relative z-10"
                />
              </div>
              <div className="p-4">
                <h2 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300 text-center">
                  {institute.name}
                </h2>
                <div className="mt-3 flex justify-center">
                <a href="https://www.vlab.co.in/nc-login" target="_blank" rel="noopener noreferrer">
                  <button className="px-4 py-2 text-sm bg-gradient-to-r from-sky-600 to-green-600 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-sky-500/50 hover:from-sky-500 hover:to-green-500">View Details</button></a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Information section */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-sky-500 after:to-green-500">
              About VLAB
            </h2>
            <p className="text-gray-300 mb-4">
              Virtual Labs project is an initiative to provide remote-access to Labs in various disciplines of Science and Engineering for students and researchers.
            </p>
            <a href="#" className="text-sky-400 hover:text-green-400 transition-colors inline-flex items-center group">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-sky-500 after:to-green-500">
              Join the Initiative
            </h2>
            <p className="text-gray-300 mb-4">
              Interested in becoming a participating institute? Learn how your institution can contribute to the Virtual Labs ecosystem.
            </p>
            <a href="#" className="text-sky-400 hover:text-green-400 transition-colors inline-flex items-center group">
              Get Started
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
          
          <div className="bg-gray-800/70 backdrop-blur-lg border border-gray-700 shadow-lg rounded-lg p-6 transform transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300 mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-sky-500 after:to-green-500">
              Contact Us
            </h2>
            <div className="space-y-2 mb-4">
              <p className="text-gray-300 flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="group-hover:text-sky-300 transition-colors">support@vlab.co.in</span>
              </p>
              <p className="text-gray-300 flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="group-hover:text-sky-300 transition-colors">Phone: 011-26582050</span>
              </p>
              <p className="text-gray-300 flex items-center group">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400 group-hover:text-sky-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="group-hover:text-sky-300 transition-colors">Wireless Research Lab, IIT Delhi</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer with animated gradient border */}
      <footer className="mt-16 p-6 bg-gray-800/90 text-white rounded-lg shadow-lg relative">
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-sky-500 to-green-500 animate-gradient-x"></div>
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-green-500 to-sky-500 animate-gradient-x"></div>
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-sky-500 to-green-500 animate-gradient-y"></div>
          <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-green-500 to-sky-500 animate-gradient-y"></div>
        </div>
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between relative z-10">
          <div className="mb-4 md:mb-0">
            <h3 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-green-300">Virtual Labs</h3>
            <p className="text-sm opacity-80">An Initiative of Ministry of Education</p>
          </div>
          <div>
            <p className="text-sm opacity-80">© {new Date().getFullYear()} Virtual Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Add global keyframe animations */}
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideDown {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes gradient-x {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes gradient-y {
          0% { transform: translateY(-100%); }
          50% { transform: translateY(100%); }
          100% { transform: translateY(-100%); }
        }
      `}</style>
    </div>
  );
};

export default ParticipatingInstitutes;