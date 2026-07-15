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

const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const GitHubIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
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
              Tekibag is an innovative EdTech startup dedicated to transforming the way students learn software technologies. Bag your skills, build your future.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-300"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-300"
                aria-label="Twitter"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-300"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-slate-800 hover:bg-primary hover:text-white transition-colors text-slate-300"
                aria-label="YouTube"
              >
                <YouTubeIcon />
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
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
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
                <Link to="/courses" className="hover:text-white transition-colors">
                  Full Stack Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Java Development
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  Python Programming
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
                  AWS Cloud & DevOps
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-white transition-colors">
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
                <Link to="/services" className="hover:text-white transition-colors">
                  Live Online Classes
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Industry Mentorship
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Placement Assistance
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Resume & LinkedIn Prep
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
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
            © {currentYear} TEKIBAG. All rights reserved. Brand Slogan: "Bag Your Skills. Build Your Future."
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
