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
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

type ContactInfoType = {
  icon: React.ReactElement;
  title: string;
  description: string;
  optionAddtion?: string;
}[];

const contactInfo: ContactInfoType = [
  {
    icon: <FaPhoneAlt />,
    title: "phone",
    description: "(+20) 120 7247 967",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "mahmoudelsebaey710@gmail.com",
    optionAddtion: "mahmoud.elsebaey999@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nasr City,Cairo,Egypt",
    optionAddtion: "Berkit El-saba,Menoufia",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [feedback, setFeedback] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSelectChange = (value: string) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

    emailjs
      .send(
        "service_x5wsu17",
        "template_pqh87ag",
        formData,
        "dhJNNRyqravgKNwQV"
      )
      .then(
        () => {
          setFeedback({ type: "success", text: "Message sent successfully!" });
          setFormData({
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            service: "",
            message: "",
          });
        },
        () => {
          setFeedback({
            type: "error",
            text: "Failed to send message. Please try again later.",
          });
        }
      );
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
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="mx-4 md:mx-0 mb-5 mt-3"
    >
      <div className="sm:container mx-auto" data-aos="zoom-in">
        <div
          className="flex flex-col xl:flex-row gap-[30px] "
          data-aos="zoom-in"
        >
          {/* Form */}
          <div
            className="order-2 xl:h-[55%] xl:order-none"
            data-aos="zooms-in-right"
          >
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-primary-1000/30 dark:bg-primary-1000/10 rounded-lg "
              data-aos="zoom-in"
            >
              <h3
                className="text-base sm:text-4xl text-primary-1000"
                data-aos="zoom-in"
              >
                Let&apos;s Work Together
              </h3>
              <p
                className="opacity-70 text-xs sm:text-sm md:text-base"
                data-aos="zoom-in"
              >
                Whether you have a question, a project idea, or just want to
                connect—feel free to reach out.
              </p>

              {/* رسائل التنبيه */}
              {feedback && (
                <div
                  className={`p-4 rounded-md mb-4 text-center font-semibold ${
                    feedback.type === "error"
                      ? "bg-red-100 text-red-700"
                      : "bg-green-100 text-green-700"
                  }`}
                >
                  {feedback.text}
                  <button
                    onClick={() => setFeedback(null)}
                    className="ml-3 text-lg font-bold cursor-pointer"
                    aria-label="Close message"
                    type="button"
                  >
                    &times;
                  </button>
                </div>
              )}

              <div
                className="grid grid-cols-1 md:grid-cols-2 gap-6 "
                data-aos="zoom-in"
              >
                <Input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  data-aos="zoom-in"
                />
                <Input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  data-aos="zoom-in"
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  data-aos="zoom-in"
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  data-aos="zoom-in"
                />
              </div>

              <Select
                value={formData.service}
                onValueChange={handleSelectChange}
                data-aos="zoom-in"
              >
                <SelectTrigger className="w-full "  data-aos="zoom-in-left">
                  <SelectValue placeholder="Select a service" data-aos="zoom-in-left" />
                </SelectTrigger>
                <SelectContent data-aos="zoom-in-left">
                  <SelectGroup  data-aos="zoom-in-left">
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="UI Development">
                      UI Development
                    </SelectItem>
                    <SelectItem value="React.js Development">
                      React.js Development
                    </SelectItem>
                    <SelectItem value="Next.js Development">
                      Next.js Development
                    </SelectItem>
                    <SelectItem value="Responsive Design">
                      Responsive Design
                    </SelectItem>
                    <SelectItem value="E-commerce Page Development">
                      E-commerce Page Development
                    </SelectItem>
                    <SelectItem value="Performance Optimization & Debugging">
                      Performance Optimization & Debugging
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              <Textarea
                name="message"
                placeholder="Type Your Message here"
                className="h-[200px] max-h-[400px] "
                value={formData.message}
                onChange={handleChange}
                data-aos="zoom-in"
              />
              <Button
                size="lg"
                className="max-w-40 rounded-3xl bg-primary-1000 cursor-pointer py-4 sm:py-5 text-sm sm:text-base outline disabled:opacity-30 disabled:cursor-not-allowed"
                type="submit"
                disabled={!isFormValid}
                title={`${
                  !isFormValid
                    ? `Please fill all inputs , to able to send email `
                    : ``
                }`}
                data-aos="zoom-in"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div
            className="flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-8 xl:mb-0"
            data-aos="zoom-in-left"
          >
            <ul className="flex flex-col gap-10" data-aos="zoom-in">
              {contactInfo.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 md:gap-6"
                  data-aos="zoom-in"
                >
                  <div className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] xl:w-[72px] xl:h-[72px] bg-primary-1000/20 text-primary-1000 rounded-[7px] flex items-center justify-center ">
                    <div className="text-xl md:text-[28px] animate-pulse">
                      {item.icon}
                    </div>
                  </div>
                  <p
                    className="text-[16px] md:text-2xl font-bold capitalize hidden sm:block"
                    data-aos="zoom-in"
                  >
                    {item.title}
                  </p>
                  <div
                    className={`opacity-90 ${item.optionAddtion && "mt-7"}`}
                    data-aos="zoom-in"
                  >
                    <div className="flex items-center gap-1  ">
                      <span
                        className={`${
                          item.optionAddtion &&
                          "w-2 h-2 bg-primary-1000/50 block rounded-full animate-pulse "
                        }`}
                      />
                      <p className="" data-aos="zoom-in">
                        {item.description}
                      </p>
                    </div>
                    {item.optionAddtion && (
                      <div
                        className="flex items-center gap-1 "
                        data-aos="zoom-in"
                      >
                        <span className="w-2 h-2 bg-primary-1000/50 block rounded-full" />
                        <p data-aos="zoom-in">{item.optionAddtion}</p>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
