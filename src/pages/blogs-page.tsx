import { href, Link } from "react-router"
import { ArrowDownIcon, ArrowUpIcon, MoveUpRightIcon } from "lucide-react"

import { AuthorInfo } from "@/components/author-info"
import { PageIntro } from "@/components/page-intro"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { blogPosts, formatDate } from "@/lib/content"

export function BlogsPage({
  ascending,
  onSort,
}: {
  ascending: boolean
  onSort: () => void
}) {
  const posts = ascending ? [...blogPosts].reverse() : blogPosts

  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Writing"
        title="Notes from the overlap of science and software."
        description="Technical essays, practical learning logs, and evolving opinions about tools, development, and scientific work."
        aside={
          <div className="flex items-center justify-between border-b pb-3 lg:mb-1">
            <span className="text-sm text-muted-foreground">
              {posts.length} articles
            </span>
            <Button variant="outline" onClick={onSort}>
              {ascending ? "Oldest first" : "Newest first"}
              {ascending ? (
                <ArrowUpIcon data-icon="inline-end" />
              ) : (
                <ArrowDownIcon data-icon="inline-end" />
              )}
            </Button>
          </div>
        }
      />

      <section className="grid gap-5 py-14 md:grid-cols-2">
        {posts.map((post, index) => (
          <Link
            key={post.slug}
            to={href("/blogs/:slug", { slug: post.slug })}
            prefetch="intent"
            className={index === 0 ? "md:col-span-2" : undefined}
          >
            <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:ring-primary/30">
              <CardHeader className={index === 0 ? "sm:p-8" : undefined}>
                <div className="mb-3 flex items-center justify-between gap-4">
                  <Badge variant={index === 0 ? "default" : "secondary"}>
                    {index === 0 ? "Latest" : "Article"}
                  </Badge>
                  <time className="text-xs uppercase tracking-wider text-muted-foreground">
                    {formatDate(post.metadata.publishedAt)}
                  </time>
                </div>
                <CardTitle
                  className={
                    index === 0
                      ? "max-w-4xl font-serif text-3xl sm:text-5xl"
                      : "font-serif text-2xl"
                  }
                >
                  {post.metadata.title}
                </CardTitle>
              </CardHeader>
              <CardContent className={index === 0 ? "sm:px-8 sm:pb-8" : ""}>
                <p
                  className={
                    index === 0
                      ? "max-w-2xl text-lg leading-8 text-muted-foreground"
                      : "leading-7 text-muted-foreground"
                  }
                >
                  {post.metadata.summary}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Read article
                  <MoveUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </section>

      <AuthorInfo />
    </div>
  )
}
