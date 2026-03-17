# BIGinner

BIGinner is an independent music web magazine featuring news, album reviews, concerts, and interviews with local and international bands.

http://biginner.es/

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
│   └── fonts
│   └── images
├── src/
│   └── album/
│   └── assets/
│   └── concert/
│   └── interview/
│   └── media/
│   └── video/
│   └── layouts/
│   └── new/
│   └── mocks/
│   └── post/
│   └── styles/
│   └── utils/
│   └── pages/
│       └── conciertos
│       └── discos
│       └── entrevistas
│       └── noticias
│       └── tv
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Tech stack

### Backend

- **Wordpress API**

### Frontend

- **Typescript**
- **Astro**
- **Svelte**
- **CSS**
- **Tailwind**
- **MSW**

## Domains

### Post

- **id**: number
- **date**: Date
- **slug**: string
- **status**: string
- **link**: string
- **title**: string
- **content**: string
- **excerpt**: string
- **author**: string
- **featuredMedia**: Media
- **commentStatus**: string
- **categories**: number[]
- **tags**: number[]

### Album (extend Post)

- **score**: number
- **year**: string
- **artist**: string

### Media

- **id**: number
- **title**: string
- **slug**: string
- **altText**: string
- **sizes**: MediaSizes -> medium, large, thumbnail, mediumLarge, full

### New (extend Post)

- **subtitle**: string

### Concert (extend Post)

- **artist**: string
- **location**: string

### Interview (extend Post)

- **artist**: string
- **album**: string

### Video (extend Post)

- **artist**: string
- **song**: string
