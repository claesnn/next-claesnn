import { index, layout, route, type RouteConfig } from "@react-router/dev/routes"

export default [
  layout("./routes/layout.tsx", [
    index("./routes/home.tsx"),
    route("biotech", "./routes/biotech.tsx"),
    route("blogs", "./routes/blogs.tsx"),
    route("blogs/:slug", "./routes/blog-post.tsx"),
    route("software", "./routes/software.tsx"),
    route("photography", "./routes/photography.tsx"),
    route("photography/:slug", "./routes/photo.tsx"),
    route("*", "./routes/not-found.tsx"),
  ]),
] satisfies RouteConfig
