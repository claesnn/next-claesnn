export type SoftwareProject = {
  name: string
  description: string
  url: string
  github: string
  tags: string[]
}

export const projects: SoftwareProject[] = [
  {
    name: "Claesnn.com — React",
    description:
      "This portfolio: a client-rendered React application with type-safe routing and a lightweight technical publishing stack.",
    url: "https://www.claesnn.com",
    github: "https://github.com/claesnn/next-claesnn",
    tags: ["React", "TanStack Router", "CSR"],
  },
  {
    name: "Claesnn.com — SvelteKit",
    description:
      "A statically generated exploration of the same portfolio in the Svelte ecosystem.",
    url: "https://svelte-claesnn.pages.dev/",
    github: "https://github.com/claesnn/svelte-claesnn",
    tags: ["Svelte", "SvelteKit", "SSG"],
  },
  {
    name: "Claesnn.com — TanStack Router",
    description:
      "The earlier client-rendered TanStack Router version that informed the current architecture.",
    url: "https://tan-claesnn.pages.dev/",
    github: "https://github.com/claesnn/tan_claesnn",
    tags: ["TanStack", "React", "CSR"],
  },
  {
    name: "Claesnn.com — Nuxt",
    description:
      "A Vue and Nuxt implementation focused on static generation and component-driven pages.",
    url: "https://nuxt-claesnn.pages.dev/",
    github: "https://github.com/claesnn/nuxt-claesnn",
    tags: ["Nuxt", "Vue", "SSG"],
  },
  {
    name: "Claesnn.com — Vue",
    description:
      "An earlier client-rendered Vue implementation of the portfolio.",
    url: "https://website-ch7.pages.dev/",
    github: "https://github.com/claesnn/website",
    tags: ["Vue", "CSR"],
  },
]
