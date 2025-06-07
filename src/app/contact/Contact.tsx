"use client";

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
  },
  
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nasr City,Cairo,Egypt",
    optionAddtion: "Berkit El-saba,Menoufia",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="mx-4 md:mx-0 mb-5 mt-3"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px] ">
          {/* Form */}
          <div className="order-2 xl:h-[55%] xl:order-none ">
            <form className="flex flex-col gap-6 p-10 bg-primary-1000/30 dark:bg-primary-1000/10 rounded-lg ">
              <h3 className="text-4xl text-primary-1000">
                Let&apos;s Work Together
              </h3>
              <p className="opacity-70">
                Whether you have a question, a project idea, or just want to
                connect—feel free to reach out. I’m always open to new
                opportunities and collaborations.
              </p>
              {/* Inputs */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                <Input type="firstname" placeholder="First Name" />
                <Input type="lastname" placeholder="Last Name" />
                <Input type="email" placeholder="Email Address" />
                <Input type="phone" placeholder="Phone Number" />
              </div>
              {/* Select */}
              <Select>
                <SelectTrigger className="w-full ">
                  <SelectValue placeholder="Select a service"></SelectValue>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Select a service</SelectLabel>
                      <SelectItem value="1">UI Development</SelectItem>
                      <SelectItem value="2">React.js Development</SelectItem>
                      <SelectItem value="3">Next.js Development</SelectItem>
                      <SelectItem value="4">Responsive Design</SelectItem>
                      <SelectItem value="5">
                        E-commerce Page Development
                      </SelectItem>
                      <SelectItem value="6">
                        Performance Optimization & Debugging
                      </SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </SelectTrigger>
              </Select>
              {/* Textarea */}
              <Textarea
                placeholder="Type Your Message here "
                className="h-[200px] max-h-[400px] "
              ></Textarea>
              {/* Button */}
              <Button
                size="lg"
                className="max-w-40 rounded-3xl bg-primary-1000 cursor-pointer text-md"
              >
                Send Message
              </Button>
            </form>
          </div>
          {/* Contact Info */}
          <div className="flex-1 flex items-center order-1 xl:order-none xl:justify-end mb-8 xl:mb-0 ">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => {
                return (
                  <li key={index} className="flex items-center  gap-6">
                {/*Icon  */}
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-primary-1000/20 text-primary-1000 rounded-[7px] flex items-center justify-center ">
                      <div className="text-[28px] animate-pulse">{item.icon}</div>
                    </div>
                    <p className="text-2xl font-bold capitalize ">{item.title}</p>
                   {/* description */}
                    <div className={`opacity-90 ${
                            item.optionAddtion && 'mt-7'}`}>
                      <div className="flex items-center gap-1  ">
                        <span
                          className={`${
                            item.optionAddtion &&
                            "w-2 h-2 bg-primary-1000/50 block rounded-full animate-pulse "
                          }`}
                        ></span>
                        <p>{item.description}</p>
                      </div>
                      <div className="flex items-center gap-1 ">
                        <span
                          className={`${
                            item.optionAddtion &&
                            "w-2 h-2 bg-primary-1000/50 block rounded-full"
                          }`}
                        ></span>
                        <p>{item.optionAddtion}</p>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
