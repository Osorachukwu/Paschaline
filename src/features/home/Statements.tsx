'use client';

import React from 'react';
import Image from 'next/image';
import teamPhoto from '@/assets/teamPhoto-1.jpg';
import { 
  FileCode, 
  Mail, 
  FileText, 
  Presentation, 
  Coins, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

interface DocumentService {
  icon: React.ElementType;
  title: string;
  badge: string;
  description: string;
}

const DOCUMENT_SERVICES: DocumentService[] = [
  {
    icon: FileCode,
    title: 'Statement of Purpose (SOP)',
    badge: 'Academic & Admissions',
    description: 'Let our experts help you articulate your academic milestones and career goals in a compelling, high-converting narrative.',
  },
  {
    icon: Mail,
    title: 'Letters of Intent (LOIs)',
    badge: 'Executive & Academic',
    description: 'Make a lasting impression with a tailored letter of intent that clearly conveys your objectives and core value proposition.',
  },
  {
    icon: FileText,
    title: 'Corporate Memos & SOPs',
    badge: 'Internal Operations',
    description: 'Streamline enterprise communication with polished memos and operational manuals that align your entire team.',
  },
  {
    icon: Presentation,
    title: 'Investor Pitch Decks',
    badge: 'Venture & Capital',
    description: 'Captivate investors and stakeholders with visually compelling pitch deck copy structured to showcase venture ROI.',
  },
  {
    icon: Coins,
    title: 'Institutional Grant Proposals',
    badge: 'Funding & NGOs',
    description: 'Maximize funding outcomes with meticulously researched proposals aligned with donor metrics and mission goals.',
  },
];

export const Statements: React.FC = () => {
  return (
    <section className="py-16 bg-white border-t border-zinc-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADER SECTION */}
        <div className="mb-12 max-w-2xl" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 text-brand-blue border border-blue-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Document Editorial Excellence</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-brand-black tracking-tight">
            Key Corporate & Academic <span className="text-gradient-blue">Deliverables</span>
          </h3>
          <p className="text-zinc-600 text-sm mt-2">
            Every document is engineered from scratch by domain experts to meet strict institutional standards.
          </p>
        </div>

        {/* TWO-COLUMN CONTENT GRID */}
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          
          {/* COLUMN 1: DOCUMENT SERVICES LIST */}
          <div className="lg:col-span-7 space-y-4" data-aos="fade-right">
            {DOCUMENT_SERVICES.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="p-4 sm:p-5 rounded-2xl bg-zinc-50 border border-zinc-200/80 hover:border-brand-blue/40 hover:bg-white hover:shadow-md transition-all duration-300 flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-brand-black group-hover:text-brand-blue transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-semibold text-zinc-500 bg-zinc-200/60 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* COLUMN 2: TEAM VISUAL SHOWCASE */}
          <div className="lg:col-span-5" data-aos="fade-left">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* IMAGE WRAPPER WITH DECORATIVE FRAME */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-brand-blue shadow-2xl bg-zinc-900">
                <div className="relative h-[360px] sm:h-[460px] w-full">
                  <Image
                    src={teamPhoto}
                    alt="Paschaline's Consult Strategy & Writing Team"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-brand-black/20 to-transparent" />
                </div>

                {/* OVERLAY BADGE */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-brand-black/85 backdrop-blur-md border border-zinc-800 text-white space-y-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-brand-blue" />
                    <p className="text-xs font-bold text-white">Multi-Tiered Review Guarantee</p>
                  </div>
                  <p className="text-[11px] text-zinc-400">
                    Our editorial team performs thorough research, structural editing, and tone calibration for every piece.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Statements;