import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Award, Star, ArrowUpRight, Filter } from 'lucide-react';
import { categories, coursesList } from '../../data/coursesData';

// Dynamic Tech Logo Component to render high-fidelity custom SVGs
function TechLogo({ name }) {
  const baseClass = "w-10 h-10 transition-transform duration-300 group-hover:scale-110";
  const lower = name.toLowerCase();

  // 1. React logo
  if (lower.includes('react')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(30 60 60)" stroke="#22d3ee" strokeWidth="6" />
        <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(90 60 60)" stroke="#22d3ee" strokeWidth="6" />
        <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(150 60 60)" stroke="#22d3ee" strokeWidth="6" />
        <circle cx="60" cy="60" r="9" fill="#22d3ee" />
      </svg>
    );
  }
  // 2. Python logo
  if (lower.includes('python')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M57.6 12C38 12 39.5 20.3 39.5 28.6H58V30.5H30.5C21.8 30.5 14 36.6 14 47.3C14 58.1 20.3 64.2 29 64.2H36.9V57.6C36.9 47 45.4 38.4 56 38.4H74.3V28.6C74.3 20.3 75.8 12 57.6 12Z" fill="#3b82f6" />
        <path d="M62.4 108C82 108 80.5 99.7 80.5 91.4H62V89.5H89.5C98.2 89.5 106 83.4 106 72.7C106 61.9 99.7 55.8 91 55.8H83.1V62.4C83.1 73 74.6 81.6 64 81.6H45.7V91.4C45.7 99.7 44.2 108 62.4 108Z" fill="#eab308" />
        <circle cx="48.5" cy="20.5" r="3.5" fill="#f8fafc" />
        <circle cx="71.5" cy="99.5" r="3.5" fill="#f8fafc" />
      </svg>
    );
  }
  // 3. Java logo / Spring Boot
  if (lower.includes('java') || lower.includes('spring boot')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 80C30 80 40 85 55 85C70 85 90 75 90 70C90 65 80 65 70 65C60 65 30 70 30 80Z" fill="#ea580c" />
        <path d="M40 90C40 90 48 93 57 93C67 93 80 87 80 84C80 81 72 81 65 81C58 81 40 84 40 90Z" fill="#ea580c" />
        <path d="M45 45C42 35 50 25 50 25C50 25 52 35 48 45C44 55 58 60 58 60C58 60 50 55 45 45Z" fill="#3b82f6" />
        <path d="M62 40C60 32 66 22 66 22C66 22 68 30 65 38C62 46 72 50 72 50C72 50 65 48 62 40Z" fill="#3b82f6" />
      </svg>
    );
  }
  // 4. .NET / C#
  if (lower.includes('.net') || lower.includes('c#')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="45" fill="#a855f7" />
        <text x="60" y="68" fill="white" fontSize="24" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">.NET</text>
      </svg>
    );
  }
  // 5. AWS logo
  if (lower.includes('aws')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 75C35 83 55 88 85 80" stroke="#f97316" strokeWidth="6" strokeLinecap="round" />
        <path d="M80 73L87 81L78 84" fill="#f97316" />
        <text x="60" y="52" fill="#2563eb" fontSize="28" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">AWS</text>
      </svg>
    );
  }
  // 6. Azure logo
  if (lower.includes('azure')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 80L50 25L75 50L95 80H25Z" fill="#0284c7" opacity="0.8" />
        <path d="M50 25L75 50L95 20L50 25Z" fill="#0369a1" />
        <path d="M60 80L75 50L95 80H60Z" fill="#0c4a6e" />
      </svg>
    );
  }
  // 7. DevOps logo (Infinity)
  if (lower.includes('devops')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M35 60C35 45 48 38 60 60C72 82 85 75 85 60C85 45 72 38 60 60C48 82 35 75 35 60Z" stroke="#a855f7" strokeWidth="8" strokeLinecap="round" fill="none" />
      </svg>
    );
  }
  // 8. Cyber Security
  if (lower.includes('cyber') || lower.includes('security')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M60 18L95 32V68C95 86 80 102 60 108C40 102 25 86 25 68V32L60 18Z" stroke="#10b981" strokeWidth="7" fill="none" />
        <path d="M48 60L56 68L72 52" stroke="#10b981" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // 9. SAP logo
  if (lower.includes('sap')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="30" width="90" height="60" rx="8" fill="#0064d2" />
        <text x="60" y="70" fill="white" fontSize="26" fontWeight="extrabold" textAnchor="middle" fontFamily="sans-serif">SAP</text>
      </svg>
    );
  }
  // 10. Playwright logo
  if (lower.includes('playwright')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="45" stroke="#22c55e" strokeWidth="7" fill="none" />
        <path d="M42 45V75M42 45H58C66 45 66 58 58 58H42M58 58L72 75" stroke="#22c55e" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  // 11. Selenium logo
  if (lower.includes('selenium')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="25" width="70" height="70" rx="8" stroke="#22c55e" strokeWidth="7" fill="none" />
        <text x="60" y="72" fill="#22c55e" fontSize="48" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">Se</text>
      </svg>
    );
  }
  // 12. Power BI logo
  if (lower.includes('power bi')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="25" y="65" width="18" height="30" rx="2" fill="#facc15" />
        <rect x="51" y="45" width="18" height="50" rx="2" fill="#eab308" />
        <rect x="77" y="25" width="18" height="70" rx="2" fill="#ca8a04" />
      </svg>
    );
  }
  // 13. Digital Marketing logo
  if (lower.includes('marketing')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 70V50H45L75 30V90L45 70H30Z" stroke="#f43f5e" strokeWidth="6" fill="none" />
        <path d="M85 50C90 53 90 67 85 70" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }
  // 14. ServiceNow logo
  if (lower.includes('servicenow')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="45" fill="#818cf8" />
        <text x="60" y="68" fill="white" fontSize="20" fontWeight="bold" textAnchor="middle" fontFamily="sans-serif">NOW</text>
      </svg>
    );
  }
  // 15. Salesforce logo
  if (lower.includes('salesforce')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 75C28 75 22 65 32 55C26 40 46 32 55 42C62 28 85 30 85 46C95 46 98 60 88 70C92 82 72 85 68 76C55 86 42 82 40 75Z" fill="#0284c7" />
      </svg>
    );
  }
  // 16. UI/UX design
  if (lower.includes('ui/ux') || lower.includes('design')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="80" height="80" rx="10" stroke="#f43f5e" strokeWidth="6" fill="none" />
        <circle cx="50" cy="50" r="16" stroke="#3b82f6" strokeWidth="5" fill="none" />
        <circle cx="70" cy="70" r="16" stroke="#10b981" strokeWidth="5" fill="none" />
        <path d="M30 40H40M30 50H36" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
      </svg>
    );
  }
  // 17. Data Science / Analytics
  if (lower.includes('data science') || lower.includes('data analytics') || lower.includes('analysis')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="95" x2="100" y2="95" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
        <line x1="20" y1="95" x2="20" y2="20" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
        <path d="M28 80L48 55L68 65L95 30" stroke="#3b82f6" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="28" cy="80" r="5" fill="#3b82f6" />
        <circle cx="48" cy="55" r="5" fill="#3b82f6" />
        <circle cx="68" cy="65" r="5" fill="#3b82f6" />
        <circle cx="95" cy="30" r="5" fill="#3b82f6" />
      </svg>
    );
  }
  // 18. AI / Machine Learning
  if (lower.includes('ai') || lower.includes('machine learning') || lower.includes('neural')) {
    return (
      <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="60" cy="60" r="28" stroke="#ec4899" strokeWidth="6" fill="none" />
        <circle cx="60" cy="60" r="12" fill="#ec4899" />
        <path d="M60 12V28M60 92V108M12 60H28M92 60H108" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
        <path d="M26 26L38 38M82 82L94 94M26 94L38 82M82 38L94 26" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
      </svg>
    );
  }
  // Default fallback
  return (
    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center font-bold text-primary">
      TB
    </div>
  );
}

