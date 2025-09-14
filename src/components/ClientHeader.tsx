"use client"

import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type Props = {
  user?: {
    name?: string | null
    image?: string | null
    email?: string | null
  }
}

export function ClientHeader({ user }: Props) {
  return (
    <div className="flex items-center gap-3">
      <ThemeToggle />

      <Avatar>
        <AvatarImage src={user?.image || "/avatar.png"} alt="Foto do usuário" />
        <AvatarFallback>
          {user?.name?.charAt(0).toUpperCase() || "?"}
        </AvatarFallback>
      </Avatar>

      <div className="flex flex-col leading-tight">
        <span className="font-medium text-sm">{user?.name || "Professor"}</span>
        {user?.email && (
          <span className="text-xs text-muted-foreground">{user.email}</span>
        )}
      </div>
    </div>
  )
}
