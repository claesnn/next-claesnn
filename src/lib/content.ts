export type BlogMetadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export type BlogPost = {
  slug: string
  metadata: BlogMetadata
  content: string
}

const modules = import.meta.glob("../../content/*.mdx", {
  eager: true,
  import: "default",
  query: "?raw",
}) as Record<string, string>

function parseFrontmatter(source: string) {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*\r?\n?/)
  const metadata: Partial<BlogMetadata> = {}

  if (match) {
    for (const line of match[1].split(/\r?\n/)) {
      const separator = line.indexOf(":")
      if (separator === -1) continue

      const key = line.slice(0, separator).trim() as keyof BlogMetadata
      const value = line
        .slice(separator + 1)
        .trim()
        .replace(/^['"]|['"]$/g, "")

      metadata[key] = value
    }
  }

  return {
    metadata: metadata as BlogMetadata,
    content: match ? source.slice(match[0].length).trim() : source.trim(),
  }
}

export const blogPosts = Object.entries(modules)
  .map(([file, source]) => {
    const { metadata, content } = parseFrontmatter(source)
    return {
      slug: file.split("/").pop()!.replace(/\.mdx$/, ""),
      metadata,
      content,
    }
  })
  .sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  )

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date))
}
