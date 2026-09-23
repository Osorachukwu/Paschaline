import Link from 'next/link';

const VALUES = [
    ['Precision', 'Data-backed, institutional-quality deliverables.'],
    ['Clarity', 'Cutting through noise to solve real-world problems.'],
    ['Empowerment', 'Equipping businesses and talents for long-term sustainability.'],
];

export default function AboutPage() {
    return (
        <>
            <section className="page-offset bg-slate-900 py-24 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <p className="eyebrow text-amber-400">About the firm</p>
                    <h1 className="mt-5 max-w-4xl font-display text-5xl leading-tight sm:text-7xl">Empowering leaders. Elevating organizations.
                    </h1>
                    <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">Paschaline&apos;s Consult bridges high-level corporate advisory with personalized talent development, providing executable solutions that solve complex bottlenecks.
                    </p>
                </div>
            </section>
            <section className="bg-white py-24">
                <div className="mx-auto grid max-w-7xl gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
                    <div>
                        <p className="eyebrow text-amber-700">Our mission</p>
                        <h2 className="mt-4 font-display text-4xl text-slate-900">Make complexity useful.</h2>
                        <p className="mt-6 text-base leading-8 text-slate-600">We empower business executives and enterprises through high-impact advisory, rigorous financial strategy, and clear corporate communication that translates complexity into clear growth pathways.</p>
                    </div>
                    <div>
                        <p className="eyebrow text-amber-700">Our philosophy</p>
                        <h2 className="mt-4 font-display text-4xl text-slate-900">Strategy and communication are two sides of the same decision.</h2>
                        <p className="mt-6 text-base leading-8 text-slate-600">Whether we are building an investor-ready model or structuring an executive communication, we bring analytical exactness and clarity to every engagement.
                        </p>
                    </div>
                </div>
            </section>
            <section className="bg-[#faf8f3] py-24"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <p className="eyebrow text-amber-700">What guides the work</p>
                <div className="mt-10 grid gap-px border border-slate-200 bg-slate-200 md:grid-cols-3">
                    {VALUES.map(([title, text], index) => <article key={title} className="bg-white p-8">
                        <span className="font-display text-5xl text-amber-600">0{index + 1}</span>
                        <h3 className="mt-12 text-2xl font-bold text-slate-900">{title}</h3>
                        <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p></article>)}
                </div>
                <Link href="/contact" className="btn-secondary mt-10 inline-flex">Discuss your next milestone</Link>
            </div>
            </section>
        </>
    );
}
