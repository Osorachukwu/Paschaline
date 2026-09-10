'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  Heart
} from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const QUICK_LINKS: NavLink[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Why Choose Us', href: '/#why-us' },
  { label: 'Key Deliverables', href: '/services' },
  { label: 'Social Impact', href: '/#impact' },
  { label: 'Contact', href: '/contact' },
];

const SERVICES_LINKS: NavLink[] = [
  { label: 'Statement of Purpose (SOP)', href: '/services' },
  { label: 'Letters of Intent (LOI)', href: '/services' },
  { label: 'Grant Proposals', href: '/services' },
  { label: 'Investor Pitch Decks', href: '/services' },
  { label: 'Corporate SOPs & Memos', href: '/services' },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-white border-t border-zinc-800 relative overflow-hidden">
      
      {/* TOP SECTION: BRAND & MULTI-COLUMN NAVIGATION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* COLUMN 1: BRAND SUMMARY & SOCIAL LINKS */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-950/80 border border-blue-800/40 text-brand-blue">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Paschaline&apos;s Consult</span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                Empowering Enterprise & <br />
                <span className="text-gradient-blue">Bridging Opportunity Gaps.</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
                A dual-wing consultancy crafting high-converting corporate deliverables while mentoring underserved African youth toward global scholarship success.
              </p>
            </div>

            {/* SOCIAL MEDIA LINKS */}
            <div className="flex items-center gap-3">
              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/ikwukapaschal.adaobi?mibextid=ZbWKwL"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>

              {/* TWITTER / X */}
              <a
                href="https://x.com/PConsult186937?t=wAJvC8zHDlOcFb8B91Y3OA&s=09a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-brand-blue hover:border-brand-blue transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.link/ptf2t5"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.572-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
            </div>
          </div>

          {/* COLUMN 2: QUICK LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Navigation
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {QUICK_LINKS.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="hover:text-brand-blue transition-colors flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: SERVICES LINKS */}
          <div className="lg:col-span-2 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Core Deliverables
            </p>
            <ul className="space-y-2.5 text-xs text-zinc-400">
              {SERVICES_LINKS.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="hover:text-brand-blue transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 4: DIRECT CONTACT CONTACT INFO */}
          <div className="lg:col-span-3 space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Reach Us Directly
            </p>
            <ul className="space-y-3 text-xs text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <span>No 6 Robinson Street, Adekunle Mile 12, Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                <a href="tel:+2348135510975" className="hover:text-white transition-colors">+234 813 551 0975</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                <a href="mailto:paschalinescreativesandconsult@gmail.com" className="hover:text-white transition-colors break-all">
                  paschalinescreativesandconsult@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* BOTTOM SECTION: COPYRIGHT & DEVELOPER ATTRIBUTION */}
      <div className="border-t border-zinc-800/80 bg-zinc-950 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center sm:text-left">
          
          <p>
            &copy; {currentYear} Paschaline Creatives and Consult. All rights reserved.
          </p>

          <div className="flex items-center gap-1">
            <span>Designed and Built by</span>
            <a 
              href="https://osorachukwu.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-brand-blue hover:text-white font-semibold underline underline-offset-2 transition-colors inline-flex items-center gap-0.5 pl-1"
            >
              <span>Osorachukwu</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
};

export default Footer;