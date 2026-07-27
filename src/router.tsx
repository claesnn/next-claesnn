import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router"

import { AppShell } from "@/components/app-shell"
import { getBlogPost } from "@/lib/content"
import { imageCount } from "@/lib/image-meta"
import { BiotechPage } from "@/pages/biotech-page"
import { BlogPostPage } from "@/pages/blog-post-page"
import { BlogsPage } from "@/pages/blogs-page"
import { HomePage } from "@/pages/home-page"
import { NotFoundPage } from "@/pages/not-found-page"
import { PhotoPage } from "@/pages/photo-page"
import { PhotographyPage } from "@/pages/photography-page"
import { SoftwarePage } from "@/pages/software-page"

type BlogSearch = {
  sort?: "asc"
}

const rootRoute = createRootRoute({
  component: AppShell,
  notFoundComponent: NotFoundPage,
})

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
})

const biotechRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/biotech",
  component: BiotechPage,
})

const blogsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blogs",
  validateSearch: (search: Record<string, unknown>): BlogSearch => ({
    sort: search.sort === "asc" ? "asc" : undefined,
  }),
  component: function BlogsRouteComponent() {
    const { sort } = blogsRoute.useSearch()
    const navigate = blogsRoute.useNavigate()
    const ascending = sort === "asc"

    return (
      <BlogsPage
        ascending={ascending}
        onSort={() =>
          navigate({
            search: { sort: ascending ? undefined : "asc" },
            replace: true,
          })
        }
      />
    )
  },
})

const blogPostRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/blogs/$slug",
  component: function BlogPostRouteComponent() {
    const { slug } = blogPostRoute.useParams()
    const post = getBlogPost(slug)
    return post ? <BlogPostPage post={post} /> : <NotFoundPage />
  },
})

const softwareRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/software",
  component: SoftwarePage,
})

const photographyRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/photography",
  component: PhotographyPage,
})

const photoRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/photography/$slug",
  component: function PhotoRouteComponent() {
    const { slug } = photoRoute.useParams()
    const image = Number(slug)

    if (!Number.isInteger(image) || image < 0 || image >= imageCount) {
      return <NotFoundPage />
    }

    return <PhotoPage image={image} />
  },
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  biotechRoute,
  blogsRoute,
  blogPostRoute,
  softwareRoute,
  photographyRoute,
  photoRoute,
])

export const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
