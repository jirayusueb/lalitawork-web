'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { contactUsFormSchema, type ContactUsForm } from '@/actions/contact-us';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { createItem } from '@directus/sdk';
import directus from '@/lib/directus';

async function submitContactUs(data: ContactUsForm) {
  if (!directus) {
    throw new Error('Directus instance is not available');
  }

  const response = await directus?.request(
    createItem('contact_us', { ...data, status: 'published' }),
  );

  return response;
}

function ContactUsPage() {
  const form = useForm<ContactUsForm>({
    resolver: zodResolver(contactUsFormSchema),
  });

  const mutation = useMutation({
    mutationFn: submitContactUs,
    onSuccess: () => {
      toast.success('ส่งข้อความสำเร็จ');
      form.reset();
    },
    onError: () => {
      toast.error('เกิดข้อผิดพลาดในการส่งข้อมูล');
    },
  });

  const onSubmit = async (data: ContactUsForm) => {
    try {
      await mutation.mutateAsync(data);
    } catch (error) {
      console.error('Error executing mutation:', error);
      toast.error('เกิดข้อผิดพลาดในการส่งข้อมูล');
    }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactUsPage;
