import Link from 'next/link';
import { ArrowUpRight, Briefcase, FileText, LineChart, Route } from 'lucide-react';

const AREAS = [
  { icon: FileText, title: 'Executive communication & writing', text: 'Board decks, pitch decks, whitepapers, strategic proposals, executive bios, and funding documentation.', href: '/business-advisory' },
  { icon: LineChart, title: 'Financial advisory & modeling', text: '3-statement models, valuation roadmaps, cap tables, capital allocation, and unit economics.', href: '/business-advisory' },
  { icon: Briefcase, title: 'Strategic business consulting', text: 'Go-to-market strategy, process design, organizational clarity, and advisory retainers.', href: '/business-advisory' },
  { icon: Route, title: 'Talent & early-career advisory', text: 'Career route mapping, skill-gap analysis, executive resumes, LinkedIn, and interview preparation.', href: '/talent-acceleration' },
];

export default function Ourservices() {
  return <section className="bg-white py-24" id="practice-areas"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-2xl"><p className="eyebrow text-amber-700">Core practice areas</p><h2 className="mt-4 font-display text-4xl leading-tight text-slate-900 sm:text-5xl">Navigating complexity with strategic precision.</h2><p className="mt-5 text-base leading-relaxed text-slate-600">We partner with executives, founders, growing organizations, and ambitious professionals to bridge high-level vision and tactical execution.</p></div><div className="mt-12 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{AREAS.map(({ icon: Icon, title, text, href }, index) => <article key={title} className="group flex min-h-[300px] flex-col bg-white p-7"><span className="text-sm font-bold text-amber-700">0{index + 1}</span><Icon className="mt-10 h-8 w-8 text-slate-900" /><h3 className="mt-6 text-xl font-bold leading-tight text-slate-900">{title}</h3><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{text}</p><Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-amber-700">Explore area <ArrowUpRight className="h-4 w-4" /></Link></article>)}</div></div></section>;
}
