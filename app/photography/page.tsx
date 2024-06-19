import Link from "next/link"
import { imageMeta } from "@/lib/imageMeta"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photography",
  description: "Photography by Claes Nymand Nilsson",
}

export default function Photography() {
  const IMAGE_COUNT = 54

  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-3'>
      {Array.from({ length: IMAGE_COUNT }).map((_, i) => (
        <Link
          href={`/photography/${i}`}
          key={i}>
          <img
            src={`/images/${i}-640.webp`}
            loading={i < 6 ? "eager" : "lazy"}
            height={imageMeta[i].height}
            width={640}
          />
        </Link>
      ))}
    </div>
  )
}
