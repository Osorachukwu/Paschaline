"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
import img1 from "@/assets/gallery/img1.jpg";
import img2 from "@/assets/gallery/img2.jpg";
import img3 from "@/assets/gallery/img3.jpg";
import img4 from "@/assets/gallery/img4.jpg";
import img5 from "@/assets/gallery/img5.jpg";
import img6 from "@/assets/gallery/img6.jpg";
import img7 from "@/assets/gallery/img7.jpg";
import img8 from "@/assets/gallery/img8.jpg";
import img9 from "@/assets/gallery/img9.jpg";
import img10 from "@/assets/gallery/img10.jpg";
import img11 from "@/assets/gallery/img11.jpg";
import img12 from "@/assets/gallery/img12.jpg";
import img13 from "@/assets/gallery/img13.jpg";
import img14 from "@/assets/gallery/img14.jpg";
import teamMoment from "@/assets/gallery/WhatsApp Image 2025-07-25 at 18.03.57_c4ac581f.jpg";

const GALLERY_IMAGES: StaticImageData[] = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14, teamMoment];

export default function Gallery() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const showNext = useCallback(() => setSelectedIndex((current) => current === null ? null : (current + 1) % GALLERY_IMAGES.length), []);
  const showPrevious = useCallback(() => setSelectedIndex((current) => current === null ? null : (current - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length), []);

  useEffect(() => {
    if (selectedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") setSelectedIndex(null); if (event.key === "ArrowRight") showNext(); if (event.key === "ArrowLeft") showPrevious(); };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => { document.body.style.overflow = "unset"; window.removeEventListener("keydown", handleKeyDown); };
  }, [selectedIndex, showNext, showPrevious]);

  return <section className="bg-[#faf8f3] py-24" id="gallery"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div className="flex flex-col justify-between gap-6 border-b border-slate-200 pb-10 md:flex-row md:items-end"><div><p className="eyebrow text-amber-700">Inside the work</p><h1 className="mt-4 max-w-2xl font-display text-5xl leading-tight text-slate-900 sm:text-6xl">A closer look at the people and moments behind the practice.</h1></div><p className="max-w-sm text-sm leading-6 text-slate-600">A visual record of collaboration, learning, and the working relationships that make strategic progress possible.</p></div><div className="mt-10 grid auto-rows-[220px] grid-cols-2 gap-3 sm:auto-rows-[260px] sm:grid-cols-3 lg:grid-cols-4">{GALLERY_IMAGES.map((photo, index) => <button type="button" key={index} onClick={() => setSelectedIndex(index)} className={`group relative overflow-hidden bg-slate-200 text-left ${index === 0 ? "col-span-2 row-span-2" : index === 5 ? "sm:col-span-2" : ""}`} aria-label={`Open gallery image ${index + 1}`}><Image src={photo} alt={`Paschaline's Consult collaboration moment ${index + 1}`} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition duration-700 group-hover:scale-105" /><span className="absolute inset-0 bg-slate-950/0 transition group-hover:bg-slate-950/45" /><span className="absolute bottom-4 right-4 flex h-9 w-9 translate-y-3 items-center justify-center bg-white text-slate-900 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100"><Maximize2 className="h-4 w-4" /></span></button>)}</div></div>{selectedIndex !== null && <div role="dialog" aria-modal="true" aria-label="Gallery image viewer" className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/95 p-4 sm:p-8" onClick={() => setSelectedIndex(null)}><button type="button" onClick={() => setSelectedIndex(null)} aria-label="Close gallery" className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center border border-white/20 text-white hover:bg-white/10"><X className="h-5 w-5" /></button><button type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous image" className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white hover:bg-white/10 sm:left-8"><ChevronLeft className="h-5 w-5" /></button><div className="relative h-[78vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}><Image src={GALLERY_IMAGES[selectedIndex]} alt={`Expanded gallery image ${selectedIndex + 1}`} fill priority className="object-contain" /></div><button type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next image" className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/20 text-white hover:bg-white/10 sm:right-8"><ChevronRight className="h-5 w-5" /></button><span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs font-bold tracking-[0.2em] text-white/70">{selectedIndex + 1} / {GALLERY_IMAGES.length}</span></div>}</section>;
}
