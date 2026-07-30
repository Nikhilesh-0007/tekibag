import React from 'react';
import Hero from '../components/sections/Hero';
import TechMarquee from '../components/TechMarquee';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import SalaryTrends from '../components/sections/SalaryTrends';
import WhySkillsMatter from '../components/sections/WhySkillsMatter';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhyChooseUs />
      <SalaryTrends />
      <WhySkillsMatter />
      <CTA />
    </>
  );
}
