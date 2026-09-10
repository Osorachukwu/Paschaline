"use client";

import Link from "next/link";
import { RefreshCw } from "lucide-react";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <section className="min-h-[65vh] px-6 pt-36 pb-20 flex items-center justify-center bg-zinc-50">
      <div className="w-full max-w-xl text-center">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-blue-600">Something went wrong</p>
        <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-zinc-950">We hit a rough patch.</h1>
        <p className="mt-5 text-base leading-7 text-zinc-600">
          The page could not load as expected. Try again, or return to the homepage to keep exploring.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button type="button" onClick={reset} className="btn-secondary inline-flex items-center gap-2">
            <RefreshCw className="h-4 w-4" />
            Try again
          </button>
          <Link href="/" className="btn-outline">Back home</Link>
        </div>
      </div>
    </section>
  );
}
