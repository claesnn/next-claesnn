import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import Footer from "./Footer";
import Header from "./Header";
import { fontSans } from "@/lib/fonts";

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
        <div className="min-h-screen">
          <Header />
          <main className="p-4 max-w-7xl mx-auto">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
