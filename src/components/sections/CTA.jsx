import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Calendar, ArrowRight } from 'lucide-react';

export default function CTA() {
  const handleClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative py-20 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Gradient Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-tekibag overflow-hidden bg-gradient-to-r from-primary via-primary/95 to-accent/85 py-16 px-8 sm:px-16 text-center text-white shadow-2xl"
        >
          {/* Animated decorative shapes */}
          <div className="absolute top-[-20%] left-[-20%] w-[50%] h-[100%] bg-white/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-[-20%] right-[-20%] w-[50%] h-[100%] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Sparkles Icon */}
          <div className="inline-flex p-3 rounded-2xl bg-white/10 backdrop-blur-md mb-6 border border-white/10">
            <Sparkles className="w-6 h-6 text-accent" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 max-w-2xl mx-auto leading-tight">
            Ready to Start Your Tech Career?
          </h2>

          {/* Slogan details */}
          <p className="text-sm sm:text-base lg:text-lg text-blue-100 max-w-xl mx-auto mb-10 leading-relaxed">
            Join TEKIBAG today. Bag your skills, build your future, and secure your place in the global software landscape.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#courses"
              onClick={(e) => handleClick(e, '#courses')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white text-primary hover:text-primary/95 text-base font-bold rounded-tekibag shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Enroll Today
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="inline-flex items-center gap-2 px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-bold rounded-tekibag transition-colors"
            >
              <Calendar size={18} />
              Talk to Mentor
            </a>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
