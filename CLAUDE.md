# BIGinner — CLAUDE.md

Independent music magazine (biginner.es) covering news, album reviews, concerts, and interviews. Headless frontend over WordPress REST API.

## Tech stack

- **Framework**: Astro 5 (SSG, file-based routing)
- **Interactive UI**: Svelte 5 (preferred over React/Vue)
- **Styles**: Tailwind CSS — never use `@apply`, no preprocessors (Sass, etc.)
- **Language**: TypeScript 5.7 strict
- **HTTP Client**: Axios (active implementation in `axiosHttpService`)
- **Mocking**: MSW 2 (network interception in development)
- **Backend**: WordPress REST API + ACF plugin (custom fields)
- **Linting/Format**: ESLint 9 + Prettier 3 with Astro plugins

## Architecture — module-based DDD

Each domain follows the same layered structure:

```
src/{module}/
├── domain/           # Immutable entities (class with private constructor + static create())
├── infrastructure/
│   ├── {mod}.service.ts      # Abstract service interface
│   └── {mod}.httpService.ts  # Implementation delegating to PostHttpService
├── useCase/          # Pure functions that orchestrate services (manual wiring)
├── types/            # API response interfaces (AlbumResponse, etc.)
└── constants/        # Base URL, WP category ID, default limits
```

### Existing modules

| Module | WP Category | Status |
|--------|-------------|--------|
| `post` | generic base | implemented |
| `album` | 2 | implemented |
| `media` | — | implemented |
| `new` | pending | in README |
| `concert` | pending | in README |
| `interview` | pending | in README |
| `video` | pending | in README |

### Domain conventions

- Entities extend `Post`: `Album extends Post`, `New extends Post`, etc.
- `Post` holds reusable business logic: `getPreferredImageSize()`, `getFormattedDate()` (locale `es-ES`)
- `static create(response: XxxResponse): Xxx` is the only entry point to build entities
- Constructors are `private` — never instantiate with `new` outside the domain
- Always separate API response types (`XxxResponse`) from domain entities (`Xxx`)

### HTTP layer

- Abstract base class: `src/core/infrastructure/httpService.ts` (`HttpService`)
- Active implementation: `axiosHttpService` — handles retries (max 3) and throws `InfrastructureException.HttpError`
- `PostHttpService` is the generic service reused by all modules via composition
- Module-specific services (`AlbumHttpService`) receive `PostHttpService` via constructor (manual DI)
- Environment variables: `API_BASE_URL` via `import.meta.env`

### Use cases

- Simple exported functions (`getAlbums`, `getAlbumStaticPaths`)
- Perform manual wiring: `new PostHttpService()` → `new AlbumHttpService(postService)`
- Always wrapped in try/catch, return empty array on error

## Pages and routing

```
src/pages/
├── index.astro
├── 404.astro
├── discos/
│   ├── index.astro          # list
│   └── [slug]/index.astro   # detail (getStaticPaths)
├── conciertos/              # pending
├── entrevistas/             # pending
├── noticias/                # pending
└── tv/                      # pending
```

- Dynamic routes use `getStaticPaths()` → calls the corresponding use case
- Data fetching happens at **build time**, never on the client
- Configured aliases: `@layouts/`, `@components/`, and `src/` as root

## Mocking with MSW

- `src/mocks/handlers.js` intercepts `GET {API_BASE_URL}/posts` and filters by `?categories=`
- `categoryMapper` maps WP category ID to a JSON fixture
- Fixtures at `src/mocks/{module}/xxxList.json`
- When adding a new module, add its category and fixture to `categoryMapper`

## Naming conventions

- Entity/class files: `PascalCase` → `Album.ts`, `Post.ts`
- Service files: `camelCase.httpService.ts` → `album.httpService.ts`, `post.httpService.ts`
- Use case files: `camelCase.ts` → `getAlbums.ts`
- Module folders: `lowercase` → `album/`, `post/`, `media/`

## Language

Conversations with the user may be in Spanish, but **always write in English**: documentation, markdown files, code comments, commit messages, and any other written artifact in the codebase.

## Do NOT

- Instantiate entities with `new` outside their `static create()`
- Use `@apply` in Tailwind
- Add business logic in `.astro` pages — it belongs in domain or useCase
- Use `fetchHttpService` — the active canonical implementation is `axiosHttpService`
- Add debug `console.log` statements in production code
