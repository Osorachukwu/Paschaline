'use client';

import { CalendarDays, Mail } from 'lucide-react';
import ClientIntake from '@/components/ClientIntake';
import Form from '@/components/contact/Form';

export default function ContactPage() {
    const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL;
    const paymentUrl = process.env.NEXT_PUBLIC_PAYSTACK_PAYMENT_URL;

    return <>
        <section className="page-offset bg-slate-900 py-20 text-white"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><p className="eyebrow text-amber-400">Contact & booking</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Let&apos;s drive your next strategic milestone.</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Whether you need executive advisory, investor-ready business tools, or high-level writing solutions, we are ready to assist.</p></div></section>
        <section className="bg-[#faf8f3] py-20"><div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="space-y-8"><div>
                <p className="eyebrow text-amber-700">Start here</p>
                <h2 className="mt-4 font-display text-4xl text-slate-900">Bring the bottleneck. We&apos;ll bring the structure.</h2>
            </div><a href="mailto:adaobi@bypaschalinesconsult.com" className="flex items-start gap-3 text-sm font-semibold text-slate-700"><Mail className="h-5 w-5 text-amber-600" />adaobi@bypaschalinesconsult.com</a><div className="border border-slate-200 bg-white p-6"><CalendarDays className="h-7 w-7 text-amber-600" /><h3 className="mt-5 text-lg font-bold text-slate-900">Book a strategy session</h3><p className="mt-2 text-sm leading-6 text-slate-600">Choose a time, then share your project context in the intake form.</p>{calendlyUrl ? <iframe title="Schedule a strategy session" src={calendlyUrl} className="mt-5 h-[620px] w-full" /> :
                <p className="mt-5 border border-dashed border-slate-300 p-4 text-sm text-slate-500">Add NEXT_PUBLIC_CALENDLY_URL to enable embedded booking.</p>}{paymentUrl && <a href={paymentUrl} className="btn-secondary mt-5 inline-flex">Pre-pay strategy session</a>}
                </div>
            </div>
            <div className="space-y-8">
                <div className="border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                    <Form />
                </div>
                {/* <div id="intake">
                    <ClientIntake />
                </div> */}
            </div>
        </div>
        </section>
    </>;
}
