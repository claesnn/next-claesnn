import AuthorInfo from "@/components/AuthorInfo";
import { Metadata } from "next";
import Project from "./Project";
import { projects, SoftwareProject } from "./software-data";

export const metadata: Metadata = {
  title: "Software",
  description: "Software projects by Claes Nymand Nilsson",
};

function HeroProject({ project }: { project: SoftwareProject }) {
  return <Project project={project} className="mx-auto mb-2" hero />;
}

function ProjectSideBySide({ projects }: { projects: SoftwareProject[] }) {
  return (
    <div className="space-y-6 divide-y lg:divide-y-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 lg:divide-x">
      {projects.map((project) => (
        <Project project={project} key={project.name} className="p-6" />
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <>
      <div className="mx-auto flex flex-col mt-8">
        <HeroProject project={projects[0]} />
        <hr className="my-10" />
        <ProjectSideBySide projects={projects.slice(1, 3)} />
        <hr className="my-10" />
        <ProjectSideBySide projects={projects.slice(3, 5)} />
      </div>
      <div className="mx-auto p-8 bg-slate-50 max-w-xl rounded-xl mt-24">
        <AuthorInfo />
      </div>
    </>
  );
}
