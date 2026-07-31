import type { Route } from "./+types/blog-post"

import { getBlogPost, prepareBlogPost } from "@/lib/content"
import { BlogPostPage } from "@/pages/blog-post-page"
import { NotFoundPage } from "@/pages/not-found-page"

export function clientLoader({ params }: Route.ClientLoaderArgs) {
  const post = getBlogPost(params.slug)
  return post ? prepareBlogPost(post) : null
}

export default function BlogPostRoute({ loaderData }: Route.ComponentProps) {
  return loaderData ? <BlogPostPage post={loaderData} /> : <NotFoundPage />
}
