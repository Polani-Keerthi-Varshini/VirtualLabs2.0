import React, { useState, useEffect } from 'react';
import { MapPin, Calendar, Users, Award, ChevronRight, Sparkles } from 'lucide-react';

export default function OutreachPage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Hide intro after 2 seconds
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const upcomingWorkshops = [
    {
      date: "March 25, 2025",
      title: "Virtual Labs Workshop on Digital Electronics",
      location: "IIT Delhi",
      participants: "150 Expected"
    },
    {
      date: "April 10, 2025",
      title: "Hands-on Training: Computer Networks Lab",
      location: "IIIT Hyderabad",
      participants: "100 Expected"
    },
    {
      date: "April 15, 2025",
      title: "Workshop on Advanced Control Systems",
      location: "IIT Kanpur",
      participants: "120 Expected"
    }
  ];

  const pastEvents = [
    {
      title: "National Workshop on Virtual Labs",
      date: "February 15, 2025",
      location: "IIT Bombay",
      participants: 200,
      image: "/api/placeholder/400/320"
    },
    {
      title: "Faculty Development Program",
      date: "January 20, 2025",
      location: "IIIT Bangalore",
      participants: 150,
      image: "/api/placeholder/400/320"
    }
  ];

  // Intro animation screen with dark theme but light blue and green colors
  if (showIntro) {
    return (
      <div className="fixed inset-0 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center z-50">
        <div className="relative text-center">
          {/* Animated particles in background */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute w-2 h-2 rounded-full bg-sky-400 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${5 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
          
          <h1 className="text-6xl font-bold text-white relative z-10">
            <span className="inline-block animate-bounce delay-100">O</span>
            <span className="inline-block animate-bounce delay-200">u</span>
            <span className="inline-block animate-bounce delay-300">t</span>
            <span className="inline-block animate-bounce delay-400">r</span>
            <span className="inline-block animate-bounce delay-500">e</span>
            <span className="inline-block animate-bounce delay-600">a</span>
            <span className="inline-block animate-bounce delay-700">c</span>
            <span className="inline-block animate-bounce delay-800">h</span>
            <span className="inline-block mx-2"></span>
            <span className="inline-block animate-bounce delay-900">P</span>
            <span className="inline-block animate-bounce delay-1000">o</span>
            <span className="inline-block animate-bounce delay-1100">r</span>
            <span className="inline-block animate-bounce delay-1200">t</span>
            <span className="inline-block animate-bounce delay-1300">a</span>
            <span className="inline-block animate-bounce delay-1400">l</span>
          </h1>
          <div className="mt-8 w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
            <div className="h-full bg-gradient-to-r from-sky-400 to-green-400 rounded-full animate-[progress_2s_ease-in-out]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100">
      {/* Hero Section with Dark Theme */}
      <div className="relative h-[450px]">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-800/90 z-10"></div>
        <div className="absolute inset-0 bg-[url('/api/placeholder/2000/450')] bg-cover bg-center opacity-30 z-0"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden z-20">
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-sky-400 animate-pulse-fade"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`
              }}
            />
          ))}
          {[...Array(15)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-green-400 animate-pulse-fade"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 7}s`
              }}
            />
          ))}
        </div>
        
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-400">
                Outreach Portal
              </span>
            </h1>
            <p className="text-xl md:text-2xl">Connecting Communities Through Virtual Labs</p>
            <button className="mt-8 bg-gradient-to-r from-sky-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold shadow-lg transform transition-transform duration-300 hover:scale-105 group relative overflow-hidden">
              <span className="relative z-10">Explore Programs</span>
              <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section - Dark theme with blue/green accents */}
      <div className="py-16 bg-gray-800 relative">
        <div className="absolute inset-0 bg-sky-900/10 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-4 gap-8 text-white text-center">
            {[
              { value: "500+", label: "Workshops Conducted" },
              { value: "50,000+", label: "Students Trained" },
              { value: "1,000+", label: "Faculty Trained" },
              { value: "100+", label: "Partner Institutions" }
            ].map((stat, index) => (
              <div key={index} className="bg-gray-800/80 p-6 rounded-lg shadow-lg backdrop-blur-sm transform transition-all duration-300 hover:scale-105 hover:shadow-sky-500/20 border border-gray-700 relative group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-sky-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="text-4xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-400">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Workshops - Dark theme with blue/green glowing effects */}
      <div className="py-16 bg-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-sky-400 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-sky-500 after:to-green-500">
            Upcoming Workshops
          </h2>
          <div className="space-y-6">
            {upcomingWorkshops.map((workshop, index) => (
              <div key={index} className="bg-gray-800/70 p-6 rounded-lg shadow-lg border border-gray-700 transform transition-all duration-300 hover:shadow-green-500/20 hover:translate-x-1 backdrop-blur-sm group relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/5 to-green-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex flex-wrap items-center justify-between relative z-10">
                  <div className="flex items-center space-x-4">
                    <Calendar className="h-6 w-6 text-sky-400" />
                    <span className="text-gray-300">{workshop.date}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="h-6 w-6 text-sky-400" />
                    <span className="text-gray-300">{workshop.location}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Users className="h-6 w-6 text-sky-400" />
                    <span className="text-gray-300">{workshop.participants}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mt-4 text-white relative z-10">{workshop.title}</h3>
                <button className="mt-4 flex items-center text-sky-400 font-medium hover:text-green-400 transition-colors group relative z-10">
                  Register Now
                  <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Events - Dark theme with blue/green cards */}
      <div className="py-16 bg-gradient-to-b from-gray-800 to-gray-900 relative">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-green-400 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-24 after:h-1 after:bg-gradient-to-r after:from-green-500 after:to-sky-500">
            Past Events
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg group transform transition-all duration-300 hover:shadow-green-500/20 hover:-translate-y-2 border border-gray-700">
                <div className="relative h-48 overflow-hidden">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="flex justify-between text-sm text-gray-300">
                      <span className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1 text-green-400" />
                        {event.date}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1 text-green-400" />
                        {event.participants}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-sky-400 transition-colors">{event.title}</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="h-5 w-5 mr-2 text-green-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="h-5 w-5 mr-2 text-green-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="h-5 w-5 mr-2 text-green-400" />
                      {event.participants} Participants
                    </div>
                  </div>
                  <button className="mt-4 flex items-center text-green-400 font-medium hover:text-sky-400 transition-colors group">
                    View Details
                    <ChevronRight className="h-5 w-5 ml-1 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action - Dark theme with blue/green accents */}
      <div className="py-16 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-sky-900/20 to-green-800/20 transform -skew-y-6"></div>
        
        {/* Animated particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-sky-400 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 rounded-full bg-green-400 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-green-400">Want to Host a Workshop?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join us in spreading the knowledge of Virtual Labs to your institution</p>
          <button className="bg-gradient-to-r from-sky-500 to-green-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg transform transition-all duration-300 hover:shadow-green-500/50 hover:scale-105 group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center">
              <span>Request a Workshop</span>
              <Sparkles className="h-5 w-5 ml-2 animate-pulse" />
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </div>
      </div>
      
      {/* Custom animations styles */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) scale(1.2);
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-fade {
          0%, 100% {
            transform: scale(1);
            opacity: 0.3;
          }
          50% {
            transform: scale(2);
            opacity: 0.8;
          }
        }
        
        @keyframes progress {
          0% { width: 0; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}