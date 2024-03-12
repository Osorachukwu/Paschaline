"use client";
import React, { useState } from "react";
import { Links } from "@/components/navbar/links/Links";
// import styles from "./navbar.module.css"
import { Menu } from "lucide-react";
import { X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.jpg";

const Homenav: React.FC = () => {
  const [open, setOpen] = useState(false);
  function handlClick() {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }

  return (
    <div className="absolute top-20 right-[6%] bg-yellow-500 ">
      <Links />

      <div className="md:hidden" onClick={handlClick}>
        {!open && <Menu size={40} />}
        {open && <X size={40} />}
      </div>

      <div className="md:hidden" style={{ zIndex: "100px" }}>
        {open && (
          <div className="flex flex-col absolute gap-y-4 top-20 left-[50%] translate-x-[-50%] bg-green-300 w-full text-center -z-50">
            <Link href="/">Home</Link>
            <Link href="about">About</Link>
            <Link href="/contact">Contact</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Homenav;
