'use client';

import { FormEvent, useState } from 'react';
import { CheckCircle2, UploadCloud } from 'lucide-react';

export default function ClientIntake() {
  const [sent, setSent] = useState(false);

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  if (sent) {
    return <div className="border border-emerald-200 bg-emerald-50 p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" /><h3 className="mt-4 text-xl font-bold text-slate-900">Intake received</h3><p className="mt-2 text-sm text-slate-600">Your notes are ready for the consultation team. We will confirm the next step by email.</p></div>;
  }

  return (
    <form onSubmit={submit} className="space-y-5 border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div><p className="eyebrow text-amber-700">Pre-session intake..</p><h2 className="mt-3 font-display text-3xl text-slate-900">Give us the useful context early.</h2><p className="mt-2 text-sm leading-6 text-slate-600">Share a draft CV, pitch deck, or financial note before your strategy session. Files are limited to 10MB each.</p></div>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-semibold text-slate-700">Full name<input required name="name" className="field" /></label>
        <label className="space-y-2 text-sm font-semibold text-slate-700">Email<input required type="email" name="email" className="field" /></label>
      </div>
      <label className="space-y-2 text-sm font-semibold text-slate-700">What are you preparing for?<select name="type" className="field"><option>Business advisory</option><option>Talent acceleration</option><option>Executive communication</option></select></label>
      <label className="space-y-2 text-sm font-semibold text-slate-700">Project context<textarea required name="context" rows={4} className="field resize-y" /></label>
      <label className="flex cursor-pointer items-center gap-3 border border-dashed border-slate-300 p-4 text-sm text-slate-600 hover:border-amber-500"><UploadCloud className="h-5 w-5 text-amber-600" /><span>Upload reference files<input type="file" name="files" multiple accept=".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx" className="mt-2 block text-xs" /></span></label>
      <button type="submit" className="btn-secondary w-full">Submit intake</button>
    </form>
  );
}
