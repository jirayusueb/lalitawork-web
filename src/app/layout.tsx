import type { Metadata } from 'next';
import '@/styles/globals.css';
import WebVitals from '@/app/web-vitals';
import GoogleAnalytics from '@/components/shared/google-analytics';
import ReactQueryProvider from '@/components/shared/react-query-provider';
import config from '@/configs';
import { cn } from '@/lib/utils';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { IBM_Plex_Sans_Thai as FontSans } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { Toaster } from 'sonner';

const fontSans = FontSans({
  subsets: ['thai'],
  weight: ['400', '500', '700'],
  variable: '--font-sans',
  preload: true,
  adjustFontFallback: false,
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(config.app.host),
  title: {
    default: 'Lalitawork | บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ',
    template: '%s | Lalitawork บริการพิมพ์และสกรีน',
  },
  description:
    'Lalitawork ให้บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ตอบโจทย์ทุกความต้องการ',
  alternates: {
    canonical: '/',
  },
  applicationName: 'Lalitawork',
  referrer: 'origin-when-cross-origin',
  openGraph: {
    type: 'website',
    url: config.app.host,
    title: 'Lalitawork | บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ',
    locale: 'th-TH',
    description:
      'Lalitawork ให้บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ตอบโจทย์ทุกความต้องการ',
    images: [
      {
        url: 'https://ogstudio.app/api/og/b3N3MzB6N3Z6Nnpwbzl2OnRidmE2dDZpcw==',
        width: 1200,
        height: 630,
        alt: 'Lalitawork บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ',
      },
    ],
  },
  generator: 'Next.js',
  creator: 'Lalitawork',
  publisher: 'Lalitawork',
  keywords: [
    'พิมพ์',
    'สกรีน',
    'ป้าย',
    'สติ๊กเกอร์',
    'สกรีนสินค้า',
    'ด้วยเทคโนโลยีดิจิทัลล่าสุด',
    'รวดเร็ว',
    'ตอบโจทย์ทุกความต้องการ',
    'lalitawork',
  ],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const revalidate = 3600; // 1 hour

const queryClient = new QueryClient();

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
          'min-h-screen bg-background font-sans antialiased text-foreground',
          fontSans.variable,
        )}
      >
        <ReactQueryProvider>
          <Toaster />
          <GoogleAnalytics />
          <WebVitals />
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
                <ul className="flex flex-col gap-2.5 text-label-small">
                  <li>
                    <h2>Lalitawork Print & Screen - บริการพิมพ์และสกรีนคุณภาพสูง</h2>
                  </li>
                  <li>
                    <p>
                      บริการพิมพ์และสกรีนคุณภาพสูง ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว ไม่มีขั้นต่ำ
                      ตั้งแต่ 1 ชิ้น ตอบโจทย์ทุกความต้องการ ติดต่อ Lalitawork วันนี้
                    </p>
                  </li>
                  <li>
                    <strong>โทร:</strong>{' '}
                    <a href="tel:021160144" aria-label="โทร 02-116-0144">
                      02-116-0144
                    </a>
                  </li>
                  <li>
                    <strong>มือถือ:</strong>{' '}
                    <a href="tel:0626245656" aria-label="โทร 062-624-5656">
                      062-624-5656
                    </a>
                  </li>
                  <li>
                    <strong>อีเมล:</strong>{' '}
                    <a href="mailto:litawork1@gmail.com" aria-label="ส่งอีเมลถึงเรา">
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
        </ReactQueryProvider>
      </body>
    </html>
  );
}
