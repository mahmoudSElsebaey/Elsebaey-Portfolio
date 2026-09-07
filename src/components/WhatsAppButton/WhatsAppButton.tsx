"use client";

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  const phoneNumber = "201207247967"; // Egypt country code + number
  const message = encodeURIComponent(
    "مرحباً محمود 👋\nشوف البورتفوليو بتاعك وأحب أكلمك بخصوص مشروع / فرصة عمل."
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
      title="تواصل عبر واتساب"
      initial={{ opacity: 0, scale: 0.8, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 380, damping: 28, delay: 0.3 }}
      className={[
        "fixed z-50 inline-flex h-12 w-12 items-center justify-center rounded-full",
        "bg-[#25D366] text-white shadow-lg",
        "hover:bg-[#20bd5a] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/50",
        "active:scale-95 transition-colors",
        // Below ScrollToTop (which is at bottom-24)
        "bottom-6 right-6",
      ].join(" ")}
    >
      <FaWhatsapp className="h-7 w-7" />
    </motion.a>
  );
}
