'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Mail, ArrowRight, ChevronRight } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import logo from "@/assets/logo-removebg-preview.png"

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Our Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact Us', href: '/contact' },
];

export function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Listen to scroll position for dynamic sticky effects
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 mb-56">
      {/* 1. TOP ANNOUNCEMENT / QUICK CONTACT BAR */}
      <div className="bg-brand-black text-zinc-300 text-xs py-2 px-4 sm:px-8 border-b border-zinc-800/80">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          
          <div className="flex items-center gap-6">
            <a 
              href="mailto:contact@paschalinesconsult.com" 
              className="flex items-center gap-2 hover:text-brand-blue transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-brand-blue" />
              <span>contact@paschalinesconsult.com</span>
            </a>
            <a 
              href="tel:+2348000000000" 
              className="hidden sm:flex items-center gap-2 hover:text-brand-blue transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-blue" />
              <span>+234 (0) 800 000 0000</span>
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden md:inline text-zinc-400 text-[11px] uppercase tracking-wider font-medium">
              From Ideation to Exit
            </span>
            <div className="flex items-center gap-3 border-l border-zinc-800 pl-4">
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors" aria-label="Facebook">
                <FaFacebookF className="w-3 h-3" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors" aria-label="Twitter">
                <FaTwitter className="w-3 h-3" />
              </a>
              <a href="#" target="_blank" rel="noreferrer" className="hover:text-brand-blue transition-colors" aria-label="WhatsApp">
                <FaWhatsapp className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* 2. MAIN GLASSMORPHIC NAVIGATION BAR */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-zinc-100'
            : 'bg-white py-4 border-b border-zinc-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          
          {/* BRAND LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 flex-shrink-0">
              <Image
                src={logo}
                alt="Paschaline's Consult Logo"
                fill
                priority
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-brand-black leading-tight">
                PASCHALINE&apos;S <span className="text-brand-blue">CONSULT</span>
              </span>
              <span className="text-[10px] tracking-widest text-zinc-500 font-semibold uppercase">
                Writing & Advisory
              </span>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-all duration-200 relative py-1 ${
                    isActive
                      ? 'text-brand-blue'
                      : 'text-zinc-700 hover:text-brand-blue'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* DESKTOP ACTION BUTTON */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-secondary text-sm flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE HAMBURGER TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-brand-black hover:bg-zinc-100 transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </nav>

      {/* 3. MOBILE MENU OVERLAY */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[95px] bg-brand-black/60 backdrop-blur-sm z-40">
          <div className="bg-white border-b border-zinc-200 p-6 shadow-2xl space-y-4 animate-in slide-in-from-top duration-300">
            
            <div className="flex flex-col space-y-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl text-base font-bold text-zinc-800 hover:bg-zinc-50 hover:text-brand-blue transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-zinc-400" />
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-zinc-100 flex flex-col gap-3">
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-secondary w-full text-center flex items-center justify-center gap-2"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}

export default NavBar;