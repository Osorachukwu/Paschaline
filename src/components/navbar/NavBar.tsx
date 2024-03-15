"use client";
import React, { useEffect, useState } from "react";
import { Links } from "./links/Links";
// import styles from "./navbar.module.css"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo-removebg-preview.png";
import Aos from "aos";
import "aos/dist/aos.css";

export const NavBar: React.FC = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const [open, setOpen] = useState(false);
  function handlClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  useEffect(() => {
    function handleDocumentClick(e: MouseEvent) {
      const target = e.target as Element;
      const className = target.className;
      setOpen(
        typeof className === "string"
          ? className.includes("hamburger-nav")
          : true
      );
    }
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick)
    }
  }, []);

  return (
    <div className="h-12 md:h-16 w-full z-50 bg-mediumShade shadow-lg fixed">
      <div className="h-full container pl-8 pr-10 mx-auto">
        <nav className=" w-full h-full mx-auto flex justify-between items-center">
          <div className="w-1/2 h-full flex items-center ">
            <Image
              src={logo}
              alt=""
              className="h-10 min-w-10 w-10 md:h-16 md:w-16"
            />
          </div>
          <div className="w-1/2">
            <Links />

            <div className="md:hidden flex justify-end" onClick={handlClick}>
              {!open && <Menu size={30} />}
              {open && <X size={30} />}
            </div>

            <div
              className="md:hidden w-full hamburger-nav bg-green-400"
              style={{ zIndex: "100px" }}
            >
              {open && (
                <div className="flex hamburger-nav flex-col left-0 absolute gap-y-4 top-12 w-screen text-center -z-50 bg-mediumShade border-b-2 border-t-2 transition-all duration-500 py-5">
                  <Link href="/" data-aos="fade-right">
                    Home
                  </Link>
                  <Link href="#about" data-aos="fade-right">
                    About
                  </Link>
                  <Link href="#contact" data-aos="fade-right">
                    Contact
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

// left-[50%] translate-x-[-50%]
