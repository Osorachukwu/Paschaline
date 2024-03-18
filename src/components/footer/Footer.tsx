import React from "react";
import Link from 'next/link';
import { Facebook } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <div className="bg-mediumShade">
      <nav className="flex justify-center gap-5 py-10">
        <Link href="" target="_blank"> 
          <Facebook className="text-logoBlue"/>
         </Link>

        <Link href="https://x.com/PConsult186937?t=wAJvC8zHDlOcFb8B91Y3OA&s=09a" target="_blank"> 
         <Twitter className="text-logoBlue"/> 
        </Link>

        <Link href="" target="_blank">
           <Linkedin className="text-logoBlue" />
         </Link>

        <Link href="" target="_blank">  
          <Instagram className="text-logoBlue"/>
         </Link>
        
      </nav>

      <div className="bg-black text-white py-5 flex flex-col gap-3justify-center items-center">
      <p>
        2024 Paschaline Creatives and Consult. All rights reserved
        </p>

        <p>
          Designed and Built by  
          <span className="text-logoBlue">
            <Link href="https://osorachukwu.vercel.app/" target="_blank">Osorachukwu</Link>
          </span>
          </p>
      </div>
    </div>
  );
};
