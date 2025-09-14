import { getPageMetadata } from "@/lib/metadata"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = getPageMetadata("Configurações")

export default async function ConfigPage() {
    const session = await auth();

  if (!session?.user) {
    redirect("/")
  }
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá ajustar informações do seu perfil e preferências de uso.
      </p>
    </div>
  )
}
