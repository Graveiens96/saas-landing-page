"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BarChart2 } from "lucide-react"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => {
    if (path === "/" && pathname === "/") return true
    if (path !== "/" && pathname.startsWith(path)) return true
    return false
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <BarChart2 className="h-6 w-6" />
          <span>StreamLine</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${isActive("/") ? "underline" : "hover:underline"} underline-offset-4`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-sm font-medium ${isActive("/about") ? "underline" : "hover:underline"} underline-offset-4`}
          >
            About
          </Link>
          <Link
            href="/pricing"
            className={`text-sm font-medium ${isActive("/pricing") ? "underline" : "hover:underline"} underline-offset-4`}
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className={`text-sm font-medium ${isActive("/blog") ? "underline" : "hover:underline"} underline-offset-4`}
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-medium ${isActive("/contact") ? "underline" : "hover:underline"} underline-offset-4`}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

