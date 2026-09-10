import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="min-h-[65vh] px-6 pt-36 pb-20 flex items-center justify-center bg-zinc-50">
      <div className="w-full max-w-xl text-center">
        <p className="text-7xl sm:text-8xl font-black tracking-tight text-blue-600">404</p>
        <h1 className="mt-3 text-3xl sm:text-4xl font-black tracking-tight text-zinc-950">This page wandered off.</h1>
        <p className="mt-5 text-base leading-7 text-zinc-600">
          The address does not match a page in Paschaline&apos;s Consult.
        </p>
        <Link href="/" className="btn-secondary mt-8 inline-flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Return home
        </Link>
      </div>
    </section>
  );
}
