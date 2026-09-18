import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development services by Mahmoud Elsebaey — Full-Stack MERN Developer. Frontend, backend, API integration, and performance optimization.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services | Mahmoud Elsebaey — Full-Stack MERN Developer",
    description:
      "Frontend, backend, API integration, and performance optimization services by Mahmoud Elsebaey.",
    url: "/services",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Services | Mahmoud Elsebaey",
    description:
      "Frontend, backend, API integration, and performance optimization services.",
  },
};

import Services from "./Services";

export default function projectPage() {
  return (
    <>
    <Services />
    </>
  )
}
