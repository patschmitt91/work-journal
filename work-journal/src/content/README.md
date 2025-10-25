# Journal Entries

This directory contains all journal entries for the work journal application.

## Structure

- `entries/` - Individual journal entry files
- `entries/TEMPLATE.ts` - Template for creating new entries
- `entries.ts` - Main entries registry that exports all utility functions

## Adding a New Entry

### Step 1: Create a New Entry File

1. Copy the `TEMPLATE.ts` file in the `entries/` directory
2. Rename it following the pattern: `YYYY-MM-DD-title.ts`
   - Example: `2025-10-25-my-first-entry.ts`

### Step 2: Fill in the Entry Data

Edit your new file and fill in:

```typescript
import type { JournalEntry } from '../../types/entry';

export const entry: JournalEntry = {
  id: '2025-10-25-my-first-entry',  // Should match filename
  title: 'My First Entry',
  date: '2025-10-25',  // YYYY-MM-DD format
  excerpt: 'A brief summary of this entry (1-2 sentences)',
  tags: ['Tag1', 'Tag2'],
  content: `
# Main Heading

Your content goes here...
  `,
};
```

### Step 3: Register the Entry

1. Open `entries.ts`
2. Import your new entry at the top:
   ```typescript
   import { entry as entry_2025_10_25 } from './entries/2025-10-25-my-first-entry';
   ```
3. Add it to the entries array:
   ```typescript
   const entries: JournalEntry[] = [
     entry_2025_10_25,
     // ... other entries
   ];
   ```

### Content Formatting

The content field supports basic markdown-style formatting:

- `# Heading` - Level 1 heading
- `## Heading` - Level 2 heading  
- `- Item` - Bullet points
- Regular paragraphs - Just write text

The application will automatically render these with proper styling.

## Tips

- Use descriptive, URL-friendly slugs for the ID
- Keep excerpts concise (under 200 characters)
- Use consistent tagging for better organization
- Date format must be YYYY-MM-DD
- Content will be displayed exactly as written, so use proper spacing

## Available Functions

The `entries.ts` file exports these utility functions:

- `getAllEntries()` - Get all entries sorted by date (most recent first)
- `getEntryById(id)` - Get a specific entry by its ID
- `getRecentEntries(count)` - Get the most recent N entries (default: 4)
- `searchEntries(query)` - Search entries by title, content, or tags

These are automatically used by the Home, Journal Entries, and individual Entry pages.
