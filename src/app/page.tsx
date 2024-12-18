import HomePage from '@/containers/home-page';
import { createPage } from '@/utils/create-page';
import type { Metadata } from 'next';

export const revalidate = 3600; // 1 hour

const metadata: Metadata = {
  title: 'บริการพิมพ์และสกรีนมืออาชีพ | Lalitawork Print and Screen',
  description:
    'Lalitawork ให้บริการพิมพ์และสกรีนคุณภาพสูง ไม่มีขั้นต่ำ ป้าย สติ๊กเกอร์ สกรีนสินค้า ด้วยเทคโนโลยีดิจิทัลล่าสุด รวดเร็ว คุณภาพเยี่ยม ตอบโจทย์ทุกความต้องการ ติดต่อเราวันนี้เพื่อรับบริการพิมพ์และสกรีนระดับมืออาชีพ',
  keywords:
    'บริการพิมพ์, บริการสกรีน, พิมพ์ป้าย, สกรีนเสื้อ, สติ๊กเกอร์, งานพิมพ์ดิจิทัล, สกรีนสินค้า, ออกแบบสิ่งพิมพ์, พิมพ์ไม่มีขั้นต่ำ, Lalitawork',
};

const { Page } = createPage({
  component: HomePage,
  metadata,
});

export default Page;
