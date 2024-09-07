"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";
import { oswald } from "@/lib/fonts";
import { usePathname } from "next/navigation";

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
];

function SvgMenu() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-menu"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function SvgClose() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function Logo({
  checkCloseMenu,
  closeMenu,
}: {
  checkCloseMenu: (url: string) => void;
  closeMenu: () => void;
}) {
  return (
    <Link
      href="/"
      onClick={() => checkCloseMenu("/")}
      className="flex place-items-center"
    >
      <img src="/logo.jpg" alt="logo" className="w-8 h-9 mr-3" />
      <h1 className={cn("text-2xl", oswald.className)} onClick={closeMenu}>
        CLAESNN
      </h1>
    </Link>
  );
}

function BurgerMenu({
  menuOpen,
  toggleMenu,
}: {
  menuOpen: boolean;
  toggleMenu: () => void;
}) {
  return (
    <button onClick={toggleMenu} className="sm:hidden">
      {!menuOpen ? <SvgMenu /> : <SvgClose />}
    </button>
  );
}

function Sidebar({
  closeMenu,
  children,
}: {
  closeMenu: () => void;
  children: React.ReactNode;
}) {
  return (
    <nav className="w-full z-10 fixed top-[50px] flex">
      <div
        onClick={closeMenu}
        className=" bg-gray-900 h-screen flex-grow opacity-40"
      ></div>
      <aside className="w-[20rem] bg-white h-screen p-3 flex flex-col">
        {children}
      </aside>
    </nav>
  );
}

function SidebarLinks({
  links,
  checkCloseMenu,
  pathname,
}: {
  links: { name: string; route: string }[];
  checkCloseMenu: (url: string) => void;
  pathname: string;
}) {
  return links.map((link) => (
    <Link href={link.route} key={link.name}>
      <Button
        variant="link"
        className={cn("text-foreground text-lg", {
          underline: pathname.startsWith(link.route),
        })}
        onClick={() => checkCloseMenu(link.route)}
      >
        {link.name}
      </Button>
    </Link>
  ));
}

function MainNav({
  links,
  pathname,
}: {
  links: { name: string; route: string }[];
  pathname: string;
}) {
  return (
    <nav className="hidden gap-6 sm:flex">
      {links.map((link) => (
        <Link
          href={link.route}
          className={`text-sm ${
            pathname.startsWith(link.route) ? "underline text-blue-900" : ""
          }`}
          key={link.name}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  function closeMenu() {
    setMenuOpen(false);
    document.body.style.overflow = "visible";
  }

  function toggleMenu() {
    document.body.style.overflow = menuOpen ? "visible" : "hidden";
    setMenuOpen(!menuOpen);
  }

  function checkCloseMenu(url: string) {
    if (menuOpen && url === pathname) {
      closeMenu();
    }
  }

  useEffect(() => {
    closeMenu();
  }, [pathname]);

  return (
    <>
      <header className="shadow-sm w-full fixed top-0 bg-white opacity-95">
        <div className="flex justify-between px-4 py-3 place-items-center max-w-7xl mx-auto ">
          <Logo checkCloseMenu={checkCloseMenu} closeMenu={closeMenu} />
          <BurgerMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
          <MainNav links={links} pathname={pathname} />
        </div>
      </header>
      {menuOpen && (
        <Sidebar closeMenu={closeMenu}>
          <SidebarLinks
            links={links}
            checkCloseMenu={checkCloseMenu}
            pathname={pathname}
          />
        </Sidebar>
      )}
    </>
  );
}
