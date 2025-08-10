import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Preloader from './components/Preloader';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import LandingPage from './pages/LandingPage';
import HomePage from './pages/Homepage';
import ServicesPage from './pages/ServicePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ProjectsPage from './pages/ProjectsPage';

function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <Preloader onFinish={() => setLoading(false)} />;
  }

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;