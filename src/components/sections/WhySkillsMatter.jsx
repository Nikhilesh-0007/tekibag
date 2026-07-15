import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Globe2,
  Coins,
  ShieldAlert,
  Brain,
  Lightbulb,
  Cloud,
  Cpu,
} from 'lucide-react';

export default function WhySkillsMatter() {
  const cards = [
    {
      title: 'Increase Career Opportunities',
      description: 'The global demand for skilled software engineers grows exponentially year over year.',
      icon: Briefcase,
      color: 'from-blue-500 to-cyan-500',
      tag: 'Demand',
    },
    {
      title: 'Global Remote Jobs',
      description: 'Work for international startups and tech companies right from the comfort of your home.',
      icon: Globe2,
      color: 'from-teal-500 to-emerald-500',
      tag: 'Flexibility',
    },
    {
      title: 'High Salary Potential',
      description: 'Tech roles rank among the highest-paying entry-level careers worldwide.',
      icon: Coins,
      color: 'from-yellow-500 to-amber-500',
      tag: 'Earning',
    },
    {
      title: 'Future-Proof Skills',
      description: 'Coding is a fundamental skill in the digital age, insulating you from market shifts.',
      icon: ShieldAlert,
      color: 'from-purple-500 to-pink-500',
      tag: 'Security',
    },
    {
      title: 'Problem Solving',
      description: 'Develop structured logic to dissect complex processes and execute solutions.',
      icon: Brain,
      color: 'from-indigo-500 to-violet-500',
      tag: 'Mindset',
    },
    {
      title: 'Innovation',
      description: 'Translate raw concepts into functional products, SaaS tools, and platforms.',
      icon: Lightbulb,
      color: 'from-rose-500 to-red-500',
      tag: 'Creativity',
    },
    {
      title: 'Cloud Computing',
      description: 'Manage virtual server grids and scale apps to accommodate millions of daily visits.',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      tag: 'Scale',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Train machine learning arrays and integrate predictive logic into modern software.',
      icon: Cpu,
      color: 'from-teal-500 to-cyan-500',
      tag: 'Future',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.05 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="skills-matter" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Background Radial Glow */}
      <div className="absolute right-[-10%] top-[40%] w-[35vw] h-[35vw] rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            The Landscape
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Why Software Skills Matter More Than Ever
          </h2>
          <p className="text-base sm:text-lg text-slate-655 dark:text-slate-400">
            Investing in programming and systems architecture opens doors to unparalleled growth and flexibility.
          </p>
        </div>

        {/* Infographic Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {cards.map((card, idx) => {
            const IconComponent = card.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="p-6 bg-white dark:bg-slate-900/60 rounded-tekibag border border-slate-150/50 dark:border-slate-800/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col text-left group relative overflow-hidden"
              >
                {/* Accent line decoration */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color}`} />

                {/* Tag & Icon Row */}
                <div className="flex items-center justify-between mb-5 mt-2">
                  <span className="text-3xs font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-500">
                    {card.tag}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-100 dark:border-slate-800 text-slate-600 dark:text-slate-300 group-hover:scale-105 transition-transform">
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className="text-base font-bold text-secondary dark:text-white mb-2 group-hover:text-primary dark:group-hover:text-accent transition-colors">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-500 dark:text-slate-450 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
