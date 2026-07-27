import type { ReactNode } from "react"

export function PageIntro({
  eyebrow,
  title,
  description,
  aside,
}: {
  eyebrow: string
  title: string
  description: string
  aside?: ReactNode
}) {
  return (
    <header className="grid gap-8 border-b border-foreground/10 pb-10 pt-12 lg:grid-cols-[1fr_0.42fr] lg:items-end lg:pt-18">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-4 max-w-4xl">{title}</h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      </div>
      {aside}
    </header>
  )
}
