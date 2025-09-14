import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Me",
  description: "Learn more about my background, skills, and experiences.",
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
