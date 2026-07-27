import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { PageIntro } from "@/components/page-intro"
import { PaperCarousel } from "@/components/paper-carousel"

const capabilities = [
  {
    number: "01",
    title: "Cell line & protein expression",
    body: "CHO-based expression systems, transient transfection, secretion-focused optimization, and practical evaluation of difficult-to-express proteins.",
  },
  {
    number: "02",
    title: "Bioreactors & recovery",
    body: "Hands-on work with bioreactors, perfusion cultivation, recovery workflows, and TFF optimization in pharma development settings.",
  },
  {
    number: "03",
    title: "Microscale screening",
    body: "96-deep-well formats, high-throughput readouts, automated cell counting, and split-GFP secretion assays.",
  },
]

const methods = [
  "CHO cells",
  "Bioreactors",
  "Perfusion cultivation",
  "Recovery",
  "TFF optimization",
  "Split-GFP",
  "Deep well plates",
  "Transient transfection",
  "Plasmid cloning",
  "Celigo",
  "Duetz",
  "Protein secretion",
]

export function BiotechPage() {
  return (
    <div className="page-shell">
      <PageIntro
        eyebrow="Biotechnology profile"
        title="Experimental systems that turn complex biology into useful evidence."
        description="My work centers on building, evaluating, and communicating practical platforms for protein production, cultivation, recovery, and secretion."
        aside={
          <dl className="grid grid-cols-2 gap-4 lg:pb-1">
            <div className="surface p-5">
              <dt className="eyebrow text-muted-foreground">Experience</dt>
              <dd className="mt-2 text-3xl font-semibold">10+ yrs</dd>
            </div>
            <div className="surface p-5">
              <dt className="eyebrow text-muted-foreground">Domain</dt>
              <dd className="mt-2 text-3xl font-semibold">Pharma</dd>
            </div>
          </dl>
        }
      />

      <section className="py-14">
        <div className="grid gap-5 md:grid-cols-3">
          {capabilities.map((capability) => (
            <Card key={capability.number} className="h-full">
              <CardHeader>
                <CardDescription className="font-mono text-xs text-primary">
                  {capability.number}
                </CardDescription>
                <CardTitle className="font-serif text-2xl">
                  {capability.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {capability.body}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="surface grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.36fr_0.64fr] lg:items-start">
        <div>
          <p className="eyebrow">Methods & systems</p>
          <h2 className="section-title mt-3">Experimental toolkit</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            A working set of cultivation, analytical, and molecular tools used
            to move from a biological question to a comparable result.
          </p>
        </div>
        <div className="flex flex-wrap gap-2.5 lg:pt-1">
          {methods.map((method) => (
            <Badge
              key={method}
              variant="secondary"
              className="h-auto rounded-lg px-3 py-2 text-sm"
            >
              {method}
            </Badge>
          ))}
        </div>
      </section>

      <section className="py-18">
        <div className="mb-8 max-w-2xl">
          <p className="eyebrow">Publication record</p>
          <h2 className="section-title mt-3">Selected research contributions</h2>
          <p className="mt-4 leading-7 text-muted-foreground">
            Work spanning microscale expression screening and high-density
            mammalian perfusion cultivation.
          </p>
        </div>
        <PaperCarousel />
      </section>
    </div>
  )
}
