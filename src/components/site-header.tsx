import { Link, useLocation } from "react-router"
import { MenuIcon } from "lucide-react"
import { useState } from "react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navigation = [
  { label: "Biotech", to: "/biotech" },
  { label: "Writing", to: "/blogs" },
  { label: "Software", to: "/software" },
  { label: "Photography", to: "/photography" },
] as const

function NavLink({
  label,
  to,
  mobile = false,
  onNavigate,
}: {
  label: string
  to: (typeof navigation)[number]["to"]
  mobile?: boolean
  onNavigate?: () => void
}) {
  const { pathname } = useLocation()
  const active = pathname === to || pathname.startsWith(`${to}/`)

  return (
    <Link
      to={to}
      onClick={onNavigate}
      className={cn(
        "relative font-medium text-muted-foreground transition-colors hover:text-foreground",
        mobile ? "rounded-xl px-4 py-3 text-lg hover:bg-muted" : "py-2 text-sm",
        active && "text-foreground",
      )}
    >
      {label}
      {!mobile && (
        <span
          className={cn(
            "absolute inset-x-0 -bottom-[1.05rem] h-0.5 origin-left scale-x-0 bg-primary transition-transform",
            active && "scale-x-100",
          )}
        />
      )}
    </Link>
  )
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-foreground/8 bg-background/88 backdrop-blur-xl">
      <div className="page-shell flex h-18 items-center justify-between">
        <Link
          to="/"
          className="group flex items-center gap-3"
          aria-label="Claes Nymand Nilsson — home"
        >
          <img
            src="/logo.webp"
            alt=""
            width={32}
            height={36}
            className="h-9 w-8 transition-transform duration-300 group-hover:-rotate-3"
          />
          <span className="leading-none">
            <span className="block text-[0.93rem] font-semibold tracking-[0.14em]">
              CLAESNN
            </span>
            <span className="mt-1 hidden text-[0.62rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:block">
              Biotech × software
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {navigation.map((item) => (
            <NavLink key={item.to} {...item} />
          ))}
        </nav>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation"
              />
            }
          >
            <MenuIcon />
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[88vw] max-w-sm bg-background"
          >
            <SheetHeader className="border-b">
              <SheetTitle className="font-serif text-2xl">Navigate</SheetTitle>
              <SheetDescription>
                Science, software, writing, and field notes.
              </SheetDescription>
            </SheetHeader>
            <nav className="flex flex-col gap-1 p-4" aria-label="Mobile">
              {navigation.map((item) => (
                <NavLink
                  key={item.to}
                  {...item}
                  mobile
                  onNavigate={() => setMobileOpen(false)}
                />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
