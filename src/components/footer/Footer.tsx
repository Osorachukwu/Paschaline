import React from "react";
import Link from "next/link";
import { FaWhatsapp } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';


export const Footer: React.FC = () => {
  return (
    <div className="bg-mediumShade">
      <nav className="flex justify-center gap-5 py-10">
        <Link href="https://www.facebook.com/ikwukapaschal.adaobi?mibextid=ZbWKwL">
          <FaFacebook size={26} className="text-logoBlue" />
        </Link>

        <Link
          href="https://x.com/PConsult186937?t=wAJvC8zHDlOcFb8B91Y3OA&s=09a"
          target="_blank"
        >
          <FaTwitter size={26} className="text-logoBlue" />
        </Link>

        <Link href="https://wa.link/ptf2t5">
          <FaWhatsapp size={26} className="text-logoBlue" />
        </Link>

      </nav>

      <div className="bg-black text-white py-5 flex flex-col gap-3 justify-center items-center text-xs lg:text-base">
        <p>&copy;2024 Paschaline Creatives and Consult. All rights reserved</p>

        <Link href="https://osorachukwu.vercel.app/" target="_blank">
          <p>
            Designed and Built by
            <span className="text-logoBlue pl-2 underline font-semibold">Osorachukwu</span>
          </p>
        </Link>
      </div>
    </div>
  );
};
