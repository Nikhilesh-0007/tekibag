import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Star, Play, Code2 } from 'lucide-react';

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
  const floatingIcons = [
    { name: 'React', color: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20', x: '10%', y: '15%', delay: 0 },
    { name: 'Python', color: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20', x: '75%', y: '10%', delay: 1 },
    { name: 'AWS', color: 'text-orange-400 bg-orange-400/10 border-orange-400/20', x: '85%', y: '45%', delay: 0.5 },
    { name: 'Docker', color: 'text-blue-500 bg-blue-500/10 border-blue-500/20', x: '15%', y: '75%', delay: 1.5 },
    { name: 'Node.js', color: 'text-green-500 bg-green-500/10 border-green-500/20', x: '5%', y: '45%', delay: 2 },
    { name: 'MongoDB', color: 'text-green-600 bg-green-600/10 border-green-600/20', x: '45%', y: '85%', delay: 0.8 },
    { name: 'Java', color: 'text-red-500 bg-red-500/10 border-red-500/20', x: '80%', y: '80%', delay: 1.2 },
    { name: 'GitHub', color: 'text-slate-400 bg-slate-400/10 border-slate-400/20', x: '45%', y: '5%', delay: 2.2 },
  ];

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 flex items-center overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Background radial gradient decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(37,99,235,0.06),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_-20%,rgba(20,184,166,0.1),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col space-y-6 text-left"
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
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-primary hover:bg-primary/95 rounded-tekibag transition-all duration-300 shadow-premium hover:shadow-premium-hover hover:-translate-y-0.5"
              >
                Enroll Now
                <ArrowRight size={18} />
              </a>
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-base font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 rounded-tekibag transition-all duration-300"
              >
                Explore Courses
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200 dark:border-slate-800/80">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="200" suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Students Trained</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="30" suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Real Projects</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="15" suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Tech Courses</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-secondary dark:text-white">
                  <Counter value="75" suffix="%" />
                </div>
                <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Image/Animation Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center items-center h-[400px] sm:h-[500px] lg:h-[550px]"
          >
            {/* Glowing background blob behind the picture */}
            <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] bg-primary/20 dark:bg-accent/15 rounded-full blur-[60px] md:blur-[80px]" />

            {/* Tech badges floating */}
            {floatingIcons.map((icon, idx) => (
              <motion.div
                key={idx}
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4 + idx,
                  ease: 'easeInOut',
                  delay: icon.delay,
                }}
                style={{ left: icon.x, top: icon.y }}
                className={`absolute px-3 py-1.5 rounded-full text-xs font-semibold border ${icon.color} shadow-lg z-20 hidden sm:block backdrop-blur-sm`}
              >
                {icon.name}
              </motion.div>
            ))}

            {/* Main Hero Illustration with frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              className="relative w-[320px] sm:w-[420px] aspect-square rounded-[28px] overflow-hidden shadow-2xl border border-white/20 dark:border-white/10 glass z-10"
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
              className="absolute bottom-6 right-2 sm:right-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-tekibag shadow-premium border border-slate-100 dark:border-slate-800 z-25 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                <Play fill="currentColor" size={16} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500">Live Classes</div>
                <div className="text-sm font-bold text-slate-850 dark:text-white">Daily Interactive Sessions</div>
              </div>
            </motion.div>

            {/* Floating Card 2 (Placement Rate) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute top-12 left-2 sm:left-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-3 rounded-tekibag shadow-premium border border-slate-100 dark:border-slate-800 z-25 flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <Code2 size={20} />
              </div>
              <div className="text-left">
                <div className="text-xs text-slate-500">Mentorship</div>
                <div className="text-sm font-bold text-slate-850 dark:text-white">1:1 Dedicated Doubt Solve</div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
