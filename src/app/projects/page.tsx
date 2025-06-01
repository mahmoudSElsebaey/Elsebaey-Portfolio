import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projects",
  description: "Browse my latest work and featured projects",
};

import React from 'react'
import Projects from "./Projects";

export default function projectPage() {
  return (
    <>
    <Projects />
    </>
  )
}
