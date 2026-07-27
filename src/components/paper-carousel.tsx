import { ArrowLeftIcon, ArrowRightIcon, ExternalLinkIcon } from "lucide-react"
import { useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { papers } from "@/lib/papers"

export function PaperCarousel() {
  const [index, setIndex] = useState(0)
  const paper = papers[index]

  return (
    <div>
      <Card className="gap-0 py-0 shadow-none">
        <div className="grid lg:grid-cols-[0.36fr_0.64fr]">
          <div className="relative min-h-64 overflow-hidden bg-muted lg:min-h-96">
            <img
              src={paper.image}
              alt=""
              className="absolute inset-0 size-full object-cover transition-opacity"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 to-transparent" />
            <p className="absolute bottom-5 left-5 rounded-full bg-background/92 px-3 py-1 text-xs font-semibold">
              {paper.journal} · {paper.year}
            </p>
          </div>
          <div className="flex flex-col justify-between">
            <CardHeader className="p-6 sm:p-8">
              <CardDescription className="eyebrow text-primary">
                Selected publication
              </CardDescription>
              <CardTitle className="mt-3 font-serif text-2xl leading-tight sm:text-3xl">
                {paper.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
              <p className="leading-7 text-muted-foreground">
                {paper.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {paper.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <a
                href={paper.url}
                target="_blank"
                rel="noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read publication
                <ExternalLinkIcon className="size-4" />
              </a>
            </CardContent>
          </div>
        </div>
      </Card>

      <div className="mt-4 flex items-center justify-end gap-3">
        <span className="mr-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {index + 1} / {papers.length}
        </span>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIndex((index - 1 + papers.length) % papers.length)}
          aria-label="Previous publication"
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setIndex((index + 1) % papers.length)}
          aria-label="Next publication"
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  )
}
