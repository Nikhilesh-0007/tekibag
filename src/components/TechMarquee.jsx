import React from 'react';

export default function TechMarquee() {
  const techs = [
    'React', 'Node.js', 'Python', 'Java', 'Docker', 'Kubernetes', 
    'AWS Cloud', 'DevOps', 'MongoDB', 'SQL Databases', 'Git & GitHub', 
    'Cyber Security', 'UI/UX Design', 'Machine Learning', 'Artificial Intelligence', 
    'Data Structures', 'Data Science', 'JavaScript', 'TypeScript'
  ];

  // Double the list to support smooth loop overlap
  const doubleTechs = [...techs, ...techs];

  return (
    <div className="py-6 bg-slate-100/50 dark:bg-slate-950 border-y border-slate-200/50 dark:border-slate-800/80 overflow-hidden relative z-10 transition-colors duration-300">
      
      {/* Edge Vignette Blur Overlay for fade out effect */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-slate-50 dark:from-slate-950 to-transparent pointer-events-none z-10" />

      {/* Sliding Marquee Tracks */}
      <div className="flex w-max gap-8 animate-marquee">
        {doubleTechs.map((tech, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2.5 px-5 py-2 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/80 text-sm font-bold text-slate-700 dark:text-slate-350 shadow-sm whitespace-nowrap hover:border-primary dark:hover:border-accent hover:text-secondary dark:hover:text-white transition-all duration-300 hover:-translate-y-0.5 cursor-default select-none"
          >
            {/* Green glowing indicator dot */}
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            {tech}
          </div>
        ))}
      </div>

    </div>
  );
}
