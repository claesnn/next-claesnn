import { cn } from "@/lib/utils";
import { SoftwareProject } from "./software-data";
import ProjectButtons from "./ProjectButtons";
import ProjectTitle from "./ProjectTitle";
import ProjectBadges from "./ProjectBadges";

export default function Project({
  project,
  className,
  hero,
}: {
  project: SoftwareProject;
  className?: string;
  hero?: boolean;
}) {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <ProjectTitle title={project.name} hero={hero} />
      <p className="mb-4 mx-auto text-slate-700">{project.description}</p>
      <ProjectBadges tags={project.tags} />
      <ProjectButtons url={project.url} github={project.github} />
    </div>
  );
}
