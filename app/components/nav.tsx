"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/blog", label: "Blog" },
  { href: "/notes", label: "Notes" },
  {href: "/library", label: "Library"}
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6 sm:pt-8 flex justify-center">
      <ul className="flex gap-6 px-5 py-2.5 rounded-full border border-black/10 bg-white/40 backdrop-blur-md">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? "text-black"
                  : "text-black/30 hover:text-black/70"
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
