import { getPageMetadata } from "@/lib/metadata"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = getPageMetadata("Aulas")

export default async function AulasPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/")
  }
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá visualizar e organizar suas aulas em um calendário ou lista.
      </p>
    </div>
  )
}
