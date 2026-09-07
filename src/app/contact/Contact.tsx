"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaLinkedin,
} from "react-icons/fa";
import { Loader2, Send } from "lucide-react";
import { motion } from "framer-motion";

type ContactItem = {
  icon: React.ReactElement;
  title: string;
  lines: { label: string; href?: string }[];
};

const contactInfo: ContactItem[] = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    lines: [
      {
        label: "(+20) 120 7247 967",
        href: "tel:+201207247967",
      },
    ],
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    lines: [
      {
        label: "mahmoudelsebaey710@gmail.com",
        href: "mailto:mahmoudelsebaey710@gmail.com",
      },
      {
        label: "mahmoud.elsebaey999@gmail.com",
        href: "mailto:mahmoud.elsebaey999@gmail.com",
      },
    ],
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    lines: [
      {
        label: "Nasr City, Cairo, Egypt",
        href: "https://maps.google.com/?q=Nasr+City,+Cairo,+Egypt",
      },
      {
        label: "Berkit El-saba, Menoufia",
        href: "https://maps.google.com/?q=Berkit+El-saba,+Menoufia,+Egypt",
      },
    ],
  },
];

const services = [
  "Full-Stack Web Development",
  "Next.js / React Development",
  "UI / Frontend Development",
  "API & Backend Development",
  "Responsive Design",
  "E-commerce Development",
  "Performance Optimization",
  "Other / Consultation",
];

const WHATSAPP_URL =
  "https://wa.me/201207247967?text=" +
  encodeURIComponent(
    "مرحباً محمود 👋\nشوف البورتفوليو بتاعك وأحب أكلمك بخصوص مشروع / فرصة عمل."
  );

const LINKEDIN_URL = "https://www.linkedin.com/in/mahmoudelsebaey999/";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (feedback) setFeedback(null);
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
    if (feedback) setFeedback(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;

    if (
      !formData.firstname.trim() ||
      !formData.lastname.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim() ||
      !formData.service.trim() ||
      !formData.message.trim()
    ) {
      setFeedback({ type: "error", text: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFeedback({
        type: "error",
        text: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    setFeedback(null);

    try {
      await emailjs.send(
        "service_x5wsu17",
        "template_pqh87ag",
        formData,
        "dhJNNRyqravgKNwQV"
      );
      setFeedback({ type: "success", text: "Message sent successfully!" });
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch {
      setFeedback({
        type: "error",
        text: "Failed to send message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isFormValid =
    formData.firstname.trim() &&
    formData.lastname.trim() &&
    formData.email.trim() &&
    formData.phone.trim() &&
    formData.service.trim() &&
    formData.message.trim();

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.05, duration: 0.35, ease: "easeOut" },
      }}
      className="mx-4 md:mx-0 mb-16 md:mb-24 mt-3"
    >
      <div className="sm:container mx-auto" data-aos="fade-up">
        <div className="flex flex-col xl:flex-row gap-8 xl:gap-12 xl:items-start">
          {/* Form */}
          <div className="w-full xl:flex-1 order-2 xl:order-none">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 sm:gap-6 p-6 sm:p-8 md:p-10
                rounded-2xl border border-primary-1000/20
                bg-primary-1000/10 dark:bg-primary-1000/5"
            >
              <div>
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-1000">
                  {"Let's Work Together"}
                </h3>
                <p className="mt-2 opacity-70 text-sm md:text-base leading-relaxed max-w-xl">
                  Whether you have a question, a project idea, or just want to
                  connect—feel free to reach out.
                </p>
              </div>

              {feedback && (
                <div
                  className={`flex items-center justify-between gap-3 p-3.5 rounded-xl text-sm font-medium border ${
                    feedback.type === "error"
                      ? "bg-red-500/10 text-red-400 border-red-500/25"
                      : "bg-emerald-500/10 text-emerald-400 border-emerald-500/25"
                  }`}
                >
                  <span>{feedback.text}</span>
                  <button
                    onClick={() => setFeedback(null)}
                    className="text-lg leading-none opacity-70 hover:opacity-100 cursor-pointer"
                    aria-label="Close message"
                    type="button"
                  >
                    &times;
                  </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  disabled={loading}
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  disabled={loading}
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={loading}
                />
              </div>

              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
                disabled={loading}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    {services.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Type your message here..."
                className="h-[180px] max-h-[360px]"
                value={formData.message}
                onChange={handleChange}
                disabled={loading}
              />

              <Button
                size="lg"
                className="w-full sm:w-auto sm:min-w-[180px] rounded-full bg-primary-1000 hover:bg-primary-1000/90
                  cursor-pointer py-5 text-sm sm:text-base font-semibold
                  disabled:opacity-40 disabled:cursor-not-allowed
                  inline-flex items-center justify-center gap-2"
                type="submit"
                disabled={!isFormValid || loading}
                title={
                  !isFormValid
                    ? "Please fill all fields to send your message"
                    : "Send message"
                }
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact info sidebar */}
          <div className="w-full xl:w-[380px] shrink-0 order-1 xl:order-none">
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li
                  key={item.title}
                  className="flex items-start gap-4 p-4 rounded-2xl border border-primary-1000/15
                    bg-primary-1000/5 hover:border-primary-1000/30 transition-colors"
                >
                  <div
                    className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-primary-1000/15 text-primary-1000
                      border border-primary-1000/25 flex items-center justify-center shrink-0 text-lg md:text-xl"
                  >
                    {item.icon}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-bold text-primary-1000 mb-1">
                      {item.title}
                    </p>
                    <div className="space-y-1">
                      {item.lines.map((line) =>
                        line.href ? (
                          <a
                            key={line.label}
                            href={line.href}
                            target={line.href.startsWith("http") ? "_blank" : undefined}
                            rel={
                              line.href.startsWith("http")
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="block text-sm opacity-80 hover:opacity-100 hover:text-primary-1000
                              transition-colors break-all"
                          >
                            {line.label}
                          </a>
                        ) : (
                          <p key={line.label} className="text-sm opacity-80">
                            {line.label}
                          </p>
                        )
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Quick actions */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3
                  bg-[#25D366]/15 text-[#25D366] border border-[#25D366]/30
                  hover:bg-[#25D366]/25 transition-colors text-sm font-semibold"
              >
                <FaWhatsapp className="text-lg" />
                WhatsApp
              </a>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3
                  bg-[#0A66C2]/15 text-[#0A66C2] dark:text-[#5BA3F0] border border-[#0A66C2]/30
                  hover:bg-[#0A66C2]/25 transition-colors text-sm font-semibold"
              >
                <FaLinkedin className="text-lg" />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
