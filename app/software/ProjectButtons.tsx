import { Earth, GitCommit } from "lucide-react";

export default function ProjectButtons({
  url,
  github,
}: {
  url: string;
  github: string;
}) {
  return (
    <div className="uppercase flex space-x-4 mx-auto">
      <a href={url} className="flex text-sm text-blue-900">
        <span className="mr-2">Deployment</span>
        <Earth size={18} />
      </a>
      <a href={github} className="flex text-sm text-blue-900">
        <span className="mr-2">Github Code</span>
        <GitCommit size={18} />
      </a>
    </div>
  );
}
