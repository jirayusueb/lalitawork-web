// biome-disable lint/suspicious/noExplicitAny: <explanation>

import type { Metadata, ResolvingMetadata } from "next";
import type { AnyZodObject, z } from "zod";

type InferParams<Params> = Params extends readonly string[]
  ? {
      [K in Params[number]]: string;
    }
  : Params extends AnyZodObject
  ? z.infer<Params>
  : unknown;

type LoaderFn<
  Params extends readonly string[] | AnyZodObject,
  SearchParams extends readonly string[] | AnyZodObject
> = (args: {
  params: InferParams<Params>;
  searchParams: InferParams<SearchParams>;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
}) => Promise<any>;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
type InferLoaderData<Loader> = Loader extends (args: any) => Promise<infer T>
  ? T
  : unknown;

export interface CreatePageProps<
  Params extends readonly string[] | AnyZodObject,
  SearchParams extends readonly string[] | AnyZodObject,
  Loader extends LoaderFn<Params, SearchParams> = LoaderFn<Params, SearchParams>
> {
  component: React.ComponentType<{
    data: InferLoaderData<Loader>;
    params: InferParams<Params>;
    searchParams?: InferParams<SearchParams>;
  }>;
  loader?: Loader;
  metadata?:
    | Metadata
    | ((
        args: {
          data: InferLoaderData<Loader>;
          params: InferParams<Params>;
          searchParams: InferParams<SearchParams>;
        },
        parent: ResolvingMetadata
      ) => Promise<Metadata>);
  params?: Params;
  searchParams?: SearchParams;
}

function parseParams<Schema extends readonly string[] | AnyZodObject>(
  params: Record<string, string>,
  schema?: Schema
) {
  if (schema && "parse" in schema) {
    return schema.parse(params) as InferParams<Schema>;
  }

  return params as InferParams<Schema>;
}

export const createPage = <
  const Params extends readonly string[] | AnyZodObject,
  const SearchParams extends readonly string[] | AnyZodObject,
  Loader extends LoaderFn<Params, SearchParams> = LoaderFn<Params, SearchParams>
>(
  props: CreatePageProps<Params, SearchParams, Loader>
) => {
  const {
    params: paramsSchema,
    searchParams: searchParamsSchema,
    component: PageComponent,
    loader,
    metadata,
  } = props;

  // We don't really care about the types here since it's internal
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  async function Page(props: any) {
    const params = parseParams(props.params, paramsSchema);
    const searchParams = parseParams(props.searchParams, searchParamsSchema);

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    let pageProps: any = {
      params,
      searchParams,
    };

    if (typeof loader === "function") {
      const data = await loader(pageProps);

      pageProps = {
        ...pageProps,
        data,
      };
    }

    return <PageComponent {...pageProps} />;
  }

  if (typeof metadata === "function") {
    return {
      Page,
      generateMetadata: async (
        {
          params,
          searchParams,
        }: {
          params: InferParams<Params>;
          searchParams: InferParams<SearchParams>;
        },
        parent: ResolvingMetadata
      ) => {
        const data =
          typeof loader === "function"
            ? await loader({
                params,
                searchParams,
              })
            : undefined;

        return metadata(
          {
            data,
            params,
            searchParams,
          },
          parent
        );
      },
    };
  }

  return {
    Page,
    metadata,
  };
};
