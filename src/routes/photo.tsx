import type { Route } from "./+types/photo"

import { imageCount } from "@/lib/image-meta"
import { NotFoundPage } from "@/pages/not-found-page"
import { PhotoPage } from "@/pages/photo-page"

export default function PhotoRoute({ params }: Route.ComponentProps) {
  const image = Number(params.slug)

  if (!Number.isInteger(image) || image < 0 || image >= imageCount) {
    return <NotFoundPage />
  }

  return <PhotoPage image={image} />
}
