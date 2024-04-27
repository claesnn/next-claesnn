import { cn } from "@/lib/utils";
import { Kurale } from "next/font/google";

const kurale = Kurale({ weight: ["400"], subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h2 className={cn("text-2xl", kurale.className)}>Hello!!!</h2>
      Home-
    </main>
  );
}
