'use client';

import React from 'react';
import Image from 'next/image';
import img14 from '@/assets/gallery/img14.jpg';
import { Award, Target, ShieldCheck, Sparkles } from 'lucide-react';

interface FeatureItem {
  icon: React.ElementType;
  title: string;
  description: string;
}

const WHY_US_FEATURES: FeatureItem[] = [
  {
    icon: Award,
    title: "Proven Expertise",
    description: "Our team consists of senior writers, academic researchers, and enterprise strategists with a track record of winning corporate proposals and scholarship approvals.",
  },
  {
    icon: Target,
    title: "Bespoke Customization",
    description: "We don't use templates. Every SOP, grant application, or executive CV is custom-engineered around your unique career or institutional objectives.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    description: "Every deliverable passes multi-tiered editorial review, plagiarism screening, and alignment checks to ensure absolute precision, tone, and impact.",
  },
];

export const WhyUs: React.FC = () => {
  return (
    <section className="py-20 bg-brand-black text-white relative overflow-hidden border-t border-zinc-800">
      
      {/* BACKGROUND GRAPHIC ACCENT */}
      <div className="absolute top-1/2 -left-20 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMN 1: VALUE PROPOSITION & PILLARS */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-right">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-950/80 border border-blue-800/40 text-brand-blue">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Paschaline Advantage</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Why Choose <span className="text-gradient-blue">Paschaline&apos;s Consult?</span>
              </h2>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                Whether you are competing for international scholarships or pitching for multi-million naira institutional grants, we ensure your voice commands authority.
              </p>
            </div>

            {/* FEATURE PILLARS GRID */}
            <div className="space-y-4">
              {WHY_US_FEATURES.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div
                    key={index}
                    className="p-5 rounded-2xl bg-zinc-900/90 border border-zinc-800 hover:border-brand-blue/50 transition-all duration-300 flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-blue-950/60 border border-blue-800/40 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-base font-bold text-white group-hover:text-brand-blue transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* COLUMN 2: TEAM / GALLERY VISUAL */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="relative group">
              
              {/* BACKDROP GLOW FRAME */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-blue to-blue-600 rounded-2xl blur opacity-30 group-hover:opacity-75 transition duration-500" />

              {/* IMAGE WRAPPER */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-700 bg-zinc-900 shadow-2xl">
                <div className="relative h-[320px] sm:h-[400px] w-full">
                  <Image
                    src={img14}
                    alt="Paschaline's Consult Team in Session"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent" />
                </div>

                {/* OVERLAY BADGE */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-black/80 backdrop-blur-md border border-zinc-800">
                  <p className="text-xs font-bold text-white">Quality Assurance & Editorial Review</p>
                  <p className="text-[11px] text-zinc-400">Delivering excellence across corporate & academic writing</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;