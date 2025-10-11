"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useDragControls } from "framer-motion";
import styles from "./DraggableMenu.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AiOutlineHome } from "react-icons/ai";
import { FaUser } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { BsFillSendFill } from "react-icons/bs";
import { MdTipsAndUpdates, MdWork } from "react-icons/md";
import { IoMenu , IoClose} from "react-icons/io5";
   
const navItems = [
  { icon: AiOutlineHome, label: "Home", ref: "/" },
  { icon: FaUser, label: "About Me", ref: "/about" },
  { icon: GrProjects, label: "Projects", ref: "/projects" },
  { icon: MdTipsAndUpdates, label: "Features", ref: "/features" },
  { icon: MdWork, label: "Services", ref: "/services" },
  { icon: BsFillSendFill, label: "Contact", ref: "/contact" },
];

export default function DraggableNav() {
  const [isOpen, setIsOpen] = useState(false);
  const dragControls = useDragControls();
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (isOpen) {
      timer = setTimeout(() => {
        setIsOpen(false); // Close the menu after 10 seconds
      }, 10000);
    }

    return () => {
      if (timer) {
        clearTimeout(timer); // Clear the timer when the component unmounts or `isOpen` changes
      }
    };
  }, [isOpen]);

  const startDrag = (event: React.PointerEvent) => {
    dragControls.start(event);
  };

  return (
    <div className="fixed top-0 right-0 z-50 lg:hidden">
      <motion.nav
        ref={navRef}
        drag="y"
        dragControls={dragControls}
        dragConstraints={{
          top: 20,
          bottom: typeof window !== "undefined" ? window.innerHeight - 350 : 0,
          left: 0,
          right: typeof window !== "undefined" ? window.innerWidth - 80 : 0,
        }}
        dragElastic={0.1}
        initial={{ top: 70, right: 0 }}
        animate={{
          x: isOpen ? 0 : 30,
          opacity: isOpen ? 1 : 0.5,
        }}
        className="absolute w-20 h-[300px] flex items-center justify-center cursor-grab z-50"
        style={{ touchAction: "none" }}
        onPointerDown={startDrag}
      >
        <div className="flex items-center justify-center [transform:rotate(-45deg)]">
          {/* Toggle Button */}
          <motion.div
            // className="w-16 h-16 bg-[#d5c29a] dark:bg-[#705f3b] rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer"
            className="w-16 h-16 bg-primary-1000 text-white rounded-full flex items-center justify-center shadow-lg z-50 cursor-pointer"
            onClick={handleToggle}
            animate={{ rotate: isOpen ? -225 : 0 }}
            transition={{ duration: 0.6 }}
          >
            {isOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <IoMenu className="text-3xl [transform:rotate(45deg)]" />
            )}
          </motion.div>

          {/* Navigation Items */}
          {navItems.map((item, index) => (
            <span
              key={item.label}
              title={item.label}
              className={`${styles.navItem} ${isOpen ? styles.open : ""}`}
              style={{ "--i": index + 1 } as React.CSSProperties}
            >
              <Link
                href={item.ref}
                className={`w-14 h-14 rounded-full flex items-center justify-center 
                shadow-2xl [transform:rotate(45deg)]  border hover:border-primary-1000
                ${
                  pathname === item.ref
                    // ? "bg-yellow-500 dark:bg-yellow-600"
                    // : "bg-[#d5c29a] dark:bg-[#705f3b] hover:text-amber-100 dark:hover:text-amber-400 "
                    ? "bg-primary-1000 border-6 border-primary-1000 text-white"
                    : "bg-primary-1000/50 hover:bg-primary-1000/70 transition-all duration-300"
               
                    }`}
              >
                <item.icon
                  className="text-xl"
                  style={{
                    transform: `rotate(-${(index + 1) * (360 / 9.3)}deg)`,
                  }}
                />
              </Link>
            </span>
          ))}
        </div>
      </motion.nav>
    </div>
  );
}
