import React from 'react';
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
  TrendingUp,
} from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Expert-Led Training',
      description: 'Learn directly from senior engineers and active industry professionals.',
      icon: Users2,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10'
    },
    {
      title: 'Real-World Projects',
      description: 'Build production-ready software to showcase in your developer portfolio.',
      icon: FolderDot,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10'
    },
    {
      title: 'Modern Curriculum',
      description: 'Master highly in-demand tools and frameworks updated regularly.',
      icon: BookMarked,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10'
    },
    {
      title: 'Flexible Learning',
      description: 'Attend live interactive sessions with lifetime access to recordings.',
      icon: Clock3,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10'
    },
    {
      title: 'Hands-On Coding',
      description: 'Write code daily with integrated coding labs and instant feedback.',
      icon: Zap,
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10'
    },
    {
      title: '1:1 Mentorship',
      description: 'Resolve doubts and track progress with dedicated personal guidance.',
      icon: ShieldCheck,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10'
    },
    {
      title: 'Resume & Profile Prep',
      description: 'Optimize your resume and LinkedIn profile for recruiter screening (ATS).',
      icon: FileCheck2,
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10'
    },
    {
      title: 'Mock Interviews',
      description: 'Gain confidence through realistic technical and behavioral mock rounds.',
      icon: TrendingUp,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10'
    },
    {
      title: 'Career Acceleration',
      description: 'Access placement support, networking sessions, and career counseling.',
      icon: Award,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10'
    }
  ];

  return (
    <section id="why-choose-us" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">

      {/* Background decorations */}
      <div className="absolute left-[-15%] top-[10%] w-[45vw] h-[45vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Why Us
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight mt-4">
            Why Choose TEKIBAG?
          </h2>
          <p className="text-base text-slate-550 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Gain practical, industry-relevant skills through expert-led training, real-world projects, and personalized guidance to build a successful career.
          </p>
        </div>

        {/* Features list arranged in 3 columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6 }}
                className="flex flex-col text-left p-6 sm:p-8 rounded-tekibag bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-850 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 hover:shadow-premium group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div className={`w-12 h-12 rounded-2xl ${feature.bgColor} flex items-center justify-center border border-slate-100 dark:border-slate-800 shadow-sm flex-shrink-0 group-hover:scale-105 transition-transform duration-300 mb-6`}>
                  <IconComponent className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-lg font-bold text-secondary dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors relative z-10">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed relative z-10">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
