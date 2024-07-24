export type SoftwareProject = {
  name: string;
  description: string;
  url: string;
  github: string;
  tags?: string[];
};

export const projects: SoftwareProject[] = [
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
];
