import type { Metadata } from "next"

import Header from "./header"

export const metadata: Metadata = {
  title: 'Ganesh Kolavennu | Frontend Engineer',
  description: 'Enthusiastic Developer With Industry Experience'
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
  return(
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
};