import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { Menu, X, PhoneCall, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40 py-3 bg-white/80 dark:bg-secondary/80 shadow-premium border-b border-black/5 dark:border-white/5 backdrop-blur-md transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <img
                src="/logo.png"
                alt="TEKIBAG"
                className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="font-extrabold text-2xl tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                TEKIBAG
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-semibold transition-colors relative group py-2 ${isActive
                      ? 'text-primary dark:text-accent'
                      : 'text-slate-655 dark:text-slate-300 hover:text-primary dark:hover:text-accent'
                    }`}
                >
                  {link.name}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary dark:bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side Buttons & Dark/Light Mode */}
          <div className="hidden lg:flex items-center space-x-4">


            {/* Talk to Mentor (Secondary) */}
            <Link
              to="/contact"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-slate-750 dark:text-slate-200 hover:text-primary dark:hover:text-accent transition-colors border border-slate-300 dark:border-slate-700 hover:border-primary dark:hover:border-accent rounded-tekibag"
            >
              <PhoneCall size={14} />
              Talk to Mentor
            </Link>

            {/* Enroll Now (Primary) */}
            <Link
              to="/courses"
              className="relative px-5 py-2 text-sm font-bold text-white bg-primary rounded-tekibag overflow-hidden group shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-0.5"
            >
              <span className="relative z-10 flex items-center gap-1">
                Enroll Now <ArrowRight size={14} />
              </span>
              <span className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-750 dark:text-slate-300 hover:text-primary dark:hover:text-accent transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white dark:bg-secondary border-b border-slate-200 dark:border-slate-800 shadow-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2.5 text-base font-semibold rounded-tekibag transition-colors ${isActive
                        ? 'bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent'
                        : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4 flex flex-col gap-3 px-3">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 text-center text-sm font-bold text-slate-750 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-tekibag"
                >
                  <PhoneCall size={16} /> Talk to Mentor
                </Link>
                <Link
                  to="/courses"
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-center text-sm font-bold text-white bg-primary rounded-tekibag shadow-md"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
