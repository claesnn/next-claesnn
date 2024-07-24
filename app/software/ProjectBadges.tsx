import { Badge } from "@/components/ui/badge";

export default function ProjectBadges({ tags }: { tags?: string[] }) {
  return (
    <div className="flex space-x-2 mb-6 mx-auto">
      {tags &&
        tags.map((tag) => (
          <Badge variant="outline" key={tag}>
            {tag}
          </Badge>
        ))}
    </div>
  );
}
