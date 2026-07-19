import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: ({ children }) => (
    <h1 className="text-2xl sm:text-3xl text-black mt-10 mb-4 first:mt-0">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl sm:text-2xl text-black mt-8 mb-3">{children}</h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg text-black mt-6 mb-2">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-sm text-black/60 leading-relaxed mb-4">{children}</p>
  ),
  a: ({ children, href }) => (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="text-black underline underline-offset-4 decoration-black/30 hover:decoration-black/70 transition-colors"
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-outside pl-5 text-sm text-black/60 space-y-1 mb-4">
      {children}
    </ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-outside pl-5 text-sm text-black/60 space-y-1 mb-4">
      {children}
    </ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="border-l-2 border-black/20 pl-4 text-sm text-black/50 italic mb-4">
      {children}
    </blockquote>
  ),
  code: ({ children }) => (
    <code className="text-xs bg-black/10 text-black/80 rounded px-1.5 py-0.5">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="text-xs bg-black/5 border border-black/10 rounded-lg p-4 overflow-x-auto mb-4">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-black/10 my-8" />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
