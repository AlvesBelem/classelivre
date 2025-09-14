# classelivre✅ O que já temos implementado:

Projeto criado com Next.js + TypeScript.

Uso de shadcn/ui para UI components.

Integração com Auth.js para login.

Página de dashboard implementada.

Tela de autenticação unificada com:

Login

Cadastro

Recuperação de senha

Login com Google

Modo claro/escuro (dark/light) configurado.

Git configurado com fluxo via Pull Requests e commits em inglês.

📝 Conteúdo do README.md inicial (versão em inglês)
# ClasseLivre

**ClasseLivre** is a SaaS platform for private teachers who want to manage students, finances, content and communication — all in one place.

## 🚀 Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Auth.js](https://authjs.dev/)
- [Prisma ORM](https://www.prisma.io/) (planned)
- [PostgreSQL](https://www.postgresql.org/) (planned)

## 🔐 Authentication

- Sign up with name, email and password
- Login with email and password
- Password recovery (reset flow)
- Google login (OAuth)
- Light/Dark mode support

## 📁 Folder Structure



src/
├── app/ # Next.js routes and layouts
│ └── auth/ # Auth page (login + signup + recovery)
├── components/ # Shared UI components
│ └── auth/ # SignInForm, SignUpForm, etc.
├── lib/ # Utility functions (TBD)
├── styles/ # Global styles and tailwind config


## 🧪 How to Run Locally

```bash
git clone https://github.com/your-user/classelivre.git
cd classelivre
pnpm install
pnpm dev


Then visit http://localhost:3000
 ✨

📦 Scripts
Command	Description
pnpm dev	Start dev server
pnpm build	Build for production
pnpm lint	Lint project files
✅ Commit Convention

We follow Conventional Commits
:

feat: new feature

fix: bug fix

chore: config, dependencies, etc.

docs: documentation

style: formatting only

refactor: code change without behavior change

test: add or fix tests

perf: performance improvement

📌 Status

Project is in active development — MVP is being structured.

📄 License

MIT — feel free to fork and contribute!


---

## 💬 Quer customizar?
- Posso **traduzir para português** se quiser um repositório mais voltado ao público nacional.
- Posso **incluir badges** (Vercel, build status, license).
- Posso gerar o `README.md` como **arquivo pronto para download** agora.

O que prefere?