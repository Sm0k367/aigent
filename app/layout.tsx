import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AIGENT — Sovereign AI Interface",
  description: "A cinematic 3D web interface powered by coordinated AI agents manifesting creation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full bg-void-black">
      <body
        className={`${inter.className} bg-void-black text-epic-gold min-h-screen antialiased overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
