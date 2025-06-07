import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Features",
  description: "Explore the features of our product and how they can benefit you",
};

import Features from "./Features";

export default function projectPage() {
  return (
    <>
    <Features />
    </>
  )
}
