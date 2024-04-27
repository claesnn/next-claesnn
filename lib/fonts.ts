import { Inter as FontSans, Oswald, Kurale } from "next/font/google";

export const fontSans = FontSans({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
export const kurale = Kurale({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});
export const oswald = Oswald({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});