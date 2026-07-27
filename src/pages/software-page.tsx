import {
  ExternalLinkIcon,
  GithubIcon,
  MoveUpRightIcon,
} from "lucide-react"

import { PageIntro } from "@/components/page-intro"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { projects } from "@/lib/software-data"
import { cn } from "@/lib/utils"

export function SoftwarePage() {
  const [featured, ...rest] = projects

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Software"
        title="Small, focused applications built to make ideas tangible."
        description="A running portfolio of interfaces and architecture experiments across React, Svelte, Vue, and the TanStack ecosystem."
        aside={
          <div className="border-l-2 border-primary pl-5 lg:mb-1">
            <p className="font-serif text-2xl">Current stack</p>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              React · TanStack Router · TypeScript · Base UI · Tailwind CSS
            </p>
          </div>
        }
      />

      <section className="py-14">
        <Card className="overflow-hidden bg-slate-950 text-white ring-0">
          <div className="grid lg:grid-cols-[0.42fr_0.58fr]">
            <div className="flex min-h-72 flex-col justify-between bg-[radial-gradient(circle_at_top_left,oklch(0.52_0.11_184),transparent_70%)] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-200">
                Featured build
              </p>
              <div>
                <p className="font-mono text-xs text-slate-400">
                  01 / {projects.length.toString().padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-4xl sm:text-5xl">
                  {featured.name}
                </h2>
              </div>
            </div>
            <div className="flex flex-col justify-center p-7 sm:p-10">
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                {featured.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {featured.tags.map((tag) => (
                  <Badge
                    key={tag}
                    className="border-white/15 bg-white/8 text-white"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={featured.url}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "lg" }),
                    "h-10",
                  )}
                >
                  Live site
                  <ExternalLinkIcon data-icon="inline-end" />
                </a>
                <a
                  href={featured.github}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "h-10 border-white/20 bg-transparent text-white hover:bg-white/10 hover:text-white",
                  )}
                >
                  Source
                  <GithubIcon data-icon="inline-end" />
                </a>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="grid gap-5 md:grid-cols-2">
        {rest.map((project, index) => (
          <Card key={project.name} className="group">
            <CardHeader>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs text-muted-foreground">
                  {(index + 2).toString().padStart(2, "0")} /{" "}
                  {projects.length.toString().padStart(2, "0")}
                </span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${project.name}`}
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <MoveUpRightIcon className="size-5" />
                </a>
              </div>
              <CardTitle className="font-serif text-2xl">
                {project.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="leading-7 text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                <GithubIcon className="size-4" />
                View source
              </a>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  )
}
