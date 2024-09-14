import ContactUsPage from '@/containers/contact-us-page';
import { createPage } from '@/utils/create-page';

const { Page } = createPage({
  component: () => {
    return <ContactUsPage />;
  },
});

export const revalidate = 3600; // 1 hour

export async function generateMetadata() {
  return {
    title: 'ติดต่อเรา | Lalitawork',
    description: 'ติดต่อเราเพื่อคำขอรับบริการพิมพ์และสำรวจของที่ต้องการ',
    alternates: {
      canonical: '/contact',
    },
  };
}

export default Page;
