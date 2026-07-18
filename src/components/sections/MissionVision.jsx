import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

export default function MissionVision() {
  return (
    <section className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute right-[-10%] top-[-10%] w-[30vw] h-[30vw] rounded-full bg-accent/5 dark:bg-accent/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-10 rounded-tekibag bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 text-left flex flex-col group relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary to-blue-600" />
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 border border-slate-100 dark:border-slate-850 shadow-sm">
              <Target size={24} />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-secondary dark:text-white mb-4 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200">
              Our Mission
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 leading-relaxed">
              To provide practical, industry-focused online software training that empowers learners with the skills, confidence, and real-world experience needed to build successful technology careers.
            </p>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            whileHover={{ y: -6 }}
            className="p-8 sm:p-10 rounded-tekibag bg-white dark:bg-slate-900/60 border border-slate-200/50 dark:border-slate-800/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 text-left flex flex-col group relative overflow-hidden"
          >
            {/* Top decorative gradient bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-accent to-emerald-500" />
            
            {/* Icon */}
            <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 border border-slate-100 dark:border-slate-850 shadow-sm">
              <Eye size={24} />
            </div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-extrabold text-secondary dark:text-white mb-4 group-hover:text-accent dark:group-hover:text-accent transition-colors duration-200">
              Our Vision
            </h3>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 leading-relaxed">
              To become a trusted global EdTech startup that transforms learners into industry-ready professionals through quality education, innovation, and continuous mentorship.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
