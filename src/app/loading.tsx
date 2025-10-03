import React from "react";
import HashLoader from "react-spinners/HashLoader";

export default function Loading() {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center ">
      <HashLoader color={`rgb(var(--primary-1000))`} size={60} />
    </div>
  );
}
