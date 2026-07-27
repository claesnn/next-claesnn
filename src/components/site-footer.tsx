import { Link } from "@tanstack/react-router"
import { GithubIcon, InstagramIcon, LinkedinIcon } from "lucide-react"

const socials = [
  { label: "GitHub", href: "https://github.com/claesnn", icon: GithubIcon },
  {
    label: "Instagram",
    href: "https://instagram.com/claesnn",
    icon: InstagramIcon,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/claesnn/",
    icon: LinkedinIcon,
  },
]

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-foreground/8 bg-card/45">
      <div className="page-shell grid gap-10 py-12 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <Link to="/" className="font-serif text-2xl">
            Claes Nymand Nilsson
          </Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            Biotech engineer and software developer exploring better ways to
            build, measure, and communicate scientific work.
          </p>
          <p className="mt-5 text-xs text-muted-foreground">
            Copenhagen, Denmark · © {new Date().getFullYear()}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="inline-flex size-10 items-center justify-center rounded-lg border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
