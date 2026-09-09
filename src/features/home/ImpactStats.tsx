'use client';

import React from 'react';
import { LineChart, Briefcase, Handshake, Sparkles, Award } from 'lucide-react';

interface StatItem {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
  badge: string;
}

const STATS_DATA: StatItem[] = [
  {
    icon: LineChart,
    value: '30M+',
    label: 'Global Demand by 2030',
    description: 'Projected global market demand for skilled technical and business content writers.',
    badge: 'Industry Outlook',
  },
  {
    icon: Briefcase,
    value: '85%',
    label: 'Interview & Offer Rate',
    description: 'Success rate for job seekers applying with our executive-curated CVs & profiles.',
    badge: 'Career Mobility',
  },
  {
    icon: Handshake,
    value: '93%',
    label: 'Grant Proposal Win Rate',
    description: 'Secured funding conversion rate for institutional and organizational grant submissions.',
    badge: 'Funding Success',
  },
];

export const ImpactStats: React.FC = () => {
  return (
    <section className="py-16 bg-zinc-50 border-y border-zinc-200/80 relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT FEATURE CARD: BRAND PROOF HEADLINE */}
          <div 
            className="lg:col-span-4 bg-brand-black text-white p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden shadow-xl"
            data-aos="fade-right"
          >
            {/* GRADIENT OVERLAY ACCENT */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-brand-blue/20 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4 relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-brand-blue/20 border border-brand-blue/40 text-blue-300">
                <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                <span>Proven Impact Record</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black leading-tight tracking-tight">
                Empowering Thousands of Graduates & Organizations Nationwide.
              </h2>

              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                We combine strategic commercial narrative design with active career guidance to unlock rewarding pathways in writing and international mobility.
              </p>
            </div>

            <div className="pt-8 border-t border-zinc-800/80 flex items-center gap-3 relative z-10">
              <div className="p-2 rounded-lg bg-blue-600/20 text-brand-blue border border-blue-500/30">
                <Award className="w-5 h-5" />
              </div>
              <span className="text-xs font-semibold text-zinc-300">
                Verified Success Metrics Across Corporate & Impact Wings
              </span>
            </div>
          </div>

          {/* RIGHT GRID: 3 METRIC CARDS */}
          <div 
            className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            {STATS_DATA.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-zinc-200/80 hover:shadow-xl hover:border-brand-blue/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    
                    {/* CARD HEADER ICON & BADGE */}
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center transition-colors group-hover:bg-brand-blue group-hover:text-white">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 bg-zinc-100 px-2.5 py-1 rounded-md">
                        {item.badge}
                      </span>
                    </div>

                    {/* METRIC VALUE & LABEL */}
                    <div>
                      <h3 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight group-hover:text-brand-blue transition-colors">
                        {item.value}
                      </h3>
                      <p className="text-sm font-bold text-zinc-800 mt-1">
                        {item.label}
                      </p>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-xs text-zinc-500 leading-relaxed">
                      {item.description}
                    </p>

                  </div>

                  {/* BOTTOM ACCENT BAR */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between">
                    <span className="text-[11px] font-semibold text-brand-blue">
                      Paschaline Benchmark
                    </span>
                    <span className="w-2 h-2 rounded-full bg-brand-blue animate-pulse" />
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default ImpactStats;