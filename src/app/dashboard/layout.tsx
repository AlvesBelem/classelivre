"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean) // ["dashboard", "alunos"]

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar activePath={pathname} />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col">
        {/* Header fixo em todas as páginas */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-card shadow-sm">
          <Breadcrumbs segments={segments} />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Professor" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <span className="font-medium">Prof. Ricardo</span>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  )
}

function Breadcrumbs({ segments }: { segments: string[] }) {
  const crumbs = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/")
    const label =
      segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
    const isLast = index === segments.length - 1

    return (
      <span key={href} className="flex items-center gap-1 text-sm">
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
  })

  return <nav className="flex items-center gap-1">{crumbs}</nav>
}
