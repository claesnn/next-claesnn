import { Outlet, useLocation } from "@tanstack/react-router"
import { useEffect } from "react"

import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

const titles: Record<string, string> = {
  "/": "Claes Nymand Nilsson — Biotech & Software",
  "/biotech": "Biotech — Claes Nymand Nilsson",
  "/blogs": "Writing — Claes Nymand Nilsson",
  "/software": "Software — Claes Nymand Nilsson",
  "/photography": "Photography — Claes Nymand Nilsson",
}

export function AppShell() {
  const pathname = useLocation({ select: (location) => location.pathname })

  useEffect(() => {
    window.scrollTo({ top: 0 })
    document.title =
      titles[pathname] ??
      (pathname.startsWith("/blogs/")
        ? "Article — Claes Nymand Nilsson"
        : pathname.startsWith("/photography/")
          ? "Photography — Claes Nymand Nilsson"
          : "Claes Nymand Nilsson")
  }, [pathname])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  )
}
