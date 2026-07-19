import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");

export type PostMetadata = {
  title: string;
  description: string;
  date: string;
};

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getPostMetadata(slug: string): Promise<PostMetadata> {
  const { metadata } = await import(`@/content/blog/${slug}.mdx`);
  return metadata;
}

export async function getAllPosts(): Promise<(PostMetadata & { slug: string })[]> {
  const slugs = getPostSlugs();
  const posts = await Promise.all(
    slugs.map(async (slug) => ({
      slug,
      ...(await getPostMetadata(slug)),
    }))
  );
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
