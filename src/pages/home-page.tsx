import { Link } from "react-router"
import {
  ArrowRightIcon,
  FlaskConicalIcon,
  MapPinIcon,
  MoveUpRightIcon,
  WorkflowIcon,
} from "lucide-react"

import { PaperCarousel } from "@/components/paper-carousel"
import { Badge } from "@/components/ui/badge"
import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { cn } from "@/lib/utils"

const focusAreas = [
  "Protein expression",
  "Bioreactors & perfusion",
  "Recovery & TFF",
  "Mammalian cell culture",
  "Scientific software",
]

const disciplines = [
  {
    label: "Biotechnology",
    title: "Protein production, screening, and scale-down workflows",
    description:
      "Practical R&D across CHO expression systems, bioreactors, perfusion, recovery, and high-throughput secretion assays.",
    to: "/biotech" as const,
    icon: FlaskConicalIcon,
  },
  {
    label: "Software",
    title: "Interfaces and tools shaped by scientific problem-solving",
    description:
      "Full-stack experiments, type-safe applications, and data workflows built with reliability and clarity in mind.",
    to: "/software" as const,
    icon: WorkflowIcon,
  },
]

const photographs = [
  { id: 24, alt: "Rock in the ocean in Iceland", className: "md:col-span-2" },
  { id: 2, alt: "Adventure tower in South Zealand", className: "md:row-span-2" },
  { id: 45, alt: "Road through flowers toward an Icelandic mountain" },
  { id: 38, alt: "Waterfalls in Iceland" },
]

export function HomePage() {
  return (
    <>
      <section className="page-shell grid gap-10 pb-12 pt-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:pb-20 lg:pt-18">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            <MapPinIcon className="size-3.5" />
            Copenhagen, Denmark
          </div>
          <h1 className="display-title mt-6 max-w-4xl">
            Scientific thinking,
            <span className="block text-primary">built into software.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            I combine biotechnology R&D with full-stack development to make
            experimental workflows, data analysis, and technical communication
            more precise.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/biotech"
              className={cn(buttonVariants({ size: "lg" }), "h-11 px-5")}
            >
              Explore biotech work
              <ArrowRightIcon data-icon="inline-end" />
            </Link>
            <Link
              to="/software"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-11 px-5",
              )}
            >
              View software
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mr-0">
          <div className="absolute -left-5 -top-5 size-32 rounded-full bg-accent/60 blur-3xl" />
          <Card className="relative gap-0 overflow-visible py-0 shadow-2xl shadow-primary/10">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <img
                  src="/profile-pic-200.webp"
                  width={88}
                  height={88}
                  className="size-22 rounded-full object-cover ring-4 ring-secondary"
                  alt="Claes Nymand Nilsson"
                />
                <div>
                  <p className="font-serif text-2xl">Claes Nymand Nilsson</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Biotech engineer · software developer
                  </p>
                </div>
              </div>
              <div className="my-7 grid grid-cols-2 divide-x border-y py-5">
                <div>
                  <p className="text-3xl font-semibold tracking-tight">10+</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Years in biotech
                  </p>
                </div>
                <div className="pl-6">
                  <p className="text-3xl font-semibold tracking-tight">R&D</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    Industry focus
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {focusAreas.map((area) => (
                  <Badge key={area} variant="secondary">
                    {area}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="border-y border-foreground/8 bg-card/55">
        <div className="page-shell py-14">
          <div className="grid gap-5 md:grid-cols-2">
            {disciplines.map(({ icon: Icon, ...item }) => (
              <Link key={item.label} to={item.to} className="group">
                <Card className="h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:ring-primary/30">
                  <CardHeader>
                    <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                      <Icon className="size-5" />
                    </div>
                    <CardDescription className="eyebrow text-primary">
                      {item.label}
                    </CardDescription>
                    <CardTitle className="font-serif text-2xl sm:text-3xl">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="max-w-xl leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      Explore
                      <MoveUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-18">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Research profile</p>
            <h2 className="section-title mt-3">Selected biotech work</h2>
          </div>
          <Link
            to="/biotech"
            className="text-sm font-semibold text-primary hover:underline"
          >
            Full biotech profile →
          </Link>
        </div>
        <PaperCarousel />
      </section>

      <section className="page-shell pb-6">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2 className="section-title mt-3">A different way of observing</h2>
          </div>
          <Link
            to="/photography"
            className="text-sm font-semibold text-primary hover:underline"
          >
            View photography →
          </Link>
        </div>
        <div className="grid auto-rows-[14rem] gap-3 md:grid-cols-3">
          {photographs.map((photo) => (
            <Link
              key={photo.id}
              to={`/photography/${photo.id}`}
              className={cn(
                "group relative overflow-hidden rounded-2xl bg-muted",
                photo.className,
              )}
            >
              <img
                src={`/images/${photo.id}-640.webp`}
                alt={photo.alt}
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70 transition-opacity group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
