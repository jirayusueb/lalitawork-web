import type { ContactUsForm } from '@/containers/contact-us/schema/contact-us';
import directus from '@/lib/directus';
import { createItem } from '@directus/sdk';
import { tryPromise } from 'effect/Effect';

export const createContactUs = (data: ContactUsForm) => {
  return tryPromise({
    try: () => directus.request(createItem('contact_us', data)),
    catch: (error) => new Error(`Failed to create contact: ${error}`)
  });
};
