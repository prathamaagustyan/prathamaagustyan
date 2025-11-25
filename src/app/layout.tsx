import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans", 
});

export const metadata: Metadata = {
  title: "Prathama Agustyan",
  description: "Portfolio of Prathama Agustyan, showcasing web projects and skills.",
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
      </body>
    </html>
  );
}