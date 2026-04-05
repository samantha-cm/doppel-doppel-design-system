# Doppel Design System

> The official design system of [Doppel](https://www.doppel.com/) — the AI-powered social engineering defense platform.

This repository contains the component library and interactive documentation (Storybook) that form the visual and technical foundation of Doppel's web products.

---

## Table of contents

- [What is this Design System?](#what-is-this-design-system)
- [Key benefits](#key-benefits)
- [Prerequisites](#prerequisites)
- [Installation and getting started](#installation-and-getting-started)
- [Resources and links](#resources-and-links)
- [Contributing](#contributing)
- [Versioning and releases](#versioning-and-releases)
- [Contact and support](#contact-and-support)

---

## What is this Design System?

The **Doppel Design System** is the single source of truth for the visual and interaction language of Doppel's web products. It brings together reusable React components and implementation guidelines, all documented and browsable through Storybook.

**Tech stack:**

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite 8](https://vite.dev/) as bundler and dev server
- [Storybook 10](https://storybook.js.org/) for interactive component documentation
- [Tailwind CSS v4](https://tailwindcss.com/) with custom design tokens via CSS custom properties
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/) for testing

---

## Key benefits

**Visual consistency** — A single source of truth for components ensures all products look and behave coherently.

**Development speed** — Ready-to-use components reduce implementation time for new interfaces and prevent reimplementing common patterns.

**Built-in accessibility** — Every component is built following WCAG guidelines, with keyboard support, visible focus states, and ARIA labels.

**Living documentation** — Storybook serves as an interactive catalog: design and development teams can explore, test, and validate components without running the main application.

---

## Prerequisites

- Node.js `>=18`
- [pnpm](https://pnpm.io/) `>=9` (recommended package manager)

---

## Installation and getting started

### 1. Clone the repository

```bash
git clone https://github.com/[org]/doppel-storybook.git
cd doppel-storybook
```

### 2. Install dependencies

```bash
pnpm install
```

### 3. Start the development environment

To work on components with hot reload:

```bash
pnpm dev
```

### 4. Start Storybook

To explore, document, and test components in isolation:

```bash
pnpm storybook
```

### Other useful commands

| Command                | Description                           |
| ---------------------- | ------------------------------------- |
| `pnpm build`           | Builds the application for production |
| `pnpm build-storybook` | Generates the static Storybook site   |
| `pnpm lint`            | Runs ESLint across the source code    |
| `pnpm preview`         | Previews the production build locally |

---

## Resources and links

| Resource                    | URL                                                                                      |
| --------------------------- | ---------------------------------------------------------------------------------------- |
| Figma — Website Foundations | [Open in Figma](https://www.figma.com/design/elb3eQYVxMAFRxxc6EkhXX/Website-Foundations) |
| Doppel website              | [doppel.com](https://www.doppel.com/)                                                    |
| Storybook (production)      | `https://[link-to-storybook]`                                                            |
| Internal docs               | `https://[link-to-docs]`                                                                 |

---

## Contributing

1. Create a branch from `main` using the Linear ticket identifier as the branch name (e.g. `ENG-123`).
2. Make your changes. Any new or modified component must include an updated `.stories.tsx` file.
3. Write commits following the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.
4. Open a Pull Request to `main` with a clear description of the changes and a reference to the ticket.
5. At least one team approval is required before merging.

---

<sub>Maintained by the [Octahedroid](https://octahedroid.com) team for Doppel.</sub>
