import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ExpandIcon,
  XIcon,
} from "lucide-react"
import { useEffect, useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { imageCount } from "@/lib/image-meta"

export function PhotoDialog({
  initialImage,
  trigger,
}: {
  initialImage: number
  trigger: React.ReactElement
}) {
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState(initialImage)

  const show = (next: number) =>
    setCurrent((next + imageCount) % imageCount)

  useEffect(() => {
    if (!open) setCurrent(initialImage)
  }, [initialImage, open])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <button
        type="button"
        className="absolute inset-0 z-10 flex items-center justify-center bg-slate-950/0 opacity-0 transition-all hover:bg-slate-950/20 hover:opacity-100 focus-visible:bg-slate-950/20 focus-visible:opacity-100"
        aria-label={`Open photograph ${initialImage + 1}`}
        onClick={() => setOpen(true)}
      >
        {trigger}
      </button>
      <DialogContent
        showCloseButton={false}
        className="h-screen max-h-screen w-screen max-w-none rounded-none border-0 bg-slate-950 p-0 text-white ring-0 sm:max-w-none"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") show(current - 1)
          if (event.key === "ArrowRight") show(current + 1)
        }}
      >
        <DialogTitle className="sr-only">
          Photograph {current + 1}
        </DialogTitle>
        <DialogDescription className="sr-only">
          Full-screen photography viewer. Use the arrow keys to navigate.
        </DialogDescription>
        <img
          src={`/images/${current}-1280.webp`}
          alt={`Photography ${current + 1}`}
          className="h-full w-full object-contain p-4 sm:p-10"
        />
        <DialogClose
          render={
            <Button
              variant="ghost"
              size="icon-lg"
              className="absolute right-4 top-4 bg-black/25 text-white hover:bg-black/50 hover:text-white"
              aria-label="Close viewer"
            />
          }
        >
          <XIcon />
        </DialogClose>
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/25 text-white hover:bg-black/50 hover:text-white sm:left-6"
          onClick={() => show(current - 1)}
          aria-label="Previous photograph"
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="ghost"
          size="icon-lg"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/25 text-white hover:bg-black/50 hover:text-white sm:right-6"
          onClick={() => show(current + 1)}
          aria-label="Next photograph"
        >
          <ArrowRightIcon />
        </Button>
        <span className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/45 px-3 py-1.5 text-xs font-medium tracking-wider">
          {current + 1} / {imageCount}
        </span>
      </DialogContent>
    </Dialog>
  )
}

export function PhotoExpandIcon() {
  return (
    <span className="rounded-full bg-black/55 p-3 text-white">
      <ExpandIcon className="size-5" />
    </span>
  )
}
