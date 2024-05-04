"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useState } from "react"
import { oswald } from "@/lib/fonts"
import { usePathname } from "next/navigation"

const links = [
  {
    name: "Blogs",
    route: "/blogs",
  },
  {
    name: "Software",
    route: "/software",
  },
  {
    name: "Photography",
    route: "/photography",
  },
]

function SvgMenu() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-menu'>
      <line
        x1='4'
        x2='20'
        y1='12'
        y2='12'
      />
      <line
        x1='4'
        x2='20'
        y1='6'
        y2='6'
      />
      <line
        x1='4'
        x2='20'
        y1='18'
        y2='18'
      />
    </svg>
  )
}

function SvgClose() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='lucide lucide-x'>
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  )
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  function closeMenu() {
    setMenuOpen(false)
    document.body.style.overflow = "visible"
  }

  function toggleMenu() {
    document.body.style.overflow = menuOpen ? "visible" : "hidden"
    setMenuOpen(!menuOpen)
  }

  return (
    <>
      <header className='shadow-sm w-full fixed top-0 bg-white opacity-95'>
        <div
          className={cn(
            "flex justify-between px-4 place-items-center max-w-7xl mx-auto py-3",
          )}>
          <Link
            href='/'
            className='flex place-items-center'>
            <img
              src='/logo.jpg'
              alt='logo'
              className='w-8 h-8 mr-3'
            />
            <h1
              className={cn("text-2xl", oswald.className)}
              onClick={closeMenu}>
              CLAESNN
            </h1>
          </Link>

          <button
            onClick={toggleMenu}
            className='sm:hidden'>
            {!menuOpen ? <SvgMenu /> : <SvgClose />}
          </button>

          <nav className='hidden gap-6 sm:flex'>
            {links.map((link) => (
              <Link
                href={link.route}
                className={`text-sm ${
                  pathname.startsWith(link.route)
                    ? "underline text-blue-900"
                    : ""
                }`}
                key={link.name}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
      {menuOpen && (
        <nav className='w-full z-10 fixed top-[50px] flex'>
          <div
            onClick={closeMenu}
            className=' bg-gray-900 h-screen flex-grow opacity-40'></div>
          <aside className='w-[20rem] bg-white h-screen p-3 flex flex-col'>
            {links.map((link) => (
              <Link
                href={link.route}
                key={link.name}>
                <Button
                  variant='link'
                  className='[&.active]:underline text-foreground text-lg '
                  onClick={closeMenu}>
                  {link.name}
                </Button>
              </Link>
            ))}
          </aside>
        </nav>
      )}
    </>
  )
}
