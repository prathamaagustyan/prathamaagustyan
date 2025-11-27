import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/next";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Prathama Agustyan — Portfolio",
  description:
    "Portfolio of Prathama Agustyan, continuously expanding knowledge and learning the latest modern technologies.",
  openGraph: {
    title: "Prathama Agustyan — Portfolio",
    description:
      "Portfolio of Prathama Agustyan, continuously expanding knowledge and learning the latest modern technologies.",
    url: "https://www.prathamaagustyan.my.id",
    siteName: "Prathama Agustyan — Portfolio",
    images: [
      {
        url: "https://www.prathamaagustyan.my.id/og-demos.png",
        width: 1200,
        height: 630,
        alt: "Preview of Prathama Agustyan's Portfolio Website",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Prathama Agustyan — Portfolio",
    description:
      "Portfolio of Prathama Agustyan, continuously expanding knowledge and learning the latest modern technologies.",
    images: ["https://www.prathamaagustyan.my.id/og-demos.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          "min-h-screen bg-zinc-950 font-sans antialiased text-zinc-100",
          jakarta.variable
        )}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
