import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services I offer, from web development to API integration and performance optimization.",
};

import Services from "./Services";

export default function projectPage() {
  return (
    <>
    <Services />
    </>
  )
}
