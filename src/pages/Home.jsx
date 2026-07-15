import React from 'react';
import Hero from '../components/sections/Hero';
import TechMarquee from '../components/TechMarquee';
import WhyChooseUs from '../components/sections/WhyChooseUs';
import WhySkillsMatter from '../components/sections/WhySkillsMatter';
import CTA from '../components/sections/CTA';

export default function Home() {
  return (
    <>
      <Hero />
      <TechMarquee />
      <WhyChooseUs />
      <WhySkillsMatter />
      <CTA />
    </>
  );
}
