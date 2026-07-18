import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Play, Code2, PhoneCall } from 'lucide-react';

// Counter component for animated stats that start from 0 and end at the exact same time
function Counter({ value, suffix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value);
    if (isNaN(end)) return;
    if (start === end) {
      setCount(end);
      return;
    }

    const startTime = performance.now();
    let animationFrameId;

    const updateCount = (timestamp) => {
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
          >
            {/* badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 border border-primary/20 dark:border-accent/20">
                🚀 Future Ready Learning
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-secondary dark:text-white leading-[1.1] tracking-tight">
              Bag Your Skills.<br />
              <span className="text-gradient">Build Your Future.</span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl sm:text-2xl font-bold text-primary dark:text-accent">
              Your Future in Tech Starts Here.
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-350 max-w-xl leading-relaxed">
              Empowering the Next Generation of Software Professionals through practical online training, real-world projects, expert mentorship, and career-focused learning.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link
                to="/courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-primary hover:bg-primary/95 rounded-tekibag transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:scale-95"
              >
                Explore Courses
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+916302284725"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-bold text-slate-750 dark:text-slate-200 bg-white hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-tekibag transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5 active:scale-95"
              >
                <PhoneCall size={18} />
                Talk to Mentor
              </a>
            </div>

            {/* Stats Cards Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              <div className="p-4 bg-white/60 dark:bg-slate-900/30 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="200" suffix="+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Students Trained</div>
              </div>
              <div className="p-4 bg-white/60 dark:bg-slate-900/30 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="30" suffix="+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Real Projects</div>
              </div>
              <div className="p-4 bg-white/60 dark:bg-slate-900/30 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="15" suffix="+" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Tech Courses</div>
              </div>
              <div className="p-4 bg-white/60 dark:bg-slate-900/30 rounded-2xl border border-slate-200/40 dark:border-slate-800/60 shadow-sm text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="75" suffix="%" />
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1.5 font-medium">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Animation Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative flex justify-center items-center h-[350px] sm:h-[450px] lg:h-[500px]"
          >
            {/* Glowing background blob behind the picture */}
            <div className="absolute w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] bg-primary/20 dark:bg-accent/15 rounded-full blur-[60px] md:blur-[80px]" />

            {/* Main Hero Illustration with frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-[280px] sm:w-[360px] aspect-square rounded-[28px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 glass z-10"
            >
              <img
                src="/hero.png"
                alt="TEKIBAG Modern Software Training"
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Floating Card 1 (Live classes info) */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="absolute bottom-4 right-0 sm:right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-tekibag shadow-premium border border-slate-100 dark:border-slate-800 z-20 flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                <Play fill="currentColor" size={14} />
              </div>
              <div className="text-left">
                <div className="text-3xs text-slate-500 font-bold uppercase tracking-wider">Live Classes</div>
                <div className="text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">Daily Interactive Sessions</div>
              </div>
            </motion.div>

            {/* Floating Card 2 (Mentorship) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-8 left-0 sm:left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-tekibag shadow-premium border border-slate-100 dark:border-slate-800 z-20 flex items-center gap-3 hover:-translate-y-0.5 transition-transform duration-300"
            >
              <div className="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center text-primary flex-shrink-0">
                <Code2 size={16} />
              </div>
              <div className="text-left">
                <div className="text-3xs text-slate-500 font-bold uppercase tracking-wider">Mentorship</div>
                <div className="text-xs font-extrabold text-slate-800 dark:text-white mt-0.5">1:1 Dedicated Doubt Solve</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
