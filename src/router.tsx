import {
  createBrowserRouter,
  useLoaderData,
  useParams,
  useSearchParams,
} from "react-router"
import type { LoaderFunctionArgs } from "react-router"

import { AppShell } from "@/components/app-shell"
import {
  getBlogPost,
  prepareBlogPost,
} from "@/lib/content"
import { imageCount } from "@/lib/image-meta"
import { BiotechPage } from "@/pages/biotech-page"
import { BlogPostPage } from "@/pages/blog-post-page"
import { BlogsPage } from "@/pages/blogs-page"
import { HomePage } from "@/pages/home-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { PhotoPage } from "@/pages/photo-page"
import { PhotographyPage } from "@/pages/photography-page"
import { SoftwarePage } from "@/pages/software-page"

function BlogsRouteComponent() {
  const [searchParams, setSearchParams] = useSearchParams()
  const ascending = searchParams.get("sort") === "asc"

  return (
    <BlogsPage
      ascending={ascending}
      onSort={() => {
        const nextSearchParams = new URLSearchParams(searchParams)

        if (ascending) {
          nextSearchParams.delete("sort")
        } else {
          nextSearchParams.set("sort", "asc")
        }

        setSearchParams(nextSearchParams, {
          preventScrollReset: true,
          replace: true,
        })
      }}
    />
  )
}

function blogPostLoader({ params }: LoaderFunctionArgs) {
  const post = params.slug ? getBlogPost(params.slug) : undefined
  return post ? prepareBlogPost(post) : null
}

function BlogPostRouteComponent() {
  const post = useLoaderData<typeof blogPostLoader>()
  return post ? <BlogPostPage post={post} /> : <NotFoundPage />
}

function PhotoRouteComponent() {
  const { slug } = useParams()
  const image = Number(slug)

  if (!Number.isInteger(image) || image < 0 || image >= imageCount) {
    return <NotFoundPage />
  }

  return <PhotoPage image={image} />
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: AppShell,
    children: [
      { index: true, Component: HomePage },
      { path: "biotech", Component: BiotechPage },
      { path: "blogs", Component: BlogsRouteComponent },
      {
        path: "blogs/:slug",
        loader: blogPostLoader,
        Component: BlogPostRouteComponent,
      },
      { path: "software", Component: SoftwarePage },
      { path: "photography", Component: PhotographyPage },
      { path: "photography/:slug", Component: PhotoRouteComponent },
      { path: "*", Component: NotFoundPage },
    ],
  },
])
