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
      badgeColor: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
      iconColor: 'text-blue-500 dark:text-blue-400',
      iconBg: 'bg-blue-500/10',
      hoverBorder: 'hover:border-blue-500/40 dark:hover:border-blue-500/30',
      hoverText: 'group-hover:text-blue-600 dark:group-hover:text-blue-400',
      arrowBg: 'group-hover:bg-blue-500',
    },
    {
      title: 'Global Remote Jobs',
      description: 'Work for international startups and tech companies right from the comfort of your home.',
      icon: Globe2,
      color: 'from-teal-500 to-emerald-500',
      tag: 'Flexibility',
      badgeColor: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20',
      iconColor: 'text-teal-500 dark:text-teal-400',
      iconBg: 'bg-teal-500/10',
      hoverBorder: 'hover:border-teal-500/40 dark:hover:border-teal-500/30',
      hoverText: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
      arrowBg: 'group-hover:bg-teal-500',
    },
    {
      title: 'High Salary Potential',
      description: 'Tech roles rank among the highest-paying entry-level careers worldwide.',
      icon: Coins,
      color: 'from-amber-500 to-yellow-500',
      tag: 'Earning',
      badgeColor: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20',
      iconColor: 'text-amber-500 dark:text-amber-400',
      iconBg: 'bg-amber-500/10',
      hoverBorder: 'hover:border-amber-500/40 dark:hover:border-amber-500/30',
      hoverText: 'group-hover:text-amber-600 dark:group-hover:text-amber-400',
      arrowBg: 'group-hover:bg-amber-500',
    },
    {
      title: 'Future-Proof Skills',
      description: 'Coding is a fundamental skill in the digital age, insulating you from market shifts.',
      icon: ShieldAlert,
      color: 'from-purple-500 to-pink-500',
      tag: 'Security',
      badgeColor: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-500/20',
      iconColor: 'text-purple-500 dark:text-purple-400',
      iconBg: 'bg-purple-500/10',
      hoverBorder: 'hover:border-purple-500/40 dark:hover:border-purple-500/30',
      hoverText: 'group-hover:text-purple-600 dark:group-hover:text-purple-400',
      arrowBg: 'group-hover:bg-purple-500',
    },
    {
      title: 'Problem Solving',
      description: 'Develop structured logic to dissect complex processes and execute solutions.',
      icon: Brain,
      color: 'from-indigo-500 to-violet-500',
      tag: 'Mindset',
      badgeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20',
      iconColor: 'text-indigo-500 dark:text-indigo-400',
      iconBg: 'bg-indigo-500/10',
      hoverBorder: 'hover:border-indigo-500/40 dark:hover:border-indigo-500/30',
      hoverText: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
      arrowBg: 'group-hover:bg-indigo-500',
    },
    {
      title: 'Innovation',
      description: 'Translate raw concepts into functional products, SaaS tools, and platforms.',
      icon: Lightbulb,
      color: 'from-rose-500 to-red-500',
      tag: 'Creativity',
      badgeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20',
      iconColor: 'text-rose-500 dark:text-rose-400',
      iconBg: 'bg-rose-500/10',
      hoverBorder: 'hover:border-rose-500/40 dark:hover:border-rose-500/30',
      hoverText: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
      arrowBg: 'group-hover:bg-rose-500',
    },
    {
      title: 'Cloud Computing',
      description: 'Manage virtual server grids and scale apps to accommodate millions of daily visits.',
      icon: Cloud,
      color: 'from-sky-500 to-blue-500',
      tag: 'Scale',
      badgeColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border border-sky-500/20',
      iconColor: 'text-sky-500 dark:text-sky-400',
      iconBg: 'bg-sky-500/10',
      hoverBorder: 'hover:border-sky-500/40 dark:hover:border-sky-500/30',
      hoverText: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
      arrowBg: 'group-hover:bg-sky-500',
    },
    {
      title: 'Artificial Intelligence',
      description: 'Train machine learning arrays and integrate predictive logic into modern software.',
      icon: Cpu,
      color: 'from-emerald-500 to-teal-500',
      tag: 'Future',
      badgeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20',
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      iconBg: 'bg-emerald-500/10',
      hoverBorder: 'hover:border-emerald-500/40 dark:hover:border-emerald-500/30',
      hoverText: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
      arrowBg: 'group-hover:bg-emerald-500',
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
    <section id="skills-matter" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">

      {/* Decorative gradient backdrops for Light & Dark mode */}
      <div className="absolute left-[-10%] top-[20%] w-[35vw] h-[35vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[20%] w-[35vw] h-[35vw] rounded-full bg-accent/5 dark:bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            The Landscape
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Why Software Skills Matter More Than Ever
          </h2>
          <p className="text-base sm:text-lg text-slate-550 dark:text-slate-400">
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
                className={`p-6 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium hover:shadow-premium-hover transition-all duration-300 flex flex-col text-left group relative overflow-hidden hover:bg-white dark:hover:bg-slate-900 cursor-pointer ${card.hoverBorder}`}
              >
                {/* Accent top border gradient decoration */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${card.color} transition-all duration-300 group-hover:h-1.5`} />

                {/* Subtle colored glow circle in bottom-right corner on hover */}
                <div className={`absolute -right-10 -bottom-10 w-24 h-24 rounded-full bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />

                {/* Tag & Icon Row */}
                <div className="flex items-center justify-between mb-5 mt-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-3xs font-extrabold uppercase tracking-wider ${card.badgeColor}`}>
                    {card.tag}
                  </span>
                  {/* The icon container starts colored and scales up on hover */}
                  <div className={`p-2.5 rounded-xl ${card.iconBg} ${card.iconColor} border border-slate-255/10 dark:border-slate-800/80 group-hover:bg-gradient-to-r group-hover:${card.color} group-hover:text-white group-hover:scale-110 transition-all duration-300 shadow-sm relative z-10`}>
                    <IconComponent size={20} />
                  </div>
                </div>

                {/* Card Title */}
                <h3 className={`text-base font-extrabold text-secondary dark:text-white mb-2.5 transition-colors duration-300 relative z-10 ${card.hoverText}`}>
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-550 dark:text-slate-400 leading-relaxed relative z-10 group-hover:text-slate-700 dark:group-hover:text-slate-350 transition-colors duration-300">
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
