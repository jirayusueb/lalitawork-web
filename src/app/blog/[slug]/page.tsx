import { notFound } from "next/navigation";
import { z } from "zod";
import { createPage } from "@/utils/create-page";
import directus from "@/lib/directus";
import { readItem } from "@directus/sdk";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const { Page, metadata } = createPage({
  component: ({ data }) => (
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
  ),
  loader: async ({ params }) => {
    const response = await directus?.request(readItem("blog", params.slug));

    if (!response) {
      notFound();
    }

    return response;
  },
  metadata: async ({ data }) => ({
    title: data.title,
    description: data.description,
  }),
  params: z.object({
    slug: z.string(),
  }),
});

export { metadata };
export default Page;
