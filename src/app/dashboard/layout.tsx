import { auth } from "@/lib/auth"
import { Sidebar } from "@/components/ui/sidebar"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Home } from "lucide-react"
import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("Dashboard")

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()
  const user = session?.user

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar */}
      <Sidebar activePath="/dashboard" />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col">
        {/* Header com saudação */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-card shadow-sm">
          <Breadcrumbs path="/dashboard" />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            {user?.image ? (
              <Image
                src={user.image}
                alt="Foto de perfil"
                width={40}
                height={40}
                className="rounded-full border"
              />
            ) : null}
            <div className="flex flex-col text-right">
              <span className="text-xs font-semibold text-primary uppercase tracking-wide">
                Professor(a)
              </span>
              <span className="font-medium text-sm">
                {user?.name ?? "Usuário"}
              </span>
              <span className="text-xs text-muted-foreground">
                {user?.email}
              </span>
            </div>
          </div>
        </header>

        {/* Conteúdo da página */}
        <div className="flex-1 p-6">{children}</div>
      </main>
    </div>
  )
}

function Breadcrumbs({ path }: { path: string }) {
  const segments = path.split("/").filter(Boolean)

  return (
    <nav className="flex items-center gap-1 text-sm">
      {segments.map((segment, index) => {
        const href = "/" + segments.slice(0, index + 1).join("/")
        const label =
          segment.charAt(0).toUpperCase() + segment.slice(1).toLowerCase()
        const isLast = index === segments.length - 1

        return (
          <span key={href} className="flex items-center gap-1">
            {!isLast ? (
              <Link
                href={href}
                className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
              >
                {index === 0 ? <Home className="h-4 w-4" /> : null}
                {label}
              </Link>
            ) : (
              <span className="font-medium flex items-center gap-1">
                {index === 0 ? <Home className="h-4 w-4" /> : null}
                {label}
              </span>
            )}
            {!isLast && (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </span>
        )
      })}
    </nav>
  )
}
