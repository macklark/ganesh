"use client";

import { useState } from "react";
import Image from "next/image";

type Satisfaction = "green" | "yellow" | "red";

const satisfactionMap: Record<Satisfaction, { emoji: string; bg: string }> = {
  green: { emoji: "😄", bg: "bg-green-500/15" },
  yellow: { emoji: "😐", bg: "bg-yellow-500/15" },
  red: { emoji: "☹️", bg: "bg-red-500/15" },
};

const coverPalette = [
  "from-rose-500/40 to-rose-900/40",
  "from-sky-500/40 to-sky-900/40",
  "from-amber-500/40 to-amber-900/40",
  "from-emerald-500/40 to-emerald-900/40",
  "from-violet-500/40 to-violet-900/40",
];

function MediaCover({
  title,
  cover,
  index,
  className,
  sizes,
  placeholderEmoji = "📖",
}: {
  title: string;
  cover?: string;
  index: number;
  className: string;
  sizes?: string;
  placeholderEmoji?: string;
}) {
  if (cover) {
    return (
      <div className={`relative overflow-hidden rounded-md shadow-lg ${className}`}>
        <Image
          src={cover}
          alt={`Cover of ${title}`}
          fill
          sizes={sizes ?? "128px"}
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={`Cover of ${title}`}
      className={`flex items-center justify-center rounded-md bg-gradient-to-br ${coverPalette[index % coverPalette.length]} shadow-lg ${className}`}
    >
      <span className="text-2xl">{placeholderEmoji}</span>
    </div>
  );
}

const currentlyReading = {
  title: "Project Hail Mary",
  author: "Andy Weir",
  cover: "/hailMary.png",
};

const books = [
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    cover: "/hailMary.png",
    rating: "green" as Satisfaction,
  },
  {
    title: "Around the world in 80 Days",
    author: "Jules Verne",
    cover: "/aroundTW.png",
    rating: "green" as Satisfaction
  },
  {
    title: "IKIGAI",
    author: "Francesc Miralles and Hector Garcia",
    cover: "/ikigai.png",
    rating: "red" as Satisfaction
  }
];

const currentlyPlaying = {
  title: "Marvel's Spider-Man",
  platform: "PS5",
  cover: "/spiderMan.png"
};

const games = [
  {
    title: "Marvel's Spider-Man",
    platform: "PS5",
    cover: "/spiderMan.png",
    rating: "green" as Satisfaction,
  },
  {
    title: "F1, 24",
    platform: "PS5",
    cover: "/F124.png",
    rating: "green" as Satisfaction,
  },
];

const tabs = [
  { key: "books", label: "Books" },
  { key: "games", label: "Games" },
] as const;

export default function Library() {
  const [active, setActive] = useState<(typeof tabs)[number]["key"]>("books");

  return (
    <main className="flex flex-col items-center pt-24 sm:pt-28 min-h-screen px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-md text-gray-400">My</h1>
        <h2 className="text-3xl sm:text-4xl text-white">Library</h2>
      </div>

      <div className="w-full max-w-2xl mt-10 sm:mt-12 flex flex-col items-center">
        <span className="text-xs uppercase tracking-widest text-white/30">
          {active === "books" ? "Currently Reading" : "Currently Playing"}
        </span>
        {active === "books" ? (
          <MediaCover
            title={currentlyReading.title}
            cover={currentlyReading.cover}
            index={0}
            className="mt-4 w-[140px] h-[200px] sm:w-[160px] sm:h-[220px]"
            sizes="160px"
          />
        ) : (
          <MediaCover
            title={currentlyPlaying.title}
            cover={currentlyPlaying.cover}
            index={0}
            className="mt-4 w-[140px] h-[200px] sm:w-[160px] sm:h-[220px]"
            sizes="160px"
            placeholderEmoji="🎮"
          />
        )}
        <div className="mt-2 h-2 w-20 rounded-full bg-white/10 blur-sm" />
        <span className="mt-4 text-white text-base">
          {active === "books" ? currentlyReading.title : currentlyPlaying.title}
        </span>
        <span className="text-white/40 text-sm">
          {active === "books" ? currentlyReading.author : currentlyPlaying.platform}
        </span>
      </div>

      <div className="w-full max-w-2xl mt-10 sm:mt-12 flex gap-4">
        {tabs.map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`text-sm cursor-pointer transition-colors ${
              active === key
                ? "text-white"
                : "text-white/30 hover:text-white/70"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="w-full max-w-2xl mt-6 sm:mt-8 grid grid-cols-2 gap-4">
        {active === "books"
          ? books.map(({ title, author, cover, rating }, index) => (
              <div
                key={title}
                className="flex items-center gap-3 p-2 border border-white/10 hover:border-white/25 rounded-lg transition-colors"
              >
                <MediaCover
                  title={title}
                  cover={cover}
                  index={index}
                  className="w-10 aspect-[2/3] shrink-0"
                  sizes="40px"
                />
                <div className="flex flex-col min-w-0">
                  <span className="block text-sm text-white/80 leading-snug truncate">
                    {title}
                  </span>
                  <p className="text-xs text-white/30 leading-relaxed truncate">
                    {author}
                  </p>
                  <span
                    className={`mt-1 inline-flex w-fit items-center justify-center rounded-full text-sm leading-none h-6 w-6 ${satisfactionMap[rating].bg}`}
                  >
                    {satisfactionMap[rating].emoji}
                  </span>
                </div>
              </div>
            ))
          : games.map(({ title, platform, cover, rating }, index) => (
              <div
                key={title}
                className="flex items-center gap-3 p-2 border border-white/10 hover:border-white/25 rounded-lg transition-colors"
              >
                <MediaCover
                  title={title}
                  cover={cover}
                  index={index}
                  className="w-10 aspect-[2/3] shrink-0"
                  sizes="40px"
                  placeholderEmoji="🎮"
                />
                <div className="flex flex-col min-w-0">
                  <span className="block text-sm text-white/80 leading-snug truncate">
                    {title}
                  </span>
                  <p className="text-xs text-white/30 leading-relaxed truncate">
                    {platform}
                  </p>
                  <span
                    className={`mt-1 inline-flex w-fit items-center justify-center rounded-full text-sm leading-none h-6 w-6 ${satisfactionMap[rating].bg}`}
                  >
                    {satisfactionMap[rating].emoji}
                  </span>
                </div>
              </div>
            ))}
      </div>
    </main>
  );
}
