import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ganesh Kolavennu",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${ubuntu.className} h-full`}>
      <body className="min-h-full bg-black">{children}</body>
    </html>
  );
}
