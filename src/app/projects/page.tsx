import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Mahmoud Elsebaey — Full-Stack web applications built with React, Next.js, Node.js, Express, and MongoDB. Browse featured work and case studies.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Mahmoud Elsebaey — Full-Stack MERN Developer",
    description:
      "Featured web applications and projects built by Mahmoud Elsebaey using React, Next.js, Node.js, Express, and MongoDB.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Projects | Mahmoud Elsebaey",
    description:
      "Featured web applications built with React, Next.js, Node.js, Express, and MongoDB.",
  },
};

import React from 'react'
// import Projects from "./Projects";
import AllProjects from "./AllProjects";

export default function projectPage() {
  return (
    <>
    {/* <Projects /> */}
    <AllProjects />
    </>
  )
}
