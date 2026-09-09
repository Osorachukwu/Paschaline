'use client';

import React from 'react';
import Form from './Form';
import { Mail, Phone, MapPin, Sparkles, MessageSquare } from 'lucide-react';

interface ContactItem {
  icon: React.ElementType;
  title: string;
  detail: string;
  href: string;
}

const CONTACT_DETAILS: ContactItem[] = [
  {
    icon: Phone,
    title: 'Primary Line',
    detail: '+234 813 551 0975',
    href: 'tel:+2348135510975',
  },
  {
    icon: Phone,
    title: 'Secondary Line',
    detail: '+234 802 800 5847',
    href: 'tel:+2348028005847',
  },
  {
    icon: Mail,
    title: 'Direct Email',
    detail: 'paschalinescreativesandconsult@gmail.com',
    href: 'mailto:paschalinescreativesandconsult@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Headquarters',
    detail: 'No 6 Robinson Street, Adekunle Mile 12, Lagos, Nigeria',
    href: 'https://maps.google.com/?q=No+6+Robinson+Street+Adekunle+Mile+12+Lagos+Nigeria',
  },
];

export const Contact: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-50 border-t border-zinc-200/80 relative overflow-hidden" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* LEFT COLUMN: CONTACT INFO & CHANNELS */}
          <div className="lg:col-span-5 space-y-8" data-aos="fade-up">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-brand-blue">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get In Touch</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-brand-black tracking-tight leading-tight">
                Let&apos;s Start a <span className="text-gradient-blue">Conversation</span>
              </h2>

              <p className="text-sm text-zinc-600 leading-relaxed">
                Book a free consultation, discuss custom editorial projects, or inquire about our youth scholarship programs.
              </p>
            </div>

            {/* CONTACT CARDS */}
            <div className="space-y-3">
              {CONTACT_DETAILS.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    className="p-4 rounded-xl bg-white border border-zinc-200 shadow-sm hover:border-brand-blue/50 hover:shadow-md transition-all duration-300 flex items-start gap-4 group block"
                  >
                    <div className="w-10 h-10 rounded-lg bg-blue-50 text-brand-blue flex items-center justify-center flex-shrink-0 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <div className="space-y-0.5 overflow-hidden">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400">
                        {item.title}
                      </span>
                      <p className="text-xs sm:text-sm font-semibold text-brand-black group-hover:text-brand-blue transition-colors truncate">
                        {item.detail}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* RESPONSE TIME BANNER */}
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-100 flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-brand-blue flex-shrink-0" />
              <p className="text-xs text-zinc-600 leading-relaxed">
                <strong>Fast Turnaround:</strong> Our consulting team responds to all inquiries within 24 business hours.
              </p>
            </div>

          </div>

          {/* RIGHT COLUMN: FORMSPREE INTEGRATION */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-zinc-200/80 shadow-lg" data-aos="fade-up" data-aos-delay="100">
            <Form />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;