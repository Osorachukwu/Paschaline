import Link from 'next/link';
import ServiceDirectory, { BUSINESS_SERVICES } from '@/components/ServiceDirectory';

export default function BusinessAdvisoryPage() {
  return <><section className="page-offset bg-slate-900 py-20 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="eyebrow text-amber-400">For founders & businesses</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Institutional-grade advisory for ambitious founders.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">We turn complex business ideas into fundable assets, persuasive narratives, and practical operating decisions.</p><Link href="/contact" className="btn-secondary mt-9 inline-flex">Book a strategy session</Link></div></section><ServiceDirectory title="Business assets that can stand up to scrutiny." intro="From investor presentations to integrated financial models and grant proposals, every deliverable is built for a real decision, audience, and next step." services={BUSINESS_SERVICES} /></>;
}
