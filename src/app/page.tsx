import HomePage from "@/containers/home-page";
import type { Metadata } from "next";
import React from "react";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Print and Screen | บริการพิมพ์และสกรีนมืออาชีพ",
  description:
    "Print and Screen ให้บริการพิมพ์และสกรีนคุณภาพสูง ด้วยการออกแบบที่ไม่ซ้ำใคร ราคาแข่งขันได้ และส่งมอบงานรวดเร็ว",
  keywords:
    "Print and Screen, บริการพิมพ์, บริการสกรีน, ออกแบบสิ่งพิมพ์, พิมพ์มืออาชีพ",
};

export default function Page() {
  return <HomePage />;
}
