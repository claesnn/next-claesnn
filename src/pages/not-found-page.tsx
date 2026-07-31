import { href, Link } from "react-router"
import { ArrowLeftIcon } from "lucide-react"

import { buttonVariants } from "@/components/ui/button"

export function NotFoundPage() {
  return (
    <div className="page-shell flex min-h-[65vh] flex-col items-center justify-center py-20 text-center">
      <p className="eyebrow">404 · Not found</p>
      <h1 className="display-title mt-5">This path led nowhere.</h1>
      <p className="mt-5 max-w-md text-lg leading-8 text-muted-foreground">
        The page may have moved, or it may never have existed.
      </p>
      <Link to={href("/")} className={`${buttonVariants({ size: "lg" })} mt-8`}>
        <ArrowLeftIcon data-icon="inline-start" />
        Back home
      </Link>
    </div>
  )
}
