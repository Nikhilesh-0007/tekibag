import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-400 pt-16 pb-8 border-t border-slate-800 transition-colors duration-300">

      {/* Scroll to Top button */}
      <button
        onClick={handleScrollToTop}
        className="absolute top-[-24px] right-8 sm:right-16 p-3 rounded-full bg-primary hover:bg-primary/95 text-white shadow-lg transition-transform hover:-translate-y-1 cursor-pointer z-30"
        aria-label="Scroll to Top"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Footer Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-800">

          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-white p-1.5 rounded-xl flex items-center justify-center h-10 w-10 overflow-hidden flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <img
                  src="/logo.png"
                  alt="TEKIBAG"
                  className="h-full w-full object-contain"
                />
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                TEKIBAG
              </span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Tekibag is an EdTech startup dedicated to transforming the way students learn software technologies. BAG YOUR SKILLS. BUILD YOUR FUTURE.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://www.linkedin.com/company/tekibag/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-all duration-200 text-slate-300 active:scale-95 shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.facebook.com/share/1JrQAnWVao/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-all duration-200 text-slate-300 active:scale-95 shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon />
              </a>
              <a
                href="https://www.instagram.com/tekibagofficial?igsh=MW5naXdzbnl0ZTlsZw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-all duration-200 text-slate-300 active:scale-95 shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Courses Links Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Popular Courses
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/courses" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  AWS Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Artificial Intelligence
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Live Online Classes
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Industry Mentorship
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Placement Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Resume & LinkedIn Prep
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:translate-x-1 hover:text-white transition-all duration-300 block">
                  Mock Interview Rounds
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information Column */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Info
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-white flex-shrink-0" />
                <a href="tel:+916302284725" className="hover:text-white transition-colors">
                  +91 6302284725
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-white flex-shrink-0" />
                <a href="mailto:tekibag@gmail.com" className="hover:text-white transition-colors">
                  tekibag@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-white flex-shrink-0 mt-0.5" />
                <span>Bengalore, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-slate-550 gap-4">
          <div>
            © {currentYear} TEKIBAG. All rights reserved. Brand Slogan: "BAG YOUR SKILLS. BUILD YOUR FUTURE."
          </div>
          <div className="flex items-center gap-6">
            <Link to="/" className="hover:text-slate-350 transition-colors">Privacy Policy</Link>
            <Link to="/" className="hover:text-slate-350 transition-colors">Terms of Service</Link>
            <Link to="/" className="hover:text-slate-350 transition-colors">Refund Policy</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
