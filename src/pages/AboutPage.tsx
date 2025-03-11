import React from 'react';
import { BookOpen, Users, Target, Award, ArrowRight } from 'lucide-react';

export default function AboutPage() {
  const objectives = [
    {
      icon: BookOpen,
      title: "Enriched Learning",
      description: "To provide remote access to Labs in various disciplines of Science and Engineering."
    },
    {
      icon: Users,
      title: "Collaborative Learning",
      description: "To share costly equipment and resources, which are otherwise available to limited number of users due to constraints on time and geographical distances."
    },
    {
      icon: Target,
      title: "Practical Experience",
      description: "To provide a complete Learning Management System around the Virtual Labs where students can avail various tools for learning, including additional web-resources, video-lectures, animated demonstrations and self evaluation."
    },
    {
      icon: Award,
      title: "Quality Education",
      description: "To maintain a repository of freely available educational resources in different subjects in engineering and science."
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section with Subtle Animation */}
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-70">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/40 to-green-400/40 animate-pulse" style={{ animationDuration: '10s' }}></div>
        </div>
        <img
          src="https://www.vlab.co.in/images/slider/3.jpg"
          alt="About Virtual Labs"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeIn">About Virtual Labs</h1>
            <p className="text-xl md:text-2xl animate-fadeIn animation-delay-300">Empowering Education Through Virtual Learning Experience</p>
            <button className="mt-8 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 transform hover:scale-105 text-white font-semibold py-3 px-8 rounded-full shadow-lg shadow-cyan-500/30 animate-fadeIn animation-delay-500 hover:shadow-cyan-400/50">
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMWgxdjFoLTF2LTF6bS01IDFoMXYxaC0xdi0xem0xMC0xaDFWMTloMXYtMnptLTM2LTJ2MWgxdjFoLTF2M2gxdjFoLTF2MmgxdjJoLTF2MWgxdi0xaDF2MmgtMXYxaDF2MmgtMXYxaDF2MWgtMnYxaDF2MmgtMXYxaDF2NWgtMnYtMTRoLTF2LTFoLTF2MWgtMXYxaC0xdi0yaDF2LTFoMXYtMWgxdi0xaC0zdjRoLTF2MWgtMXYyaDF2MWgtMXYxaC0xdi0xaC0xdi0yaC0xdi0xaC0xdi0xaC0xdjJoLTJ2MWgtMXYtNGgxdi0yaDF2LTFoLTF2LTJoMXYtMWgtMnYtMWgxdi0yaDF2MWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2MmgtMXYxaDF2MWgxdi0zaDF2MWgxdi0xaDJ2MWgxdi0xaDF2MmgxdjFoMXYxaDF2MmgxdjFoMXYxaDF2M2gxdjFoMXYtMWgxdi0xaC0xdi0xaDF2LTJoLTF2LTFoLTF2LTFoLTF2LTNoLTF2LTFoLTF2LTRoLTF2LTNoLTF2LTFoLTF6TTAgMjd2MWgxdi0xem0xIDNoLTF2MWgxem0wLTJoLTF2MWgxem01LTE0aDFWOGgtMXptMzEtMXYtMmgxVjZoMXY0aDJ2MWgtMnYxaDF2MWgxdi0xaDF2MWgxdi0zaDF2MWgxdi0xaC0xVjloLTF2MWgtMVY5aC0xVjhoLTJWN2gtMXptLTI4IDNWOGgxVjdoLTF2MWgtMVY3aC0xVjZoLTF2MWgtMVY2aC0xdjFoLTFWNmgtMXYxaC0xdjFIOVY3SDhWNkg3djFINlY2SDV2MWg0djFIOHYxaDF2MWgtMXYxaC0xdi0xSDZ2LTFINXYtMUg0djJIM3YySDJ2Mmgxdi0xaDF2LTFoMS0xem0yMi01aDFWNGgtMXptLTQtMWgxdjFoMVYyaC0yem0xNS0xaC0ydjFoMXYxaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Our Mission</span>
            </h2>
            <div className="bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-700 hover:border-cyan-700 group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-500"></div>
              <p className="text-lg text-gray-300 leading-relaxed relative z-10">
                Virtual Labs project is an initiative of Ministry of Education (MoE) under the National Mission on Education through Information and Communication Technology. 
                This project aims to provide remote-access to Labs in various disciplines of Science and Engineering for students at all levels from under-graduate to research.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Objectives */}
      <div className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Our Objectives</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {objectives.map((objective, index) => {
              const Icon = objective.icon;
              return (
                <div 
                  key={index} 
                  className="bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700 hover:border-cyan-600 hover:shadow-cyan-600/20 transition-all duration-500 transform hover:-translate-y-1 group"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 bg-cyan-900/50 p-3 rounded-full group-hover:bg-cyan-800/70 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-semibold mb-2 text-green-400 group-hover:text-cyan-300 transition-colors duration-300">{objective.title}</h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{objective.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyMjIiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMi0yaDF2MWgtMXYtMXptLTIgMWgxdjFoLTF2LTF6bS01IDFoMXYxaC0xdi0xem0xMC0xaDFWMTloMXYtMnptLTM2LTJ2MWgxdjFoLTF2M2gxdjFoLTF2MmgxdjJoLTF2MWgxdi0xaDF2MmgtMXYxaDF2MmgtMXYxaDF2MWgtMnYxaDF2MmgtMXYxaDF2NWgtMnYtMTRoLTF2LTFoLTF2MWgtMXYxaC0xdi0yaDF2LTFoMXYtMWgxdi0xaC0zdjRoLTF2MWgtMXYyaDF2MWgtMXYxaC0xdi0xaC0xdi0yaC0xdi0xaC0xdi0xaC0xdjJoLTJ2MWgtMXYtNGgxdi0yaDF2LTFoLTF2LTJoMXYtMWgtMnYtMWgxdi0yaDF2MWgxdi0xaDF2LTFoMXYtMWgxdi0xaDF2MmgtMXYxaDF2MWgxdi0zaDF2MWgxdi0xaDJ2MWgxdi0xaDF2MmgxdjFoMXYxaDF2MmgxdjFoMXYxaDF2M2gxdjFoMXYtMWgxdi0xaC0xdi0xaDF2LTJoLTF2LTFoLTF2LTFoLTF2LTNoLTF2LTFoLTF2LTRoLTF2LTNoLTF2LTFoLTF6TTAgMjd2MWgxdi0xem0xIDNoLTF2MWgxem0wLTJoLTF2MWgxem01LTE0aDFWOGgtMXptMzEtMXYtMmgxVjZoMXY0aDJ2MWgtMnYxaDF2MWgxdi0xaDF2MWgxdi0zaDF2MWgxdi0xaC0xVjloLTF2MWgtMVY5aC0xVjhoLTJWN2gtMXptLTI4IDNWOGgxVjdoLTF2MWgtMVY3aC0xVjZoLTF2MWgtMVY2aC0xdjFoLTFWNmgtMXYxaC0xdjFIOVY3SDhWNkg3djFINlY2SDV2MWg0djFIOHYxaDF2MWgtMXYxaC0xdi0xSDZ2LTFINXYtMUg0djJIM3YySDJ2Mmgxdi0xaDF2LTFoMS0xem0yMi01aDFWNGgtMXptLTQtMWgxdjFoMVYyaC0yem0xNS0xaC0ydjFoMXYxaDF6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Our Journey</span>
          </h2>
          <div className="space-y-8 relative before:absolute before:left-16 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:to-green-400">
            <div className="flex group">
              <div className="w-32 font-bold text-cyan-400 flex items-center relative">
                <div className="absolute left-16 w-4 h-4 rounded-full bg-gray-900 border-4 border-cyan-500 -translate-x-1/2 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <span className="group-hover:text-cyan-300 transition-colors duration-300">2010</span>
              </div>
              <div className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-700 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-cyan-600/20 w-full">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Project Initiation</h3>
                <p className="text-gray-400">Virtual Labs project was initiated with the approval of MHRD/MoE.</p>
              </div>
            </div>
            <div className="flex group">
              <div className="w-32 font-bold text-cyan-400 flex items-center relative">
                <div className="absolute left-16 w-4 h-4 rounded-full bg-gray-900 border-4 border-green-400 -translate-x-1/2 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <span className="group-hover:text-cyan-300 transition-colors duration-300">2012</span>
              </div>
              <div className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-600 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-green-500/20 w-full">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Phase I Completion</h3>
                <p className="text-gray-400">Successfully developed and deployed over 100 virtual labs.</p>
              </div>
            </div>
            <div className="flex group">
              <div className="w-32 font-bold text-cyan-400 flex items-center relative">
                <div className="absolute left-16 w-4 h-4 rounded-full bg-gray-900 border-4 border-cyan-500 -translate-x-1/2 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <span className="group-hover:text-cyan-300 transition-colors duration-300">2015</span>
              </div>
              <div className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-cyan-700 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-cyan-600/20 w-full">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Phase II Launch</h3>
                <p className="text-gray-400">Expansion of the project with additional labs and improved infrastructure.</p>
              </div>
            </div>
            <div className="flex group">
              <div className="w-32 font-bold text-cyan-400 flex items-center relative">
                <div className="absolute left-16 w-4 h-4 rounded-full bg-gray-900 border-4 border-green-400 -translate-x-1/2 group-hover:scale-150 transition-all duration-300 z-10"></div>
                <span className="group-hover:text-cyan-300 transition-colors duration-300">2020</span>
              </div>
              <div className="ml-8 bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700 hover:border-green-600 transition-all duration-300 transform group-hover:-translate-y-1 hover:shadow-green-500/20 w-full">
                <h3 className="text-xl font-semibold mb-2 text-green-400">Digital Transformation</h3>
                <p className="text-gray-400">Enhanced platform capabilities and reached millions of students nationwide.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="py-16 bg-gray-900 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 relative">
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent">Our Impact</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-cyan-800 to-cyan-900 p-8 rounded-lg shadow-lg text-white text-center transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 group border border-cyan-700/50 hover:border-cyan-500">
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-cyan-500/10 rounded-lg transition-opacity duration-500"></div>
              <h3 className="text-4xl font-bold mb-2 relative">
                <span className="bg-gradient-to-r from-cyan-400 to-cyan-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all duration-500">500+</span>
              </h3>
              <p className="text-lg relative">Virtual Labs</p>
            </div>
            <div className="bg-gradient-to-br from-green-800 to-green-900 p-8 rounded-lg shadow-lg text-white text-center transform transition-all duration-500 hover:scale-105 hover:shadow-green-500/30 group border border-green-700/50 hover:border-green-500">
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-green-500/10 rounded-lg transition-opacity duration-500"></div>
              <h3 className="text-4xl font-bold mb-2 relative">
                <span className="bg-gradient-to-r from-green-400 to-green-200 bg-clip-text text-transparent group-hover:from-white group-hover:to-green-200 transition-all duration-500">15+</span>
              </h3>
              <p className="text-lg relative">Partner Institutions</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-800 to-green-800 p-8 rounded-lg shadow-lg text-white text-center transform transition-all duration-500 hover:scale-105 hover:shadow-cyan-500/30 group border border-cyan-700/50 hover:border-green-500">
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 bg-cyan-500/10 rounded-lg transition-opacity duration-500"></div>
              <h3 className="text-4xl font-bold mb-2 relative">
                <span className="bg-gradient-to-r from-cyan-400 to-green-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-cyan-200 transition-all duration-500">8M+</span>
              </h3>
              <p className="text-lg relative">Students Benefited</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-cyan-900 to-green-800 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-30"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRoNHYxaC00di0xem0wLTJoMXY0aC0xdi00em0yLTJoMXYxaC0xdi0xem0tMiAxaDF2MWgtMXYtMXptLTUgMWgxdjFoLTF2LTF6bTEwLTFoMVYxOWgxdi0yem0tMzYtMnYxaDF2MWgtMXYzaDF2MWgtMXYyaDF2MmgtMXYxaDF2LTFoMXYyaC0xdjFoMXYyaC0xdjFoMXYxaC0ydjFoMXYyaC0xdjFoMXY1aC0ydi0xNGgtMXYtMWgtMXYxaC0xdjFoLTF2LTJoMXYtMWgxdi0xaDF2LTFoLTN2NGgtMXYxaC0xdjJoMXYxaC0xdjFoLTF2LTFoLTF2LTJoLTF2LTFoLTF2LTFoLTF2MmgtMnYxaC0xdi00aDF2LTJoMXYtMWgtMXYtMmgxdi0xaC0ydi0xaDF2LTJoMXYxaDF2LTFoMXYtMWgxdi0xaDF2LTFoMXYyaC0xdjFoMXYxaDF2LTNoMXYxaDF2LTFoMnYxaDF2LTFoMXYyaDF2MWgxdjFoMXYyaDF2MWgxdjFoMXYzaDF2MWgxdi0xaDF2LTFoLTF2LTFoMXYtMmgtMXYtMWgtMXYtMWgtMXYtM2gtMXYtMWgtMXYtNGgtMXYtM2gtMXYtMWgtMXpNMCAyN3YxaDF2LTF6bTEgM2gtMXYxaDF6bTAtMmgtMXYxaDF6bTUtMTRoMVY4aC0xem0zMS0xdi0yaDFWNmgxdjRoMnYxaC0ydjFoMXYxaDF2LTFoMXYxaDF2LTNoMXYxaDF2LTFoLTFWOWgtMXYxaC0xVjloLTFWOGgtMlY3aC0xem0tMjggM1Y4aDFWN2gtMXYxaC0xVjdoLTFWNmgtMXYxaC0xVjZoLTF2MWgtMVY2aC0xdjFoLTF2MUg5VjdIOFY2SDd2MUg2VjZINXYxaDR2MUg4djFoMXYxaC0xdjFoLTF2LTFINnYtMUg1di0xSDR2MkgzdjJIMnYyaDF2LTFoMXYtMWgxLTF6bTIyLTVoMVY0aC0xem0tNC0xaDF2MWgxVjJoLTJ6bTE1LTFoLTJ2MWgxdjFoMXoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to explore Virtual Labs?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">Join millions of students and educators across the country who are enhancing their learning experience.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-3 bg-gray-900 text-cyan-400 font-semibold rounded-full shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/30 border border-cyan-700/50">
              Browse Labs
            </button>
            <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-400 transition-all duration-300 transform hover:scale-105 hover:shadow-green-500/50 flex items-center justify-center mx-auto sm:mx-0 border border-green-400/30">
              <span>Get Started</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <div className="bg-gray-950 text-gray-400 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2025 Virtual Labs. All rights reserved.</p>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        @keyframes pulse {
          0% { opacity: 0.4; }
          50% { opacity: 0.6; }
          100% { opacity: 0.4; }
        }
        
        .animate-pulse {
          animation: pulse 4s infinite;
        }
      `}</style>
    </div>
  );
}