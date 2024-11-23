import directus from '@/lib/directus';
import { readItems } from '@directus/sdk';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

type Params = Promise<{ slug: string }>;

interface PageProps {
  params: Params;
}

async function getData(slug: string) {
  const response = await directus?.request(
    readItems('post', {
      filter: {
        slug,
      },
    }),
  );

  if (!response?.length) {
    notFound();
  }

  return response[0];
}

export default async function BlogPost(props: PageProps) {
  const params = await props.params;
  const data = await getData(params.slug);

  return (
    <div className="min-h-screen flex flex-col gap-6">
      <div className="flex justify-center items-center min-h-[25vh] border-b py-10">
        <div className="flex flex-col gap-2 text-center max-w-screen-md text-balance">
          <h1 className="text-h3">{data.title}</h1>
          <p>{data.description}</p>
        </div>
      </div>
      <div className="container max-w-screen-lg py-10 w-full">
        <Markdown remarkPlugins={[remarkGfm]} className="prose prose-slate">
          {data.content}
        </Markdown>
      </div>
    </div>
  );
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const response = await directus?.request(
    readItems('post', {
      filter: {
        slug: params.slug,
      },
    }),
  );

  if (!response?.length) {
    return {
      title: 'Not Found',
      description: 'The requested blog post could not be found',
    };
  }

  return {
    title: response[0]?.title,
    description: response[0]?.description,
    keywords: response[0]?.keywords,
    alternates: {
      canonical: `/blog/${response[0]?.slug}`,
    },
  };
}

export const revalidate = 3600; // 1 hour
