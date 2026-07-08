# Nadadores Uni

Static site built with [Astro 5](https://astro.build) + Vue 3 islands.
Consumes an external API.

## Requirements

- Node.js `24` (see `.node-version`)
- [pnpm](https://pnpm.io) `>= 10`

## Getting started

```sh
pnpm install
cp .env.example .env   # fill in the values
pnpm dev               # http://localhost:4321
```

## Commands

| Command         | Action                                       |
| :-------------- | :------------------------------------------- |
| `pnpm install`  | Install dependencies                         |
| `pnpm dev`      | Start local dev server at `localhost:4321`   |
| `pnpm build`    | Type-check and build to `./dist/`            |
| `pnpm preview`  | Preview the production build locally         |

## Environment variables

| Variable                 | Description                       |
| :----------------------- | :-------------------------------- |
| `PUBLIC_API_URL`         | Base URL of the backend API       |
| `PUBLIC_AUTH_BASIC_USER` | Basic-auth user for the API       |
| `PUBLIC_AUTH_BASIC_PASS` | Basic-auth password for the API   |
