import React from "react";
import Drawer from "../Drawer";
import Link from "next/link";
import logo from "@/assets/logo-removebg-preview.png";
import Image from "next/image";
import { Menu } from "lucide-react";

export default function AltNav() {
  return (
    <div className="navbar bg-neutral text-neutral-content flex justify-between bg-mediumShade dark:bg-mediumShade shadow-lg fixed z-50">
      <button className="btn btn-ghost h-auto">
        <Link href="/" data-aos="fade-right">
          <Image
            src={logo}
            alt=""
            className="h-14 w-14 min-w-10 md:h-16 md:w-16"
          />
        </Link>
      </button>
      {/* Mobile */}
      <div className="dropdown dropdown-bottom dropdown-end md:hidden">
        {/* Toggle btn */}
        <div tabIndex={0} role="button" className="btn btn-ghost m-1">
          <Menu />
        </div>
        <nav>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-md z-1 w-52 p-2 bg-mediumShade dark:bg-mediumShade shadow-lg"
          >
            <li>
              <Link href="#about" data-aos="fade-right">
                About
              </Link>
            </li>
            <li>
              <Link href="/gallery" data-aos="fade-right">
                Gallery
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {/* Desktop */}
      <nav className="hidden md:block">
        <ul className="flex gap-10 px-16">
          <li>
            <Link href="#about" data-aos="fade-right">
              About
            </Link>
          </li>
          <li>
            <Link href="#contact" data-aos="fade-right">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/gallery" data-aos="fade-right">
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
