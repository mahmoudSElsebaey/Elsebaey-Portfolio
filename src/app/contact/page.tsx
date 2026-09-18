import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Mahmoud Elsebaey, Full-Stack MERN Developer. Get in touch for web development projects, collaborations, or freelance opportunities.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Mahmoud Elsebaey | Full-Stack MERN Developer",
    description:
      "Get in touch with Mahmoud Elsebaey for web development projects, collaborations, or freelance opportunities.",
    url: "/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Mahmoud Elsebaey",
    description:
      "Get in touch for web development projects, collaborations, or freelance opportunities.",
  },
};

import Contact from "./Contact";

export default function projectPage() {
  return (
    <>
    <Contact />
    </>
  )
}
