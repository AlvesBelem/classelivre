import { getPageMetadata } from "@/lib/metadata"
import { FeatureCardHorizontal } from "@/components/FeatureCardHorizontal"
import { Calendar, Users, DollarSign, Settings } from "lucide-react"

export const metadata = getPageMetadata("Dashboard")

export default function DashboardPage() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
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
  )
}
