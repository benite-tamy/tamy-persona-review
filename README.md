# Tamy Food — Persona Review Site

**Start Growth Academy — Missão 2: Persona Unificada**  
Março 2026 | Matheus Benites (CTO) + Pedro Smolka (CEO)

---

## 🍽️ O que é este repositório

North Star document da Tamy Food. Toda decisão estratégica de produto, GTM, CS e pricing parte daqui.

**Tamy Food** = Toast + Ramp + Restoke + Duolingo para gastronomia na LATAM.  
Inteligência financeira no WhatsApp. Saiba o lucro real, reduza custos, tome decisões com dados — em 5 minutos/dia.

---

## 📁 Estrutura

```
/                    → Site estático HTML (legado)
/vite-app/           → 🆕 Vite + React + Tailwind (versão moderna)
```

## 🚀 Vite App (versão moderna)

Stack: **React 19 + Vite + Tailwind CSS 3** — Mobile-first, Design System Tamy Food

### Rodando localmente

```bash
cd vite-app
npm install
npm run dev
```

### Build para produção

```bash
cd vite-app
npm run build
# Resultado em vite-app/dist/
```

### Deploy (Netlify)

1. Connect repositório no Netlify
2. Base directory: `vite-app`
3. Build command: `npm run build`
4. Publish directory: `vite-app/dist`

---

## 📄 Páginas

| Página | Descrição |
|--------|-----------|
| Hub | Dashboard principal + quick stats |
| Fundamentos | Missão, visão, valores, tech stack, 6 agentes |
| Personas | Seu Carlos (Alpha) + Dona Márcia (Beta) + ICPs |
| 12 Perguntas | Q01–Q12: Dores, medos, oportunidades, estratégias |
| Mercado & Planos | R$495B TAM, dados ABRASEL/SEBRAE, Planos Essencial + Concierge |
| Sexy Canvas | 14 dimensões emocionais (7 Pecados + 7 Criança Interior) |
| Estratégia | Jornada D0→D90, Hipóteses, Playbook 100, Health Score, Riscos |

---

## 🎨 Design System

Baseado no `packages/ui` do monorepo Tamy Food:
- **Cores**: `hsl(263, 72%, 60%)` Tamy Light Purple, `hsl(270, 65%, 14%)` Tamy Dark
- **Gradient**: `linear-gradient(135deg, hsl(255,95%,67%), hsl(270,80%,65%))`
- **Tipografia**: Work Sans (800/700/600/500)
- **Componentes**: shadcn/ui base, Radix UI primitives

---

## 👥 Personas

| Persona | Perfil | Plano |
|---------|--------|-------|
| **Seu Carlos** | 41 anos, Bar Curitiba, R$85k/mês, ICP Alpha | Essencial R$189,90 |
| **Dona Márcia** | 36 anos, Marmitaria SP, R$120k/mês, ICP Beta | Concierge R$549,90 |

> **ABRASEL 2025**: Mulheres lideram **52,7%** das empresas de food service e **67,34%** de delivery/marmitarias.

---

## 🏗️ Tech Stack (monorepo)

- **Frontend**: React 19, Next.js 15, Vite, Tailwind CSS
- **Backend**: NestJS, FastAPI, Go
- **AI**: LangGraph, 6 agentes, 111+ skills
- **Memória**: 4-layer (Working/Redis, Episodic/PostgreSQL, Semantic/Weaviate, Business/Redis)
- **Open Finance**: Pluggy (Phase 1: bank sync completo)
- **Testes**: 254+ test files, 1661+ unit tests

---

*Tamy Food · Start Growth Academy 2026*
