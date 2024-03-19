import React from 'react'
// import styles from "./links.module.css"
import { NavLink } from './navLink/NavLink';


interface LinkItem {
    title: string;
    path: string;
  }

export const Links: React.FC = () => {

    const links: LinkItem[] = [
        {
          title: "Home",
          path: "/",
        },
        {
          title: "About",
          path: "#about",
        },
        {
          title: "Contact",
          path: "#contact",
        },
        {
          title: "Blog",
          path: "/blog",
        },
      ];

  return (
    <div className="flex justify-end items-center gap-12 z-50 relative">
      {links.map((link) => (
        <NavLink item={link} key={link.title} />
      ))}
    </div>
  )
}
