import type { Metadata, Viewport } from "next";
import { Press_Start_2P, VT323 } from "next/font/google";
import "./globals.css";

const pressStart = Press_Start_2P({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-press-start",
  display: "swap",
});

const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
  display: "swap",
});

const SITE = "https://nagham-abdullah-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: "Nagham Abdullah | Frontend & Full-Stack Developer",
  description:
    "Frontend and full-stack developer, UI/UX designer and former frontend team lead. I build production web products with React, Next.js, TypeScript and Supabase — presented as a retro pixel-art quest log.",
  keywords: [
    "Nagham Abdullah",
    "Frontend Developer",
    "Full-Stack Developer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Supabase",
    "Lebanon",
  ],
  authors: [{ name: "Nagham Abdullah", url: SITE }],
  creator: "Nagham Abdullah",
  alternates: { canonical: SITE },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "Nagham Abdullah",
    title: "Nagham Abdullah | Frontend & Full-Stack Developer",
    description:
      "Production web products with React, Next.js, TypeScript and Supabase — dashboards, multi-role platforms and public sites.",
    images: [
      {
        url: "/projects/urm-enroll-desktop.jpg",
        width: 1600,
        height: 1000,
        alt: "Selected work by Nagham Abdullah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nagham Abdullah | Frontend & Full-Stack Developer",
    description:
      "Production web products with React, Next.js, TypeScript and Supabase.",
    images: ["/projects/urm-enroll-desktop.jpg"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#06061a",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${pressStart.variable} ${vt323.variable} h-full scroll-smooth`}>
      <body className="min-h-full flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
