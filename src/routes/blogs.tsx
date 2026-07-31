import { useSearchParams } from "react-router"

import { BlogsPage } from "@/pages/blogs-page"

export default function BlogsRoute() {
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
