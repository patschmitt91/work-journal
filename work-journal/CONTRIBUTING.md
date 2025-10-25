# Contributing Guidelines

## Code Style

### General Principles

- Write clean, readable code
- Follow TypeScript best practices
- Use meaningful variable and function names
- Keep functions small and focused
- Comment complex logic

### Formatting

- Use 2 spaces for indentation
- Use single quotes for strings
- Add trailing commas in multi-line objects/arrays
- No emojis in code, comments, or commit messages
- Use descriptive text instead of icons/emojis

### TypeScript

- Always define types explicitly
- Use interfaces for object shapes
- Prefer `type` imports when importing only types
- Avoid `any` - use proper typing

### React/TSX

- Use functional components with hooks
- Keep components focused on a single responsibility
- Extract reusable logic into custom hooks
- Use Material-UI components consistently

### File Naming

- Use PascalCase for component files: `MyComponent.tsx`
- Use camelCase for utility files: `myUtil.ts`
- Use kebab-case for content files: `2025-10-25-my-entry.ts`

## Commit Messages

- Use clear, descriptive commit messages
- Start with a verb in imperative mood (Add, Fix, Update, Remove)
- No emojis in commit messages
- Keep first line under 72 characters

Good examples:
- `Add navigation component with responsive drawer`
- `Fix entry loading on home page`
- `Update theme colors for dark mode`

## Adding Journal Entries

See `src/content/README.md` for detailed instructions on adding new journal entries.

## Testing

Before committing:
1. Ensure no TypeScript errors: `npm run build`
2. Check for linting issues: `npm run lint`
3. Test in browser: `npm run dev`

## Pull Requests

- Keep PRs focused on a single feature or fix
- Include a clear description of changes
- Reference any related issues
- Ensure all checks pass before requesting review
