import Link from 'next/link';
import ServiceDirectory, { TALENT_SERVICES } from '@/components/ServiceDirectory';

export default function TalentAccelerationPage() {
  return <><section className="page-offset bg-slate-900 py-20 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="eyebrow text-amber-400">For emerging professionals</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Find your unique advantage. Own your career path.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Build a clear professional position, strengthen your application assets, and move through your next career decision with evidence and direction.</p><Link href="/contact" className="btn-secondary mt-9 inline-flex">Start a pathway conversation</Link></div></section><ServiceDirectory title="Career assets that make your value legible." intro="We help ambitious professionals translate strengths and experience into a credible pathway, a stronger profile, and a focused 90-day plan." services={TALENT_SERVICES} /></>;
}
