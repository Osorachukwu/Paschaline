'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import teamPhoto from '@/assets/teamPhoto-2.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center overflow-hidden bg-brand-black">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 z-0">
        <Image
          src={teamPhoto}
          alt="Paschaline Creatives and Consult Team in session"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        
        {/* OVERLAY GRADIENTS FOR READABILITY */}
        {/* Base dark tint */}
        <div className="absolute inset-0 bg-black/60 z-10" />
        
        {/* Directional gradient to add depth and focus */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-black/50 to-black/70 z-10" />
      </div>

      {/* HERO CONTENT OVERLAY */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 text-center text-white space-y-8">
        
        {/* BADGE */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg" data-aos="fade-down">
          <Sparkles className="w-4 h-4 text-brand-blue" />
          <span>Strategic Consulting & Youth Mentorship</span>
        </div>

        {/* MAIN HEADLINE */}
        <h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Crafting High-Impact <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
            Corporate & Academic Solutions
          </span>
        </h1>

        {/* SUBTITLE */}
        <p 
          className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed font-normal"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          We assist corporate brands, entrepreneurs, and global scholarship applicants with tailored SOPs, corporate proposals, grant writing, and strategy consulting.
        </p>

        {/* FEATURE HIGHLIGHTS */}
        <div 
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-zinc-300 pt-2"
          data-aos="fade-up"
          data-aos-delay="250"
        >
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>Tailored Proposals & SOPs</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>98%+ Success Rate</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-brand-blue" />
            <span>Youth Empowerment Mentorship</span>
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-blue hover:bg-blue-600 text-white font-bold text-sm sm:text-base transition-all duration-200 shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="#services"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold text-sm sm:text-base border border-white/20 transition-all duration-200 flex items-center justify-center active:scale-[0.98]"
          >
            Explore Services
          </Link>
        </div>

      </div>

      {/* BOTTOM ACCENT GRADIENT BAR */}
      <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent z-20 opacity-80" />

    </section>
  );
};

export default Hero;