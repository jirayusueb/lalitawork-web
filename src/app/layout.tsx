import type { Metadata } from "next";
import "@/styles/globals.css";
import { IBM_Plex_Sans_Thai as FontSans } from "next/font/google";
import { cn } from "@/lib/utils";
import app from "@/configs/app";
import { isUrl } from "@/utils/is-url";

const fontSans = FontSans({
  subsets: ["thai"],
  weight: ["400", "500", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: isUrl(app.host) ? new URL(app.host) : undefined,
  title: {
    default: "Lalitawork | Print and screen",
    template: "%s | Lalitawork",
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
        <div className="h-20 border-b w-full" />
        {children}
      </body>
    </html>
  );
}
