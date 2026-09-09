'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import paschalinePhoto from '@/assets/look.png';
import { ArrowRight, CheckCircle2, Award, Users, TrendingUp, Sparkles } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 hero-brand-pattern text-white overflow-hidden">
      
      {/* BACKGROUND GRAPHIC ACCENTS */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* COLUMN 1: HIGH-IMPACT HEADLINE & CALL TO ACTION */}
          <div className="lg:col-span-7 space-y-6" data-aos="fade-right">
            
            {/* PILL BADGE */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-brand-blue/10 border border-brand-blue/30 text-blue-400">
              <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
              <span>From Ideation to Exit — Premium Writing Consultancy</span>
            </div>

            {/* MAIN HEADLINE */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              Transforming Ideas Into <span className="text-gradient-blue">Articles of Change.</span>
            </h1>

            {/* VALUE PROPOSITION SUBTITLE */}
            <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed max-w-2xl">
              At Paschaline&apos;s Consult, we craft high-stakes corporate documents, capital-winning proposals, and persuasive statements of purpose that win grants, secure investments, and open global opportunities.
            </p>

            {/* HIGHLIGHTED TRUST POINTS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-zinc-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Executive CVs & Personal Statements</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Grant Proposals & Investor Pitch Decks</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Corporate Standard Operating Procedures</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <span>Global Scholarship Application Support</span>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="pt-4 flex flex-col sm:flex-row gap-4">
              <Link
                href="#contact"
                className="btn-secondary text-center text-sm font-bold flex items-center justify-center gap-2 py-3.5 px-8 rounded-xl group shadow-lg shadow-blue-600/25"
              >
                <span>Request Document Strategy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="#about"
                className="btn-outline border-zinc-700 text-zinc-200 hover:bg-zinc-800/80 hover:text-white text-center text-sm font-semibold py-3.5 px-8 rounded-xl transition-all"
              >
                Explore Impact Wing
              </Link>
            </div>

            {/* KEY METRICS / STATS STRIP */}
            <div className="pt-8 mt-6 border-t border-zinc-800/80 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-brand-blue">93%</p>
                <p className="text-xs text-zinc-400 font-medium">Grant Proposal Success</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">85%</p>
                <p className="text-xs text-zinc-400 font-medium">Offer Letters via CVs</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-blue-400">300K</p>
                <p className="text-xs text-zinc-400 font-medium">Youth Target by 2050</p>
              </div>
            </div>

          </div>

          {/* COLUMN 2: FOUNDER BRANDING / HERO VISUAL & QUICK INQUIRY CARD */}
          <div className="lg:col-span-5 relative" data-aos="fade-left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* IMAGE FRAME WITH LOGO COLOR ACCENTS */}
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
                <div className="relative h-[380px] sm:h-[440px] w-full">
                  <Image
                    src={paschalinePhoto}
                    alt="Toochukwu Paschaline - Founder & CEO"
                    fill
                    priority
                    className="object-cover object-top filter brightness-95 hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent" />
                </div>

                {/* OVERLAY BADGE ON PHOTO */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-black/85 backdrop-blur-md border border-zinc-800/80 text-white space-y-1">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-bold text-white">Toochukwu Paschaline</p>
                    <span className="text-[10px] font-bold text-brand-blue bg-blue-900/40 border border-blue-500/30 px-2 py-0.5 rounded-md">
                      Founder
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400">
                    Lead Consultant & Pioneer, DIDI / Paschaline&apos;s Consult
                  </p>
                </div>
              </div>

              {/* FLOATING PROOF CARD */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3 p-4 bg-white text-zinc-900 rounded-xl shadow-2xl border border-zinc-100 max-w-xs">
                <div className="p-2.5 rounded-lg bg-blue-50 text-brand-blue flex-shrink-0">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-black">Proven Track Record</p>
                  <p className="text-[11px] text-zinc-600">Thousands of graduates & enterprise partners served</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;