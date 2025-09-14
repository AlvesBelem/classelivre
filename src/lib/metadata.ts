import type { Metadata } from "next"

export function getPageMetadata(pageTitle: string): Metadata {
  return {
    title: `${pageTitle} | ClasseLivre`,
    description: `Página de ${pageTitle} da plataforma ClasseLivre para professores particulares.`,
  }
}
