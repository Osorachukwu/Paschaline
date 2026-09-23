import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';

export type ServiceGroup = { number: string; title: string; description: string; items: string[] };

export const BUSINESS_SERVICES: ServiceGroup[] = [
  { number: '01', title: 'Pitch deck building & strategic design', description: 'Investor presentations tailored to VC, angel, and institutional standards, with narrative mapping, market sizing, moat articulation, and graphic design.', items: ['Financial narrative mapping', 'Market sizing and competition', 'Investor-ready presentation design'] },
  { number: '02', title: 'Pitch deck review & readiness audit', description: 'Rigorous line-by-line feedback on your existing deck, covering strategic storytelling, visual polish, valuation presentation, and a live review session.', items: ['Deck audit', 'Valuation presentation', '45-minute live review'] },
  { number: '03', title: '3-statement modeling & valuation', description: 'Dynamic, audit-ready models for execution and fundraising with integrated statements, cap tables, and valuation roadmaps.', items: ['Income statement', 'Balance sheet and cash flow', 'Cap table forecasting'] },
  { number: '04', title: 'Business plans & investor teasers', description: 'Data-driven business plans for banks, grant boards, and equity investors, covering unit economics, market research, and execution roadmaps.', items: ['Unit economics', 'Market research', 'Operating roadmap'] },
  { number: '05', title: 'Grant applications & proposal management', description: 'High-converting proposals for nonprofits, SMEs, and social enterprises, from opportunity matching through budget alignment and submission support.', items: ['Opportunity matching', 'Narrative formulation', 'Budget alignment'] },
  { number: '06', title: 'Strategic corporate copywriting', description: 'High-converting messaging for landing pages, corporate profiles, sales collateral, and investor communications.', items: ['Corporate profiles', 'Sales collateral', 'Investor communications'] },
];

export const TALENT_SERVICES: ServiceGroup[] = [
  { number: '01', title: 'Pathway discovery & career mentorship', description: 'Guided sessions to identify unique strengths, market positioning, and career trajectories, ending in a 90-day execution roadmap.', items: ['1-on-1 discovery calls', 'Skill-gap analysis', '90-day roadmap'] },
  { number: '02', title: 'Executive & professional CV engineering', description: 'ATS-optimized, outcome-focused resume re-engineering that highlights measurable business impact rather than job descriptions.', items: ['ATS optimization', 'Achievement reframing', 'Role-specific positioning'] },
  { number: '03', title: 'LinkedIn optimization & personal branding', description: 'Transform a static digital profile into an active inbound opportunity magnet for recruiters, clients, and strategic partners.', items: ['Profile architecture', 'Positioning narrative', 'Content direction'] },
  { number: '04', title: 'Cover letters & high-stakes applications', description: 'Tailored, persuasive narratives for competitive job applications, fellowships, and career advancement programs.', items: ['Application narratives', 'Fellowship submissions', 'Career advancement copy'] },
];

export default function ServiceDirectory({ title, intro, services }: { title: string; intro: string; services: ServiceGroup[] }) {
  return <section className="bg-white py-20"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="max-w-3xl"><p className="eyebrow text-amber-700">What we deliver</p><h2 className="mt-4 font-display text-4xl leading-tight text-slate-900 sm:text-5xl">{title}</h2><p className="mt-5 text-lg leading-8 text-slate-600">{intro}</p></div><div className="mt-14 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-2">{services.map((service) => <article key={service.number} className="bg-white p-7 sm:p-9"><div className="flex items-start justify-between"><span className="font-display text-4xl text-amber-600">{service.number}</span><Link href="/contact" aria-label={`Discuss ${service.title}`} className="text-slate-900 hover:text-amber-700"><ArrowUpRight className="h-5 w-5" /></Link></div><h3 className="mt-8 max-w-md text-2xl font-bold text-slate-900">{service.title}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p><ul className="mt-7 space-y-3 border-t border-slate-200 pt-5">{service.items.map((item) => <li key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700"><Check className="h-4 w-4 text-amber-600" />{item}</li>)}</ul></article>)}</div></div></section>;
}
