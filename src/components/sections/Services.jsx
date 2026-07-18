import React from 'react';
import { motion } from 'framer-motion';
import {
  Video,
  UserCheck,
  Briefcase,
  Terminal,
  MessagesSquare,
  TrendingUp,
  FileText,
  Mic,
  Award,
  Users,
  Compass,
} from 'lucide-react';

const LinkedInIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);


export default function Services() {
  const services = [
    {
      title: 'Live Online Instructor-Led Training',
      description: 'Interact with industry professionals in real-time, ask questions, and learn live.',
      icon: Video,
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Industry Expert Mentorship',
      description: 'Get matched with tech leaders who will mentor and guide you through your learning path.',
      icon: UserCheck,
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
    {
      title: 'Real-Time Project Experience',
      description: 'Work on actual collaborative projects mimicking real-world developer environments.',
      icon: Briefcase,
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
    {
      title: 'Hands-on Practical Labs',
      description: 'Learn by doing in sandbox sandboxed environments with interactive tests and challenges.',
      icon: Terminal,
      color: 'text-amber-505',
      bgColor: 'bg-amber-500/10',
      colorOverride: 'text-amber-500',
    },
    {
      title: 'One-to-One Doubt Support',
      description: 'Never get stuck. Get help instantly with screen sharing and chat troubleshooting.',
      icon: MessagesSquare,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
    },
    {
      title: 'Career Guidance',
      description: 'Develop your career trajectory, target matching roles, and map out paths to success.',
      icon: Compass,
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
    },
    {
      title: 'Resume Building',
      description: 'Craft ATS-compliant resumes that highlight your core technologies and projects.',
      icon: FileText,
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
    },
    {
      title: 'LinkedIn Optimization',
      description: 'Optimize your profile for recruiters to search and find you for tech opportunities.',
      icon: LinkedInIcon,
      color: 'text-blue-600',
      bgColor: 'bg-blue-650/10',
      colorOverride: 'text-blue-600',
    },
    {
      title: 'Mock Interviews',
      description: 'Conquer interview anxiety with rigorous mock tech and HR interview sessions.',
      icon: Mic,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      title: 'Placement Assistance',
      description: 'Gain access to partner company hiring pipelines and active job listings.',
      icon: TrendingUp,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Internship Support',
      description: 'Land real internship placements to gain critical experience on your resume.',
      icon: Users,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      title: 'Course Completion Certificate',
      description: 'Earn a verifiable certificate of completion to share on social networks and resume.',
      icon: Award,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="services" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      
      {/* Visual background details */}
      <div className="absolute left-[-10%] top-[30%] w-[35vw] h-[35vw] rounded-full bg-primary/5 dark:bg-primary/10 blur-[100px] pointer-events-none" />
      <div className="absolute right-[-10%] bottom-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 dark:bg-accent/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Header Title */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight mt-2">
            Comprehensive Services to Fuel Your Tech Growth
          </h2>
          <p className="text-base sm:text-lg text-slate-550 dark:text-slate-400">
            We provide everything you need to transform from an absolute beginner into a job-ready software engineer.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const iconColor = service.colorOverride || service.color;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ y: -6 }}
                className="p-6 sm:p-8 bg-slate-50 dark:bg-slate-950/40 rounded-tekibag border border-slate-200/50 dark:border-slate-850 shadow-premium hover:shadow-premium-hover transition-all duration-300 hover:bg-white dark:hover:bg-slate-900 flex flex-col items-start text-left group relative overflow-hidden"
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Icon wrapper */}
                <div className={`w-12 h-12 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6 border border-slate-100 dark:border-slate-800 shadow-sm relative z-10`}>
                  <IconComponent className={`w-6 h-6 ${iconColor}`} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-secondary dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-200 relative z-10">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-550 dark:text-slate-400 leading-relaxed relative z-10">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
