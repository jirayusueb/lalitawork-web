import React from "react";
import { motion } from "framer-motion";
import HeroSection from "@/containers/home-page/hero-section";
import SolutionSection from "@/containers/home-page/solution-section";
import BenefitSection from "@/containers/home-page/benefit-section";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SolutionSection />
      <BenefitSection />
    </>
  );
}
