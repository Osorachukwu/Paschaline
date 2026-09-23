import Hero from "@/features/home/Hero";
import Ourservices from "@/features/home/ourservices/Ourservices";
import ImpactStats from "@/features/home/ImpactStats";
import ReadinessQuiz from "@/components/ReadinessQuiz";
import SampleShowcase from "@/components/SampleShowcase";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <Hero />
      <ImpactStats />
      <Ourservices />
      <SampleShowcase />
      <Testimonials />
      <FAQ />
      <ReadinessQuiz />
      <section className="bg-amber-600 py-16 text-center text-white"><div className="mx-auto max-w-3xl px-4"><h2 className="font-display text-4xl sm:text-5xl">Ready to solve your biggest business or career bottleneck?</h2><Link href="/contact" className="mt-8 inline-flex bg-slate-900 px-6 py-3 text-sm font-bold hover:bg-slate-800">Schedule your call</Link></div></section>
    </main>
  );
}
