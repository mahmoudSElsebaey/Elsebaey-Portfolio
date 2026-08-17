"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", path: "/" },
  { name: "About Me", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Projects", path: "/projects" },
  { name: "Features", path: "/features" },
  { name: "Contact", path: "/contact" },
];

export const Nav = () => {
  const pathname = usePathname();

  return (
    <nav className="flex gap-2 xl:gap-6">
      {links.map((link) => {
        const isActive =
          link.path === "/"
            ? pathname === "/"
            : pathname === link.path || pathname.startsWith(`${link.path}/`);

        return (
          <Link
            key={link.path}
            href={link.path}
            prefetch
            className={`${
              isActive
                ? "border-r-2 border-l-2 border-primary-1000 text-primary-1000 font-extrabold bg-primary-1000/10"
                : "nav-link"
            } capitalize py-2 px-4 rounded-[10px] cursor-pointer transition-colors duration-200`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};
