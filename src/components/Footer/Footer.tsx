import Image from "next/image";
import Link from "next/link";
import Socials from "../ui/Socials";

const footerLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Services", href: "/services" },
  { name: "Features", href: "/features" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <div className="pb-10 pt-15 mt-16 md:mt-20 relative">
      <div className="absolute top-0 left-1/2 translate-x-[-50%] h-[0px] border-y-[1.7px] border-primary-1000/80 w-[65%] pt-1" />

      <div className="flex justify-center items-center gap-5 px-5 sm:p-0">
        <div>
          <Image
            src="/assets/Mahmoud_Elsebaey-QR-removebg-preview.png"
            width={150}
            height={100}
            alt="QR code linking to Mahmoud Elsebaey contact"
            className="bg-white rounded-[10px]"
          />
        </div>
        <div className="flex flex-col gap-2 sm:gap-8">
          <p className="text-5xl md:text-6xl font-bold pl-0 md:pl-4">Send Me</p>
          <Socials />
        </div>
      </div>

      <nav
        className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-10 px-4"
        aria-label="Footer navigation"
      >
        {footerLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm opacity-70 hover:opacity-100 hover:text-primary-1000 transition-opacity capitalize"
          >
            {link.name}
          </Link>
        ))}
      </nav>

      <p className="text-center opacity-60 pt-8 text-[15px]">
        © {new Date().getFullYear()} All Rights Reserved, Mahmoud Elsebaey
      </p>
    </div>
  );
}
