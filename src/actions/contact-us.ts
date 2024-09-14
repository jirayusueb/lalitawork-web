import { z } from "zod";

export const contactUsFormSchema = z.object({
  subject: z.string().min(1, "กรุณากรอกหัวข้อ"),
  message: z.string().min(1, "กรุณากรอกข้อความ"),
  name: z.string().min(1, "กรุณากรอกชื่อ"),
  email: z.string().email("อีเมลไม่ถูกต้อง"),
  phone_number: z.string().optional().refine(
    (val) => !val || /^[0-9]{10}$/.test(val),
    { message: "หมายเลขโทรศัพท์ไม่ถูกต้อง (กรุณากรอกเฉพาะตัวเลข 10 หลัก)" }
  ),
});

export type ContactUsForm = z.infer<typeof contactUsFormSchema>;
