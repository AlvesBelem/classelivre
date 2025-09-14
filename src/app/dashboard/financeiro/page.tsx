import { getPageMetadata } from "@/lib/metadata"

export const metadata = getPageMetadata("Financeiro")

export default function FinanceiroPage() {
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá controlar mensalidades, pagamentos extras e visualizar seus ganhos.
      </p>
    </div>
  )
}
