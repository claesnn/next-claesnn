import { Inter as FontSans, Oswald } from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});
