'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const QUESTIONS = [
  { question: 'Who do you work with?', answer: 'We work with founders, business leaders, growing organizations, and ambitious professionals who need sharper strategy, stronger communication, or a clearer path forward.' },
  { question: 'What happens after I make an inquiry?', answer: 'We review your context, confirm whether the engagement is a fit, and recommend the most useful next step. You can also book a strategy session directly through the contact page.' },
  { question: 'Can you work with an existing pitch deck or CV?', answer: 'Yes. Reviews and re-engineering are core parts of our work. You can share your existing materials through the pre-session intake form so the conversation starts with useful context.' },
  { question: 'How long does an engagement take?', answer: 'Timing depends on the deliverable and its complexity. A focused review may take a few days, while a full model, business plan, or positioning project is scoped around the decision and deadline.' },
  { question: 'Do you guarantee funding, interviews, or job offers?', answer: 'No. We build stronger assets and clearer decisions; outcomes still depend on the market, the opportunity, and the actions taken after delivery.' },
  { question: 'What should I prepare for a strategy session?', answer: 'Bring the decision you are trying to make, the bottleneck you are facing, and any useful existing material. The intake form lets you upload a draft CV, pitch deck, or financial notes beforehand.' },
];

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="bg-[#faf8f3] py-24" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-8">
        <div>
          <p className="eyebrow text-amber-700">Questions, answered</p>
          <h2 id="faq-title" className="mt-4 max-w-sm font-display text-4xl leading-tight text-slate-900 sm:text-5xl">A clearer start makes better work.</h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-slate-600">Everything here is designed to make the first conversation more useful.</p>
        </div>
        <div className="border-y border-slate-200" data-faq-list>
          {QUESTIONS.map((item, index) => {
            const isOpen = open === index;
            return <div key={item.question} className="border-b border-slate-200 last:border-b-0"><button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-6 py-5 text-left text-base font-bold text-slate-900"><span>{item.question}</span><ChevronDown className={`h-5 w-5 shrink-0 text-amber-600 transition-transform ${isOpen ? 'rotate-180' : ''}`} /></button>{isOpen && <p className="max-w-2xl pb-5 pr-8 text-sm leading-6 text-slate-600">{item.answer}</p>}</div>;
          })}
        </div>
      </div>
    </section>
  );
}
