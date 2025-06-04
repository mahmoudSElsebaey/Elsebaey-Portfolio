"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/resume" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Features", path: "/features" },
  { name: "contact", path: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-2 xl:gap-6">
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${
              link.path === pathname ? "border-r-2 border-l-2 border-primary-1000 text-primary-1000 font-extrabold bg-primary-1000/10" : " nav-link"
            } 
              capitalize py-2 px-4 rounded-[10px] cursor-pointer
               `}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
