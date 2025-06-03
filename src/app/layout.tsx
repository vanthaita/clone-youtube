import type { Metadata } from "next";
import { Source_Sans_3, Roboto_Mono } from 'next/font/google'
import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-source-sans',
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});
export const metadata: Metadata = {
  title: "Youtube Clone",
  description: "Youtube Clone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${robotoMono.variable} ${sourceSansPro.variable} antialiased` }
      >
          {children}
      </body>
    </html>
  );
}
