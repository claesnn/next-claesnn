import { Badge } from "@/components/ui/badge";
import { kurale } from "@/lib/fonts";
import { cn } from "@/lib/utils";

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
    description: "The Next.js version of this website.",
    url: "https://www.claesnn.com",
    github: "https://github.com/claesnn/next-claesnn",
    tags: ["SSG", "Next.js", "Router"],
  },
  {
    name: "Claesnn.com - SvelteKit",
    description: "The SvelteKit version of this website.",
    url: "https://svelte-claesnn.pages.dev/",
    github: "https://github.com/claesnn/svelte-claesnn",
    tags: ["SSR", "SvelteKit", "Router"],
  },
  {
    name: "Claesnn.com - TanStack Router",
    description: "The TanStack Router (client side) version of this website.",
    url: "https://tan-claesnn.pages.dev/",
    github: "https://github.com/claesnn/tan_claesnn",
    tags: ["CSR", "TanStack", "Client", "Router"],
  },
];

export default function Page() {
  return (
    <div>
      <ul className="space-y-5">
        {projects.map((project) => (
          <li
            key={project.name}
            className="space-y-2 border-b pb-5 last:border-b-0"
          >
            <h2 className={cn("text-2xl", kurale.className)}>{project.name}</h2>
            <p>{project.description}</p>
            <p className="text-sm uppercase">
              <a href={project.url}>Website</a> -{" "}
              <a href={project.github}>GitHub</a>
            </p>
            <div className="flex space-x-2">
              {project.tags &&
                project.tags.map((tag) => (
                  <Badge variant="secondary" key={tag}>
                    {tag}
                  </Badge>
                ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
