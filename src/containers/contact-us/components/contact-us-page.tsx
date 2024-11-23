'use client';

import dynamic from 'next/dynamic';
import { Suspense } from 'react';

const ContactForm = dynamic(
  () => import('@/containers/contact-us/components/contact-us-form').then((mod) => mod.ContactForm),
  { ssr: false },
);

export function ContactUsPage() {
  return (
    <div className="container min-h-screen py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-h1">ติดต่อเรา</h1>
          <p className="mt-4 text-paragraph-medium text-muted-foreground">
            หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดติดต่อเราผ่านแบบฟอร์มด้านล่าง
          </p>
        </div>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <ContactForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
