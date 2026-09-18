import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Features",
  description:
    "What Mahmoud Elsebaey can build as a Full-Stack MERN Developer — modern UI features, interactive elements, and scalable web application capabilities.",
  alternates: {
    canonical: "/features",
  },
  openGraph: {
    title: "Features | Mahmoud Elsebaey — Full-Stack MERN Developer",
    description:
      "Modern UI features, interactive elements, and scalable web application capabilities by Mahmoud Elsebaey.",
    url: "/features",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Features | Mahmoud Elsebaey",
    description:
      "Modern UI features, interactive elements, and scalable web applications.",
  },
};

import Features from "./Features";

export default function projectPage() {
  return (
    <>
    <Features />
    </>
  )
}
