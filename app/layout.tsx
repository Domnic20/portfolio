import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { CustomCursor } from "@/components/ui/CustomCursor";

export const metadata: Metadata = {
  metadataBase: new URL("https://yourportfolio.dev"),
  title: {
    default: "Dominic Ajiton — Full Stack Developer",
    template: "%s | Dominic Ajiton",
  },
  description:
    "Full Stack Developer building scalable web applications with expertise in frontend and backend technologies — React, Next.js, NestJS and Node.js.",
  keywords: [
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Node.js",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Dominic Ajiton" }],
  creator: "Dominic Ajiton",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yourportfolio.dev",
    title: "Dominic Ajiton — Full Stack Developer",
    description:
      "Building scalable web applications with React, Next.js, NestJS and Node.js.",
    siteName: "Dominic Ajiton Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dominic Ajiton Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dominic Ajiton — Full Stack Developer",
    description:
      "Building scalable web applications with React, Next.js, NestJS and Node.js.",
    creator: "@dominic_dev",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#0A0A0F" },
    { media: "(prefers-color-scheme: light)", color: "#F8F7F4" },
  ],
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dominic Ajiton",
  url: "https://yourportfolio.dev",
  sameAs: [
    "https://www.linkedin.com/in/dominic-ajiton-a-173b61236",
  ],
  jobTitle: "Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, NestJS and Node.js, based in Nagercoil, Tamil Nadu, India.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Outfit:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="noise antialiased">
        <ThemeProvider>
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
