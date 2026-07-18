import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Monitor, TerminalSquare, Layers, FileHeart, Award } from 'lucide-react';

export default function LearningProcess() {
  const steps = [
    {
      num: 1,
      title: 'Enroll',
      description: 'Register for your chosen tech career track and secure your batch.',
      icon: UserPlus,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'bg-blue-500/10',
      textColor: 'text-blue-500',
    },
    {
      num: 2,
      title: 'Attend Live Classes',
      description: 'Join daily interactive lectures led by expert developers.',
      icon: Monitor,
      color: 'from-cyan-500 to-teal-500',
      bgColor: 'bg-cyan-500/10',
      textColor: 'text-cyan-500',
    },
    {
      num: 3,
      title: 'Complete Practical Labs',
      description: 'Solve coding challenges and lab assessments in real-time.',
      icon: TerminalSquare,
      color: 'from-amber-500 to-orange-500',
      bgColor: 'bg-amber-500/10',
      textColor: 'text-amber-500',
    },
    {
      num: 4,
      title: 'Build Real Projects',
      description: 'Assemble complete applications for your professional portfolio.',
      icon: Layers,
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500/10',
      textColor: 'text-purple-500',
    },
    {
      num: 5,
      title: 'Mock Interviews',
      description: 'Test your capabilities in mock technical and resume grillings.',
      icon: FileHeart,
      color: 'from-rose-500 to-pink-500',
      bgColor: 'bg-rose-500/10',
      textColor: 'text-rose-500',
    },
    {
      num: 6,
      title: 'Get Placed',
      description: 'Conquer interviews and land your dream tech job with Tekibag!',
      icon: Award,
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'bg-emerald-500/10',
      textColor: 'text-emerald-500',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="process" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute right-[-10%] top-[20%] w-[40vw] h-[40vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Our Blueprint
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            How You Become a Tech Professional
          </h2>
          <p className="text-base sm:text-lg text-slate-655 dark:text-slate-400">
            A comprehensive, step-by-step training framework designed to transition you into active industry placement.
          </p>
        </div>

        {/* Desktop Timeline Layout (Hidden on Mobile) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="hidden xl:flex items-stretch justify-between relative mt-16 px-4"
        >
          {/* Connector Line across steps */}
          <div className="absolute top-[40px] left-[5%] right-[5%] h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-emerald-500 opacity-20 dark:opacity-30 z-0" />

          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex-1 flex flex-col items-center relative z-10 px-3 group"
              >
                {/* Connecting Arrow for desktop */}
                {idx < steps.length - 1 && (
                  <div className="absolute top-[32px] right-[-10px] text-slate-350 dark:text-slate-700 font-bold text-lg select-none pointer-events-none">
                    →
                  </div>
                )}

                {/* Step Circle with Icon */}
                <motion.div
                  whileHover={{ scale: 1.08, rotate: 5 }}
                  className={`w-20 h-20 rounded-2xl ${step.bgColor} border border-slate-200/60 dark:border-slate-800 shadow-premium flex items-center justify-center mb-6 relative z-10 transition-all duration-300 group-hover:shadow-premium-hover hover:bg-white dark:hover:bg-slate-900`}
                >
                  <IconComponent className={`w-8 h-8 ${step.textColor}`} />
                  <span className={`absolute -top-2.5 -right-2.5 w-6 h-6 rounded-full bg-gradient-to-r ${step.color} text-white text-xs font-bold flex items-center justify-center shadow-sm`}>
                    {step.num}
                  </span>
                </motion.div>

                {/* Content */}
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-550 dark:text-slate-400 text-center max-w-[160px] leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Mobile / Tablet Timeline Layout (Hidden on Large Screen) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="xl:hidden flex flex-col space-y-8 relative pl-6 text-left border-l-2 border-slate-200 dark:border-slate-800 ml-4"
        >
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative pl-8 group"
              >
                {/* timeline dot */}
                <div className="absolute left-[-38px] top-2 flex items-center justify-center">
                  <div className={`w-8 h-8 rounded-lg ${step.bgColor} border border-slate-200 dark:border-slate-850 text-xs font-bold flex items-center justify-center ${step.textColor} shadow-sm group-hover:scale-110 transition-all duration-300`}>
                    {step.num}
                  </div>
                </div>

                {/* content card */}
                <div className="p-5 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium flex items-start gap-4 hover:bg-white dark:hover:bg-slate-900 transition-all duration-300 hover:shadow-premium-hover hover:-translate-y-0.5 group relative overflow-hidden">
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className={`p-2.5 rounded-xl ${step.bgColor} flex-shrink-0 relative z-10 border border-slate-100 dark:border-slate-800/80 shadow-sm`}>
                    <IconComponent className={`w-5 h-5 ${step.textColor}`} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-base font-bold text-secondary dark:text-white mb-1 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
