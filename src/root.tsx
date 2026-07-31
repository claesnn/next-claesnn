import type { ReactNode } from "react"
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router"

import "@/styles/globals.css"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Biotechnology, scientific software, writing, and photography by Claes Nymand Nilsson."
        />
        <link rel="icon" href="/favicon.ico" />
        <title>Claes Nymand Nilsson — Biotech &amp; Software</title>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function Root() {
  return <Outlet />
}

export function HydrateFallback() {
  return null
}
