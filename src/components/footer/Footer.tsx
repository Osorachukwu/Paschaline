import Link from 'next/link';
import { FaFacebookF, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

const SOCIAL_LINKS = [
    { label: 'Facebook', href: 'https://www.facebook.com/ikwukapaschal.adaobi?mibextid=ZbWKwL', icon: FaFacebookF },
    { label: 'X / Twitter', href: 'https://x.com/PConsult186937?t=wAJvC8zHDlOcFb8B91Y3OA&s=09a', icon: FaXTwitter },
    { label: 'WhatsApp', href: 'https://wa.link/ptf2t5', icon: FaWhatsapp },
];

export function Footer() {
    return (
        <footer className="bg-slate-900 text-white">
            <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8">
                <div>
                    <Link href="/" className="text-lg font-extrabold">PASCHALINE&apos;S
                        <span className="text-amber-400">CONSULT</span>
                    </Link>
                    <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">Strategic advisory, executive communication, financial modeling, and talent acceleration for decisions that need to move.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                        {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="flex h-10 w-10 items-center justify-center border border-slate-700 text-slate-300 transition hover:border-amber-500 hover:bg-amber-600 hover:text-white"><Icon className="h-4 w-4" /></a>)}
                    </div>
                </div>
                <div>
                    <p className="eyebrow text-amber-400">Explore</p>
                    <div className="mt-5 grid gap-3 text-sm text-slate-300">
                        <Link href="/about" className="hover:text-white">About the firm</Link>
                        <Link href="/business-advisory" className="hover:text-white">Business advisory</Link>
                        <Link href="/talent-acceleration" className="hover:text-white">Talent acceleration</Link>
                        <Link href="/contact" className="hover:text-white">Contact & booking</Link>
                    </div>
                </div>
                <div>
                    <p className="eyebrow text-amber-400">Reach us</p>
                    <a href="mailto:adaobi@bypaschalinesconsult.com" className="mt-5 block text-sm text-slate-300 hover:text-white">adaobi@bypaschalinesconsult.com</a>
                    <p className="mt-3 text-sm text-slate-400">Lagos, Nigeria</p>
                </div>
            </div>
            <div className="border-t border-slate-800 px-4 py-5 text-center text-xs text-slate-500">© {new Date().getFullYear()} Paschaline&apos;s Consult. All rights reserved.</div>
        </footer>
    );
}

export default Footer;
