import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { MOCK_DATA } from "./data";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const kunstler = localFont({
  src: "../public/fonts/kunstler/KunstlerScript.ttf",
  variable: "--font-kunstler",
  weight: "400",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: `The Wedding of ${MOCK_DATA.couple.groom.first_name} & ${MOCK_DATA.couple.bride.first_name}`,
  description: MOCK_DATA.couple.intro_text,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${playfair.variable} ${kunstler.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col items-center selection:bg-[var(--color-sage)] selection:text-[var(--color-dark-olive)]">
        {/* Main wrapper restricts max width for mobile feel */}
        <div className="w-full max-w-md min-h-screen bg-[var(--color-cream)] shadow-2xl relative overflow-hidden flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
