import Link from "next/link";
import { getAllPosts, formatDate } from "./posts";

export default async function Blog() {
  const posts = await getAllPosts();

  return (
    <main className="flex flex-col items-center pt-24 sm:pt-28 px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-md text-gray-500">My</h1>
        <h2 className="text-3xl sm:text-4xl text-black">Blog</h2>
      </div>

      <div className="w-full max-w-2xl mt-10 sm:mt-12 flex flex-col gap-3">
        {posts.map(({ slug, title, description, date }) => (
          <Link
            key={slug}
            href={`/blog/${slug}`}
            className="flex flex-col gap-1 p-4 border border-black/10 hover:border-black/25 rounded-lg transition-colors"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-sm text-black/80 leading-snug">
                {title}
              </span>
              <span className="text-xs text-black/30 shrink-0">
                {formatDate(date)}
              </span>
            </div>
            <p className="text-xs text-black/30 leading-relaxed">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
