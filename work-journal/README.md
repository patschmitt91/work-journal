# Patrick Schmitt - Work Journal

A personal work journal documenting my journey as a Cloud & AI Solution Engineer. Built with React, TypeScript, and Material-UI, this application showcases insights from cloud architecture, AI development, and modern solutions. Designed to be hosted as a static website on Azure Blob Storage.

## About

This is the professional work journal of Patrick Schmitt, a Cloud & AI Solution Engineer specializing in:
- Azure cloud architecture
- AI development and integration
- C# and .NET solutions
- DevOps and modern web development

## Features

- Clean, blog-inspired UI using Material-UI
- Responsive design (mobile, tablet, desktop)
- Intuitive navigation with top app bar and mobile drawer
- Journal entry management (chronological organization)
- Professional color palette and typography
- Ready for light/dark mode implementation
- Markdown support for journal entries (coming soon)

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Material-UI v7** - Component library
- **React Router** - Client-side routing
- **Emotion** - CSS-in-JS styling

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

The app will be available at `http://localhost:5173`

## Project Structure

```
src/
├── components/       # Reusable components
│   └── Navigation.tsx
├── pages/           # Page components
│   ├── Home.tsx
│   ├── JournalEntries.tsx
│   ├── About.tsx
│   └── Contact.tsx
├── theme.ts         # Material-UI theme configuration
├── App.tsx          # Main app component with routing
└── main.tsx         # Application entry point
```

## Available Pages

- **Home** - Welcome section with recent journal entries
- **Journal Entries** - Full list of all journal entries with search
- **About** - Personal information and purpose of the journal
- **Contact** - Contact form and social links

## Next Steps

- [ ] Implement markdown file reading for journal entries
- [ ] Add search and filter functionality
- [ ] Implement tags/categories system
- [ ] Add dark mode toggle
- [ ] Create individual entry view page
- [ ] Set up Azure Blob Storage deployment
- [ ] Add CI/CD pipeline

## Deployment

This application is designed to be deployed as a static website on Azure Blob Storage. Build the production bundle with `npm run build` and upload the `dist` folder contents to your Azure storage container.

## License

Personal project - feel free to use as inspiration for your own work journal!

---

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
