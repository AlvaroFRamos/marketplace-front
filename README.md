# Marketplace Front

Frontend em React + Vite (JavaScript).

## Scripts

```bash
npm install
npm run dev           # servidor de desenvolvimento
npm run build         # build de produção
npm run preview       # serve o build localmente
npm run lint          # oxlint
npm run format        # prettier
npm test              # vitest
```

Copie `.env.example` para `.env` e ajuste `VITE_API_URL`.

## Estrutura

```
src/
├── app/            # App, providers globais e definição de rotas
├── components/
│   ├── layout/     # Layouts (header, shell da aplicação)
│   └── ui/         # Componentes visuais reutilizáveis (Button, ...)
├── config/         # Leitura de variáveis de ambiente
├── features/       # Módulos por domínio (api, hooks, componentes)
│   └── products/
├── lib/            # Cliente HTTP, QueryClient e utilitários
├── pages/          # Páginas ligadas às rotas
├── styles/         # CSS global
└── test/           # Setup dos testes
```

Imports usam o alias `@/` apontando para `src/`.

## Stack

- React 19 + Vite
- React Router (roteamento)
- TanStack Query (dados do servidor)
- CSS Modules
- Vitest + Testing Library
- oxlint + Prettier
