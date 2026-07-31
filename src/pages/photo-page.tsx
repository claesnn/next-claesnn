import { Link } from "react-router"
import { ArrowLeftIcon, ArrowRightIcon, ExpandIcon } from "lucide-react"

import { PhotoDialog } from "@/components/photo-dialog"
import { buttonVariants } from "@/components/ui/button"
import { imageCount, imageHeights } from "@/lib/image-meta"
import { cn } from "@/lib/utils"

export function PhotoPage({ image }: { image: number }) {
  const previous = (image - 1 + imageCount) % imageCount
  const next = (image + 1) % imageCount

  return (
    <div className="page-shell py-10">
      <div className="mb-6 flex items-center justify-between">
        <Link
          to="/photography"
          className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
        >
          <ArrowLeftIcon className="size-4" />
          All photographs
        </Link>
        <span className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {image + 1} / {imageCount}
        </span>
      </div>

      <figure className="group relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-slate-950 shadow-2xl">
        <img
          src={`/images/${image}-1280.webp`}
          alt={`Photography ${image + 1}`}
          width={1280}
          height={imageHeights[image]}
          className="mx-auto max-h-[78vh] w-auto object-contain"
        />
        <PhotoDialog
          initialImage={image}
          trigger={
            <span className="rounded-full bg-black/55 p-3 text-white">
              <ExpandIcon className="size-5" />
            </span>
          }
        />
      </figure>

      <nav className="mt-6 flex items-center justify-between">
        <Link
          to={`/photography/${previous}`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          <ArrowLeftIcon data-icon="inline-start" />
          Previous
        </Link>
        <Link
          to={`/photography/${next}`}
          className={cn(buttonVariants({ variant: "outline", size: "lg" }))}
        >
          Next
          <ArrowRightIcon data-icon="inline-end" />
        </Link>
      </nav>
    </div>
  )
}
