import type { Metadata } from "next"

import { Geist } from 'next/font/google'

import Header from "./header"

export const metadata: Metadata = {
  title: 'Ganesh Kolavennu',
  description: 'Enthusiastic Developer With Industry Experience'
};

const geist = Geist({
  subsets: ['latin']
});

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return(
    <html lang="en" className={geist.className}>
      <body className="bg-primary max-w-3xl mx-auto px-4 py-8">
        <Header />
        {children}
      </body>
    </html>
  )
};