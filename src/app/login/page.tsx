import { getPageMetadata } from "@/lib/metadata"
import { LoginContent } from "@/app/login/login-content"

export const metadata = getPageMetadata("Login")

export default function LoginPage() {
  return <LoginContent />
}
