# Credmais

Landing page institucional da **Credmais** — crédito consignado e empréstimo pessoal. Projeto desenvolvido com Next.js, totalmente responsivo e organizado em componentes reutilizáveis.

## Sobre o projeto

Site de página única (one page) com foco em conversão, apresentando os serviços da Credmais, simulação de crédito, depoimentos, FAQ e canais de contato via WhatsApp.

## Tecnologias

| Tecnologia   | Versão   |
| ------------ | -------- |
| Next.js      | 16.2.10  |
| React        | 19.2.4   |
| TypeScript   | 5.x      |
| CSS Modules  | —        |

## Funcionalidades

- Layout responsivo (mobile, tablet e desktop)
- Menu fixo com navegação por âncoras
- Menu hamburger no mobile
- FAQ com accordion interativo
- Botões de CTA para simulação e WhatsApp
- Imagens e textos centralizados em arquivo de dados
- Componentes modulares por seção

## Seções da página

| Seção            | ID               | Descrição                              |
| ---------------- | ---------------- | -------------------------------------- |
| Header           | —                | Logo, menu e botão WhatsApp            |
| Hero             | `#inicio`        | Título principal, CTAs e imagem        |
| Vantagens        | `#vantagens`     | 6 diferenciais da empresa              |
| Público-alvo     | —                | Perfis atendidos                       |
| Como funciona    | `#como-funciona` | Passo a passo em 4 etapas              |
| Simulação        | `#simulacao`     | Tabela de valores e CTA                |
| Depoimentos      | —                | Avaliações de clientes                 |
| FAQ              | `#perguntas`     | Perguntas frequentes                   |
| CTA final        | —                | Barra laranja de conversão             |
| Footer           | `#contato`       | Contato, links institucionais e redes  |

## Estrutura do projeto

```
credmais/
├── public/
│   └── assets/
│       ├── logo/
│       │   └── logo.png          # Logo da empresa
│       └── images/
│           └── img.png           # Imagem do hero
├── src/
│   ├── app/
│   │   ├── globals.css           # Variáveis CSS e reset
│   │   ├── layout.tsx            # Layout raiz e metadata
│   │   └── page.tsx              # Montagem da landing page
│   ├── components/
│   │   ├── icons/                # Ícones SVG
│   │   ├── landing/              # Seções da página
│   │   └── ui/                   # Componentes base (Button, Logo, etc.)
│   └── data/
│       └── landing.ts            # Textos, links e dados estáticos
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Como rodar

### Pré-requisitos

- Node.js 18+
- npm

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

### Build de produção

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

## Personalização

### Textos e links

Edite o arquivo `src/data/landing.ts` para alterar:

- Links do menu
- Vantagens, público-alvo e passos
- Tabela de simulação
- Depoimentos e FAQ
- URL do WhatsApp

```ts
export const WHATSAPP_URL = "https://wa.me/5511999999999";
```

### Imagens

Substitua os arquivos mantendo o mesmo nome e caminho:

| Arquivo                              | Uso                    |
| ------------------------------------ | ---------------------- |
| `public/assets/logo/logo.png`        | Logo (header e footer) |
| `public/assets/images/img.png`       | Imagem do hero         |

### Cores

As cores principais estão em `src/app/globals.css`:

| Variável              | Cor       | Uso                |
| --------------------- | --------- | ------------------ |
| `--green-dark`        | `#0f3d2e` | Header, hero, footer |
| `--orange`            | `#f07820` | Destaques e CTAs   |
| `--green-whatsapp`    | `#25d366` | Botão WhatsApp     |

### Metadata (SEO)

Ajuste título e descrição em `src/app/layout.tsx`.

## Scripts disponíveis

| Comando        | Descrição                        |
| -------------- | -------------------------------- |
| `npm run dev`  | Inicia o servidor de desenvolvimento |
| `npm run build`| Gera o build de produção         |
| `npm start`    | Inicia o servidor de produção    |
| `npm run lint` | Executa o ESLint                 |

## Licença

Projeto privado. Todos os direitos reservados.
