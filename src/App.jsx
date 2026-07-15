import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/sections/Navbar';
import Footer from './components/sections/Footer';
import ScrollToTop from './components/ScrollToTop';
import CursorGlow from './components/CursorGlow';
import ScrollProgress from './components/ScrollProgress';
import BackgroundBlobs from './components/BackgroundBlobs';

// Page Components
import Home from './pages/Home';
import CoursesPage from './pages/CoursesPage';
import ServicesPage from './pages/ServicesPage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300 relative font-sans selection:bg-primary/20 selection:text-primary dark:selection:bg-accent/20 dark:selection:text-accent flex flex-col justify-between">
        
        {/* Reset window scroll coordinates on route transitions */}
        <ScrollToTop />

        {/* Global FX Overlay */}
        <ScrollProgress />
        <CursorGlow />
        
        {/* Shared background vector layers */}
        <BackgroundBlobs />

        {/* Header Navigation */}
        <Navbar />

        {/* Routed Sub-pages content */}
        <main className="flex-grow relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            
            {/* Fallback routing */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        {/* Footer info panels */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}
