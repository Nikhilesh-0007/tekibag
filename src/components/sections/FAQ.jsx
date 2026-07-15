import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function FAQItem({ question, answer, isOpen, toggleOpen }) {
  return (
    <div className="border-b border-slate-200 dark:border-slate-800 py-4">
      <button
        onClick={toggleOpen}
        className="w-full flex items-center justify-between py-3 text-left font-bold text-base sm:text-lg text-secondary dark:text-white hover:text-primary dark:hover:text-accent transition-colors"
      >
        <span>{question}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-slate-400"
        >
          <ChevronDown size={20} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm sm:text-base text-slate-550 dark:text-slate-400 pb-4 leading-relaxed pt-1">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0); // Open the first item by default

  const faqData = [
    {
      question: 'Who can join?',
      answer: 'Anyone! Our training programs are open to college students, fresh graduates, and working professionals looking to transition into software engineering roles. There are no strict eligibility criteria other than a strong commitment to learning.',
    },
    {
      question: 'Are classes live?',
      answer: 'Yes! All classes are 100% live and instructor-led. You can interact directly with instructors in real-time, ask questions, share your screen for debugging, and work on coding challenges alongside peers.',
    },
    {
      question: 'Will I receive certificates?',
      answer: 'Yes. Upon completing all courses, assignments, and capstone projects, you will receive a verifiable digital Certificate of Completion from TEKIBAG, which you can easily add to your LinkedIn profile and resume.',
    },
    {
      question: 'Do you provide placement assistance?',
      answer: 'Absolutely. We offer complete placement assistance, including mock interview rounds (technical and HR), resume critique, LinkedIn profile optimization, and direct referrals/interviews with our partner companies.',
    },
    {
      question: 'Do I need prior programming knowledge?',
      answer: 'No. Our curriculum starts from the absolute basics of logic building and syntax. We design our training paths step-by-step so that learners from non-technical backgrounds can transition comfortably into software engineering.',
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="relative py-24 bg-white dark:bg-slate-900 transition-colors duration-300 overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute left-[-10%] top-[40%] w-[30vw] h-[30vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Help Center
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-slate-550 dark:text-slate-400">
            Got questions? We have answers. Find quick details about our software training below.
          </p>
        </div>

        {/* FAQ Accordion container */}
        <div className="bg-slate-50 dark:bg-slate-950/40 border border-slate-200/50 dark:border-slate-850 rounded-tekibag p-6 sm:p-10 shadow-premium">
          {faqData.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggleOpen={() => handleToggle(index)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
