import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Building2, Globe2, Users } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Virtual Labs</h3>
            <p className="text-gray-400">An initiative of Ministry of Education under the National Mission on Education through ICT</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/feedback" className="text-gray-400 hover:text-white">Lab Feedback Form</Link></li>
              <li><Link to="/assessment" className="text-gray-400 hover:text-white">Lab Assessment Form</Link></li>
              <li><Link to="/faq" className="text-gray-400 hover:text-white">FAQ</Link></li>
              <li><Link to="/shakshak" className="text-gray-400 hover:text-white">Shakshak Portal</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Phone className="h-5 w-5 mr-2" />
                011-26582050
              </li>
              <li className="flex items-center text-gray-400">
                <Building2 className="h-5 w-5 mr-2" />
                Wireless Research Lab, Room No - 206/IIA
              </li>
              <li className="text-gray-400">Bharti School of Telecom</li>
              <li className="text-gray-400">IIT Delhi, Hauz Khas</li>
              <li className="text-gray-400">New Delhi-110016</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Globe2 className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Users className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Building2 className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      {/* Footer */}
      <div className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 Virtual Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}