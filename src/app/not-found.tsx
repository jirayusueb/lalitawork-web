'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function NotFound() {
  useEffect(() => {
    window?.dataLayer?.push({
      event: '404',
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-h2">404 - ไม่พบหน้าที่คุณกำลังค้นหา</h1>
      <p className="text-paragraph-medium text-muted-foreground max-w-md">
        ขออภัย เราไม่สามารถค้นหาหน้าที่คุณต้องการได้ อาจเป็นไปได้ว่าหน้านี้ถูกย้ายหรือลบออกไปแล้ว
      </p>
      <Link href="/" className="text-paragraph-medium text-primary hover:underline">
        กลับไปยังหน้าหลัก
      </Link>
    </div>
  );
}
