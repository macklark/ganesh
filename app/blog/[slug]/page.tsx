import { getPostSlugs, getPostMetadata, formatDate } from "../posts";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { title, description } = await getPostMetadata(slug);
  return { title, description };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { default: Post } = await import(`@/content/blog/${slug}.mdx`);
  const { title, description, date } = await getPostMetadata(slug);

  return (
    <main className="flex flex-col items-center pt-24 sm:pt-28 px-4">
      <div className="w-full max-w-2xl">
        <span className="text-xs text-black/30">{formatDate(date)}</span>
        <h1 className="text-3xl sm:text-4xl text-black mt-1">{title}</h1>
        <p className="text-sm text-black/40 mt-2">{description}</p>
      </div>

      <article className="w-full max-w-2xl mt-10 sm:mt-12">
        <Post />
      </article>
    </main>
  );
}
