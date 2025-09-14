import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("Alunos")

export default function AlunosPage() {
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá gerenciar seus alunos, ver progresso e histórico de cada um.
      </p>
    </div>
  )
}
