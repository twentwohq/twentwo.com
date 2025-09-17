import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Twentwo - Technology Company | Building Innovative Solutions",
  description: "Twentwo is a pragmatic technology company focused on building innovative solutions and meaningful products. Founded in 2025, we create cutting-edge technology solutions.",
  keywords: "Twentwo, twentwo, twenty two, 22, technology company, tech startup, innovative solutions, software development, Jason Ganub",
  authors: [{ name: "Jason Ganub" }],
  creator: "Jason Ganub",
  publisher: "Twentwo",
  metadataBase: new URL('https://twentwo.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Twentwo - Technology Company",
    description: "Twentwo is a pragmatic technology company focused on building innovative solutions and meaningful products.",
    url: 'https://twentwo.com',
    siteName: 'Twentwo',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo-22.png',
        width: 300,
        height: 300,
        alt: 'Twentwo Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Twentwo - Technology Company',
    description: 'Building the future, one project at a time.',
    creator: '@jason_ganub',
    images: ['/logo-22.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      url: '/logo-22.svg',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/logo-22.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/logo-22.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      url: '/logo-22.png',
    },
    {
      rel: 'shortcut icon',
      url: '/logo-22.png',
    }
  ],
  verification: {
    google: 'verification-token',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
