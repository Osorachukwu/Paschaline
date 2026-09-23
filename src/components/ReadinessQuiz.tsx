'use client';

import { useState } from 'react';
import { ArrowRight, CheckCircle2, RotateCcw } from 'lucide-react';

const QUESTIONS = [
  'Does your deck explain the customer problem in one clear sentence?',
  'Are your market size and competitive assumptions supported by evidence?',
  'Can an investor understand your business model without a live explanation?',
  'Do your financial projections connect directly to your growth strategy?',
];

export default function ReadinessQuiz() {
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const score = Math.round((answers.filter(Boolean).length / QUESTIONS.length) * 100);

  const answer = (value: boolean) => setAnswers((current) => [...current, value]);
  const reset = () => {
    setAnswers([]);
    setEmail('');
    setSubmitted(false);
  };

  return (
    <section className="bg-slate-900 py-20 text-white" id="readiness-quiz">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div className="space-y-5">
          <p className="eyebrow text-amber-400">Readiness diagnostic</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Is your pitch deck investor-ready?</h2>
          <p className="max-w-md text-slate-300">Answer four practical questions and receive an instant starting score. It is a diagnostic, not a promise of funding.</p>
        </div>
        <div className="border border-slate-700 bg-slate-800/60 p-6 sm:p-8">
          {answers.length < QUESTIONS.length && !submitted ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                <span>Question {answers.length + 1} of {QUESTIONS.length}</span>
                <span>{answers.length * 25}% complete</span>
              </div>
              <div className="h-1 bg-slate-700"><div className="h-1 bg-amber-500 transition-all" style={{ width: `${(answers.length / QUESTIONS.length) * 100}%` }} /></div>
              <h3 className="text-xl font-semibold leading-relaxed">{QUESTIONS[answers.length]}</h3>
              <div className="grid gap-3 sm:grid-cols-2">
                <button type="button" onClick={() => answer(true)} className="border border-amber-500 bg-amber-600 px-5 py-3 text-sm font-bold transition hover:bg-amber-500">Yes, clearly</button>
                <button type="button" onClick={() => answer(false)} className="border border-slate-600 px-5 py-3 text-sm font-bold transition hover:border-slate-400">Not yet</button>
              </div>
            </div>
          ) : submitted ? (
            <div className="space-y-5 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-amber-400" />
              <p className="eyebrow text-amber-400">Diagnostic submitted</p>
              <h3 className="font-display text-4xl">Your starting score: {score}%</h3>
              <p className="text-slate-300">We have recorded your email for a practical follow-up on your deck readiness.</p>
              <button type="button" onClick={reset} className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300"><RotateCcw className="h-4 w-4" /> Run it again</button>
            </div>
          ) : (
            <div className="space-y-5">
              <p className="eyebrow text-amber-400">Your result is ready</p>
              <h3 className="font-display text-4xl">{score}% ready on this quick check.</h3>
              <p className="text-slate-300">Leave your email and we will send the score with the next practical question to answer.</p>
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-3 sm:flex-row">
                <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@company.com" className="min-w-0 flex-1 border border-slate-600 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:border-amber-500 focus:outline-none" />
                <button className="inline-flex items-center justify-center gap-2 bg-amber-600 px-5 py-3 text-sm font-bold hover:bg-amber-500">Get my score <ArrowRight className="h-4 w-4" /></button>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
