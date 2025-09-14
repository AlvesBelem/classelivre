import { FeatureCard } from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="flex items-center text-primary font-bold text-xl">
          <BookOpen className="h-6 w-6 mr-2 text-secondary" />
          <span>ClasseLivre</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">Recursos</a>
          <a href="#" className="hover:text-primary transition-colors">Planos</a>
          <a href="#" className="hover:text-primary transition-colors">Contato</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-transparent blur-3xl opacity-40" />

        <div className="relative z-10 container mx-auto px-4 py-12 md:py-24">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-block bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-sm font-medium mb-4">
              Plataforma para professores particulares
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Organize suas aulas e alunos em um só lugar
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Gerencie horários, alunos, pagamentos e materiais de forma simples e prática, com uma plataforma feita sob medida para professores particulares.
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-secondary text-primary-foreground font-semibold px-8 h-12 shadow-lg transition-all group"
              >
                Começar agora
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-8 h-12"
              >
                Ver planos
              </Button>
            </div>
          </div>

          {/* Features */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Users className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />}
              title="Gestão de alunos"
              description="Cadastre e acompanhe seus alunos, com histórico de aulas e progresso individual."
            />
            <FeatureCard
              icon={<BookOpen className="h-10 w-10 text-secondary group-hover:scale-110 transition-transform" />}
              title="Aulas organizadas"
              description="Controle sua agenda, materiais de estudo e facilite o acesso dos alunos."
            />
            <FeatureCard
              icon={<Shield className="h-10 w-10 text-primary group-hover:scale-110 transition-transform" />}
              title="Financeiro seguro"
              description="Controle mensalidades e pagamentos extras com total segurança."
            />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} ClasseLivre. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary">Política de Privacidade</a>
            <a href="#" className="hover:text-primary">Termos de Uso</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
