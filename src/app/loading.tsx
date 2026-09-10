export default function Loading() {
  return (
    <section className="min-h-[65vh] px-6 pt-36 pb-20 flex items-center justify-center bg-zinc-50" aria-label="Loading">
      <div className="flex flex-col items-center gap-5 text-center">
        <div className="h-12 w-12 rounded-full border-4 border-blue-100 border-t-blue-600 animate-spin" />
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-600">Loading your page</p>
      </div>
    </section>
  );
}
