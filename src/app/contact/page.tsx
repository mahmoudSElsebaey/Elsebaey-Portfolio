import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me",
};

import Contact from "./Contact";

export default function projectPage() {
  return (
    <>
    <Contact />
    </>
  )
}