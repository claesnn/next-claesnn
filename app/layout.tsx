import type { Metadata } from "next";
import { Inter as FontSans, Oswald } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });
const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Photography, Software, and Coffe | Claes Nymand Nilsson",
  description: "Photography, Software, and Coffee by Claes Nymand Nilsson",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <header className="px-4 py-2 flex justify-between place-items-center border-b">
          <div className={cn("text-2xl font-display", oswald.variable)}>
            CLAESNN
          </div>
          <nav className="space-x-3">
            <Link href="/">Home</Link>
            <Link href="/test">Test</Link>
          </nav>
        </header>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
