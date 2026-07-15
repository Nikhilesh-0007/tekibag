import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Clock, Award, Star, ArrowRight, ArrowUpRight } from 'lucide-react';

// Dynamic Tech Logo Component to render high-fidelity custom SVGs
function TechLogo({ name }) {
  const baseClass = "w-10 h-10 transition-transform duration-300 group-hover:scale-110";
  
  switch (name.toLowerCase()) {
    case 'react js':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(30 60 60)" stroke="#22d3ee" strokeWidth="6" />
          <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(90 60 60)" stroke="#22d3ee" strokeWidth="6" />
          <ellipse cx="60" cy="60" rx="16" ry="46" transform="rotate(150 60 60)" stroke="#22d3ee" strokeWidth="6" />
          <circle cx="60" cy="60" r="9" fill="#22d3ee" />
        </svg>
      );
    case 'python programming':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.6 12C38 12 39.5 20.3 39.5 28.6H58V30.5H30.5C21.8 30.5 14 36.6 14 47.3C14 58.1 20.3 64.2 29 64.2H36.9V57.6C36.9 47 45.4 38.4 56 38.4H74.3V28.6C74.3 20.3 75.8 12 57.6 12Z" fill="#3b82f6" />
          <path d="M62.4 108C82 108 80.5 99.7 80.5 91.4H62V89.5H89.5C98.2 89.5 106 83.4 106 72.7C106 61.9 99.7 55.8 91 55.8H83.1V62.4C83.1 73 74.6 81.6 64 81.6H45.7V91.4C45.7 99.7 44.2 108 62.4 108Z" fill="#eab308" />
          <circle cx="48.5" cy="20.5" r="3.5" fill="#f8fafc" />
          <circle cx="71.5" cy="99.5" r="3.5" fill="#f8fafc" />
        </svg>
      );
    case 'java development':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 80C30 80 40 85 55 85C70 85 90 75 90 70C90 65 80 65 70 65C60 65 30 70 30 80Z" fill="#ea580c" />
          <path d="M40 90C40 90 48 93 57 93C67 93 80 87 80 84C80 81 72 81 65 81C58 81 40 84 40 90Z" fill="#ea580c" />
          <path d="M45 45C42 35 50 25 50 25C50 25 52 35 48 45C44 55 58 60 58 60C58 60 50 55 45 45Z" fill="#3b82f6" />
          <path d="M62 40C60 32 66 22 66 22C66 22 68 30 65 38C62 46 72 50 72 50C72 50 65 48 62 40Z" fill="#3b82f6" />
        </svg>
      );
    case 'full stack development':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="25" y="20" width="70" height="42" rx="6" stroke="#3b82f6" strokeWidth="7" fill="none" />
          <path d="M40 76H80" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" />
          <path d="M60 62V76" stroke="#3b82f6" strokeWidth="7" />
          <path d="M50 88H70" stroke="#3b82f6" strokeWidth="7" strokeLinecap="round" />
          <path d="M35 34L45 41L35 48" stroke="#14b8a6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M85 34L75 41L85 48" stroke="#14b8a6" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'node js':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 12L98 34.2V78.5L60 100.8L22 78.5V34.2L60 12Z" stroke="#22c55e" strokeWidth="7" fill="none" />
          <path d="M60 12V100.8" stroke="#22c55e" strokeWidth="4" strokeDasharray="6 6" />
          <path d="M60 45L80 34V56.5" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 45L40 34V56.5" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 45V75" stroke="#22c55e" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );
    case 'aws cloud':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 25C40 25 30 38 30 50C30 65 48 68 50 78C51 83 45 88 38 88" stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
          <path d="M60 25C80 25 90 38 90 50C90 65 72 68 70 78C69 83 75 88 82 88" stroke="#f97316" strokeWidth="7" strokeLinecap="round" />
          <path d="M35 98C45 105 75 105 85 98" stroke="#f97316" strokeWidth="5" strokeLinecap="round" />
          <path d="M82 94L87 99.5L80 102" fill="#f97316" />
        </svg>
      );
    case 'devops':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M38.5 38C22.2 38 9 51.2 9 67.5C9 83.8 22.2 97 38.5 97C50.2 97 61 88.5 69 77C77 88.5 87.8 97 99.5 97C115.8 97 129 83.8 129 67.5C129 51.2 115.8 38 99.5 38C87.8 38 77 46.5 69 58C61 46.5 50.2 38 38.5 38Z" stroke="#a855f7" strokeWidth="8" strokeLinecap="round" fill="none" />
        </svg>
      );
    case 'docker & kubernetes':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="42" y="32" width="16" height="16" rx="2" fill="#0284c7" />
          <rect x="62" y="32" width="16" height="16" rx="2" fill="#0284c7" />
          <rect x="42" y="52" width="16" height="16" rx="2" fill="#0284c7" />
          <rect x="62" y="52" width="16" height="16" rx="2" fill="#0284c7" />
          <rect x="22" y="52" width="16" height="16" rx="2" fill="#0284c7" />
          <rect x="82" y="52" width="16" height="16" rx="2" fill="#0284c7" />
          <path d="M12 78C20 88 100 88 108 78C112 73 112 68 112 68H8C8 68 8 73 12 78Z" fill="#0284c7" />
        </svg>
      );
    case 'data structures & algorithms':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="25" r="11" stroke="#3b82f6" strokeWidth="6" fill="none" />
          <circle cx="35" cy="65" r="11" stroke="#14b8a6" strokeWidth="6" fill="none" />
          <circle cx="85" cy="65" r="11" stroke="#14b8a6" strokeWidth="6" fill="none" />
          <circle cx="20" cy="100" r="7" stroke="#f43f5e" strokeWidth="4" fill="none" />
          <circle cx="50" cy="100" r="7" stroke="#f43f5e" strokeWidth="4" fill="none" />
          <path d="M52 34L43 56" stroke="#64748b" strokeWidth="3" />
          <path d="M68 34L77 56" stroke="#64748b" strokeWidth="3" />
          <path d="M31 75L24 93" stroke="#64748b" strokeWidth="3" />
          <path d="M39 75L46 93" stroke="#64748b" strokeWidth="3" />
        </svg>
      );
    case 'machine learning':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="42" y="42" width="36" height="36" rx="6" stroke="#06b6d4" strokeWidth="6" fill="none" />
          <circle cx="30" cy="30" r="8" fill="#06b6d4" />
          <circle cx="90" cy="30" r="8" fill="#06b6d4" />
          <circle cx="30" cy="90" r="8" fill="#06b6d4" />
          <circle cx="90" cy="90" r="8" fill="#06b6d4" />
          <path d="M38 30H46M82 30H74M38 90H46M82 90H74" stroke="#06b6d4" strokeWidth="4" />
          <path d="M30 38V46M30 82V74M90 38V46M90 82V74" stroke="#06b6d4" strokeWidth="4" />
        </svg>
      );
    case 'artificial intelligence':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="28" stroke="#ec4899" strokeWidth="6" fill="none" />
          <circle cx="60" cy="60" r="12" fill="#ec4899" />
          <path d="M60 12V28M60 92V108M12 60H28M92 60H108" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
          <path d="M26 26L38 38M82 82L94 94M26 94L38 82M82 38L94 26" stroke="#ec4899" strokeWidth="6" strokeLinecap="round" />
        </svg>
      );
    case 'data science':
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
    case 'sql & databases':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <ellipse cx="60" cy="30" rx="30" ry="12" stroke="#eab308" strokeWidth="6" fill="none" />
          <path d="M30 30V55C30 62 43 67 60 67C77 67 90 62 90 55V30" stroke="#eab308" strokeWidth="6" fill="none" />
          <path d="M30 55V80C30 87 43 92 60 92C77 92 90 87 90 80V55" stroke="#eab308" strokeWidth="6" fill="none" />
        </svg>
      );
    case 'git & github':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 12C33.5 12 12 33.5 12 60C12 81.2 25.8 99.2 44.9 105.5C47.3 105.9 48.2 104.5 48.2 103.2C48.2 102 48.1 98.8 48.1 94.6C34.7 97.5 31.9 88.1 31.9 88.1C29.7 82.5 26.5 81 26.5 81C22.1 78 26.8 78 26.8 78C31.7 78.4 34.2 83.1 34.2 83.1C38.5 90.5 45.6 88.3 48.4 87C48.8 83.9 50.1 81.8 51.5 80.5C40.9 79.3 29.8 75.2 29.8 56.9C29.8 51.7 31.6 47.4 34.7 44.1C34.2 42.9 32.5 38 35.2 31.4C35.2 31.4 39.2 30.1 48.2 36.2C52 35.1 56 34.6 60 34.6C64 34.6 68 35.1 71.8 36.2C80.8 30.1 84.8 31.4 84.8 31.4C87.5 38 85.8 42.9 85.3 44.1C88.4 47.4 90.2 51.7 90.2 56.9C90.2 75.3 79.1 79.2 68.4 80.4C70.1 81.9 71.6 84.8 71.6 89.2C71.6 95.5 71.5 100.6 71.5 102.2C71.5 103.5 72.4 105 74.8 104.5C93.9 98.2 107.7 80.2 107.7 59C107.7 33.5 86.3 12 60 12Z" fill="#94a3b8" />
        </svg>
      );
    case 'ui/ux design':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="80" height="80" rx="10" stroke="#f43f5e" strokeWidth="6" fill="none" />
          <circle cx="50" cy="50" r="16" stroke="#3b82f6" strokeWidth="5" fill="none" />
          <circle cx="70" cy="70" r="16" stroke="#10b981" strokeWidth="5" fill="none" />
          <path d="M30 40H40M30 50H36" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case 'cyber security':
      return (
        <svg className={baseClass} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M60 18L95 32V68C95 86 80 102 60 108C40 102 25 86 25 68V32L60 18Z" stroke="#10b981" strokeWidth="7" fill="none" />
          <path d="M48 60L56 68L72 52" stroke="#10b981" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return (
        <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center font-bold text-primary">
          TB
        </div>
      );
  }
}

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Development', 'Cloud & DevOps', 'Data Science & AI', 'Design'];

  const coursesList = [
    {
      title: 'Full Stack Development',
      duration: '6 Months',
      level: 'Intermediate',
      rating: '4.9',
      category: 'Development',
      tagColor: 'text-blue-500 bg-blue-500/10',
    },
    {
      title: 'Java Development',
      duration: '4 Months',
      level: 'Beginner',
      rating: '4.8',
      category: 'Development',
      tagColor: 'text-orange-500 bg-orange-500/10',
    },
    {
      title: 'Python Programming',
      duration: '3 Months',
      level: 'Beginner',
      rating: '4.8',
      category: 'Development',
      tagColor: 'text-yellow-600 bg-yellow-500/10',
    },
    {
      title: 'React JS',
      duration: '2 Months',
      level: 'Intermediate',
      rating: '4.9',
      category: 'Development',
      tagColor: 'text-cyan-500 bg-cyan-500/10',
    },
    {
      title: 'Node JS',
      duration: '2 Months',
      level: 'Intermediate',
      rating: '4.7',
      category: 'Development',
      tagColor: 'text-green-500 bg-green-500/10',
    },
    {
      title: 'AWS Cloud',
      duration: '3 Months',
      level: 'Beginner',
      rating: '4.8',
      category: 'Cloud & DevOps',
      tagColor: 'text-orange-500 bg-orange-500/10',
    },
    {
      title: 'DevOps',
      duration: '4 Months',
      level: 'Advanced',
      rating: '4.9',
      category: 'Cloud & DevOps',
      tagColor: 'text-purple-500 bg-purple-500/10',
    },
    {
      title: 'Docker & Kubernetes',
      duration: '2 Months',
      level: 'Advanced',
      rating: '4.8',
      category: 'Cloud & DevOps',
      tagColor: 'text-sky-500 bg-sky-500/10',
    },
    {
      title: 'Data Structures & Algorithms',
      duration: '4 Months',
      level: 'Intermediate',
      rating: '4.9',
      category: 'Development',
      tagColor: 'text-red-500 bg-red-500/10',
    },
    {
      title: 'Machine Learning',
      duration: '4 Months',
      level: 'Advanced',
      rating: '4.9',
      category: 'Data Science & AI',
      tagColor: 'text-cyan-500 bg-cyan-500/10',
    },
    {
      title: 'Artificial Intelligence',
      duration: '5 Months',
      level: 'Advanced',
      rating: '5.0',
      category: 'Data Science & AI',
      tagColor: 'text-pink-500 bg-pink-500/10',
    },
    {
      title: 'Data Science',
      duration: '6 Months',
      level: 'Intermediate',
      rating: '4.8',
      category: 'Data Science & AI',
      tagColor: 'text-indigo-500 bg-indigo-500/10',
    },
    {
      title: 'SQL & Databases',
      duration: '2 Months',
      level: 'Beginner',
      rating: '4.6',
      category: 'Development',
      tagColor: 'text-yellow-600 bg-yellow-500/10',
    },
    {
      title: 'Git & GitHub',
      duration: '1 Month',
      level: 'Beginner',
      rating: '4.7',
      category: 'Development',
      tagColor: 'text-slate-500 bg-slate-500/10',
    },
    {
      title: 'UI/UX Design',
      duration: '3 Months',
      level: 'Beginner',
      rating: '4.8',
      category: 'Design',
      tagColor: 'text-rose-500 bg-rose-500/10',
    },
    {
      title: 'Cyber Security',
      duration: '4 Months',
      level: 'Advanced',
      rating: '4.9',
      category: 'Cloud & DevOps',
      tagColor: 'text-emerald-500 bg-emerald-500/10',
    },
  ];

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
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Explore Our Industry-Leading Programs
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Select a specialized course tailored to build the skills you need for real engineering careers.
          </p>
        </div>

        {/* Search & Category Filter Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Categories Tab Bar */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 bg-slate-100 dark:bg-slate-950/60 rounded-2xl border border-slate-200/50 dark:border-slate-800/80 w-full md:w-auto overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all duration-300 whitespace-nowrap ${
                  selectedCategory === category
                    ? 'bg-white dark:bg-slate-800 text-primary dark:text-accent shadow-sm'
                    : 'text-slate-500 dark:text-slate-400 hover:text-secondary dark:hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-tekibag bg-slate-50 dark:bg-slate-950/40 border border-slate-200 dark:border-slate-850 focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent text-sm text-secondary dark:text-white transition-all shadow-sm"
            />
          </div>
        </div>

        {/* Courses Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={course.title}
                whileHover={{ y: -8 }}
                className="p-6 bg-white dark:bg-slate-950/40 rounded-tekibag border border-slate-100 dark:border-slate-800/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col text-left group"
              >
                {/* Logo & Category Tags */}
                <div className="flex items-center justify-between mb-5">
                  <div className="p-2.5 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800">
                    <TechLogo name={course.title} />
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-2xs font-extrabold tracking-wide uppercase ${course.tagColor}`}>
                    {course.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base sm:text-lg font-bold text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200 mb-2 flex items-start gap-1">
                  {course.title}
                </h3>

                {/* Level Tag & Ratings */}
                <div className="flex items-center gap-4 text-xs text-slate-550 dark:text-slate-400 mb-6 mt-auto">
                  <span className="flex items-center gap-1">
                    <Clock size={14} className="text-slate-400" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Award size={14} className="text-slate-400" />
                    {course.level}
                  </span>
                  <span className="flex items-center gap-1 ml-auto font-semibold text-slate-700 dark:text-slate-200">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    {course.rating}
                  </span>
                </div>

                {/* CTA Action button */}
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold border border-slate-200 dark:border-slate-800 group-hover:border-primary dark:group-hover:border-accent group-hover:bg-primary dark:group-hover:bg-accent group-hover:text-white transition-all duration-300 text-slate-700 dark:text-slate-355"
                >
                  Enroll Now
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
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
    </section>
  );
}
