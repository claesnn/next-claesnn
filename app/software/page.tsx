import AuthorInfo from "@/components/AuthorInfo"
import { Badge } from "@/components/ui/badge"
import { kurale } from "@/lib/fonts"
import { cn } from "@/lib/utils"
import { Earth, GitCommit } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Software",
  description: "Software projects by Claes Nymand Nilsson",
}

type SoftwareProject = {
  name: string
  description: string
  url: string
  github: string
  tags?: string[]
}

const projects: SoftwareProject[] = [
  {
    name: "Claesnn.com - Next.js",
    description: "This website :) Also, the Next.js version of claesnn.com",
    url: "https://www.claesnn.com",
    github: "https://github.com/claesnn/next-claesnn",
    tags: ["SSG", "Next.js", "React"],
  },
  {
    name: "Claesnn.com - SvelteKit",
    description: "The SvelteKit version of claesnn.com",
    url: "https://svelte-claesnn.pages.dev/",
    github: "https://github.com/claesnn/svelte-claesnn",
    tags: ["SSG", "Svelte", "SvelteKit"],
  },
  {
    name: "Claesnn.com - TanStack Router",
    description: "The TanStack Router (client side) version of claesnn.com",
    url: "https://tan-claesnn.pages.dev/",
    github: "https://github.com/claesnn/tan_claesnn",
    tags: ["CSR", "TanStack", "React"],
  },
  {
    name: "Claesnn.com - Nuxt.js",
    description: "The Nuxt.js (vue) version of claesnn.com",
    url: "https://nuxt-claesnn.pages.dev/",
    github: "https://github.com/claesnn/nuxt-claesnn",
    tags: ["SSG", "Nuxt", "Vue"],
  },
  {
    name: "Claesnn.com - Vue.js",
    description: "The Vue.js version of claesnn.com",
    url: "https://website-ch7.pages.dev/",
    github: "https://github.com/claesnn/website",
    tags: ["CSR", "Vue"],
  },
]

function Project({
  project,
  className,
  hero,
}: {
  project: SoftwareProject
  className?: string
  hero?: boolean
}) {
  return (
    <div className={cn("flex flex-col w-full", className)}>
      <h2
        className={cn(
          hero ? "text-4xl" : "text-2xl",
          "mb-4 mx-auto",
          kurale.className,
        )}>
        {project.name}
      </h2>
      <p className='mb-4 mx-auto text-slate-700'>{project.description}</p>
      <div className='flex space-x-2 mb-6 mx-auto'>
        {project.tags &&
          project.tags.map((tag) => (
            <Badge
              variant='outline'
              key={tag}>
              {tag}
            </Badge>
          ))}
      </div>
      <div className='uppercase flex space-x-4 mx-auto'>
        <a
          href={project.url}
          className='flex text-sm text-blue-900'>
          <span className='mr-2'>Deployment</span>
          <Earth size={18} />
        </a>
        <a
          href={project.github}
          className='flex text-sm text-blue-900'>
          <span className='mr-2'>Github Code</span>
          <GitCommit size={18} />
        </a>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <>
      <div className='mx-auto flex flex-col mt-8'>
        <Project
          project={projects[0]}
          className='mx-auto mb-2'
          hero
        />
        <hr className='my-10' />
        <div className='space-y-6 divide-y lg:divide-y-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 lg:divide-x'>
          {projects.slice(1, 3).map((project) => (
            <Project
              project={project}
              key={project.name}
              className='p-6'
            />
          ))}
        </div>
        <hr className='my-10' />
        <div className='space-y-6 divide-y lg:divide-y-0 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-5 lg:divide-x'>
          {projects.slice(3, 5).map((project) => (
            <Project
              project={project}
              key={project.name}
              className='p-6'
            />
          ))}
        </div>
      </div>
      <div className='mx-auto p-8 bg-slate-50 max-w-xl rounded-xl mt-24'>
        <AuthorInfo />
      </div>
    </>
  )
}
