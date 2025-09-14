import { Card } from "@/components/ui/card"
import { ReactNode } from "react"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
}

export function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="group p-6 rounded-xl border border-border shadow-sm hover:border-primary hover:shadow-md transition-all text-center">
      <div className="flex items-center justify-center bg-muted rounded-full mx-auto w-14 h-14 mb-4">
        {icon}
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </Card>
  )
}
