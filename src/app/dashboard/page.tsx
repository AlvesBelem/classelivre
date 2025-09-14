"use client"

import { usePathname } from "next/navigation"
import { Sidebar } from "@/components/ui/sidebar"
import { FeatureCardHorizontal } from "@/components/FeatureCardHorizontal"
import { Calendar, Users, DollarSign, Settings } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function DashboardPage() {
  const pathname = usePathname()

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar com activePath */}
      <Sidebar activePath={pathname} />

      {/* Conteúdo principal */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between px-6 py-4 border-b bg-card shadow-sm">
          <h1 className="text-xl font-semibold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="/avatar.png" alt="Professor" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
            <span className="font-medium">Prof. Ricardo</span>
          </div>
        </header>

        {/* Cards horizontais */}
        <div className="flex-1 p-6 grid gap-6 md:grid-cols-2">
          <FeatureCardHorizontal
            icon={<Calendar className="w-6 h-6" />}
            title="Agenda de Aulas"
            description="Veja suas próximas aulas e organize sua semana com facilidade."
          />
          <FeatureCardHorizontal
            icon={<Users className="w-6 h-6" />}
            title="Gestão de Alunos"
            description="Acompanhe o desempenho e o histórico de cada aluno."
          />
          <FeatureCardHorizontal
            icon={<DollarSign className="w-6 h-6" />}
            title="Controle Financeiro"
            description="Gerencie pagamentos, mensalidades e ganhos extras."
          />
          <FeatureCardHorizontal
            icon={<Settings className="w-6 h-6" />}
            title="Configurações"
            description="Personalize sua conta e preferências de uso."
          />
        </div>
      </main>
    </div>
  )
}
