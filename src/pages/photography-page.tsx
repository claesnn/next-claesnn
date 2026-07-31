import { Link } from "react-router"

import {
  PhotoDialog,
  PhotoExpandIcon,
} from "@/components/photo-dialog"
import { PageIntro } from "@/components/page-intro"
import { imageCount, imageHeights } from "@/lib/image-meta"

export function PhotographyPage() {
  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Photography"
        title="Landscapes, structures, and small interruptions."
        description="A personal record of travel and observation—mostly from Iceland and Denmark—presented without filters, categories, or commentary."
        aside={
          <div className="border-b pb-3 text-sm text-muted-foreground lg:mb-1">
            {imageCount} photographs · Click any image to view full screen
          </div>
        }
      />

      <section className="columns-1 gap-4 py-14 sm:columns-2 lg:columns-3">
        {Array.from({ length: imageCount }, (_, index) => (
          <figure
            key={index}
            className="group relative mb-4 break-inside-avoid overflow-hidden rounded-xl bg-muted"
          >
            <Link
              to={`/photography/${index}`}
              tabIndex={-1}
              aria-hidden="true"
            >
              <img
                src={`/images/${index}-640.webp`}
                alt={`Photography ${index + 1}`}
                width={640}
                height={imageHeights[index]}
                loading={index < 6 ? "eager" : "lazy"}
                className="h-auto w-full transition-transform duration-500 group-hover:scale-[1.015]"
              />
            </Link>
            <PhotoDialog
              initialImage={index}
              trigger={<PhotoExpandIcon />}
            />
          </figure>
        ))}
      </section>
    </div>
  )
}
