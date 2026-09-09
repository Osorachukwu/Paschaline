'use client';

import React, { useState } from 'react';
import Statements from '@/features/home/Statements';
import { 
  Building2, 
  HeartHandshake, 
  ChevronDown, 
  Target, 
  Lightbulb, 
  GraduationCap, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface TimelineStrategy {
  step: string;
  title: string;
  year: string;
  description: string;
}

const TIMELINE_DATA: TimelineStrategy[] = [
  {
    step: '01',
    year: '2021',
    title: 'The Genesis (DIDI)',
    description: 'In 2021, a digital institute named DIDI (De-Influencers Digital Instructions) was founded by Toochukwu Paschaline to empower individuals with digital skills, education, and technical literacy.',
  },
  {
    step: '02',
    year: '2022',
    title: 'Evolution into Consultancy',
    description: 'Observing that businesses and academic scholars struggled to communicate high-stakes ideas, founder Paschaline pivoted DIDI toward elite business and academic writing consultancy.',
  },
  {
    step: '03',
    year: '2022 - Present',
    title: 'Our Core Mission',
    description: "Paschaline's Consult was formally launched with a dual mandate: enabling enterprise growth through strategy while helping underserved talent transform their stories into scholarships.",
  },
  {
    step: '04',
    year: '2026 & Beyond',
    title: 'Driving Global Impact',
    description: 'Evolving into a trusted global advisory partner. We continue bridging opportunity gaps for 300,000 Nigerian youth by 2050 through strategic partner funding and writing excellence.',
  },
];

interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export const AboutUs: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>('challenge');

  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  const ACCORDION_DATA: AccordionItem[] = [
    {
      id: 'challenge',
      title: 'The Socio-Economic Challenge',
      content: (
        <p className="text-sm text-zinc-600 leading-relaxed">
          In many underserved African communities, limited access to higher education drives severe cycles of vulnerability. Young women face heightened risks of harassment and exploitation, while young men are vulnerable to cultism and illegal activities. Without higher education or writing literacy, talented youth remain trapped in systemic poverty.
        </p>
      ),
    },
    {
      id: 'solution',
      title: 'Our Targeted Intervention',
      content: (
        <p className="text-sm text-zinc-600 leading-relaxed">
          At Paschaline&apos;s Consult, we bridge this gap by helping youth articulate their personal narratives, academic merits, and scholarship applications to global funding bodies and institutions capable of sponsoring their education.
        </p>
      ),
    },
    {
      id: 'initiatives',
      title: 'Key Social Impact Initiatives',
      content: (
        <ul className="space-y-2 text-sm text-zinc-600 list-disc list-inside">
          <li><strong>Monthly Scholarship Guidance:</strong> Monitoring global admissions and assisting underserved candidates with document applications.</li>
          <li><strong>Scholarship Bootcamps:</strong> Skills workshops and prep programs preparing candidates for university applications.</li>
          <li><strong>Mentorship & Narrative Writing:</strong> One-on-one editorial coaching for statements of purpose and scholarship essays.</li>
        </ul>
      ),
    },
    {
      id: 'impact',
      title: 'Our 2050 Vision & Impact Goal',
      content: (
        <p className="text-sm text-zinc-600 leading-relaxed">
          Our goal is to directly bridge the opportunity divide for <strong>300,000 Nigerian youth by 2050</strong> through local and international grant partnerships, fostering equitable socio-economic development across Africa.
        </p>
      ),
    },
  ];

  return (
    <section className="bg-zinc-50 border-t border-zinc-200" id="about">
      
      {/* 1. BRAND PLATFORM INTRODUCTION */}
      <div className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: DUAL PLATFORM OVERVIEW */}
          <div className="lg:col-span-6 space-y-6" data-aos="fade-right">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-brand-blue">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight leading-tight">
              A Dual Platform Driving <span className="text-gradient-blue">Commercial Excellence & Social Change.</span>
            </h2>

            <div className="space-y-4 text-zinc-600 text-sm sm:text-base leading-relaxed">
              <p>
                <strong>Paschaline&apos;s Consult</strong> operates on a dual-wing model designed for maximum effectiveness. Our <strong>Business Wing</strong> crafts high-converting corporate proposals, executive CVs, SOPs, and investor pitch decks that power commercial expansion.
              </p>
              <p>
                Simultaneously, our <strong>Impact Wing</strong> empowers underserved African talent by providing mentorship, application support, and scholarship guidance—enabling driven youth to access quality higher education globally.
              </p>
            </div>

            {/* TWO WINGS HIGHLIGHT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center">
                  <Building2 className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-brand-black">Commercial Strategy Wing</h3>
                <p className="text-xs text-zinc-500">Corporate proposals, SOPs, pitch decks, and executive documents.</p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h3 className="text-sm font-bold text-brand-black">Youth Social Impact Wing</h3>
                <p className="text-xs text-zinc-500">Scholarship mentorship and educational access for 300k youth by 2050.</p>
              </div>
            </div>

          </div>

          {/* RIGHT: ACCORDION INTERACTIVE INTERVENTION PLAN */}
          <div className="lg:col-span-6 space-y-3" data-aos="fade-left">
            <h3 className="text-xl font-bold text-brand-black mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-brand-blue" />
              <span>Addressing the Educational & Opportunity Gap</span>
            </h3>

            {ACCORDION_DATA.map((item) => {
              const isOpen = openAccordion === item.id;
              return (
                <div 
                  key={item.id}
                  className="bg-white border border-zinc-200 rounded-xl overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full p-4 text-left font-bold text-sm sm:text-base text-brand-black flex items-center justify-between hover:bg-zinc-50 transition-colors"
                  >
                    <span>{item.title}</span>
                    <ChevronDown className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${isOpen ? 'rotate-180 text-brand-blue' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-4 pt-0 border-t border-zinc-100 bg-zinc-50/50">
                      {item.content}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>

      {/* 2. STATEMENTS FEATURE INJECTION */}
      <Statements />

      {/* 3. BRAND GENESIS TIMELINE GRID */}
      <div className="bg-brand-black py-20 px-4 sm:px-8 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-12 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-blue bg-blue-950/60 border border-blue-800/40 px-3 py-1 rounded-full">
              Our Journey
            </span>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
              The Evolution of Paschaline&apos;s Consult
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400">
              From a digital instructional institute to an internationally recognized writing and strategy advisory firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TIMELINE_DATA.map((item, index) => (
              <div
                key={index}
                className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 flex flex-col justify-between hover:border-brand-blue/50 hover:-translate-y-1 transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black text-brand-blue bg-blue-950/80 border border-blue-800/40 px-2.5 py-1 rounded-md">
                      {item.year}
                    </span>
                    <span className="text-2xl font-black text-zinc-700 group-hover:text-zinc-500 transition-colors">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-brand-blue transition-colors">
                    {item.title}
                  </h4>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-500">
                  <span>Phase {index + 1}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-brand-blue opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutUs;