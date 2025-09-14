"use client"

import { useState } from "react"
import { Calendar, Users, DollarSign, Settings, Menu, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface SidebarProps {
  activePath?: string
}

export function Sidebar({ activePath }: SidebarProps) {
  const [open, setOpen] = useState(true) // colapsar no desktop
  const [mobileOpen, setMobileOpen] = useState(false) // drawer no mobile

  const navItems = [
    { label: "Aulas", icon: Calendar, href: "/dashboard/aulas" },
    { label: "Alunos", icon: Users, href: "/dashboard/alunos" },
    { label: "Financeiro", icon: DollarSign, href: "/dashboard/financeiro" },
    { label: "Configurações", icon: Settings, href: "/dashboard/config" },
  ]

  return (
    <>
      {/* Topbar (mobile) */}
      <div className="md:hidden flex items-center justify-between px-4 py-3 border-b bg-card">
        <span className="font-bold text-primary">ClasseLivre</span>
        <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      {/* Sidebar Desktop */}
      <aside
        className={cn(
          "hidden md:flex flex-col border-r bg-card shadow-sm transition-all duration-300",
          open ? "w-64" : "w-20"
        )}
      >
        {/* Header com toggle */}
        <div className="flex items-center justify-between px-4 py-4 border-b">
          {open && <span className="font-bold text-primary">ClasseLivre</span>}
          <Button
            variant="ghost"
            size="icon"
            className="ml-auto"
            onClick={() => setOpen(!open)}
          >
            {open ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
          </Button>
        </div>

        {/* Links */}
        <nav className="flex flex-col flex-1 px-2 py-4 space-y-2 text-sm">
          {navItems.map((item) => {
            const active = activePath?.startsWith(item.href)
            return (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded-md transition-colors",
                  active
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted text-muted-foreground",
                  !open && "justify-center"
                )}
              >
                <item.icon className="w-5 h-5" />
                {open && <span>{item.label}</span>}
              </a>
            )
          })}
        </nav>
      </aside>

      {/* Sidebar Mobile (drawer) */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/50 md:hidden"
          onClick={() => setMobileOpen(false)}
        >
          <aside
            className="absolute left-0 top-0 h-full w-64 bg-card shadow-lg p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="font-bold text-primary mb-6">ClasseLivre</h2>
            <nav className="flex flex-col gap-4 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </a>
              ))}
            </nav>
          </aside>
        </div>
      )}
    </>
  )
}
