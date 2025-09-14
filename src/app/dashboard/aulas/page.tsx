import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("Aulas")

export default function AulasPage() {
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá visualizar e organizar suas aulas em um calendário ou lista.
      </p>
    </div>
  )
}
