import { Card } from "@/components/ui/card";
import { ReactNode } from "react";

interface FeatureCardHorizontalProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export function FeatureCardHorizontal({
  icon,
  title,
  description,
}: FeatureCardHorizontalProps) {
  return (
    <Card className="flex items-start gap-4 p-6 rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
      {/* Ícone */}
      <div className="flex items-center justify-center bg-primary/10 text-primary rounded-full w-12 h-12 shrink-0">
        {icon}
      </div>

      {/* Conteúdo */}
      <div className="flex flex-col">
        <h3 className="font-semibold text-base mb-1">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </Card>
  );
}
