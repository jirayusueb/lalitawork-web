import type { Metadata } from "next";
import "@/styles/globals.css";
import { IBM_Plex_Sans_Thai as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { isUrl } from "@/utils/is-url";
import GoogleAnalytics from "@/components/shared/google-analytics";
import config from "@/configs";
import Image from "next/image";
import Link from "next/link";

const fontSans = FontSans({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
  preload: true,
  adjustFontFallback: false,
});

export const metadata: Metadata = {
  metadataBase: isUrl(config.app.host) ? new URL(config.app.host) : undefined,
  title: {
    default: "Lalitawork | บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ",
    template: "%s | Lalitawork บริการพิมพ์และสกรีน",
  },
  description:
    "Lalitawork ให้บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ตอบโจทย์ทุกความต้องการ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: config.app.host,
    title: "Lalitawork | บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ",
    locale: "th-TH",
    description:
      "Lalitawork ให้บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ตอบโจทย์ทุกความต้องการ",
    images: [
      {
        url: "https://ogstudio.app/api/og/b3N3MzB6N3Z6Nnpwbzl2OnRidmE2dDZpcw==",
        width: 1200,
        height: 630,
        alt: "Lalitawork บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ",
      },
    ],
  },
  icons: [
    {
      rel: "icon",
      url: "/favicon/favicon.ico",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-16x16.png",
      sizes: "16x16",
    },
    {
      rel: "icon",
      url: "/favicon/favicon-32x32.png",
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: "/favicon/apple-touch-icon.png",
      sizes: "180x180",
    },
    {
      rel: "icon",
      url: "/favicon/android-chrome-192x192.png",
      sizes: "192x192",
    },
    {
      rel: "icon",
      url: "/favicon/android-chrome-512x512.png",
      sizes: "512x512",
    },
  ],
  manifest: "/favicon/site.webmanifest",
  generator: "Next.js",
  keywords: [
    "พิมพ์",
    "สกรีน",
    "ป้าย",
    "สติ๊กเกอร์",
    "สกรีนสินค้า",
    "ด้วยเทคโนโลยีดิจิทัลล่าสุด",
    "รวดเร็ว",
    "ตอบโจทย์ทุกความต้องการ",
    "lalitawork",
  ],
};

export const revalidate = 60 * 60 * 24; // 1 day

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <head>
        <meta name="next-size-ad" content="" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased text-foreground",
          fontSans.variable
        )}
      >
        <div className="h-20 border-b w-full">
          <div className="container h-full items-center flex justify-between">
            <Link href="/">
              <Image
                src="/lalitawork-large-no-bg-logo.svg"
                alt="Lalitawork Logo"
                loading="lazy"
                width={200}
                height={100}
              />
            </Link>
            <nav className="flex gap-4">
              <Link className="text-subheading-medium" href="/blog">
                บทความ
              </Link>
              <Link className="text-subheading-medium" href="/contact">
                ติดต่อ
              </Link>
            </nav>
          </div>
        </div>
        {children}
        <div className="p-10 border-t w-full flex flex-col gap-6">
          <footer className="flex flex-col gap-6 container">
            <nav aria-label="Footer Navigation">
              <ul className="flex flex-col gap-2.5 text-label-x-small">
                <li>
                  <h2 className="font-bold">
                    Lalitawork Print & Screen - บริการพิมพ์และสกรีนคุณภาพสูง
                  </h2>
                </li>
                <li>
                  <p>
                    บริการพิมพ์และสกรีนคุณภาพสูง ป้าย สติ๊กเกอร์ สกรีนสินค้า
                    ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ไม่มีขั้นต่ำ ตั้งแต่ 1
                    ชิ้น ตอบโจทย์ทุกความต้องการ ติดต่อ Lalitawork วันนี้
                  </p>
                </li>
                <li>
                  <strong>โทร:</strong>{" "}
                  <a href="tel:021160144" aria-label="โทร 02-116-0144">
                    02-116-0144
                  </a>
                </li>
                <li>
                  <strong>มือถือ:</strong>{" "}
                  <a href="tel:0626245656" aria-label="โทร 062-624-5656">
                    062-624-5656
                  </a>
                </li>
                <li>
                  <strong>อีเมล:</strong>{" "}
                  <a
                    href="mailto:litawork1@gmail.com"
                    aria-label="ส่งอีเมลถึงเรา"
                  >
                    litawork1@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/litawork"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ติดตามเราบน Facebook"
                  >
                    Facebook: @Litawork
                  </a>
                </li>
                <li>
                  <a
                    href="https://page.line.me/ynt6242x?openQrModal=true"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="ติดต่อเราทาง Line"
                  >
                    Line: @Litawork
                  </a>
                </li>
              </ul>
            </nav>
            <p className="text-label-x-small text-gray-500 text-center font-mono">
              &copy; 2010-2024 LALITAWORK CO.,LTD. All rights reserved.
            </p>
          </footer>
        </div>
        <GoogleAnalytics />
      </body>
    </html>
  );
}
