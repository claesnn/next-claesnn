import { cn } from "@/lib/utils";

export default function ProjectTitle({
  title,
  hero,
}: {
  title: string;
  hero?: boolean;
}) {
  return (
    <h2
      className={cn(hero ? "text-4xl" : "text-2xl", "mb-4 mx-auto font-bold")}
    >
      {title}
    </h2>
  );
}
