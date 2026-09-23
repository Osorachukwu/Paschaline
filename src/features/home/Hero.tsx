import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import teamPhoto from '@/assets/teamPhoto-3.jpg';

export default function Hero() {
   return (
     <section className="hero-grid relative overflow-hidden bg-slate-900 text-white">
       <Image
         src={teamPhoto}
         alt="Paschaline's Consult team collaborating"
         fill
         priority
         sizes="100vw"
         className="object-cover object-center"
       />
       <div className="absolute inset-0 bg-slate-800/25" />
       <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-900/75 to-slate-900/50" />
       <div className="mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-32">
         <div className="relative z-10 max-w-3xl" data-aos="fade-up">
           <p className="eyebrow text-amber-400">Paschaline&apos;s Consult</p>
           <h1 className="mt-6 font-display text-5xl leading-[1.02] sm:text-7xl">Strategic clarity. <em className="text-amber-400">Built for execution.</em></h1>
           <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">Premium advisory, executive communication, and financial modeling designed to sharpen strategy, secure growth, and position your brand for sustainable success.</p>
           <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#contact'} className="btn-secondary inline-flex items-center justify-center gap-2">Schedule a strategic consultation <ArrowUpRight className="h-4 w-4" /></a><Link href="#practice-areas" className="btn-outline border-slate-500 text-white hover:bg-white/10">Explore advisory services</Link></div>
           <div className="mt-12 grid gap-4 border-t border-slate-700 pt-6 text-sm text-slate-300 sm:grid-cols-3"><span className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" />Executive-level rigour</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" />Data-backed strategy</span><span className="flex items-center gap-2"><Check className="h-4 w-4 text-amber-400" />Clear growth pathways</span></div>
         </div>
         <div className="relative z-10 border-l border-amber-500/40 pl-8 lg:pl-12" data-aos="fade-left"><p className="font-display text-7xl text-amber-400 sm:text-8xl">02</p><p className="mt-3 max-w-xs text-2xl leading-tight text-white">Practice areas. One standard: work that moves the decision forward.</p><p className="mt-6 max-w-sm text-sm leading-6 text-slate-400">For business leaders, growing organizations, ambitious founders, and early-career professionals.</p></div>
       </div>
     </section>
   );
}