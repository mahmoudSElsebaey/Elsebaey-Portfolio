import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description:
    "About Mahmoud Elsebaey — Full-Stack MERN Developer. Background, education, experience, and skills in React, TypeScript, Node.js, Express.js, and MongoDB.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Mahmoud Elsebaey | Full-Stack MERN Developer",
    description:
      "Background, education, experience, and skills of Mahmoud Elsebaey — Full-Stack MERN Developer specializing in React, TypeScript, Node.js, and MongoDB.",
    url: "/about",
    type: "profile",
  },
  twitter: {
    card: "summary",
    title: "About Mahmoud Elsebaey | Full-Stack MERN Developer",
    description:
      "Background, education, experience, and skills of Mahmoud Elsebaey — Full-Stack MERN Developer.",
  },
};

import React from "react";
import About from "./About";

export default function projectPage() {
  return (
    <>
      <About />
    </>
  );
}
