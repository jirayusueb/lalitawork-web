import { createContactUs } from '@/containers/contact-us/api/contact-us';
import type { ContactUsForm } from '@/containers/contact-us/schema/contact-us';
import { useMutation } from '@tanstack/react-query';

export function useCreateContactUs() {
  return useMutation({
    mutationFn: async (data: ContactUsForm) => await createContactUs(data),
  });
}
