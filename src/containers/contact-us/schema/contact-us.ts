import { z } from 'zod';

export const contactUsFormSchema = z.object({
  name: z.string().min(1, 'กรุณากรอกชื่อ'),
  email: z.string().min(1, 'กรุณากรอกอีเมล').email('รูปแบบอีเมลไม่ถูกต้อง'),
  subject: z.string().min(1, 'กรุณากรอกหัวข้อ'),
  message: z.string().min(1, 'กรุณากรอกข้อความ'),
  phone_number: z
    .string()
    .regex(/^[0-9]*$/, 'กรุณากรอกเฉพาะตัวเลข')
    .min(9, 'เบอร์โทรศัพท์ต้องมีอย่างน้อย 9 หลัก')
    .max(10, 'เบอร์โทรศัพท์ต้องไม่เกิน 10 หลัก')
    .optional(),
});

export type ContactUsForm = z.infer<typeof contactUsFormSchema>;
