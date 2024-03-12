import React from "react";
import Link from 'next/link';
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <div className="bg-red-400">
      <nav className="flex justify-center gap-5 py-10">
        <Link href="https://web.facebook.com/ezewi.osora" > <Facebook /> </Link>
        <Link href="https://web.facebook.com/ezewi.osora" > <Twitter /> </Link>
        <Link href="https://web.facebook.com/ezewi.osora" > <Linkedin /> </Link>
        <Link href="https://web.facebook.com/ezewi.osora" >  <Instagram /> </Link>
        
      </nav>

      <div className="bg-slate-500 py-5 flex justify-center items-center text-sm">
      <p>
        2024 Paschaline Creatives and Consult. All rights reserved
        </p>
      </div>
    </div>
  );
};
