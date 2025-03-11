import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import OutreachPage from './pages/OutreachPage';
import InstitutesPage from './pages/InstitutesPage';

function App() {
  return (
    <div className="min-h-screen bg-customGreen">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/outreach" element={<OutreachPage />} />
        <Route path="/institutes" element={<InstitutesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;