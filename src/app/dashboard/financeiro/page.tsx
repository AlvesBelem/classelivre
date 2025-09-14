import { getPageMetadata } from "@/lib/metadata"
import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const metadata = getPageMetadata("Financeiro")

export default async function FinanceiroPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/")
  }
  return (
    <div>
      <p className="text-muted-foreground">
        Aqui você poderá controlar mensalidades, pagamentos extras e visualizar seus ganhos.
      </p>
    </div>
  )
}
