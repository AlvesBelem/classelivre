"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ChevronRight, Home } from "lucide-react"

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)

  return (
    <nav className="flex items-center gap-1 text-sm">
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/")
        const label = segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
        const isLast = index === segments.length - 1

        return (
          <span key={href} className="flex items-center gap-1">
            {!isLast ? (
              <Link
                href={href}
                className="flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
              >
                {index === 0 ? <Home className="h-4 w-4" /> : null}
                {label}
              </Link>
            ) : (
              <span className="flex items-center gap-1 font-medium text-foreground">
                {index === 0 ? <Home className="h-4 w-4" /> : null}
                {label}
              </span>
            )}
            {!isLast && <ChevronRight className="h-4 w-4 text-muted-foreground" />}
          </span>
        )
      })}
    </nav>
  )
}
