import { BarChart3, FileText, LineChart, Linkedin } from 'lucide-react';

const SAMPLES = [
  { icon: FileText, label: 'Investor narrative', title: 'Pitch deck structure', description: 'A clear problem, market, moat, and ask sequence built for investor attention.' },
  { icon: BarChart3, label: 'Financial clarity', title: 'Model dashboard', description: 'Integrated assumptions, cash flow visibility, and decision-ready scenario planning.' },
  { icon: Linkedin, label: 'Career positioning', title: 'Profile transformation', description: 'A before-and-after example that turns responsibilities into measurable outcomes.' },
  { icon: LineChart, label: 'Strategic planning', title: 'Execution roadmap', description: 'A practical operating view connecting priorities, owners, measures, and timing.' },
];

export default function SampleShowcase() {
  return (
    <section className="bg-[#faf8f3] py-20" id="showcase">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-10 md:flex-row md:items-end"><div><p className="eyebrow text-amber-700">Sample showcase</p><h2 className="mt-3 max-w-2xl font-display text-4xl leading-tight text-slate-900 sm:text-5xl">The standard is visible in the work.</h2></div><p className="max-w-sm text-sm leading-6 text-slate-600">Anonymized examples of the outputs we use to turn strategic ambiguity into an asset people can act on.</p></div>
        <div className="mt-10 grid gap-px overflow-hidden border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-4">{SAMPLES.map(({ icon: Icon, label, title, description }) => <article key={title} className="bg-white p-6 transition hover:bg-slate-900 hover:text-white"><Icon className="h-7 w-7 text-amber-600" /><p className="mt-12 text-[11px] font-extrabold uppercase tracking-[0.2em] text-amber-700">{label}</p><h3 className="mt-3 text-xl font-bold">{title}</h3><p className="mt-3 text-sm leading-6 text-slate-600 transition group-hover:text-slate-300">{description}</p><div className="mt-8 h-1 w-12 bg-amber-500" /></article>)}</div>
      </div>
    </section>
  );
}
