import { getBlogPosts } from "@/lib/blogs"
import BlogList from "./BlogList"
import { Suspense } from "react"

export default function Page() {
  const blogs = getBlogPosts()

  return (
    <div>
      <Suspense>
        <BlogList blogs={blogs} />
      </Suspense>
    </div>
  )
}
