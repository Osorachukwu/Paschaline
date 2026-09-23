'use client';

import { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: 'Paschaline\'s Consult helped us turn a complicated business idea into a story investors could understand and act on.',
    name: 'Founder, growth-stage venture',
    category: 'Business advisory',
  },
  {
    quote: 'The work gave me language for the value I had been creating all along. My CV finally reflected the level of work I was ready for.',
    name: 'Senior professional, career transition',
    category: 'Talent acceleration',
  },
  {
    quote: 'We moved from scattered assumptions to a model that made our next funding and operating decisions much clearer.',
    name: 'Managing director, expanding enterprise',
    category: 'Financial modeling',
  },
];

export default function Testimonials() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % TESTIMONIALS.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, []);

  const testimonial = TESTIMONIALS[active];
  const move = (direction: number) => setActive((current) => (current + direction + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="bg-white py-24" aria-labelledby="testimonials-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="eyebrow text-amber-700">Client perspective</p>
          <h2 id="testimonials-title" className="mt-4 max-w-sm font-display text-4xl leading-tight text-slate-900 sm:text-5xl">The work should make the next move clearer.</h2>
          <div className="mt-8 flex items-center gap-3">
            <button type="button" onClick={() => move(-1)} aria-label="Previous testimonial" className="flex h-11 w-11 items-center justify-center border border-slate-300 text-slate-900 transition hover:border-amber-600 hover:text-amber-700"><ArrowLeft className="h-4 w-4" /></button>
            <button type="button" onClick={() => move(1)} aria-label="Next testimonial" className="flex h-11 w-11 items-center justify-center border border-slate-300 text-slate-900 transition hover:border-amber-600 hover:text-amber-700"><ArrowRight className="h-4 w-4" /></button>
            <span className="ml-2 text-xs font-bold tracking-[0.2em] text-slate-400">0{active + 1} / 0{TESTIMONIALS.length}</span>
          </div>
        </div>
        <div className="relative min-h-[300px] border border-slate-200 bg-[#faf8f3] p-8 sm:p-12">
          <Quote className="h-10 w-10 text-amber-600" />
          <blockquote className="mt-8 max-w-3xl font-display text-3xl leading-tight text-slate-900 sm:text-4xl">&ldquo;{testimonial.quote}&rdquo;</blockquote>
          <div className="mt-10 flex flex-col gap-1 border-t border-slate-200 pt-5 sm:flex-row sm:items-center sm:justify-between"><cite className="not-italic text-sm font-bold text-slate-900">{testimonial.name}</cite><span className="eyebrow text-amber-700">{testimonial.category}</span></div>
        </div>
      </div>
    </section>
  );
}
