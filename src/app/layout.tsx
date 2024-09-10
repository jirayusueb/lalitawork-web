import type { Metadata } from "next";
import "@/styles/globals.css";
import { IBM_Plex_Sans_Thai as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import { baseUrl } from "@/app/sitemap";

const fontSans = FontSans({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Litawork | Print and screen",
    template: "%s | Litawork",
  },
  description: "Print and screen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="h-20 border-b w-full"></div>
        {children}
      </body>
    </html>
  );
}
