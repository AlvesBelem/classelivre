"use client"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { LogIn } from "lucide-react"

export function SignInForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError("")

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    if (result?.error) {
      setError("E-mail ou senha inválidos.")
    } else {
      router.push("/dashboard")
    }
  }

  async function handleGoogleLogin() {
    await signIn("google", { callbackUrl: "/dashboard" })
  }

  return (
    <div className="space-y-6 mt-4">
      {/* Formulário de login */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button type="submit" className="w-full">
          Entrar
        </Button>
      </form>

      {/* Link de recuperação de senha */}
      <div className="text-right">
        <Link
          href="/recuperar-senha"
          className="text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          Esqueceu sua senha?
        </Link>
      </div>

      {/* Divisor */}
      <div className="relative">
        <Separator className="my-4" />
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-background px-2 text-sm text-muted-foreground">
          ou
        </span>
      </div>

      {/* Botão Google */}
      <Button
        type="button"
        variant="outline"
        className="w-full flex items-center justify-center gap-2 text-primary hover:text-primary"
        onClick={handleGoogleLogin}
      >
        <LogIn className="w-5 h-5 text-primary" />
        Entrar com Google
      </Button>
    </div>
  )
}
