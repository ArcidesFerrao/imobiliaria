# JGTS – Imobiliária, E.I. · Landing Page

Landing page profissional para a **JGTS – Imobiliária, E.I.**, empresa de avaliação e mediação imobiliária sediada em Maputo, Moçambique. Construída com **Next.js 15**, **TypeScript** e **CSS-in-JS** — sem dependências de UI externas.

---

## Preview

| Dark Mode                             | Light Mode                                 |
| ------------------------------------- | ------------------------------------------ |
| Fundo `#0D0D0D` · Dourado `#C9A84C`   | Fundo `#FAF8F4` · Dourado `#A8803A`        |
| Tipografia: _Playfair Display_ + Jost | Tipografia: _Cormorant Garamond_ + DM Sans |

---

## Stack

- **Framework:** Next.js 15 (App Router)
- **Linguagem:** TypeScript
- **Estilos:** CSS-in-JS via `<style>` tag (sem Tailwind, sem CSS Modules)
- **Fontes:** Google Fonts (`@import` inline)
- **Deploy:** Vercel (recomendado)

---

## Estrutura de ficheiros

```
├── app/
│   ├── page.tsx              # Versão Dark Mode
│   └── page-light.tsx        # Versão Light Mode (com toggle dark/light)
├── public/
│   └── ...                   # Assets estáticos (favicon, og-image, etc.)
├── README.md
├── next.config.ts
├── tsconfig.json
└── package.json
```

> **Nota:** Ambos os ficheiros são componentes `"use client"` independentes. O `page-light.tsx` inclui um toggle integrado que alterna entre dark e light em runtime via classe no `body`.

---

## Funcionalidades

- **Hero** com grid de duas colunas, eyebrow tag, título tipográfico, tags de tipos de imóvel e stats
- **Marquee** animado com os serviços (versão light)
- **Secção de slogan** — _"Onde o seu sonho encontra endereço."_
- **Serviços** — grid 3×2 com 6 serviços e animação de borda ao hover
- **Sobre nós** — missão, visão e descrição da empresa com visual decorativo
- **Valores** — grid 4×2 com os 8 valores corporativos
- **Diferenciais** — layout sticky com lista dos 5 diferenciais
- **Formulário de contacto** — split layout com informações + formulário funcional
- **Footer** com logótipo, tagline e copyright
- **Navbar fixa** com blur ao scroll e scroll suave para secções
- **Toggle de tema** 🌙/☀️ (versão light/dark unificada)
- **Totalmente responsivo** para mobile

---

## Como executar localmente

**Pré-requisitos:** Node.js 18+ e npm/yarn/pnpm

```bash
# 1. Clonar o repositório
git clone https://github.com/SEU_USUARIO/jgts-landing.git
cd jgts-landing

# 2. Instalar dependências
npm install

# 3. Iniciar servidor de desenvolvimento
npm run dev
```

Acede a [http://localhost:3000](http://localhost:3000) no browser.

---

## Scripts disponíveis

```bash
npm run dev       # Servidor de desenvolvimento (hot reload)
npm run build     # Build de produção
npm run start     # Iniciar servidor de produção
npm run lint      # Verificar erros de linting
```

---

## Deploy na Vercel

A forma mais rápida de publicar:

1. Faz push do repositório para o GitHub
2. Acede a [vercel.com](https://vercel.com) e importa o repositório
3. A Vercel detecta automaticamente o Next.js — clica em **Deploy**

Ou via CLI:

```bash
npm i -g vercel
vercel
```

---

## Personalização

### Trocar conteúdo

Todo o conteúdo (textos, contactos, serviços, valores) está inline nos componentes. Procura pelos arrays de objectos e edita directamente:

```tsx
// Serviços — em page.tsx e page-light.tsx
const services = [
  { title: "Avaliação Profissional", desc: "..." },
  // ...
];

// Contactos
const contacts = {
  phones: ["+258 82 832 9180", "+258 84 106 7083", "+258 87 210 6708"],
  email: "joaquimd564@gmail.com",
  location: "Maputo — Boane, Moçambique",
};
```

### Trocar fontes

As fontes são importadas via `@import url(...)` no bloco de estilos. Para mudar, substitui o URL do Google Fonts e actualiza as variáveis `font-family`.

### Trocar cores (Dark Mode)

```css
:root {
  --gold: #c9a84c; /* Cor de destaque principal */
  --dark: #0d0d0d; /* Fundo principal */
  --text: #f0ede6; /* Texto principal */
  --text-muted: #8a8072; /* Texto secundário */
}
```

### Trocar cores (Light Mode)

```css
body.light {
  --gold: #a8803a; /* Cor de destaque principal */
  --bg: #faf8f4; /* Fundo principal */
  --text: #1a1612; /* Texto principal */
  --navy: #1e2b4a; /* Cor de botões/destaque */
}
```

---

## Adicionar imagens reais

Os elementos visuais actualmente usam SVGs placeholder. Para adicionar fotografias reais de imóveis:

```tsx
// Substitui a div placeholder pela tag next/image
import Image from "next/image";

// No hero
<Image
  src="/images/hero-property.jpg"
  alt="Imóvel em destaque"
  fill
  style={{ objectFit: "cover" }}
  priority
/>;
```

Coloca as imagens em `/public/images/` e actualiza os `src`.

---

## Conectar o formulário

O formulário actualmente não tem backend. Para activar o envio de emails, integra um dos seguintes serviços:

- **[Resend](https://resend.com)** — recomendado para Next.js (API Route simples)
- **[EmailJS](https://www.emailjs.com)** — integração client-side sem backend
- **[Formspree](https://formspree.io)** — apenas muda o `action` do form

Exemplo com Resend via API Route (`app/api/contact/route.ts`):

```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { nome, email, mensagem } = await req.json();

  await resend.emails.send({
    from: "site@jgts.co.mz",
    to: "joaquimd564@gmail.com",
    subject: `Nova mensagem de ${nome}`,
    text: mensagem,
  });

  return Response.json({ success: true });
}
```

---

## Licença

Este projecto foi desenvolvido exclusivamente para a **JGTS – Imobiliária, E.I.**  
Todos os direitos reservados © 2026 JGTS Imobiliária.

---

## Créditos

Desenvolvido por **[Evolure Labs](https://github.com/SEU_USUARIO)** · Maputo, Moçambique  
_Transformando processos em experiências digitais._
