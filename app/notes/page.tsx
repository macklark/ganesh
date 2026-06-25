import Link from "next/link";

const notes = [
  {
    title: "learn-javascript",
    description: "my notes & code while learning javascript",
    link: "https://github.com/macklark/learn-javascript",
  },
  {
    title: "learn-react",
    description: "my notes & code while learning react",
    link: "https://github.com/macklark/learn-react",
  },
];

export default function Notes() {
  return (
    <main className="flex flex-col items-center pt-24 sm:pt-28 min-h-screen px-4">
      <div className="w-full max-w-2xl">
        <h1 className="text-md text-gray-400">My</h1>
        <h2 className="text-3xl sm:text-4xl text-white">Learnings</h2>
      </div>

      <div className="w-full max-w-2xl mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
        {notes.map(({ title, description, link }) => (
          <Link
            key={link}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col gap-3 p-4 border border-white/10 hover:border-white/25 rounded-lg transition-colors"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-white/40 shrink-0"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span className="text-sm text-white/80 leading-snug">
                {title}
              </span>
            </div>
            <p className="text-xs text-white/30 leading-relaxed">
              {description}
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
