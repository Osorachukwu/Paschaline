'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileText, 
  GraduationCap, 
  HandCoins, 
  Award, 
  ScrollText, 
  ArrowRight, 
  Sparkles 
} from 'lucide-react';

interface ServiceItem {
  icon: React.ElementType;
  title: string;
  category: string;
  description: string;
  keywords: string[];
}

const SERVICES_DATA: ServiceItem[] = [
  {
    icon: FileText,
    title: "Executive & Professional Writing",
    category: "Corporate & Individual",
    description: "Expertly crafted executive CVs, tailored cover letters, high-stakes personal statements, letters of intent, and comprehensive business plans.",
    keywords: ["Executive CVs", "Personal Statements", "Business Plans"],
  },
  {
    icon: GraduationCap,
    title: "Academic Writing & Research",
    category: "Higher Education",
    description: "Rigorous, high-quality research support for master's and doctoral theses, academic papers, peer-reviewed articles, and research dissertations.",
    keywords: ["Theses & Dissertations", "Research Papers", "Academic Editing"],
  },
  {
    icon: HandCoins,
    title: "Institutional Grant Proposal Writing",
    category: "Funding & Enterprise",
    description: "Data-driven, well-structured grant proposals designed to maximize funding conversion rates for NGOs, startups, and institutions.",
    keywords: ["Grant Proposals", "Donor Pitch Decks", "Funding Strategy"],
  },
  {
    icon: Award,
    title: "Global Scholarship Applications",
    category: "Impact & Mobility",
    description: "End-to-end guidance and compelling essay structuring for international university admissions and prestigious global scholarship programs.",
    keywords: ["Global Mobility", "Admission Essays", "Scholarship SOPs"],
  },
  {
    icon: ScrollText,
    title: "Corporate Standard Operating Procedures",
    category: "Business Operations",
    description: "Customized corporate SOPs, policy documentation, and operational manuals that streamline enterprise workflows and compliance.",
    keywords: ["Corporate SOPs", "Policy Manuals", "Process Mapping"],
  },
];

export const OurServices: React.FC = () => {
  return (
    <section className="py-20 bg-white relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-100">
            <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
            <span>Tailored Documentation & Strategic Advisory</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight">
            Our Business & Academic <span className="text-gradient-blue">Writing Solutions</span>
          </h2>

          <p className="text-zinc-600 text-base leading-relaxed">
            We deliver meticulously researched, persuasive, and custom-written documents that build credibility, secure funding, and advance international careers.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-7 border border-zinc-200/90 shadow-sm hover:shadow-xl hover:border-brand-blue/30 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  
                  {/* ICON & CATEGORY BADGE */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-zinc-500 bg-zinc-100 px-3 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>

                  {/* TITLE */}
                  <h3 className="text-xl font-bold text-brand-black tracking-tight group-hover:text-brand-blue transition-colors">
                    {service.title}
                  </h3>

                  {/* DESCRIPTION */}
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* KEYWORD TAGS */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {service.keywords.map((kw, idx) => (
                      <span key={idx} className="text-[10px] font-medium text-zinc-500 bg-zinc-50 border border-zinc-100 px-2 py-0.5 rounded">
                        #{kw}
                      </span>
                    ))}
                  </div>

                </div>

                {/* DIRECT ACTION LINK */}
                <div className="pt-6 mt-6 border-t border-zinc-100">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-blue-700 transition-colors group/link"
                  >
                    <span>Request Service Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-1" />
                  </Link>
                </div>

              </div>
            );
          })}

          {/* CALLOUT CARD IN GRID */}
          <div className="bg-brand-black text-white rounded-2xl p-7 border border-zinc-800 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-brand-blue/20 rounded-full blur-2xl pointer-events-none" />
            
            <div className="space-y-4 relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-blue bg-blue-950/60 border border-blue-800/40 px-2.5 py-1 rounded-md">
                Custom Requirements?
              </span>
              <h3 className="text-xl font-bold tracking-tight">
                Need a Bespoke Corporate Document Package?
              </h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Contact our editorial team directly for tailored institutional partnerships, corporate policy drafting, or large-scale document reviews.
              </p>
            </div>

            <div className="pt-6 relative z-10">
              <Link
                href="/contact"
                className="btn-secondary w-full text-center text-xs font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2"
              >
                <span>Speak with Lead Consultant</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* MEDIA SHOWCASE / BRAND VIDEO SECTION */}
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-zinc-900 relative" data-aos="fade-up">
          <div className="p-4 bg-brand-black border-b border-zinc-800 flex items-center justify-between text-xs text-zinc-400">
            <span className="font-semibold text-zinc-200 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Paschaline&apos;s Consult Spotlight
            </span>
            <span className="hidden sm:inline">Empowerment & Excellence</span>
          </div>
          
          <div className="relative aspect-video w-full bg-black">
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              controls
              playsInline
            >
              <source
                src="/WhatsApp Video 2025-08-05 at 21.57.35_70fa0976.mp4"
                type="video/mp4"
              />
              Your browser does not support video playback.
            </video>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OurServices;