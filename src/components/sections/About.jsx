import React from 'react';
import { motion } from 'framer-motion';
import { Users2, FolderGit2, Landmark, GraduationCap } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      title: 'Industry Experts',
      description: 'Learn directly from software developers and architects currently working at top MNCs.',
      icon: Users2,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
    },
    {
      title: 'Hands-on Projects',
      description: 'Build production-ready applications to consolidate coding concepts.',
      icon: FolderGit2,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-500',
    },
    {
      title: 'Career Support',
      description: 'Get structured advice on resume writing, portfolio building, and job search.',
      icon: Landmark,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-500',
    },
    {
      title: 'Placement Guidance',
      description: 'We prepare you thoroughly for coding tests and technical interview rounds.',
      icon: GraduationCap,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      textColor: 'text-rose-500',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="relative py-24 bg-white dark:bg-slate-900 overflow-hidden transition-colors duration-300">

      {/* Background decoration elements */}
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-primary/5 dark:bg-primary/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 text-left space-y-6"
          >
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
                Who We Are
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
              Transforming the Way We Learn Software Skills.
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-slate-350">
              <p className="text-base sm:text-lg leading-relaxed">
                Tekibag is an innovative EdTech startup dedicated to transforming the way students learn software technologies.
              </p>
              <p className="text-base leading-relaxed">
                Our mission is to bridge the gap between academic education and industry expectations through practical, career-focused online training. We believe in providing structured learning paths that matter.
              </p>
            </div>

            {/* Accent Highlight Banner */}
            <div className="p-5 bg-gradient-to-r from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10 border-l-4 border-primary dark:border-accent rounded-r-tekibag">
              <p className="text-sm italic font-medium text-slate-800 dark:text-slate-200">
                "Bag your skills, build your future. We are not just a learning platform; we are your partner in career acceleration."
              </p>
            </div>
          </motion.div>

          {/* Right Cards Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="p-6 bg-white dark:bg-slate-950/40 rounded-tekibag shadow-premium border border-slate-100 dark:border-slate-800/80 transition-shadow duration-300 hover:shadow-premium-hover flex flex-col text-left group"
                >
                  {/* Icon Wrapper */}
                  <div className={`w-12 h-12 rounded-2xl ${item.bgColor} flex items-center justify-center mb-5 transition-transform duration-500 group-hover:rotate-12`}>
                    <IconComponent className={`w-6 h-6 ${item.textColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-secondary dark:text-white mb-2">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
