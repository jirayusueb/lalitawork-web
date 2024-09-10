import HomePage from "@/containers/home-page";
import React from "react";

export const revalidate = 3600;

export default function Page() {
  return <HomePage />;
}
