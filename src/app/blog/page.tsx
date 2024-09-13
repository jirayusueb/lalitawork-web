import useDateFormat from "@/hooks/use-date-format";
import useDirectusImage from "@/hooks/use-directus-image";
import useReadingTime from "@/hooks/use-reading-time";
import directus from "@/lib/directus";
import { createPage } from "@/utils/create-page";
import { readItems } from "@directus/sdk";
import Image from "next/image";
import Link from "next/link";

const { Page, metadata } = createPage({
  component: ({ data = [] }) => {
    const { getImage } = useDirectusImage();
    const { formatDate } = useDateFormat();
    const { getReadingTime } = useReadingTime();

    return (
      <div className="min-h-screen flex flex-col gap-10">
        <div className="flex justify-center items-center h-[25vh] border-b">
          <div className="flex flex-col gap-2 text-center max-w-lg">
            <h1 className="text-h1">บทความและความคิด</h1>
            <p>
              แบ่งปันมุมมองและประสบการณ์ผ่านบทความที่หวังว่าจะช่วยเสริมสร้างความเข้าใจและเปิดโลกทัศน์ใหม่ๆ
            </p>
          </div>
        </div>
        <div className="container py-10">
          <ul>
            {data.map((post) => {
              return (
                <Link
                  href={`/blog/${post.slug}`}
                  key={post.id}
                  className="grid grid-cols-2 gap-6 group hover:cursor-pointer"
                >
                  <div className="aspect-[16/9] border rounded-lg overflow-hidden">
                    <Image
                      loading="lazy"
                      className="size-full bg-muted group-hover:scale-105 transition-all duration-300"
                      src={getImage(post.thumbnail, {
                        width: 400,
                        height: 300,
                        format: "webp",
                      })}
                      alt={post.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col justify-center gap-2">
                    <h2 className="text-h5 group-hover:text-muted-foreground transition-all duration-300">
                      {post.title}
                    </h2>
                    <p className="text-paragraph-medium text-muted-foreground">
                      {post.description}
                    </p>
                    <div className="flex gap-2 text-paragraph-x-small text-muted-foreground">
                      <p>{`${formatDate(post.created_at)}`}</p>
                      <p>•</p>
                      <p>{getReadingTime(post.content)}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </ul>
        </div>
      </div>
    );
  },
  loader: async () => {
    const response = await directus?.request(
      readItems("blog", {
        limit: 10,
      })
    );

    return response;
  },
  metadata: async ({ data }) => ({
    title: "Blog",
    description: "Blog",
  }),
});

export { metadata };
export default Page;
