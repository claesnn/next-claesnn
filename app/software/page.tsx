import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { Earth, FolderGit, GitBranch, GitCommit, Github } from "lucide-react";

type SoftwareProject = {
  name: string;
  description: string;
  url: string;
  github: string;
  tags?: string[];
};

const projects: SoftwareProject[] = [
  {
    name: "Claesnn.com - Next.js",
    description: "This website :) Also, the Next.js version of claesnn.com",
    url: "https://www.claesnn.com",
    github: "https://github.com/claesnn/next-claesnn",
    tags: ["SSG", "Next.js", "Router"],
  },
  {
    name: "Claesnn.com - SvelteKit",
    description: "The SvelteKit version of claesnn.com",
    url: "https://svelte-claesnn.pages.dev/",
    github: "https://github.com/claesnn/svelte-claesnn",
    tags: ["SSG", "SvelteKit", "Router"],
  },
  {
    name: "Claesnn.com - TanStack Router",
    description: "The TanStack Router (client side) version of claesnn.com",
    url: "https://tan-claesnn.pages.dev/",
    github: "https://github.com/claesnn/tan_claesnn",
    tags: ["CSR", "TanStack", "Client", "Router"],
  },
];

export default function Page() {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.name} className="border-b last:border-b-0 pb-8">
            <h2 className={cn("text-xl mb-4", kurale.className)}>
              {project.name}
            </h2>

            <p className="mb-4">{project.description}</p>

            <div className="flex space-x-2 mb-6">
              {project.tags &&
                project.tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    {tag}
                  </Badge>
                ))}
            </div>
            <div className="uppercase flex space-x-3">
              <a href={project.url}>
                <Button variant="outline" size="sm">
                  <span className="mr-2">Deployment</span>
                  <Earth size={18} />
                </Button>
              </a>
              <a href={project.github}>
                <Button variant="outline" size="sm">
                  <span className="mr-2">Github Code</span>
                  <GitCommit size={18} />
                </Button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
