import { ContactUsPage } from '@/containers/contact-us/components/contact-us-page';
import { createPage } from '@/utils/create-page';

const { Page } = createPage({
  component: () => <ContactUsPage />,
});

export const revalidate = 3600; // 1 hour

export async function generateMetadata() {
  return {
    title: 'ติดต่อเรา',
    description: 'หากคุณมีคำถามหรือต้องการข้อมูลเพิ่มเติม โปรดติดต่อเราผ่านแบบฟอร์มด้านล่าง',
    alternates: {
      canonical: '/contact',
    },
  };
}

export default Page;