// Expandable Accordion component for the curriculum modules
function CurriculumAccordion({ module, index }) {
  const [isOpen, setIsOpen] = useState(index === 0); // Open the first module by default

  return (
    <div className="border border-slate-250/60 dark:border-slate-800 rounded-xl overflow-hidden bg-white dark:bg-slate-900 shadow-sm transition-all duration-300">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 text-left font-semibold text-slate-800 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-850/50 transition-colors cursor-pointer"
      >
        <span className="text-xs sm:text-sm">{module.moduleName}</span>
        <svg
          className={`w-4 h-4 text-slate-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-slate-100 dark:border-slate-800"
          >
            <div className="p-4 bg-slate-50/50 dark:bg-slate-950/20 space-y-2">
              {module.topics.map((topic, tIdx) => (
                <div key={tIdx} className="flex gap-2 text-xs sm:text-sm text-slate-650 dark:text-slate-400 items-start">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60 dark:bg-accent/60 mt-1.5 shrink-0" />
                  <span>{topic}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Enable/disable background scrolling when drawer is open
  useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedCourse]);

  const filteredCourses = coursesList.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="courses" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300">

      {/* Decorative gradient overlays */}
      <div className="absolute right-[5%] top-[10%] w-[30vw] h-[30vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[5%] bottom-[10%] w-[30vw] h-[30vw] rounded-full bg-accent/5 dark:bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Our Catalog
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight mt-2">
            Explore Our Industry-Leading Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-550 dark:text-slate-400">
            Select a specialized course tailored to build the skills you need for real engineering careers.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col sm:flex-row items-stretch justify-start gap-4 mb-12 w-full">
          
          {/* Regular Filter Dropdown Button first */}
          <div className="relative w-full sm:w-auto shrink-0">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between gap-3 px-5 py-2.5 w-full sm:w-auto rounded-tekibag bg-white dark:bg-slate-900 border border-primary/30 dark:border-accent/40 text-primary dark:text-accent font-bold text-sm transition-all hover:bg-slate-50 dark:hover:bg-slate-850 hover:shadow-premium select-none cursor-pointer"
            >
              <span className="flex items-center gap-2">
                <Filter size={16} />
                <span>{selectedCategory === 'All' ? 'Course Filter' : selectedCategory}</span>
              </span>
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {isDropdownOpen && (
              <>
                <div 
                  className="fixed inset-0 z-40 bg-transparent cursor-default" 
                  onClick={() => setIsDropdownOpen(false)} 
                />
                <div className="absolute left-0 mt-2 w-56 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 shadow-premium z-50 py-1 overflow-hidden">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-xs sm:text-sm font-semibold transition-colors duration-150 cursor-pointer ${
                        selectedCategory === category
                          ? 'bg-primary text-white dark:bg-accent dark:text-slate-950 font-bold'
                          : 'text-slate-650 dark:text-slate-355 hover:bg-slate-100 dark:hover:bg-slate-800'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Search bar group second */}
          <div className="flex flex-grow items-stretch w-full sm:max-w-md">
            <div className="relative flex-grow">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search size={18} />
              </span>
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-full pl-10 pr-4 py-2.5 rounded-l-tekibag bg-slate-50 dark:bg-slate-950/40 border border-r-0 border-slate-200 dark:border-slate-850 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent text-sm text-secondary dark:text-white transition-all shadow-sm"
              />
            </div>
            <button
              className="px-6 py-2.5 rounded-r-tekibag bg-primary hover:bg-primary/95 text-white dark:bg-accent dark:hover:bg-accent/90 dark:text-slate-950 font-bold text-sm transition-all duration-300 shadow-md active:scale-95 flex items-center gap-2 border border-l-0 border-primary/20 dark:border-accent/25 cursor-pointer shrink-0"
            >
              Search
            </button>
          </div>
        </div>

        {/* Courses Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={course.title}
                whileHover={{ y: -6 }}
                className="p-6 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col justify-between text-left group hover:bg-white dark:hover:bg-slate-900 relative overflow-hidden"
              >
                {/* Accent hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  {/* Logo & Category Tags */}
                  <div className="flex items-center justify-between mb-5 relative z-10">
                    <div className="p-2.5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm group-hover:scale-105 transition-transform duration-300">
                      <TechLogo name={course.title} />
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-3xs font-extrabold tracking-wide uppercase ${course.tagColor}`}>
                      {course.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200 mb-3 relative z-10">
                    {course.title}
                  </h3>
                </div>

                <div className="relative z-10">
                  {/* Level Tag & Ratings */}
                  <div className="flex items-center gap-4 text-xs text-slate-550 dark:text-slate-400 mb-5 mt-auto border-t border-slate-100 dark:border-slate-850 pt-4">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock size={14} className="text-slate-400" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1 font-medium">
                      <Award size={14} className="text-slate-400" />
                      {course.level}
                    </span>
                    <span className="flex items-center gap-1 ml-auto font-bold text-slate-700 dark:text-slate-200">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      {course.rating}
                    </span>
                  </div>

                  {/* Call to Actions */}
                  <div className="flex gap-3 relative z-10">
                    <button
                      onClick={() => setSelectedCourse(course)}
                      className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-slate-200 dark:border-slate-850 hover:border-primary dark:hover:border-accent hover:text-primary dark:hover:text-accent transition-all duration-300 text-slate-700 dark:text-slate-355 active:scale-95 duration-200 cursor-pointer whitespace-nowrap"
                    >
                      Course Details
                    </button>
                    <Link
                      to="/contact"
                      state={{ selectedCourse: course.title }}
                      className="flex-1 flex items-center justify-center gap-1 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-primary dark:bg-accent text-white hover:bg-primary/95 dark:hover:bg-accent/95 shadow-sm active:scale-95 transition-all duration-200 cursor-pointer whitespace-nowrap"
                    >
                      Enroll
                      <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search Result Message */}
        {filteredCourses.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-lg text-slate-500 dark:text-slate-400">
              No courses found matching "{searchQuery}".
            </p>
          </motion.div>
        )}
      </div>

      {/* Course Details Slide-over Drawer */}
      <AnimatePresence>
        {selectedCourse && (
          <>
            {/* Backdrop overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedCourse(null)}
              className="fixed inset-0 bg-slate-950/40 dark:bg-slate-950/60 backdrop-blur-sm z-50 cursor-pointer"
            />

            {/* Slide-over Side Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 h-full w-full sm:max-w-2xl bg-white dark:bg-slate-900 border-l border-slate-200 dark:border-slate-800 shadow-2xl z-50 flex flex-col overflow-hidden text-left"
            >
              {/* Drawer Header */}
              <div className="p-6 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-950/20">
                <div className="flex items-center gap-4">
                  <div className="p-2.5 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/50 dark:border-slate-800 shadow-sm">
                    <TechLogo name={selectedCourse.title} />
                  </div>
                  <div>
                    <span className={`px-2.5 py-0.5 rounded-full text-3xs font-extrabold tracking-wide uppercase ${selectedCourse.tagColor}`}>
                      {selectedCourse.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-secondary dark:text-white mt-1">
                      {selectedCourse.title}
                    </h3>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="p-2 rounded-lg hover:bg-slate-150 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Drawer Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-8 animate-fade-in">
                {/* Course Subtitle & Description */}
                <div className="space-y-3">
                  <h4 className="text-base sm:text-lg font-bold text-slate-750 dark:text-slate-200 leading-snug">
                    {selectedCourse.subtitle}
                  </h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {selectedCourse.overview}
                  </p>
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-3 gap-4 bg-slate-50 dark:bg-slate-950/40 p-4 rounded-2xl border border-slate-100 dark:border-slate-850">
                  <div className="text-center space-y-1">
                    <span className="text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Duration</span>
                    <div className="text-xs sm:text-sm font-bold text-secondary dark:text-white flex items-center justify-center gap-1.5">
                      <Clock size={14} className="text-primary dark:text-accent" />
                      {selectedCourse.duration}
                    </div>
                  </div>
                  <div className="text-center space-y-1 border-x border-slate-200 dark:border-slate-800">
                    <span className="text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Level</span>
                    <div className="text-xs sm:text-sm font-bold text-secondary dark:text-white flex items-center justify-center gap-1.5">
                      <Award size={14} className="text-primary dark:text-accent" />
                      {selectedCourse.level}
                    </div>
                  </div>
                  <div className="text-center space-y-1">
                    <span className="text-2xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Rating</span>
                    <div className="text-xs sm:text-sm font-bold text-secondary dark:text-white flex items-center justify-center gap-1.5">
                      <Star size={14} className="text-amber-500 fill-amber-500" />
                      {selectedCourse.rating}
                    </div>
                  </div>
                </div>

                {/* Prerequisites */}
                {selectedCourse.prerequisites && (
                  <div className="p-4 bg-primary/5 dark:bg-accent/5 rounded-2xl border border-primary/10 dark:border-accent/10">
                    <h5 className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent mb-2">Prerequisites</h5>
                    <p className="text-xs sm:text-sm text-slate-650 dark:text-slate-355 font-medium leading-relaxed">
                      {selectedCourse.prerequisites}
                    </p>
                  </div>
                )}

                {/* Who Should Enroll */}
                {selectedCourse.whoShouldEnroll && (
                  <div className="space-y-3">
                    <h5 className="text-xs sm:text-sm font-bold text-secondary dark:text-white uppercase tracking-wider">Who Should Enroll</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {selectedCourse.whoShouldEnroll.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-450 items-start">
                          <svg className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Why Choose This Course */}
                {selectedCourse.whyChoose && (
                  <div className="space-y-3">
                    <h5 className="text-xs sm:text-sm font-bold text-secondary dark:text-white uppercase tracking-wider">Why Choose This Course</h5>
                    <ul className="space-y-2">
                      {selectedCourse.whyChoose.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400 items-start">
                          <svg className="w-4 h-4 text-primary dark:text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Skills badging */}
                {selectedCourse.keySkills && (
                  <div className="space-y-3">
                    <h5 className="text-xs sm:text-sm font-bold text-secondary dark:text-white uppercase tracking-wider">Key Skills You Will Gain</h5>
                    <div className="flex flex-wrap gap-2">
                      {selectedCourse.keySkills.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-755 dark:text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Curriculum accordion */}
                {selectedCourse.curriculum && (
                  <div className="space-y-3">
                    <h5 className="text-xs sm:text-sm font-bold text-secondary dark:text-white uppercase tracking-wider">Course Curriculum</h5>
                    <div className="space-y-2">
                      {selectedCourse.curriculum.map((module, mIdx) => (
                        <CurriculumAccordion key={mIdx} module={module} index={mIdx} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Career Outcomes */}
                {selectedCourse.careerOutcomes && (
                  <div className="space-y-3">
                    <h5 className="text-xs sm:text-sm font-bold text-secondary dark:text-white uppercase tracking-wider">Career Outcomes</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedCourse.careerOutcomes.map((role, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/40 border border-slate-100 dark:border-slate-850">
                          <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-500">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-xs sm:text-sm font-semibold text-slate-750 dark:text-slate-300">{role}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Drawer Footer actions */}
              <div className="p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/20 flex gap-4">
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="flex-1 py-3.5 px-4 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <Link
                  to="/contact"
                  state={{ selectedCourse: selectedCourse.title }}
                  className="flex-1 py-3.5 px-4 rounded-xl text-sm font-bold bg-primary dark:bg-accent hover:bg-primary/95 dark:hover:bg-accent/95 text-white shadow-lg shadow-primary/10 dark:shadow-accent/10 hover:shadow-primary/20 hover:shadow-lg active:scale-95 duration-200 flex items-center justify-center gap-2 cursor-pointer"
                >
                  Enroll Now
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
