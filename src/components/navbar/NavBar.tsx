'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';
import logo from '@/assets/logo-removebg-preview.png';

const LINKS = [
    { label: 'About', href: '/about' },
    { label: 'Business advisory', href: '/business-advisory' },
    { label: 'Talent acceleration', href: '/talent-acceleration' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
];

export function NavBar() {
    const [open, setOpen] = useState(false);
    return (
        <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
            <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <Link href="/" className="flex items-center gap-3 text-base font-extrabold tracking-tight text-slate-900 sm:text-lg">
                    <Image src={logo} alt="Paschaline&apos;s Consult logo" width={38} height={38} priority className="h-12 w-12 object-contain" />
                    <span>PASCHALINE&apos;S <span className="text-amber-600">CONSULT</span>
                    <span className="block text-[9px] font-bold uppercase tracking-[0.22em] text-slate-500">Strategic advisory</span></span>
                </Link>
                <div className="hidden items-center gap-7 lg:flex">{LINKS.map((link) => <Link key={link.href} href={link.href} className="text-sm font-semibold text-slate-600 transition hover:text-amber-700">{link.label}</Link>)}<a href={process.env.NEXT_PUBLIC_CALENDLY_URL || '/contact'} className="btn-secondary inline-flex items-center gap-2 px-4 py-2 text-sm">Book session <ArrowUpRight className="h-4 w-4" /></a>
                </div>
                <button type="button" onClick={() => setOpen(!open)} className="p-2 text-slate-900 lg:hidden" aria-label="Toggle navigation">{open ? <X /> : <Menu />}
                </button>
            </nav>{open && <div className="border-t border-slate-200 bg-white p-5 lg:hidden">{LINKS.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="block border-b border-slate-100 py-4 text-sm font-bold text-slate-700">{link.label}</Link>)}
                <Link href="/contact" onClick={() => setOpen(false)} className="btn-secondary mt-5 block text-center">Book session</Link>
            </div>}
        </header>
    );
}

export default NavBar;
