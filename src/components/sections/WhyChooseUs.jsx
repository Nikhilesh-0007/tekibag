import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Zap,
  Users2,
  FolderDot,
  BookMarked,
  Clock3,
  Award,
  FileCheck2,
  HelpCircle,
  TrendingUp,
} from 'lucide-react';

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState('all');

  const features = [
    { title: 'Learn from Industry Experts', icon: Users2, color: 'text-blue-500' },
    { title: 'Real-world Projects', icon: FolderDot, color: 'text-teal-500' },
    { title: 'Modern Curriculum', icon: BookMarked, color: 'text-purple-500' },
    { title: 'Flexible Online Learning', icon: Clock3, color: 'text-indigo-500' },
    { title: 'Hands-on Practice', icon: Zap, color: 'text-amber-500' },
    { title: 'Personal Mentorship', icon: ShieldCheck, color: 'text-rose-500' },
    { title: 'Portfolio Building', icon: Award, color: 'text-emerald-500' },
    { title: 'Resume Support', icon: FileCheck2, color: 'text-sky-500' },
    { title: 'Interview Preparation', icon: TrendingUp, color: 'text-orange-500' },
    { title: 'Continuous Guidance', icon: HelpCircle, color: 'text-violet-500' },
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute left-[-15%] top-[10%] w-[45vw] h-[45vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Premium Student Mockup Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing background */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-2xl z-0" />

            {/* Dashboard Container (Glassmorphic) */}
            <div className="relative z-10 p-6 sm:p-8 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border border-slate-200/60 dark:border-slate-800/80 rounded-tekibag shadow-premium space-y-6">
              
              {/* Header profile */}
              <div className="flex items-center gap-4 border-b border-slate-100 dark:border-slate-850 pb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center font-bold text-white shadow-md">
                  JD
                </div>
                <div className="text-left">
                  <div className="text-sm font-bold text-secondary dark:text-white">John Doe</div>
                  <div className="text-2xs font-semibold text-slate-450 uppercase tracking-wide">Full Stack Development Student</div>
                </div>
                <span className="ml-auto px-2.5 py-1 text-3xs font-extrabold uppercase bg-emerald-500/10 text-emerald-500 rounded-full border border-emerald-500/20">
                  Active
                </span>
              </div>

              {/* Progress track */}
              <div className="space-y-2 text-left">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-500 dark:text-slate-400">Course Progress</span>
                  <span className="text-secondary dark:text-white">82%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: '82%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-primary to-accent" 
                  />
                </div>
              </div>

              {/* Grid indicators */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                  <div className="text-2xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Labs Solved</div>
                  <div className="text-xl font-extrabold text-secondary dark:text-white mt-1">146 / 180</div>
                </div>
                <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 text-left">
                  <div className="text-2xs font-semibold text-slate-500 dark:text-slate-400 uppercase">Projects Built</div>
                  <div className="text-xl font-extrabold text-secondary dark:text-white mt-1">4 / 5</div>
                </div>
              </div>

              {/* Timeline indicator for Mock Interview score */}
              <div className="p-4 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border border-primary/20 dark:border-accent/20 rounded-2xl text-left flex items-center justify-between">
                <div>
                  <div className="text-2xs font-bold text-primary dark:text-accent uppercase tracking-wider">Technical Mock Test</div>
                  <div className="text-base font-extrabold text-secondary dark:text-white mt-0.5">Cleared (Rating: 4.8/5)</div>
                </div>
                <div className="w-10 h-10 rounded-full bg-primary/10 dark:bg-accent/15 flex items-center justify-center text-primary dark:text-accent font-bold">
                  ★
                </div>
              </div>

            </div>
          </motion.div>

          {/* Right Column: Why Choose Us Feature Cards Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 text-left space-y-8"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
                Why Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight mt-4">
                What Sets Tekibag Apart From the Rest
              </h2>
            </div>

            {/* Features list arranged in 2 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
              {features.map((feature, idx) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={idx}
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-800/80 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 hover:shadow-premium group"
                  >
                    <div className={`p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex-shrink-0 group-hover:scale-105 transition-all`}>
                      <IconComponent className={`w-5 h-5 ${feature.color}`} />
                    </div>
                    <span className="text-sm font-bold text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {feature.title}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
