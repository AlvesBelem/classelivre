import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("Configurações")

export default function ConfigPage() {
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá ajustar informações do seu perfil e preferências de uso.
      </p>
    </div>
  )
}
