'use client';

import { Button } from '@/components/ui/button';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useCreateContactUs } from '@/containers/contact-us/api/use-create-contact-us';
import { contactUsFormSchema, type ContactUsForm } from '@/containers/contact-us/schema/contact-us';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProvider, useForm } from 'react-hook-form';
import { toast } from 'sonner';

export function ContactForm() {
  const { mutateAsync: createContactUs } = useCreateContactUs();

  const form = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
  });

  const onSubmit = async (data: ContactUsForm) => {
    await createContactUs(data, {
      onSuccess: () => {
        toast.success('ส่งข้อความสำเร็จ');
        form.reset();
      },
      onError: () => {
        toast.error('เกิดข้อผิดพลาดในการส่งข้อมูล');
      },
    });
  };

  return (
    <FormProvider {...form}>
      <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ชื่อ</FormLabel>
              <FormControl>
                <Input placeholder="กรุณากรอกชื่อของคุณ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>อีเมล</FormLabel>
              <FormControl>
                <Input placeholder="example@example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel>หัวข้อ</FormLabel>
              <FormControl>
                <Input placeholder="กรุณากรอกหัวข้อ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ข้อความ</FormLabel>
              <FormControl>
                <Textarea placeholder="กรุณากรอกข้อความของคุณ" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone_number"
          render={({ field }) => (
            <FormItem>
              <FormLabel>เบอร์โทรศัพท์ (ไม่บังคับ)</FormLabel>
              <FormControl>
                <Input placeholder="กรุณากรอกเบอร์โทรศัพท์" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">ส่งข้อความ</Button>
      </form>
    </FormProvider>
  );
}
