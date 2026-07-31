import { href, Link } from "react-router"
import { ArrowLeftIcon } from "lucide-react"
import { useEffect } from "react"

import { AuthorInfo } from "@/components/author-info"
import { BlogContent } from "@/components/blog-content"
import { formatDate, type PreparedBlogPost } from "@/lib/content"

export function BlogPostPage({ post }: { post: PreparedBlogPost }) {
  useEffect(() => {
    document.title = `${post.metadata.title} — Claes Nymand Nilsson`
  }, [post.metadata.title])

  return (
    <article className="page-shell">
      <header className="mx-auto max-w-4xl pb-10 pt-12 text-center sm:pt-18">
        <Link
          to={href("/blogs")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeftIcon className="size-4" />
          All writing
        </Link>
        <p className="eyebrow mt-10">
          {formatDate(post.metadata.publishedAt)}
        </p>
        <h1 className="display-title mt-5">{post.metadata.title}</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {post.metadata.summary}
        </p>
      </header>

      <div className="mx-auto max-w-3xl border-t border-foreground/10 pt-10">
        <BlogContent sections={post.sections} />
      </div>

      <div className="mx-auto mt-16 max-w-4xl">
        <AuthorInfo />
      </div>
    </article>
  )
}
