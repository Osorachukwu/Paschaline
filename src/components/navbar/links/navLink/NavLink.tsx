"use client";
import React from "react";
import Link from "next/link";
// import styles from "./navLink.module.css";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  item: {
    path: string;
    title: string;
  };
}

export const NavLink: React.FC<NavLinkProps> = ({ item }) => {
  const pathName = usePathname();

  return (
    <div>
      <Link
        href={item.path}
        className={`md:block hidden text-white ${"min-w-24 py-3 text-center font-semibold"} ${
          pathName === item.path ? "border-b-2 border-white" : ""
        }`}
      >
        {item.title}
      </Link>
    </div>
  );
};

// Duration 26weeks
// How many times a week 1 weekend???
// A lots a maths involved
// Power Bi
// Python
// SQL
// Excel
