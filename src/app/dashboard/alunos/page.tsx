import { getPageMetadata } from "@/lib/metadata"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = getPageMetadata("Alunos")

export default async function AlunosPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/")
  }
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá gerenciar seus alunos, ver progresso e histórico de cada um.
      </p>
    </div>
  )
}
