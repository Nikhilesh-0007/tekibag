import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Brain,
  Cpu,
  Database,
  BarChart3,
  Code2,
  Terminal,
  Globe,
  Palette,
  Server,
  Cloud,
  ShieldAlert,
  ShieldCheck,
  CheckSquare,
  Play,
  Layers,
  Award,
  Search,
  ChevronDown,
  Info
} from 'lucide-react';

export default function SalaryTrends() {
  const categories = [
    {
      id: 'ai_ml',
      name: 'AI, ML & Data Science',
      icon: Brain,
      color: 'from-cyan-500 to-blue-600',
      activeColor: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/30'
    },
    {
      id: 'development',
      name: 'Full Stack & Web',
      icon: Code2,
      color: 'from-indigo-500 to-purple-600',
      activeColor: 'bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/30'
    },
    {
      id: 'cloud_cyber',
      name: 'Cloud & Cyber Security',
      icon: Cloud,
      color: 'from-sky-500 to-teal-500',
      activeColor: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/30'
    },
    {
      id: 'testing',
      name: 'Software Testing',
      icon: CheckSquare,
      color: 'from-emerald-500 to-teal-600',
      activeColor: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30'
    },
    {
      id: 'enterprise',
      name: 'SAP & Enterprise SaaS',
      icon: Layers,
      color: 'from-rose-500 to-amber-600',
      activeColor: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/30'
    }
  ];

  const salaryData = {
    ai_ml: [
      {
        role: 'Gen AI Developer',
        icon: Brain,
        fresher: { min: 5, max: 10 },
        mid: { min: 15, max: 28 },
        exp: { min: 28, max: 50 },
        note: 'Broad-market band for GenAI/LLM roles; product companies and GCCs pay toward the top of each range, with select FAANG/frontier-lab offers going well beyond ₹50 LPA.'
      },
      {
        role: 'AI/ML Engineer',
        icon: Cpu,
        fresher: { min: 5, max: 9 },
        mid: { min: 12, max: 24 },
        exp: { min: 22, max: 40 },
        note: 'Bengaluru pays 15–25% above the national average; product companies pay materially more than the IT-services end of this range.'
      },
      {
        role: 'Data Science with Gen AI',
        icon: BarChart3,
        fresher: { min: 5, max: 8 },
        mid: { min: 12, max: 20 },
        exp: { min: 20, max: 35 },
        note: 'GenAI/ML specialists (LLM fine-tuning, RAG, prompt engineering) earn a real premium over traditional data science.'
      },
      {
        role: 'AWS Data Engineering',
        icon: Database,
        fresher: { min: 4, max: 7 },
        mid: { min: 9, max: 16 },
        exp: { min: 18, max: 32 },
        note: 'Two distinct markets exist: IT services (lower/mid part of range) vs. product/GCC employers, which pay 50–100% more for equivalent experience.'
      },
      {
        role: 'Azure Data Engineering',
        icon: Server,
        fresher: { min: 4.5, max: 7 },
        mid: { min: 9, max: 15 },
        exp: { min: 18, max: 32 },
        note: 'Databricks + Synapse + ADF expertise is the key differentiator; product companies and GCCs (Microsoft, Amazon) pay well above the services-firm average.'
      },
      {
        role: 'Power BI and SQL',
        icon: BarChart3,
        fresher: { min: 3.5, max: 6 },
        mid: { min: 8, max: 14 },
        exp: { min: 12, max: 20 },
        note: 'SQL + Power BI + DAX is one of the most consistently in-demand combinations; Microsoft Fabric/Synapse fluency raises pay at the consultant/architect level. SQL + Python + Power BI fresher stack earns 25–35% more than Excel-only peers.'
      }
    ],
    development: [
      {
        role: 'Full Stack Python with AI Integration',
        icon: Code2,
        fresher: { min: 3.5, max: 6.5 },
        mid: { min: 8, max: 15 },
        exp: { min: 15, max: 25 },
        note: 'Tracks general full-stack pay closely, with a modest premium for AI integration skills; product companies pay 1.5–2x service firms for the same experience.'
      },
      {
        role: 'Full Stack Java with AI Integration',
        icon: Terminal,
        fresher: { min: 4, max: 7 },
        mid: { min: 8, max: 16 },
        exp: { min: 16, max: 26 },
        note: 'Java full stack edges ahead of other stacks at mid-senior levels due to enterprise/BFSI/GCC demand.'
      },
      {
        role: 'Full Stack .NET with AI Integration',
        icon: Code2,
        fresher: { min: 3.5, max: 6.5 },
        mid: { min: 8, max: 15 },
        exp: { min: 15, max: 24 },
        note: '.NET full-stack tracks close to Java; strongest demand in enterprise, BFSI, and Microsoft-stack organizations.'
      },
      {
        role: 'Frontend Developer (React.js)',
        icon: Globe,
        fresher: { min: 3.5, max: 6 },
        mid: { min: 7, max: 12 },
        exp: { min: 12, max: 20 },
        note: 'Frontend-only roles typically trail full-stack pay by 10–20% at the same experience level.'
      },
      {
        role: 'Backend Developer (Java/Spring Boot)',
        icon: Terminal,
        fresher: { min: 3.5, max: 6.5 },
        mid: { min: 8, max: 15 },
        exp: { min: 15, max: 25 },
        note: 'Tracks close to full-stack Java; microservices, cloud, and system-design skills add a meaningful premium at senior levels.'
      },
      {
        role: 'Web Development',
        icon: Code2,
        fresher: { min: 3, max: 5.5 },
        mid: { min: 6, max: 10 },
        exp: { min: 10, max: 18 },
        note: 'Broadest, most accessible entry point; wide range reflects service vs. product company gap and skill depth (React/Node vs. static sites).'
      },
      {
        role: 'UI/UX Designer',
        icon: Palette,
        fresher: { min: 3, max: 6 },
        mid: { min: 7, max: 12 },
        exp: { min: 14, max: 24 },
        note: 'Figma expertise is the single biggest early-career lever; product designers/UX researchers earn 15–25% more than generic UI-only designers.'
      }
    ],
    cloud_cyber: [
      {
        role: 'DevOps with Multi-Cloud',
        icon: Server,
        fresher: { min: 4, max: 6.5 },
        mid: { min: 12, max: 22 },
        exp: { min: 22, max: 40 },
        note: 'Certifications (AWS/Azure/CKA/Terraform) each add roughly 15–25%; product companies and GCCs pay well above the IT-services end of this range.'
      },
      {
        role: 'Cloud Engineer (AWS & Azure)',
        icon: Cloud,
        fresher: { min: 4, max: 7 },
        mid: { min: 9, max: 16 },
        exp: { min: 16, max: 28 },
        note: 'AWS-certified freshers command the higher ends of this range. Cloud architecture skills lead to rapid progression.'
      },
      {
        role: 'Cybersecurity Engineer',
        icon: ShieldAlert,
        fresher: { min: 4, max: 7 },
        mid: { min: 8, max: 15 },
        exp: { min: 18, max: 30 },
        note: 'CEH/Security+/OSCP certifications materially lift offers; cloud security and DevSecOps specializations earn the highest premiums.'
      },
      {
        role: 'Cyber Security SOC',
        icon: ShieldCheck,
        fresher: { min: 3.5, max: 6 },
        mid: { min: 8, max: 13 },
        exp: { min: 14, max: 22 },
        note: 'Highest-volume entry point into cybersecurity; the biggest single salary jump is the L1→L2 transition at 18–24 months (roughly 40–80% uplift).'
      }
    ],
    testing: [
      {
        role: 'Selenium with Python',
        icon: CheckSquare,
        fresher: { min: 3.5, max: 5.5 },
        mid: { min: 8, max: 13 },
        exp: { min: 13, max: 18 },
        note: 'Selenium-only engineers track roughly ₹4.5L (fresher) → ₹10L (mid) → ₹16L (senior); dual-skill (Selenium+Playwright) testers earn notably more.'
      },
      {
        role: 'Selenium with Java',
        icon: Play,
        fresher: { min: 3.5, max: 5.5 },
        mid: { min: 8, max: 13 },
        exp: { min: 13, max: 18 },
        note: 'Java remains the dominant automation stack in enterprise/legacy client environments; pairs well with TestNG, Maven, and Jenkins CI/CD skills.'
      },
      {
        role: 'Playwright Automation Testing',
        icon: CheckSquare,
        fresher: { min: 4, max: 6.5 },
        mid: { min: 10, max: 17 },
        exp: { min: 17, max: 25 },
        note: 'Playwright postings grew sharply in 2025–26; Playwright-skilled engineers typically earn 5–15% more than equivalent Selenium-only testers.'
      }
    ],
    enterprise: [
      {
        role: 'SAP FICO',
        icon: Award,
        fresher: { min: 4, max: 6 },
        mid: { min: 8, max: 14 },
        exp: { min: 16, max: 24 },
        note: 'Highest volume of SAP job openings of any module; CA-background freshers often start higher (₹6–10 LPA); S/4HANA Finance skills raise the ceiling further.'
      },
      {
        role: 'SAP ABAP',
        icon: Layers,
        fresher: { min: 4.5, max: 6.5 },
        mid: { min: 9, max: 15 },
        exp: { min: 18, max: 26 },
        note: 'ABAP and S/4HANA-skilled consultants command the highest salaries among SAP technical roles.'
      },
      {
        role: 'Salesforce (Admin & Developer)',
        icon: Award,
        fresher: { min: 3.5, max: 6 },
        mid: { min: 8, max: 15 },
        exp: { min: 16, max: 28 },
        note: 'Entry point is often Support Specialist before Admin; Agentforce/AI configuration skills are an emerging, fast-growing salary differentiator.'
      },
      {
        role: 'ServiceNow (Admin & Developer)',
        icon: Layers,
        fresher: { min: 5, max: 7.5 },
        mid: { min: 9, max: 15 },
        exp: { min: 15, max: 27 },
        note: 'Typical developer pay sits below the consultant/architect track; architects and implementation consultants at the senior end can reach ₹40–70 LPA.'
      },
      {
        role: 'Digital Marketing',
        icon: Search,
        fresher: { min: 2.5, max: 4.5 },
        mid: { min: 6, max: 9 },
        exp: { min: 10, max: 18 },
        note: 'Wide range reflects generalist-executive vs. specialist tracks; Performance Marketing, AI Marketing, and Analytics are the fastest-growing, highest-paying specializations.'
      }
    ]
  };

  const [activeTab, setActiveTab] = useState('ai_ml');
  const [expandedCard, setExpandedCard] = useState(null);

  const activeCategory = categories.find(c => c.id === activeTab);
  const currentRoles = salaryData[activeTab];

  // Helper to draw progress range bar (max 50 LPA scale for visual alignment)
  const getProgressStyles = (min, max) => {
    const scaleMax = 50;
    const startPercent = Math.min((min / scaleMax) * 100, 95);
    const widthPercent = Math.min(((max - min) / scaleMax) * 100, 100 - startPercent);
    return {
      left: `${startPercent}%`,
      width: `${widthPercent}%`
    };
  };

  return (
    <section id="salary-trends" className="relative py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-300 overflow-hidden">
      
      {/* Decorative gradient backdrops */}
      <div className="absolute right-[-10%] top-[10%] w-[40vw] h-[40vw] rounded-full bg-primary/5 dark:bg-primary/5 blur-[120px] pointer-events-none" />
      <div className="absolute left-[-10%] bottom-[10%] w-[40vw] h-[40vw] rounded-full bg-accent/5 dark:bg-accent/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-wider text-primary dark:text-accent bg-primary/10 dark:bg-accent/10 px-3.5 py-1.5 rounded-full">
            Earning Potential
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-secondary dark:text-white leading-tight">
            Industry Salary Trends in India
          </h2>
          <p className="text-base text-slate-550 dark:text-slate-400 mt-4 max-w-2xl mx-auto">
            Explore CTC trends (₹ LPA) for various roles compiled from Glassdoor, AmbitionBox, PayScale, and Naukri. See how your skills translate to high-paying packages.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => {
            const Icon = category.icon;
            const isActive = activeTab === category.id;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setExpandedCard(null);
                }}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl border text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-r ${category.color} text-white shadow-premium border-transparent`
                    : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-850 hover:text-slate-800 dark:hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-white' : 'text-slate-500'} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>

        {/* Roles Salary Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
        >
          <AnimatePresence mode="popLayout">
            {currentRoles.map((item, index) => {
              const RoleIcon = item.icon;
              const isNoteExpanded = expandedCard === index;

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.role}
                  className="flex flex-col p-6 rounded-tekibag bg-white dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800/80 shadow-premium hover:shadow-premium-hover transition-all duration-300 relative overflow-hidden group hover:border-primary/20 dark:hover:border-accent/20"
                >
                  {/* Subtle top decoration */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${activeCategory.color} opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Header: Icon & Name */}
                  <div className="flex items-center gap-3.5 mb-6">
                    <div className={`p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-750 ${activeCategory.activeColor} transition-transform duration-300 group-hover:scale-105`}>
                      <RoleIcon size={20} />
                    </div>
                    <h3 className="text-base font-extrabold text-secondary dark:text-white group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                      {item.role}
                    </h3>
                  </div>

                  {/* Salary Bands Stack */}
                  <div className="space-y-4 flex-grow mb-6">
                    {/* Band 1: Fresher */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400 mb-1">
                        <span>Fresher <span className="text-3xs font-medium text-slate-400">(0-2 yrs)</span></span>
                        <span className="text-slate-800 dark:text-white font-bold">₹{item.fresher.min} - {item.fresher.max} LPA</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full relative overflow-hidden">
                        <div
                          style={getProgressStyles(item.fresher.min, item.fresher.max)}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${activeCategory.color}`}
                        />
                      </div>
                    </div>

                    {/* Band 2: Mid-Level */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400 mb-1">
                        <span>Mid-Level <span className="text-3xs font-medium text-slate-400">(3-5 yrs)</span></span>
                        <span className="text-slate-800 dark:text-white font-bold">₹{item.mid.min} - {item.mid.max} LPA</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full relative overflow-hidden">
                        <div
                          style={getProgressStyles(item.mid.min, item.mid.max)}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${activeCategory.color}`}
                        />
                      </div>
                    </div>

                    {/* Band 3: Experienced */}
                    <div>
                      <div className="flex justify-between text-xs font-semibold text-slate-550 dark:text-slate-400 mb-1">
                        <span>Experienced <span className="text-3xs font-medium text-slate-400">(5+ yrs)</span></span>
                        <span className="text-slate-800 dark:text-white font-bold">₹{item.exp.min} - {item.exp.max} LPA</span>
                      </div>
                      <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded-full relative overflow-hidden">
                        <div
                          style={getProgressStyles(item.exp.min, item.exp.max)}
                          className={`absolute h-full rounded-full bg-gradient-to-r ${activeCategory.color}`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Expandable Notes Action */}
                  <div className="border-t border-slate-100 dark:border-slate-800/80 pt-4 mt-auto">
                    <button
                      onClick={() => setExpandedCard(isNoteExpanded ? null : index)}
                      className="flex items-center justify-between w-full text-xs font-semibold text-slate-500 hover:text-primary dark:hover:text-accent transition-colors duration-200"
                    >
                      <span className="flex items-center gap-1.5">
                        <Info size={14} className="text-slate-400" />
                        Career Insights & Modifiers
                      </span>
                      <ChevronDown
                        size={16}
                        className={`transform transition-transform duration-300 ${
                          isNoteExpanded ? 'rotate-180 text-primary dark:text-accent' : ''
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isNoteExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0, marginTop: 0 }}
                          animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                          exit={{ height: 0, opacity: 0, marginTop: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-850/60 border border-slate-100 dark:border-slate-800/60 text-2xs text-slate-550 dark:text-slate-400 leading-relaxed">
                            {item.note}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Global info attribution */}
        <div className="mt-16 text-center text-xs text-slate-400 dark:text-slate-500 max-w-2xl mx-auto border-t border-slate-200/50 dark:border-slate-800/50 pt-6">
          * CTC packages are indicative averages for general tech hubs like Bengaluru, Hyderabad, and NCR, reflecting service vs. product/GCC organization benchmarks.
        </div>

      </div>
    </section>
  );
}
